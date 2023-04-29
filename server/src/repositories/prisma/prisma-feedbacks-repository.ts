import { prisma } from '../../prisma'
import {
  IFeedbackCreateData,
  IFeedbacksRepository
} from '../feedbacks-repositories'

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create(data: IFeedbackCreateData) {
    const { type, comment, screenshot } = data

    const feedback = await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot
      }
    })

    return feedback
  }
}
