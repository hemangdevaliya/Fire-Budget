import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BudgetPlanner from "./Components/BudgetPlanner";
import Signup2 from "./Components/Signup2";
import Login from "./Components/Login";

function App()
{
  return(
<>


<BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup2 />} />
        <Route path="login" element={<Login />} />
        <Route path="/home" element={<BudgetPlanner />}>
        </Route>
      </Routes>
 </BrowserRouter>


{/* <Signup2/> */}

{/* <Login/> */}
{/* <BudgetPlanner/> */}
</>
  );
}
export default App;