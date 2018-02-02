import React , {Component} from 'react';
import {View, Text,} from 'react-native';
import {GiftedChat,}  from 'react-native-gifted-chat';
import Backend from '../Backend';
import Home from './Home';

class Chat extends Component {
  state = {
    messages : []
  };

componentWillMount(){

}

 render() {
   return (
     <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          // send message to backend
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
      />
   );
 }

componentDidMount() {
  Backend.loadMessages((message) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, message),
      };
    });
  });
}

componentWillUmount(){
  Backend.closeChat();
}
}

export default Chat;
