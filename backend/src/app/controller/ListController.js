import List from '../models/List';
import Task from '../models/Task';

class ListController {
  async storeTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;

      const list = await List.findByPk(id);

      if (!list) {
        return res.status(400).json({ message: 'List no found' });
      }

      const task = await Task.create({
        title: title || 'New Task',
        description: description || 'Digite uma descricao',
        id_list: id,
      });

      return res.status(200).json({
        data: task,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.update(id);

      if (!task) {
        return res.status(401).json({ message: 'Task not found' });
      }

      await Task.findByIdAndUpdate(id);

      return res.status(200).json(task);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      //console.log(req.params);
      const tasks = await Task.destroy({
        where: { id: id },
      });

      if (!tasks) {
        return res.status(200).json({ message: 'task not found' });
      }

      return res.status(200).json({ message: 'task delete'});
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}

export default new ListController();
