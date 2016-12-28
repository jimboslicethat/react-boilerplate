import React from 'react'
import CssModules from 'react-css-modules'

import css from './index.css'

class HelloWorld extends React.Component {
  render() {
    return <h1 styleName="hello-world">Hello, World!</h1>
  }
}

export default CssModules(HelloWorld, css)
