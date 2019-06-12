import React, { Component } from "react";
import styled from "styled-components";

class Search extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(`/${event.target.children.search.value}`);
    }

    render() {
        const Form = styled.form`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        `;
        const Input = styled.input`
            width: 90%;
            border: 5px solid;
            border-radius: 8px;
            height: 24px;
            font-size: 18px;
            &:focus {
                outline: none;
            }
        `;
        const Legend = styled.legend`
            font-family: 'Permanent Marker', cursive;
            font-size: 30px;
        `;
        return (
            <Form key="form" onSubmit={this.handleSubmit}>
                <Legend>Polaroid Flickr</Legend>
                <Input type="text" name="search" />
            </Form>
        );
    }
}
export default Search;
