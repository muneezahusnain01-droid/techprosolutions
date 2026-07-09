import { useState } from 'react'
import { services } from '../../data/site'

const empty = { name: '', email: '', company: '', service: '', budget: '', message: '' }

const budgets = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k+']

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please tell us your name.'
  if (!v.email.trim()) e.email = 'We need an email to reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'That email looks off.'
  if (!v.message.trim()) e.message = 'A short note helps us prepare.'
  else if (v.message.trim().length < 10) e.message = 'A little more detail, please.'
  return e
}

const fieldBase =
  'w-full rounded-xl border bg-surface px-4 py-3 text-text placeholder:text-muted/70 outline-none transition-colors focus:border-brand'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('')
  const submitted = status === 'success'

  const update = (k) => (ev) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    if (Object.keys(e).length > 0) return

    // honeypot: bots fill hidden fields — silently drop if present
    if (ev.target.botcheck && ev.target.botcheck.value) return

    if (!ACCESS_KEY || ACCESS_KEY === 'your-access-key-here') {
      setStatus('error')
      setSubmitError(
        'The form isn’t connected yet. Add your Web3Forms access key to the .env file.'
      )
      return
    }

    setStatus('submitting')
    setSubmitError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${values.name} — TechProSolutions`,
          from_name: 'TechProSolutions Website',
          name: values.name,
          email: values.email,
          company: values.company || '—',
          service: values.service || '—',
          budget: values.budget || '—',
          message: values.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setSubmitError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setSubmitError('Network error — please check your connection and try again.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center">
        <span className="grid mx-auto h-14 w-14 place-items-center rounded-full bg-brand/15 text-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            <path d="m5 12 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thanks, {values.name.split(' ')[0]}!</h3>
        <p className="mx-auto mt-3 max-w-sm text-muted">
          Your message is ready to go. We'll be in touch within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty)
            setStatus('idle')
          }}
          className="mt-6 text-sm uppercase tracking-[0.1em] text-brand underline-offset-4 hover:underline"
        >
          Send another →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {/* honeypot — hidden from humans, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={update('name')}
            placeholder="Your name"
            className={`${fieldBase} ${errors.name ? 'border-red-500/70' : 'border-border'}`}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={update('email')}
            placeholder="Your email"
            className={`${fieldBase} ${errors.email ? 'border-red-500/70' : 'border-border'}`}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" optional>
          <input
            type="text"
            value={values.company}
            onChange={update('company')}
            placeholder="Company Inc."
            className={`${fieldBase} border-border`}
          />
        </Field>
        <Field label="Service" optional>
          <select
            value={values.service}
            onChange={update('service')}
            className={`${fieldBase} border-border ${values.service ? 'text-text' : 'text-muted/70'}`}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field label="Budget" optional>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setValues((v) => ({ ...v, budget: v.budget === b ? '' : b }))}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                values.budget === b
                  ? 'border-brand bg-brand/10 text-text'
                  : 'border-border text-muted hover:border-brand/50'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Project details" error={errors.message}>
        <textarea
          rows={5}
          value={values.message}
          onChange={update('message')}
          placeholder="Tell us what you're building, your goals, and any timelines…"
          className={`${fieldBase} resize-y ${errors.message ? 'border-red-500/70' : 'border-border'}`}
        />
      </Field>

      {status === 'error' && submitError && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            Sending
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          </>
        ) : (
          <>
            Send message
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </>
        )}
      </button>
    </form>
  )
}

function Field({ label, optional, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium">
        {label}
        {optional && <span className="text-xs font-normal text-muted">(optional)</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-500">{error}</span>}
    </label>
  )
}
