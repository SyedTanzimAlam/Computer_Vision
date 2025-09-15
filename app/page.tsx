
"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import type { ChangeEvent, HTMLAttributes, SVGProps } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

interface FormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

interface StatusMessage {
  tone: "error" | "success";
  text: string;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <BrandHeader />
        <CreateAccountCard />
      </div>
    </main>
  );
}

function BrandHeader() {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-sm">
        VF
      </span>
      <span>VisionForge Console</span>
    </div>
  );
}

function CreateAccountCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.45)]">
      <div className="space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Create an account</h1>
          <p className="text-sm text-slate-500">
            Enter your email and password to get started. Already have an account?{" "}
            <Link href="/" className="font-medium text-slate-900 underline underline-offset-4">
              Sign in
            </Link>
            .
          </p>
        </header>

        <CreateAccountForm />

        <p className="text-center text-xs text-slate-400">
          By creating an account, you agree to our{" "}
          <Link href="/privacy#terms" className="font-medium text-slate-600 underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium text-slate-600 underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function CreateAccountForm() {
  const emailId = useId();
  const passwordId = useId();
  const confirmId = useId();
  const [fields, setFields] = useState<FormFields>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState<StatusMessage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (key: keyof FormFields) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFields((previous) => ({ ...previous, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const email = fields.email.trim();
    const password = fields.password;
    const confirmPassword = fields.confirmPassword;

    if (!email) {
      setStatus({ tone: "error", text: "Please enter your email address." });
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus({ tone: "error", text: "Please provide a valid email." });
      return;
    }

    if (!password) {
      setStatus({ tone: "error", text: "Please create a password." });
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setStatus({
        tone: "error",
        text: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`,
      });
      return;
    }

    if (!confirmPassword) {
      setStatus({ tone: "error", text: "Please confirm your password." });
      return;
    }

    if (password !== confirmPassword) {
      setStatus({ tone: "error", text: "Passwords do not match." });
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFields({ email, password: "", confirmPassword: "" });
      setStatus({
        tone: "success",
        text: "Account created! Check your inbox to confirm access.",
      });
    }, 1200);
  };

  const handleSocialClick = (provider: string) => {
    setStatus({ tone: "success", text: `${provider} sign-in is coming soon.` });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2 text-left">
        <label className="text-sm font-medium text-slate-700" htmlFor={emailId}>
          Email
        </label>
        <input
          id={emailId}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="name@example.com"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:opacity-60"
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
          autoComplete="new-password"
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:opacity-60"
          value={fields.password}
          onChange={updateField("password")}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2 text-left">
        <label className="text-sm font-medium text-slate-700" htmlFor={confirmId}>
          Confirm Password
        </label>
        <input
          id={confirmId}
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:opacity-60"
          value={fields.confirmPassword}
          onChange={updateField("confirmPassword")}
          disabled={isSubmitting}
        />
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

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : null}
        <span>Create Account</span>
      </button>

      <div className="relative text-center">
        <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-slate-200" aria-hidden />
        <span className="relative bg-white px-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Or continue with
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <SocialButton
          icon={GoogleIcon}
          label="Google"
          onClick={() => handleSocialClick("Google")}
          disabled={isSubmitting}
        />
        <SocialButton
          icon={XIcon}
          label="X (Twitter)"
          onClick={() => handleSocialClick("X (Twitter)")}
          disabled={isSubmitting}
        />
        <SocialButton
          icon={FacebookIcon}
          label="Facebook"
          onClick={() => handleSocialClick("Facebook")}
          disabled={isSubmitting}
        />
        <SocialButton
          icon={GithubIcon}
          label="GitHub"
          onClick={() => handleSocialClick("GitHub")}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}

interface SocialButtonProps {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
  onClick: () => void;
  disabled: boolean;
}

function SocialButton({ icon: Icon, label, onClick, disabled }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={disabled}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </button>
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

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.21-2.27H12v4.59h6.48a5.52 5.52 0 0 1-2.41 3.64v3.02h3.89c2.27-2.09 3.53-5.17 3.53-9.25Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.97-1.07 7.96-2.93l-3.89-3.02c-1.08.72-2.47 1.14-4.07 1.14-3.13 0-5.78-2.11-6.72-4.96H1.26v3.12A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.23a7.18 7.18 0 0 1 0-4.46V6.65H1.26a12 12 0 0 0 0 10.7l4.02-3.12Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.61 4.58 1.81l3.43-3.43C17.96 1.19 15.24 0 12 0 7.32 0 3.26 2.69 1.26 6.65l4.02 3.12C6.22 7.08 8.87 4.77 12 4.77Z"
      />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M19.5 0h4.5L14.25 11.137 24 24h-7.5l-5.205-7.508L5.452 24H0L10.125 12.443 0 0h7.5l4.657 6.717L19.5 0Z"
      />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="#1877F2"
        d="M13.5 21.5v-7h2.4l.36-2.75h-2.76V9.25c0-.8.22-1.34 1.38-1.34h1.48V5.45A20 20 0 0 0 14.4 5c-2.1 0-3.55 1.27-3.55 3.6v2.01H8.5v2.75h2.35v7Z"
      />
    </svg>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 .297a12 12 0 0 0-3.793 23.4c.6.11.82-.26.82-.58v-2.06c-3.338.73-4.04-1.61-4.04-1.61-.546-1.38-1.333-1.75-1.333-1.75-1.089-.74.082-.724.082-.724 1.205.086 1.84 1.24 1.84 1.24 1.07 1.85 2.807 1.32 3.492 1.01.108-.79.418-1.32.762-1.62-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.17 0 0 1.008-.32 3.305 1.23a11.5 11.5 0 0 1 6.01 0c2.296-1.55 3.302-1.23 3.302-1.23.655 1.65.243 2.87.119 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.93.43.37.814 1.1.814 2.22v3.29c0 .32.218.7.825.58A12 12 0 0 0 12 .297Z"
      />
    </svg>
  );
}
