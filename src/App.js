import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask/AddTask.jsx';
import DisplyTask from './Components/DisplyTask/DisplyTask.jsx';

var id = 0;
function App() {
  const [tasks, setTasks] = useState([]);
  const [updateTask, setupdateTask] = useState(null)

  useEffect(() => {
    if(localStorage.getItem("tasks") != null){
      setTasks(JSON.parse(localStorage.getItem("tasks")))
    }
  }, [])

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleAdd = (values, { resetForm }) => {
      const existingTaskIndex = tasks.findIndex(task => task.id === values.id);
      if(existingTaskIndex !== -1){
        const updated = [...tasks];
        updated[existingTaskIndex] = values;
        setTasks(updated);
      }else{
        setTasks([...tasks, {...values , id : id+1}]);
        id++;
      }
      resetForm();
    };    

  const handleUpdate = (updateIndex) => {
    const newArray = [...tasks];
    setupdateTask({...newArray[updateIndex]})
    localStorage.setItem("tasks", JSON.stringify(tasks))
  };

  const handleDelete = (deleteindex) => {
    tasks.splice(deleteindex, 1)
    setTasks([...tasks]);
    localStorage.setItem("tasks", JSON.stringify(tasks))
  };

  return <>
    <h1 className="mb-4 text-center mt-4">Task Management</h1>

    <AddTask handleAdd={handleAdd} updateTask={updateTask}  />

    <div className="container mt-2">
      <div className="row">
        {tasks.map((task,id) => (
            <DisplyTask key={id} task={task} handleDelete={()=>(handleDelete(id))} handleUpdate={()=>(handleUpdate(id))} />
        ))}
      </div>
    </div>
  </>
}

export default App;

