import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        date_complete: Sequelize.DATE,
        date_completion: Sequelize.DATE,
        done: Sequelize.BOOLEAN,
        id_list: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
    return this;
  }
  static associate(models) {}
}

export default Task;
