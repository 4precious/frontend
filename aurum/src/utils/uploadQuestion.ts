import { Question } from "../interfaces/text";
import CONST from './const';
import fetchWithAuthentication from "./fetchWithAuthentication";

const uploadQuestion = async (question: string) => {
  const response = await fetchWithAuthentication<{data: { content: string }}>(`${CONST.API_URL}/texts/question/`, {
    method: 'POST',
    data: {
      content: question,
    },
  })

  console.log(response.data);
}

export default uploadQuestion;