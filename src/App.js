import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from "./Panel";
import faker from 'faker';


function App() {

  const statuses = ['todo', 'progress', 'review', 'done'];
  const priority = [1,2,3,4,5]
  const initialTask = [
    {id: 1, name: faker.random.word(), status: statuses[0], priority: 2},
    {id: 2, name: faker.random.word(), status: statuses[1], priority: 2},
    {id: 3, name: faker.random.word(), status: statuses[2], priority: 2},
    {id: 4, name: faker.random.word(), status: statuses[3], priority: 2}
  ];

  const [tasks, setTasks] = useState(initialTask)


  const addNewTask = () => {
    const newTask = {
      id: Math.random(),
      name: faker.random.word(),
      status: statuses[Math.floor(Math.random() * 4)],
      priority: priority[Math.floor(Math.random() * 5)]
    }
    setTasks([...tasks, newTask])
  };

  const nextStatus = (currentStatus) => {
    return statuses[statuses.indexOf(currentStatus) + 1]
  };

  const prevStatus = (currentStatus) => {
    return statuses[statuses.indexOf(currentStatus) - 1]
  };

  const left = (taskId) => {
    const updatedTasks = tasks.map(el =>
        el.id === taskId ? {...el, status: prevStatus(el.status)} : el)
    setTasks(updatedTasks)
  };
  const right = (taskId) => {
    const updatedTasks = tasks.map(el =>
        el.id === taskId ? {...el, status: nextStatus(el.status)} : el)
    setTasks(updatedTasks)
  };

  const deleteTask = (taskId) => {
    const newTask = tasks.filter(el => el.id !== taskId)
    setTasks(newTask)
  };

  return (
      <div className="container">

        <h1 className="d-flex justify-content-center">Kanban</h1>

        <button type="button" className="btn btn-outline-primary"
                onClick={addNewTask}>Add New Task
        </button>
        <br/>
        <div className="row align-items-start">
          {statuses.map(status => (
              <div key={status} className='col'>
                <Panel
                    priority={priority}
                    status={status}
                    tasks={tasks}
                    left={left}
                    right={right}
                    deleteTask={deleteTask}
                />
              </div>))}
        </div>

      </div>
  );
}

export default App;