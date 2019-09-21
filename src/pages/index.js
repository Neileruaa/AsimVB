import React from "react"
import {Link} from "gatsby"
import {graphql} from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = (props) => {
    return (
        <Layout>
            <Header/>
            <SEO title="Home"/>

            <h1 className="my-4 text-primary">Asim Volley Ball</h1>

            <div className="row">
                {props.data.allFile.edges.map((item, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h4 className="card-header" dangerouslySetInnerHTML={{__html: {item.node.childMarkdownRemark.frontmatter.title}}}/>
                                <div className="card-body">
                                    <p className="card-text" dangerouslySetInnerHTML={{__html: item.node.childMarkdownRemark.html}}/>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                    )
                )}
            </div>


            <h2>Portfolio Heading</h2>

            <div className="row">
                <div className="col-lg-4 col-sm-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project One</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque
                                deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project One</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque
                                deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project One</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque
                                deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <h2>Modern Business Features</h2>
                    <p>The Modern Business template by Start Bootstrap includes:</p>
                    <ul>
                        <li>
                            <strong>Bootstrap v4</strong>
                        </li>
                        <li>jQuery</li>
                        <li>Font Awesome</li>
                        <li>Working contact form with validation</li>
                        <li>Unstyled page elements for easy customization</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id
                        reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis
                        quia dolorum ducimus unde.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
                </div>
            </div>

            <hr/>

            <div className="row mb-4">
                <div className="col-md-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum
                        deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
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

export const query = graphql`
  query {
  
    allFile (
        filter: {
          childMarkdownRemark: {
            html: {ne: null}
          }
        }
      ) {
        edges {
          node {
            childMarkdownRemark{
              frontmatter{
                title
              }
              html
            }
          }
        }
      }
  } 
`

export default IndexPage
