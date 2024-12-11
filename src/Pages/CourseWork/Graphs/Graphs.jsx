import React from 'react';
import styled from 'styled-components';
import resume from '@/Pages/CourseWork/Graphs/JAngara.jpg';
import resumePDF from '@/Pages/CourseWork/Graphs/Justin_Angara_Resume.pdf';
import Courses from './Courses.jsx'
import Carousel from './CarouselCourse/Carousel.jsx';
import Inset from "@/Common/PagesLayout/Inset.jsx";
import { Container } from '@mui/material';
import ExperienceMain from './Experience/ExperienceMain.jsx';
const Graphs = () => {

    return (
        <GraphsStyled>
            <Inset>

                <div className="clear">
                    <Container sx={{bgcolor:'rgb(255, 255, 255);'}}>

                        <embed width="100%" height="700" src={resumePDF} type="application/pdf"></embed>
                    </Container>
                </div>

                <div className='Experience '>
                    <ExperienceMain />
                </div>

                <div className="course">
                    <h2>Classes Taken</h2>
                    <Courses />
                    {/* <Carousel /> */}
                </div>


            </Inset>
        </GraphsStyled>
    );
};

export default Graphs;

const GraphsStyled = styled.div`
    .clear{
        all: initial;

    }


    h2{
        padding-top:65px;
    }
    .course{

        // transform:scale(0.89);
    }
`;
