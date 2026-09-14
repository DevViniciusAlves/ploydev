export default function RevealText({ text, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`word-reveal ${className}`}>
      {text.split(' ').map((word, index) => (
        <span className="word-mask" key={`${word}-${index}`}>
          <span style={{ '--word-index': index }}>{word}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}
