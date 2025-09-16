"use client";

import { FormEvent, useId, useState } from "react";
import type { ChangeEvent, SVGProps } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const SOCIAL_PROVIDERS = [
  { label: "GitHub", icon: GithubIcon },
  { label: "Google", icon: GoogleIcon },
];

export default function SignInScreen() {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("demo@visionforge.ai");
  const [password, setPassword] = useState("demo1234");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const trimmedEmail = email.trim();
      setEmail(trimmedEmail);

      const result = await signIn({ email: trimmedEmail, password });

      if (result.success) {
        setEmail(result.email ?? trimmedEmail);
        setPassword("");

        toast({
          title: "Signed in",
          description: "Redirecting to your dashboard…",
          variant: "success",
        });
      } else {
        toast({
          title: "Invalid credentials",
          description: result.error ?? "Double-check your email and password.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Unable to sign in",
        description: "Something went wrong. Please try again shortly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (provider: string) => {
    toast({
      title: `${provider} sign-in coming soon`,
      description: "We’re finishing the integration. Please use email for now.",
    });
  };

  const updateField = (setter: (value: string) => void) =>
    (event: ChangeEvent<HTMLInputElement>) => setter(event.target.value);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access the VisionForge Console.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            {SOCIAL_PROVIDERS.map((provider) => (
              <Button
                key={provider.label}
                variant="outline"
                className="w-full"
                type="button"
                onClick={() => handleSocialClick(provider.label)}
              >
                <provider.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                {provider.label}
              </Button>
            ))}
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              OR CONTINUE WITH
            </span>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-2">
              <Label htmlFor={emailId}>Email</Label>
              <Input
                id={emailId}
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="m@example.com"
                value={email}
                onChange={updateField(setEmail)}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor={passwordId}>Password</Label>
              <Input
                id={passwordId}
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={updateField(setPassword)}
                disabled={isSubmitting}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in…" : "Sign in"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="w-full text-center text-xs text-slate-500">
            Use <span className="font-semibold text-slate-700">demo@visionforge.ai</span> with
            <span className="font-semibold text-slate-700"> demo1234</span> to explore the experience.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

type SignInResult =
  | { success: true; email?: string }
  | { success: false; error?: string };

async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<SignInResult> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail || !password) {
    return {
      success: false,
      error: "Enter both your email and password to continue.",
    };
  }

  if (normalizedEmail === "demo@visionforge.ai" && password === "demo1234") {
    return { success: true, email: normalizedEmail };
  }

  return {
    success: false,
    error: "Invalid credentials. Try demo@visionforge.ai with password demo1234.",
  };
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.6.07-.6a2.09 2.09 0 0 1 1.52 1.02 2.12 2.12 0 0 0 2.89.83 2.12 2.12 0 0 1 .63-1.33c-2.22-.25-4.56-1.11-4.56-4.95a3.88 3.88 0 0 1 1-2.68 3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.52 9.52 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02a3.6 3.6 0 0 1 .1 2.64 3.88 3.88 0 0 1 1 2.68c0 3.85-2.34 4.69-4.58 4.94a2.38 2.38 0 0 1 .68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
      <path
        d="M21.6 12.23c0-.74-.07-1.45-.2-2.13H12v4.03h5.4a4.62 4.62 0 0 1-2 3.04v2.54h3.24c1.9-1.75 2.96-4.32 2.96-7.48Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.97-.9 6.63-2.46l-3.24-2.54c-.9.6-2.06.95-3.39.95-2.61 0-4.81-1.76-5.6-4.13H3.04v2.6A9.99 9.99 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.4 13.82a5.99 5.99 0 0 1 0-3.64V7.58H3.04a10 10 0 0 0 0 8.84L6.4 13.82Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.38c1.47 0 2.79.5 3.82 1.48l2.86-2.86C16.97 3.45 14.7 2.5 12 2.5a9.99 9.99 0 0 0-8.96 5.08l3.36 2.6C7.18 8.14 9.38 6.38 12 6.38Z"
        fill="#EA4335"
      />
    </svg>
  );
}
