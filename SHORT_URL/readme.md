# URL Shortener

A simple URL shortener service that takes in a valid URL and returns a shortened URL. The service also redirects the user to the original URL when they visit the shortened link and keeps track of the total visits/clicks.

## Features
- Generate shortened URLs for given valid URLs.
- Redirect users to the original URL when they visit the shortened URL.
- Track the number of visits/clicks on each shortened URL.

## Routes

### 1. Generate a Short URL
**POST /URL**

Generates a new short URL and returns the shortened URL in the format `example.com/random-id`.

## Install Dependencies:
 `npm install `

- Ensure MongoDB is running. You can start MongoDB using: `mongod`