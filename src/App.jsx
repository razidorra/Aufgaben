import "./App.css";
import Section1FocusBasic from "./components/Section1FocusBasic.jsx";
import Section2FormValidation from "./components/Section2FormValidation.jsx";
import Section3ValuesWithoutRerender from "./components/Section3ValuesWithoutRerender.jsx";
import Section4RefVsState from "./components/Section4RefVsState.jsx";
import Ext1PreviousValue from "./components/Ext1PreviousValue.jsx";
import Ext2DebounceTimer from "./components/Ext2DebounceTimer.jsx";
import Ext3FocusAfterAction from "./components/Ext3FocusAfterAction.jsx";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">React Hook Playground</p>
        <h1>useRef verstehen</h1>
        <p>
          Kleine Experimente zu Fokus, DOM-Zugriffen, Timer-IDs und veränderbaren
          Werten ohne automatischen Re-Render.
        </p>
      </header>

      <div className="section-grid">
        <Section1FocusBasic />
        <Section2FormValidation />
        <Section3ValuesWithoutRerender />
        <Section4RefVsState />
        <Ext1PreviousValue />
        <Ext2DebounceTimer />
        <Ext3FocusAfterAction />
      </div>
    </main>
  );
}

export default App;
