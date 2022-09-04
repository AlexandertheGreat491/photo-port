// imports react
import React from "react";
// adds the cover image
import coverImage from "../../assets/cover/cover-image.jpg";

// creates the JSX for the About component
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

// exports the About() for the About component
export default About;
