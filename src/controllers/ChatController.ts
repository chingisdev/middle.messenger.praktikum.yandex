import { ChatAPI, IChatName } from '../api/ChatAPI';

class ChatController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI('/chats');
  }

  async createChat(data: IChatName) {
    const response = await this.api.create(data);
  }
}

export default new ChatController();
