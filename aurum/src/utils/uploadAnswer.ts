import fetchWithAuthentication from "./fetchWithAuthentication";
import CONST from './const';
import { Answer } from '../interfaces/text';

const uploadAnswer = async (answerData: {
  questionId: number,
  content: string,
}) => {
  const response = await fetchWithAuthentication<{data: Answer}>(`${CONST.API_URL}/texts/answer/`, {
    method: 'POST',
    data: {
      question: answerData.questionId,
      content: answerData.content,
    }
  });

  return response.data;
}

export default uploadAnswer;