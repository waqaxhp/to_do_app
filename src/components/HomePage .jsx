import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";

function HomePage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do App</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Add a new task
          </Typography>
          <Box display="flex" gap={2}>
            <TextField
              label="Enter task"
              variant="outlined"
              fullWidth
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddTask}>
              Add
            </Button>
          </Box>

          <List sx={{ mt: 4 }}>
            {tasks.map((t, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={t} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default HomePage;
