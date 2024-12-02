import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY || "<API_KEY>",
);
export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const buildGeminirompt = (language: string): string => {
  return `音声ファイルからテキストを抽出してください。ファイルの言語は${language}です。返事に必ずファイルの以外の内容を追加しないでください。`;
};
