import nodemailer from 'nodemailer';


// Function to send an email
export async function sendEmailNotification(currentPrice, email, password) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

    let mailOptions = {
        from: email,
        to: email,
        subject: 'Price Change Alert',
        text: `The price of the product has changed. Current price is: ${currentPrice}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
