import React, { PureComponent } from 'react'

import Home from './pages/Home'
import About from './pages/About'
// import EnhanceHome2 from './pages/Home2'
// import EnhanceAbout2 from './pages/About2'
import EnhanceHome3 from './pages/Home3'
import EnhanceAbout3 from './pages/About3'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
        <hr />
        {/* <EnhanceHome2 />
        <EnhanceAbout2 /> */}
        <EnhanceHome3 />
        <EnhanceAbout3 />
      </div>
    )
  }
}
