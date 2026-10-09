"use client";

import Link from "next/link";

export default function NFCCaseStudy() {
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
                        <span className="pill" style={{ background: "#F9E8EC", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Web Integration</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Hardware API</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        NFC Attendance System: Bridging Hardware & Web.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        Developing a real-time attendance tracking interface that seamlessly communicates with NFC technology for instant data rendering.
                    </p>

                    {/* MOCKUP IMAGE (Pastikan ada gambar di folder public) */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/nfc.jpg" alt="NFC Attendance Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Traditional attendance systems rely on cumbersome manual entry, fingerprint scanners that require proprietary software, or QR codes that demand good lighting and active camera manipulation. The challenge was to create a friction-free, high-speed attendance system accessible directly through a standard web browser without installing external desktop applications.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        This project breaks the boundary between physical hardware and web applications. By utilizing Hardware APIs (such as Web NFC or bridging endpoints via local servers), the frontend application directly listens to near-field communication events.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        When a user taps an NFC-enabled ID card, the hardware transmits the UID. The web interface intercepts this payload, processes the state instantaneously, and provides immediate visual and audio feedback, bypassing the typical latency of traditional form submissions.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Instantaneous Tap-to-Render:</strong> A highly responsive UI that updates employee/student status on the dashboard within milliseconds of an NFC tap.
                        </li>
                        <li>
                            <strong>Hardware-to-Web Bridging:</strong> Seamless integration with physical NFC readers, ensuring stable data transmission to the browser environment.
                        </li>
                        <li>
                            <strong>Visual & Auditory Feedback:</strong> Distinct UI states (Success/Failure) coupled with feedback mechanisms to ensure users know their attendance was recorded without looking closely at the screen.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}