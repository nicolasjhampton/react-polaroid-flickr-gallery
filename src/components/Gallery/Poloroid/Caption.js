import React from "react";
import styled from "styled-components";

const Caption = props => {
    const Figcaption = styled.figcaption`
        max-width: 80%;
        word-wrap: break-word;
        margin: 0 auto;
        height: 17%;
        overflow: scroll;
    `;
    const A = styled.a`
        font-family: 'Permanent Marker', cursive;
        text-decoration: none;
        color: black;
        font-size: larger;
    `;
    const H3 = styled.h3`margin: 0;`;

    return (
        <Figcaption>
            <A href={props.image.url}>
                <H3>
                    {props.image.desc}
                </H3>
            </A>
        </Figcaption>
    );
};

export default Caption;
