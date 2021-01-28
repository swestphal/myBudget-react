import React from 'react'
import { Header } from 'semantic-ui-react';
function MainHeader({ title, type = "h1" }) {

    return (
        <div>
            <Header as={type}>{title}</Header>
        </div>
    )
}

export default MainHeader
