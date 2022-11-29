import fetchWithAuthentication from "./fetchWithAuthentication"
import CONST from './const';
import { Question } from "../interfaces/text";

const getQuestions = async () => {
  const response = await fetchWithAuthentication<{data: Question[]}>(`${CONST.API_URL}/texts/question/`);
  console.log(response.data);

  return response.data;
}

export default getQuestions;