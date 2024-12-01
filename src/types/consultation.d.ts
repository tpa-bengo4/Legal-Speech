import { Attachment, Message } from ".";

// 相談情報を表す型
export type Consultation = {
  id: number; // 相談のID
  partnerId: number; // 相談相手のID
  profilePicture?: string; // プロフィール写真（任意）
  name: string; // 相談相手の名前
  status: string; // 相談相手のステータス（例: オンライン, オフライン）
  lastMessage?: Message; // 最後のメッセージ（任意）
  messages: Message[]; // 相談中の全メッセージ
  attachments: Attachment[]; // 添付ファイルのリスト
};
