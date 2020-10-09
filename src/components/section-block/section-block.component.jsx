import React from 'react';
import './section-block.styles.css';

const SectionBlock = ({id, text, color}) => {
  return(
    <section id={id} style={color}>
      <h1>{text}</h1>
    </section>
  );
}

export default SectionBlock;