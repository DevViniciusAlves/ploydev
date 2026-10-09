import BlurReveal from './BlurReveal.jsx';

export default function RevealText({ text, as: Tag = 'div', className = '', delay = 0, speedReveal = 1.5 }) {
  return (
    <BlurReveal as={Tag} className={className} delay={delay} speedReveal={speedReveal}>
      {text}
    </BlurReveal>
  );
}
