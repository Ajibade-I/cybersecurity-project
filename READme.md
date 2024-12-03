# CYBERSECURITY-PROJECT

This repository contains the backend code for a secure web application that manages user credentials. It allows for secure storage of user data and provides features like filtering credentials by platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Future Enhancements](#future-enhancements)
- [Contact Information](#contact-information)

---

## Installation

To set up the project, follow these steps:

1. Clone this repository:
 
   git clone https://github.com/your-repo/cybersecurity-project.git
   cd cybersecurity-project

Install all dependencies:

npm install
Set up your environment variables in a .env file:

env
Copy code
MONGO_URI=mongodb://<username>:<password>@<host>:<port>/<database>
PORT=3000
Start the application:

For development:
npm run dev



# Endpoints

## 1. Store User Credentials
Make a POST request to /registration with the following JSON payload in the request body:

json
Copy code
{
  "userName": "JohnDoe",
  "password": "securepassword123",
  "email": "john.doe@example.com",
  "platform": "instagram"
}
Response on Success:

json
Copy code
{
  "message": "Credentials stored successfully."
}
Error Example:

json
Copy code
{
  "error": "All fields are required."
}
## 2. Retrieve User Credentials
Make a POST request to /get-all. Optionally, include the query parameter platform to filter results:


json

[
  {
    "_id": "638a12345bcd67890efg1234",
    "userName": "JohnDoe",
    "email": "john.doe@example.com",
    "platform": "web",
    "createdAt": "2024-11-29T08:00:00.000Z",
    "updatedAt": "2024-11-29T08:00:00.000Z"
  }
]

## API Endpoints
Method	  Endpoint           	  Description
POST	 /saveCredentials	            Stores user credentials.
GET	 /get-all	Retrieves all    credentials (filterable by query).



