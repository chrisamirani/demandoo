import React,{ Component } from 'react';
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ImageBackground } from 'react-native';
import Button from '../commons/Button';
import { connect } from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Actions } from 'react-native-router-flux';



class Login extends Component{
    componentWillMount(){

    }
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderButton(){
        if(this.props.loading){
          return <Button btnLabel={'正在登录'} btnColor={'#a26eef'}/>;
        }else{
        return <Button btnLabel={'登录'} onPress={this.onButtonPress.bind(this)} btnColor={'#a26eef'}/>;
        }
    }
    render(){
         const { inputStyle, containerStyle, btnStyle, btnText,imgStyle,formContainer } = styles;
    return (
        <View style={containerStyle}>

<ImageBackground style={{flex:1,alignSelf:'stretch'}} source={require('../imgs/timg.gif')}>
<View style={{padding:10,flex:1,alignItems:'center',}}>

<View style={formContainer} blurRadius={3}>
        <TextInput placeholder='Email'
                   style={inputStyle}
                   onChangeText={this.onEmailChange.bind(this)}
                   value={this.props.email}
                   autoFocus
                   autoCorrect={false}/>
        <TextInput secureTextEntry
                   placeholder='Password'
                   style={inputStyle}
                   onChangeText={this.onPasswordChange.bind(this)}
                   value={this.props.password}/>
         <Text style={{color:'red'}} > {this.props.error}</Text>
        {this.renderButton()}
        </View>

      </View>
      </ImageBackground>
        </View>
);
}
};

const styles = {
    containerStyle:{
        flex:1,
      justifyContent:'center' ,

        padding:0
    },
    inputStyle:{
    height:40,
    alignSelf:'stretch',
    margin:10,
    marginTop:-10,
    fontSize:18,
    },
    btnStyle:{
       backgroundColor:'transparent',
       padding:12,
       width:250,
       alignItems:'center',
        borderRadius:5,
        marginTop:10,
        borderColor:'#a26eef',
        borderWidth:1

    },
    btnText:{
        color:'#a26eef',
        fontSize:20

    },
    imgStyle:{

        resizeMode:'contain',
        width:200,
        marginBottom:-30,


    },
    formContainer:{
      alignSelf:'stretch',
      height:200,
      justifyContent:'center',
      backgroundColor:'#ffffffb3',
      borderRadius:5,
      padding:5,
      marginBottom:40
    }

}

const mapStateToProps = ({auth}) =>{
    const { email, password, error, loading }= auth;
    return{
        email,
        password,
        error,
        loading
    }
}
export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser })(Login);
