import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Asim Volley: Contact" />
        <div className="jumbotron">
            <h1>Contact</h1>
            <p className="text-minor">Bienvenue sur la page contact de l'ASIM VolleyBall. N'hésitez pas à nous envoyer un message </p>
        </div>

        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>


    </Layout>
)

export default SecondPage
