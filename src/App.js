import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ArticlesBlock } from "./widgets/Articles";
import { Cooperation } from "./widgets/Cooperation";
import { CounterBlock } from "./widgets/CounterBlock";
import { FaqBlock } from "./widgets/FAQ";
import { FeaturesBlock } from "./widgets/Features";
import { Footer } from "./widgets/Footer";
import { Header } from "./widgets/Header";
import { IntroBlock } from "./widgets/Intro";
import { PortfolioBlock } from "./widgets/Portfolio";
import { SliderBlock } from "./widgets/Slider";
import { TestimonialsBlock } from "./widgets/Testimonials";

import s from './styles/landing.module.sass';


function App() {

  const introRef = useRef(null)
  const sliderRef = useRef(null)
  const isScrolling = useRef(false)
  const { ref, inView } = useInView({ threshold: 0 })

  useEffect(() => {
    document.title = 'Xest Folio | Miami Walker'
    ref(introRef.current)
  }, [ref])

  useEffect(() => {

    const handleScroll = e => {
      if(e.deltaY > 0 && inView) sliderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if(e.deltaY < 0 && inView) {
        isScrolling.current = true
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } 

      setTimeout(() => {
        isScrolling.current = false
      }, 1000)
    }

    window.addEventListener('wheel', handleScroll)
    return () => window.removeEventListener("wheel", handleScroll)
  },[inView])

  return (
    <div className="App">
      <div className={s.page}>
        <Header />
        <div className={s.content}>
          <div ref={introRef}>
            <IntroBlock />
          </div>
          <div
            ref={sliderRef}
            className={s.sliderWrapper}
          >
            <SliderBlock />
          </div>
          <FeaturesBlock />
          <div className={s.counterWrapper}>
            <CounterBlock />
          </div>
          <PortfolioBlock />
        </div>
        <ArticlesBlock />
        <TestimonialsBlock />
        <FaqBlock />
        <Cooperation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
