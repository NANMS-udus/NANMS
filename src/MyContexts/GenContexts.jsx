import { createContext, useContext, useEffect, useRef, useState } from "react";
import { supabase } from "../Utils/supabase";
import { AuthContext } from "./AuthContext";
import { UiContext } from "./UiContext";



export const GenContext = createContext(null)

export default function GenCntxt({ children }) {

  const { session } = useContext(AuthContext)

  const { showPopup } = useContext(UiContext)

  const [members, setMembers] = useState({ all: [], displayed: [] })

  const [excos, setExcos] = useState([])

  const [showSideNav, setShowSideNav] = useState(false)

  const [news, setNews] = useState([])

  const [ptrns, setPtrns] = useState([])

  const [presidents, setPresidents] = useState([])

  const [alumni, setAlumni] = useState([])

  const [pymntDet, setPymntDet] = useState({ paid: [], notPaid: [], payment_history: [] })

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

  /* GET PAYMENT DETAILS */

  useEffect(() => {
    function getPymntDet() {

      try {

        const { data, error } = supabase
          .from('ass_dues')
          .select('*')
          .eq('id', session?.user?.id)
          .single()

        if (error) {
          throw new Error(error.message);
        }

        if (!error && data) {
          setPymntDet(data)
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (session) {
      getPymntDet()
    }
  }, [session])


  async function verifyPymnt(year, evidence, pymntType, amount) {
    try {

      const inputIsValid = evidence?.size && year.length && pymntType && amount
      console.log(inputIsValid);
      
      let evidence_path;

      if (!inputIsValid) {
        console.log('here');
        
        showPopup('err', 'You are not allowed to carry out this operation, please input the nessesary details.')

        return
      }

      if (evidence?.size) {
        const {data: uploadData, error: uploadError} = await supabase.storage.from('evidences').upload(`${session?.user?.id}-${year.join('-')}-ass-dues`)

        if (uploadError) {
          throw new Error(uploadError.message);
          
        }

        if (!uploadError && uploadData) {
          evidence_path = uploadData.path
        }
      }


      console.log(year, evidence, evidence_path,  amount);

      const payload = {
        payment_method: 'Bank Transfer',
        status: 'Pending',
        year,
        evidence_path,
        pymntType,
        amount,
      }

      const { data, error } = await supabase.rpc('add pending payment', payload)

      if (error) {
        const resp = supabase.storage.from('evidences').remove(evidence_path)

        if (resp.error) {
          return
        }

        throw new Error(error.message);
      }

      if (!error && data) {
        showPopup('success', 'your payment details have been sent successfuly. You will be notified when your payment is verified or rejected')

        return true
      }

    } catch (error) {

      showPopup('err', error.message)
    }
  }


  return (
    <GenContext.Provider value={{
      members,
      setMembers,
      excos,
      ptrns,
      presidents,
      alumni,
      news,
      pymntDet,
      verifyPymnt,
      showSideNav,
      setShowSideNav,
      sideNavElem
    }}>
      {children}
    </GenContext.Provider>
  );
};