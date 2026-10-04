import { createContext, useEffect, useRef, useState } from "react";
import { supabase } from "../Utils/supabase";



export const GenContext = createContext(null)

export default function GenCntxt({ children }) {

  const [members, setMembers] = useState({ all: [], displayed: [] })

  const [excos, setExcos] = useState([])

  const [showSideNav, setShowSideNav] = useState(false)

  const [news, setNews] = useState([])

  const [ptrns, setPtrns] = useState([])

  const [presidents, setPresidents] = useState([])

  const [alumni, setAlumni] = useState([])

  const sideNavElem = useRef(null)



  /* GET MEMBERS CONTEXT */

  useEffect(() => {
    async function getAllMembers() {

      try {
        const { data, error } = await supabase.from('members').select('*')

        if (error) {
          throw new Error(error.message);
        }

        if (!error && data) {
          setMembers({ all: data, displayed: data })
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    getAllMembers()

  }, [])

  /* SUBSCRIBE TO MEMBERS TABLE CHANGES */

  useEffect(() => {
    //const members = supabase.channel('members')

    /* members
     .on(
      'postgres_changes',
      {
       event: 'insert',
       schema: 'public',
       table: 'members'
      },
      (payload) => {
       console.log(payload);
       setMembers((prev) => [...prev, payload.new])
      }
     )
     .on(
      'postgres_changes',
      {
       event: 'update',
       schema: 'public',
       table: 'members'
      },
      (payload) => {
       console.log(payload);
      }
     ).subscribe() */
  }, [])

  /* GET EXCOS */

  useEffect(() => {
    async function getExcos() {
      try {

        const { data, error } = await supabase.from('NANMS_EXCOS').select('*')

        if (error) {
          throw new Error(error.message);

        }

        if (!error && data) {
          console.log(data);
          setExcos(data)
        }

      } catch (error) {

        /* to use popup */
        console.log(error.message);

      }
    }

    getExcos()
  }, [])

  /* GET NEWS */

  useEffect(() => {
    async function getNews() {
      try {
        console.log('working');

        const { data, error } = await supabase.from('news').select('*')

        if (error) {
          throw new Error(error.message);

        }

        if (!error && data) {
          console.log(data);

          setNews(data)
        }

      } catch (error) {
        /* to use popup */

        console.log(error.message);

      }
    }

    getNews()
  }, [])

  /* GET PATRONS, ALUMNI AND PRESIDENTS */

  useEffect(() => {
    async function getPtrns() {
      try {
        const { data, error } = await supabase.from('patrons').select('*')

        if (error) {
          throw new Error(error.message);

        }

        if (!error && data) {
          console.log(data);

          setPtrns(data)
        }


      } catch (error) {
        console.log(error.message);

      }
    }

    async function getPresidents() {
      try {
        const { data, error } = await supabase.from('presidents').select('*')

        if (error) {
          throw new Error(error.message);
        }

        if (!error && data) {
          console.log(data);

          setPresidents(data)
        }


      } catch (error) {
        console.log(error.message);

      }
    }

    async function getAlumni() {
      try {
        const { data, error } = await supabase.from('alumni').select('*')

        if (error) {
          throw new Error(error.message);

        }

        if (!error && data) {
          console.log(data);

          setAlumni(data)
        }


      } catch (error) {
        console.log(error.message);

      }
    }

    getPtrns()
    getPresidents()
    getAlumni()
  }, [])


  return (
    <GenContext.Provider value={{
      members,
      setMembers,
      excos,
      ptrns,
      presidents,
      alumni,
      news,
      showSideNav,
      setShowSideNav,
      sideNavElem
    }}>
      {children}
    </GenContext.Provider>
  );
};