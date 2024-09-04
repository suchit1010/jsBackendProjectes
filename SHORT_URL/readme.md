

---

# URL Shortener

## Overview
The URL Shortener is a web service that allows users to generate shortened URLs for any valid web address. It also supports user authentication, allowing normal users to manage their own URLs and administrators to access and manage all URLs. The service includes redirection to the original URL when the shortened link is accessed, as well as tracking the total number of visits to each shortened URL for analytical purposes.

## Features
- **User Authentication**: Users can sign up and log in to manage their URLs. Admins have full access to all URLs.
- **Shorten URLs**: Convert long URLs into shorter, more manageable links.
- **Redirect Users**: Automatically redirect users to the original URL when they visit the shortened link.
- **Visit Tracking**: Track the number of times each shortened URL has been accessed.
- **Role-Based Access Control**: Normal users can only view and manage their URLs, while admins can view and manage all URLs.

## Routes

### 1. Generate a Short URL
- **Method**: `POST`
- **Endpoint**: `/url`
- **Description**: Generates a new shortened URL for the logged-in user and returns it in the format `example.com/random-id`.

### 2. Redirect to the Original URL
- **Method**: `GET`
- **Endpoint**: `/:shortId`
- **Description**: Redirects users to the original URL associated with the provided `shortId` and logs the visit.

### 3. User Signup
- **Method**: `GET`, `POST`
- **Endpoint**: `/user/signup`
- **Description**: Displays a signup form and allows new users to create an account.

### 4. User Login
- **Method**: `GET`, `POST`
- **Endpoint**: `/user/login`
- **Description**: Displays a login form and allows users to log in to their accounts.

### 5. View URLs (Normal Users)
- **Method**: `GET`
- **Endpoint**: `/`
- **Description**: Displays a list of URLs created by the logged-in user.

### 6. View All URLs (Admins)
- **Method**: `GET`
- **Endpoint**: `/admin/urls`
- **Description**: Displays a list of all URLs for admin users.

## Installation

### 1. Clone the Repository
To get started, clone the repository to your local machine:
```sh
git clone <repository_url>
cd <repository_directory>
```

### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:
```sh
npm install express mongoose cookie-parser jsonwebtoken ejs
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```
MONGO_URI=mongodb://127.0.0.1:27017/short-url
JWT_SECRET=your_jwt_secret
PORT=8001
```

### 4. Run the Project
Start the project using the following command:
```sh
npm start
```

## Usage

### User Signup
To create a new account, visit `/user/signup` and fill out the signup form.

### User Login
To log in, visit `/user/login` and enter your credentials.

### Generate a Short URL
Once logged in, you can create a shortened URL by sending a `POST` request to the `/url` endpoint with the original URL included in the request body.

**Example Request:**
```sh
POST /url
{
  "originalUrl": "http://example.com"
}
```

**Example Response:**
```json
{
  "shortUrl": "example.com/short-id"
}
```

### View URLs
- **Normal Users**: After logging in, normal users can view their URLs on the homepage (`/`).
- **Admins**: Admins can view all URLs by visiting `/admin/urls`.

### Redirect to Original URL
To be redirected to the original URL, simply visit the shortened URL in the format `example.com/short-id`.

### Track URL Visits
The service automatically tracks the number of visits for each shortened URL, providing insights into the popularity and usage of the links.

## Prerequisites

- **MongoDB**: Ensure MongoDB is properly set up and connected before running the application.

## Example

### Shortened URL Format
The shortened URL is typically presented in the following format:
```
example.com/short-id
```

## Role-Based Access Control

- **Normal Users**: Can only view and manage URLs they have created.
- **Admins**: Have access to view and manage all URLs within the system.

## Purpose of Tracking Visits

- **Monitor Popularity**: Understand how often a particular link is accessed.
- **Analytics**: Gain insights into user behavior and link effectiveness.
- **Activity Check**: Determine whether the URLs are still being used actively.

---
