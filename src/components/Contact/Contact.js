import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import {
    AiFillMail,
    AiFillGithub,
    AiFillInstagram,
    AiOutlineGoogle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"

import { FormControl, TextField, Button } from "@material-ui/core"
import { makeStyles } from '@mui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

import emailjs from "emailjs-com"
import ApiKey from "../../Assets/ApiKey";

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    // const theme = createMuiTheme({
    //     palette: {
    //         primary: {
    //             light: "#af52bf",
    //             main: "#68187a",
    //             dark: "#6d1b7b",
    //             contrastText: "ffffff"
    //         }
    //     }
    // })

    const useStyles = makeStyles((theme) => ({
        text: {
            width: 400
        }
    }))

    const classes = useStyles();
    const apiKey = ApiKey()

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name==="name"){
            setName(value)
        }
        else if(name==="email"){
            setEmail(value)
        }
        else if(name==="subject"){
            setSubject(value)
        }
        else if(name==="message"){
            setMessage(value)
        }
        else{
            // e.preventDefault()
            emailjs.sendForm(
                apiKey.SERVICE_ID,
                apiKey.TEMPLATE_ID,
                {
                    "name":name,
                    "email":email,
                    "subject":subject,
                    "message":message
                },
                apiKey.USER_ID,
            )
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text)
            })
            .catch((error) => {
                alert("An error occurred, Please try again", error.text)
            })
        }
    }

    return(

        <Container fluid className="about-section-contact">
            <Particle />
            <Container>
                <Row>

                    <Col md={4} className="myAvtar-contact">
                        <h1> Contact Me </h1>
                        <form>
                            <FormControl className={classes.text} >
                                <TextField
                                    fullWidth
                                    required
                                    color="primary"
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Enter Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <br />

                            <FormControl className={classes.text} >
                                <TextField
                                    fullWidth
                                    required
                                    color="primary"
                                    margin="dense"
                                    id="email"
                                    name="email"
                                    label="Enter Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <br />

                            <FormControl className={classes.text} >
                                <TextField
                                    fullWidth
                                    color="primary"
                                    margin="dense"
                                    id="subject"
                                    name="subject"
                                    label="Enter Subject"
                                    variant="outlined"
                                    value={subject}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <br />

                            <FormControl className={classes.text} >
                                <TextField
                                    multiline
                                    rows = {7}
                                    fullWidth
                                    required
                                    color="primary"
                                    margin="dense"
                                    id="message"
                                    name="message"
                                    label="Enter Message"
                                    variant="outlined"
                                    value={message}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <br />
                            <br />

                            <Button
                                variant="outlined"
                                color="white"
                                onClick={handleChange}
                            >
                                Submit
                            </Button>
                        </form>
                    </Col>

                    <Col md={8} className="home-about-social-contact">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                            href="mailto:agarwal.aadit99@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiFillMail />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/aaditagarwal/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://github.com/aaditagarwal"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://scholar.google.com/citations?hl=en&user=2EOgF5oAAAAJ"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            >
                            <AiOutlineGoogle />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.instagram.com/aaditagarwal/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            >
                            <AiFillInstagram />
                            </a>
                        </li>
                        </ul>
                        <p>
                        Feel free to <span className="purple">connect </span>with me
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact