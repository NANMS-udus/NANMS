import dayjs from "dayjs"
import { useNavigate } from "react-router"



function useNav() {
 const nav = useNavigate()

 return nav
}

export const LGAs = [
 "Agaie",
 "Agwara",
 "Bida",
 "Borgu",
 "Bosso",
 "Chanchaga",
 "Edati",
 "Gbako",
 "Gurara",
 "Katcha",
 "Kontagora",
 "Lapai",
 "Lavun",
 "Magama",
 "Mariga",
 "Mashegu",
 "Mokwa",
 "Munya",
 "Paikoro",
 "Rafi",
 "Rijau",
 "Shiroro",
 "Suleja",
 "Tafa",
 "Wushishi"
]

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

/* Just checking something out */


export const pastMembers = {
 searchCats: {
  patrons: {

  },
  alumni: {
   class: [
    '2026',
    '2025',
    '2024',
    '2023',
   ],
   specialty: [

   ]
  },
  presidents: {
   tenures: [
    '2024-2025',
    '2025-2026',
    /* '2026-2027', */
   ]
  }
 }
}





export const assistant = {
 data: {
  queryWords: {
   asking: 'what, where, how, when, is, why, who, which, ',

   greeting: 'hello, hi,  whatsup, sup',

   timeOfday: 'morning, afternoon, evening',

   joining: 'and, but, or',

   doing: 'navigate, contact, feedback, register, login, signin, sign in, log in, verify, do, get, join, upload, edit, update',

  },

  possibleQueries: {
   frequent: [
    {
     query: 'list all pages', action: (setResp) => {
      setResp(
       {
        sender: 'ai',
        date: dayjs(),
        body: <>
         <h3>
          Here are the current pages on the website:
         </h3>
         <ul style={{marginTop: '16px', font: "inherit"}}>
          <li >
           <strong>
           Home:
           </strong> 
           <span style={{display: "block", paddingLeft: '20px'}}>
            This is the first page displayed to the user
           </span>
          </li>
         </ul>
        </>
       }
      )
     }
    }
   ],


  },

  routes: {
   pub: [
    { name: 'home', keyWords: ['home'], path: '/' },
    { name: 'news', keyWords: ['news'], path: '/news' },
    { name: 'executives', keyWords: ['executives', 'exco'], path: '/executives' },
    { name: 'Previous Members', keyWords: ['patrons', 'alumni', 'presidents'], path: '/patrons-alumni' },
    { name: 'about', keyWords: ['about'], path: '/about' },
    { name: 'login', keyWords: ['login'], path: '/members/login' },
    { name: 'contact', keyWords: ['feedback', 'contact'], path: '/contact' },
    { name: 'members', keyWords: ['members'], path: '/members' },
    { name: 'registration', keyWords: ['registration', 'signup', 'create account'], path: '/members/registration' },
   ],
   pri: [
    { name: 'dashboard', keyWords: ['dashboard'], path: '/members/dashboard' },
   ]
  },
 },

 task: {
  /* useNav: function (to) {
   const nav = useNavigate()

   nav(to)
   return nav
  }, */

  search: function (target, pName, pValue) {
   let result;

   if (pName === 'text') {
    result = target.reduce((acc, itm) => {

    }, [])
   }
  }
 },


 respond: async function (input, setResp, navigate, setMsgs, setConfirm, auto = false) {

  const query = {
   sender: 'user',
   date: dayjs(),
   body: input
  }

  setMsgs((p) => {
   return [...p, query]
  })

  const waitTime = Math.round(Math.random() * 3000)

  console.log(waitTime);

  await new Promise((resolve) => setTimeout(resolve, waitTime))

  const inputArr = input.split(' ')

  const responses = {
   greeting: [
    'Hello, how are you doing.',
    'Hi, nice to have you here.',
    'Sup, how far na?',
    'I am  great, how are you doing? ',
    `Good ${dayjs().get('hours') < 12 ? 'Morning' : dayjs().get('hours') >= 4 ? 'Afternoon' : 'Evening'} user.`,
   ],
   task: {
    nav: [

    ]
   }
  }

  let probs = {
   query: '',
   index: null
  }

  const greetingWords = this.data.queryWords.greeting.split(', ')

  const timeOfDay = this.data.queryWords.timeOfday.split(', ')


  if (greetingWords.includes(inputArr[0]?.toLowerCase()) || timeOfDay.includes(inputArr[1]?.toLowerCase())) {
   probs = { query: 'greet', index: greetingWords.indexOf(inputArr[0]?.toLowerCase()) }
  }

  const taskIsNavigate = input.toLowerCase().includes('navigate') || input.toLowerCase().includes('go ') || input.toLowerCase().includes('take me')
  const taskIsSearch = input.toLowerCase().includes('look') || input.toLowerCase().includes('search')

  if (taskIsNavigate) {
   probs = { query: 'nav', index: 0 }
  }

  if (taskIsSearch) {
   probs = { query: 'search', index: 1 }
  }


  const generateResp = async () => {
   if (probs.query === 'greet') {
    if (probs.index < 0) {
     setResp({ sender: 'ai', date: dayjs(), body: `${responses.greeting[4]}, What do you want me to help you with` })
    } else {
     setResp({ sender: 'ai', date: dayjs(), body: `${responses.greeting[probs.index]} What do you want me to do for you` })
    }
   } else {
    if (probs.query === 'nav') {


     const routes = this.data.routes

     const allKeyWords = [...this.data.routes.pri, ...this.data.routes.pub].reduce((acc, itm) => {
      return [...acc, ...itm.keyWords]
     }, [])

     const to = input.split(' to ')[1].toLowerCase()

     const destIsValid = allKeyWords.some((k) => to.includes(k))

     let path

     const isPublic = routes.pub.find((r) => {
      return r.keyWords.some((k) => to.includes(k))
     })

     console.log(allKeyWords, destIsValid);



     if (to && isPublic && destIsValid) {

      routes.pub.forEach((r) => {

       const responses = [
        `You will be transfered to the ${r.name} page in 2 seconds`,
        `please wait, you are being directed to the ${r.name} page now.`,
        `OK, redirecting you to the ${r.name} veiw, please be patient`
       ]

       r.keyWords.forEach(async (kw) => {
        if (to.includes(kw)) {
         path = r.path

         const respIndex = Math.round(Math.random() * 2)

         await new Promise((resolve) => setTimeout(resolve, 2000))

         setResp({ sender: 'ai', date: dayjs(), body: responses[respIndex] })

         navigate(path)

        }
       })
      })
     } else if (to && !isPublic && destIsValid) {

     } else if (!destIsValid) {
      const resps = [
       'No such page exists on the website',
       'The page you are requesting for does not exist',
       'You have specified an invalid destination'
      ]

      await new Promise((resolve) => setTimeout(resolve, 2000))

      setResp({ sender: 'ai', date: dayjs(), body: `${resps[Math.round(Math.random() * 2)]}, would you like me to list all the current pages` })

      setConfirm('list all pages')
     }


    } else if (probs.query === 'search') {

    } else if (auto) {
     this.data.possibleQueries.frequent.find((q) => q.query).action(setResp)

     console.log('done');
     
    }
   }
  }

  if (probs) {
   generateResp(probs)
  } else {

  }
 },

 confirm: function ( input, setResp, navigate, setMsgs, setConfirm,) {
  if (input.toLowerCase() === 'no') {
   this.respond(input, setResp, navigate, setMsgs, setConfirm)
  } else if (input.toLowerCase() === 'yes') {
   this.respond(input, setResp, navigate, setMsgs, null, true)
  }
 },

 getMsgs: function (setterFun) {
  const messages = JSON.parse(localStorage.getItem('messages'))

  if (messages?.length) {
   setterFun(messages)
  } else {
   setterFun([{ date: dayjs(), sender: 'ai', body: <>Salam & Greetings! Welcome to the NANMS assistant window, my name is <strong>PowerBot</strong>. I can assist you with navigating, searching and many other functions on the website. click on any of the quick buttons below to ask a quick question. Or would you like to know all the things i can do?</> }])
  }
 },

 saveMsgs: function (messages) {
  localStorage.setItem('messages', JSON.stringify(messages))
 },

 clearMsgs: function () {
  localStorage.removeItem('messages')
 }
}
