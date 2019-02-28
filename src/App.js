import React, { Component } from 'react';

class CardEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      front: "",
      back: "",
    }
  }

  render() {
    const rows = this.props.cards.map((card, i) => {
      return (
        <tr key={i}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td><button data-index={i} onClick={this.deleteCard}>Delete</button></td>
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
        <br />
        <input onChange={this.handleChange} type="text" name="front" placeholder="Front of card" value={this.state.front} />
        <input onChange={this.handleChange} type="text" name="back" placeholder="Back of card" value={this.state.back} />
        <button onClick={this.addCard}>Add Card</button>
        <hr />
        <button onClick={this.props.switchMode}>Go to viewer</button>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addCard = () => {
    if ((this.state.front && this.state.back) !== "") {
      this.props.addCard(this.state.front, this.state.back)
      this.setState({
        front: "",
        back: ""
      })
    }
  }

  deleteCard = (event) => {
    this.props.deleteCard(event.target.dataset.index)
  }

}

class CardViewer extends React.Component {
  render() {
    const rows = this.props.cards.map((card, i) => {
      return (
        <tr key={i}>
          <td>{card.front}</td>
          <td>{card.back}</td>
        </tr>
      )
    })
    return (
      <div>
        <h2>Card viewer</h2>
        <table>
          <thead>
            <tr>
              <td>Front</td>
              <td>Back</td>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
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
      cards: [{ front: 'test front', back: 'test back' },
      { front: 'test 2 front', back: 'test 2 back' }],

    }
  }

  render() {
    if (this.state.editor === true) {
      return (
        <CardEditor
          cards={this.state.cards}
          switchMode={this.switchMode}
          addCard={this.addCard}
          deleteCard={this.deleteCard}
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

  addCard = (front, back) => {
    this.setState(state => ({
      cards: [...state.cards, { front, back }]
    }))
  }

  deleteCard = (index) => {
    this.setState(state => {
      const cards = [...state.cards]
      cards.splice(index, 1)
      return { cards: cards }
    })
  }
}

export default App;
