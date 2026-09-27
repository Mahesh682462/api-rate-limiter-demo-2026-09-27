const requestCounts = {}; // Stores { ip: { count: N, timer: setTimeoutId } }
const WINDOW_MS = 10 * 1000; // 10 seconds
const MAX_REQUESTS = 5;      // Max 5 requests per window

/**
 * Simple in-memory rate limiting middleware for Express.
 * Limits requests based on client IP.
 */
const rateLimiter = (req, res, next) => {
    // Use req.ip which is typically set by Express/proxy. For raw sockets, use req.connection.remoteAddress.
    const ip = req.ip;

    if (!requestCounts[ip]) {
        requestCounts[ip] = { count: 0, timer: null };
    }

    requestCounts[ip].count++;

    if (requestCounts[ip].count > MAX_REQUESTS) {
        return res.status(429).send(`Too Many Requests from IP ${ip}. Please try again after the window resets.`);
    }

    // If it's the first request in a new window, set a timer to clear the count
    if (!requestCounts[ip].timer) {
        requestCounts[ip].timer = setTimeout(() => {
            delete requestCounts[ip]; // Reset after window
        }, WINDOW_MS);
    }

    next(); // Continue to the next middleware or route handler
};

module.exports = rateLimiter;
