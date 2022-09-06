import React from "react";

function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial products",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
    </section>
  );
}

export default Gallery;
