import { useEffect } from "react";

const Animations = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <div className="App">
      {/* <section data-aos="fade-up">
        <h1>Welcome to PowerGym</h1>
        <p>Transform your body, transform your life.</p>
      </section> */}

      {/* <section data-aos="zoom-in">
        <h2>Our Training Programs</h2>
      </section> */}
    
    <div className="animate__animated animate__flipInX">
  Bounce Animation!
</div>

    </div>

  );
};

export default Animations;
