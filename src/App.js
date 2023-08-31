import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function addTask(name){
  alert(name);
}

function App(props) {
  const taskList = props.tasks.map((task)=><Todo key={task.id} id={task.id} name={task.name} completed={task.completed}/>);
  const buttonList = props.button.map((button)=><FilterButton key={button.id} name={button.name} pressed={button.pressed}/>);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form func={addTask}/>
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