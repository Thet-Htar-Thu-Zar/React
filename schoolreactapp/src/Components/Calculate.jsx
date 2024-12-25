import React from "react";

function Calculate(Props) {
  const { equal, action1 } = Props;
  return (
    <div className="p-1 col-3">
      <button className="btn btn-secondary w-100" onClick={action1}>
        {equal}
      </button>
    </div>
  );
}

export default Calculate;
