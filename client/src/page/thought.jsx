// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import './thought.css';

export default function Thought() {
  const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Your time is limited, don't waste it living someone else's life.",
    "Don't watch the clock; do what it does. Keep going.",
    "Everyone thinks of changing the world, but no one thinks of changing himself." + " – Leo Tolstoy",
    "If we cannot love the person whom we see, then how come we love God whom we cannot see." + " – Mother Teresa",
    "In a day when you don't come across any problems, you can be sure that you are traveling in a wrong path." + " – Swami Vivekananda",
    "Never tell your problems to anyone…20% don’t care and the other 80% are glad you have them.",
    "Never explain yourself. Your friends don't need it and your enemies won't believe it." + " – Lou Holl",
    "Forgive your enemies, but never, never forget their names." + " – Belgicia Howell",
    "You must experience and accept the extremes. Because if the contrast is lost, you lose appreciation, and when you lose appreciation, you lose the value of everything." + " – John F. Kennedy",
    "The true measure of a man is how he treats someone who can do him absolutely no good." + " – Ann Landers",
    "Being sad with the right people is better than being happy with the wrong ones." + " – Philippos",
    "Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too." + " – Will Smith",
    "If your problem has a solution then…why worry about it? If your problem doesn't have solution then…why worry about it?" + " – Chinese Proverb",
    "The ultimate measure of man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy." + " – Dr. Martin Luther King Jr.",
    "Pain never really goes away; you just elevate and get used to it by growing stronger." + " – Philippos",
    "Sometimes the people who hurt us the most are people who were hurt more than us." + " – Philippos",
    "Our tears are what happens when it rains deep inside our hearts and we cannot hold the rain any longer." + " – Philippos",
    "Reputation is what men and women think of us; character is what God and angels know of us." + " – Thomas Paine",
    "The things that made me stronger are the ones that didn’t let me sleep at first." + " – Anonymous",
    "Leadership…the ability to see what no one else sees, to listen when others talk and the ability to be optimistic when others are pessimistic." + " – George W. Cummings",
    "God makes stars. I just produce them." + " – Samuel Goldwyn",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle." + " – Albert Einstein",
    "Ask yourself whether you are happy, and you cease to be so." + " – John Stuart Mill",
    "When all is said the greatest action is to limit and isolate one's self." + " – Johann Wolfgang von Goethe",
    "God not only plays dice. He also sometimes throws the dice where they cannot be seen." + " – Stephen Hawking",
    "Beware of rashness, but with energy, and sleepless vigilance, go forward and give us victories." + " – Abraham Lincoln"
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [bgColor, setBgColor] = useState('');
  const [fade, setFade] = useState(true);

  // Update quote every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out the current quote
      setFade(false);
      
      // Wait for fade-out animation before changing the quote
      setTimeout(() => {
        const nextIndex = (quoteIndex + 1) % quotes.length;
        setQuoteIndex(nextIndex);
        const randomBgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomBgColor);
        
        // Fade in the new quote
        setFade(true);
      }, 500); // 500ms to wait for the fade-out
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [quoteIndex]);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: bgColor,
        borderRadius: '10px',
        transition: 'background-color 0.5s ease',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontStyle: 'italic',
          fontSize: '18px',
          color: '#2c3e50',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      >
        {quotes[quoteIndex]}
      </p>
    </div>
  );
}