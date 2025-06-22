import styled from "styled-components";
import PropTypes from "prop-types";

const Submission = ({ sub }) => {
    const { name, email, message, createdAt } = sub;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <SubmissionStyled>
            <div className="submission-header">
                <strong>{name}</strong> • {email}
            </div>
            <div className="submission-date">{formatDate(createdAt)}</div>
            <div className="submission-message">{message}</div>
        </SubmissionStyled>
    );
};

export default Submission;

// prop-types
Submission.propTypes = {
    sub: PropTypes.object.isRequired,
};

const SubmissionStyled = styled.div`
    outline: solid 1px #999;
    padding: 15px;
    margin: 15px 0px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.05);

    .submission-header {
        margin-bottom: 8px;
        color: #13bbbb;
    }

    .submission-date {
        font-size: 0.8em;
        color: #888;
        margin-bottom: 10px;
    }

    .submission-message {
        line-height: 1.4;
    }
`;
