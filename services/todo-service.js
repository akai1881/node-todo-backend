const todos = require('./../models/todosModel.json');
const path = require('path');
const writeDataFile = require('./../utils/write-data.js');

const getAll = () => {
    return new Promise((resolve) => {
        resolve(todos);
    });
};

const getById = (id) => {
    return new Promise((resolve) => {
        const todo = todos.find((todo) => todo.id == id);
        resolve(todo);
    });
};

const create = (todo) => {
    return new Promise((resolve) => {
        const newTodos = [...todos, todo];
        writeDataFile(path.resolve('models', 'todosModel.json'), newTodos);
        resolve(todo);
    });
};

const update = (id, todo) => {
    return new Promise((resolve) => {
        const index = todos.findIndex((todo) => todo.id == id);
        todos[index] = { ...todo, id };
        writeDataFile(path.resolve('models', 'todosModel.json'), todos);
        resolve(todos[index]);
    });
};

const deleteOne = (id) => {
    return new Promise((resolve) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        writeDataFile(path.resolve('models', 'todosModel.json'), newTodos, resolve);
    });
};

module.exports = {
    getAll,
    getById,
    deleteOne,
    create,
    update,
};
