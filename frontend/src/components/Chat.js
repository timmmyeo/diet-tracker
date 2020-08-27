import React from "react"
import { ThemeProvider,
         Message,
         MessageGroup,
         MessageList,
         MessageText,
        } from '@livechat/ui-kit'

export default function Chat() {
  const [theme, setTheme] = React.useState(
    {
      "Message": {
        "css": {
          "fontFamily": "roboto"
        }
      },
      "MessageText": {
        "css": {
          "borderRadius": "25px",
        }
      }
    }
  )
  return (
    <>
    <ThemeProvider theme={theme}>
      <MessageList active>
        <MessageGroup
          avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
          onlyFirstWithMeta
        >
          <Message authorName="You" isOwn deliveryStatus="seen">
            <MessageText style={
              {
                "color": "#fff",
                "background": "#AA8BD2"
              }
            }>This is some example text!</MessageText>
          </Message>

          <Message authorName="Bot">
            <MessageText style={
              {
                "color": "#fff",
                "background": "#808080"
              }
            }>The bot's response goes here</MessageText>
          </Message>
        </MessageGroup>
      </MessageList>
    </ThemeProvider>
    </>
  )
}