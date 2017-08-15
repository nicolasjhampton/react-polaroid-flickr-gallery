import React, { Component } from "react";
import styled from "styled-components";

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props);
        this.props.history.push(`/${event.target.children.search.value}`);
    }

    render() {
        const Form = styled.form`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding-top: 40px;
        `;
        return (
            <Form key="form" onSubmit={this.handleSubmit}>
                <input type="text" name="search" />
            </Form>
        );
    }
}
export default Search;
