import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Background = () => {
    return (
        <BackgroundStyled>
            <Outlet />
            <div className="upButton"></div>
        </BackgroundStyled>
    );
};

export default Background;

const BackgroundStyled = styled.div`


    .upButton{
    }
    padding 500px;


    // going to be our additional background layout
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0d1117 50%, #1a1a1a 75%, #0a0a0a 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(0, 255, 0, 0.03) 0%, transparent 70%);
        animation: float 20s ease-in-out infinite;
        pointer-events: none;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
            linear-gradient(90deg, transparent 98%, rgba(0, 255, 0, 0.1) 100%),
            linear-gradient(0deg, transparent 98%, rgba(0, 255, 0, 0.1) 100%);
        background-size: 50px 50px;
        opacity: 0.3;
        pointer-events: none;
    }

    @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-10px, -10px) rotate(1deg); }
        50% { transform: translate(10px, -5px) rotate(-1deg); }
        75% { transform: translate(-5px, 10px) rotate(1deg); }
    }
`;
