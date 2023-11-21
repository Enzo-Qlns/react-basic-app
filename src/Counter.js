import React from "react";

function Counter({ countProps, isErrorProps, onClickPlus, onClickMinus }) {
  return (
    <div className="App">
      Compteur : {countProps}
      <div>

        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickPlus}>+</button>

        {isErrorProps ? (
          <div className="App-error">La valeur doit être positive</div>
        ) : null}
      </div>
    </div>
  );
}

export default Counter;