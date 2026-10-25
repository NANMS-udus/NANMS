import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { UiContext } from "./UiContext";
import { studyDirBase } from "../Utils/StudyDirBase";
import { supabase } from "../Utils/supabase";
import dayjs from "dayjs";



export const PortalContext = createContext(null)


export default function PortalCntxt({ children }) {

 const { session: genSession } = useContext(AuthContext)

 const [session, setSession] = useState(null)

 const { showPopup } = useContext(UiContext)

 const [pymntDet, setPymntDet] = useState({ paid: [], notPaid: [], payment_history: [] })

 const [intNews, setIntNews] = useState([])

 const [studyMats, setStudyMats] = useState([])

 const [years, setYears] = useState([])




 useEffect(() => {
  async function getSession() {
   const { data } = await studyDirBase.auth.getSession()

   if (data) {
    console.log(data);

    setSession(data.session)

   }
  }
  getSession()
 }, [])


 /* GET PAYMENT DETAILS */

 useEffect(() => {
  async function getPymntDet() {

   try {

    const { data, error } = await supabase.from('ass_dues')
     .select('*')
     .eq('id', genSession?.user?.id)
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

  if (genSession) {
   getPymntDet()
  }
 }, [genSession, session])

 /* GET INTERNAL NEWS */

 useEffect(() => {
  async function getIntNews() {

   try {

    const { data, error } = await supabase.from('announcements').select('*')

    if (error) {
     throw new Error(error.message);

    }

    if (!error && data) {
     setIntNews(data)
    }

   } catch (error) {
    showPopup('err', error.message)
   }
  }

  if (session) {
   getIntNews()
  }
 }, [session])


 /* GET STUDY MATERIALS */

 useEffect(() => {
  async function getStudyMats() {

   try {

    const { data, error } = await studyDirBase.from('dir_record').select('*')

    if (error) {
     throw new Error(error.message);

    }

    if (!error && data) {
     console.log(data);

     setStudyMats(data)
    }

   } catch (error) {
    showPopup('err', error.message)
   }
  }

  if (session) {
   getStudyMats()
  }
 }, [session])



 async function verifyPymnt(prev, input) {
  try {

   const {evidence, amount} = Object.fromEntries(input)

   console.log(evidence, years, amount);
   

   const inputIsValid = evidence?.size && years.length && amount

   let evidence_path;

   let evidence_url;

   if (!inputIsValid) {

    showPopup('err', 'Please input the nessesary details to proceed.')

    return
   }

   if (evidence?.size) {
    const { data: uploadData, error: uploadError } = await supabase.storage.from('evidences').upload(`${session?.user?.id}-${years.join('-')}-ass-dues`, evidence)

    if (uploadError) {
     throw new Error(uploadError.message);

    }

    if (!uploadError && uploadData) {
     evidence_path = uploadData.path
     evidence_url = await studyDirBase.storage.from('evidences')
     .getPublicUrl(uploadData.path)
     .data
     .publicUrl
    }
   }


   console.log(years, evidence, evidence_path, amount);

   const payload = {
    date: dayjs(),
    payment_method: 'Bank Transfer',
    years,
    evidence_path,
    evidence_url,
    desc: 'Ass. Dues',
    amount,
   }

   const { data, error } = await supabase.rpc('add_payment_hist', {payload})

   if (error) {
    const resp = await supabase.storage.from('evidences').remove(evidence_path)

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

   return false
  }
 }

 return (
  <PortalContext
   value={{
    pymntDet,
    verifyPymnt,
    intNews,
    studyMats,
    years,
    setYears
   }}
  >
   {children}
  </PortalContext>
 );
};