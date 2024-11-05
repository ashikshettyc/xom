import nodemailer from 'nodemailer';

export async function POST(req:Request) {

        const { name, email, subject, message } = await req.json();

        // Set up Nodemailer transport with Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ashikshettyc@gmail.com', 
                pass: process.env.NODEMAILER_PASS, 
            },
        });

        try {
            // Send email
            await transporter.sendMail({
                from: email,
                to: 'ashikshettyc@gmail.com', // Your Gmail address
                subject: subject || 'Contact Form Submission',
                text: message,
                html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 2px solid #4CAF50; padding-left: 10px; margin: 0 0 10px; color: #555;">
                ${message}
            </blockquote>
            <footer style="margin-top: 20px; font-size: 0.9em; color: #777;">
                <p>This email was sent from your website's contact form.</p>
            </footer>
        </div>`,
            });

            return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
        } catch (error) {
            console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
        }
    } 

