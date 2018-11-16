import React, { Component } from 'react';
import Nav from './components/Nav'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      view: ''
    }
  }

  changeView = (view) => {
    this.setState({view})
  }

  render() {

    const view = this.state.view
    let content
    if (view === 'view1'){
      content = <Content1 />
    } else if (view === 'view2'){
      content = <Content2 />
    }


    return (
      <div className="App">
        <header>Header</header>
        <Nav changeView = {this.changeView} />
        {content}
      </div>
    );
  }
}

export default App;
