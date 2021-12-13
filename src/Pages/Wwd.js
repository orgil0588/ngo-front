import React from 'react'
import Navbar from "../Components/Navbar"
import Container from "../Components/Container"
import WhatWeDo from '../Components/WhatWeDo'
function Wwd(props) {
    return (
        <Container>
            <Navbar/>
            <WhatWeDo hidden="hidden"/>
        </Container>
    )
}

export default Wwd
