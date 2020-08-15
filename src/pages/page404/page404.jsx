import React, { Component } from 'react';
import NavBar from './../../components/nav/nav.component'
import Page404 from './../../components/page404/page404'

export class page404 extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Page404 />
            </div>
        )
    }
}

export default page404
