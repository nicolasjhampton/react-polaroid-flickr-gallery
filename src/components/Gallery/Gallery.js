import React, { Component } from "react";
import styled from "styled-components";
import Poloroid from "./Poloroid";
import photoBox from "./photo-box.png";
import api_key from "./config.js";

const expectResponse = statusCode => {
    return response => {
        if (response.status !== statusCode) {
            return response.reject();
        }
        return response;
    };
};

const getUrl = (base, params) => {
    const url = Object.entries(params).reduce((acc, [key, value]) => {
        acc.searchParams.append(key, value);
        return acc;
    }, new URL(base));
    return url;
};

const getImageUrl = entry => {
    return new URL(
        `./${entry.server}/${entry.id}_${entry.secret}.jpg`,
        `https://farm${entry.farm}.staticflickr.com/`
    ).toString();
};

const callAPI = props => {
    return fetch(
        getUrl("https://api.flickr.com/services/rest/", {
            method: "flickr.photos.search",
            api_key: api_key,
            text: props.match.params.search,
            format: "json",
            nojsoncallback: "1"
        })
    )
        .then(expectResponse(200))
        .then(response => response.json())
        .then(({ photos }) => {
            return photos.photo
                .map(entry => ({
                    url: getImageUrl(entry),
                    desc: entry.title
                }))
                .filter((url, index) => index < 9);
        })
        .catch(err => console.log(err));
};

class Gallery extends Component {

    state = { images: [] }

    componentDidMount() {
        callAPI(this.props).then(images => this.setState({ images }));
        // window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            callAPI(nextProps).then(images => this.setState({ images }));
        }
    }

    // handleScroll = (event) => {
    //     let gallery =
    //         event.srcElement.body.children.root.children.page.children.gallery;
    //     let scrollTop = gallery.scrollTop;
    //     if (scrollTop - window.scrollY < 30) {
    //         console.log(this.props);
    //         debugger;
    //         callAPI(this.props).then(images =>
    //             this.setState({ images: [...this.state.images, ...images] })
    //         );
    //     }
    // }

    render() {
        const Div = styled.div`
            background: url(${photoBox});
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: space-around;
            width: 100%;
            height: 100vh;
            background-position: 0px 0px;
            background-size: 100% 100%;
            background-attachment: absolute;
            background-repeat: no-repeat;
            overflow: scroll;
            padding-top: 220px;
            position: relative;
            z-index: 0;
            @media (min-width: 726px) {
                padding-top: 150px;
            }
        `;
        return (
            <Div id="gallery">
                {this.state.images.map((image, index) =>
                    <Poloroid key={index} image={image} />
                )}
            </Div>
        );
    }
}

export default Gallery;
