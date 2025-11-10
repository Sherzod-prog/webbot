import "./App.css";
import { Route, Routes } from "react-router";
import Card from "./pages/Card";
import Modal from "./components/modal/modal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
      <Route
        path="/:id"
        element={
          <Modal
            isOpen={false}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            children={undefined}
          />
        }
      />
    </Routes>
  );
}

export default App;
