import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../Utils/supabase";
import { UiContext } from "./UiContext";

export const AuthContext = createContext(null)

export default function Auth({ children }) {

  const [session, setSession] = useState(null)

  const [myDetails, setDetails] = useState({})

  const [positions_held, setPositionsHeld] = useState([])

  const [research_interests, setResearchIntrests] = useState([])

  const [recent_postings, setRecentPostings] = useState([])

  const { showPopup } = useContext(UiContext)

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession()

      if (data) {
        console.log(data);

        setSession(data.session)

      }
    }
    getSession()
  }, [])

useEffect(() => {
  async function getMyDetails() {
    
    const {data, error} = await supabase.from('members').select('*').eq('id', session.user.id).single()

    if (error) {
      console.log(error.message);
      
    }

    if (!error && data) {
      console.log('here');
      
      console.log(data);
      
      setDetails(data)
      console.log(myDetails);
      
    }
  }

  if (session?.user?.id) {
    getMyDetails()
    console.log(myDetails);
    
  }
}, [session])

  async function signUp(prev, input) {
    const entries = Object.fromEntries(input);

    const {
      avatar,
      fullname,
      password,
      password2,
      phone,
      date_admitted,
      bio,
      level,
      LGA,
      email,
      posStatus,
      admission_no,
      NANMS_uid
    } = entries

    console.log(entries);

    console.log(recent_postings, research_interests, positions_held);

    try {
      let avatar_url;

      let avatarPath;

      if (avatar.size && avatar.name) {
        console.log('uploading data');


        const { data: uploadData, error: uploadError } = await supabase.storage.from('avatars').upload(`${fullname}-${Date.now()}`, avatar)

        if (uploadError) {
          throw new Error(uploadError.message);

        }

        if (!uploadError && uploadData) {
          console.log(uploadData);

          avatar_url = await supabase.storage.from('avatars').getPublicUrl(uploadData.path).data.publicUrl

          avatarPath = uploadData.path
        }
      }

      console.log(avatar_url);

      if (password !== password2) {
        throw new Error("Passwords do not match");
      }

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            fullname,
            avatar_url,
            avatar_path: avatarPath,
            date_admitted,
            email,
            phone,
            bio,
            LGA,
            level,
            NANMS_uid,
            admission_no,
            recent_postings: recent_postings.map((rec) => {
              return { ...rec, posStatus }
            }),
            research_interests,
            positions_held,
          }
        }
      })

      if (signUpError) {
        const { error } = await supabase.storage.from('avatars').remove(avatarPath);

        if (error) {
          throw new Error(error.message)
        }

        throw new Error(signUpError.message);
      }

      if (!signUpError && signUpData) {
        console.log(signUpData);

        return { success: true, message: 'your account has been successfuly created' }
      }


      setPositionsHeld([])
      setRecentPostings([])
      setResearchIntrests([])

    } catch (error) {
      console.log(error.message);

      return { success: false, message: error.message }
    }

  }

  async function signIn(prev, input) {
    const entries = Object.fromEntries(input)

    console.log(entries);

    try {

      const { data, error } = await supabase.auth.signInWithPassword(entries)

      if (error) {
        throw new Error(error.message);
      }

      if (!error && data) {
        console.log(data);

        showPopup('success', 'signed in successfully')

        setSession(data.session)

        return { success: true, message: 'signed in successfuly' }
      }

    } catch (error) {
      return { success: false, message: error.message }
    }

  }

  async function signOut() {
    try {

      const { data, error } = await supabase.auth.signOut()

      if (error) {
        throw new Error(error.message);

      }

      if (!error) {
        console.log(data);

        setSession(null)

      }
    } catch (error) {
      console.log(error);

    }
  }

  async function updtAvatar(prev, input) {

    /* const resp = await supabase.auth.updateUser({
      data: {
        avatar_path: 'f1e559ba-1567-4697-9a5e-3592c7e2dcc2/Muhammad-Mukhtar Muslim-1787699199665'
      }
    }) */
    const {avatar} = Object.fromEntries(input)

    console.log(avatar);

    let avatar_url = session?.user?.user_metadata?.avatar_path;

    let avatar_path = session?.user?.user_metadata?.avatar_path;

    try {
      if (avatar.size) {
        const {data: updtData, error: updtError} = await supabase.storage.from('avatars').update('f1e559ba-1567-4697-9a5e-3592c7e2dcc2/Muhammad-Mukhtar Muslim-1787699199665', avatar, {contentType: avatar.type})
  
        if (updtError) {
          throw new Error(updtError.message);
        }
  
        if (!updtError && updtData) {
          console.log(updtData);
          
          avatar_path = updtData.path
  
          avatar_url = supabase.storage.from('avatars').getPublicUrl(updtData.path).data.publicUrl
          
        }
  
        console.log(avatar_path, avatar_url);
  
        const {data, error} = await supabase.from('members').update({
          avatar_url,
          avatar_path
        })
        .eq('id', session?.user?.id)
        .select()
        .single()

        if (error) {
          throw new Error(error.message);
        }

        if (!error && data) {
          console.log(data);

          setDetails(data)
        }
        
      }
    } catch (error) {
      console.log(error.message);
      
    }
    
    
  }

async function editProfile(prev, input) {

  const entries = Object.fromEntries(input)
  
  console.log(entries);
  
  const {
    fullname,
    phone,
    date_admitted,
    bio,
    level,
    LGA,
  } = entries

  try {
    const {data, error} = await supabase.from('member').update({
      avatar_url,
      avatar_path,
      fullname,
      phone,
      date_admitted,
      bio,
      level,
      LGA,
      research_interests,
      recent_postings
    })
    .eq('id', session.user.id)

    if (error) {
      throw new Error(error.message);
      
    }

    if (!error && data) {
      console.log(data);
      
    }
  } catch (error) {
    return {success: false, message: error.message}
  }
}


  return (
    <AuthContext.Provider value={{
      session,
      myDetails,
      signUp,
      signIn,
      signOut,
      updtAvatar,
      editProfile,
      positions_held,
      setPositionsHeld,
      research_interests,
      setResearchIntrests,
      recent_postings,
      setRecentPostings
    }}>
      {children}
    </AuthContext.Provider>
  );
};