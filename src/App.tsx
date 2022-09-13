import {useState} from 'react';
import './App.css';
import DevelopmentTeamSection from "./components/Sections/DevelopmentTeamSection";
import Card from "./components/UI/Card";
import ProjectsSection from "./components/Sections/ProjectsSection";

function App() {

    return (
        <>
            <DevelopmentTeamSection/>
            <ProjectsSection/>
        </>
    );
}

export default App
