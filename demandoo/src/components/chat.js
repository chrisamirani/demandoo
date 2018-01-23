import React,{ Component } from 'react';
import ReactNative from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';





class Chat extends Component{
    state = {
    messages: [],
  };
      constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user:{_id: this.props.user._id,
         name: this.props.user.profile.name
         }

};

    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket = SocketIOClient('https://demandoo.net');
    this.socket.on('chat', this.onReceivedMessage);

      }

onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages=[]) {
    this.socket.emit('chat', messages[0]);

}

    render(){

    return (
        <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{_id: this.props.user._id,
         name: this.props.user.profile.name
         }}
        />
);

}
  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
}

const styles = {

}
export default Chat;
