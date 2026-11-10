import "./Tooltip.css";

export default function Tooltip({ onClick = () => {} }) {
  return (
    <button type="button" className="chat-bubble-tooltip" id="bubbleTooltip" onClick={onClick}>
      <span className="tooltip-dot" />
      <span>Hi Scholar! Need help with NANMS?</span>
      <span aria-hidden="true" style={{ color: "var(--primary)", fontSize: "0.9rem" }}>×</span>
    </button>
  );
}
