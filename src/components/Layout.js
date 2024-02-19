import * as React from 'react'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'

const Content = styled.div`
    padding: 1rem;

`
export default function Layout ({children}){
    return (
        <div>
            <Navbar />
            <br></br>
            <Content>
                {children}
            </Content>
            <div className = "footer">
            </div>
        </div>

    )
}