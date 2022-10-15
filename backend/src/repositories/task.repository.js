const { Task } = require('../models');

class TaskRepository {
  constructor() {
    this.model = Task;
  }

  async getAll() {
    return await this.model.find();
  }

  async getById(id) {
    return await this.model.findById(id);
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async delete(id) {
    await this.model.findByIdAndDelete(id);
    return true;
  }
}

module.exports = TaskRepository;
