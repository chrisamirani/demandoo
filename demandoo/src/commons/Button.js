import React from 'react';
import { TouchableOpacity, Text} from 'react-native';

const Button = ({btnLabel,onPress,btnColor,btnNewStyle}) => {
    const { btnStyle, btnText} = styles;
    return(
        <TouchableOpacity onPress={onPress}  style={[btnStyle,{borderColor:btnColor},btnNewStyle]}>
        <Text style={[btnText,{color:btnColor}]} >{btnLabel}</Text>
        </TouchableOpacity>
        );
}

const styles = {
    btnStyle:{
       backgroundColor:'transparent',
       padding:12,
       alignSelf:'stretch',
       alignItems:'center',
        borderRadius:5,
        margin:10,
        borderWidth:1

    },
    btnText:{
        fontSize:20

    }
}

export default Button;
