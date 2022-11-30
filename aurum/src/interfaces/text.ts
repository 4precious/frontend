export interface Question {
  id: number;
  user_id: number;
  content: string;
  created_at: Date;
}

export interface Answer {
  id: number;
  user_email: string;
  question: number; // questionID
  content: string;
  created_at: Date;
  result_hapiness?: number;
  result_anxiety?: number;
  result_embarrassment?: number;
  result_sadness?: number;
  result_anger?: number;
  result_injury?: number;
}