# lambda-response-for-api-gateway
Lambda response for aws api gateway.

## Install
```sh
$ npm install --save lambda-response-for-api-gateway
```

## Usage

```js
const response = require('lambda-response-for-api-gateway');

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let result = {
    'message': 'success'
  };
  let err = {
    'message': 'error'
  };

  if (err) response.error('400', 'Bad Request', context.awsRequestId, callback);
  else response.success(result, callback);
};
```

```js
const response = require('lambda-response-for-api-gateway');

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let errs = [];
  errs[0] = {
    field: 'user_id',
    message: 'user_id required',
    code: '100111'
  };
  if (err.length > 0) response.validationError(errs, context.awsRequestId, callback);
  else response.success(result, callback);
};
```