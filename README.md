# Server Take Home

#### This is a simple HTTP server that uses Node.js and Express.
**note: Data will only persist while the server runs. There is no database at this time.

## User experience

1. A user sends an integer via HTTP POST

example:
```json
POST / HTTP/1.1
Host: http://0.0.0.0:8080
Content-Type: application/x-www-form-urlencoded
integer=1
```


2. The local endpoint `http://0.0.0.0:8080` receives the integer

3. The integer is stored as a key and how many times it's been requested is stored as the value

example:
```json
{
  "1": 1,
  "2": 7,
  "25": 3
}
```

4. The server responds with an object containing a message and the map of key values

example:
```json
{
  "message": "The number "1" has been requested 1 time(s)",
  "integerTracker": {
    "1": 1,
    "2": 7,
    "25": 3
  }
}
```



## Steps taken to build this server

1. Setup a working network server
	- mkdir, npm init
	- install express and nodemon so server always runs while testing
2. Handles traffic over HTTP
	- add route for post()
	- install body-parser to parse HTTP requests
3. Receive JSON input and respond with output, maintaining simple state
  - waste a bunch of time considering to integrate a database
  - add the simple logic to create an object that stores requested numbers
	- respond with JSON - include message and number tracker object

