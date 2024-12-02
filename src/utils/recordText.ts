import { convertVoiceToText } from "./voiceToText";

let mediaRecorder: MediaRecorder;
let audioChunks: BlobPart[] = [];
let medias: Promise<MediaStream>;

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

export const stopRecord = async () => {
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
