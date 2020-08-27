import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"
import { lightBlue } from "@material-ui/core/colors";


// Takes in props text and isOwn
const useStyles = makeStyles((theme) => ({
  bubble: {
    backgroundColor: "lightGrey",
    padding: "10px",
    borderRadius: "25px",
  },
}));

export default function ChatBubble(props) {
  const classes = useStyles();
  
  return (
    <>
      <Typography 
        className={classes.bubble}
        style={props.isOwn && {float: "right", backgroundColor: "purple", color: "white"}}
        display="inline"
        variant="body1"
        
      >
        {props.text}
      </Typography>
    </>
  )
}