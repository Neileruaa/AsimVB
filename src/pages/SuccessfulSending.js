import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Message envoyé" />

        <div className="alert alert-success my-2" role="alert">
            <h1>Le message a bien été transmis</h1>
            <hr/>
            <p>Vous aurez une réponse dans les plus brefs délais. </p>
        </div>

        <Link to="/" className="btn btn-primary mb-auto">Go back to the homepage</Link>

        <div style={{paddingBottom: '52.9vh'}} />
    </Layout>
)

export default SecondPage
