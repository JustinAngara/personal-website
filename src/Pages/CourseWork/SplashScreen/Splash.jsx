import styled from 'styled-components';
import Inset from "@/Common/PagesLayout/Inset.jsx"
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
const Splash = () => {

    const navigate = useNavigate();

    return (
    <SplashStyled>
        <div>
            <TypeAnimation
                style={{ whiteSpace: 'pre-line', display:'block'}}
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'System,out',
                    200,
                    'System.out',
                    100,
                    'System.out.println();',
                    'System.out.println("Hello, World!");',
                    'System.out.println("Hello, World!"); //by Justin',
                    2000,
                    () => {
                        <div></div>
                        navigate("/");
                        window.scrollTo(0, 0)
                    },
                ]}
                speed={50}
                repeat={0}


            />
        </div>
    </SplashStyled>);
}

export default Splash;


const SplashStyled = styled.div`
    background-color:black;
    color: white;
    font-size: 3.2vw;

    //centering a div
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:20%;
    }

    // required for overlay
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;

`;