import React from "react";
import Loader from "react-js-loader";
const DesignLoader = () => {
  return (
    <div className={"App"}>
      <div className={"item"}>
        <Loader
          type="spinner-cub"
          bgColor={"#000000"}
          color={"#FFFFFF"}
          size={100}
          style={{zIndex:"1500"}}
        />
      </div>
    </div>
  );
};
export default DesignLoader;