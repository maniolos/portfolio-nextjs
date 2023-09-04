'use client'
import { useEffect } from "react";
export default function Projects() {
    useEffect(() => {
        // you are safe to use the 'document' object here
        document.title = 'Test Page';
    }, []);
    return <>
    <header className="flex flex-wrap h-20 content-center text-3xl text-center justify-center ">Nothin here yet buddy</header>
    
    <div className="flex flex-wrap h-50 content-center justify-center"><a href="/" className="rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900">Back</a></div>
    
    
    </>
}