# Express, Middlewares, APIs, Postman

## Express:

- Express is used to create our Server
- Server receives requests, processes requests and sends back response
- Responses can have text/html format or application/json format

## Middleware:

- Before the request reaches the Server, we can intercept the request to perform certain operations and various checks. This is done with middleware functions.

- We can chain middlewares to perform many checks such as token validation, request data, request logging etc

## req.params, req.query (data sending via URL) | req.body (receiving body data as JSON Object) --- Payload

- Data is sent to the server via URL in the form of query parameters or route parameter (dynamic route)

- And user also sends data to the server in the form of req.body i-e., on the form submissions etc. This is called sending post request to the server and this way the resource gets created on the server.
