import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Assistant-2.css";
import Bubble from "./Bubble";
import Input from "./Input";
import QuickChips from "./QuickChips";
import Tooltip from "./Tooltip";
import { UiContext } from "../../../../../../MyContexts/UiContext";
import { AuthContext } from "../../../../../../MyContexts/AuthContext";
import { GenContext } from "../../../../../../MyContexts/GenContexts";
import { PortalContext } from "../../../../../../MyContexts/PortalContext";
import Messages from "./Messages";
import { assistant } from "../../../../../../Utils/data";
import reload from "../../../../../../assets/icons/reload.svg";
import close from "../../../../../../assets/icons/chevron-down.svg";

const MAX_LEN = 500;
const HISTORY_TURNS = 6;

const isMobile = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;

export default function Assistant() {
  // Every context is optional so the chatbot never crashes if a provider is missing.
  const ui = useContext(UiContext) ?? {};
  const auth = useContext(AuthContext) ?? {};
  const gen = useContext(GenContext) ?? {};
  const portal = useContext(PortalContext) ?? {};
  const navigate = useNavigate();

  // Fall back to local state if UiContext does not provide showBot / setShowbot.
  const [localShow, setLocalShow] = useState(false);
  const showBot = ui.showBot ?? localShow;
  const setShowbot = ui.setShowbot ?? setLocalShow;

  const session = auth.session ?? null;

  const [msgs, setMsgs] = useState([]);
  const [pending, setPending] = useState(false);
  const messagesElem = useRef(null);
  const msgsRef = useRef([]);
  const pendingRef = useRef(false);
  const contextRef = useRef(null); // last results shown, for follow-ups ("their page", "the second one")
  const wasSignedIn = useRef(false);

  // Always read the freshest website data without re-creating sendPrompt.
  const liveRef = useRef({});
  liveRef.current = {
    session,
    data: {
      excos: gen.excos,
      presidents: gen.presidents,
      ptrns: gen.ptrns,
      alumni: gen.alumni,
      news: gen.news,
      members: gen.members?.all,
      intNews: portal.intNews,
      studyMats: portal.studyMats,
      myDetails: auth.myDetails
    }
  };
  msgsRef.current = msgs;

  useEffect(() => {
    assistant.getMsgs(setMsgs);
  }, []);

  useEffect(() => {
    assistant.saveMsgs(msgs);
    if (messagesElem.current) {
      messagesElem.current.scrollTop = messagesElem.current.scrollHeight;
    }
  }, [msgs]);

  // On sign-out, wipe the stored conversation so the next person on this device starts clean.
  useEffect(() => {
    if (session) {
      wasSignedIn.current = true;
    } else if (wasSignedIn.current) {
      wasSignedIn.current = false;
      assistant.clearMsgs();
      contextRef.current = null;
      setMsgs([assistant.welcomeMessage()]);
    }
  }, [session]);

  function clearChat() {
    assistant.clearMsgs();
    contextRef.current = null;
    setMsgs([{ id: `welcome-${Date.now()}`, sender: "ai", text: "Chat cleared. Welcome back! How can I help with the NANMS website?", timestamp: new Date().toISOString() }]);
  }

  const sendPrompt = useCallback(async raw => {
    const prompt = String(raw || "").replace(/\s+/g, " ").trim().slice(0, MAX_LEN);
    if (!prompt || pendingRef.current) return; // ignore empty and repeated submissions
    pendingRef.current = true;
    setPending(true);

    const history = msgsRef.current
      .filter(m => !String(m.id).startsWith("welcome") && !m.isError)
      .slice(-HISTORY_TURNS)
      .map(m => ({ role: m.sender === "ai" ? "assistant" : "user", text: String(m.text || "").slice(0, 400) }));

    setMsgs(prev => [...prev, { id: `${Date.now()}-u`, sender: "user", text: prompt, timestamp: new Date().toISOString() }]);

    try {
      const { session: currentSession, data } = liveRef.current;
      const result = await assistant.respond(prompt, {
        history,
        context: contextRef.current,
        session: currentSession,
        data
      });
      if (result.context) contextRef.current = result.context;

      setMsgs(prev => [...prev, {
        id: `${Date.now()}-a`,
        sender: "ai",
        text: result.text,
        timestamp: new Date().toISOString(),
        links: result.links,
        isError: Boolean(result.isError),
        isPrivate: Boolean(result.isPrivate)
      }]);

      if (result.navigateTo) {
        navigate(result.navigateTo);
        if (isMobile()) setShowbot(false); // don't leave the chat covering the page the user asked for
      }
    } catch (error) {
      console.error("NANMS Scholar AI error:", error);
      setMsgs(prev => [...prev, {
        id: `${Date.now()}-e`, sender: "ai", isError: true,
        text: "Sorry, something went wrong while processing that. Please try again.",
        timestamp: new Date().toISOString()
      }]);
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  }, [navigate, setShowbot]);

  return (
    <div className={`chatbot-widget-container ${showBot ? "is-open" : ""}`} id="chatbotWidget">
      {!showBot && <Tooltip onClick={() => setShowbot(true)} />}
      {showBot && (
        <section className="chat-window" id="chatWindow" aria-label="NANMS Scholar AI Chat">
          <header className="chat-header">
            <div className="header-info-wrap">
              <div className="bot-avatar">🩺<span className="online-indicator" title="Ready" /></div>
              <div className="bot-text">
                <h3>NANMS Scholar AI</h3>
                <p>● Online · Medical Student Desk</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button type="button" onClick={clearChat} className="header-ctrl-btn" title="Clear chat" aria-label="Clear chat"><img style={{width: '18px'}} src={reload} alt="" /></button>
              <button type="button" onClick={() => setShowbot(false)} className="header-ctrl-btn" title="Close chat" aria-label="Close chat"><img style={{width: '18px'}} src={close} alt="" /></button>
            </div>
          </header>
          <div className="chat-sub-bar">
            <span>NANMS Website Assistant</span>
            <span className="sub-badge">Scholar AI</span>
          </div>
          <Messages
            messagesElem={messagesElem}
            messages={msgs}
            pending={pending}
            onNavigate={() => { if (isMobile()) setShowbot(false); }}
          />
          {msgs.length <= 2 && <QuickChips onSelect={sendPrompt} disabled={pending} />}
          <div className="chat-footer">
            <Input onSend={sendPrompt} pending={pending} maxLength={MAX_LEN} />
            <div className="input-disclaimer">For official and current directives, confirm information through NANMS channels.</div>
          </div>
        </section>
      )}
      <Bubble showBot={showBot} setShowbot={setShowbot} />
    </div>
  );
}
