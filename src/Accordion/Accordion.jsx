import { useState } from 'react';
import styles from './Accordion.module.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

function Accordion() {
  return (
    <div className={styles.accordion}>
      {faqs.map((el, i) => (
        <AccordionItem key={el.title} title={el.title} text={el.text} num={i + 1} />
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className={styles.number}>{num < 10 ? `0${num}` : num}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? '-' : '='}</p>
      {isOpen && <div className={styles['content-box']}>{text}</div>}
    </div>
  );
}

export default Accordion;
