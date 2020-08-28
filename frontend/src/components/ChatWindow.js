import React from "react"
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
  const user = React.useContext(UserContext)
  const db = firebase.firestore();

  const [messages, setMessages] = React.useState([
    {
      isUser: true,
      message: "test1",
    },
    {
      isUser: false,
      message: "Test2 (bot)",
    },
    {
      isUser: false,
      message: "test3"
    },
    {
      isUser:false,
      message: "test4"
    },
    {
      isUser: true,
      message: "test1",
    },
    {
      isUser: true,
      message: "test1",
    },
    {
      isUser: true,
      message: "test1",
    },
  ])

  const messageComponents = messages.map(msg => {
    return (
      <Grid item xs={12}>
        <ChatBubble 
          text={msg.message}
          isOwn={msg.isUser}
        />
      </Grid>
    )
  })

  function Add() {
    alert(user.uid)
    const currTime = firebase.firestore.FieldValue.serverTimestamp();
    db.collection("users").doc(user.uid).collection("chat").add({
      isUser: true,
      message: "Test message",
      timestamp: currTime,

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.log("Error adding document: ", error);
    });
  }
  
  function Read() {
    console.log("We are reading!")
    const chatCollection = db.collection("users").doc(user.uid).collection("chat");
    
    chatCollection.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(msg) {
            // doc.data() is never undefined for query doc snapshots
            console.log(msg.id, " => ", msg.data());
        });
    })
    .catch(function(error) {
      console.log("Some error happened when getting the collection...");
    });
  }

  return (
    <>
    <Grid container>


      
      {messageComponents}
      

    </Grid>
    <button onClick={Add}>Add random information to database</button>
    <button onClick={Read}>Read from database</button>

    <form noValidate autoComplete="off">
        <TextField 
          style={{position: "fixed", bottom:"0px"}}
          fullWidth 
          id="outlined-basic" 
          label="Enter a message..." 
          variant="outlined" />
      </form>
    </>
  )
}