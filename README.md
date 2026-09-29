# Serverless Contact Form

A serverless contact form built using AWS services. Users can submit their name, email, and message through a web form, and the message is delivered to a verified email address.

## Architecture

HTML/CSS/JavaScript
        ↓
   API Gateway
        ↓
 AWS Lambda (Python)
        ↓
    Amazon SES
        ↓
      Email

## AWS Services Used

- AWS Lambda – Processes form submissions using Python
- Amazon API Gateway – Provides the HTTP API endpoint
- Amazon SES – Sends contact messages through email
- IAM – Provides required permissions to Lambda

## Features

- Responsive contact form
- Serverless backend
- API-based form submission
- Email delivery using Amazon SES
- No traditional server required

## Technologies

HTML, CSS, JavaScript, Python, AWS Lambda, API Gateway, Amazon SES
