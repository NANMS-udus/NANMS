import { useNavigate } from "react-router";
import { isAllowedPath } from "../../../../../../Utils/data"

export default function Message({ details, onNavigate = () => {} }) {
  const navigate = useNavigate();
  const { sender, text, timestamp, links } = details || {};
  const isAi = sender === "ai";
  const time = timestamp ? new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

  // Only internal, allowlisted pages can ever become buttons.
  const safeLinks = isAi && Array.isArray(links) ? links.filter(link => isAllowedPath(link?.path)) : [];

  return (
    <div className={`msg-row ${isAi ? "bot" : "user"}`} key={details?.id}>
      <div className="msg-avatar">{isAi ? "AI" : "You"}</div>
      <div className="msg-content">
        <div className="msg-bubble" style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{text}</div>
        {safeLinks.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {safeLinks.map(link => (
              <button
                type="button"
                className="chip-btn"
                key={link.path}
                onClick={() => { navigate(link.path); onNavigate(); }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
        <span className="msg-time">{time}</span>
      </div>
    </div>
  );
}
