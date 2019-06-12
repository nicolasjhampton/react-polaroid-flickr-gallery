import React, { Component } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import poloroid from "./poloroid_frame.jpg";

class Navigation extends Component {
    render() {
        const Div = styled.div`
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 10;
            width: 100%;
        `;
        const GalleryNavLink = styled(NavLink)`
            display: flex;
            z-index: 10;
            align-items: center;
            justify-content: center;
            font-family: 'Permanent Marker', cursive;
            text-align: center;
            text-decoration: none;
            color: white;
            font-size: larger;
            background: url(${poloroid}) center;
            background-size: 100%;
            height: 145px;
            width: 120px;
            margin-top: 20px;
            @media(min-width: 726px) {
                margin-top: 15px;
            }
        `;
        return (
            <Div>
                <GalleryNavLink activeStyle={{ color: "red" }} to="/fewd-project-11/sunsets">
                    Sunsets
                </GalleryNavLink>
                <GalleryNavLink activeStyle={{ color: "red" }} to="/fewd-project-11/balloons">
                    Balloons
                </GalleryNavLink>
                <GalleryNavLink activeStyle={{ color: "red" }} to="/fewd-project-11/puppies">
                    Puppies
                </GalleryNavLink>
            </Div>
        );
    }
}

export default Navigation;
