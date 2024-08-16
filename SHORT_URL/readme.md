

---

# URL Shortener Documentation

## Overview
A simple URL shortener service that takes in a valid URL and returns a shortened URL. The service also redirects the user to the original URL when they visit the shortened link and keeps track of the total visits/clicks.

## Features
- Generate shortened URLs for given valid URLs.
- Redirect users to the original URL when they visit the shortened URL.
- Track the number of visits/clicks on each shortened URL.

## Routes

### 1. Generate a Short URL
**POST /url**

Generates a new short URL and returns the shortened URL in the format `example.com/random-id`.

### 2. Redirect to Original URL
**GET /:shortId**

Redirects the user to the original URL associated with the given `shortId`.

### 3. Track URL Visits
Automatically tracks the number of visits/clicks on each shortened URL.

## Installation

1. **Clone the Repository:**
   ```sh
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install Dependencies:**
   ```sh
   npm install express mongoose nodemon shortid
   ```

3. **Run the Project:**
   ```sh
   npm start
   ```

## Usage

### Generate a Short URL
To generate a short URL, send a POST request to `/url` with the original URL in the request body.

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
To be redirected to the original URL, visit the shortened URL in the format `example.com/short-id`.

### Track URL Visits
The service automatically tracks the number of visits/clicks on each shortened URL.

## Prerequisites

- Ensure MongoDB is connected.

## Example

**Shortened URL Format:**

```
example.com/short-id
```

## Purpose of Tracking Visits

- To monitor the popularity of the URLs.
- To provide data for analytics.
- To ensure the URLs are still active.

---


You can modify this README as needed to fit your specific project details.
