import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";
import Navbar from "./Navbar.jsx";
import { Button, Icon } from 'semantic-ui-react'
import React, { useRef, useState, useEffect } from 'react';
const MediumLarge = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      }
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="menus">
                        <MainMenu isLargeEnough={true}></MainMenu>
                    </div>
                    <div className="logo">
                        <SiteLogo />
                    </div>

                </div>
            </Inset>

            <div className='scrollUp'>
                {/* this is where the button of sticky goes to  */}
                <Button circular icon='angle up' size='massive' color='teal' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
            </div>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.div`
    color: white;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
            padding-bottom: 300px;

        }
    }
    .menus{
        justify-content:end;
        float: right;
        padding-top:10%;

        width: 25%;

    }

    nav {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;


            text-align: center;
            font-size: 14px;
            opacity: 1;
            color: #00246B;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #00246B;

            }
        }
    }
    .scrollUp{
        position: fixed;
        bottom:10%;
        right:5%;

    }

`;
