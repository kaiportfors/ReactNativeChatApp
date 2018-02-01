import React , {Component} from 'react';
import {View, Text,} from 'react-native';
import {GiftedChat,}  from 'react-native-gifted-chat';

class Chat extends Component {
  state = {
    messages : []
  };

 render() {
   return (
     <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          // send message to backend
        }}
        user={{
          _id: 1,
        }}
      />
   );
 }
}

export default Chat;
