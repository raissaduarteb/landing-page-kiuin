import { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakRadio,
  TweakToggle,
} from "./components/tweaks-panel";
import { Header, Hero, Strip, Features } from "./components/sections-top";
import { ProductSurfaces } from "./components/sections-product";
import {
  StatsBand,
  Pricing,
  Testimonial,
  CTAForm,
  FAQ,
  Footer,
} from "./components/sections-bottom";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  accent: "#4FC3D3",
  headline: "care",
  showStrip: true,
  darkHero: true,
}; /*EDITMODE-END*/

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const formRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--cyan-bright", tweaks.accent);
  }, [tweaks.accent]);

  // Toggle hero background
  useEffect(() => {
    document.body.classList.toggle("hero-light", !tweaks.darkHero);
  }, [tweaks.darkHero]);

  const scrollToCTA = () => {
    const el = document.getElementById("contato");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  // Choose hero headline variant
  const HeroWithVariant = () => {
    if (tweaks.headline === "queue") {
      return <Hero onCTA={scrollToCTA} />;
    }
    return <Hero onCTA={scrollToCTA} variant={tweaks.headline} />;
  };

  return (
    <>
      <Header onCTA={scrollToCTA} />
      <HeroWithVariant />
      {tweaks.showStrip && <Strip />}
      <Features onCTA={scrollToCTA} />
      <ProductSurfaces />
      <StatsBand />
      <Pricing onCTA={scrollToCTA} />
      <Testimonial />
      <CTAForm />
      <FAQ />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Cor de destaque">
          <TweakColor
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#4FC3D3", "#5EB1BF", "#27B6E7", "#107E31"]}
          />
        </TweakSection>
        <TweakSection label="Headline do hero">
          <TweakRadio
            value={tweaks.headline}
            onChange={(v) => setTweak("headline", v)}
            options={[
              { value: "queue", label: "Filas" },
              { value: "time", label: "Tempo" },
              { value: "care", label: "Cuidado" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Hero escuro">
          <TweakToggle
            value={tweaks.darkHero}
            onChange={(v) => setTweak("darkHero", v)}
          />
        </TweakSection>
        <TweakSection label="Mostrar logos">
          <TweakToggle
            value={tweaks.showStrip}
            onChange={(v) => setTweak("showStrip", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

export default App;
