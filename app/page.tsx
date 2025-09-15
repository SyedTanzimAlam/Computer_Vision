"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import type { ChangeEvent, FormEvent, HTMLAttributes } from "react";

import { Button } from "@/components/ui/button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

type FormFields = {
  email: string;
  password: string;
  remember: boolean;
};

type StatusMessage = {
  tone: "error" | "success";
  text: string;
};

type SocialProvider = "Google" | "X" | "Facebook" | "GitHub";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-[0_60px_140px_-80px_rgba(15,23,42,0.85)] md:grid-cols-[1.05fr_1fr]">
        <ShowcasePanel />
        <LoginPanel />
      </div>
    </main>
  );
}

function ShowcasePanel() {
  const highlights = [
    {
      title: "Unified oversight",
      description: "Track inference health, alerts, and deployments from a single command center.",
    },
    {
      title: "Edge governance",
      description: "Automate policy enforcement, redaction, and retention workflows for every feed.",
    },
    {
      title: "Faster iteration",
      description: "Promote new computer vision models with staged rollouts and streaming evaluations.",
    },
  ];

  return (
    <aside className="relative hidden overflow-hidden border-r border-white/10 bg-slate-950 p-12 text-slate-100 md:flex md:flex-col">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4),_transparent_65%)] blur-2xl" />
        <div className="absolute right-[-18rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.35),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.72)_45%,rgba(15,23,42,0.95)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between gap-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
            VisionForge Console
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Orchestrate every vision pipeline with confidence
          </h1>
          <p className="max-w-md text-base text-slate-300">
            Sign in to monitor live inference, triage edge incidents, and align stakeholders around responsible AI delivery.
          </p>
        </div>

        <ul className="space-y-5">
          {highlights.map((item) => (
            <li key={item.title} className="space-y-1.5">
              <p className="text-base font-medium text-white">{item.title}</p>
              <p className="text-sm text-slate-300">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="text-sm text-slate-400">
          Need an account?{" "}
          <Link href="mailto:partnerships@visionforge.ai" className="font-semibold text-sky-300 transition hover:text-sky-200">
            Request workspace access
          </Link>
          .
        </div>
      </div>
    </aside>
  );
}

function LoginPanel() {
  return (
    <section className="relative bg-white px-8 py-12 text-slate-900 sm:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl"
      />
      <div className="relative mx-auto flex w-full max-w-md flex-col gap-10">
        <header className="space-y-6">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/25">
              VF
            </span>
            VisionForge Console
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome back</h2>
            <p className="text-sm text-slate-500">
              Use your VisionForge credentials or approved SSO provider to continue orchestrating your deployments.
            </p>
          </div>
        </header>

        <LoginForm />

        <p className="text-center text-xs text-slate-500">
          By continuing you agree to the VisionForge{" "}
          <Link href="/privacy" className="font-medium text-slate-700 underline underline-offset-4">
            Privacy Policy
          </Link>{" "}
          and data governance guidelines.
        </p>
      </div>
    </section>
  );
}

function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const rememberId = useId();
  const [fields, setFields] = useState<FormFields>({
    email: "",
    password: "",
    remember: true,
  });
  const [status, setStatus] = useState<StatusMessage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (key: "email" | "password") => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFields((previous) => ({ ...previous, [key]: value }));
  };

  const handleRememberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFields((previous) => ({ ...previous, remember: event.target.checked }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const email = fields.email.trim();
    const password = fields.password;

    if (!email) {
      setStatus({
        tone: "error",
        text: "Enter the email address associated with your VisionForge workspace.",
      });
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus({ tone: "error", text: "Please provide a valid company email address." });
      return;
    }

    if (!password) {
      setStatus({ tone: "error", text: "Enter your password to continue." });
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setStatus({ tone: "error", text: `Passwords must be at least ${MIN_PASSWORD_LENGTH} characters.` });
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        tone: "success",
        text: "Authentication successful. Redirecting to your workspace...",
      });
    }, 1100);
  };

  const handleSocialSelect = (provider: SocialProvider) => {
    setStatus({
      tone: "success",
      text: `${provider} SSO is being provisioned. Contact your VisionForge admin to enable immediate access.`,
    });
  };

  return (
    <form className="space-y-7" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2 text-left">
        <label className="text-sm font-medium text-slate-700" htmlFor={emailId}>
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@visionforge.ai"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-70"
          value={fields.email}
          onChange={updateField("email")}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2 text-left">
        <label className="text-sm font-medium text-slate-700" htmlFor={passwordId}>
          Password
        </label>
        <input
          id={passwordId}
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-70"
          value={fields.password}
          onChange={updateField("password")}
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600">
        <label className="inline-flex items-center gap-2" htmlFor={rememberId}>
          <input
            id={rememberId}
            type="checkbox"
            className="h-4 w-4 rounded border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
            checked={fields.remember}
            onChange={handleRememberChange}
            disabled={isSubmitting}
          />
          Remember this device
        </label>
        <Link href="/privacy#support" className="font-medium text-slate-700 underline underline-offset-4">
          Forgot password?
        </Link>
      </div>

      {status ? (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-lg border px-4 py-3 text-sm ${
            status.tone === "error"
              ? "border-rose-200 bg-rose-50 text-rose-600"
              : "border-emerald-200 bg-emerald-50 text-emerald-600"
          }`}
        >
          {status.text}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Spinner className="mr-2 text-white" /> : null}
        {isSubmitting ? "Signing in" : "Sign in"}
      </Button>

      <div className="relative text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-slate-200" aria-hidden />
        <span className="relative bg-white px-4">Single sign-on</span>
      </div>

      <ButtonSocialIcons disabled={isSubmitting} onSelect={handleSocialSelect} />
    </form>
  );
}

interface ButtonSocialIconsProps {
  disabled?: boolean;
  onSelect: (provider: SocialProvider) => void;
}

function ButtonSocialIcons({ disabled, onSelect }: ButtonSocialIconsProps) {
  const providers: Array<{ name: SocialProvider; alt: string; src: string; invert?: boolean }> = [
    {
      name: "Google",
      alt: "Google Icon",
      src: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto",
    },
    {
      name: "X",
      alt: "X Icon",
      src: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png?width=20&height=20&format=auto",
      invert: true,
    },
    {
      name: "Facebook",
      alt: "Facebook Icon",
      src: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png?width=20&height=20&format=auto",
    },
    {
      name: "GitHub",
      alt: "GitHub Icon",
      src: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto",
      invert: true,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {providers.map((provider) => (
        <Button
          key={provider.name}
          variant="outline"
          size="icon"
          onClick={() => onSelect(provider.name)}
          disabled={disabled}
          aria-label={`Continue with ${provider.name}`}
        >
          <Image
            src={provider.src}
            alt={provider.alt}
            width={20}
            height={20}
            sizes="20px"
            className={`size-5 ${provider.invert ? "dark:invert" : ""}`}
          />
        </Button>
      ))}
    </div>
  );
}

function Spinner({ className = "", ...rest }: HTMLAttributes<HTMLSpanElement>) {
  const classes = [
    "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span aria-hidden="true" {...rest} className={classes} />;
}
