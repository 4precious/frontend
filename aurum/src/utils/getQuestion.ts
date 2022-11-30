import fetchWithAuthentication from "./fetchWithAuthentication";
import CONST from './const';
import { Question } from "../interfaces/text";

const getQuestion = async (
  user: string, // ex) name@email.me
  date: string, // ex) 2021-05-01
) => {
  try {
    const response = await fetchWithAuthentication<{data: Question[]}>(
      `${CONST.API_URL}/texts/single/question/`,
      {
        method: 'POST',
        data: {
          'user_email': user,
          date,
        }
      }
    )
    if (response.data.length === 0) {
      return null;
    }
    return response.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default getQuestion;