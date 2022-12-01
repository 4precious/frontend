import { Answer } from "../interfaces/text";

type Emotion = 'angry' | 'anxiety' | 'happiness' | 'embarrassment' | 'injury' | 'sadness' | 'default'

const getRepresentEmotion = (answer: Answer | null) => {
  if (answer === null) {
    return 'default'
  }
  let emotion: Emotion = 'default';
  let max = -1;

  const emotionsValues: {
    [key: string]: number;
  } = {
    hapiness: answer.result_happiness ?? -1,
    anxiety: answer.result_anxiety ?? -1,
    embarrassment: answer.result_embarrassment ?? -1,
    sadness: answer.result_sadness ?? -1,
    anger: answer.result_anger ?? -1,
    injury: answer.result_injury ?? -1,
  }

  Object.keys(emotionsValues).forEach((key) => {
    if (emotionsValues[key] > max) {
      max = emotionsValues[key];
      emotion = key as Emotion;
    }
  });

  console.log(
    emotionsValues,
    emotion
    );
  return emotion;
}

export default getRepresentEmotion;