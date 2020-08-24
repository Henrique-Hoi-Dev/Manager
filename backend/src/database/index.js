import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Task from '../app/models/Task';
import Project from '../app/models/Project';
import List from '../app/models/List';

import databaseConfig from '../config/database';

const models = [User, File, Task, Project, List];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connetion = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connetion))
      .map(
        (model) => model.associate && model.associate(this.connetion.models)
      );
  }

  mongo() {
    this.mongoConnetion = mongoose.connect(
      'mongodb://localhost:27017/gerenciador',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
