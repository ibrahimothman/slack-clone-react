import React from 'react'
import styled from 'styled-components'

function SidebarOption({ Icon, title, onClick }) {
    return (
        <SidebarOptionContainer onClick={onClick}>
            {Icon && <Icon fontSize="small"/>}
            {!Icon && <span>#</span>}
            <h3>{title}</h3>
        </SidebarOptionContainer>
    )
}

export default SidebarOption


const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    padding: 7px 10px;

    :hover {
        opacity: 0.8;
    }

    >h3 {
        font-weight: 400;
        margin-left: 10px;
    }

    > span {
        font-size: 15px;
        margin-left: 7px;
    }
`
