const myEmail = `beyondgood9@gmail.com`;
const myPassword = `rpibgcghdbuhfjio`;
const serverUrl = 'https://coral-app-nflgp.ondigitalocean.app/api/email';
const SendEmailOfServiceQuestionnaireUrl = `${serverUrl}/SendEmailOfServiceQuestionnaire`
const SendEmailOfContactUs = `${serverUrl}/SendEmailOfContactUs`

async function sendEmailOfQuestionare(fromEmail, fromName, emailBodyHtml) 
{
    const emailHtml = constructEmailHtml(emailBodyHtml);
    const data = {
        myEmail: myEmail,
        myPassword: myPassword,
        fromEmail: fromEmail,
        fromName: fromName,
        emailBody: emailHtml
    };

    try
    {
        const response = await axios.post(SendEmailOfServiceQuestionnaireUrl, data);
        if (response.status === 201) 
        {
            alert('Email sent successfully');
        }
        else
        {
            alert('Failed to send email');
        }
    }
    catch(error)
    {
        console.log('Error:', error);
        alert('Error:', error);
    }
    location.reload();
}

async function sendEmailOfContactUs(fromEmail, emailSubject, emailBodyHtml) 
{
    const emailHtml = constructEmailHtml(emailBodyHtml);
    
    const data = {
        myEmail: myEmail,
        myPassword: myPassword,
        fromEmail: fromEmail,
        emailSubject: emailSubject,
        emailBody: emailHtml
    };

    try
    {
        const response = await axios.post(SendEmailOfContactUs, data);
        console.log(response);
        if (response.status === 201) 
        {
            alert('Email sent successfully');
        }
        else
        {
            alert('Failed to send email');
        }
    }
    catch(error)
    {
        alert('Error:', error);
    }
    location.reload();
}

function constructEmailHtml(emailBodyHtml)
{
    const emailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
        </head>
        <body style="background-color: hsla(39, 100%, 97%, 1); font-family: Arial, sans-serif; line-height: 1.6; padding: 30px; max-width: 600px; margin: 0 auto; border: 1px solid hsla(calc(220 - 22), 23%, 89%, 1); border-radius: 30px;">

            <h1 style="text-align: center; text-decoration: underline;">Tetra Wave</h1>
            <hr>

            <div style="margin-top: 20px; margin-bottom: 30px;">
                ${emailBodyHtml}
            </div>

        </body>
        </html>
    `;
    return emailHtml;
}