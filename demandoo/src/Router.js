import React,{PropTypes} from 'react';
import { Scene, Router, Stack,ActionConst,Actions } from 'react-native-router-flux';
import { TouchableOpacity, Text, StyleSheet,Image,Alert } from 'react-native';
import Login from './components/login';
import Chat from './components/chat';
import Blog from './components/blog';
import Profile from './components/profile';
import Essays from './components/essays';
import Terms from './components/terms';
import About from './components/about';
import Welcome from './components/welcome';
import Signup from './components/signup';
import Words from './components/words';
import {TabIconBlog, TabIconChat, TabIconEssays,TabIconProfile} from './commons/TabIcons'




const RouterComponent = () =>{


    return (
    <Router navigationBarStyle={{backgroundColor:'#a26eef'}}>


        <Stack key="root">

        <Scene key="welcome" component={Welcome} initial hideNavBar/>

        <Scene key="login" component={Login} type={ActionConst.RESET}
        onLeft={()=>{Actions.signup()}}
        leftTitle={'免费注册'}
        leftButtonTextStyle={{color:'white'}}
        titleStyle={{color:'white',}}
        title={'登录'} />
        <Scene key="signup" titleStyle={{color:'white',}} component={Signup} title={'免费注册'} backButtonTextStyle={{color:'white'}} backTitle={'登录'} hideBackImage/>

          <Scene key="tabBar" tabs hideNavBar tabBarStyle={style.tabBarStyle} tabBarPosition={'bottom'} >
           <Scene key="Blog" component={Blog} title={'Blog'} icon={TabIconBlog} titleStyle={{color:'white',}} />
           <Scene key="Essays"
           component={Essays}
           title={'Essays'}
           icon={TabIconEssays}
           titleStyle={{color:'white',}}
           onLeft={()=>{Actions.words()}}
           leftTitle={'词'}
           leftButtonTextStyle={{color:'white',fontSize:20}} />
           <Scene key="Chatter Box" component={Chat} title={'Chatter Box'} icon={TabIconChat}
           onLeft={()=>{  Alert.alert('使用方法','如果需要聊天单中收到语法提示,请在信息开头写“Demandoo”这个关键词');}}
           leftTitle={'?'}
           leftButtonTextStyle={{color:'white',fontSize:20}}
           titleStyle={{color:'white',}} />
           <Scene key="Me" component={Profile} title={'My Profile'} icon={TabIconProfile} titleStyle={{color:'white',}}  />
          </Scene>
          <Scene key="words" component={Words} title={"Essential Words"} titleStyle={{color:'white',}}  />
             <Scene key="about" component={About} title={"About"} titleStyle={{color:'white',}}  />
        <Scene key="terms" component={Terms} title={'Terms Of Use'}  titleStyle={{color:'white',}} />
        </Stack>
</Router>
    );
};

let style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: 'white',
            opacity        : 1,
            alignItems:'center'
        }
    });
export default RouterComponent;
