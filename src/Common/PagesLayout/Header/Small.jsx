import { useState } from "react";
import styled from "styled-components";

/* Components ---------------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";
import Hamburger from "./Hamburger.jsx";
import SmallMainMenu from "./SmallMainMenu.jsx";

const Small = () => {
    const [showMenu, showMenuUpdate] = useState(false);

    const toggle = () => {
        showMenuUpdate(!showMenu);
    };

    const hideMenu = () => {
        showMenuUpdate(false);
    };

    const handleButtonClick = () => {
        // Logic to execute when a button is clicked
        console.log("Button clicked from child component");
        hideMenu();
    };

    return (
        <SmallStyled>
            <Hamburger toggle={toggle} />
            <SiteLogo />

            {showMenu && (
                <MainMenu isLargeEnough={false} handle={handleButtonClick} />
            )}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        display: flex;
        align-items: center;
        padding: 20px;
        max-width: 330px;
    }
    nav{
        position:absolute;
        bottom:0;
        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;
        background-color:rgb(0,0,0,.35);
        border-radius:10px;


    }



`;
