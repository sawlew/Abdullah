import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Lost from './component/Lost';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/contact",
    element: <Contact />
  },
  {
    path:"/projects",
    element: <Projects />
  },
  {
    path:"/skills",
    element: <Skills />
  },
  {
    path:"*",
    element: <Lost />
  },
]);

const App=() => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
