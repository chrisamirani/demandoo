import React,{ Component } from 'react';
import { WebView } from 'react-native';





class Essays extends Component{

    render(){

    return (
        <WebView
          source={{uri: 'Your Domain'}}
          scalesPageToFit={false}
          startInLoadingState={true}
        />
);
}
};

const styles = {

}
export default Essays;
