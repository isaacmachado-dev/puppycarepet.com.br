// src/whatsapp/whatsapp.service.ts
import axios from 'axios';

export class WhatsAppService {
  private base = 'https://graph.facebook.com/v20.0';
  constructor(
    private phoneNumberId = process.env.WHATSAPP_PHONE_ID!,
    private token = process.env.META_TOKEN!,
  ) {}

  async sendTemplate(
    to: string,
    template: string,
    lang = 'pt_BR',
    components?: any[],
  ) {
    const url = `${this.base}/${this.phoneNumberId}/messages`;
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'template',
      template: { name: template, language: { code: lang }, components },
    };
    const { data } = await axios.post(url, payload, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
    return data; // contém message id
  }

  async sendText(to: string, body: string) {
    const url = `${this.base}/${this.phoneNumberId}/messages`;
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { preview_url: false, body },
    };
    const { data } = await axios.post(url, payload, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
    return data;
  }
}
