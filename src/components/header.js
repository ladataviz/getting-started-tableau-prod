import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      marginTop: `0rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.45rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: `center` }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

//www.giphy.com/gifs/PlyhKoOoFMqks7r7gc

http: Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
