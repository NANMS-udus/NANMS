// Chat service: the only place the browser talks to the scholar-chat Edge Function.
// No AI key is used here; the Gemini key stays on the server.
import { supabase } from "./supabase";

const FUNCTION_NAME = "scholar-chat";
const TIMEOUT_MS = 30000;

/**
 * Sends one message and resolves with the server's JSON ({ ok, plan } or { ok:false, error, message }).
 * Throws on network failure, timeout or a malformed response (the caller falls back to basic mode).
 */
export async function askScholar({ message, history = [], context = null, signedIn = false }) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS);
  });
  try {
    const { data, error } = await Promise.race([
      supabase.functions.invoke(FUNCTION_NAME, { body: { message, history, context, signedIn } }),
      timeout,
    ]);
    if (error) throw error;
    if (!data || typeof data !== "object") throw new Error("invalid_response");
    return data;
  } finally {
    clearTimeout(timer);
  }
}
