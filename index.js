'use strict';

const Response = {};

Response.success = (body, callback) => {
    callback(null, body);
};
Response.validationError = (errors, requestId, callback) => {
    response._error(422, "Validation failed!", errors, requestId, callback);
};
Response.error = (statusCode, message, requestId, callback) => {
    response._error(statusCode, message, [], requestId, callback);
};
Response._error = (statusCode, message, errors, requestId, callback) => {
    console.error(statusCode, message);
    const body = {
        lambdaRequestId: requestId,
        message: message,
        errors: errors
    };
    callback(JSON.stringify({statusCode: statusCode, body: body}));
};

module.exports = Response;
