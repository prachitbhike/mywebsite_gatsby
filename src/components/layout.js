import * as React from 'react'
import Navbar from './Navbar/Navbar'

export default function Layout ({children}){
    return (
        <div className = "layout">
            <Navbar />
            <br></br>
            <div className = "content">
                {children}
            </div>
            <div className = "footer">
            </div>
        </div>

    )
}