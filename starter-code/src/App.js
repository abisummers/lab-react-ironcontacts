import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

import OriginalList from "./CelebList.js";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Iron Contacts</h1>
        </header>
        <OriginalList />
      </div>
    );
  }
}

export default App;
