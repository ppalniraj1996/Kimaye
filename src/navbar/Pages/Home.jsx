import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

export const Home = () => {
  return (
    <>
      <ImageSlider slides={SliderData} />
      <div>
        <img
          style={{
            height: "700px",
            width: "100%",
            marginTop: "-5px",
          }}
          src="./images/112.png"
          alt="fruit"
        />
      </div>
      <div>
        <img
          style={{ height: "700px", width: "100%", marginTop: "-4px" }}
          src="./images/111.png"
          alt="fruit"
        />
      </div>
      <div>
        <img
          style={{ height: "760px", width: "100%", marginTop: "-4px" }}
          src="./images/knowmore1.png"
        />
      </div>
      <div>
        <img src="./images/secrettext2.png" />
        <img src="./images/2ndslide1.png" />
      </div>
      <div>
        <img
          style={{ height: "660px", width: "100%", marginTop: "-4px" }}
          src="./images/prj1.png"
        />
        <img
          style={{ height: "600px", width: "100%", marginTop: "-4px" }}
          src="./images/prj2.png"
        />
      </div>
    </>
  );
};
