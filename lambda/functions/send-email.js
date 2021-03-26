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
          Name: ${body.name}
        </h1>
        <h6>
          Email: ${body.email}
        </h6>
        <p>
          Message: ${body.message}
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
  