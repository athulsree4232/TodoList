import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const date = new Date();
  const d = date.getDay();
  switch (d) {
    case 0:
      var day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(value);

                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id === value.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id !== value.id) {
                          return null;
                        }
                        return null;
                      })
                    )
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}

        {toDos.map((value) => {
          if (value.status) {
            return <h1>{value.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
