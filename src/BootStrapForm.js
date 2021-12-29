import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Alert } from 'react-bootstrap';

const BootStrapForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false); //Not implemented yet. Will need to modify the task object to include reminder field
  const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!name || !date) {
      setError(true);
      return;
    }
    const newTask = { name, date, reminder };
    addTask(newTask);
    setName('');
    setDate('');
    setReminder(false);
    setError(false);
    setToggle(false);
  };

  const taskNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const taskDateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const reminderChangeHandler = (event) => {
    setReminder(event.currentTarget.checked);
  };

  const addTaskButtonHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div class='d-flex justify-content-between mb-3'>
        <h2>Task Tracker</h2>
        <Button
          variant={toggle ? 'danger' : 'success'}
          type='submit'
          onClick={addTaskButtonHandler}
        >
          {toggle ? 'Close' : 'Add Task'}
        </Button>
      </div>
      {error && (
        <Alert variant='warning'>Please enter Task name or date!</Alert>
      )}

      {toggle && (
        <Container
          fluid
          className='p-3 m-6 mb-3'
          style={{
            width: '100%',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        >
          <Row>
            <Col>
              <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId='formTaskName'>
                  <Form.Label>Task</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Task Here'
                    value={name}
                    onChange={taskNameChangeHandler}
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formTaskDate'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Task Date'
                    value={date}
                    onChange={taskDateChangeHandler}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Check
                    type='checkbox'
                    label='Set Reminder'
                    checked={reminder}
                    onChange={reminderChangeHandler}
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default BootStrapForm;
