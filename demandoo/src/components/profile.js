import React,{ Component } from 'react';
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
  Alert,
  AsyncStorage,
  ScrollView} from 'react-native';
import Button from '../commons/Button';
import axios from 'axios';
import {Actions } from 'react-native-router-flux';




class Profile extends Component{
  constructor(props){
      super();
         this.state={
       history: [],
       userName:'',
       userCredit:0,
       subscribed:false,
       userEmail:'',
    userId:'',
    subURL:'',
    oldPassword:'',
    newPassword:'',
    expanded:false,
  }

  }
    componentWillMount(props){
       this.setState({history: this.props.essays,
                      userName : this.props.user.profile.name,
                      userCredit : this.props.user.credit,
                      userEmail: this.props.user.email,
                      userId: this.props.user._id,
                      subURL: 'https://demandoo.net/mobile-subscription/' + this.props.user.email + '/' + this.props.user._id,
                     })
        if(this.props.user.subscribed == 1){
            this.setState({subscribed:true})
        }else{
            this.setState({subscribed:false})
        }
    }

    switchChange = (value)=>{
        console.log(this.props.user)
       this.setState({subscribed:value})
        AsyncStorage.getItem('user',(err,user)=>{
            var parsedUser = JSON.parse(user);
            if (parsedUser.subscribed == 1){
                parsedUser.subscribed = 0;
                AsyncStorage.setItem('user',JSON.stringify(parsedUser));
            }else{
                 parsedUser.subscribed = 1;
                AsyncStorage.setItem('user',JSON.stringify(parsedUser));
            }
        })
       axios.get(this.state.subURL)
       .then(()=>{

      })

    }
    onPasswordChange(password){
        this.setState({oldPassword:password})
    }
  onNewPasswordChange(password){
        this.setState({newPassword:password})
    }
changePassword(){
    axios.post('https://demandoo.net/mobile-update-password',{userId:this.state.userId,oldPassword:this.state.oldPassword,newPassword:this.state.newPassword})
    .then( message => {
        Alert.alert(message.data.msg);
        this.setState({oldPassword:'',newPassword:''})
    });
}
expandedStateChange(){
  if(this.state.expanded){
    this.setState({expanded:false})
  }else{
    this.setState({expanded:true})
  }

}
showPasswordForm(){

  if(this.state.expanded){

  return(
    <View>
    <TextInput secureTextEntry
               placeholder='Old Password'
               style={styles.inputStyle}
               onChangeText={this.onPasswordChange.bind(this)}
               value={this.state.password}/>
    <TextInput secureTextEntry
               placeholder='New Password'
               style={styles.inputStyle}
               onChangeText={this.onNewPasswordChange.bind(this)}
               value={this.state.newPassword}/>
    <Button btnLabel={'Update Password'} btnColor={'#a26eef'} onPress={this.changePassword.bind(this)}/>
    </View>
)  }else{

}
}
logout(){
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('sentences');
  Actions.login()
}
    render(){
          const { topContainer, profileTop,imgStyle,nameStyle,topText,inputStyle } = styles;
    return (

        <ScrollView >

        <View style={topContainer}>
        <View style={profileTop}>
        <Image source={require('../imgs/mascot.png')}  style={imgStyle} />

        </View>
        <View style={topText}>
            <Text style={{fontSize:25}}>{this.state.userName}</Text>
            <Text >D币：{this.state.userCredit}</Text>
        </View>
        </View>

        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,padding:10,borderStyle:'solid',borderColor:'#ccc',borderWidth:0.5,backgroundColor:'white'}}>
        <Text style={{fontSize:16}}>Email Notification</Text>
        <Switch
                value={this.state.subscribed}
                onValueChange={(value)=>{
                               this.switchChange(value)
                              }}/>
        </View>
        <View style={{marginTop:10,padding:10,borderStyle:'solid',borderColor:'#ccc',borderWidth:0.5,backgroundColor:'white'}}>
        <Text style={{fontSize:16}} onPress={this.expandedStateChange.bind(this)}>Change Password:</Text>
        {this.showPasswordForm()}

</View>
            <View style={{alignSelf:'stretch',backgroundColor:'white',marginTop:10}}>
              <TouchableOpacity onPress={()=>{ Actions.terms()}} style={{borderColor:'#ccc',borderStyle:'solid',borderWidth:0.5,padding:10}}>
              <Text style={{fontSize:16,}}>Terms Of Use</Text>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ Actions.about()}} style={{borderColor:'#ccc',borderStyle:'solid',borderWidth:0.5,borderTopWidth:0,padding:10}}>
              <Text style={{fontSize:16,}}>About</Text>
              </TouchableOpacity>
            </View>
<Button btnLabel={'退出账号'} btnColor={'#d60053'} onPress={this.logout.bind(this)}/>
</ScrollView>


);
}
};

const styles = {
  topContainer:{
      height:85,
      margin:10,
      flexDirection:'row',
      backgroundColor:'white',
      marginLeft:0,
      marginRight:0,
      marginTop:20,
      borderStyle:'solid',
      borderColor:'#ccc',
      borderWidth:0.5
    },
    profileTop:{
      flex:1
  },
    imgStyle:{
        resizeMode:'contain',
        width:100,
        marginTop:-125

    },
    nameStyle:{
        fontSize:16,
        marginTop:-130,
        textAlign:'center'

    },
    topText:{
        flex:2
    },
    inputStyle:{
    height:40,
    alignSelf:'stretch',
    margin:10,
    }
}
export default Profile;
