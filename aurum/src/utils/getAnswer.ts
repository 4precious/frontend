import fetchWithAuthentication from "./fetchWithAuthentication";
import CONST from './const';
import { Answer } from '../interfaces/text';

const getAnswer = async (questionId: number) => {
  const response = await fetchWithAuthentication<{data: Answer}>(`${CONST.API_URL}/texts/single/answer?question_id=${questionId}`);

  return response.data;
}

export default getAnswer;