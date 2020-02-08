import { api } from '../components/util';

const initialState = {
    tasks: [
        {
            _id: 0,
            name: 'test',
            description: 'test description',
            priority: 2,
            isCompleted: true,
        },
    ],
};
/**
 * @function getAllTasks is anonymous function that will call and return the tasks in the database for a user
 */
const getAllTasks = () => {
    return async (dispatch, getState) => {
        let req = api + '/all-tasks';
        let state = getState();

        let response = await fetch(req, {
            method: 'GET',
            headers: {
                Authorization: state.auth.token,
            },
        });

        if (response.status === 200) {
            let json = await response.json();
            dispatch({ type: 'GET_ALL_TASKS', data: json });
        } else dispatch({ type: 'API_FAIL', data: response });
    };
};
/**
 * @function toggleTaskComplete this will udpate the status of the task in the database
 * @param {id} id 
 * @param {object} currentState 
 */
const toggleTaskComplete = (id, currentState) => {
    return async (dispatch, getState) => {
        let req = api;
        let state = getState();

        if (currentState) req += '/mark-undone';
        else req += '/mark-done';

        req += '/' + id;

        let response = await fetch(req, {
            method: 'PATCH',
            headers: {
                Authorization: state.auth.token,
            },
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};
/**
 * @function editTask this will update the task in the database
 * @param {object} task 
 */
const editTask = task => {
    return async (dispatch, getState) => {
        let req = api + '/update-task/' + task.id;
        let state = getState();

        let response = await fetch(req, {
            method: 'PATCH',
            headers: {
                Authorization: state.auth.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: task.name,
                description: task.description,
                dateDue: task.date,
                isCompleted: task.isComplete,
                priority: task.priority,
            }),
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};
/**
 * @function addTask will add a task to the database
 * @param {object} task 
 */
const addTask = task => {
    return async (dispatch, getState) => {
        let req = api + '/add-task';
        let state = getState();

        if (!task.name) {
            dispatch({ type: 'API_FAIL', data: 'Missing required Fields' });
            return;
        }

        let response = await fetch(req, {
            method: 'POST',
            headers: {
                Authorization: state.auth.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: task.name,
                description: task.description,
                dateDue: task.date,
                isCompleted: task.isComplete,
                priority: task.priority,
            }),
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};
/**
 * @function deleteTask deletes a task from the database
 * @param {id} taskID 
 */
const deleteTask = taskID => {
    return async (dispatch, getState) => {
        let req = api + '/delete-task/' + taskID;
        let state = getState();

        let response = await fetch(req, {
            method: 'DELETE',
            headers: {
                Authorization: state.auth.token,
            },
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};
/**
 * @function taskReducer dispatchs actions for tasks
 * @param {object} state 
 * @param {function} action 
 */
const taskReducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'GET_ALL_TASKS':
            newState.tasks = action.data.tasks;
            break;
        case 'API_FAIL':
            console.error('API Failed with response: ', action.data);
            break;
        case 'LOGOUT':
            newState.tasks = [];
            break;
        default:
            break;
    }

    return newState;
};

export { getAllTasks, toggleTaskComplete, editTask, addTask, deleteTask };
export default taskReducer;
