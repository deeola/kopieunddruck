import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Cad = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>CAD and Reprography</h1>
        <div>
          <p>
            Are you a construction site manager or architect and need printed
            plan drawings for the next construction site or rough drawings for
            your customer? Then come join us.
          </p>
          <p>
            We digitize, print and copy drawings and large-format plans on
            various materials. As an option, you can get them rolled, folded,
            with or without perforation and/or filing variants.
          </p>
          <p>
            Service: save time? Hand in the originals and pick them up again
            later. We are also happy to take care of shipping to the
            destination.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cad;
