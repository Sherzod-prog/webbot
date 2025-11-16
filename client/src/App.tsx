import { useEffect } from "react";
import "./App.css";
import Card from "./pages/Card";

function App() {
  const telegram = (window as any).Telegram?.WebApp;

  useEffect(() => {
    telegram?.ready?.();
  }, []);

  const onCheckout = () => {
    telegram.MainButton.txt = "Sotib olish";
    telegram.MainButton.show();
  };

  return <Card onCheckout={onCheckout} />;
}

export default App;
