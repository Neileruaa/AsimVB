import { Link } from "gatsby"
import React from "react"

const Navbar = ({ siteTitle }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
                className="text-primary h4 text-decoration-none font-weight-bold"
            >
                AsimVB
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="services.html">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Portfolio
            </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                            <a className="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
                            <a className="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
                            <a className="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
                            <a className="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
                            <a className="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
            </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                            <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
                            <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
                            <a className="dropdown-item" href="blog-post.html">Blog Post</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Other Pages
            </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                            <a className="dropdown-item" href="full-width.html">Full Width Page</a>
                            <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
                            <a className="dropdown-item" href="faq.html">FAQ</a>
                            <a className="dropdown-item" href="404.html">404</a>
                            <a className="dropdown-item" href="pricing.html">Pricing Table</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar