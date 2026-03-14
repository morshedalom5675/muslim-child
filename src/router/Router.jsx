import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Teachers from "../page/Teachers/Teachers";
import Gallery from "../page/Gallery/Gallery";
import Syllabus from "../page/Syllabus/Syllabus";
import Contact from "../page/Contact/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
        },
        {
            path: 'about',
            Component:About
        },
        {
            path: 'teachers',
            Component:Teachers
        },
        {
            path: 'gallery',
            Component:Gallery
        },
        {
            path: 'syllabus',
            Component:Syllabus
        },
        {
            path: 'contact',
            Component:Contact
        },
    ],
  },
]);

export default Router;
