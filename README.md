# Fullstack Exercise - BigPanda

Creating a full working enviroment that allow users to add new messages and watch all the the messages history.

## General Design

### Database

- **"messages"** collection based on the schema: 
  - *email* - string - the email address of the user.
  - *message* - string - the message that the user send.
  - *timeStamp* - string - the datetime of when the message was sent.  

__
### Server
Support on the folloing API calls:
  - POST **<Your_Server_host>/api/messages/add** - add new message object.
    
    - Body parameters:
      - "**email**" (string, required).
      - "**message**" (string, required).

    #### Example: 
    - Request: 
         - URL: ```POST http://localhost:8080/api/messages/add```
         - Body: ```{"message": "test13","email": "aaa@aaa.com"}```

    - Response: 
```
  {
    "message": "Message save successfully.",
    "data": {
        "_id": "5fb50704f4a79b20d828ded1",
        "email": "aaa@aaa.com",
        "message": "test13",
        "__v": 0
  }
```
__
  - GET **<Your_Server_host>/api/messages/getItems** - return all the messages according to the given filter value. 
    - Query parameters: 
       - **"filterBy"**(optional):  string, filter messages which their user email start with the given value. 
         If not supply - will display always the last 10 messages. 

    #### Example:
    - Request: ```GET http://localhost:8080/api/messages/getItems```

    - Response: 
```
{
    "data": [
        {
            "_id": "5fb6af1067137b49b40112f8",
            "email": "aaa@gmail.com",
            "message": "sdsadadasd",
            "timeStamp": "2020-11-19T17:44:48.019Z",
            "__v": 0
        }
    ]
}
```
  
  __
  - GET **<Your_Server_host>/api/messages/getLastActivatedTime** - return the last time user post message according to the given "email" parameter value.
 
    - Query parameters: 
       - **"email"**:  string, required.

    - Request: ```GET http://localhost:8080/api/messages/getLastActivatedTime?email=aaa@aaa.com```
    - Response: 
```
{
    "lastActive": "2020-11-19T18:18:06.138Z"
}
```
  
__

## Installation

- Download the project into your local machine.
- Please make sure that you have already installed Node and NPM environments on your computer.

### Database

- Install as you would normally install MongoDB environment.
- Make sure your database instance is running.
  
  
### Server
- Enter into to the "Server" folder from the command-line and run the command "npm install". 
- Edit ".env" file inside the "Server" folder to connect your MongoDB database by changing the value of "DB_HOST" (your have an example in the file).
- Run "npm start" to start running your server.


### Client

- Enter into to the "Client" folder from the command-line and run the command "npm install". 
- Edit ".env" file inside the "Client" folder to supply the Server API host address by changing the value of "REACT_APP_API" (your have an example in the file).
- Run "npm start" to start running your Client.

__

## Usage

- Open you browser and navigate into your client host address.
- Start sending messages and have fun!
