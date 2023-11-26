import Contents from './Contents';
import Footer from './Footer';
import Header from "./Header";
import './index.css';


function App() {

  return(
    <div className="App">
      <Header title = "To Do List"/>
      <Contents/>
      <Footer />
    </div>
  )
}

export default App;
