import Footer from "../../Shared/Footer"
import Nav from "../../Shared/Nav"
import "./Index.css"
import Main from "./Main"

export default function Index() {

 return (
  <>
  <Nav currentPage={'home'}/>
  <Main />
  <Footer />
  </>
 )
}