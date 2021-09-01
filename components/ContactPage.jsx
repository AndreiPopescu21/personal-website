import { useState } from "react";

const ContactPage = () => {

    return (
        <div className="paragraph">
            <h1 className="paragraph-title"> My contact </h1>
            <div className="container" style={{padding: "1em", textAlign: "center"}}>
                <p>You can contact me on my E-mail address: <a className="email" href="mailto:andrei.popescu2114@yahoo.com">andrei.popescu2114@yahoo.com</a>.</p>
            </div>
        </div>
    );
}

export default ContactPage;