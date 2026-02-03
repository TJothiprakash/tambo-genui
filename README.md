🧵 Fabric Decision Assistant

Generative UI + Persistent Interactables with Tambo

A decision-support web application that helps users choose the right fabric by balancing cost, comfort, and sustainability.

Built using Tambo’s Generative UI, this project demonstrates how AI can reason over interactive, persistent UI state instead of responding with text alone.

✨ What Makes This Different

Most AI apps:

Ask a question

Return text

End the interaction

This app:

🧠 AI renders UI components (charts, summaries)

🎛 Users interact with persistent controls (sliders, select/reset)

🔄 AI updates recommendations live based on user actions

📊 Visuals and logic stay consistent through a shared domain model

This creates a human-in-the-loop decision system, not a chatbot.

🧠 Core Concepts Demonstrated
1️⃣ Generative UI (GenUI)

AI dynamically decides what UI to show, including:

Cost vs GSM charts

Breathability vs GSM charts

Comparison tables

Decision summaries with confidence

2️⃣ Persistent Interactables

Fabric cards remain visible throughout the session:

GSM slider

Select / Deselect

Reset to baseline

Instant UI feedback

These are not re-rendered on every response — they persist.

3️⃣ Optimistic UI with Hooks

Interactable state is AI-owned (async)

UI uses local React state for instant feedback

State is synced back to AI safely

This pattern ensures smooth UX even with AI-controlled state.

4️⃣ Single Domain Model

The same mathematical relationships drive:

Interactable cards

Charts

AI reasoning

No duplicated logic. No inconsistencies.

🧩 Main Components
🔹 FabricOptionCard (Interactable)

GSM slider

Derived cost & breathability

Sustainability score

Select / Deselect

Reset to initial state

🔹 Graph Components (GenUI)

Cost vs GSM

Breathability vs GSM

Comparison visualizations

🔹 Decision Summary

AI recommendation

Reasons for choice

Confidence score

🎥 Suggested Demo Flow (2–3 minutes)

Ask:
“I care about cost, comfort, and sustainability. What should I choose?”

Observe:

Fabric cards appear on the right

Charts and summaries are generated

Adjust GSM using the slider

Select / Deselect fabrics

Watch AI update recommendations live

Reset and compare again

🛠 Tech Stack

Next.js (App Router)

React + TypeScript

Tambo GenUI

Zod (schema validation)

Recharts (data visualization)

🚀 Running Locally
npm install
npx tambo init
npm run dev


Create a .env.local file:

NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key


Then open:
👉 http://localhost:3000/chat

🌍 Deployment

This project is frontend-only and can be deployed easily.

✅ Recommended: Vercel

Push the project to GitHub

Import the repo in https://vercel.com

Add environment variable:

NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key


Deploy

No backend. No database. No server setup required.

🏁 Hackathon Notes

No backend or DB

All logic is AI + UI driven

Focused on interaction, clarity, and reasoning

Demonstrates real GenUI usage, not static UI

📌 Why This Matters

This project shows how AI can evolve from:

Answering questions
to
Helping humans reason through decisions interactively

Built with ❤️ using Tambo GenUI

For more on Tambo, visit: https://docs.tambo.co