# Product Design Specification: Project DhanGen 
## Target Vision: The Sovereign Asymmetric Field Service Management (FSM) Platform
## Target Audience: Non-English Speaking Home Service Professionals (US & India)

---

## 1. Executive Summary & Product Vision
Project DhanGen is a mobile-first Field Service Management (FSM) platform designed for skilled tradespeople (plumbers, home-kitchen cooks, handymen, electricians, carpenters) who operate in English-majority markets (US and India) but speak poor or zero English natively. 

The application acts as an invisible, bilingual AI Chief of Staff. It completely isolates the business owner from linguistic barriers by maintaining a dual-language split:
1. **The External Face (English):** AI-generated professional web pages, customer text communications, electronic invoices, and an interactive, real-time AI Voice Receptionist.
2. **The Internal Operating System (Vernacular):** A mobile app dashboard, notifications, scheduling alerts, and voice-to-text dictation completely rendered in the provider's local language (e.g., Spanish, Hindi, Marathi, Tamil, Telugu).

### North Star Goal
Allow a monolingual regional service provider to capture, schedule, fulfill, invoice, and collect testimonials from a high-value English-speaking customer base who will be using the internet. The service provider will be doing all her transactions over the mobile phone without ever typing a single word of English.

---

## 2. Core Technical Architecture

The platform must be decoupled into three clear architectural domains:

[ Customer Side (English) ]     
Public Landing Webpage
Inbound Web Booking/Scheduling Appointments/Orders
Inbound Voice Calls for Sales/Customer Support
WhatsApp Business Communciation Bot. 

[ Core Middleware Layer ]
Website Builder
Testimonial Builder Engine
Appointment/Scheduling Engine
Multimodal Routing Engine
Translation & Transcription Engine
MLOps Telemetry & LoRA Pipeline

[ Provider Side (Vernacular) ]
Mobile-First Dashboard
WhatsApp Business Sync
Localization Service

### 2.1 The Localization Service (The Translation Engine)
*   All user input loops (text or voice) must pass through a low-latency translation middleware before saving to the central PostgreSQL database.
*   **Database Schema Strategy:** System tables storing unstructured business content (job descriptions, itemized line items, notes) must store a structured JSON object containing dual localized fields: `{"en": "Leaking copper pipe replacement", "native": "लीकिंग कॉपर पाइप बदलना"}`.
*   **Preferred Translation Stack:** Integration wrapper supporting fallback chains: Localized Sovereign LLMs (BharatGen/Patram for Indic regions) -> Global Frontier APIs (Gemini Flash / OpenAI GPT-4o) for semantic, colloquial accuracy rather than literal dictionary translations.

---

## 3. High-Priority Functional Blocks & Phased Roadmaps

### Block A: Instant Web Presence & CRM Foundation (Phase 1 Baseline)
*   **The Ingestion Engine:** The provider fills out a profile completely in their native language (or via localized voice dictation).
*   **AI Web Builder:** The system transforms the native input into a beautiful, lightning-fast, static, SEO-optimized English landing page.
*   **Features Included:**
    *   **Services Section:** Clear, idiomatically correct English breakdowns of services.
    *   **Testimonial Showcase:** Text and embedded video reviews.
    *   **Instant Booking Widget:** A calendar sync tool (InstaSchedule variant) allowing clients to choose open slots.
*   **Asymmetric CRM Data Stream:**
    *   When an English-speaking customer fills out a booking form ("Main water shutoff valve is rusted shut"), the database stores it, translates it instantly, and pushes an alert to the provider's phone in their native language.

### Block B: The Asymmetric WhatsApp Orchestration Gateway (Phase 1 Deep Integration)
*   **The Communication Bridge:** The primary notification engine for the provider is **WhatsApp Business API**, eliminating the need for complex web navigation.
*   **The Inbound/Outbound Logic Flow:**
    *   When an appointment is confirmed, the system text messages the English customer an English confirmation.
    *   Simultaneously, the system dispatches a formatted WhatsApp message to the provider in their native language detailing the address, map route, scheduled time, and problem context.
    *   **Voice-to-Invoice Magic:** Upon completing a job, the provider can send a voice note via WhatsApp to the system in their native language: *"Trabajo terminado. Cambio de grifo, cobré doscientos dólares."* The platform transcribes it, translates it, formats a professional, itemized English invoice, attaches a Stripe or UPI payment link, and sends it to the customer via SMS/Email.

### Block C: The AI Voice Sales & Receptionist Bot (Phase 2 Upgrade)
*   **The Infrastructure:** Built over low-latency developer voice pipelines (**Vapi, Retell AI, or Synthflow**).
*   **Inbound Call Automation:**
    *   The bot answers live inbound phone calls with zero latency in clear, professional English.
    *   It checks the real-time availability calendar in the DB.
    *   It answers FAQs (pricing variables, service range) based on the provider’s customized company knowledge graph.
    *   It negotiates and hooks a confirmed time slot directly into the schedule.
*   **Post-Call Triage:** Instantly converts the entire call transcript into a translated native-language summary sent via WhatsApp to the business owner: *"A customer named Sarah called. She has an emergency toilet clog. I scheduled her for tomorrow at 9:00 AM."*
* It allows the provider to confirm the schedule or change it and propose the updated schedule back to the customer for confirmation. 

### Block D: Automated Video Testimonial Flywheel (Phase 3 Horizon)
*   **The Collection Mechanism:** When an invoice is paid, the customer receives a 1-click review link. Clicking the link prompts their mobile browser camera to record a 30-to-60-second video clip.
*   **The Automated Cloud Video Pipeline:**
    *   Once uploaded, a background server script (using cloud video rendering frameworks) processes the raw file.
    *   **Automated Editing Actions:** Normalizes audio levels, burns in dynamic English subtitle captions, adds an overlay border containing the contractor’s business name/logo, and stitches on a standard "Call to Action" end card.
    *   **Distribution Matrix:** The pipeline automatically publishes the finalized video as a YouTube Short / Instagram Reel to a system-managed or company-owned social channel, extracts the embed link, and appends it to the provider's public web showcase section instantly.
    *   **Review Multiplying:** Provides an automated nudge redirecting the client to push the text copy of their testimonial directly onto the company's Google Business Profile.

---

## 4. Payment Integrations & Geographic Constraints

The system must handle clear regional configuration variables based on country selection:

| Attribute | United States Configuration | India Configuration |
| :--- | :--- | :--- |
| **Primary Currency** | USD ($) | INR (₹) |
| **Payment Processor**| Stripe Checkout (Affirm, Klarna built-in) | UPI Deep-Linking, Razorpay, PhonePe |
| **Invoicing Hooks** | Text-to-SMS, Email invoicing | WhatsApp-delivered PDF Invoices |
| **Base Language Engine**| Spanish / Portuguese -> English | Hindi / Marathi / Tamil / Telugu -> English |

---

## 5. Development Guidelines for Claude Code

When generating the codebase, enforce the following guidelines:
1.  **Database Strategy First:** Use PostgreSQL. Prioritize clean JSONB structures for the dual-language tracking models on key transactional tables (`leads`, `jobs`, `invoices`, `services`).
2.  **API Decoupling:** Keep translation, transcription, and notification routing behind generic, abstract interface modules so that regional engines (like BharatGen's *Shrutam* or *Sooktam* tools in India) can be effortlessly swapped into the pipeline without rewriting business logic.
3.  **UI/UX Priority:** The contractor-facing mobile interface must prioritize large touch surfaces, minimal dense text, and voice-first UI inputs. The customer-facing web portal must prioritize lightning-fast load speeds and highly scannable local social validation.