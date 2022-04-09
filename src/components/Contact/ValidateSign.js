function ValidateSign(values) {
    let errors = {};
  
    //Form Validations
  
    if (!values.name) {
      errors.name = "Name Required";
    }
  
    if (!values.message) {
      errors.message = "message required";
    }

    if (!values.betreff) {
        errors.betreff= "betreff required";
      }
  
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    return errors;
  }
  
  export default ValidateSign;