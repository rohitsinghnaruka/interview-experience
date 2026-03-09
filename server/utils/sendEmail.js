import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (email, otp) => {

    await transporter.sendMail({
        from: "HireStories VNIT",
        to: email,
        subject: "Email Verification OTP",
        html: `<h2>Your OTP is: ${otp}</h2>`
    });

};

export default sendEmail;