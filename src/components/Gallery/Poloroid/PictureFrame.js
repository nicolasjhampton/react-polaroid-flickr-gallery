import React from "react";
import styled from "styled-components";

const PictureFrame = props => {
    //const offset = props.width / 18;
    const offset = props.widths.map(width => width / 18);
    const Img = styled.div`
        background: url(${props.image.url});
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0px 0px 50px 10px black;
        overflow: hidden;
        margin: ${offset[0] * (7 / 8)}vw 0 0 ${offset[0]}vw;
        width: 91.5%;
        height: 77%;
        position: relative;
        z-index: -5;
        @media (min-width: 576px) {
            margin: ${offset[1] * (7 / 8)}vw 0 0 ${offset[1]}vw;
        }
        @media (min-width: 1024px) {
            margin: ${offset[2] * (7 / 8)}vw 0 0 ${offset[2]}vw;
        }
        @media (min-width: 1400px) {
            margin: ${offset[3] * (7 / 8)}vw 0 0 ${offset[3]}vw;
        }
    `;

    return <Img />;
};

export default PictureFrame;
