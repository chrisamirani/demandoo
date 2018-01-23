import React from 'react';
import { Image,StyleSheet } from 'react-native';

export const TabIconBlog = (props) =>{
    return(
   <Image source={props.focused ? require('../imgs/BLOG-SELECTED.png'):require('../imgs/BLOG.png')} style={style.tabBarIcon} />
    );
}
export const TabIconChat = (props) =>{
    return(
   <Image source={props.focused ? require('../imgs/CHAT-SELECTED.png'):require('../imgs/CHAT.png')} style={style.tabBarIcon} />
    );
}
export const TabIconProfile = (props) =>{
    return(
   <Image source={props.focused ? require('../imgs/ME-SELECTED.png'):require('../imgs/ME.png')} style={style.tabBarIcon} />
    );
}
export const TabIconEssays = (props) =>{
    return(
   <Image source={props.focused ? require('../imgs/ESSAYS-SELECTED.png'):require('../imgs/ESSAYS.png')} style={style.tabBarIcon} />
    );
}

let style = StyleSheet.create({
        tabBarIcon: {
            resizeMode:'contain',
            width:32
        }
    });