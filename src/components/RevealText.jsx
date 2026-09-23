export default function RevealText({ text, as: Tag = 'div', className = '' }) {
  return (
    <Tag className={`word-reveal ${className}`}>
      {text.split(' ').map((word, index) => (
        <span className="word-mask" key={`${word}-${index}`}>
          <span className="word-inner" style={{ '--word-index': index }}>
            {word}&nbsp;
          </span>
        </span>
      ))}
    </Tag>
  );
}
