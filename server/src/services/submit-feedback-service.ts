import { IMailAdapter } from "../adapters/mail-adapter"
import { IFeedbacksRepository } from "../repositories/feedbacks-repositories"

interface ISubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  // private feedbacksRepository: FeedbacksRepository

  constructor(
    // feedbacksRepository: FeedbacksRepository
    private feedbacksRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter
  ) {
    // this.feedbacksRepository = feedbacksRepository
  }

  async execute(request: ISubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário : ${comment}</p>`,
        `</div>`
      ].join('\n')
    })

    return feedback
  }
}
