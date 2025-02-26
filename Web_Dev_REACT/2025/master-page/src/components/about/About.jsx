import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css"; // Minimal CSS
import restaurantImage from "../images/cafe.jpg";

const About = () => {
  return (
    <section className="container about-container">
      {/* About Section - Beige */}
      <div className="about-content p-4 rounded shadow-sm beige-bg mb-4">
        <h2><b><u>About Cafe Korea</u></b></h2>
        <h3><b>Take a look at the place, the people and the food…</b></h3>
        <img src={restaurantImage} alt="Cafe Korea Interior" className="img-fluid rounded my-3" />
        <p>
          Opened in <strong>July 2009</strong>, <strong>Cafe Korea</strong> features sophisticated Korean cuisine that can be enjoyed by 
          both Koreans and Non-Koreans. Our executive chef, <strong>Julie Bang</strong>, is a native of South Korea with <strong>30 years of cooking experience</strong>.
        </p>
        <p>
          Our unique menu consists of <strong>“Seoul Food”</strong>, well known for fresh ingredients and signature sauces. We ensure our dishes are made with the <strong>finest ingredients</strong>.
        </p>
        <p><strong>No reservations required!</strong> Free parking available. If you’re looking for something <strong>new and different</strong>, visit Cafe Korea!</p>
      </div>

      {/* News Section - White */}
      <div className="p-4 rounded shadow-sm bg-white mb-4">
        <h2>News</h2>
        <p><em>Article by Terry Kirts, Indianapolis Monthly, August 2010.</em></p>
        <p>
          <strong>"IF THE ENDLESS, INSCRUTABLE</strong> menus typical of many Asian stops feel overwhelming, the cheery new Cafe Korea in Fishers is a breath of fresh air...
        </p>
        <p>
          Soft-shell crab tempura and a delicious crispy seafood pancake top the list of starters. The kitchen also forgoes the usual glut of side dishes for just a few well-chosen bites of kimchi pickles, marinated sprouts, and cooked greens."
        </p>
      </div>

      {/* Another Article - Beige */}
      <div className="p-4 rounded shadow-sm beige-bg mb-4">
        <p><em>Article by Traci Cumbay, Indianapolis Star, October 28, 2010.</em></p>
        <p>
          One hand is more than enough to count the Korean restaurants in town, which made <strong>Café Korea</strong> a welcome addition in July 2009...
        </p>
        <p>
          Owner <strong>Hong Bang</strong> earned certification in Japanese and Korean cooking in Korea. She’s the only cook at Café Korea, ensuring high-quality dishes every time.
        </p>
      </div>
    </section>
  );
};

export default About;
