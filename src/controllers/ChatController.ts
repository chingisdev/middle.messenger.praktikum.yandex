import { ChatAPI, IChatName } from '../api/ChatAPI';
import store from '../utils/Components/Store';

class ChatController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI('/chats');
  }

  async createChat(data: IChatName) {
    await this.api.create(data);
    await this.fetchChats();
  }

  async fetchChats() {
    try {
      const chats  = await this.api.read();
      store.set('currentChats', chats);
      console.log('chats', chats);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ChatController();
