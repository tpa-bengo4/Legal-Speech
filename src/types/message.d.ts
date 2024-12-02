export type Message = {
  text: string; // メッセージの内容
  timestamp: string; // メッセージの送信時刻
  side: string; // メッセージの位置（'left'は相手、'right'は自分）
};
