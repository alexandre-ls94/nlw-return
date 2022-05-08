import { IMailAdapter } from "../adapters/mail-adapter"
import { IFeedbacksRepository } from "../repositories/feedbacks-repositories"
import { SubmitFeedbackService } from "./submit-feedback-service"

// const mockRepositoryResponse = {
//   "id": "a6d34eaf-5e9b-4e15-a4ce-48e226b9eaaa",
//   "type": "OTHER",
//   "comment": "Test",
//   "screenshot": null
// }

// const mockFeedbackRepository: IFeedbacksRepository = { create: async () => { return mockRepositoryResponse } }
// const mockMailAdapter: IMailAdapter = { sendMail: async () => {} }

// spies - conceito de espiões - jest.fn() verifica se a função foi realmente chamada no service, caso contrário o teste falhará
const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const mockFeedbackRepository: IFeedbacksRepository = { create: createFeedbackSpy }
const mockMailAdapter: IMailAdapter = { sendMail: sendMailSpy }

const submitFeedback = new SubmitFeedbackService(mockFeedbackRepository, mockMailAdapter)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: 'Test',
      screenshot: 'data:image/png;base64,skdjfaoosdfasdfwef'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()

  })

  it('should not be able to submit feedback without type', async () => {
    
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Test',
      screenshot: 'data:image/png;base64,skdjfaoosdfasdfwef'
    })).rejects.toThrow()

  })

  it('should not be able to submit feedback without comment', async () => {
    
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: '',
      screenshot: 'data:image/png;base64,skdjfaoosdfasdfwef'
    })).rejects.toThrow()

  })

  it('should not be able to submit feedback with an screenshot invalid', async () => {
    
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: 'Test',
      screenshot: 'test.png'
    })).rejects.toThrow()

  })
})