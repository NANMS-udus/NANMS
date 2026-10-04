import { createBrowserRouter } from "react-router";
import Index from "./Pages/Index/Index";
import About from "./Pages/About/About";
import Executives from "./Pages/Executives/Executives";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import Members from "./Pages/Members/Members";
import Registration from "./Pages/Portal/Authentication/Registration";
import RegSuccess from "./Pages/Portal/Authentication/RegSuccess";
import Dashboard from "./Pages/Portal/Dashboard/Dashboard";
import Login from "./Pages/Portal/Authentication/Login";
import EditProfile from "./Pages/Portal/Dashboard/EditProfile";
import Payments from "./Pages/Portal/Dashboard/Payments/PayDues";
import PastMembers from "./Pages/PastMembers/PastMembers";
import Announcements from "./Pages/Portal/Dashboard/Announcements/Announcements";
import StudyDir from "./Pages/Portal/Dashboard/StudyDir/StudyDir";

export const myRouter = createBrowserRouter([
 {
  path: '/',
  Component: Index,
 },
 {
  path: 'about',
  Component: About,
 },
 {
  path: 'executives',
  Component: Executives
 },
 {
  path: 'contact',
  Component: Contact
 },
 {
  path: 'news',
  Component: News
 },
 {
  path: 'patrons-alumni',
  Component: PastMembers
 },
 {
  path: 'members',
  children: [
   {
    index: true,
    Component: Members
   },
   {
    path: 'registration',
    Component: Registration
   },
   {
    path: 'login',
    Component: Login
   },
   {
    path: 'reg-success',
    Component: RegSuccess
   },
   {
    path: 'dashboard',
    children: [
     {
      index: true,
      Component: Dashboard
     },
     {
      path: 'edit-profile',
      Component: EditProfile
     },
     {
      path: 'payments',
      Component: Payments
     },
     {
      path: 'announcements',
      Component: Announcements
     },
     {
      path: 'study-directory',
      Component: StudyDir
     },
    ]
   },
  ]
  
 },
 
])

/* export default function Router() {
 
 return (
  <RouterProvider router={myRouter} />
 )
}  */