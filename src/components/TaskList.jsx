import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onUpdate, onToggle }) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
}

export default TaskList;
