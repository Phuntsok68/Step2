import "../styles/Description.css";
const items = [
  "Learn React 📚",
  "Apply for jobs 🧑‍💻",
  "Invest your new income 🤑",
];
export default function Description({ step }) {
  return (
    <div className="description">
      Step {step}: {items[step - 1]}
    </div>
  );
}
