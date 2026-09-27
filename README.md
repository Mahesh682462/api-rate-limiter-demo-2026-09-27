# api-rate-limiter-demo

A simple Node.js Express API demonstrating an in-memory rate limiting middleware. This project showcases how to protect API endpoints from excessive requests using a custom middleware.

## Features

*   **In-Memory Rate Limiting**: Limits requests based on client IP within a defined time window.
*   **Express.js Backend**: A minimal Express server with protected and unprotected routes.
*   **Simple Frontend**: An HTML page to easily test the rate limiting functionality by making multiple API calls.

## How it Works

The rate limiter allows a maximum of **5 requests** from a single IP address within a **10-second window**. If this limit is exceeded, subsequent requests will receive a `429 Too Many Requests` status until the window resets.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (LTS recommended)

### Installation

1.  **Clone the repository (or copy files):**
    ```bash
    # If using git:
    # git clone <repository-url>
    # cd api-rate-limiter-demo
    ```

2.  **Install dependencies:**
    ```bash
    npm install express
    ```

### Running the Application

1.  **Start the Node.js server:**
    ```bash
    node server.js
    ```
    The server will start on `http://localhost:3000`.

2.  **Open the frontend:**
    Open your web browser and navigate to `http://localhost:3000/index.html`.

3.  **Test the rate limit:**
    On the `index.html` page, click the "Call Protected API (x10)" button to quickly exceed the rate limit and observe the `429` responses. The requests will reset after 10 seconds.
