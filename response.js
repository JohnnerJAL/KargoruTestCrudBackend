const code = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
  }
  
  function success(req, res, data, status=200) {
    res.status(status).send({
      error: '',
      data: data || code[status]
    });
  }
  
  module.exports = {
    success
  }