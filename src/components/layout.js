import * as React from "react"
import { Link } from "gatsby"
import GlobalCss from "../styles/GlobalCss";
import { ThemeSelector } from "./themeSelector";

import '../styles/lightTheme.scss';
import '../styles/darkTheme.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Link to="/about">
            about
          </Link>
        </div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ThemeSelector />
      </div>
    )
  } else {
    header = (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <Link to="/about">
          about
        </Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <GlobalCss />
      <header className="global-header">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
