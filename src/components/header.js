import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {styled} from "linaria/react"

const StyledHeader = styled.header`
  color: ${props => props.path === '/' ? 'black' : 'white'};
  background: ${props => props.path === '/' ? 'none' : 'rebeccapurple'};
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 1.0875rem;
  a { color: inherit; };
`

const Header = ({ siteTitle, path }) => {
  return (
    <StyledHeader path={path}>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
