import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NUXT_EMAIL_SERVICE_AUTH_USER,
    pass: process.env.NUXT_EMAIL_SERVICE_AUTH_PW
  }
})

const sendMail = ({ title, content, to, cc, bcc }) => {
  const options = {
    from: process.env.NUXT_EMAIL_DEFAULT_FROM,
    to: to,
    subject: title,
    html: content
  }
  if (cc !== undefined) {
    options['cc'] = cc
  }
  if (bcc !== undefined) {
    options['bcc'] = bcc
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject([err, undefined])
      } else {
        resolve([undefined, info])
      }
    })
  })
}

export default sendMail