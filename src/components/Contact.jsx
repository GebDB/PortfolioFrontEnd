import React from "react";
import {Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import DOMPurify from 'dompurify';
import "./Contact.css";
import linkedin from '../assets/linkedin.svg'


function Contact() {
    const [success, setSuccess] = useState(false)

    const initialValues = {
        name: "",
        email: "",
        message: "",
        location: "",
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().max(70).required(),
        email: Yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format')
            .required('Email is required'),
        message: Yup.string().min(15).max(1500).required(),
    });
    
    const onSubmit = (data) => {
        if (data.location === "") { // Check if the honeypot field is empty
            const sanitizedName = DOMPurify.sanitize(data.name);
            const sanitizedEmail = DOMPurify.sanitize(data.email);
            const sanitizedMessage = DOMPurify.sanitize(data.message);
            axios.post("https://danielbecirevic-d8ac0bfad92e.herokuapp.com/contacts", {
                ...data,
                name: sanitizedName,
                email: sanitizedEmail,
                message: sanitizedMessage
            })
                .then((response) => {
                    console.log("Message sent");
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 6000);
                })
                .catch((error) => {
                    console.error("Error sending message:", error);
                });
        } else {
            console.log(";)");
        }
    };
    if (success) {
        return (
            <div className="contact">
                <h1 className="title"><span>Contact</span></h1>
                <h2>Message successfully sent!</h2>
            </div>
        )
    }
    return (
    <div className="contact">
        <h1 className="title"><span>Contact</span></h1>
            <div className="contactlinkcontainer">
                <a className="linkedinlink2" href="https://www.linkedin.com/in/danielbecirevic/" target="_blank">
                    Connect on LinkedIn!
                </a>
            </div>

       {/* <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainer">
                <Field 
                autoComplete="off"
                id="inputForm" 
                name="name" 
                placeholder="Name"/>
                <Field 
                autoComplete="off"
                id="inputForm" 
                name="email" 
                placeholder="Email"/>
                <Field 
                autoComplete="off"
                id="messageForm" 
                name="message" 
                placeholder="Message"/>
                <Field
                autoComplete="off"
                id="location" 
                name="location" 
                placeholder="Location"/>

                <button type="submit">Submit</button>
                <ErrorMessage name="name" component="span"/>
                <ErrorMessage name="email" component="span"/>
                <ErrorMessage name="message" component="span"/>
                <span></span>
            </Form>
        </Formik> */}
    </div>
    );
}
export default Contact;