import { NamePicker } from "./components/namePicker.jsx";

function App() {
  return (
    <div className="min-h-screen bg-base-100 flex items-start justify-center pt-16">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">
          Class Name Picker
        </h1>
        <NamePicker />
      </div>
    </div>
  );
}

export default App;
