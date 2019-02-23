import React, { Component } from 'react';

class CardEditor extends React.Component {
  render(){
    return(
      <div>
        This is the editor.
        <hr/>
        <button onClick={this.props.switchMode}>Go to editor</button>
      </div>
    )
  }
}

class CardViewer extends React.Component {
  render(){
    return(
      <div>
        This is a viewer.
        <hr/>
        <button onClick={this.props.switchMode}>Go to editor</button>
      </div>
    )
  }
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      editor: true,
      cards: [],

    }
  }

  render(){
    if (this.state.editor === true){
      return(
        <CardEditor switchMode={this.switchMode} />
      )
    } else{
      return(
        <CardViewer switchMode={this.switchMode} />
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
