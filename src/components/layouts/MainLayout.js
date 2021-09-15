import React from 'react'
import './MainLayout.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import styled from 'styled-components'
import { RoomContextProvider } from '../../store/RoomContext'

const MainLayout = ({ children })  => {
    return (
        <RoomContextProvider>
            <Header />
            <AppBody>
                <Sidebar />
                {children}
            </AppBody>
        </RoomContextProvider>
    )
}

export default MainLayout

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`