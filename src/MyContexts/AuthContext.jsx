import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../Utils/supabase";
import { UiContext } from "./UiContext";
import dayjs from "dayjs";
import { studyDirBase } from "../Utils/StudyDirBase";

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

      const { data, error } = await supabase.from('members').select('*').eq('id', session.user.id).single()

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
      gender,
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

    console.log(recent_postings, research_interests, positions_held);

    try {
      let avatar_url = 'placeholder Url'

      let avatarPath = 'placeholder path'

      if (password !== password2) {
        throw new Error("Passwords do not match");
      }

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        phone,
        options: {
          data: {
            fullname,
            gender,
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
          },
          emailRedirectTo: 'https://nanms-2/vercel.app/members/dashboard'
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

        const { data2, error2 } = await studyDirBase.auth.signUp({
          id: signUpData.user.id,
          email,
          password
        })

        if (error2) {
          showPopup('err', error2.message)

          throw new Error(error2.message);
        }

        if (!error2 && data2) {
          console.log(data2);
          
        }

        if (avatar.size && avatar.name) {
          console.log('uploading data');

          const { data: myDet, error: detError } = supabase.rpc('get_my_member')

          if (detError) {
            throw new Error(detError.message);

          }

          if (!detError && myDet) {
            const { data: uploadData, error: uploadError } = await supabase.storage.from(`avatars`).upload(myDet.avatar_path, avatar)

            if (uploadError) {
              throw new Error(uploadError.message);
            }

            if (!uploadError && uploadData) {
              console.log(uploadData);

              avatar_url = await supabase.storage.from(`avatars`).getPublicUrl(uploadData.path).data.publicUrl

              avatarPath = uploadData.path

              console.log(avatarPath, avatar_url);


              /* const { data, error } = await supabase.from('members').update({ avatar_url }).eq('id', signUpData.user.id).select('*')

              if (error) {
                showPopup('err', 'Your profile picture could not be uploaded')
              }

              if (!error && data) {
                console.log(data);

                setDetails(data)
              } */
            }
          }
        }

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
        showPopup('err', error.message)

        throw new Error(error.message);
      }

      if (!error && data) {
        console.log(data);

        const { data: data2, error: error2 } = studyDirBase.auth.signInWithPassword(entries)

        if (error2) {
          showPopup('err', error.message)

          throw new Error(error2.message);
        }

        showPopup('success', 'signed in successfully', true)

        setSession(data.session)

        return
      }

    } catch (error) {
      return { success: false, message: error.message }
    }

  }

  async function signOut() {
    try {
      showPopup('pending', 'logging out')

      const { error } = await supabase.auth.signOut()

      const { error: error2 } = await studyDirBase.auth.signOut()

      if (error || error2) {
        throw new Error(error.message || error2.message);

      }

      if (!error && !error2) {
        setSession(null)
      }
    } catch (error) {
      console.log(error);

    }
  }

  async function updtAvatar(prev, input) {

    const { avatar } = Object.fromEntries(input)

    console.log(avatar);

    let avatar_url = myDetails.avatar_url

    let avatar_path = myDetails.avatar_path

    try {
      if (avatar.size) {
        const { data: updtData, error: updtError } = await supabase.storage.from('avatars').upload(myDetails.avatar_path, avatar, { upsert: true })

        if (updtError) {
          throw new Error(updtError.message);
        }

        if (!updtError && updtData) {
          console.log(updtData);

          avatar_path = updtData.path

          avatar_url = supabase.storage.from('avatars').getPublicUrl(updtData.path).data.publicUrl

        }

        console.log(avatar_path, avatar_url);

        const { data, error } = await supabase.from('members').update({
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

          showPopup('success', 'Your avatar has been updated successfuly')

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
      const { data, error } = await supabase.from('members').update({
        fullname,
        phone,
        date_admitted: dayjs(date_admitted).format(''),
        bio,
        level,
        LGA,
        research_interests,
        recent_postings
      })
        .eq('id', session.user.id)
        .select()
        .single()

      if (error) {
        throw new Error(error.message);
      }

      if (!error && data) {
        console.log(data);

        setDetails(data)

        return { success: true, message: 'Your profile details have been updated successfuly' }

      }
    } catch (error) {
      return { success: false, message: error.message }
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
