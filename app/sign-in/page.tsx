"use client";

import { useState, type ChangeEvent, type FormEvent, type SVGProps } from "react";
import { useRouter } from "next/navigation";

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
import { signIn, TEST_CREDENTIALS } from "@/lib/mock-auth";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  email?: string;
  password?: string;
  form?: string;
};

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrors((previous) => ({ ...previous, email: undefined, form: undefined }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrors((previous) => ({ ...previous, password: undefined, form: undefined }));
  };

  const validate = (candidateEmail: string, candidatePassword: string): FieldErrors => {
    const validationErrors: FieldErrors = {};

    if (!candidateEmail) {
      validationErrors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(candidateEmail)) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!candidatePassword) {
      validationErrors.password = "Password is required.";
    }

    return validationErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const validationErrors = validate(trimmedEmail, trimmedPassword);

    if (validationErrors.email || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await signIn(trimmedEmail, trimmedPassword);
      router.push("/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to sign in. Please try again.";
      setErrors({ form: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailErrorId = errors.email ? "email-error" : undefined;
  const passwordErrorId = errors.password ? "password-error" : undefined;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form onSubmit={handleSubmit} className="w-[350px]" noValidate>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Use your email and password or the test credentials (
              <span className="font-medium">{TEST_CREDENTIALS.email}</span> /{" "}
              <span className="font-medium">{TEST_CREDENTIALS.password}</span>).
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full" type="button">
                <GithubIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full" type="button">
                <GoogleIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                Google
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                OR CONTINUE WITH
              </span>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="m@example.com"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={emailErrorId}
              />
              {errors.email ? (
                <p id={emailErrorId} className="text-sm text-red-500" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                aria-invalid={errors.password ? true : undefined}
                aria-describedby={passwordErrorId}
              />
              {errors.password ? (
                <p id={passwordErrorId} className="text-sm text-red-500" role="alert">
                  {errors.password}
                </p>
              ) : null}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            {errors.form ? (
              <p className="text-sm text-red-500" role="alert">
                {errors.form}
              </p>
            ) : null}
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true" {...props}>
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
