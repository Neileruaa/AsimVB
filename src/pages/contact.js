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

        <form
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="bot-field"/>
            <input type="text" name="nom" value="Votre nom"/>
            <button>Send</button>
        </form>


    </Layout>
)

export default SecondPage
