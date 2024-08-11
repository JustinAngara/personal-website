import styled from 'styled-components';
import Experiences from './Experiences';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const ExperienceMain = () => {
    return (
    <ExperienceMainStyled>
        <p className='blocked center'>
            {`<Experience />`}
        </p>



        <VerticalTimeline>

            <Experiences />

            {/* BREAK/END of Timeline  */}
            <VerticalTimelineElement iconStyle={{ background: 'rgb(240, 90, 70)', color: '#fff' }}/>
        </VerticalTimeline>

    </ExperienceMainStyled>);
}

export default ExperienceMain;



const ExperienceMainStyled = styled.div`
    .blocked{
        font-size:3.25em;
        padding-top:15%;
        padding-bottom:10%;
        width:95%;
    }
    .center {
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
`;