import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthProvider } from "./context/AuthContext";
import { AdminRoutes } from "./routes/AdminRoutes";
import AdminHome from "./pages/ADMIN/adminHome/AdminHome";
import AllStudents from "./pages/ADMIN/adminStudents/allStudents/AllStudents";
import CreateStudent from "./pages/ADMIN/adminStudents/createStudent/CreateStudent";
import SearchStudent from "./pages/ADMIN/adminStudents/searchStudent/SearchStudent";
import AdminCourses from "./pages/ADMIN/adminCourses/AdminCourses";
import AdminCreate from "./pages/ADMIN/adminCreate/AdminCreate";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AdminRoutes />}>
            <Route path="/admin" element={<AdminHome />} />
            <Route
              path="/admin/students/allStudents"
              element={<AllStudents />}
            />
            <Route
              path="/admin/students/createStudent"
              element={<CreateStudent />}
            />
            <Route path="/admin/students/search" element={<SearchStudent />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/create" element={<AdminCreate />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
