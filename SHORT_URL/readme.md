---

# URL Shortener

## Overview
The URL Shortener is a simple web service that allows users to generate shortened URLs for any valid web address. It also provides redirection to the original URL when the shortened link is accessed and tracks the total number of visits to each shortened URL for analytical purposes.

## Features
- **Shorten URLs**: Convert long URLs into shorter, more manageable links.
- **Redirect Users**: Automatically redirect users to the original URL when they visit the shortened link.
- **Visit Tracking**: Track the number of times each shortened URL has been accessed.

## Routes

### 1. Generate a Short URL
- **Method**: `POST`
- **Endpoint**: `/url`
- **Description**: Generates a new shortened URL and returns it in the format `example.com/random-id`.

### 2. Redirect to the Original URL
- **Method**: `GET`
- **Endpoint**: `/:shortId`
- **Description**: Redirects users to the original URL associated with the provided `shortId`.

### 3. Track URL Visits
- **Description**: Automatically tracks and stores the number of visits/clicks on each shortened URL.

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
npm install express mongoose nodemon shortid
```

### 3. Run the Project
Start the project using the following command:
```sh
npm start
```

## Usage

### Generate a Short URL
To create a shortened URL, send a `POST` request to the `/url` endpoint with the original URL included in the request body.

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

### Redirect to Original URL
To be redirected to the original URL, simply visit the shortened URL in the format `example.com/short-id`.

### Track URL Visits
The service tracks and updates the number of times each shortened URL is accessed, providing insights into the popularity and usage of the links.

## Prerequisites

- Ensure MongoDB is properly set up and connected before running the application.

## Example

### Shortened URL Format
The shortened URL is typically presented in the following format:
```
example.com/short-id
```

## Purpose of Tracking Visits

- **Monitor Popularity**: Understand how often a particular link is accessed.
- **Analytics**: Gain insights into user behavior and link effectiveness.
- **Activity Check**: Determine whether the URLs are still being used actively.

---
