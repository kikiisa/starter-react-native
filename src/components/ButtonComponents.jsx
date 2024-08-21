import React from 'react';
import { Button,StyleSheet,TouchableOpacity,Text } from 'react-native';
import Preset from "../../utils/style.json"
const ButtonComponents = (props) => {
    return (
        <TouchableOpacity style={style.buttonCustome} activeOpacity={1}>
            <Text style={style.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    buttonCustome:{
       borderRightWidth:3,
       borderTopWidth:3,
       borderBottomWidth:3,
       borderRadius:5,
       borderColor:"black"
    },
    buttonText:{
        padding:10,
        backgroundColor:Preset.primary,
        color:"white",
        fontWeight:"bold",
        letterSpacing:1,
    }    
})



export default ButtonComponents;
