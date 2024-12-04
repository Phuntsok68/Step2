import "../styles/Buttons.css";
export default function Buttons({ step, setStep }) {
  function handleNext() {
    if (step < 3) setStep((curr) => curr + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((curr) => curr - 1);
  }
  return (
    <div className="buttons">
      <div>
        <button onClick={handlePrevious}>Previous</button>
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
