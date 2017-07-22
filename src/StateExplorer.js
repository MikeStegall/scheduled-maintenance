import React from 'react'
import MoriComponent from './MoriComponent'
import mori from 'mori'

class StateExplorer extends MoriComponent {
  render () {
    const jsState = mori.toJs(this.props.imdata)
    const stateJSON = JSON.stringify(jsState, null, 2)

    return (
      <section id='explorerContainer'>
        <h1>State Explorer</h1>
        <textarea value={stateJSON} readOnly />
      </section>
    )
  }
}

export default StateExplorer
