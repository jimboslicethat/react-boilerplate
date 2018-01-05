import React from 'react'
import CssModules from 'react-css-modules'

import css from './index.css'

class HelloWorld extends React.Component {
  render() {
    return <h1 styleName="hello-world">Welcome to React, with babel, webpack, postcss, and react css modules</h1>
  }
}

export default CssModules(HelloWorld, css)
