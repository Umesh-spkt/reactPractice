import React, { useState } from "react";
import Users from "./components/Users";
import react from "./logos/react.png";
import next from "./logos/next.png";
import reactnative from "./logos/reactnative.png";
import flutter from "./logos/flutter.png";
import springboot from "./logos/springboot.png";
import node from "./logos/node.png";
import ethereum from "./logos/ethereum.png";
import tron from "./logos/tron.png";
import docker from "./logos/docker.png";
import mapbox from "./logos/mapbox.png";
import aws from "./logos/aws.png";
import d3 from "./logos/d3.png";
import android from "./logos/android.png";
import eos from "./logos/eos.png";

const App = () => {
  const logoData = [
    {
      id: 1,
      src: react,
    },
    {
      id: 2,
      src: next,
    },
    {
      id: 3,
      src: reactnative,
    },
    {
      id: 4,
      src: flutter,
    },
    {
      id: 5,
      src: springboot,
    },
    {
      id: 6,
      src: node,
    },
    {
      id: 7,
      src: ethereum,
    },
    {
      id: 8,
      src: tron,
    },
    {
      id: 9,
      src: docker,
    },
    {
      id: 10,
      src: mapbox,
    },
    {
      id: 11,
      src: aws,
    },
    {
      id: 12,
      src: d3,
    },
    {
      id: 13,
      src: android,
    },
    {
      id: 15,
      src: eos,
    },
  ];
  const container = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
  };
  return (
    <div style={container}>
      <div
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg")`,
          height: "30vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 40,
        }}
      >
        <div>Web development</div>
      </div>

      <p
        style={{
          letterSpacing: "3px",
          color: "grey",
          fontWeight: "5px",
          fontSize: 30,
        }}
      >
        OUR EXPERTISE
      </p>
      <div>
        <Users logos={logoData} />
      </div>
    </div>
  );
};
export default App;
