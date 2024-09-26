import React, { useState, useEffect } from "react";
import "../Style/TaskModal.css";

function TaskModal({ closeModal, addTask, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const task = {
        id: taskToEdit ? taskToEdit.id : Date.now(),
        title,
        description,
      };
      addTask(task);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{taskToEdit ? "Edit Task" : "Create Task"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="title-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />{" "}
          <br />
          <button type="submit" className="submit-btn">
            {taskToEdit ? "Update" : "Submit"}
          </button>
          <button type="button" onClick={closeModal} className="close-btn">
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
