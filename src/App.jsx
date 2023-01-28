import reactLogo from "./assets/react.svg";
// import './App.css'
// import Navbar from "./component/Navbar/Navbar";
import Admin from "./component/Adminpage/adminpage";
import LoginPage from "./component/login/login";
import FileUpload from "./component/FileUpload/FileUpload";
import SingUpPage from "./component/signUp/SignUp";
import Video from "./component/video";
import TagPage from "./component/TagPage/TagPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SingUpPage />,
  },

  {
    path: "/loginpage",
    element: <LoginPage />,
  },

  {
    path: "/admin",
    element: <Admin />,
  },

  {
    path: "/tagpage",
    element: <TagPage />,
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
    // <Video />
    // </div>
  );
}

export default App;
