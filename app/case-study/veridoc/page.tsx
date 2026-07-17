"use client";

import Link from "next/link";

export default function VeridocCaseStudy() {
    return (
        <main style={{ backgroundColor: "#F7F7F5", minHeight: "100vh", color: "#111", paddingBottom: "80px" }}>

            {/* ─── NAVBAR SIMPLE ─── */}
            <header style={{ padding: '24px', borderBottom: '1px solid #e4e4e0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/#projects" style={{ textDecoration: 'none', color: '#8a8a85', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                        <span className="pill" style={{ background: "#E6F0FF", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Data Visualization</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Forensics Dashboard</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        VERIDOC: Enterprise Digital Verification.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        A comprehensive frontend interface for a digital document forensics platform, focusing on precise data visualization for metadata anomalies and Explainable AI.
                    </p>

                    {/* MOCKUP IMAGE (Pastikan ada gambar di folder public) */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", background: "#DDE8FB", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#E85D3A" }}>VERIDOC Mockup Here</span>
                        {/* <img src="/Landing page.jpg" alt="Veridoc Landing Page" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Institutions frequently struggle to verify the authenticity of digital documents, as standard visual checks cannot detect underlying metadata manipulations. The challenge was to build a user interface that translates complex forensic audits, structural anomalies, and machine learning risk scores into readable, actionable insights for manual reviewers.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        To address this, I architected a clean, high-density dashboard that prioritizes critical findings without overwhelming the user. The UI is designed to seamlessly render extracted metadata (such as modification dates and software traces) alongside an AI Classification module.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        A key focus was implementing data visualization for the Explainable AI (SHAP) integration. Instead of just displaying a raw "Suspicious" status with a Risk Score of 78/100, the interface renders proportional bar charts showing exactly which features (e.g., Timestamp mismatch, Software traces) contributed to the AI's decision.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Explainable AI (SHAP) Dashboard:</strong> A visual breakdown of AI decisions, illustrating dominant risk factors like author mismatches and missing metadata to justify the final confidence score.
                        </li>
                        <li>
                            <strong>Digital Fingerprint Tracking:</strong> Integration of an SHA-256 Hash Integrity module to display the document's baseline hash, ensuring absolute traceability.
                        </li>
                        <li>
                            <strong>Automated Forensic Reporting:</strong> A layout optimized for generating automated, print-ready PDF verification reports that summarize metadata anomalies and system recommendations for supervisors.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}