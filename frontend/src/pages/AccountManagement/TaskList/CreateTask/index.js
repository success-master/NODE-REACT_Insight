import React from 'react';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { TextField, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Select from 'react-select';



const useStyles = makeStyles({
  textField: {
    margin: 0,
    '& input': {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
	  color: '#868E9A',
    },
    '& input::placeholder': {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#868E9A',
      opacity: '0.85'
    }
  }
});

const taskOptions = [
    { value: 'scheduleQbr', title: 'Schedule QBR' },
    { value: 'byName', title: '+ Enter Custom task name'},
    { value: 'scheduleReview', title: 'Schedule Annual Businsss Review'},
    { value: 'scheduleZoom', title: 'Schedule Zoom Checkin'},
    { value: 'scheduleMeetting', title: 'Schedule In-Person Meeting'}
];


const assigneesOptions = [
    { value: '[email||name]', label: 'Angela Martin (CEO)' },
    { value: 'value', label: 'Ryan Horward (VP Customer Success)' }
];






const CreateTaskModal = ({
    open,
    toggle,
    ...props
}) => {
    let classes = useStyles();
    const onInputChange = (inputValue) => {
        console.log(inputValue);
    };

    return (
        <Modal isOpen={open} toggle={toggle} className="task-list--modal">
            <ModalHeader toggle={toggle}>+ Create New Task</ModalHeader>
            <ModalBody>

                <form className="task-list-form">
                    <div className="form-group">
                        <label htmlFor="select-task">Task</label>
                        <Autocomplete
                            id="select-task"
                            options={taskOptions}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} className={classes.textField} placeholder="Please select" variant="outlined" />}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="select-assignees">Assign a Task to someone</label>
                        <Select
                            placeholder="Search members by name or e-mail"
                            options={assigneesOptions}
                            controlShouldRenderValue={true}
                            isClearable={false}
                            isMulti={true}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="selected-assignees-container">

                    </div>
                </form>

            </ModalBody>
            <ModalFooter>
                <button className="button btn-cancel" onClick={toggle}>Cancel</button>
                <button className="button button-primary">+ Create Task</button>
            </ModalFooter>
        </Modal>
    );
};
export default CreateTaskModal;
