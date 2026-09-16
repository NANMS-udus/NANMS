import { useContext, useEffect } from "react"
import { AuthContext } from "./MyContexts/AuthContext"
import { useNavigate } from "react-router"


export default function Redirect({children}) {

 const {session} = useContext(AuthContext)

 const navigate = useNavigate()
 
 useEffect(() => {
  function redirect() {
   console.log(session);
   
   if (!session) {
    navigate('/members/login')
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
