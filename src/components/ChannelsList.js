import React, {useContext} from 'react'
import Channel from './Channel'
import RoomCtx from '../store/RoomContext'

function ChannelsList() {

    const roomCtx = useContext(RoomCtx)
    return(
        <>
            {roomCtx.rooms.map((room) => <Channel key={room.id} room={room}/>)}
        </>
    )

}

export default ChannelsList
