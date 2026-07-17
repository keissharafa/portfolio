"use client";

import Link from "next/link";

export default function ConciergeCaseStudy() {
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
                        <span className="pill" style={{ background: "#F9E8EC", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Mobile App (Flutter)</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>E-Ticketing Helpdesk</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        Concierge: Mobile IT Helpdesk & Ticketing.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        A comprehensive frontend mobile application developed in Flutter for reporting, tracking, and resolving IT service issues efficiently.
                    </p>

                    {/* MOCKUP IMAGE (Pastikan ada gambar concierge.png di folder public, atau ganti namanya) */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", background: "#DDE8FB", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#E85D3A" }}>Concierge Mockup Here</span>
                        {/* <img src="/concierge.png" alt="Concierge App Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Effective IT support requires a seamless communication bridge between users facing issues and the helpdesk team resolving them. The challenge was to architect a unified, responsive mobile client capable of handling distinct user roles (Admin, Helpdesk, and User) while maintaining high usability across diverse device screens (Android & iOS).
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        The frontend was developed using Flutter, implementing a strict Clean Architecture pattern to ensure high maintainability and scalable state management. The app interfaces with a RESTful API backend, utilizing dynamic data fetching techniques such as lazy loading for ticket lists to optimize rendering performance.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        UI/UX consistency was prioritized, featuring automatic adaptation for varying screen sizes, comprehensive dark and light mode support, and seamless integration with BaaS (Backend-as-a-Service) for real-time authentication and status updates.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Role-Based Interactions:</strong> Conditional UI rendering tailored for Users (ticket creation, media uploads from camera/gallery), and Admin/Helpdesk (ticket assignment, status updates, and statistical dashboards).
                        </li>
                        <li>
                            <strong>Real-Time Tracking & Notifications:</strong> An interactive tracking interface that allows users to monitor the handling status of their active tickets, paired with system notifications for instant updates.
                        </li>
                        <li>
                            <strong>Optimized Media & State Handling:</strong> Efficient state management for handling ticket comments, file uploads, and ticket history logs without blocking the main UI thread.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}