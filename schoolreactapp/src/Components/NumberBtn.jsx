import React from "react";

const Btn = (Props) => {
  //   console.log(Props);
  const { value, action } = Props;
  return (
    <div className="col-3 p-1">
      <button
        className="btn btn-secondary w-100"
        onClick={() => {
          action(value);
        }}
      >
        {value}
      </button>
    </div>
  );
};

export default Btn;
