import React from "react";
import "./Container.css";

const Container = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-2 aside">Aside</div>
        <div className="col-6 main">
          <input type="text" required />
          <br/>
         </div>
        <div className="col-4 right">Aside</div>
      </div>
    </div>
    
  );
};

export default Container;
