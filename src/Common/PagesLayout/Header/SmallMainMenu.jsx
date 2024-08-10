import styled from 'styled-components';
import PropTypes from "prop-types";

const SmallMainMenu = () => {
    return (
    <SmallMainMenuStyled>
        <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
        </ul>
    </SmallMainMenuStyled>);
}

export default SmallMainMenu;


const SmallMainMenuStyled = styled.div`
    background-color:red;
    position:absolute;
    bottom:0;

    ul{
        display: inline-block;
        list-style-type: none;
    }

        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;

`;