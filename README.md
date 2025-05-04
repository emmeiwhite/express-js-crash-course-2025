# Express, Middlewares, APIs, Postman

## Express:

- Express is used to create our Server
- Server receives requests, processes requests and sends back response
- Responses can have text/html format or application/json format

## Middleware:

- Before the request reaches the Server, we can intercept the request to perform certain operations and performs various checks. This is done with middleware functions.

- We can chain middlewares to perform various checks such as token validation, request data, request logging etc

## req.params and req.query (data sending via URL) | receiving body data as JSON Object (Payload)

- Data is sent to the server with
