import sendMail from '../utils/nodemailer'

export default defineEventHandler(async (event) => {
  const { title, content, to, cc, bcc } = await readBody(event)
  if (!title || !content || !to) {
    return { msg: 'title & content & to are required' }
  }
  try {
    const info = await sendMail({ title, content, to, cc, bcc })
    return info
  } catch (error) {
    return error
  }
})