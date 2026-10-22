import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { UiContext } from "./UiContext";
import { studyDirBase } from "../Utils/StudyDirBase";
import { supabase } from "../Utils/supabase";



export const PortalContext = createContext(null)


export default function PortalCntxt({ children }) {

 const { session } = useContext(AuthContext)

 const { showPopup } = useContext(UiContext)

 const [pymntDet, setPymntDet] = useState({ paid: [], notPaid: [], payment_history: [] })

 const [intNews, setIntNews] = useState([])

 const [studyMats, setStudyMats] = useState([])


 /* GET PAYMENT DETAILS */

 useEffect(() => {
  async function getPymntDet() {

   try {

    const { data, error } = await supabase.from('ass_dues')
     .select('*')
     .eq('id', session?.user?.id)

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

 /* GET INTERNAL NEWS */

 useEffect(() => {
  async function getIntNews() {
   
   try {
    
    const {data, error} = await supabase.from('announcements').select('*')

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
    
    const {data, error} = await studyDirBase.from('dir_record').select('*')

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
    const { data: uploadData, error: uploadError } = await supabase.storage.from('evidences').upload(`${session?.user?.id}-${year.join('-')}-ass-dues`)

    if (uploadError) {
     throw new Error(uploadError.message);

    }

    if (!uploadError && uploadData) {
     evidence_path = uploadData.path
    }
   }


   console.log(year, evidence, evidence_path, amount);

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
  <PortalContext
   value={{
    pymntDet,
    verifyPymnt,
    intNews,
    studyMats
   }}
  >
   {children}
  </PortalContext>
 );
};