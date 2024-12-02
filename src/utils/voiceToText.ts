import { buildGeminirompt, geminiModel } from "@/config";
import { GenerateContentCandidate } from "@google/generative-ai";
import axios from "axios";
import { Buffer } from "buffer";

const getBase64Data = async (audioFilePath: string) => {
  const response = await axios.get(audioFilePath, {
    responseType: "arraybuffer",
  });
  const result = Buffer.from(response.data, "binary").toString("base64");
  return result;
};

export async function convertVoiceToText(audioFile: string) {
  const file = await getBase64Data(audioFile);

  const result = await geminiModel.generateContent([
    {
      inlineData: {
        data: file,
        mimeType: "audio/mp4",
      },
    },
    buildGeminirompt("日本語"),
  ]);

  const candidates = result.response.candidates as GenerateContentCandidate[];

  console.log(candidates[0].content.parts[0].text);

  return candidates[0].content.parts[0].text;
}
