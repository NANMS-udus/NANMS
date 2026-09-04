import About from './About';
import Executives from './Executives';
import Hero from './Hero';
import './Main.css';
import News from './News';

export default function Main() {
  return (
   <main className="container">
    <Hero />
    <About />
    <Executives />
    <News />
   </main>
  );
};