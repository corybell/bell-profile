
function getHeaders () {
  return {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
}

function errorResponse(code, message) {
  return {
    statusCode: code,
    body: JSON.stringify({ message }),
    headers: getHeaders(),
  }
}

function successResponse (body) {
  return {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: getHeaders(),
  }
}

module.exports = {
  errorResponse,
  successResponse,
  getHeaders,
}
