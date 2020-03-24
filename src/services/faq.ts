import api from 'apisauce'

const URL = 'https://covidfaq.apps.dev.ca-central-1.dialoguecorp.com' // FIXME: through config?

const faqApi = api.create({ baseURL: URL })

interface GetAnswersResponse {
  answers: string[]
}

export const getAnswers = async (question: string) => {
  const res = await faqApi.get<GetAnswersResponse>('/answers', { question })

  if (res.ok) {
    return res.data.answers
  } else {
    console.error('Failed to load answers', res)
    throw new Error('Failed to load answers')
  }
}
