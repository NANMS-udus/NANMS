import AiDirect from "../../AiDirect"
import Footer from "../../Shared/Footer"
import Nav from "../../Shared/Nav"
import "./Index.css"
import Main from "./Main"

export default function Index() {

 return (
  <AiDirect>
   <Nav currentPage={'home'} />
   <Main />
   <Footer />
  </AiDirect>
 )
}