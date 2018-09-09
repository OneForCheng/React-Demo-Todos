import React, {
  Component
} from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base'

import Header from './components/header'
import Footer from './components/footer'
import TodoList from './components/todolist'

class App extends Component {
  render() {
    return ( <section className = "todoapp" >
      <Header />
      <TodoList />
      <Footer />
      </section>
    );
  }
}

export default App;
