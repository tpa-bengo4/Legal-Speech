import { Attachment, Message } from ".";

export type Consultation = {
  id: number;
  partnerId: number;
  profilePicture?: string;
  name: string;
  status: string;
  lastMessage?: Message;
  messages: Message[];
  attachments: Attachment[];
};
