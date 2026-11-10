import "./Bubble.css";

export default function Bubble({ showBot, setShowbot }) {
  return (
    <button type="button" className="chat-bubble-button" aria-label={showBot ? "Close chat" : "Open chat"} aria-expanded={showBot} onClick={() => setShowbot(!showBot)}>
      <svg className="bubble-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <svg className="bubble-close-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
