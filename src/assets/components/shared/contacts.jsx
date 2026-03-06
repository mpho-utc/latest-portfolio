import { useEffect, useState, useRef } from 'react';
import Input from './input';
import Status from './status';
import DropdownInput from './DropdownInput';
import MessageBox from './messageBox';
import SecondaryBTN from '../shared/secondaryBTN';
import ReCAPTCHA from "react-google-recaptcha";

import { useFormContext } from '../../../contexts/contactContext';

export default function Contacts() {
  const { loading, submitForm, error, success } = useFormContext();

  const [status, setStatus] = useState({
    status: false,
    statusText: ''
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  // update loading state
  useEffect(() => {
      if (loading) {
          setStatus({ status: true, statusText: 'Submitting, please wait...' });
      }
  }, [loading]);


  // update success state
  useEffect(() => {
    if (success) {
        setFormData({
            name: '',
            email: '',
            message: '',
            service: ''
        });
        setRecaptchaToken(null);
        setStatus({ status: true, statusText: 'Success! Your booking is submitted.' });
    }
}, [success]);

//update error state
useEffect(() => {
    if (error) {
        setStatus({ status: false, statusText: 'Failed to submit. Please try again.' });
    }
}, [error]);

const turnstileRef = useRef(null);

useEffect(() => {
  if (!window.turnstile) return;

  window.turnstile.render(turnstileRef.current, {
    sitekey: "0x4AAAAAACmQgHUIWTcZOV2f",
    theme: "dark",
    callback: (token) => {
      setRecaptchaToken(token);
    },
  });
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check missing fields
    if (!formData.name || !formData.email || !formData.message || !formData.service) {
      setStatus({ status: false, statusText: 'Please fill out every field on the form!!' });
      return;
    }

    // check recaptcha 
    if (!recaptchaToken) {
      setStatus({ status: false, statusText: 'Please complete the captcha!' });
	  return;
	}
    const captchaUrl =
      'https://us-central1-captcha-4537e.cloudfunctions.net/api/verify-captcha-turnstile';

    await submitForm({
      formData: { ...formData },
      recaptchaToken,
      captchaUrl,
      collectionName: 'enquieries'
    });
  };

  useEffect(() => {
    if (!status.statusText) return;
    const timer = setTimeout(() => {
      setStatus({ status: false, statusText: '' });
    }, 10000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section className="bg-transparent w-full bg-brand-darkBlue text-white py-16 px-6 md:px-0 relative overflow-x-hidden">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">

        {/* Image — LEFT on desktop, hidden on small */}
        <div className="hidden md:flex flex-1 justify-start">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-2 border-brand-yellow shadow-xl">
            <img
              src={"https://th.bing.com/th/id/R.8ad2f88927552a80a01ada1937cace54?rik=2rWmRquBnablHQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f5%2f0%2f824659-batman-dark-knight-wallpaper-2560x1600-free-download.jpg&ehk=IPTSY6nXhry4exCsf%2fjhC4bS5LOa0DTshq6FQBE9mcU%3d&risl=&pid=ImgRaw&r=0"}
              alt="Mpho"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form — FULL width on mobile */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-yellow mb-4">
            Let’s Work Together
          </h2>

          <p className="mb-8 max-w-xl">
            Let’s build something impactful together — whether it’s your website,
            a feature upgrade, or your next big idea.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="flex flex-col md:flex-row gap-4">
              <Input name="name" value={formData.name} onChange={handleChange} type="text" label_name="Name" placeholder="John Doe" />
              <Input name="email" value={formData.email} onChange={handleChange} type="text" label_name="Email" placeholder="johndoe@example.com" />
            </div>

            <DropdownInput label="Service Needed?" options={[
                "UI/UX web development",
                "Feature upgrade/addition",
                "General enquiry",
                "Collaboration"
              ]} placeholder="Select..." name="service" value={formData.service} handleChange={handleChange} />

            <MessageBox label="What can I help you with?" value={formData.message} name="message" handleChange={handleChange} placeholder="Hello, I'd like to enquire about..." />

            
            {/* <ReCAPTCHA sitekey="6LcHBx4sAAAAAFDjVAdmD-JiIeE24QmJB3cHOk0H" theme="dark" onChange={(value) => setRecaptchaToken(value)} /> */}
              <div ref={turnstileRef}></div>

            <div className="pt-6">
              <SecondaryBTN handleSubmit={handleSubmit} loading={loading} type="submit" text="Submit" />
            </div>
          </form>
        </div>
      </div>

      

      {status.statusText && (
        <Status status={status.status} statusText={status.statusText} />
      )}
    </section>
  );
}
