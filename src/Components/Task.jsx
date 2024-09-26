import React from "react";
import { deleteTask } from "../Redux/actions";
import { useDispatch } from "react-redux";
import "../Style/Task.css";

function Task({ task, onEdit }) {
  const dispatch = useDispatch();

  const onDragStart = (e) => {
    e.dataTransfer.setData("id", task.id);
  };

  const handleEditClick = () => {
    onEdit(task);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task.id));
    }
  };

  const getTaskStyle = () => {
    switch (task.status) {
      case "pending":
        return { backgroundColor: "#ffb3b3", color: "black" }; // Lighter red
      case "inprogress":
        return { backgroundColor: "#fff3cd", color: "black" }; // Lighter yellow
      case "completed":
        return { backgroundColor: "#c4e1b0", color: "black" }; // Lighter green
      default:
        return {};
    }
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={onDragStart}
      style={getTaskStyle()}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p className="creation-time">
        <strong>Created:</strong> {task.createdAt}
      </p>
      {task.updatedAt && (
        <p className="updated-time">
          <strong>Updated:</strong> {task.updatedAt}
        </p>
      )}
      <div className="button-group">
        <button onClick={handleEditClick} className="edit-btn">
          Edit
        </button>
        <button onClick={handleDeleteClick} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
