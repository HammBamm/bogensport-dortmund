import styled, {css} from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`
const signInStyles = css`
    background-color: #4285f4;
    color: white;

    &.hover {
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStyles = props => {
    if(props.isSignIn) {
        return signInStyles;
    }
    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles};
`

export const CustomNoButtonContainer = styled.button`
    height: 50px;
    letter-spacing: 0.5px;
    cursor: pointer;
    background-color: white;
    border: 1px solid black;

    will-change: transform;
    transition: transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
    
    &:focus {
        transform: scale(1.1);
    }
`