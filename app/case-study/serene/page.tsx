"use client";

import Link from "next/link";

export default function SereneCaseStudy() {
    return (
        <main style={{ backgroundColor: "#F7F7F5", minHeight: "100vh", color: "#111", paddingBottom: "80px" }}>

            {/* ─── NAVBAR SIMPLE ─── */}
            <header style={{ padding: '24px', borderBottom: '1px solid #e4e4e0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" style={{ textDecoration: 'none', color: '#8a8a85', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>&larr;</span> Back to Portfolio
                    </Link>
                    <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        <span style={{ background: '#111', color: '#fff', padding: '4px 8px', borderRadius: '4px', marginRight: '8px' }}>K</span>Kei.
                    </span>
                </div>
            </header>

            <article style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px" }}>

                {/* ─── HERO HEADER ─── */}
                <div style={{ marginBottom: "48px" }}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                        <span className="pill" style={{ background: "#F9E8EC", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Mobile Interface & UX</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>2026</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        SERENE: Urban Safety & Emergency Navigation.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        Designing a seamless SOS routing interface that prioritizes user safety and swift response times in urban environments.
                    </p>

                    {/* MOCKUP IMAGE (Ganti nama file jika perlu) */}
                    <div style={{ width: "100%", borderRadius: "16px", overflow: "hidden", background: "#DDE8FB", border: "1px solid #e4e4e0" }}>
                        <img src="/serene.jpg" alt="SERENE App Interface" style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Navigating urban spaces during emergencies or times of vulnerability requires more than just standard map routing. Users need intuitive, immediate access to safe routes and emergency services. The challenge was to create an interface that doesn't induce panic but instead provides clarity and control when it matters most.
                    </p>
                </section>

                {/* ─── THE APPROACH & RESEARCH ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Research & Ideation</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        To ensure the application met real-world needs, the project began with foundational UX research. I drafted and distributed a comprehensive mobile user experience research questionnaire designed to gather precise data on public safety perceptions.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        Analyzing this data allowed me to map out critical data flows and identify the exact pain points users face when feeling unsafe. This research directly informed the architectural decisions of the app, ensuring that features like the SOS button and safe-route generation were placed intuitively within the user's thumb reach.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>One-Tap SOS Routing:</strong> A prominent, highly accessible emergency trigger that instantly shares location data and generates the fastest route to the nearest safe zone.
                        </li>
                        <li>
                            <strong>Safety Evaluation Dashboard:</strong> Real-time urban safety metrics visually represented through clean, accessible UI components.
                        </li>
                        <li>
                            <strong>Calming UI Language:</strong> Deliberate use of color psychology and spacing to reduce cognitive load during high-stress situations.
                        </li>
                    </ul>
                </section>

                {/* ─── CONCLUSION ─── */}
                <section>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Outcome</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        SERENE demonstrates the power of combining empathetic UX research with scalable frontend architecture. It serves as a proof of concept that digital interfaces can play a tangible role in enhancing physical public safety.
                    </p>
                </section>

            </article>
        </main>
    );
}