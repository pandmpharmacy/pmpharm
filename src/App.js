import "./App.css";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LeftInterlockedTextBoxes from './LeftInterlockedTextBoxes';
import RightInterlockedTextBoxes from './RightInterlockedTextBoxes';


function App() {
return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
