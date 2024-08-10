import styled from "styled-components";

import { useCallback } from "react";

// Medium Query
import { useMediaQuery } from "@/Common/useMediaQuery";

/* Components ---------------------------*/
import Header from "./Header/Header.jsx";
import Footer from "./Footer.jsx";

import Background from "./Background.jsx";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



const PagesLayout = () => {
    const navigate = useNavigate();
    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
        // call api or anything
        if(!isLoaded){
            navigate('/splash');
            setLoad(true);

        }
    });
    return (
        <PagesLayoutStyled className="PagesLayout">

            <Header />

                <main>
                    <Background />
                </main>
            <Footer />

        </PagesLayoutStyled>
    );
};

export default PagesLayout;

const PagesLayoutStyled = styled.div`
    main {
        // this is where the background color is
        color: white;

        min-height: 600px;
        .Inset {
            padding: 50px 10px;
        }
    }

`;
