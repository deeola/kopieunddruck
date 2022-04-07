import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Laminate = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>laminating and lining</h1>
        <div>
          <p>
            You only know “laminate” from laying floors? Then watch out: In
            order to make menus, posters and notices more robust against
            sunlight and dirt, you can cover them with a thin layer, the
            so-called laminate.
          </p>
          <p>A distinction is made between 2 variants:</p>
          <p>
            Hot laminate: the print is provided with a protective layer on both
            sides, so it can also be used outdoors. Despite its stability, it
            remains flexible in shape and you can easily transport it.
          </p>
          <p>
            Laminating: this is a one-sided sealing of the surface and should
            therefore only be used indoors
          </p>
          <p>
            Other examples of use: parking permits, school and student ID cards,
            business cards, pocket calendars, bookmarks and much more.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Laminate;
