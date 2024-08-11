import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

import React, { useRef, useState, useEffect } from 'react';
import Overlay from './Overlay'
import Section2 from './Section2';

const Section1 = () => {

    const divRefs = useRef([]);
    const [currentDivIndex, setCurrentDivIndex] = useState(0);
    const handleScrollButtonClick = () => {
        const nextIndex = (currentDivIndex + 1) % divRefs.current.length;
        // setCurrentDivIndex(nextIndex);
        divRefs.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <Section1Styled>
        <p className="question center">
            Justin Angara's Journey
        </p>

        <p className="description">
            &emsp;I started my programming journey back in 2019 (age 13) with the programming language <b>Java</b>,
            where I learned topics such as <b>OOP, JavaCV (an interface that uses OpenCV technology), automated projects, and more!</b>
        </p>


        <div className='center'>
            <Button color='black' size='massive' icon='angle down' onClick={handleScrollButtonClick}></Button>
        </div>

        <div className='block'></div>
        <Overlay/>
        <div className='section2 center' ref={(el) => (divRefs.current[0] = el)}></div>
        <Section2 />
    </Section1Styled>);
}

export default Section1;



const Section1Styled = styled.div`
    .question{
        font-size:1em;
    }
    .block{
        width:auto !important;
        // padding-top:600px;
        // background-color: white;
        height: 100vh;

    }
    button{
        border-radius:50%
    }
    .description{
        font-size:2.75vh;
    }

`;