import React,{ Component } from 'react';
import { WebView } from 'react-native';





class Terms extends Component{

    render(){

    return (
        <WebView
          source={{uri: 'https://your domain/app-get-tou'}}
          scalesPageToFit={false}
        />
);
}
};

const styles = {

}
export default Terms;
