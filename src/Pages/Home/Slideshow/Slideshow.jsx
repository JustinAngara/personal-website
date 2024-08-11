import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// data
import { slidesData } from "./slidesData";

// components
import Slide from "./Slide";

const Slideshow = () => {
    return (
        <SlideshowStyled>
            <div className="block">

                <Carousel infiniteLoop={true} autoPlay={true}>
                    {slidesData.map((slide) => {
                        return <Slide key={slide.id} slide={slide} />;
                    })}
                </Carousel>
            </div>
        </SlideshowStyled>
    );
};

export default Slideshow;

const SlideshowStyled = styled.div`
    .block{
        // padding-top:600px;
        // background-color:white;
        background-color:rgba(0,0,0,0);
    }
    .carousel-inner &gt; .item &gt; img {

        height:50%;
        width:50%;
        object-fit: contain;
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;

    }

    div{
        background-color:black;
        width: 75%;
        margin: 0 auto; // this is actually centering the container
    }

    // this is for rounded border
    border-radius:10px;

`;
