import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import AppsIcon from '@material-ui/icons/Apps'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CreateIcon from '@material-ui/icons/Create'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption'
import SidebarChannels from './SidebarChannels'

function Sidebar() {
    return (
        <SideBarWrapper>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>IBRA PAPA</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Ibrahim Karim
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>

            <SideBarOptions>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
                <SidebarOption Icon={DraftsIcon} title="Saved items"/>
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
                <SidebarOption Icon={AppsIcon} title="Apps"/>
                <SidebarOption Icon={FileCopyIcon} title="File browser"/>
                <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
                <hr />
                <SidebarChannels />

            </SideBarOptions>
        </SideBarWrapper>
    )
}

export default Sidebar

const SideBarWrapper = styled.div`
    background-color: var(--slack-color);
    max-width: 260px;
    flex: 0.3;
    color: white;
    overflow-y: auto;

`

const SideBarHeader = styled.div`
    display: flex;
    border-top: 0.1px solid gray;
    padding: 10px;
    margin-top: 60px;
    justify-content: space-between;
    align-items: center;

    > .MuiSvgIcon-root {
        padding: 4px;
        background-color: white;
        border-radius: 50%;
        color: black;
    }
`

const SideBarInfo = styled.div`
    > h2 {
        font-size: 15px;
        margin-bottom: 5px;
    }

    > h3 {
        font-size: 13px;
        font-weight: 400;
        display: flex;
        align-items: center;

        > .MuiSvgIcon-root {
            font-size: 14px;
            color: green;
            margin-right: 2px;
        }

    }
`

const SideBarOptions = styled.div`
    border-top: 0.1px solid gray;

    > hr {
        border: 0.1px solid gray;
        margin: 10px 0;
    }
`
