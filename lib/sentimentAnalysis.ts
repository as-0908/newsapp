import axios from 'axios';

const GOOGLE_API_URL = 'https://language.googleapis.com/v1/documents:analyzeSentiment';
const API_KEY = process.env.GOOGLE_API_KEY; 
export async function analyzeSentiment(text: string): Promise<number> {
  try {
    const response = await axios.post(`${GOOGLE_API_URL}?key=${API_KEY}`, {
      document: {
        type: 'PLAIN_TEXT',
        language: 'ja',
        content: text,
      },
      encodingType: 'UTF8',
    });

 
    const sentimentScore = response.data.documentSentiment.score;
    return sentimentScore;
  } catch (error) {
    console.error('感情分析エラー:', error);
    return 0; 
  }
} 