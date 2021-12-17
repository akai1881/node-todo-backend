require('dotenv').config();
const http = require('http');
const TodosController = require('./controllers');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/todos' && req.method === 'GET') {
        TodosController.getTodos(req, res);
    } else if (req.url.match(/\/todos\/\w+/) && req.method === 'GET') {
        TodosController.getOneTodo(req, res);
    } else if (req.url.match(/\/todos\/\w+/) && req.method === 'DELETE') {
        TodosController.deleteTodo(req, res);
    } else if (req.url === '/todos/create' && req.method === 'POST') {
        TodosController.createTodo(req, res);
    } else if (req.url.match(/\/todos\/edit\/\w+/) && req.method === 'PATCH') {
        TodosController.updateTodo(req, res);
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Page not found' }));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
