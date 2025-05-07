function apiKey(req, res, next) {
  const globalAPIKey = '1234567'

  const userAPIKey = req.query.apiKey

  if (userAPIKey && userAPIKey === globalAPIKey) {
    //   if the userAPI matches our system's API key, process the request and send the data
    next()
  } else {
    res.json([
      {
        message: 'API key mismatch'
      }
    ])
  }
}

export default apiKey
