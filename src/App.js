
import React from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/nav/Nav'
import Form from './pages/form/Form'
import Slide from './pages/slide/Slide'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Slide />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </>
    )
}

export default App