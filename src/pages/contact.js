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

        <form name="contact" action="/SuccessfulSending/" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field"/>
            <div className="form-group row">
                <label htmlFor="userName" className="col-sm-2 col-form-label">Votre nom: </label>
                <div className="col-sm-10">
                    <input type="text" name="name" id="userName" className="form-control" required/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="userEmail" className="col-sm-2 col-form-label">Votre email: </label>
                <div className="col-sm-10">
                    <input type="email" name="email" id="userEmail" className="form-control" required/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="userRole" className="col-sm-2 col-form-label">Vous êtes ?</label>
                <div className="col-sm-10">
                    <select className="form-control" id="userRole" name="role" required>
                        <option value="membre">Membre du club</option>
                        <option value="externe">Extérieur</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="userMessage" className="col-sm-2 col-form-label">Votre message:</label>
                <div className="col-sm-10">
                    <textarea name="message" id="userMessage" className="form-control" rows="10" required/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12 text-center">
                    <button type="submit" className="btn btn-lg btn-success">Envoyer</button>
                </div>
            </div>
        </form>


    </Layout>
)

export default SecondPage
