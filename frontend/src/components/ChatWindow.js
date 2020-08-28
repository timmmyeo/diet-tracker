import React, { useState, useEffect, useContext } from "react"
import { ThemeProvider,
         Message,
         MessageGroup,
         MessageList,
         MessageText,
        } from '@livechat/ui-kit'
import ChatBubble from "./ChatBubble"
import { Grid, TextField } from "@material-ui/core"
import * as firebase from 'firebase';
import 'firebase/firestore';
import { UserContext } from "../UserProvider"



export default function ChatWindow(props) {
  const user = useContext(UserContext)
  const db = firebase.firestore();

  const [messages, setMessages] = useState([
    {
      id: 1,
      data: {
        message: "Loading data...",
        isOwn: false
      }
    }
  ])

  let messageComponents = messages.map(msg => {
    return (
      <Grid key={msg.id} item xs={12}>
        <ChatBubble 
          text={msg.data.message}
          isOwn={msg.data.isUser}
        />
      </Grid>
    )
  })
  // let messageComponents = <h1>Loading...</h1>;

  useEffect(() => {
    let unsubscribe = () =>{}
    if (user) {
      console.log("We are reading!")
      const chatCollection = db.collection("users").doc(user.uid).collection("chat").orderBy("timestamp");
      unsubscribe = chatCollection.onSnapshot(snap => {
        const data = [];
        snap.forEach(doc => {
          data.push({id: doc.id, data: doc.data()});
        })
        setMessages(data);
      });
      console.log("We have finished reading!");
    }
    else {
      console.log("Loading data...");
    }

    // messageComponents = messages.map(msg => {
    //   return (
    //     <Grid key={msg.id} item xs={12}>
    //       <ChatBubble 
    //         text={msg.data.message}
    //         isOwn={msg.data.isUser}
    //       />
    //     </Grid>
    //   )
    // })

    return () => unsubscribe();
  }, [user]);

  // if (user) {
    
    
    
  //   let tempState = []
  //   chatCollection.orderBy("timestamp").onSnapshot(function(querySnapshot) {
  //     querySnapshot.forEach(function(msg) {
  //         tempState.push({id: msg.id, data: msg.data()})
  //     });
  //     setMessages(tempState);
  // });
  // } 
  

  function Add() {
    const currTime = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("users").doc(user.uid).collection("chat").add({
      isUser: false,
      message: "Test Message",
      timestamp: currTime,

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.log("Error adding document: ", error);
    });
  }

  function AddUser() {
    const currTime = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("users").doc(user.uid).collection("chat").add({
      isUser: true,
      message: "hiii :)",
      timestamp: currTime,

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.log("Error adding document: ", error);
    });
  }

  return (
    <>
    <Grid container>
      {messageComponents}
      <Grid item xs={12}>
        <button onClick={Add}>Generate bot response!</button>
        <button onClick={AddUser}>Generate user response!</button>
      </Grid>
      <Grid item xs={12}>
      
        <form noValidate autoComplete="off">
          <TextField 
            // style={{position: "static", bottom:"0px"}}
            fullWidth 
            id="outlined-basic" 
            label="Enter a message..." 
            variant="outlined" />
        </form>
      </Grid>
    </Grid>
    

    
    </>
  )
}