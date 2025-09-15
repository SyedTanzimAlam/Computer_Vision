import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | VisionForge Console",
  description:
    "VisionForge safeguards console accounts, telemetry, and visual datasets with rigorous governance and security controls.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-12 px-6 py-24 text-slate-100">
      <div className="space-y-4">
        <p className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
          Privacy
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Our commitment to responsible console and vision data governance
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          VisionForge builds trustworthy computer vision solutions by aligning technology decisions with rigorous data governance and human-centered safeguards.
        </p>
      </div>

      <section className="space-y-8 text-sm leading-7 text-slate-300">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Data collection & usage</h2>
          <p>
            We collect only the data required to deliver contracted services. Production imagery and console activity are encrypted in transit and at rest, with access limited to cleared personnel for debugging and continuous improvement.
          </p>
          <p>
            Anonymization features—such as face blurring and selective redaction—are enabled by default in every deployment. Data retained for model re-training is sampled to remove personally identifiable information unless explicitly authorized by clients.
          </p>
        </div>

        <div className="space-y-3" id="terms">
          <h2 className="text-xl font-semibold text-white">Security & compliance</h2>
          <p>
            We follow ISO 27001-aligned policies, conduct annual third-party penetration tests, and implement fine-grained access controls across infrastructure. When required, we support HIPAA, GDPR, and SOC 2 reporting through shared responsibility matrices.
          </p>
          <p>
            Clients receive detailed audit logs, regional data residency options, and configurable retention schedules to align with internal policies.
          </p>
        </div>

        <div className="space-y-3" id="access">
          <h2 className="text-xl font-semibold text-white">Your choices</h2>
          <p>
            You can request access, correction, or deletion of captured data at any time by contacting our support team. For joint development initiatives, we publish governance charters that codify data ownership and acceptable-use expectations.
          </p>
          <p id="support">
            Questions about privacy, ethics, or compliance can be directed to <a className="text-sky-300 underline underline-offset-4" href="mailto:privacy@visionforge.ai">privacy@visionforge.ai</a>.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">Last updated {new Date().toLocaleDateString()}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-600/70 px-5 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-300/70 hover:text-white"
        >
          Back to sign-in
        </Link>
      </div>
    </main>
  );
}
