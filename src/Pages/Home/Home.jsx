import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";

import Slideshow from "./Slideshow/Slideshow";
import AboutMe from './AboutMe/AboutMe.jsx';
import Tabbed from "./Tabbed/Tabbed";
import { React, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const Home = () => {

    return (
        <HomeStyled>
            {/* <a href="https://github.com/JustinAngara">GitHub</a> */}
            <h1>Home</h1>
            <AboutMe />
            <Slideshow />
            <Inset>
                <h1>
                    Welcome
                </h1>
                <Tabbed />
            </Inset>

        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
    ReactPlayer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;
