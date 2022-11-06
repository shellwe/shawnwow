import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Qualifications from "./qualifications"
import Products from "./Products"
import Sites from "./Sites"
import Presentations from "./Presentations"
import AboutMe from "./AboutMe"
import ConnectWithMe from "./ConnectWithMe"

import Footer from "./Footer"

export function App() {
  return (
    <>
      {/* <Header headerText={'Hello World'} subHeaderText = {'This is the main page Header'} /> */}
      <AboutMe />
      <ConnectWithMe />
      <Products />
      <Sites />
      <Presentations />
    </>
  )
}

export function Resume() {
  return (
    <div className="App">
      <Header headerText={'Hello World'} subHeaderText={'Something'} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}