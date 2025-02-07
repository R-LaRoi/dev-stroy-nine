import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import '@/app/Stylesheets/form.css'
import Footer from './Footer';

interface FormInputs {
  name: string;
  email: string;
  service: string;
  message: string;
  [key: string]: unknown;

}

export default function Form() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormInputs>();

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await emailjs.send(
        'service_4ckvh2x',
        'template_dtin4p6',
        data,
        '7qjnRcvN7wsn5iLEF'
      );
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  if (isSuccess) {
    return (
      <>
        <p className='text-2xl bg-[#171717] text-[#f4e6d7]'>Thanks for your message!</p>

      </>);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputGroup">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder=" First Last"
        />
        <label htmlFor="name"><span className='px-2'><small>01</small></span> Name</label>
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div className="inputGroup">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="guest@email.com"
        />
        <label htmlFor="email"><span className='px-2'><small>02</small></span>Email?</label>
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="inputGroup">
        <textarea
          {...register("service", { required: "Service is required" })}
          placeholder="Web Design, Web Development..."
        >
        </textarea>
        <label htmlFor="service"><span className='px-2'><small>03</small></span>Services</label>
        {errors.service && <span className="error">{errors.service.message}</span>}
      </div>
      <div className="inputGroup">
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="We're happy to help you..."
        ></textarea>
        <label htmlFor="message"><span className='px-2'><small>04</small></span>Message</label>
        {errors.message && <span className="error">{errors.message.message}</span>}
      </div>
      <button type="submit" className="submitButton" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
