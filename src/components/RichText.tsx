/**
 * Renders the tiny slice of markup the test content actually uses:
 * `<u>underline</u>`, `**bold**`, and `*italic*`.
 *
 * The SAT questions depend on underlining (several ask about "the underlined
 * portion") and on italicized titles, so dropping the markup would change what
 * the question means. A full markdown renderer is far more dependency than
 * three inline forms justify, and `dangerouslySetInnerHTML` is the wrong tool
 * even for content we author — this parses to React nodes instead, so nothing
 * in a question string can ever become live HTML.
 *
 * Newlines are preserved by the caller via `whitespace-pre-line`.
 */

// Bold must precede italic in the alternation, or `**x**` matches as italic.
const TOKEN = /(<u>[\s\S]*?<\/u>|\*\*[^*]+\*\*|\*[^*\n]+\*)/g

export default function RichText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const parts = text.split(TOKEN).filter((part) => part !== '')

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('<u>') && part.endsWith('</u>')) {
          return (
            <u key={index} className="underline underline-offset-4">
              {part.slice(3, -4)}
            </u>
          )
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          )
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>
        }
        return <span key={index}>{part}</span>
      })}
    </span>
  )
}
