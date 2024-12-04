import Numbers from "./Numbers";
import Description from "./Description";
import Buttons from "./Buttons";
import "../styles/Card.css";
export function Card({ step, setStep }) {
  return (
    <div className="card">
      <Numbers step={step} />
      <Description step={step} />
      <Buttons step={step} setStep={setStep} />
    </div>
  );
}
