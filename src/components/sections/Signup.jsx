/**
 * Signup
 * Early-access form submitted to Netlify Forms with fetch (no page reload).
 *
 * Netlify only detects forms in static HTML, so index.html contains a hidden copy
 * with the same name ("early-access") and fields ("email", "bot-field").
 * "bot-field" is a honeypot: humans never see it, and Netlify discards submissions that fill it.
 */
import { useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';

const FORM_NAME = 'early-access';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateEmail(value) {
  const email = value.trim();
  if (!email) return 'Please enter your email address.';
  if (!EMAIL_PATTERN.test(email)) return 'Please enter a valid email address, like name@company.com.';
  return '';
}

export default function Signup() {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | failed
  const inputRef = useRef(null);
  const successRef = useRef(null);

  /* Move focus to the confirmation so keyboard and screen reader users notice it. */
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event) {
    event.preventDefault();

    const message = validateEmail(email);
    setError(message);
    if (message) {
      inputRef.current?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': FORM_NAME,
          email: email.trim(),
          'bot-field': botField,
        }).toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      setStatus('success');
    } catch {
      setStatus('failed');
    }
  }

  return (
    <section id="signup" aria-labelledby="signup-title" className="section-pad pt-0">
      <div className="container-page">
        <Reveal className="card grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Early access</p>
            <h2 id="signup-title" className="mt-3 text-3xl font-bold tracking-tight">
              Start your free trial
            </h2>
            <p className="mt-4 text-ink-muted">
              Join the early-access list and we'll send your 14-day trial invite, plus one short product update a
              month. No spam, unsubscribe anytime.
            </p>
          </div>

          {status === 'success' ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              className="flex items-start gap-3 rounded-control border border-line bg-canvas p-6 outline-none"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                <Icon name="check" className="size-5" />
              </span>
              <div>
                <p className="font-semibold">You're on the list!</p>
                <p className="mt-1 text-sm text-ink-muted">
                  We'll send your trial invite to <span className="font-medium text-ink">{email.trim()}</span> soon.
                </p>
              </div>
            </div>
          ) : (
            <form name={FORM_NAME} onSubmit={handleSubmit} noValidate>
              <label htmlFor="signup-email" className="block text-sm font-medium">
                Work email
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  ref={inputRef}
                  id="signup-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError('');
                  }}
                  aria-invalid={error ? 'true' : undefined}
                  aria-describedby={error ? 'signup-email-error' : 'signup-email-hint'}
                  className={`min-w-0 flex-1 rounded-control border bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted ${
                    error ? 'border-danger' : 'border-control-off'
                  }`}
                />
                <button type="submit" disabled={status === 'submitting'} className="btn btn-primary px-6">
                  {status === 'submitting' ? 'Sending…' : 'Get early access'}
                </button>
              </div>

              {error ? (
                <p id="signup-email-error" role="alert" className="mt-2 text-sm text-danger">
                  {error}
                </p>
              ) : (
                <p id="signup-email-hint" className="mt-2 text-sm text-ink-muted">
                  We only use your email to send your invite and product updates.
                </p>
              )}

              {status === 'failed' && (
                <p role="alert" className="mt-3 text-sm text-danger">
                  Something went wrong while sending the form. Please try again in a moment.
                </p>
              )}

              {/* Honeypot field: hidden from people, tempting for bots. */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(event) => setBotField(event.target.value)}
                  />
                </label>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
