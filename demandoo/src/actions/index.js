import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {Actions } from 'react-native-router-flux';
export const emailChanged = (text) =>{
    return {
        type:EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) =>{
    return {
        type:PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email,password}) =>{
    return(dispatch) =>{
        dispatch({type: LOGIN_USER });

    axios.post('https://demandoo.net/mobile-login',{email:email,password:password})
    .then( user => {
        if(user.data.user){
        dispatch({type:LOGIN_USER_SUCCESS ,payload:user},Actions.tabBar({user:user.data.user}));
        AsyncStorage.setItem('user',JSON.stringify(user.data.user));
        AsyncStorage.setItem('sentences',JSON.stringify([]));
        }else{
           dispatch({type:LOGIN_USER_FAIL,payload:user});
        }
    });
    }
    }
