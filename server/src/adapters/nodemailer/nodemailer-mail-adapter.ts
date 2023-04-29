import nodemailer from 'nodemailer'
import { IMailAdapter, ISendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '8f73311c943278',
    pass: '5ce27157c0bfa6'
  }
})

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail(data: ISendMailData) {
    const { subject, body } = data

    await transport.sendMail({
      from: 'Equipe Feedget <hi@feedget.com>',
      to: 'Alexandre Lima <xandiie.ls@gmail.com>',
      subject,
      html: body
    })
  }
}
