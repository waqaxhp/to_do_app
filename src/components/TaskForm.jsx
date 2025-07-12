import React, { useState } from "react";
import { Paper, TextField, Button, Box } from "@mui/material";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Task
        </Button>
      </Box>
    </Paper>
  );
}

export default TaskForm;
