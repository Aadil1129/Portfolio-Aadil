# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Contact Form

1. Open `src/components/sections/contact.tsx`
2. Replace these values in the `handleSubmit` function:
   - `service_your_service_id` → Your actual Service ID
   - `template_your_template_id` → Your actual Template ID
   - `your_public_key` → Your actual Public Key

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Free Plan Limits

- 200 emails per month
- Perfect for portfolio websites
- No credit card required

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure template variables match the code

## Security Note

- Never commit your actual EmailJS keys to public repositories
- Consider using environment variables for production
