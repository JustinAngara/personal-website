import styled from 'styled-components';
import PropTypes from "prop-types";
import { ButtonContent, Button, Icon } from 'semantic-ui-react'
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
const ButtonToNav = ({pathObj, isLargeEnough}) => {

    const navigate = useNavigate()
    return (
    <ButtonToNavStyled>
        {/* FFD700 */}

        <div>
            <Button basic inverted color='black' animated size='medium' onClick={()=>{
                navigate(pathObj[0]);
                scrollDown(isLargeEnough)
            }}>

                <ButtonContent visible>{pathObj[1]}</ButtonContent>
                <ButtonContent hidden>
                    <Icon name='arrow right' />
                </ButtonContent>
            </Button>
        </div>

    </ButtonToNavStyled>);
}
const scrollDown = (isLargeEnough) => {
    if(isLargeEnough){
        window.scrollBy({ top: 525, behavior: "smooth" });
    }
}


export default ButtonToNav;

// prop-types
ButtonToNav.propTypes = {
    pathObj: PropTypes.object.isRequired


};

const ButtonToNavStyled = styled.div`
    icon{
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        display:none;
    }
    div{

        margin-top: -5%;
        padding: 12px 70px;
        font-size: 18px;
        border-radius: 10px;
        // display: flex;

    }
    button:hover{
        transform: scale(1.075);
    }



`;