import "./App.css";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LeftInterlockedTextBoxes from './LeftInterlockedTextBoxes';
import RightInterlockedTextBoxes from './LeftInterlockedTextBoxes';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
      <LeftInterlockedTextBoxes />
      <RightInterlockedTextBoxes />
    </div>
  );
}

export default App;
