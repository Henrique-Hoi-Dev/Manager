import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controller/SessionController';
import FileController from './app/controller/FileController';
import UserController from './app/controller/UserController';
import ProjectController from './app/controller/ProjectController';
import ListController from './app/controller/ListController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/project/:id/project', UserController.findAllProjects); // Busca o projecto
routes.get('/project/project/:id', UserController.findByIdProject); // Busca o projecto seleciona por id
routes.post('/project/new/:d', UserController.storeProject); // Cria um novo projeto para o usuario
routes.delete('/project/project/:id', UserController.deleteProject); // delete o projeto do usuario

routes.post('/project/:id/list', ProjectController.storeList); // cria lista no projeto do usuario

routes.get('/project/list/:id', ProjectController.findAlllist); // cria lista no projeto do usuario
routes.delete('/project/lists/:id', ProjectController.deleteList); // delete o projeto do usuario

routes.post('/lists/:id/tasks', ListController.storeTask); // cria uma tarefa para a lista
routes.put('/lists/task/:id/done', ListController.updateTask); // atualiza conclusao da tarefa
routes.delete('/lists/task/:id', ListController.deleteTask); // deletar uma tarefa da lista

export default routes;
