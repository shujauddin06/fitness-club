import React, { useEffect } from "react";
import "./About.css"
const About=()=>{
    

        useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }, []);

return(
      <div className="main-container">

        {/* section container 1 */}
        <div className="section-container">

         <div className="card-img" data-aos="fade-right"></div>


            
               <div className="card-text" data-aos="fade-left">
               <h3>Muscle Building</h3>
              <p>At Shayan Fitness Club, muscle building is more than just lifting weights,it’s a science-backed journey.
We offer structured training programs designed to help you gain lean, strong muscle mass effectively.
Our gym features top-tier equipment, from free weights to resistance machines, for full-body development.
Certified trainers create personalized workout plans tailored to your body type and fitness goals.
We focus on proper form, controlled reps, and progressive overload for optimal results.
Nutritional guidance is included to support muscle recovery and growth outside the gym.
Whether you're a beginner or advanced, we help you push past plateaus and track your gains.
Recovery is part of the plan,we teach rest strategies to avoid burnout and injury.
Motivating atmosphere and consistent support keep you focused and driven.
At Shayan Fitness Club, we don’t just build muscles we build confidence and strength for life.</p>
           
           </div>
           </div>
           <hr className="custom-hr" />


           {/* section-container2 */}
        <div className="section-container2">
           
           <div className="card-text2">
              <div className="card-text" data-aos="fade-right">
            <h3>Strength Training</h3>
           <p>At Shayan Fitness Club, we offer expert-led strength training programs tailored to all fitness levels.
Our facility is equipped with premium free weights, resistance machines, and powerlifting racks.
Whether you're a beginner or an experienced lifter, we help you build strength safely and effectively.
Certified trainers guide you through compound lifts like squats, deadlifts, and bench presses.
We focus on proper form, injury prevention, and consistent progress tracking.
Each program is personalized based on your goals whether it's power, endurance, or muscle gain.
Our supportive environment helps you stay motivated and confident throughout your journey.
We incorporate progressive overload techniques to ensure continuous improvement.
Strength training at our gym also improves posture, metabolism, and overall athletic performance.
Join Shayan Fitness Club and unlock your true physical potential one rep at a time.</p>
          </div>
          </div>
          <div className="card-img2" data-aos="fade-left"></div>
        
         
        </div>
        <hr className="custom-hr" />


        {/* section container3 */}

        <div className="section-container3">

           <div className="card-img3" data-aos="fade-right"></div>

            <div className="card-text3">
             <div className="card-text" data-aos="fade-left">
              <h3>Weight Loss / Fat Burn</h3>
              <p>At Shayan Fitness Club, we specialize in helping you burn fat and achieve sustainable weight loss.
Our programs combine cardio, strength training, and high-intensity workouts for maximum fat burn.
Certified trainers create personalized plans tailored to your body, lifestyle, and goals.
We guide you through effective exercises that boost metabolism and burn calories efficiently.
Nutrition coaching is provided to help you eat smarter without extreme dieting.
From treadmill sprints to circuit training, our workouts are both challenging and fun.
Progress tracking tools keep you motivated as you see real results over time.
We promote healthy habits that lead to long-term success, not quick fixes.
Group classes and one-on-one sessions offer flexibility and support at every step.
At Shayan Fitness Club, we help you lose fat, gain energy, and transform your lifestyle.</p>
            </div>
            </div>
            </div>
            <hr className="custom-hr" />


            {/* section-container4 */}

             <div className="section-container4">
           <div className="card-text4">
           <div className="card-text" data-aos="fade-right">
            <h3>Nutrition Guidance</h3>
            <p>At Shayan Fitness Club, we believe that fitness starts in the kitchen as much as in the gym.
Our expert trainers and coaches provide personalized nutrition guidance to support your goals.
Whether you're aiming for fat loss, muscle gain, or overall wellness, we tailor your diet plan accordingly.
We educate our members on balanced eating, portion control, and proper hydration.
Our plans include the right mix of proteins, carbs, and healthy fats to fuel your workouts and recovery.
We help you understand the role of supplements, meal timing, and smart food choices.
Our goal is to build sustainable habits, not short-term crash diets.
You'll receive ongoing support and adjustments based on your progress and feedback.
With the right nutrition, your energy, performance, and results improve dramatically.
At Shayan Fitness Club, we make healthy eating simple, practical, and part of your lifestyle.</p>
          </div>
           </div>

           <div className="card-img4" data-aos="fade-left"></div>
           
            
            </div>
            <hr className="custom-hr" />
      </div>
    );

}
export default About;