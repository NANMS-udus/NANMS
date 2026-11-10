import "./QuickChips.css";

const suggestions = [
  "Explore NANMS",
  "Who are the executives?",
  "View latest news",
  "How do I register?",
  "Update my profile",
  "Find study materials"
];

export default function QuickChips({ onSelect = () => {}, disabled = false }) {
  return (
    <div className="quick-chips-wrapper" id="quickChips" aria-label="Suggested questions">
      {suggestions.map(item => (
        <button type="button" className="chip-btn" key={item} disabled={disabled} onClick={() => onSelect(item)}>{item}</button>
      ))}
    </div>
  );
}
