import PrivacyScreen from "@/src/screens/Privacy/PrivacyScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VisionForge Console",
  description:
    "VisionForge safeguards console accounts, telemetry, and visual datasets with rigorous governance and security controls.",
};

export default function PrivacyPage() {
  return <PrivacyScreen />;
}
