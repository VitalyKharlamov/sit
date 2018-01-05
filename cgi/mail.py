#!/usr/bin/python
import cgi, cgitb, smtplib, time, os

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

form = cgi.FieldStorage()

SUBJECT = "Squad in touch"
FROM_ADDRESS = "omsksec@keysystems.ru"
TO_ADDRESS = "heavyvetal1988@gmail.com"
SMTP_PASS = "xp9uyE15"
SMTP_SERVER = "mx3.keysystems.ru"
SMTP_PORT = 25
LOG_FILE = '/var/www/html/sending.log'

email = form.getvalue('email')
message = form.getvalue('message')
isNotes = form.getvalue('isNotes')
notes = form.getvalue('notes')
send_to = form.getvalue('send_to')


def send_answer(code, text):
    #    print "Status:" + repr(code) + "\r\n\r\n"
    #    print "Access-Control-Allow-Origin: *\r\n\r\n"
    print "Access-Control-Allow-Origin: *"
    # print "HTTP/1.1 400 Bad Request \r\n\r\n"
    # print
    print "Status: " + repr(code) + "\r\n\r\n"
    print "Content-type: text/plain\r\n\r\n"

    print "Status:" + repr(code) + "\r\n\r\n"
    # print
    # print "Content-type: text/html;\n"
    # print "<html>"
    # print repr(code) + " " + text + "\r\n\r\n"
    # print "</html>"
    return



def build_body():
    n = "\r\n"
    msg = "Squad In Touch" + n

    if isNotes:
        msg = msg + "Event Enquiry" + n

    msg = msg + "Email: " + email + n
    msg = msg + "Message: " + message + n

    if notes is not:
        msg = msg + "Additional notes: " + notes + n

    return msg


def send_mail():
    msg = MIMEMultipart()
    msg['From'] = FROM_ADDRESS
    if send_to is None:
        msg['To'] = TO_ADDRESS
    else:
        msg['To'] = send_to
    msg['Subject'] = SUBJECT

    msg.attach(MIMEText(build_body(), 'plain'))

    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.login(FROM_ADDRESS, SMTP_PASS)
    text = msg.as_string()
    server.sendmail(FROM_ADDRESS, msg['To'], text)
    server.quit()
    return


if email is None:
    send_answer(400, "email is empty")
    exit(0)


if message is None:
    send_answer(400, 'empty message')
    exit(0)


send_mail()


def write_to_log():
    if not os.path.isfile(LOG_FILE):
        f = open(LOG_FILE, "w")
        f.close()
    log_row = time.strftime("%d/%m/%Y  %H:%M:%S") + " :" + "Type: ""; "
    log_row += "Email: " + email + "; " + "Message: " + message + ";" + "\r\n"
    f = open(LOG_FILE, 'a')
    f.write(log_row)
    f.close()


write_to_log()
send_answer(200, "OK")