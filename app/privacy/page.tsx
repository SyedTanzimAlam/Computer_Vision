import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | VisionForge Console",
  description:
    "VisionForge safeguards console accounts, telemetry, and visual datasets with rigorous governance and security controls.",
};

export default function PrivacyPage() {
  return (

    <main className="mx-auto max-w-4xl px-6 py-24 text-slate-900">
      <article className="space-y-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.35)]">
        <header className="space-y-4">
          <p className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Privacy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Our commitment to responsible console and vision data governance
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            VisionForge builds trustworthy computer vision solutions by aligning technology decisions with rigorous data governance and human-centered safeguards.
          </p>
        </header>

        <section className="space-y-8 text-sm leading-7 text-slate-600">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Data collection &amp; usage</h2>
            <p>
              We collect only the data required to deliver contracted services. Production imagery and console activity are encrypted in transit and at rest, with access limited to cleared personnel for debugging and continuous improvement.
            </p>
            <p>
              Anonymization features—such as face blurring and selective redaction—are enabled by default in every deployment. Data retained for model re-training is sampled to remove personally identifiable information unless explicitly authorized by clients.
            </p>
          </div>

          <div className="space-y-3" id="terms">
            <h2 className="text-xl font-semibold text-slate-900">Security &amp; compliance</h2>
            <p>
              We follow ISO 27001-aligned policies, conduct annual third-party penetration tests, and implement fine-grained access controls across infrastructure. When required, we support HIPAA, GDPR, and SOC 2 reporting through shared responsibility matrices.
            </p>
            <p>
              Clients receive detailed audit logs, regional data residency options, and configurable retention schedules to align with internal policies.
            </p>
          </div>

          <div className="space-y-3" id="access">
            <h2 className="text-xl font-semibold text-slate-900">Your choices</h2>
            <p>
              You can request access, correction, or deletion of captured data at any time by contacting our support team. For joint development initiatives, we publish governance charters that codify data ownership and acceptable-use expectations.
            </p>
            <p id="support">
              Questions about privacy, ethics, or compliance can be directed to <a className="font-medium text-slate-700 underline underline-offset-4" href="mailto:privacy@visionforge.ai">privacy@visionforge.ai</a>.
            </p>
          </div>
        </section>

        <footer className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Last updated {new Date().toLocaleDateString()}</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Back to create account
          </Link>
        </footer>
      </article>

    </main>
  );
}
