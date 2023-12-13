import Model from "./Model.js";

class Controller {

  static async add(req, res) {
    try {
      const addModel = await Model.create(req.body);
      res.status(200).json(addModel);
    } catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err);
    }
  }

  static async findall(req, res) {
    try {
      const findModels = await Model.findAll();
      res.status(200).json(findModels);
    } catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err);
    }
  }

  static async findByPk(req, res) {
    try {
      const findModelByPk = await Model.findByPk(req.params.id);
      res.status(200).json(findModelByPk);
    } catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err);
    }
  }

  static async DeleteByPk(req, res) {
    try {
      const [deleteModel] = await Model.destroy({where:{id:req.params.id} });
      res.status(200).json(deleteModel);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
  }

  static async UpdateByPk(req, res) {
    try {
      const [updateModel] = await Model.update(req.body,
        {where:{id: req.params.id}});
      res.status(200).json(updateModel);
    } catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err);
    }
  }

}

export default Controller;
