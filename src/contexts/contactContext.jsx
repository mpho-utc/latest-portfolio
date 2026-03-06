import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from '../firebase/init.js';

const ContactContext = createContext(); // React context instance

/**
 * ContactFormProvider wraps the application and provides form submission
 * logic + loading, error, and success states for the contact form.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Components that will consume the context
 */
const ContactFormProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    /**
 * Submits a form to Firestore (optional captcha verification)
 *
 * @async
 * @function submitForm
 * @param {Object} options
 * @param {Object} options.formData - Raw form data object
 * @param {string} options.collectionName - Firestore collection to store into
 * @param {string} [options.captchaUrl] - Cloud Function URL for captcha verification
 * @returns {Promise<void>}
 */
    const submitForm = async ({ formData, collectionName, captchaUrl, recaptchaToken }) => {
        setLoading(true);

        try {
            const url = 'https://us-central1-captcha-4537e.cloudfunctions.net/api/verify-captcha-turnstile';
            if(captchaUrl){
                 // Extract reCAPTCHA token injected by Google
                const token = recaptchaToken;

                if (!token) {
                    alert("Please complete the captcha");
                    return;
                }

                // Verify Captcha via Cloud Function
                const res = await fetch(captchaUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token }),
                });

                const data = await res.json();

                // Only create Firestore document if Captcha is valid
                if (data.status !== 'success') {
                    throw new Error('CAPTCHA verification failed')
                }
                // Remove captcha token from form data before storing in database
                const { token: removed, ...cleanData } = formData;
                formData = cleanData;
            }
             const docRef = await addDoc(
                    collection(db, collectionName),
                    {
                        ...formData,
                        createdAt: serverTimestamp(),
                    }
                );
                setSuccess(true);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContactContext.Provider value={{ submitForm, loading, error, success }}>
            {children}
        </ContactContext.Provider>
    );
};

/**
 * Custom hook to access the ContactFormProvider context
 *
 * @function useFormContext
 * @returns {{ submitForm: Function, loading: boolean, error: Error|null, success: boolean }}
 * @throws Will throw an error if used outside ContactFormProvider
 */
const useFormContext = () => {
    const ctx = useContext(ContactContext);

    if (ctx === undefined) {
        throw new Error('useFormContext must be used inside ContactFormProvider');
    }

    return ctx;
};

export { useFormContext, ContactFormProvider };
