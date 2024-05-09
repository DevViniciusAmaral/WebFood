import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Content extends Component {
  @service userService;
  @tracked users = [];

  @tracked selectedUser;
  @tracked inputValue = '';

  constructor() {
    super(...arguments);
    this.loadUsers();
  }

  loadUsers = async () => {
    this.users = await this.userService.findAllUsers();
  };

  deleteUser = async (id) => {
    try {
      await this.userService.deleteUser(id);
      this.users = this.users.filter((user) => user.id !== id);
    } catch (error) {
      console.log();
    }
  };

  selectUser = (user) => {
    this.selectedUser = user;
  };

  setInputValue = (event) => {
    this.inputValue = event?.target?.value;
  };

  createUser = async () => {
    if (!this.inputValue) return;

    const user = { name: this.inputValue };
    await this.userService.createUser(user);

    this.selectedUser = null;
    this.users = [...this.users, user];
  };

  updateUser = async () => {
    if (!this.inputValue) return;

    const user = { id: this.selectedUser.id, name: this.inputValue };
    await this.userService.updateUser(user);

    this.selectedUser = null;
    this.users = this.users.map((item) => (item.id === user.id ? user : item));
  };
}
