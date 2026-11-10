import { Outlet } from "react-router";
import Portal from "./Shared/Portal";
import Assistant from "./Pages/nanms-scholar-ai-v2/scholar-ai/src/Components/Assistant/Assistant";
//import Assistant from "./Pages/Assistant_2/Assistant";


export default function RootLayout() {
  return (
   <div>
    <Outlet />
    <Assistant />
   </div>
  );
};