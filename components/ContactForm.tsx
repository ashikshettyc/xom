"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
const contactFormSchema = z.object({
  name: z.string().min(1,{message: 'Name is Required'}),
  email: z.string().email({message: 'Invalid Email address'}),
  subject: z.string().optional(),
  message: z.string().min(1,{message: 'Message is Required'})
})
type ContactFormData = z.infer<typeof contactFormSchema>
function ContactForm() {
  const {
    register,
    handleSubmit,reset,
    formState: { errors, isSubmitting },
} = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
});
const [status,setStatus] = useState("Send Message")
    


    const onSubmit = async (data : ContactFormData) => {


try {
  const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  // Handle success (show a success message, clear form, etc.)
  setStatus('Message sent successfully!');
} catch (error) {
  console.error('Error sending message:', error);
  setStatus('There was an error sending your message. Please try again.');
}
reset()
    }
  return (
    <div>
         <div className="form-boxed">
              <div className="sec-title centered">
                <div className="title">contact us</div>
                <h2>
                  We Always Here <span>To Help You</span>
                </h2>
              </div>

              <div className="boxed-inner">
               
                <div className="contact-form">
                 
                  <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                    <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"                          
                          placeholder="Name *"
                          {...register('name')}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          placeholder="Emaill Address *"
                          {...register("email")}
                          
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                      </div>

                      <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          placeholder="Subject (Optional)"
                          {...register('subject')}
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          placeholder="Message"
                          {...register("message")}
                        ></textarea>
                        {errors.message && <span>{errors.message.message}</span>}
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <span className="txt">{isSubmitting ? "Sending..." : status}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* {status && <p className="form-message">{status}</p>} */}
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default ContactForm