import React from 'react';
import './App.css';
import TaskList from './components/TaskList' 
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'fixed',
      zIndex: 1,
      bottom: 30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <CssBaseline />
      <Container className="task-list" maxWidth="md">
        <TaskList />
        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <AddIcon />
        </Fab>
      </Container>
    </React.Fragment>
  );
}

export default App;
