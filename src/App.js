import React from "react";
import './App.css'
import Footer from "./Layouts/Footer";
import Form_Create_Schedule from "./Layouts/Form_Create_Schedule";
import Header from "./Layouts/Header";
import NoSchedule from "./Layouts/NoSchedule";
const App = () =>{
    return (
        <div>
            <Header/>
            {/*  <Form_Create_Schedule/>  */}
            <NoSchedule/>
            <Footer/>
        </div>
    )
}

export default App
