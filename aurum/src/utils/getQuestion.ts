import fetchWithAuthentication from "./fetchWithAuthentication";
import CONST from './const';
import { Question } from "../interfaces/text";

const getQuestion = async (
  user: string, // ex) name@email.me
  date: string, // ex) 2021-05-01
) => {
  const response = await fetchWithAuthentication<{data: Question}>(
    `${CONST.API_URL}/texts/single/question/`,
    {
      method: 'POST',
      data: {
        'user_email': user,
        date,
      }
    }
  )

  return response.data;
}

export default getQuestion;