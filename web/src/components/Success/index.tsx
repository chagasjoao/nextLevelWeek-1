import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import "./success.css";

const Success = ({ loading }) => {
  return loading ? (
    <div id="overlay-content">
      <div id="success-container">
        <FiCheckCircle size={100} color={"#34CB79"} />
        <p>Cadastro concluído!</p>
      </div>
    </div>
  ) : null;
};

export default Success;
