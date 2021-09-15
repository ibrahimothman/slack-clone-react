import React from 'react'
import './Header.css'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import InfoIcon from '@material-ui/icons/HelpOutlineOutlined'

function Header() {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </HeaderSearch>

            <HeaderRight>
                <InfoIcon />
            </HeaderRight>
        </HeaderWrapper>
    )
}

export default Header


const HeaderWrapper = styled.div`
    padding: 10px 0;
    background-color: var(--slack-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    border: 0.1px solid gray;
    border-radius: 5px;
    padding: 0 50px;
    color: gray;
    display: flex;
    align-items: center;

    > input {
        background-color: transparent;
        border: none;
        outline:none;
        color: white;
        min-width: 30vw;
        text-align: center;
    }
`

const HeaderRight = styled.div`
    flex:0.3;
    display: flex;
    align-items: flex-end;
    margin-right: 30px;

    > .MuiSvgIcon-root {
        margin-left: auto;

    }
`

