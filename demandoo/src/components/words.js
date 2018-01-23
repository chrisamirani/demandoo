import React,{ Component } from 'react';
import { View, Text,TextInput,ScrollView,FlatList,AsyncStorage} from 'react-native';
import {Vocab} from '../commons/vocab';
import Button from '../commons/Button'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


class Words extends Component{

  constructor(){
      super();
         this.state={

       pos:0,
       sentences:[],
       newSentence:''
  }

  }
componentWillMount(){
  const sentences = AsyncStorage.getItem('sentences',(err,sentences)=>{
if(sentences){
this.setState({sentences:JSON.parse(sentences)})

}else{
 this.setState({sentences:[]})
}
});
  let rndNumber = Math.floor((Math.random() * Vocab.length) + 0);
  this.setState({pos:rndNumber})
}


addSentence(){
  var sentences = this.state.sentences;
  sentences.push({key:this.state.newSentence})
  this.setState({sentences:sentences});
  AsyncStorage.setItem('sentences',JSON.stringify(this.state.sentences));
  this.setState({sentences:sentences})
  this.setState({newSentence:''})
}
onSentenceChange(sentence){
  this.setState({newSentence:sentence})
}
    nextWord(){
      if(this.state.pos < Vocab.length){

      let pos = this.state.pos;
      this.setState({pos: pos + 1})
    }
    }
    lastWord(){
      if(this.state.pos > 0){

      let pos = this.state.pos;
      this.setState({pos: pos - 1})
}
    }

    renderWord(){
      return (

        <View style={{alignSelf:'stretch',
        alignItems:'center',
        height:200,
        justifyContent:'center',
        backgroundColor:'#ffffffb3',
        borderRadius:5,
        padding:5,
        marginBottom:10}}>
        <Text style={{fontSize:50}}>{Vocab[this.state.pos].word}</Text>
        <Text style={{fontSize:15}}>{Vocab[this.state.pos].def}</Text>
        </View>
);
    }
    render(){
      const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };
    return (

<View style={{flex:1,backgroundColor:'white'}}>
      <GestureRecognizer
        onSwipeLeft={this.nextWord.bind(this)}
        onSwipeRight={this.lastWord.bind(this)}
        config={config}
        style={{
          flex: 1,
          padding:10
        }}
        >

        {this.renderWord()}

      </GestureRecognizer>
      <Text style={{padding:10,fontSize:20}}>My Sentences:</Text>
      <FlatList
  data={this.state.sentences}
  renderItem={({item}) => <View style={{borderStyle:'solid',borderColor:'#ccc',borderBottomWidth:0.5}}><Text style={{padding:10}}>{item.key}</Text></View>}
/>
      <View style={{height:40,alignSelf:'stretch',bottom:0,flexDirection:'row',borderStyle:'solid',borderTopWidth:0.5,borderColor:'#ccc'}}>
      <TextInput placeholder='Write a sentence...' style={{flex:4,padding:5}} onChangeText={this.onSentenceChange.bind(this)}
      value={this.state.newSentence}/>
      <Button btnLabel={'Send'} btnColor={'#a26eef'} btnNewStyle={{borderRadius:0,margin:0,padding:8,borderWidth:0}} onPress={this.addSentence.bind(this)}/>
      </View>
</View>
);
}
};

export default Words;
