# Hello World Function App

This is a simple "Hello World" Azure Function written in Node.js.

## Deployment with Harness CI/CD

The function is designed to be deployed using Harness CI/CD. It uses the Azure Functions runtime with Node.js 20 LTS.

## Steps to Deploy

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure your Harness CI/CD pipeline.
4. Deploy to Azure using the Azure Function App.

## Testing Locally

To test the function locally, you can use Azure Functions Core Tools.

```bash
func start
```