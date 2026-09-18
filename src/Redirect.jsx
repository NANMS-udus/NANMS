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

   if (session) {
    navigate('/members/dashboard')
   }
  }

  redirect()
 }, [session])

 return (
  <>
  {children}
  </>
 )
}
