import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import useForm from "./useForm";
import validate from "./ValidateSign";
import contact from "../../assest/contact.jpg";


const ImageContainer = styled.img`
  width: 100%;
`;

const ImageDiv = styled.div``;

const Form = styled.form`
margin: 40px 0px;`;

const FormControl = styled.div`
  position: relative;
  height: 40px;
  width: 80%;
  margin: 10px auto 0px auto;
`;

const FormControlMessage = styled.div`
  /* ${FormControl} */

  position: relative;
  height: 130px;
  width: 80%;
  margin: 10px auto 0px auto;
`;

const FormInput = styled.input`
  border-bottom: 1px solid lightgray;
  outline: none;
  margin-bottom: 30px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 5px;

  &:focus {
    color: darkblue;
    border-bottom: 1px solid darkblue;
    font-weight: 500;
  }
`;

const FormTextArea = styled.textarea`
  border-bottom: 1px solid lightgray;
  outline: none;
  margin-bottom: 30px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: none;
  border: 1px solid gray;

  &:focus {
    color: darkblue;
    border-bottom: 1px solid darkblue;
    font-weight: 500;
 
  }
`;

const AlertSucessForm = styled.div`
  color: #adc906;
  width: 100%;
  margin: 20px 0px;
  font-weight: bold;
  line-height: 1.7;
  font-size: 14px;
  text-align: center;
`;

const ErrorState = styled.p`
  color: red;
  position: absolute;
  right: 7px;
  top: 13px;
  z-index: 100;
  font-size: 10px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #adc906;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  margin: 10px 0px;
  font-size: 19px;
`;

const Header = styled.h1`
  margin: 20px auto 20px 0px;
  width: 60%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 5px 0px 10px 30px;
`;

const HeaderForm = styled.h1`
  margin: 20px auto 20px 0px;
  width: 90%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 5px 0px 10px 30px;
`;

const Address = styled.div`

width: 80%;
margin: auto;

h4{

    color: #adc906;
 
}

p{
margin-top: 5px;

    span{
        color: #adc906;
        margin-right: 6px;

    }
}


`

const Contact = () => {
  // Alert Function to be passed as a callback
  const alertSuccess = () => {};

  // Import Values from useForm Hooks
  const { handleChange, handleSubmit, values, errors, submitted } = useForm(
    alertSuccess,
    validate
  );

  return (
    <div>
      <Navbar />
      <ImageDiv>
          <ImageContainer src={contact} alt="printing" />
        </ImageDiv>
      <div>
          <Header>
              Kontact
          </Header>
          <Address>
              <h4>Postanschrift:</h4>
              <p>Kopie & Druck GbR</p>
              <p>Zerbster Straße 21</p>
              <p>06844 Dessau-Roßlau</p>
              <p><span>Telefon:</span>0340 - 240 43 328</p>
              <p><span>E-Mai:</span>kontaktkopie-druck.com</p>
          </Address>
        <div>
            <HeaderForm>
            Kontaktformular:
            </HeaderForm>
        </div>
        <Form onSubmit={handleSubmit} noValidate>
          {submitted && (
            <AlertSucessForm>
              Thanks for Contacting us! We will get back to you shortly.
            </AlertSucessForm>
          )}
          <FormControl>
            <div className="labelError">
              {errors.name && (
                <ErrorState className="error">{errors.name}</ErrorState>
              )}
            </div>
            <FormInput
              onChange={handleChange}
              type="text"
              name="name"
              value={values.name}
              id="name"
              placeholder="Name"
            />
          </FormControl>
          <FormControl>
            <div className="labelError">
              {errors.email && (
                <ErrorState className="error">{errors.email}</ErrorState>
              )}
            </div>

            <FormInput
              onChange={handleChange}
              type="email"
              name="email"
              value={values.email}
              id="email"
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <div className="labelError">
              {errors.betreff && (
                <ErrorState className="error">{errors.betreff}</ErrorState>
              )}
            </div>
            <FormInput
              type={"text"}
              placeholder="Betreff"
              onChange={handleChange}
              name="betreff"
              id="betreff"
              value={values.betreff}
            />
          </FormControl>
          <FormControlMessage>
            <div className="labelError">
              {errors.message && (
                <ErrorState className="error">{errors.message}</ErrorState>
              )}
            </div>
            <FormTextArea
              onChange={handleChange}
              type="textarea"
              name="message"
              value={values.message}
              id="message"
              placeholder="Message"
              rows="10"
            ></FormTextArea>
          </FormControlMessage>
          <FormControl>
            <Button type="submit">Absenden</Button>
          </FormControl>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
