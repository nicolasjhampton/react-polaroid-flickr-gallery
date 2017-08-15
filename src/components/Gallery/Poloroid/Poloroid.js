import React from "react";
import styled from "styled-components";
import PictureFrame from "./PictureFrame";
import poloroid from "./poloroid_frame-trans.png";
import Caption from "./Caption";

const Poloroid = props => {
    let cardWidths = [75, 45, 28, 22];
    const widthHeightRatio = 427 / 513;
    const unit = "%";
    const Figure = styled.figure`
        margin-right: 0;
        margin-left: 0;
        width: ${cardWidths[0]}${unit};
        height: ${cardWidths[0] / widthHeightRatio}vw;
        background: url(${poloroid}) no-repeat center;
        background-size: 100%;
        box-shadow: 6px 6px 12px 8px black;
        text-align: center;
        position: relative;
        @media (min-width: 576px) {
            width: ${cardWidths[1]}${unit};
            height: ${cardWidths[1] / widthHeightRatio}vw;
        }
        @media (min-width: 1024px) {
            width: ${cardWidths[2]}${unit};
            height: ${cardWidths[2] / widthHeightRatio}vw;
        }
        @media (min-width: 1400px) {
            width: ${cardWidths[3]}${unit};
            height: ${cardWidths[3] / widthHeightRatio}vw;
        }
    `;

    return (
        <Figure>
            <PictureFrame widths={cardWidths} image={props.image} />
            <Caption image={props.image} />
        </Figure>
    );
};

export default Poloroid;
