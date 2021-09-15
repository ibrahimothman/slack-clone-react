import React, {useContext} from 'react'
import Message from './Message'
import styled from 'styled-components'
import RoomCtx from '../store/RoomContext'

function MessagesList() {

    const roomCtx = useContext(RoomCtx)
    return (
        <MessagesContainer>
            {roomCtx.messages.map(message => <Message key={message.id} message={message}/>)}
        </MessagesContainer>
    )
}

export default MessagesList

const MessagesContainer = styled.div`
`
