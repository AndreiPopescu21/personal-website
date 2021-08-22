import { useState } from "react";

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <div className="paragraph">
            <h1 className="paragraph-title"> Contact me </h1>
            <div className="container" style={{padding: "1em"}}>
                <form style={{textAlign: "center"}}
                      onSubmit={(e) => sendEmail(e)}>

                    <input  type="text" 
                            required
                            placeholder="E-Mail" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            title="Invalid E-Mail"
                            className="text-input"
                            />
                    <textarea className="text-area"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Your Message"
                              style={{marginTop: "1em", marginBottom: ".5em"}}
                              required/>
                    
                    <input  type="submit"
                            value="Send E-mail"
                            className="button"/>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;