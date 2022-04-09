import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import useForm from "./useForm";
import validate from "./ValidateSign";

const Form = styled.form`
  background-color: aliceblue;
`;

const FormControl = styled.div``;

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
      <div>
        <div></div>
        <Form onSubmit={handleSubmit} noValidate>
          <div className="Alertsuccess">
            Thanks for Contacting us! We will get back to you shortly.
          </div>
          <FormControl>
            <div className="labelError">
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <input
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
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <input
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
              {errors.betreff && <p className="error">{errors.betreff}</p>}
            </div>
            <input type={"text"} placeholder="Betreff" />
          </FormControl>
          <FormControl>
            <div className="labelError">
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <textarea
              onChange={handleChange}
              type="textarea"
              name="message"
              value={values.message}
              id="message"
              placeholder="Message"
            ></textarea>
          </FormControl>

          <button>Send Message</button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
