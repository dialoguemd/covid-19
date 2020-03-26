import api from 'apisauce'

const faqApi = api.create({ baseURL: process.env.REACT_APP_FAQ_ENDPOINT })

interface GetAnswersResponse {
  answers: string[]
}

export const getAnswers = async (question: string, language?: string) => {
  const headers: Record<string, string> = {}

  if (language) {
    headers['Accept-Language'] = language
  }

  const res = await faqApi.get<GetAnswersResponse>(
    '/answers',
    { question },
    { headers }
  )

  if (res.ok) {
    return res.data.answers
  } else {
    console.error('Failed to load answers', res)
    throw new Error('Failed to load answers')
  }
}
