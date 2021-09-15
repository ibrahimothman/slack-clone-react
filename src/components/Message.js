import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'

function Message({ message }) {
    return (
        <MessageContainer>
            <Header>
                <Photo>
                    <Avatar />
                </Photo>
                <Info>
                    <h4>
                    {message.name} <span>{new Date(message.created_at?.toDate()).toUTCString()}</span>
                    </h4>
                    <p>{message.message}</p>
                </Info>
            </Header>
        </MessageContainer>
    )
}

export default Message


const MessageContainer = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 20px 20px;

`

const Header = styled.div`
    display: flex;
    align-items: center;
`
const Photo = styled(Avatar)`
    margin-right: 10px;
`
const Info = styled.div`
    > h4 > span {
        font-size: 12px;
        color: gray;
        font-weight: 400;
        margin-left: 10px;
    }

    > p {

    }
`
