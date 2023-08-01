import React from "react";
import "../components/BackgroundComponent.css"; // Styles for the background component

// Import the SVG components
import SvgComponent from "./Svgcomponent";
import SvgComponent1 from "./Svgcomponent1";



const BackgroundComponent = () => {
  return (
    <div className="background-container">
      {/* Use the first SVG component as the background */}
      <SvgComponent className="svg-background" />
      
      {/* Use the second SVG component as an overlay */}
      <SvgComponent1 className="svg-overlay" />
      
      {/* Other content can be added here */}
    </div>
  );
};

export default BackgroundComponent;
