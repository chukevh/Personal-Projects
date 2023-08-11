#!/usr/bin/python

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Email configuration
sender_email = "chu.kevin.h@gmail.com"
sender_password = "crzkkvpicoqwyoxa"
recipient_email = "chu.kevin.h@gmail.com"
subject = "Weekly Update"

# Create the MIME object
msg = MIMEMultipart()
msg["From"] = sender_email
msg["To"] = recipient_email
msg["Subject"] = subject

# HTML content
html_content = open("../emailtemp.html")
msg.attach(MIMEText(html_content.read(), "html"))


try:
    # Connect to the SMTP server
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.login(sender_email, sender_password)
    # Send the email
    server.sendmail(sender_email, recipient_email, msg.as_string())
    print("Successfully sent email")
    server.quit()
except smtplib.SMTPException as e:
    print("Error: unable to send email")
    print(e)
