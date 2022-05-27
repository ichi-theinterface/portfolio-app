import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Blogs from "./routes/Blogs";
import Accomplishment from "./routes/Accomplishment";
import AboutthisApp from "./routes/AboutthisApp"
import BlogPost1 from "./routes/BlogPost1"

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="AboutthisApp" element={<AboutthisApp/>} />
      <Route path="Blogs" element={<Blogs />} />
      <Route path="blogpost1" element={<BlogPost1 />} />
      <Route path="Accomplishment" element={<Accomplishment />} />
    </Routes>
  </BrowserRouter>
);
