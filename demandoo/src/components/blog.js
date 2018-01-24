import React,{ Component } from 'react';
import { View, Text,WebView } from 'react-native';




class Blog extends Component{
      componentWillMount(props){
       console.log(this.props)
    }
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

export default Blog;
