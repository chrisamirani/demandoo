import React,{ Component } from 'react';
import { Text,View,TextInput,AsyncStorage,ImageBackground } from 'react-native';
import Button from '../commons/Button';
import axios from 'axios';
import {Actions } from 'react-native-router-flux';




class Signup extends Component{
  constructor(props){
      super();
         this.state={

       userName:'',
       email:'',
       password:'',
       confirmPassword:'',
       loading:false,
       error:''
  }

  }
  onNameChange(name){
    this.setState({userName:name})
  }
  onEmailChange(email){
    this.setState({email:email})
  }
  onPasswordChange(password){
    this.setState({password:password})
  }
  onConfirmPasswordChange(confirmPassword){
    this.setState({confirmPassword:confirmPassword})
  }
  renderButton(){
      if(this.state.loading){
        return <Button btnLabel={'正在注册'} btnColor={'#a26eef'}/>;
      }else{
      return <Button btnLabel={'注册'} onPress={this.onButtonPress.bind(this)} btnColor={'#a26eef'}/>;
      }
  }
  onButtonPress(){
    this.setState({loading:true})
    axios.post('http://192.168.3.103:3000/mobile-signup',{email:this.state.email,password:this.state.password,name:this.state.userName})
    .then( user => {
        if(user.data.user){

        AsyncStorage.setItem('user',JSON.stringify(user.data.user));
        Actions.tabBar({user:user.data.user});
        }else{
           this.setState({error:user.data.msg,loading:false})
        }
    });
  }
    render(){
        const { inputStyle, containerStyle, btnStyle, btnText,imgStyle,formContainer } = styles;
    return (
      <View style={{flex:1}}>
      <ImageBackground style={{flex:1,alignSelf:'stretch'}} blur={5} source={require('../imgs/signup.jpg')}>
      <View style={{padding:10,alignItems:'center',marginTop:280}}>

              <TextInput placeholder='用户名'
                         style={inputStyle}
                         onChangeText={this.onNameChange.bind(this)}
                         value={this.props.userName}
                         autoCorrect={false}/>
              <TextInput placeholder='邮箱地址'
                         style={inputStyle}
                         onChangeText={this.onEmailChange.bind(this)}
                         value={this.props.email}
                         autoCorrect={false}/>
              <TextInput secureTextEntry
                         placeholder='密码'
                         style={inputStyle}
                         onChangeText={this.onPasswordChange.bind(this)}
                         value={this.props.password}/>
              <TextInput secureTextEntry
                         placeholder='确认密码'
                         style={inputStyle}
                         onChangeText={this.onConfirmPasswordChange.bind(this)}
                         value={this.props.confirmPassword}/>

               <Text style={{backgroundColor:'transparent'}} >点注册您同意我们的<Text style={{color:'blue'}} onPress={()=>{Actions.terms()}}>使用规律</Text></Text>
               <Text style={{color:'red',backgroundColor:'transparent'}} > {this.state.error}</Text>
              {this.renderButton()}


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
  marginTop:5,
  fontSize:18,borderLeftColor:'#a26eef',borderStyle:'solid',borderLeftWidth:1,borderRadius:10,padding:3
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
}
export default Signup;
