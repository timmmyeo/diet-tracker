import React from "react"
import { ThemeProvider,
         Message,
         MessageGroup,
         MessageList,
         MessageText,
        } from '@livechat/ui-kit'
import ChatBubble from "./ChatBubble"
import { Grid, TextField } from "@material-ui/core"

export default function ChatWindow() {

  return (
    <>
    <Grid container>
      
      <Grid item xs={12}>
        <ChatBubble 
          text="Sample message"
          isOwn
        />
      </Grid>

      <Grid item xs={12}>
        <ChatBubble 
          text="Bot response"
        />
      </Grid>
      

    </Grid>

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