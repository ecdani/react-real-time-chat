import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDivText = styled.div`
    background: #BBB;
    border: 1px solid grey;
    height: 150px;
    margin: 5px;
    overflow-x: hidden; 
    overflow-y: auto;
    resize: vertical;
    &::-webkit-scrollbar {
        background-color: grey;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;

class DivText extends Component {
    componentDidUpdate(prevProps, prevState){
        if (this.props.children.length !== prevProps.children.length) {
            this.divText.scrollTop = this.divText.scrollHeight;
        }
        
    }

    render() {
        return (
            <StyledDivText innerRef={ (comp) => { this.divText = comp } }>{ this.props.children } </StyledDivText>
        )
    }
}

export default DivText;