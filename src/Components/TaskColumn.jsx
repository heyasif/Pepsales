import React from "react";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "../Redux/actions";
import "../Style/TaskColumn.css";

function TaskColumn({ title, tasks, status, onEditTask }) {
  const dispatch = useDispatch();

  const onDrop = (e) => {
    const id = e.dataTransfer.getData("id");
    dispatch(updateTaskStatus(parseInt(id), status));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };
  const getHeadingStyle = () => {
    switch (title) {
      case "Pending":
        return { color: "red" };
      case "In Progress":
        return { color: "#f2c635" };
      case "Completed":
        return { color: "green" };
      default:
        return {};
    }
  };

  return (
    <div className="task-column" onDrop={onDrop} onDragOver={allowDrop}>
      <h3 style={getHeadingStyle()}>{title}</h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEditTask} />
      ))}
    </div>
  );
}

export default TaskColumn;
