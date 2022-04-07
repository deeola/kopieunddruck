import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Designs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Individual Design</h1>
        <div>
          <p>
            Are you planning an event and want to hit the mark with the
            invitation? Or are you looking for individual menu cards for your
            restaurant or even seasonal cards, such as B. for the Easter and
            Christmas period? Then you've come to the right place - because we
            design according to your wishes.
          </p>
          <p>
            We have also made provisions for corporate customers: we design all
            of your business stationery, from letterhead, company folders and
            company stamps to lanyards, writing pads, calendars and much more.
          </p>
          <p>
            Tip: Simply make an appointment for a non-binding consultation by
            telephone on 0340 - 240 43 331 or simply drop by us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Designs;
