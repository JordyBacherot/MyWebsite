import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import {StrictMode} from "react";
import Projects from "./pages/Projects.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
