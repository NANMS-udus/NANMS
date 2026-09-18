import { useContext, useEffect } from "react"
import { AuthContext } from "./MyContexts/AuthContext"
import { useNavigate } from "react-router"


export default function Redirect({children, pathName}) {

 const {session} = useContext(AuthContext)

 const navigate = useNavigate()
 
 useEffect(() => {
  function redirect() {
   console.log(session);
   
   if (!session) {
    navigate('/members/login')
   }
<<<<<<< HEAD

   if (session) {
    if (!pathName) {
     navigate('/members/dashboard')
    } else {
     navigate(`/members/dashboard/${pathName}`)
    }
    
   }
=======
>>>>>>> 82e1d702e767f4f08aa2a2a6b989e5dcc4dc6039
  }

  redirect()
 }, [session])

 return (
  <>
  {children}
  </>
 )
}
