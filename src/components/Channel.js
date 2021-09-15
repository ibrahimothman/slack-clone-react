import React, {useContext} from 'react'
import SidebarOption from './SidebarOption'
import RoomCtx from '../store/RoomContext'

function Channel({ room }) {
    const roomCtx = useContext(RoomCtx)

    const clickHandler = () => {
        roomCtx.setSelectedRoom(room)
    }
    return (
        <SidebarOption title={room.name} onClick={clickHandler}/>
    )
}

export default Channel
