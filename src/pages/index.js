import React, {Component} from "react"
import {Link} from "gatsby"
import {graphql} from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

class IndexPage extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if(typeof window !== 'undefined'){
            const WOW = require('wow.js');
            const wow = new WOW();
            wow.init();
        }
    }

    render() {
        return (
            <Layout>
                <Header/>
                <SEO title="Asim Volley: Accueil" description="Page d'accueil du site ASIM VOLLEY BALL. On y retrouve les derniers
            articles ainsi que les informations principales. "/>

                <h1 className="my-4 text-primary">Asim Volley Ball</h1>

                <h2>Liste des derniers articles</h2>

                <div className="row">
                    {this.props.data.allFile.edges.map((item, index) => (
                            <div key={index} className="col-lg-4 col-sm-6 portfolio-item wow zoomIn" data-wow-delay={"0." + index * 2+"s"} data-wow-duration={"0.9s"}>
                                <div className="card h-100">
                                    <Link to={item.node.childMarkdownRemark.frontmatter.path}><img className="card-img-top" src={item.node.childMarkdownRemark.frontmatter.thumbnail} /></Link>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <Link to={item.node.childMarkdownRemark.frontmatter.path} dangerouslySetInnerHTML={{__html: item.node.childMarkdownRemark.frontmatter.title}}/>
                                        </h4>
                                        <div className="card-text"
                                             dangerouslySetInnerHTML={{__html: item.node.childMarkdownRemark.frontmatter.description}}/>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="row">
                    <div className="col-lg-6 wow slideInRight" data-wow-delay={"0.1s"}>
                        <h2>Qui somme nous ?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloremque esse fugit id labore necessitatibus nostrum quia repellendus tenetur ullam! Aspernatur fugit illum in itaque nisi non quaerat rerum voluptatem.</p>
                        <ul>
                            <li>
                                <strong>Plaisir</strong>
                            </li>
                            <li>Esprit d'équipe</li>
                            <li>Compétition</li>
                            <li>École de volley</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id
                            reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis
                            quia dolorum ducimus unde.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid rounded" src="/assets/volley_banniere_ball.jpg" alt=""/>
                    </div>
                </div>

                <hr/>

                <div className="row mb-4">
                    <div className="col-md-8">
                        <p>Vous souhaitez prendre contact ou demander des renseignements complémentaires n'hésitez pas à nous envoyer un email !</p>
                    </div>
                    <div className="col-md-4">
                        <a className="btn btn-lg btn-secondary btn-block" href="#">Prendre contact</a>
                    </div>
                </div>

                <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
                    <Image/>
                </div>
                <Link to="/page-2/" className='btn btn-primary'>Go to page 2</Link>
                <br/>
                <Link to="/about/">Qui suis je ?</Link>
            </Layout>
        )
    }
}

export const query = graphql`
query {
    allFile (
        filter: {
            childMarkdownRemark: { html: {ne: null}}
        }
        limit: 6
    ) {
        edges {
            node {
                childMarkdownRemark{
                    frontmatter{
                        path
                        title
                        thumbnail
                        description
                    }
                    html
                }
            }
        }
    }
}
`

export default IndexPage
