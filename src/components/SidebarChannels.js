import React from 'react'
import AddChannel from './AddChannel'
import AddIcon from '@material-ui/icons/Add'
import ChannelsList from './ChannelsList'


function SidebarChannels() {
    return (
        <>
            <AddChannel Icon={AddIcon} title="Add Channel"/>
            <ChannelsList />
        </>

    )
}

export default SidebarChannels
