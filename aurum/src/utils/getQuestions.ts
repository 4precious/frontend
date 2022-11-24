import fetchWithAuthentication from "./fetchWithAuthentication"
import CONST from './const';
import { Question } from "../interfaces/text";

const getQuestions = async () => {
  const response = await fetchWithAuthentication<Question[]>(`${CONST.API_URL}/texts/questions`);
  console.log(response);
}

export default getQuestions;