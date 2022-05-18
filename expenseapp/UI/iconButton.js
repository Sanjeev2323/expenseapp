import {Pressable,View,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function IconButton({icon,size,color,onPress}){
    return <Pressable onPress={onPress}   style={(pressed)=>pressed && styles.pressed}>
        <View  style={styles.container}>
            <Ionicons name={icon} size={size} color={color}/>
        </View>
    </Pressable>
}

const styles=StyleSheet.create({
    container:{
        borderRadius:24,
        marginHorizontal:8,
        marginVertical:2,
        padding:6
    },
    pressed:{
        opacity:0.75
    }
})

export default IconButton;