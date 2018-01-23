import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component{
    componentWillMount(){
      
    }
    componenetDidMount(){
        
    }
    render(){
        return(
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
            
            <Router/>
        
        </Provider>
        
        );
    }
}

export default App;