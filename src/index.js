import React from "react";
import ReactDOM from "react-dom";
import pikapika from "./assets/images/pikapika.jpg";
import "./style.sass";

const Home = () => {
  return <div>
     <h1>
Hello!

     </h1>
    <img src={pikapika}/>
  </div>;
};

ReactDOM.render(<Home />, document.getElementById("index"));
