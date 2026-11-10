import { useContext, useEffect } from "react"
import { UiContext } from "./MyContexts/UiContext"
import { useNavigate } from "react-router"


export default function AiDirect({children}) {

 const {assNavRoute} = useContext(UiContext)

 const navigate = useNavigate()

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