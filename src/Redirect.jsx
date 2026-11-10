import { useContext, useEffect } from "react"
import { AuthContext } from "./MyContexts/AuthContext"
import { useNavigate } from "react-router"
import { UiContext } from "./MyContexts/UiContext"


export default function Redirect({children, pathName}) {

 const {session} = useContext(AuthContext)

 const {assNavRoute} = useContext(UiContext)

 const navigate = useNavigate()
 
 useEffect(() => {
  function redirect() {
   
   if (!session) {
    console.log('no session');
    navigate('/members/login')
   }

   if (session) {
    if (!pathName) {
     navigate('/members/dashboard')
    } else {
     navigate(`/members/dashboard/${pathName}`)
    }
    
   }
  }

  redirect()
 }, [session])

 useEffect(() => {
  if (assNavRoute) {
   navigate(assNavRoute)
  }
 }, [assNavRoute])

 return (
  <>
  {children}
  </>
 )
}
