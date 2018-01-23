import React,{ Component } from 'react';
import { Text,Image,View,ActivityIndicator,AsyncStorage } from 'react-native';
import {Actions } from 'react-native-router-flux';
import Video from 'react-native-video';



class Welcome extends Component{
  componentWillMount(){
      
      this.start = setTimeout(()=>{
           const user = AsyncStorage.getItem('user',(err,user)=>{
      if(user){

    Actions.tabBar({user:JSON.parse(user)})
      }else{
          Actions.login()
      }
  });
      },3000)

  }

    render(){
           const {parentStyle,logoStyle,textStyle,textBottom} = styles;
    return (
        <View style={{flex:1}}>
        <View style={parentStyle}>
            <Image style={logoStyle}source={require('../imgs/mascot.png')}>

            </Image>



        <ActivityIndicator style={{marginTop:-100}} color={'#a26eef'}/>
        <Image style={[logoStyle,{marginTop:-50}]}source={require('../imgs/logo-footer-black.png')}>

            </Image>
            <Text style={{marginTop:-70}}>你的语言好伴</Text>

        </View>
            <View style={{alignItems:'center',backgroundColor:'white',bottom:0}}><Text style={textBottom}>Copyright© Demandoo</Text></View>
        </View>
);
}
};

const styles = {
    parentStyle:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white'

    },
    logoStyle:{
        width:100,
        resizeMode:'contain'
    },
    textStyle:{
        fontSize:30,
        marginTop:-50,

    },
    textBottom:{
        fontSize:10,
        color:'#ccc',
    }
}
export default Welcome;
