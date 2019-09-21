import React from "react"

const Footer = ({ siteTitle }) => (
    <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Aurélien DREY {new Date().getFullYear()}</p>
        </div>
    </footer>
)

export default Footer
