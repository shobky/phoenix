
import React from 'react'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import Slide from './pages/slide/Slide'

const App = () => {
    return (
        <>
            <div style={{ zIndex: " 999" }}>
                <Nav />
            </div>
            <Slide />
        </>
    )
}

export default App