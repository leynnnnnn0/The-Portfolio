function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function HighlightedText({ text, highlights }) {
  if (!highlights?.length) return text;

  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join('|')})`, 'gi');
  const highlightedValues = new Set(highlights.map((highlight) => highlight.toLowerCase()));

  return text.split(pattern).map((part, index) => (
    highlightedValues.has(part.toLowerCase()) ? (
      <mark key={`${part}-${index}`} className="bg-transparent font-semibold text-[#1f1f1f]">
        {part}
      </mark>
    ) : part
  ));
}

export default HighlightedText;
