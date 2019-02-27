import React, { Component } from 'react';

class CardEditor extends React.Component {

  render() {

    const rows = this.props.cards.map((card, i) => {
      return(
        <tr key={i}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td><button>Delete</button></td>
        </tr>
      )
    })
    return (
      <div>
        <h2>Card editor</h2>
        <table>
          <thead>
            <tr>
              <td>Front</td>
              <td>Back</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <hr />
        <button onClick={this.props.switchMode}>Go to viewer</button>
      </div>
    )
  }
}

class CardViewer extends React.Component {
  render() {
    return (
      <div>
        <h2>Card viewer</h2>
        <hr />
        <button onClick={this.props.switchMode}>Go to editor</button>
      </div>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editor: true,
      cards: [{front: 'test front', back: 'test back'},
              {front: 'test 2 front', back: 'test 2 back'}],

    }
  }

  render() {
    if (this.state.editor === true) {
      return (
        <CardEditor
          cards={this.state.cards}
          switchMode={this.switchMode}
        />
      )
    } else {
      return (
        <CardViewer
          cards={this.state.cards}
          switchMode={this.switchMode}
        />
      )
    }
  }

  switchMode = () => {
    this.setState(state => ({
      editor: !state.editor
    }))
  }
}

export default App;
