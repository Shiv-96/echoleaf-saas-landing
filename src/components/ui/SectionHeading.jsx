/**
 * SectionHeading
 * Shared eyebrow, title and description block used at the top of sections.
 * The `id` goes on the h2 so the section can reference it with aria-labelledby.
 */
export default function SectionHeading({ id, eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-ink-muted">{description}</p>}
    </div>
  );
}
