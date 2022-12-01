import fetchWithAuthentication from "./fetchWithAuthentication";
import CONST from './const';
import { Answer } from '../interfaces/text';

const uploadAnswer = async (answerData: {
  questionId: number,
  content: string,
}) => {
  try {
    const response = await fetchWithAuthentication<{data: Answer}>(`${CONST.API_URL}/texts/list/answer/`, {
      method: 'POST',
      data: {
        question: answerData.questionId,
        content: answerData.content,
      }
    });
  
    return response.data;
  } catch (error: any) {
    console.log(error.response);
  }
}

export default uploadAnswer;