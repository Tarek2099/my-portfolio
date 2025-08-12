import { useState } from "react";

const MessageForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return (
        <div>
            <h2>Send a message</h2>
            <form action="submit">
                <label htmlFor="name">Your name</label>
                <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="message">Message</label>
                <input type="message" placeholder="Your Message here..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;