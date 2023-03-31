import './App.css'; 
import Category from './pages/homepage/Category';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import Home from './pages/homepage/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact';
import Register from './pages/user/Register'
import Login from './pages/user/Login';
import Dashboard from './backend/pages/Dashboard';
import Allblog from './backend/blogs/Allblog'
import AddBlogs from './backend/blogs/AddBlogs'
import Aboutus from './backend/pages/About';
import Contactus from './backend/pages/Contact';
import Setting from './backend/pages/Setting';
import AllSlide from './backend/slide/AllSlide';
import Allproduct from './backend/product/Allproduct';
import AddProduct from './backend/product/AddProduct';
import EditBlogs from './backend/blogs/EditBlogs';
import EditProduct from './backend/product/EditProduct';
import Addservices from './backend/services/Addservices';
import Allservices from './backend/services/Allservices';
import Editservices from './backend/services/Editservices';
import AllVideo from './backend/video/AllVideo';
import AddVideo from './backend/video/AddVideo';
import EditVideo from './backend/video/EditVideo';
import AllFaq from './backend/faq/AllFaq';
import EditSlide from './backend/slide/EditSlide';
import AddFaq from './backend/faq/AddFaq';
import EditFaq from './backend/faq/EditFaq';

function App() {
  return (
    <>
          <Routes>
            <Route  path="/" element={<Home/>}/> 
            <Route  path="/about" element={<About/>}/> 
            <Route  path="/contact" element={<Contact/>}/> 
            <Route  path="/login" element={<Login/>}/> 
            <Route  path="/register" element={<Register/>}/> 
            <Route  path="/dashboard" element={<Dashboard/>}/> 
            <Route path="/allblog" element={<Allblog/>}/>
            <Route path="/addblog" element={< AddBlogs/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/contactus" element={< Contactus/>}/>
            <Route path="/sitesetting" element={< Setting/>}/>
            <Route path="/allslide" element={< AllSlide/>}/>
            <Route path="/product" element={< Allproduct/>}/>
            <Route path ="/addproduct" element={<AddProduct/>}/>
            <Route path ="/editproduct/:_id" element={<EditProduct/>}/>
            <Route path ="/editblog/:_id" element={<EditBlogs/>}/>
            <Route path="/allservices" element={<Allservices/>}/>
            <Route path="/addservices" element={<Addservices/>}/>
            <Route path="/editservices/:_id" element={<Editservices/>}/>
            <Route path ="/allvideo" element={<AllVideo/>}/>
            <Route path ="/addvideo" element={<AddVideo/>}/>
            <Route path ="/editvideo/:_id" element={<EditVideo/>}/>
            <Route path ="/allfaq" element={<AllFaq/>}/>
            <Route  path="/editslide/:_id" element={<EditSlide/>}/>
            <Route path="/addfaq" element={<AddFaq/>}/>
            <Route path="/editfaq/_id" element={<EditFaq/>}/>


        </Routes>
    
    </>
  );
}

export default App;
