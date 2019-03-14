import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { colors, breakpoints } from "../../assets/globalStyles";

import { encode, autoExpand } from "../../assets/helpers.js"

import { Button } from "./Button";

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sucess: false,
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };
  }

  componentDidMount(){
    autoExpand()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => this.handleSucess())
      .catch(err => this.handleError(err));
  };

  handleSucess = () => {
    this.setState({sucess: true})
  }

  handleError = err => {
    console.log(`Error -> ${err}`)
  }

  handleFormBack = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      sucess: false
    })
  }

  render() {
    return (
      <StyledContactFormHolder>
        {this.state.sucess ?
          <StyledSuccess>
            <div>
              <span>Hi {this.state.name}, thanks for your contact!</span>
              I'll be in touch as soon as possible... ;)
              <Button clickBehavior={this.handleFormBack} text="< Send another message"/>
            </div>
          </StyledSuccess>
        :
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <StyledInput required type="text" name="name" placeholder="Name (required)" onChange={this.handleChange} />
            <StyledInput required type="email" name="email" placeholder="E-mail (required)" onChange={this.handleChange} />
            <StyledInput type="text" name="phone" placeholder="Phone" onChange={this.handleChange} />
            <StyledInput type="text" name="subject" placeholder="Subject" onChange={this.handleChange} />
            <StyledTextarea required rows="1" name="message" placeholder="Message (required)" onChange={this.handleChange} />
            { this.state.name != "" && this.state.email != ""  && this.state.message != "" &&
              <Button buttonType="submit" text="Send"/>
            }
          </form>
        }
      </StyledContactFormHolder>
    );
  }
}


const StyledContactFormHolder = styled.div`
  margin-bottom: 10vh;
  @media ${breakpoints.tablet} {
    margin-top: -8vh;
  }
`

const StyledSuccess = styled.div`
  background: #fcfcfc;
  color: white;
  padding: 15px 20px;
  border: 2px solid ${colors.tertiary};
  border-left-width: 10px;
  div{
    font-size: 0.9em;
    span{
      display: block;
      color: ${colors.tertiary};
      font-size: 1.2em;
    }
    button{
      font-size: 0.9em;
      display: block;
      margin: 10px 0;
      background: transparent;
      border-bottom: 1px solid;
      border-radius: 0;
      padding: 10px;
    }
  }
`

const sharedStyles = `
  border: 0;
  border-bottom: 5px solid #f4f4f4;
  margin-top: 50px;
  padding: 10px;
  &::placeholder {
    color: #d0d0d0;
    opacity: 1;
    font-size: 0.9em;
  }
`

const StyledInput = styled.input`
  width: 46%;
  ${sharedStyles}
  &:not(:nth-child(2n + 1)) {
    margin-left: 8%;
  }
  @media ${breakpoints.mobileSmall} {
    width: 100%;
    &:not(:nth-child(2n + 1)) {
      margin-left: 0;
    }
	}
`

const StyledTextarea = styled.textarea`
  resize: vertical;
  width: 100%;
  min-height: 50px;
  ${sharedStyles};
`