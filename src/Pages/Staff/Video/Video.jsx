import styled from 'styled-components';
import PropTypes from "prop-types";
import ReactPlayer from 'react-player';
const Video = ({ link }) => {
    return (
    <VideoStyled>
        <br/><ReactPlayer  width="90%" url={link} />
        {/* will add description soon */}

    </VideoStyled>);
}

export default Video;

// prop-types
Video.propTypes = {
    link: PropTypes.string
};

const VideoStyled = styled.div`
    // background-color:black;
    // width:70%;
    position: relative;
    // padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`;