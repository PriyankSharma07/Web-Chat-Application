import React from 'react'
import Message from '../Message/Message'
import './MessageBox.scss'

const MessageBox = ({chat}) => {
    return (
        <div id='msg-box'>
            {
                chat.Messages.map(message => {
                    return <Message key={message.id}/>
                })
            }
        </div>
    )
} 

export default MessageBox