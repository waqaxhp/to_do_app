import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

function TaskItem({ task, onDelete, onUpdate, onToggle }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    onUpdate({ ...task, title: editedTitle, description: editedDescription });
    setEditMode(false);
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: 1,
        border: "1px solid #ddd",
        borderRadius: 1,
        p: 2,
      }}
    >
      <Box display="flex" width="100%" alignItems="center">
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />

        {editMode ? (
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              fullWidth
            />
            <TextField
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              fullWidth
              multiline
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
        ) : (
          <ListItemText
            primary={task.title}
            secondary={task.description}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              flexGrow: 1,
            }}
          />
        )}

        <IconButton
          onClick={() => (editMode ? handleSave() : setEditMode(true))}
        >
          {editMode ? <Save /> : <Edit />}
        </IconButton>

        <IconButton onClick={() => onDelete(task.id)}>
          <Delete />
        </IconButton>
      </Box>
    </ListItem>
  );
}

export default TaskItem;
