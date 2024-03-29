import React from 'react'
import { Link } from 'gatsby'
import github from '../images/github56.png'
import twitter from '../images/twitter56.png'

const Footer = () => (
  <footer
    style={{
      margin: `4em auto 0em auto`,
      textAlign: `center`
    }}>
    <div>
      © {new Date().getFullYear()}, Gatsby site by{` `}
      Martin Andersen @webmaeistro
      <span style={{marginLeft: `40px`, color: `#888`}}>
        Logo made with 
        <a style={{marginLeft: `4px`}}
          href="https://ello.co/marander" 
          title="Maker"
          target="_blank"
          rel="noopener noreferrer"
          >Martin Andersen</a>
      </span>
    </div>

    <div style={{ marginTop: `25px`,}}>
      <a href="https://github.com/webmaeistro/gatsby-website-course" style={{margin:`10px`}}
        target="_blank" rel="noopener noreferrer">
        <img src={github} style={{width:`32px`, height:`32px`}} alt="github" />
      </a>
      <a href="https://twitter.com/webmaeistro" style={{margin:`10px`}}
        target="_blank" rel="noopener noreferrer">
        <img src={twitter} style={{width:`32px`, height:`32px`}} alt="twitter" />
      </a>
    </div>
  </footer>
)

export default Footer