import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

// components
import Input from "./Input";
import TextArea from "./TextArea";

const Form = ({ getSubmissions }) => {
    // react use state
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    // crud methods {create}
    const inputNameOnChange = (e) => {
        setInputName(e.target.value);
    };
    const inputEmailOnChange = (e) => {
        setInputEmail(e.target.value);
    };
    const inputMessageOnChange = (e) => {
        setInputMessage(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        try {
            await axios.post("http://localhost:4059/submissions", postData);

            // Clear form after successful submission
            setInputName("");
            setInputEmail("");
            setInputMessage("");

            // Refresh the submissions list
            getSubmissions();

            console.log("Submitted form successfully");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <FormStyled onSubmit={onSubmit}>
            <Input
                id="name"
                labelText="Name"
                onChange={inputNameOnChange}
                value={inputName}
            />
            <Input
                id="email"
                labelText="Email"
                inputType="email"
                onChange={inputEmailOnChange}
                value={inputEmail}
            />
            <TextArea
                id="message"
                labelText="Message"
                onChange={inputMessageOnChange}
                value={inputMessage}
            />

            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form`
    .input-group {
        margin-bottom: 30px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #999;

        &:focus {
            background-color: #fff;
        }
    }

    button {
        background-color: #7f7f7f;
        padding: 10px 5px;
        color: #fff;
        width: 150px;
        border: none;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #800000;
        }
        &:active {
            background-color: #002020;
        }
    }
`;
