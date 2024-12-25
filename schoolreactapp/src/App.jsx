import React, { useEffect, useState } from "react";
import "./App.css";
import Btn from "./Components/NumberBtn";
import Calculate1 from "./Components/Calculate";

function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [inputText, setInputText] = useState("");
  const [allButtons, setAllButtons] = useState([
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "/",
  ]);

  useEffect(() => {
    setInputText(firstNum + operator + secondNum);
  }, [firstNum, operator, secondNum]);
  console.log(inputText);

  const handleNumClick = (inputNum) => {
    if (operator) {
      setSecondNum((prevData) => {
        return prevData + inputNum;
      });
    } else {
      setFirstNum((prevData) => {
        return prevData + inputNum;
      });
    }
  };
  // console.log(firstNum);
  //   console.log(secondNum);

  const handleOperatorBtnClick = (Input0perator) => {
    console.log(Input0perator);
    if (firstNum && !secondNum) {
      setOperator(Input0perator);
    } else {
      alert("Please fill first num.");
    }
  };

  const Calculate = () => {
    let num1 = Number(firstNum),
      num2 = Number(secondNum);
    if (firstNum && secondNum) {
      if (operator == "+") {
        let result = num1 + num2;
        assignToFirstNum(result);
      }
      if (operator == "-") {
        let result = num1 - num2;
        assignToFirstNum(result);
      }
      if (operator == "*") {
        let result = num1 * num2;
        assignToFirstNum(result);
      }
      if (operator == "/") {
        let result = num1 / num2;
        assignToFirstNum(result);
      }
    } else {
      alert("Please enter first Number and second Number.");
    }
  };

  const assignToFirstNum = (result) => {
    setFirstNum(result.toString());
    setOperator("");
    setSecondNum("");
  };

  const Clear = () => {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
  };

  // const[count, setCount] = React.useState(0);
  // const[inputtext, setInputtext] = React.useState("");

  // const handleInputChange = (e) => {
  //   // console.log(e.target.value);
  //   setInputtext(e.target.value);
  // }

  // console.log(inputtext);

  // const Increment = () => {
  // setCount (count + 1);
  // }

  // const Decrement = () => {
  //   setCount (count - 1);
  // }

  // const Reset = () => {
  //   setCount(0);
  // }

  return (
    <>
      {/* <p>Count: {count}</p>
        <button onClick={Increment}>Increment</button>

        <button onClick={Decrement}>Decrement</button>

        <button onClick={Reset}>Reset</button>
        <input onChange={handleInputChange} /> */}
      <div className="position-absolute top-50 start-50 translate-middle row border border-secondary border-opacity-50 rounded p-2 w-25">
        <div className="p-1 col-9">
          <input value={inputText} readOnly className="form-control" />
        </div>
        {/* <div className="p-1 col-3">
          <button className="btn btn-secondary w-100" onClick={Calculate}>
            =
          </button>
        </div> */}

        <Calculate1 equal={"="} action1={Calculate} />

        {/* <NumberBtn
          handleNumClick={() => {
            handleNumClick("1");
          }}
        ></NumberBtn> */}

        {allButtons.map((value, i) => {
          return (
            <Btn
              key={i}
              value={value}
              action={Number(value) ? handleNumClick : handleOperatorBtnClick}
            />
          );
        })}

        <Calculate1 equal={"Clear"} action1={Clear} />

        {/* <Btn value={"1"} action={handleNumClick} />
        <Btn value={"2"} action={handleNumClick} />
        <Btn value={"3"} action={handleNumClick} />
        <Btn value={"+"} action={handleOperatorBtnClick} />
        <Btn value={"4"} action={handleNumClick} />
        <Btn value={"5"} action={handleNumClick} />
        <Btn value={"6"} action={handleNumClick} />
        <Btn value={"-"} action={handleOperatorBtnClick} />
        <Btn value={"7"} action={handleNumClick} />
        <Btn value={"8"} action={handleNumClick} />
        <Btn value={"9"} action={handleNumClick} />
        <Btn value={"*"} action={handleOperatorBtnClick} />
        <Btn value={"0"} action={handleNumClick} /> */}

        {/* <div className="col-6 p-1">
          <button className="btn btn-secondary w-100" onClick={Clear}>
            Clear
          </button>
        </div> */}

        {/* <Btn value={"/"} action={handleOperatorBtnClick} /> */}

        {/* <NumberBtn
          number={"2"}
          handleNumClick={() => {
            handleNumClick("2");
          }}
        />
        <NumberBtn
          number={"3"}
          handleNumClick={() => {
            handleNumClick("3");
          }}
        />
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleOperatorBtnClick("+");
            }}
          >
            +
          </button>
        </div>
        <NumberBtn
          number={"4"}
          handleNumClick={() => {
            handleNumClick("4");
          }}
        />
        <NumberBtn
          number={"5"}
          handleNumClick={() => {
            handleNumClick("5");
          }}
        />
        <NumberBtn
          number={"6"}
          handleNumClick={() => {
            handleNumClick("6");
          }}
        />
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleOperatorBtnClick("-");
            }}
          >
            -
          </button>
        </div>
        <NumberBtn
          number={"7"}
          handleNumClick={() => {
            handleNumClick("7");
          }}
        />
        <NumberBtn
          number={"8"}
          handleNumClick={() => {
            handleNumClick("8");
          }}
        />
        <NumberBtn
          number={"9"}
          handleNumClick={() => {
            handleNumClick("9");
          }}
        />
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleOperatorBtnClick("*");
            }}
          >
            *
          </button>
        </div>
        <NumberBtn
          number={"0"}
          handleNumClick={() => {
            handleNumClick("0");
          }}
        /> */}
        {/* <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("2");
            }}
          >
            2
          </button>
        </div>
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("3");
            }}
          >
            3
          </button>
        </div> */}

        {/* <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("4");
            }}
          >
            4
          </button>
        </div>
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("5");
            }}
          >
            5
          </button>
        </div>
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("6");
            }}
          >
            6
          </button>
        </div> */}

        {/* <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("7");
            }}
          >
            7
          </button>
        </div>
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("8");
            }}
          >
            8
          </button>
        </div>
        <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleNumClick("9");
            }}
          >
            9
          </button>
        </div> */}

        {/* <div className="col-3 p-1">
        <button
          className="btn btn-secondary w-100"
          onClick={() => {
            handleNumClick("0");
          }}
        >
          0
        </button>
      </div> */}

        {/* <div className="col-3 p-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              handleOperatorBtnClick("/");
            }}
          >
            /
          </button>
        </div> */}
      </div>
    </>
  );
}

export default App;
