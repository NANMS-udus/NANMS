// NANMS Scholar AI - client-side data and actions (plain JavaScript, no TypeScript).
//
// The Edge Function only works out WHAT the visitor wants. Everything that touches
// your data happens here, using the values your website already loads into React context:
//   GenContext    -> excos, presidents, ptrns (patrons), alumni, news, members (LGA names only)
//   AuthContext   -> session (decides who may open protected pages), myDetails
//   PortalContext -> intNews (announcements) and studyMats (members only)
// Answers are built from those records, so the bot cannot invent names or news.
// Keep this module free of React hooks; navigation is supplied by Assistant.jsx.

import { askScholar } from "./chatService";

// ---- Kept as exports so any other page that imports them keeps working ----------------
export const LGAs = [
  "Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati",
  "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama",
  "Mariga", "Mashegu", "Mokwa", "Munya", "Paikoro", "Rafi", "Rijau",
  "Shiroro", "Suleja", "Tafa", "Wushishi"
];

// Legacy list. The chatbot no longer answers from it; it reads the live executives instead.
export const excoPositions = [
  {
   name: 'President',
   defaultDet: {
    position: 'President',
    holder_name: 'Abubakar Ahmad Kpatako',
    default_caption: 'Overseeing the strategic direction of NANMS, Dr. Ahmad brings a commitment to structural integrity and academic rigor, fostering an environment where student excellence thrives.'
   }
  },
  {
   name: 'Vice-President 1',
   defaultDet: {
    position: 'Vice-President 1',
    holder_name: 'Sadiq Amina Muhammad',
    default_caption: 'Dedicated to internal affairs and student welfare, ensuring every member has access to the resources needed for clinical success.'
   }
  },
  {
   name: 'Vice-President 2',
   defaultDet: {
    position: 'Vice-President 2',
    holder_name: 'Muhammad Muhammad Mawoli',
    default_caption: 'Dedicated to overseeing the general academic affairs of mrmbers of the assosiation, ensuring every member is up and doing acedemicaly.'
   }
  },
  {
   name: 'Secretary Genral',
   defaultDet: {
    position: 'Secretary General',
    holder_name: 'Anointed Tsado',
    default_caption: 'Managing the administrative backbone of the association with precision and clarity.'
   }
  },
  {
   name: 'Assistant Secretry General',
   defaultDet: {
    position: 'Assistant Secretry General',
    holder_name: 'Habib Ibrahim',
    default_caption: 'Assisting the Secretry General with matters relating to association records and planning.'
   }
  },
  {
   name: 'Financial Secretary',
   defaultDet: {
    position: 'Finantial Secretary',
    holder_name: 'Hafsat Suleiman',
    default_caption: 'Keeping track of the association finances and fundings.'
   }
  },
  {
   name: 'Sales Director 1',
   defaultDet: {
    position: 'Sales Director 1',
    holder_name: 'Mahmud Mahmud Muhammad',
    default_caption: 'oversees the generation of income for the association through novel business ideas.'
   }
  },
  {
   name: 'Sales Director 2',
   defaultDet: {
    position: 'Sales Director 2',
    holder_name: 'Ummi Muhammad Abdullahi',
    default_caption: 'Assists the Sales Director 1 with matters of income generation'
   }
  },
  {
   name: 'SCOMEH-D',
   defaultDet: {
    position: 'SCOMEH-D',
    holder_name: 'Muhammad Mukhtar Muslim',
    default_caption: 'Directs and oversses the mattars of student academics while devising novel methods to progress the association academicaly.'
   }
  },
  {
   name: 'SCOWELF-D',
   defaultDet: {
    position: 'SCOWELF-D',
    holder_name: 'Zainab Babazhitsu Usman',
    default_caption: 'Dedicated to members welfare, maintaining a friendly and energetic atmosphere for members of the association.'
   }
  },
  {
   name: 'Public Relations Officer 1',
   defaultDet: {
    position: 'Public Relations Officer 1',
    holder_name: 'Abdullah Ibn Ahmad',
    default_caption: "Working tirelessly to perfect the body's public image while also maintaining good flow with the mother association and other bodies."
   }
  },
  {
   name: 'Public Relations Officer 2', defaultDet: {
    position: 'Public Relations Officer 2',
    holder_name: 'Fatima Zahra Abdullahi',
    default_caption: 'Assists the Public Relations Officer 1 with mattars of public relations and networking'
   }
  },
  {
   name: 'Tresurer', defaultDet: {
    position: 'Tresurer',
    holder_name: "Mu'azu Ummi Aisha",
    default_caption: 'Tracks the financial trends of the association.'
   }
  },
 ]

// ---- Route allowlist (must match your router) ------------------------------------------
export const routes = {
  pub: [
    { name: "Home", keywords: ["home", "homepage", "main page", "start page"], path: "/" },
    { name: "News", keywords: ["news", "announcement", "announcements", "updates", "latest information", "what is happening"], path: "/news" },
    { name: "Executives", keywords: ["executive", "executives", "exco", "leadership", "leaders", "office holders", "officers"], path: "/executives" },
    { name: "Previous Members", keywords: ["previous members", "past members", "patrons", "alumni", "past presidents", "former executives"], path: "/patrons-alumni" },
    { name: "About", keywords: ["about", "about nanms", "history", "mission", "vision", "what is nanms"], path: "/about" },
    { name: "Contact", keywords: ["contact", "feedback", "reach", "secretariat", "help desk", "phone number", "email address"], path: "/contact" },
    { name: "Members", keywords: ["members", "membership", "member area"], path: "/members" },
    { name: "Registration", keywords: ["registration", "register", "sign up", "signup", "create account", "apply", "join nanms", "become a member"], path: "/members/registration" },
    { name: "Login", keywords: ["login", "log in", "sign in", "signin", "member login", "access my account"], path: "/members/login" }
  ],
  pri: [
    { name: "Dashboard", keywords: ["dashboard", "member dashboard", "my account", "account overview", "member portal"], path: "/members/dashboard", protected: true },
    { name: "Edit Profile", keywords: ["edit profile", "update profile", "change profile", "personal information", "personal details", "my details", "profile information", "account details", "phone number", "contact details", "change my name", "update my bio", "correct my details"], path: "/members/dashboard/edit-profile", protected: true },
    { name: "Study Directory", keywords: ["study directory", "directory", "study resources", "study materials", "reading materials", "exam preparation", "prepare for exams", "study for exams", "medical textbooks", "past questions", "question bank", "learning resources"], path: "/members/dashboard/study-directory", protected: true }
  ]
};

const ALL_ROUTES = [...routes.pub, ...routes.pri];

export const isAllowedPath = path =>
  typeof path === "string" && ALL_ROUTES.some(route => route.path === path);

const findRoute = path => ALL_ROUTES.find(route => route.path === path) || null;

// ---- Search targets ---------------------------------------------------------------------
const TARGETS = [
  "executives", "past_presidents", "patrons", "alumni", "previous_members",
  "news", "about_association", "lgas", "my_profile", "announcements", "study_materials"
];

const TARGET_PAGE = {
  executives: "/executives",
  past_presidents: "/patrons-alumni",
  patrons: "/patrons-alumni",
  alumni: "/patrons-alumni",
  previous_members: "/patrons-alumni",
  news: "/news",
  about_association: "/about",
  lgas: null,
  my_profile: "/members/dashboard/edit-profile",
  announcements: "/members/dashboard",
  study_materials: "/members/dashboard/study-directory"
};

// Targets whose data only exists for signed-in members.
const LOGIN_TARGETS = new Set(["my_profile", "announcements", "study_materials"]);

// ---- About NANMS: wording taken from your About page (Main.jsx) --------------------------
const ABOUT = {
  overview: "NANMS is dedicated to fostering academic excellence, professional development, and community welfare among medical students from Niger State studying in UDUS.",
  history: "Founded on the principles of academic rigor and professional solidarity, NANMS has been the unifying body for Niger State medical students for over two decades. It bridges the gap between classroom learning and clinical excellence.",
  mission: "To empower medical students through comprehensive academic support, professional networking, and advocacy, ensuring the development of competent and compassionate healthcare leaders.",
  vision: "To be the premier medical student association in UDUS, recognized for producing innovative students and doctors dedicated to improving health care and medical practice in Nigeria.",
  values: ["Academic Excellence", "Professional Integrity", "Compassionate Care", "Innovative Research"]
};

// ---- Text helpers ---------------------------------------------------------------------
const str = v => (v == null ? "" : String(v).trim());
const arr = v => (Array.isArray(v) ? v : []);

const normalize = value => String(value ?? "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const STOP = new Set([
  "the", "a", "an", "of", "is", "are", "who", "what", "whats", "and", "for", "to", "in", "on",
  "about", "me", "my", "please", "show", "find", "tell", "current", "list", "all", "any", "s"
]);
const GENERIC_EXCO = new Set(["executive", "executives", "exco", "excos", "officer", "officers", "leader", "leaders", "leadership", "position", "holder"]);

const tokenize = (q, extraStop) =>
  normalize(q).split(" ").filter(t => t && !STOP.has(t) && !(extraStop && extraStop.has(t)));

function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}

// 1 = word found, 0.6 = close spelling, 0 = not found
function tokenHit(token, blob, words) {
  if (blob.includes(token)) return 1;
  if (token.length >= 5) {
    const limit = token.length >= 8 ? 2 : 1;
    if (words.some(w => Math.abs(w.length - token.length) <= 2 && editDistance(w, token) <= limit)) return 0.6;
  }
  return 0;
}

// Returns items that contain EVERY query word (typo tolerant), best match first.
function rank(items, getBlob, query, extraStop) {
  const tokens = tokenize(query, extraStop);
  if (!tokens.length) return items.map(item => ({ item, score: 1 }));
  return items
    .map(item => {
      const blob = normalize(getBlob(item));
      const words = blob.split(" ");
      let score = 0;
      for (const token of tokens) {
        const hit = tokenHit(token, blob, words);
        if (!hit) return null;
        score += hit;
      }
      return { item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}

const fmtDate = value => {
  try {
    const d = new Date(value);
    return Number.isNaN(d.getTime())
      ? ""
      : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
};

const bullets = (rows, fmt) => rows.map(r => `- ${fmt(r)}`).join("\n");
const timeOf = value => { const t = new Date(value).getTime(); return Number.isNaN(t) ? 0 : t; };

// ---- Executives -----------------------------------------------------------------------
const EXCO_ORDER = [/^president$/, /^vice president/, /^secretary general$/, /^assistant secretary/, /^financial secretary/, /^treasurer$/];
const excoRank = position => {
  const i = EXCO_ORDER.findIndex(re => re.test(normalize(position)));
  return i === -1 ? 99 : i;
};
const EXCO_ALIASES = [
  [/\bvp\b/g, "vice president"],
  [/\bpro\b/g, "public relations officer"],
  [/\bsec gen\b|\bgen sec\b|\bsg\b/g, "secretary general"],
  [/\bvice\s*pres\b/g, "vice president"]
];

function findExcos(excos, query) {
  const rows = arr(excos).filter(e => e && (e.position || e.holder_name));
  const bySeniority = list => [...list].sort((a, b) =>
    excoRank(a.position) - excoRank(b.position) ||
    str(a.position).localeCompare(str(b.position), undefined, { numeric: true }));

  let q = normalize(query);
  for (const [re, to] of EXCO_ALIASES) q = q.replace(re, to);
  q = q.split(" ").filter(t => t && !GENERIC_EXCO.has(t)).join(" ");

  if (!q) return bySeniority(rows);
  const exact = rows.filter(r => normalize(r.position) === q);
  if (exact.length) return exact;
  const prefix = rows.filter(r => normalize(r.position).startsWith(q));
  if (prefix.length) return bySeniority(prefix);
  return rank(rows, r => `${r.position} ${r.holder_name}`, q).map(x => x.item);
}

// ---- One function per target. Each returns { text, items, found } ------------------------
const result = (text, items = [], found = true) => ({ text, items, found });
const nothing = text => result(text, [], false);

function searchExecutives(data, q) {
  const rows = findExcos(data.excos, q);
  if (!rows.length) return nothing("I couldn't find an executive matching that.");
  const items = rows.slice(0, 8).map(r => ({ label: str(r.holder_name), detail: str(r.position) }));
  if (rows.length === 1) return result(`The ${str(rows[0].position)} is ${str(rows[0].holder_name)}.`, items);
  const intro = str(q) ? "Here is what I found" : "Here are the current executives";
  return result(`${intro}:\n${bullets(rows.slice(0, 20), r => `${str(r.position)}: ${str(r.holder_name)}`)}`, items);
}

const presidentLine = r =>
  `${str(r.name)}${str(r.tenure) ? ` (${str(r.tenure)})` : ""}${str(r.current_title) ? ` - ${str(r.current_title)}` : ""}`;
const patronLine = r =>
  `${str(r.name)}${[str(r.title), str(r.current_designation)].filter(Boolean).length ? ` - ${[str(r.title), str(r.current_designation)].filter(Boolean).join(", ")}` : ""}`;
const alumniLine = r =>
  `${str(r.name)}${str(r.class) ? `, Class of ${str(r.class)}` : ""}${str(r.current_title) ? ` - ${str(r.current_title)}` : ""}${str(r.current_practice_location) ? `, ${str(r.current_practice_location)}` : ""}`;

const pickPresidents = (data, q) => rank(arr(data.presidents), r => `${r.name} ${r.tenure} ${r.current_title} ${r.current_specilty}`, q).map(x => x.item);
const pickPatrons = (data, q) => rank(arr(data.ptrns), r => `${r.name} ${r.title} ${r.current_designation} ${r.badge}`, q).map(x => x.item);
const pickAlumni = (data, q) => rank(arr(data.alumni), r => `${r.name} ${r.class} ${r.current_title} ${r.current_practice_location}`, q).map(x => x.item);

function listPeople(rows, fmt, noun, q) {
  if (!rows.length) return nothing(`I couldn't find ${noun} matching that.`);
  const shown = rows.slice(0, 10);
  const more = rows.length > shown.length ? `\n...and ${rows.length - shown.length} more on the page.` : "";
  return result(
    `${str(q) ? "Here is what I found" : "Here they are"}:\n${bullets(shown, fmt)}${more}`,
    shown.slice(0, 8).map(r => ({ label: str(r.name), detail: str(r.tenure || r.title || r.class || "") }))
  );
}

function searchPreviousMembers(data, q) {
  const presidents = pickPresidents(data, q).slice(0, 4);
  const patrons = pickPatrons(data, q).slice(0, 4);
  const alumni = pickAlumni(data, q).slice(0, 4);
  if (!presidents.length && !patrons.length && !alumni.length) return nothing("I couldn't find a previous member matching that.");
  const parts = [];
  if (presidents.length) parts.push(`Past presidents:\n${bullets(presidents, presidentLine)}`);
  if (patrons.length) parts.push(`Patrons:\n${bullets(patrons, patronLine)}`);
  if (alumni.length) parts.push(`Alumni:\n${bullets(alumni, alumniLine)}`);
  const items = [...presidents, ...patrons, ...alumni].slice(0, 8).map(r => ({ label: str(r.name), detail: str(r.tenure || r.title || r.class || "") }));
  return result(parts.join("\n\n"), items);
}

function searchNews(data, q) {
  const all = arr(data.news).filter(n => n && n.headline);
  const hasQuery = tokenize(q).length > 0;
  let rows;
  if (hasQuery) {
    rows = rank(all, n => `${n.headline} ${arr(n.category).join(" ")} ${n.body}`, q)
      .sort((a, b) => b.score - a.score || timeOf(b.item.created_at) - timeOf(a.item.created_at))
      .map(x => x.item);
  } else {
    rows = [...all].sort((a, b) => timeOf(b.created_at) - timeOf(a.created_at));
  }
  if (!rows.length) return nothing("I couldn't find any news matching that.");
  const shown = rows.slice(0, 5);
  const line = n => `${str(n.headline)}${fmtDate(n.created_at) ? ` (${fmtDate(n.created_at)})` : ""}`;
  let text = `${hasQuery ? "Here is the news I found" : "Here is the latest news"}:\n${bullets(shown, line)}`;
  if (shown.length === 1 && str(shown[0].body)) text += `\n\n${str(shown[0].body).replace(/\s+/g, " ").slice(0, 220)}${str(shown[0].body).length > 220 ? "..." : ""}`;
  return result(text, shown.map(n => ({ label: str(n.headline), detail: fmtDate(n.created_at) })));
}

function searchAbout(q) {
  const n = normalize(q);
  const parts = [];
  if (/histor|found|began|start|origin|how old|established/.test(n)) parts.push(`History: ${ABOUT.history}`);
  if (/mission|purpose|objective|aim|goal/.test(n)) parts.push(`Mission: ${ABOUT.mission}`);
  if (/vision/.test(n)) parts.push(`Vision: ${ABOUT.vision}`);
  if (/value|principle/.test(n)) parts.push(`Core values: ${ABOUT.values.join(", ")}.`);
  if (!parts.length) parts.push(ABOUT.overview, `Mission: ${ABOUT.mission}`, `Vision: ${ABOUT.vision}`);
  if (/objective/.test(n)) parts.push("I don't have a separate list of objectives, so the mission above is the closest official statement. The About page has the full picture.");
  return result(parts.join("\n\n"), [{ label: "About NANMS", detail: "" }]);
}

function searchLgas(data) {
  const names = new Set();
  arr(data.members).forEach(m => {
    const v = str(m?.LGA).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    if (v) names.add(v);
  });
  if (names.size) {
    const list = [...names].sort();
    return result(`Our members come from ${list.length} Local Government Areas: ${list.join(", ")}.`, [{ label: "LGAs represented", detail: String(list.length) }]);
  }
  return result(
    `I couldn't read the member LGA records right now. For reference, Niger State has 25 LGAs: ${LGAs.join(", ")}.`,
    [{ label: "Niger State LGAs", detail: "25" }]
  );
}

function searchMyProfile(data) {
  const me = data.myDetails || {};
  if (!str(me.fullname)) return nothing("I couldn't load your profile yet. Please try again in a moment.");
  const lines = [
    `Name: ${str(me.fullname)}`,
    str(me.level) && `Level: ${str(me.level)}`,
    str(me.LGA) && `LGA: ${str(me.LGA)}`,
    me.date_admitted && fmtDate(me.date_admitted) && `Admitted: ${fmtDate(me.date_admitted)}`,
    `Phone on file: ${str(me.phone) ? "yes" : "no"}`,
    `Bio added: ${str(me.bio) ? "yes" : "no"}`
  ].filter(Boolean);
  return result(`Here is your profile summary:\n${bullets(lines, l => l)}`, [{ label: str(me.fullname), detail: "Your profile" }]);
}

function searchAnnouncements(data, q) {
  const all = arr(data.intNews).filter(a => a && (a.title || a.desc));
  const hasQuery = tokenize(q).length > 0;
  const rows = hasQuery
    ? rank(all, a => `${a.title} ${a.desc}`, q).map(x => x.item)
    : [...all].sort((a, b) => timeOf(b.created_at) - timeOf(a.created_at));
  if (!rows.length) return nothing("I couldn't find any member announcements matching that.");
  const shown = rows.slice(0, 5);
  const line = a => `${str(a.title) || str(a.desc).slice(0, 80)}${fmtDate(a.created_at) ? ` (${fmtDate(a.created_at)})` : ""}`;
  return result(
    `${hasQuery ? "Here are the matching announcements" : "Here are the latest announcements"}:\n${bullets(shown, line)}`,
    shown.map(a => ({ label: str(a.title), detail: fmtDate(a.created_at) }))
  );
}

// Study material columns are not known in advance, so labels and search text are built generically.
const TITLE_KEYS = ["title", "name", "course", "course_title", "subject", "topic", "file_name", "filename"];
const looksTechnical = v => /^https?:\/\//i.test(v) || /^[0-9a-f-]{20,}$/i.test(v) || /^\d{4}-\d{2}-\d{2}T/.test(v);
const textValues = r => Object.entries(r || {}).filter(([k, v]) => typeof v === "string" && v.trim() && !looksTechnical(v.trim()) && k !== "id");
function materialLabel(r) {
  for (const key of TITLE_KEYS) if (str(r?.[key]) && !looksTechnical(str(r[key]))) return str(r[key]);
  return textValues(r)[0]?.[1]?.trim() || "Study material";
}
function materialDetail(r, label) {
  return textValues(r).map(([, v]) => v.trim()).filter(v => v !== label && v.length <= 60).slice(0, 3).join(" · ");
}

function searchStudyMaterials(data, q) {
  const all = arr(data.studyMats).filter(Boolean);
  const rows = rank(all, r => textValues(r).map(([, v]) => v).join(" "), q).map(x => x.item);
  if (!rows.length) return nothing("I couldn't find study materials matching that. The Study Directory page lets you browse everything.");
  const shown = rows.slice(0, 8);
  const line = r => { const label = materialLabel(r); const detail = materialDetail(r, label); return detail ? `${label} (${detail})` : label; };
  return result(
    `${tokenize(q).length ? "Here are the matching study materials" : "Here are some study materials"}:\n${bullets(shown, line)}`,
    shown.map(r => ({ label: materialLabel(r), detail: "" }))
  );
}

function runSearch(target, q, data) {
  switch (target) {
    case "executives": return searchExecutives(data, q);
    case "past_presidents": return listPeople(pickPresidents(data, q), presidentLine, "a past president", q);
    case "patrons": return listPeople(pickPatrons(data, q), patronLine, "a patron", q);
    case "alumni": return listPeople(pickAlumni(data, q), alumniLine, "an alumnus", q);
    case "previous_members": return searchPreviousMembers(data, q);
    case "news": return searchNews(data, q);
    case "about_association": return searchAbout(q);
    case "lgas": return searchLgas(data);
    case "my_profile": return searchMyProfile(data);
    case "announcements": return searchAnnouncements(data, q);
    case "study_materials": return searchStudyMaterials(data, q);
    default: return nothing("I'm not sure how to look that up.");
  }
}

// ---- Offline keyword fallback (only when the AI service cannot be reached) ----------------
const normPath = value => String(value || "")
  .toLowerCase()
  .replace(/[’']/g, "")
  .replace(/[^a-z0-9/\s-]/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const intentAliases = [
  { routePath: "/members/dashboard/edit-profile", phrases: [
    "update my personal information", "change my personal information", "edit my personal details",
    "change my details", "update my details", "change my phone", "change my phone number",
    "update my phone number", "correct my information", "correct my personal details",
    "change my email", "update my email", "change my profile picture", "upload a profile picture",
    "edit my account information"
  ]},
  { routePath: "/members/dashboard/study-directory", phrases: [
    "i want to prepare for exams", "help me prepare for exams", "i need to study", "i want to study",
    "find study materials", "where can i get past questions", "i need past questions",
    "find medical textbooks", "help me revise", "revision materials", "resources for my courses",
    "learning materials"
  ]},
  { routePath: "/members/dashboard", phrases: [
    "open my account", "go to my account", "take me to my portal", "i want to access my account", "show my member area"
  ]},
  { routePath: "/members/registration", phrases: [
    "i want to become a member", "how can i join nanms", "i am a new member", "create a new membership account"
  ]},
  { routePath: "/members/login", phrases: [
    "i already have an account", "access my member account", "sign into my account"
  ]}
];

function matchRoute(input) {
  const q = normPath(input);
  const intentMatch = intentAliases.find(group => group.phrases.some(phrase => q.includes(normPath(phrase))));
  if (intentMatch) return findRoute(intentMatch.routePath);
  const matches = ALL_ROUTES.flatMap(route =>
    route.keywords
      .filter(keyword => q.includes(normPath(keyword)))
      .map(keyword => ({ route, score: normPath(keyword).length }))
  ).sort((a, b) => b.score - a.score);
  return matches[0]?.route || null;
}

function isNavigationIntent(input, route) {
  const q = normPath(input);
  if (/(go to|take me|open|navigate|show me|visit|direct me|bring me|head to|i want to (go|open|visit|access)|let me (see|open)|where can i find)/.test(q)) return true;
  if (route?.name === "Edit Profile" &&
      /(update|edit|change|correct|modify|upload|replace|add|remove).*(my )?(personal|profile|account|contact|phone|email|name|details|information|picture)|\bmy (phone number|email address|personal details)\b/.test(q)) return true;
  if (route?.name === "Study Directory" &&
      /(prepare|study|revise|practice|find|get|download|access).*(exam|study|past question|textbook|material|resource|course)|\b(past questions|study materials|revision materials)\b/.test(q)) return true;
  if (route?.name === "Registration" && /(want to join|become a member|new member|create.*account|register me)/.test(q)) return true;
  if (route?.name === "Login" && /(sign into|sign in|log in|access my account)/.test(q)) return true;
  return false;
}

const OFFLINE_PREFIX = "I can't reach my AI service right now, so I'm in basic mode. ";

function offlineRespond(input, signedIn) {
  const route = matchRoute(input);
  if (route && isNavigationIntent(input, route)) {
    if (route.protected && !signedIn) {
      return { text: `${OFFLINE_PREFIX}${route.name} is for signed-in members, so I'm taking you to the login page.`, navigateTo: "/members/login" };
    }
    return { text: `${OFFLINE_PREFIX}Opening the ${route.name} page.`, navigateTo: route.path };
  }
  if (route) {
    if (route.protected && !signedIn) {
      return { text: `${OFFLINE_PREFIX}${route.name} is for signed-in members. Please log in first.`, links: [{ label: "Go to login", path: "/members/login" }] };
    }
    return { text: `${OFFLINE_PREFIX}That looks related to the ${route.name} page.`, links: [{ label: `Open ${route.name}`, path: route.path }] };
  }
  return { text: `${OFFLINE_PREFIX}I can still open pages for you. Try “take me to the news” or “open registration”, and please try your question again in a moment.` };
}

// ---- Validate the plan the server returns (defence in depth) --------------------------------
function cleanPlan(raw) {
  const plan = raw && typeof raw === "object" ? raw : {};
  const action = ["navigate", "search", "answer", "clarify", "unsupported"].includes(plan.action) ? plan.action : "clarify";
  return {
    action,
    destination: isAllowedPath(plan.destination) ? plan.destination : null,
    searchTarget: TARGETS.includes(plan.searchTarget) ? plan.searchTarget : null,
    searchQuery: typeof plan.searchQuery === "string" ? plan.searchQuery.slice(0, 100) : null,
    response: typeof plan.response === "string" && plan.response.trim() ? plan.response.trim().slice(0, 400) : ""
  };
}

// ---- Public API used by the components ---------------------------------------------------------
const STORAGE_KEY = "nanms-scholar-ai-messages";
export const WELCOME_TEXT = "Salam and greetings! Welcome to NANMS Scholar AI. Ask me anything about NANMS in your own words. I can answer questions, find news and executives, and take you to the right page.";

const welcomeMessage = () => ({ id: "welcome", sender: "ai", text: WELCOME_TEXT, timestamp: new Date().toISOString() });

export const assistant = {
  routes,

  getMsgs(setter) {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(saved) && saved.length) setter(saved);
      else setter([welcomeMessage()]);
    } catch {
      setter([welcomeMessage()]);
    }
  },

  saveMsgs(messages) {
    try {
      const serializable = messages
        .filter(message => !message.isPrivate) // never keep member-only answers in the browser
        .map(({ id, sender, text, timestamp, links, isError }) => ({ id, sender, text, timestamp, links, isError }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable.slice(-60)));
    } catch (error) {
      console.warn("Could not save chatbot history:", error);
    }
  },

  clearMsgs() {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  },

  welcomeMessage,

  /**
   * input   - what the visitor typed
   * options - { history, context, session, data }
   *           session = AuthContext session (null when logged out)
   *           data    = { excos, presidents, ptrns, alumni, news, members, intNews, studyMats, myDetails }
   */
  async respond(input, { history = [], context = null, session = null, data = {} } = {}) {
    const signedIn = Boolean(session);

    let plan;
    try {
      const res = await askScholar({ message: input, history, context, signedIn });
      if (!res?.ok) {
        if (res?.error === "rate_limited" || res?.error === "invalid_request") {
          return { text: res.message || "Please try again in a moment.", isError: true };
        }
        throw new Error(res?.error || "ai_failed");
      }
      plan = cleanPlan(res.plan);
    } catch (error) {
      console.warn("NANMS Scholar AI request failed:", error);
      return offlineRespond(input, signedIn);
    }

    // ---- navigation
    if (plan.action === "navigate" && plan.destination) {
      const route = findRoute(plan.destination);
      if (route.protected && !signedIn) {
        return {
          text: `The ${route.name} page is for signed-in members, so I'm taking you to the login page. Please sign in and ask me again.`,
          navigateTo: "/members/login"
        };
      }
      if (signedIn && (route.path === "/members/login" || route.path === "/members/registration")) {
        return {
          text: "You're already signed in. Would you like to open your dashboard?",
          links: [{ label: "Open my dashboard", path: "/members/dashboard" }]
        };
      }
      return { text: plan.response || `Opening the ${route.name} page.`, navigateTo: route.path };
    }

    // ---- search, answered from the data your website already loaded
    if (plan.action === "search" && plan.searchTarget) {
      const target = plan.searchTarget;
      const isMemberOnly = LOGIN_TARGETS.has(target);

      if (isMemberOnly && !signedIn) {
        return {
          text: "That information is for signed-in members. Please log in first and ask me again.",
          links: [{ label: "Go to login", path: "/members/login" }]
        };
      }

      let found;
      try {
        found = runSearch(target, plan.searchQuery, data);
      } catch (error) {
        console.error("Search failed:", error);
        return { text: "Something went wrong while looking that up. Please try again.", isError: true };
      }

      const pagePath = TARGET_PAGE[target];
      const links = pagePath && isAllowedPath(pagePath)
        ? [{ label: `Open ${findRoute(pagePath).name} page`, path: pagePath }]
        : [];

      return {
        text: found.text,
        links,
        isPrivate: isMemberOnly,
        context: { lastSubject: { target, items: found.items } }
      };
    }

    // ---- answer / clarify / unsupported
    return { text: plan.response || "How can I help you with the NANMS website?" };
  }
};
