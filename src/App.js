import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootsLayout from "./layouts/RootsLayout";

const router= createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<RootsLayout/>}>

</Route>

  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
