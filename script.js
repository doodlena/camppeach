const scriptURL   = 'https://script.google.com/macros/s/AKfycbwvkUDokdUH6gdbCO0SmP6t6BrVQ7WBPvI0EHBPP-gRnbNiYAM2FpEO1VDDZZZDitoP/exec';
const form        = document.getElementById('mailingListForm');
const responseMsg = document.getElementById('formResponse');

const SUB_KEY = 'campPeachSubscribed';

/* Hide form if already subscribed on this browser
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem(SUB_KEY) === '1') {
    if (form) form.style.display = 'none';
    if (responseMsg) responseMsg.textContent = '🎉 You’re already on the mailing list.';
  }
}); */

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Submitting...';
  }

  try {
    const res = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
    const text = await res.text();

    if (text === 'Success') {
      responseMsg.innerText = '🎉 Thanks for joining the Camp PEACH mailing list!';
      form.style.display = 'none';
      localStorage.setItem(SUB_KEY, '1');
    } else if (text === 'Duplicate') {
      responseMsg.innerText = '⚠️ This email is already signed up!';
    } else if (text === 'SheetNotFound') {
      responseMsg.innerText = '⚠️ There appears to be an internal server error. (Instead, email camppeach@gmail.com and we will notify you once it is fixed.';
    } else if (text === 'BadRequest') {
      responseMsg.innerText = '⚠️ Please enter both name and email.';
    } else {
      responseMsg.innerText = '⚠️ Oops! Something unexpected happened.';
      console.warn('Unexpected response:', text);
    }
  } catch (err) {
    console.error(err);
    responseMsg.innerText = '⚠️ Oops! Something went wrong. Please try again.';
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Join Mailing List';
    }
  }
});
