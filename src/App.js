import React,{useState} from "react";
import {nanoid} from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  function addTask(name){
    const newTask={id:`todo-${nanoid()}`,name,completed:false};
    setTasks((prevtasks)=>[...tasks,newTask]);
  }
  let[tasks,setTasks]=useState(props.tasks);
  const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
  const buttonList = props.button.map((button)=><FilterButton key={button.id} name={button.name} pressed={button.pressed}/>);
  console.log(tasks);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {buttonList}
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;