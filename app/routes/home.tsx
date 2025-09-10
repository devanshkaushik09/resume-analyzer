import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {resumes} from "~/constants";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "Smart feedback for your CV" },
  ];
}


export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate("/auth?next=/");
        }
    }, [auth.isAuthenticated, navigate]);

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Track your Applications and Resume Ratings</h1>
                    <h2>Review your submissions and check AI-Powered feedback.</h2>
                </div>

                {resumes.length > 0 && (
                    <div className="resumes-section">
                        {resumes.map((resume) => (
                            <ResumeCard key={resume.id} resume={resume} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}