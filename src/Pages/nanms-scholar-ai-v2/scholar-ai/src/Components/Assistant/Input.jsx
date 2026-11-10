import { useState } from "react";
import "./Input.css";

export default function Input({ onSend, pending = false, maxLength = 500 }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const prompt = value.trim();
    if (!prompt || pending) return;
    setValue("");
    onSend(prompt);
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        id="userInput"
        className="chat-input"
        name="input"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Ask a question or describe what you want to do..."
        autoComplete="off"
        aria-label="Type a message"
        maxLength={maxLength}
        disabled={pending}
      />
      <button type="submit" className="send-btn" id="sendBtn" title="Send message" disabled={pending || !value.trim()}>
        {pending ? "…" : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        )}
      </button>
    </form>
  );
}
