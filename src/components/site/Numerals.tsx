// Renders text with every number in IBM Plex Mono (tabular), words in the body font.
const NUMBER = /(\$?\d[\d,.:]*(?:%|x)?)/;

export default function Numerals({ text }: { text: string }) {
  return (
    <>
      {text.split(NUMBER).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-mono font-medium tabular-nums">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
