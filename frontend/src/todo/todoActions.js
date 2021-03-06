import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
};

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(res => dispatch(clear()))
            .then(res => dispatch(search()))
            .catch(err => console.log(err));
    };
};

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(res => dispatch(search()))
            .catch(err => console.log(err));
    };
};

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(res => dispatch(search()))
            .catch(err => console.log(err));
    }
};

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(res => dispatch(search()))
            .catch(err => console.log(err));
    }
};

export const clear = () => {
    return { type: 'TODO_CLEAR' }
};