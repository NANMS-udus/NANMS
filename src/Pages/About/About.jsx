import AiDirect from "../../AiDirect"
import Footer from "../../Shared/Footer"
import Nav from "../../Shared/Nav"
import "./About.css"
import Main from "./Main"

export default function About() {

 return (
  <AiDirect>
   <Nav currentPage={'about'} />
   <Main />
   <Footer />
  </AiDirect>
 )
}