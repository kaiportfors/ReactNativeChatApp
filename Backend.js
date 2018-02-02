import firebase from 'firebase';

class Backend {
  uid = '';
  messagesRef = null;
  // Initialize Firebase
 constructor() {
   firebase.initializeApp({
    apiKey: "AIzaSyC3kO0UmbdHXK9bKmOz8EkRDUXKNR6EAeg",
    authDomain: "chatapptest-27d92.firebaseapp.com",
    databaseURL: "https://chatapptest-27d92.firebaseio.com",
    projectId: "chatapptest-27d92",
    storageBucket: "chatapptest-27d92.appspot.com",
    messagingSenderId: "704370279214"
  });
  firebase.auth().onAuthStateChanged((user) => {
if (user) {
  this.setUid(user.uid);
} else {
firebase.auth().signInAnonymously().catch((error) => {
  alert(error.message);
});
  }
});
}

setUid(value) {
  this.uid = value;
}

getUid() {
  return this.uid;
}

// retrieve the messages from the Backend
loadMessages(callback) {
  this.messagesRef = firebase.database().ref('messages');
  this.messagesRef.off();
  const onReceive = (data) => {
    const message = data.val();
    callback({
      id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.user_id,
        name: message.user.name,
      },
    });
  };
this.messagesRef.limitToLast(20).on('child_added', onReceive);
}

sendMessage(message) {
  for(let i = 0; i < message.length; i++) {
    this.messagesRef.push({
      text: message[i].text,
      user: message[i].user,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
  }
}

closeChat(){
  if(this.messagesRef){
    this.messageRef.off();
  }
}
}

export default new Backend();
