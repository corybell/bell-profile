const { errorResponse, successResponse } = require('../response-helper')
const { name, version, dependencies, devDependencies } = require('../../package.json')

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return errorResponse(405, 'Method Not Allowed')
  }

  return successResponse({ name, version, dependencies, devDependencies })
}
  