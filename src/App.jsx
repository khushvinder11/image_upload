import reactLogo from "./assets/react.svg";
// import './App.css'
// import Navbar from "./component/Navbar/Navbar";
import Admin from "./component/Adminpage/adminpage";
import LoginPage from "./component/login/login";
import FileUpload from "./component/FileUpload/FileUpload";
// import Video from "./component/video";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
  },

  {
    path: "/loginpage",
    element: <LoginPage />,
  },

  {
    path: "/fileupload",
    element: <FileUpload />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <div>
    //   <Admin />
    //   <LoginPage />
    // </div>
  );
}

export default App;
