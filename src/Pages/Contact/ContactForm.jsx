import { useActionState, useContext, useEffect } from 'react';
import './ContactForm.css';
import { supabase } from '../../Utils/supabase';
import send from '../../assets/icons/send.svg'
import { UiContext } from '../../MyContexts/UiContext';

export default function ContactForm() {
 const [fbResp, fbAction, isSending] = useActionState(sendFeedback, { success: false, message: '' })

 const { showPopup } = useContext(UiContext)

 useEffect(() => {
  if (isSending) {
   showPopup('pending', 'Sending your message...', false)
  }
 }, [isSending])

 async function sendFeedback(prev, input) {
  try {

   const feedback = Object.fromEntries(input)

   const { data, error } = await supabase
    .from('feedback')
    .insert(
     feedback
    )

   if (error) {
    throw new Error(error.message);

   }

   if (!error) {
    
    showPopup('success', 'Your message has been sent successfuly. You will recieve a response via email soon')
   }

  } catch (error) {
   showPopup('err', error.message)
  }
 }

 return (
  <div class="contact-card">
   <h2 class="contact-card-title">Send a Message</h2>
   <form action={fbAction} class="form">
    <div class="form-group">
     <label class="form-label" for="name">Full Name</label>
     <input class="form-input" id="name" name='sender_name' placeholder="Dr. John Doe" type="text" />
    </div>
    <div class="form-group">
     <label class="form-label" htmlFor="email">Email Address</label>
     <input class="form-input" id="email" name='sender_email' placeholder="john@example.com" type="email" />
    </div>
    <div class="form-group">
     <label class="form-label" for="subject">Subject</label>
     <input class="form-input" id="subject" name='subject' placeholder="Inquiry about membership" type="text" />
    </div>
    <div class="form-group">
     <label class="form-label" for="message">Message</label>
     <textarea class="form-textarea" name='message' id="message" placeholder="How can we help you?" rows="5"></textarea>
    </div>
    <button class="btn-primary btn-submit" type="submit">
     Send Message
     <img style={{width: '20px'}} src={send} alt="" />
    </button>
   </form>
  </div>
 );
};