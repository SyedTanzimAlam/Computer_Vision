# Application screens

This document tracks every user-facing screen in the VisionForge Console demo. Update this file whenever routes are added, removed, or materially changed.

## Screen index

- `/` (`app/page.tsx` → `src/screens/Home/HomeScreen.tsx`)
  - **Purpose:** Landing experience for new users. Presents the create account form with client-side validation, social sign-up placeholders, and links to privacy terms.
- `/sign-in` (`app/sign-in/page.tsx`)
  - **Purpose:** Email/password sign-in flow that validates input, exposes demo credentials, and redirects to the dashboard on successful mock authentication.
- `/dashboard` (`app/dashboard/page.tsx`)
  - **Purpose:** Placeholder dashboard card shown after sign-in, confirming navigation to the authenticated area of the app.
- `/privacy` (`app/privacy/page.tsx` → `src/screens/Privacy/PrivacyScreen.tsx`)
  - **Purpose:** Privacy policy article outlining governance, security, and contact details, linked from account creation and terms anchors.
