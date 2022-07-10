import styled from 'styled-components';

const quotes = [
  "Patience is not sitting and waiting, it is foreseeing. It is looking at the thorn and seeing the rose, looking at the night and seeing the day. Lovers are patient and know that the moon needs time to become full. - Rumi",
  "Life is really simple but we insists on making it complicated - Confucius",
  "Our way is fittered away by detail. Simplify, simplify. - Henry David Thoreau", 
  "Trees that are slow to grow bear the best fruit - Moliere",
  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path - Buddha",
  "A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise - Buddha",
  "The wound is the place where the Light enters you. - Rumi",
  "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. - Rumi",
  "When you do things from your soul, you feel a river moving in you, a joy. - Rumi",
  "Raise your words, not voice. It is rain that grows flowers, not thunder. - Rumi"
];

function Home() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <QuoteText>{ quote }</QuoteText>
  );
}

export default Home;

const QuoteText = styled.p`
  font-weight: 700;
`