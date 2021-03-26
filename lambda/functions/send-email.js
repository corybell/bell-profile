const SparkPost = require('sparkpost');
const { errorResponse, successResponse } = require('../response-helper')

const client = new SparkPost();

const from = 'bellcode@mail.corybell.net'

const subject = 'Contact Request!'

const recipients = [
  { address: 'cory.bell.developer@gmail.com' }
]

function getEmailHtml (body) {
  return `
    <html>
      <body>
        <h1>
          ${body.name}
        </h1>
        <h2>
          ${body.email}
        </h2>
        <p>
          ${body.message}
        </p>
      </body>
    </html>
  `
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return errorResponse(405, 'Method Not Allowed')
  }

  try {
    const html = getEmailHtml(JSON.parse(event.body))

    const data = await client.transmissions.send({
      content: {
        from,
        subject,
        html
      },
      recipients
    })

    return successResponse(data)
  } catch (err) {
    return errorResponse(err.statusCode, err)
  }
}
  