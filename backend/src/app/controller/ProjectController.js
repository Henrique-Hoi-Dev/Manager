import List from '../models/List';
import User from '../models/User';

class ProjectController {
  async storeList(req, res) {
    try {
      const { id } = req.params;

      const { title } = req.body;

      const lists = await List.findByPk(id);

      if (!lists) {
        return res.status(401).json({ message: 'User not found' });
      }
      const list = await List.create({
        title: title || 'New List',
        id_user: id,
      });
      console.log(id);

      return res.status(200).json({
        data: list,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }

  async findAlllist(req, res) {
    try {
      const { id } = req.params;
      const lists = await List.findAll({
        attributes: {
          id: id,
        },
      });

      if (!lists) {
        return res.status(401).json({ message: 'lists not found' });
      }

      res.status(200).json(lists);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async deleteList(req, res) {
    try {
      const { id } = req.params;
      //console.log(req.params);
      const lists = await List.destroy({
        where: { id: id },
      });

      if (!lists) {
        return res.status(401).json({ message: 'List not found' });
      }

      return res.status(200).json(lists);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
  }
}

export default new ProjectController();
