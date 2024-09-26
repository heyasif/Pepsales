import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, setFilter } from "./Redux/actions";
import TaskBoard from "./Components/TaskBoard";
import TaskModal from "./Components/TaskModal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const filter = useSelector((state) => state.tasksReducer.filter);

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(filter.toLowerCase()) ||
      task.description.toLowerCase().includes(filter.toLowerCase())
  );

  const openModal = () => {
    setIsModalOpen(true);
    setTaskToEdit(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (task) => {
    if (taskToEdit) {
      dispatch(editTask({ ...task, id: taskToEdit.id })); // Ensure to pass the correct id
    } else {
      dispatch(addTask(task));
    }
    closeModal();
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading-text">Swimlane</h1>
        <div className="create-task-container">
          <button onClick={openModal} className="create-btn">
            Create Task
          </button>
          <input
            className="filter-input"
            type="text"
            placeholder="Filter by title or description"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </header>
  
      <TaskBoard tasks={filteredTasks} onEditTask={handleEditTask} />
  
      {isModalOpen && (
        <TaskModal
          closeModal={closeModal}
          addTask={handleAddTask}
          taskToEdit={taskToEdit}
        />
      )}
    </div>
  );
  
}

export default App;
