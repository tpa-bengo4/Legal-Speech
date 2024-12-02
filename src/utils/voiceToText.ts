import { buildGeminirompt, geminiModel } from "@/config";
import { GenerateContentCandidate } from "@google/generative-ai";
import axios from "axios";
import { Buffer } from "buffer";
/**
 * 音声ファイルのコンテンツをbase64の形に変化する関数
 * @param audioFilePath 音声ファイルのURL
 * @returns {Promise<string>} base64の形に変化されてファイルの内容
 */
const getBase64Data = async (audioFilePath: string): Promise<string> => {
  const response = await axios.get(audioFilePath, {
    responseType: "arraybuffer",
  });
  const result = Buffer.from(response.data, "binary").toString("base64");
  return result;
};

/**
 * Gemini APIを使って、音声からテキストに変化する関数
 * @param audioFile 音声のファイルのURL
 * @param language 音声ファイルの言語
 * @returns {Promise<string>} 変化されたテキスト
 */
export async function convertVoiceToText(
  audioFile: string,
  language: string = "日本語",
): Promise<string> {
  const file = await getBase64Data(audioFile);

  const result = await geminiModel.generateContent([
    {
      inlineData: {
        data: file,
        mimeType: "audio/mp4",
      },
    },
    buildGeminirompt(language),
  ]);

  const candidates = result.response.candidates as GenerateContentCandidate[];

  return candidates[0].content.parts[0].text || "";
}
