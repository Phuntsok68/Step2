import { useState } from "react";
import { Card } from "./Card";
export default function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Card step={step} setStep={setStep} />
    </div>
  );
}
