"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { HTMLAttributes, SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4-1.61-4-1.61a3.16 3.16 0 0 0-1.34-1.76c-1.1-.74.08-.72.08-.72a2.49 2.49 0 0 1 1.82 1.23 2.52 2.52 0 0 0 3.44 1 2.52 2.52 0 0 1 .76-1.59c-2.67-.31-5.47-1.34-5.47-5.93A4.63 4.63 0 0 1 5.14 8a4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.39 11.39 0 0 1 6 0C16.9 4.52 17.9 4.86 17.9 4.86A4.28 4.28 0 0 1 18 8a4.61 4.61 0 0 1 1.23 3.21c0 4.6-2.81 5.61-5.49 5.91a2.83 2.83 0 0 1 .81 2.2v3.26c0 .33.22.71.82.58A12 12 0 0 0 12 .5"
      />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.5 21.5v-7h2.4l.36-2.75h-2.76V9.25c0-.8.22-1.34 1.38-1.34h1.48V5.45A20 20 0 0 0 14.4 5c-2.1 0-3.55 1.27-3.55 3.6v2.01H8.5v2.75h2.35v7Z"
      />
    </svg>
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

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[150px]" />
        <div className="absolute bottom-[-14rem] left-[-10rem] h-[26rem] w-[26rem] rounded-full bg-sky-500/20 blur-[180px]" />
        <div className="absolute bottom-[-18rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-[220px]" />
      </div>

      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-lg font-semibold text-sky-300 shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
            VF
          </div>
          <div className="space-y-1 text-center">
            <p className="text-lg font-medium text-white">VisionForge Console</p>
            <p className="text-sm text-slate-400">
              Log in to orchestrate models, monitor edge nodes, and review alerts.
            </p>
          </div>
        </div>

        <section className="rounded-[30px] border border-slate-800/80 bg-slate-900/70 shadow-[0_40px_70px_-35px_rgba(8,47,73,0.85)] backdrop-blur-xl">
          <div className="space-y-8 px-8 py-10">
            <header className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-white">Sign in</h1>
              <p className="text-sm text-slate-400">
                Enter your email and password below to access your workspace.
              </p>
            </header>
            <LoginForm />
            <p className="text-xs text-slate-500">
              By continuing you agree to our {""}
              <Link
                href="/privacy"
                className="text-sky-300 transition-colors hover:text-sky-200"
              >
                Privacy Policy
              </Link>{" "}
              and {""}
              <Link
                href="/privacy#terms"
                className="text-sky-300 transition-colors hover:text-sky-200"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </section>

        <p className="text-center text-xs text-slate-500">
          Need an account? {""}
          <Link
            href="/privacy#access"
            className="text-sky-300 transition-colors hover:text-sky-200"
          >
            Request access from your administrator
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setNotice(null);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError("Please provide a valid email.");
      return;
    }

    if (!trimmedPassword) {
      setError("Please enter your password.");
      return;
    }

    if (trimmedPassword.length < 7) {
      setError("Password must be at least 7 characters long.");
      return;
    }

    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
      setPassword("");
      const handle = trimmedEmail.split("@")[0];
      setNotice(`Welcome back, ${handle}!`);
    }, 1400);
  };

  const handleSocialClick = (provider: string) => {
    setError(null);
    setNotice(`${provider} sign-in is coming soon.`);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="name@example.com"
          className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:cursor-not-allowed disabled:opacity-70"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-200" htmlFor="password">
            Password
          </label>
          <Link
            href="/privacy#support"
            className="text-xs font-medium text-slate-400 transition-colors hover:text-sky-200"
          >
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:cursor-not-allowed disabled:opacity-70"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isLoading}
        />
      </div>

      {error ? (
        <p className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm text-rose-200">
          {error}
        </p>
      ) : null}

      {notice ? (
        <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
          {notice}
        </p>
      ) : null}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_15px_35px_-20px_rgba(56,189,248,0.9)] transition hover:-translate-y-0.5 hover:bg-sky-300 disabled:translate-y-0 disabled:opacity-70"
        disabled={isLoading}
      >
        {isLoading ? <Spinner className="text-slate-900" /> : null}
        <span>Sign in</span>
      </button>

      <div className="relative text-center text-xs uppercase tracking-[0.2em] text-slate-500">
        <span className="relative bg-slate-900/70 px-4">Or continue with</span>
        <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-slate-700/60" aria-hidden />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleSocialClick("GitHub")}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500/80 hover:bg-slate-900/70 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isLoading}
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </button>
        <button
          type="button"
          onClick={() => handleSocialClick("Facebook")}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500/80 hover:bg-slate-900/70 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isLoading}
        >
          <FacebookIcon className="h-4 w-4" />
          Facebook
        </button>
      </div>
    </form>
  );
}
