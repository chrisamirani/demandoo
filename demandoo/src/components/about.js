import React,{ Component } from 'react';
import {Text,View,Image,ScrollView} from 'react-native';





class About extends Component{

    render(){
    const {textBody,textTitle,imgStyle} = styles;
    return (
      <ScrollView>
      <View style={{flex:1,padding:10}}>
        <Text style={textBody}>Demandoo is a platform designed for those who are working hard on there English language skills for reasons of immigration, study abroad
        ,travel etc. With various tools on Demandoo, you'll be able to enhance your language skills specially in writing and grammar. Our platform uses
        different technologies to better improve your ability to practice and learn at the same time.</Text>
        <Text style={textBody}>Our mission is to provide a free platform that gives the opportunity of a better education to everyone and a language learning platform
        is just the start of a much longer journey.</Text>
        <Text style={textBody}>We aim to make a better use of Artificial Intelligence in education the way it hasn't been done. We believe an AI powered education is the
        solution for our current errors in teaching and that AI is going to make learning a much more intuitive experince for every individual.</Text>
        <Text style={textTitle}>Blog</Text>
        <Image source={require('../imgs/ss-blog.png')} style={imgStyle}></Image>
        <Text style={textBody}>On the Blog page, you'll find some daily reading materials from all over the web. These will include topics like education,entertainment,
        nature,food and lots of other interesting and informative articles.</Text>
        <Text style={textTitle}>Essays</Text>
        <Image source={require('../imgs/ss-essays.png')}  style={imgStyle}></Image>
        <Text style={textBody}>This is where you can read and like essays written by other users. All essays are original writings of each student so you'll
        see a variety of styles of writing. Feel free to imitate them but give them a heart if you do.</Text>
        <Text style={textBody}>We think commenting of essays should be constructive, so in order to avoid short comments, we have not integrated this function in our App.
        However if you are interested to comment more on essays, feel free to use our website to do so.</Text>
        <Text style={textTitle}>Chatter Box</Text>
        <Image source={require('../imgs/ss-chat.png')} style={imgStyle}></Image>
        <Text style={textBody}>Honestly, our Chatter Box is pretty cool. Not only can you find other English learners to chat with, you can also check your grammar
        for errors.All you need to do is to add "Demandoo" to the begining of your sentence and if your sentence has a grammar mistake, our Chatter Box
        will tell you.</Text>
        <Text style={textTitle}>Vocabulary</Text>
        <Image source={require('../imgs/ss-chat.png')} style={imgStyle}></Image>
        <Text style={textBody}>We have hand-picked around 1000 words for you to learn.</Text>

        </View>
        </ScrollView>
);
}
};

const styles = {
textBody:{
  padding:10
},
textTitle:{
  fontSize:40,
  paddingTop:20,
  paddingLeft:10
},
imgStyle:{
    resizeMode:'contain',
    width:350,
    marginTop:-350,
    marginBottom:-350,
    padding:10
}
}
export default About;
