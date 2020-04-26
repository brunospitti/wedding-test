import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import { colors, breakpoints } from '../assets/globalStyles';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      name: this.props.name,
      number: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    console.log(
      "Form -> handleSubmit -> form.getAttribute('name')",
      form.getAttribute('name')
    );
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        this.handleSuccess();
        console.log('success');
      })
      .catch((err) => this.handleError(err));
  };

  handleSuccess = () => {
    this.setState({ success: true });
  };

  handleError = (err) => {
    console.log(`Error -> ${err}`);
  };

  handleFormBack = () => {
    this.setState({
      name: '',
      number: 0,
      success: false,
    });
  };

  render() {
    return (
      <StyledFormHolder>
        {this.state.success ? (
          <StyledSuccess>
            <div>
              <span>Hi {this.state.name}, thanks!</span>
              We&apos;ll be in touch soon ;)
              <StyledButton
                onClick={this.handleFormBack}
              >{`< Fill the form again`}</StyledButton>
            </div>
          </StyledSuccess>
        ) : (
          <StyledForm
            name="shuttleVan"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="shuttleVan" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <StyledLabel>
              Name (required)
              <StyledInput
                required
                type="text"
                name="name"
                placeholder="Name (required)"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </StyledLabel>
            <StyledLabel>
              How many seats (required)
              <StyledInput
                required
                min="0"
                type="number"
                name="number"
                placeholder="How many seats (required)"
                onChange={this.handleChange}
                value={this.state.number}
              />
            </StyledLabel>

            {this.state.name != '' && this.state.number > 0 && (
              <StyledButton type="submit">Send</StyledButton>
            )}
          </StyledForm>
        )}
        <StyledFlower04 fluid={this.props.flowerImage} />
      </StyledFormHolder>
    );
  }
}

const StyledFormHolder = styled.div`
  position: relative;
  width: calc(50% + 4em);
  margin: 5em auto 15em;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2em 2em 0.5em;
  transition: all 0.5s ease;
  @media ${breakpoints.tablet} {
    margin-top: -8vh;
  }
`;

const StyledForm = styled.form``;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 1.5em;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #85ada9;
  padding: 10px;
  margin-top: 0.7em;
  &::placeholder {
    color: #d0d0d0;
    opacity: 1;
    font-size: 0.9em;
  }
`;

const StyledButton = styled.button`
  margin: 1em auto 1.5em;
  position: relative;
  background: #2b5854;
  cursor: pointer;
  opacity: 0.6;
  width: 100%;
  padding: 0.6em 0;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const StyledSuccess = styled.div`
  div {
    font-size: 0.9em;
    span {
      display: block;
      color: #2b5854;
      font-size: 1.2em;
      margin-bottom: 0.5em;
    }
  }
`;

const StyledFlower04 = styled(BackgroundImage)`
  display: block;
  width: 120px;
  height: 160px;
  bottom: -20%;
  right: -40%;
  position: absolute !important;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media ${breakpoints.tablet} {
    width: 90px;
    height: 270px;
    margin: 10em auto;
  }
`;
