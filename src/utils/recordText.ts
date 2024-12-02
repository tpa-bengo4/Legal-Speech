import { convertVoiceToText } from "./voiceToText";

let mediaRecorder: MediaRecorder;
let audioChunks: BlobPart[] = [];
let medias: Promise<MediaStream>;

/**
 * 録音しはじめる関数
 */
export const startRecord = () => {
  medias = navigator.mediaDevices.getUserMedia({ audio: true });
  medias.then((stream) => {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start(1000);
    mediaRecorder.ondataavailable = function (event: BlobEvent) {
      audioChunks.push(event.data);
    };
  });
};

/**
 * 音声の録音を停止し、テキストに変化する関数
 * @returns {Promise<string>} 変化されてテキスト
 */
export const stopRecord = async (): Promise<string> => {
  const audioBlob = new Blob(audioChunks);
  const recordedVoice = URL.createObjectURL(audioBlob);
  audioChunks = [];

  mediaRecorder.stop();

  medias.then((media) => {
    media.getTracks().forEach((track) => track.stop());
  });

  const convertedText = await convertVoiceToText(recordedVoice);
  return convertedText;
};
