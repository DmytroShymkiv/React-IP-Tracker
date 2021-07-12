import "./App.css";
import Background from "./Components/Background/Background";
import Tracker from "./Components/Tracker/Tracker";
import TrackerProvider from "./Components/TrackerContext";

function App() {
  return (
    <TrackerProvider>
      <Background />
      <Tracker />
    </TrackerProvider>
  );
}

export default App;
