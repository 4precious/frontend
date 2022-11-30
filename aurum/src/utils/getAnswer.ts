import fetchWithAuthentication from "./fetchWithAuthentication";
import CONST from './const';
import { Answer } from '../interfaces/text';

const getAnswer = async (questionId: number) => {
  try {
    const response = await fetchWithAuthentication<{data: Answer}>(`${CONST.API_URL}/texts/single/answer?question_id=${questionId}`);
  
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default getAnswer;