import React from "react";
import {upperFirst} from 'lodash';
import Task from "./Task";


function Panel(props) {

  const colorMap = {
    todo: 'border-secondary',
    progress: 'border-primary',
    review: 'border-warning',
    done: 'border-success'
  }

  return (

      <div className="">
        <h3 className={`border-bottom border-4 ${colorMap[props.status]} pb-2`}>
          {upperFirst(props.status)}
        </h3>
        {
          props.tasks
              .filter(task => task.status === props.status)
              .map(task => (
                  <Task
                      priority={props.priority}
                      key={task.id}
                      task={task}
                      left={props.left}
                      right={props.right}
                      deleteTask={props.deleteTask}
                  />))
        }

      </div>
  );
}

export default Panel;