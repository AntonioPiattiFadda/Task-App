import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="lds-ripple__container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export { TodosLoading };
