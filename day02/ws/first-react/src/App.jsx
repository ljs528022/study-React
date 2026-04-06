import './App.css'
import InfoCard from './InfoCard';

function App() {

  const cards = [
    {
      title: "Props in React",
      content: "Props pass data from one component to author",
      author: "Alice"
    },
    {
      title: "React Compositions",
      content: "Composition make your components more reuseable",
      author: "Charlie"
    },
    {
      title: "React Compositions",
      content: "Composition make your components more reuseable",
      author: "Charlie"
    },

  ];

  return (
    <>
      {
        cards.map(cardData => (
          <InfoCard key={cardData.idx} {...cardData} />
        ))
      }
    </>
  );
}

export default App
