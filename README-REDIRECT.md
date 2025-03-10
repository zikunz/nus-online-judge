# WolframCode Redirect Service

This is a simple Node.js application that redirects all traffic from `https://nus-wolfram-code.fly.dev` to `https://nus-wolfram-code-fe.fly.dev`.

## How It Works

The application uses Express.js to handle incoming requests and redirects them to the frontend URL while preserving the path.

## Deployment

This application is deployed on Fly.io. To deploy it:

1. Make sure you have the Fly CLI installed or use the Fly.io web interface
2. Deploy using the following command or through the web interface:
   ```
   fly deploy
   ```

## Files

- `index.js`: The main application file that handles the redirect
- `package.json`: Node.js package configuration
- `Dockerfile`: Docker configuration for building the container
- `fly.toml`: Fly.io configuration file

## Environment Variables

- `PORT`: The port the application listens on (default: 3000, set to 8080 in production)
