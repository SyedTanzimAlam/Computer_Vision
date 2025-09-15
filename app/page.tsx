
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

      <div className="grid grid-cols-2 gap-3">
        <SocialButton
          icon={GithubIcon}
          label="GitHub"
          onClick={() => handleSocialClick("GitHub")}
          disabled={isSubmitting}
        />
        <SocialButton
          icon={FacebookIcon}
          label="Facebook"
          onClick={() => handleSocialClick("Facebook")}
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
      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={disabled}
    >
      <Icon className="h-4 w-4" />
      {label}
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

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4-1.61-4-1.61a3.16 3.16 0 0 0-1.34-1.76c-1.1-.74.08-.72.08-.72a2.49 2.49 0 0 1 1.82 1.23 2.52 2.52 0 0 0 3.44 1 2.52 2.52 0 0 1 .76-1.59c-2.67-.31-5.47-1.34-5.47-5.93A4.63 4.63 0 0 1 5.14 8a4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.39 11.39 0 0 1 6 0C16.9 4.52 17.9 4.86 17.9 4.86A4.28 4.28 0 0 1 18 8a4.61 4.61 0 0 1 1.23 3.21c0 4.6-2.81 5.61-5.49 5.91a2.83 2.83 0 0 1 .81 2.2v3.26c0 .33.22.71.82.58A12 12 0 0 0 12 .5"
      />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M13.5 21.5v-7h2.4l.36-2.75h-2.76V9.25c0-.8.22-1.34 1.38-1.34h1.48V5.45A20 20 0 0 0 14.4 5c-2.1 0-3.55 1.27-3.55 3.6v2.01H8.5v2.75h2.35v7Z"
      />
    </svg>

  );
}
