import React, {useContext, useRef, useEffect} from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import MessagesList from './MessagesList'
import AddMessage from './AddMessage'
import RoomCtx from '../store/RoomContext'

function Chat() {

    const roomCtx = useContext(RoomCtx)


    return (
        <>
            {roomCtx.selectedRoom && (
                <ChatWrapper>
                    <Header>
                        <HeaderLeft>
                            <h4>#{roomCtx.selectedRoom?.name}</h4>
                            <StarBorderIcon />
                        </HeaderLeft>

                        <HeaderRight>
                            <p>
                                <InfoIcon /> Details
                            </p>
                        </HeaderRight>
                    </Header>

                    <MessagesList />
                    <AddMessage />
                </ChatWrapper>
            )}
        </>
    )
}

export default Chat

const ChatWrapper = styled.div`
    flex: 0.7;
    margin-top: 70px;
    overflow-y: auto;
    flex-grow: 1;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid lightgray;
    align-items: center;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        text-transform: lowercase;
        margin-right: 10px;
        display: flex;
        align-items: center;
    }

    > .MuiSvgIcon-root {
        font-size: 18px;
    }
`

const HeaderRight = styled.div`
    display: flex;

    > p {
        display: flex;
        align-items: center;

        > .MuiSvgIcon-root {
            font-size: 18px;
            margin-right: 5px;
        }
    }
`
