# Application screens

This document tracks every user-facing screen in the VisionForge Console demo. Update this file whenever routes are added, removed, or materially changed.

## Screen index

- `/` (`app/page.tsx` → `src/screens/Home/HomeScreen.tsx`)
  - **Purpose:** Landing experience for new users. Presents the create account form with client-side validation, social sign-up placeholders, and links to privacy terms.
- `/sign-in` (`app/sign-in/page.tsx`)
  - **Purpose:** Email/password sign-in flow featuring GitHub and Google quick actions, inline validation, and demo credentials guidance before routing to the dashboard after successful mock authentication.
- `/sign-up` (`app/sign-up/page.tsx`)
  - **Purpose:** Account creation form collecting email, password, and confirmation with dual submit actions (“Create Account” and “SSO”), social sign-up shortcuts, and policy disclaimers.
- `/dashboard` (`app/dashboard/page.tsx`)
  - **Purpose:** Placeholder dashboard card shown after sign-in, confirming navigation to the authenticated area of the app.
- `/privacy` (`app/privacy/page.tsx` → `src/screens/Privacy/PrivacyScreen.tsx`)
  - **Purpose:** Privacy policy article outlining governance, security, and contact details, linked from account creation and terms anchors.
