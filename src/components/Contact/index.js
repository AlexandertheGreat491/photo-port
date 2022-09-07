function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
            {/* name input */} 
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
            {/* email input */} 
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
            {/* message text area */} 
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        {/* Submit button */} 
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
