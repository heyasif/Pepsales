import React from "react";
import TaskColumn from "./TaskColumn";
import "../Style/TaskBoard.css";

function TaskBoard({ tasks, onEditTask }) {
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const inProgressTasks = tasks.filter((task) => task.status === "inprogress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="task-board">
      <TaskColumn
        title="Pending"
        tasks={pendingTasks}
        status="pending"
        onEditTask={onEditTask}
      />
      <TaskColumn
        title="In Progress"
        tasks={inProgressTasks}
        status="inprogress"
        onEditTask={onEditTask}
      />
      <TaskColumn
        title="Completed"
        tasks={completedTasks}
        status="completed"
        onEditTask={onEditTask}
      />
    </div>
  );
}

export default TaskBoard;
