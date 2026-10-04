import { LogInIcon } from "lucide-react";
import { useState, type ReactNode, type FormEvent } from "react";
import { Button } from "../../components/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../components/field";
import { Input } from "../../components/input";
import {
  AuthPageLayout,
  AuthVisualPanel,
  type AuthPageVariant,
} from "./auth-page-layout";

export type LoginPageProps = {
  brandName?: string;
  additionalFields?: ReactNode;
  busy?: boolean;
  description?: string;
  devLoginEnabled?: boolean;
  embedded?: boolean;
  error?: string;
  forgotHref?: string | null;
  identifierLabel?: string;
  identifierType?: "text" | "email";
  onSubmit(identifier: string, password: string): void;
  onDevLogin?: () => void;
  registerHref?: string | null;
  title?: string;
  variant?: AuthPageVariant;
};

export function LoginPage({
  brandName,
  additionalFields,
  busy = false,
  description,
  devLoginEnabled = false,
  embedded = false,
  error,
  forgotHref = "/password/forgot",
  identifierLabel = "Username or email",
  identifierType = "text",
  onSubmit,
  onDevLogin,
  registerHref = "/register",
  title,
  variant = "v1",
}: LoginPageProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    onSubmit(identifier, password);
  }

  return (
    <AuthPageLayout
      aside={
        <AuthVisualPanel
          description="Keep projects, people, and trusted application access in one connected workspace."
          title="One workspace. Every application."
        />
      }
      brandName={brandName}
      embedded={embedded}
      variant={variant}
    >
      <form className="grid gap-6" onSubmit={submit}>
        <header
          className={
            variant === "v2" ? "grid gap-1.5 text-center" : "grid gap-2"
          }
        >
          <h1 className="text-2xl font-semibold tracking-tight">
            {title ?? (variant === "v2" ? "Welcome back" : "Welcome")}
          </h1>
          <p className="text-sm leading-6 text-muted-foreground">
            {description ??
              (variant === "v2"
                ? "Sign in to continue to your CODEXSUN workspace."
                : "Use your admin username or email and password for this desk.")}
          </p>
        </header>
        {variant === "v1" ? <div className="border-t" /> : null}
        <FieldGroup>
          {additionalFields}
          <Field>
            <FieldLabel htmlFor={`login-${variant}-identifier`}>
              {identifierLabel}
            </FieldLabel>
            <Input
              autoComplete="username"
              className="h-11"
              id={`login-${variant}-identifier`}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder={variant === "v2" ? identifierLabel : undefined}
              required
              type={identifierType}
              value={identifier}
            />
          </Field>
          {devLoginEnabled && onDevLogin ? (
            <Button
              className="w-full"
              disabled={busy}
              onClick={onDevLogin}
              type="button"
              variant="outline"
            >
              Development sign in
            </Button>
          ) : null}
          <Field>
            <div className={variant === "v2" ? "flex items-center gap-4" : ""}>
              <FieldLabel htmlFor={`login-${variant}-password`}>
                Password
              </FieldLabel>
              {variant === "v2" && forgotHref ? (
                <a
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                  href={forgotHref}
                >
                  Forgot your password?
                </a>
              ) : null}
            </div>
            <Input
              autoComplete="current-password"
              className="h-11"
              id={`login-${variant}-password`}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </Field>
          {error ? (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}
          {variant === "v1" && forgotHref ? (
            <a
              className="text-center text-sm font-medium hover:underline"
              href={forgotHref}
            >
              Forgot password?
            </a>
          ) : null}
          <Field>
            <Button
              className="w-full"
              disabled={busy}
              type="submit"
              variant={variant === "v1" ? "success" : "default"}
            >
              {variant === "v1" ? <LogInIcon /> : null}
              {busy ? "Signing in..." : variant === "v2" ? "Login" : "Sign in"}
            </Button>
          </Field>
          {registerHref ? (
            <FieldDescription className="text-center">
              Don&apos;t have an account? <a href={registerHref}>Sign up</a>
            </FieldDescription>
          ) : null}
        </FieldGroup>
      </form>
    </AuthPageLayout>
  );
}
