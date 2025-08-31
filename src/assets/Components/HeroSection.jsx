
import { useEffect, useState } from "react";
import "./HeroSection.css";

const backgroundImages = [
  "https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-036_364d499e-77a0-4989-83ee-d6d16ffbe588_700x.jpg?v=1658401600",
  "https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-008_700x.jpg?v=1658401561",
  "https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-010_90cb5bf1-be16-4734-b985-969ac1b2f1d7_700x.jpg?v=1658401564",
  "https://myindianthings.com/cdn/shop/products/Gym_Yoga_wallpapers-compressed-page-058_fc26df74-522a-478c-b75b-60c42d2a0624_700x.jpg?v=1658401627",
"https://myindianthings.com/cdn/shop/products/UG-_GYM_WALLPAPER_VOL-1_1_-page-007_700x.jpg?v=1658319213",
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1637666067348-7303e7007363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1588528402605-1f9d0eb7a6d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1582910184841-2135ce4421bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-part1"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="overlay"></div>
      <div className="content animate__animated animate__backInLeft">
        <h1>Welcome to Shayan Fitness Club</h1>
        <h3>
          "Unleash your inner strength. Train with purpose, move with power,
          and become the strongest version of yourself."
        </h3>
        <p>
          Fitness is not just about lifting weights or running miles, it's
          about building discipline and pushing past your limits. Every drop of
          sweat, every sore muscle, is proof that you're growing stronger. It's
          a daily commitment to yourself to be better, healthier, and more
          confident. Progress doesn't happen overnight, but every effort adds
          up. Whether you're starting fresh or leveling up, your journey is
          uniquely yours. Stay consistent, trust the process, and let your
          results speak louder than words.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
