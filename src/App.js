import React,{useState} from "react";
import {nanoid} from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  let[tasks,setTasks]=useState(props.tasks);
  const [filter, setFilter] = useState("All");

  //adding Task function
  function addTask(name){
    const newTask={id:`todo-${nanoid()}`,name,completed:false};
    setTasks((prevtasks)=>[...tasks,newTask]);
  }

  //toggleTask Function
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  //deleting Task Function
  function deleteTask(id){
    let updatedTasks = tasks.filter((task)=>(id!==task.id));
    setTasks(updatedTasks);
  }

  //editing task Function
  function editTask(id,newName){
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));

  const buttonList = props.button.map((button)=><FilterButton key={button.id} name={button.name} pressed={button.pressed}/>);
  let taskNoun = taskList.length===1?"task":"tasks";
  let listHeading = `${taskList.length} ${taskNoun} remaining`;
  console.log(tasks);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {buttonList}
      </div>
      <h2 id="list-heading">{listHeading}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;