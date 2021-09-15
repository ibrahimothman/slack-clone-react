import React, {useContext} from 'react'
import SidebarOption from './SidebarOption'
import RoomCtx from '../store/RoomContext'
function AddChannel({ Icon, title }) {

    const roomCtx = useContext(RoomCtx)

    const clickHandler = () => {
        const channelName = prompt('please enter the channel name')
        if (channelName) {
            roomCtx.addRoom(channelName)
        }
    }
    return (
        <SidebarOption Icon={Icon} title="Add Channel" onClick={clickHandler}/>
    )
}

export default AddChannel
