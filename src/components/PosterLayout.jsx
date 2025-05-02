import React, { useState } from "react";
import "./PosterLayout.css";
import chromieMascot from "../assets/images/chromie-mascot.png";
import uswLogo from "../assets/images/usw-logo.png";
import vueIcon from "../assets/images/vue-icon.png";
import cssIcon from "../assets/images/css-icon.png";
import jsIcon from "../assets/images/js-icon.png";
import htmlIcon from "../assets/images/html-icon.png";
import ChromieDemo from "./ChromieDemo";

const PosterLayout = () => {
  const [featureActive, setFeatureActive] = useState(false);

  return (
    <div className="poster-container">
      {/* Header */}
      <header className="poster-header">
        <div className="title-container">
          <h1>
            Interactive and Accessible Browser Pets: A Novel Approach to Cyber
            Hygiene Education for Children
          </h1>
          <p className="author-info">
            Author: Joseph Wells | Student ID: 30062269
          </p>
        </div>

        <img
          src={chromieMascot}
          alt="Chromie the Space Cow"
          className={`mascot-image ${
            featureActive ? "teleport-out" : "teleport-in"
          }`}
        />
      </header>

      <div className="content-divider"></div>

      <main className="poster-content">
        {/* Left Column */}
        <div className="column left-column">
          <section className="introduction">
            <h2 className="section-header">
              <span>Introduction</span>
              <span role="img" aria-label="lightbulb">
                💡
              </span>
            </h2>
            <p>
              Children are engaging with digital environments at increasingly
              younger ages, facing risks such as cyberbullying, phishing, and
              online grooming. Traditional cyber hygiene education methods
              frequently fail to engage young learners or promote lasting
              behavioural change. This research investigates how diverse
              learning styles affect the effectiveness of cyber safety education
              and develops an interactive browser-based tool.
            </p>
          </section>

          <section className="methodology">
            <h2 className="section-header">
              <span>Methodology</span>
              <span role="img" aria-label="microscope"></span>
            </h2>
            <p>
              The study adopted a mixed-methods approach, conducting an online
              survey targeting cybersecurity professionals (58%) and
              parents/guardians (21.8%).
            </p>
            <p>
              Using conditional branching logic, the survey gathered targeted
              data that directly informed the design of a
              learning-style-oriented, accessible browser extension aimed at
              improving children's cyber hygiene education.
            </p>
          </section>

          <div className="methodology-branding">
            <div className="university-logo">
              <img src={uswLogo} alt="University of South Wales Logo" />
              <div className="university-text-and-icons">
                <span className="university-name">
                  University of South Wales
                </span>
                <div className="tech-icons">
                  <img src={vueIcon} alt="Vue.js" />
                  <img src={cssIcon} alt="CSS" />
                  <img src={jsIcon} alt="JavaScript" />
                  <img src={htmlIcon} alt="HTML" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="column middle-column">
          <section className="key-findings">
            <h2 className="section-header">
              <span>Key Findings</span>
              <span role="img" aria-label="bar-chart"></span>
            </h2>
            <ul>
              <li>
                <strong>97%</strong> of respondents believe current cyber
                hygiene education is inadequate
              </li>
              <li>
                <strong>84%</strong> prefer hands-on, interactive approaches
                over traditional teaching methods
              </li>
              <li>
                Only <strong>2.8%</strong> consider existing materials fully
                inclusive for learners with different abilities
              </li>
            </ul>

            <h3>Top concerns identified:</h3>
            <ul className="concerns-list">
              <li>
                <span className="bullet">•</span> Cyberbullying{" "}
                <span className="percentage">(80%)</span>
              </li>
              <li>
                <span className="bullet">•</span> Inappropriate content{" "}
                <span className="percentage">(78%)</span>
              </li>
              <li>
                <span className="bullet">•</span> Online grooming{" "}
                <span className="percentage">(64%)</span>
              </li>
            </ul>

            <p>
              <strong>75%</strong> of respondents believe cyber hygiene
              education should commence before age 8
            </p>

            <h3>Recommended accessibility features:</h3>
            <ul className="feature-list">
              <li>
                <span className="bullet">•</span> Interactive elements{" "}
                <span className="percentage">(86%)</span>
              </li>
              <li>
                <span className="bullet">•</span> Simplified language{" "}
                <span className="percentage">(76%)</span>
              </li>
              <li>
                <span className="bullet">•</span> Text-to-speech functionality{" "}
                <span className="percentage">(60%)</span>
              </li>
            </ul>
          </section>

          <section className="future-directions">
            <h2 className="section-header">
              <span>Future Directions</span>
              <span role="img" aria-label="rocket"></span>
            </h2>
            <p>
              Expert evaluation by cybersecurity professionals, educators, and
              accessibility specialists led to significant architectural
              improvements and feature refinement.
            </p>
            <p>Planned developments include:</p>
            <ul className="development-list">
              <li>
                <span className="bullet">•</span> Direct testing with children
              </li>
              <li>
                <span className="bullet">•</span> Age-specific learning paths
              </li>
              <li>
                <span className="bullet">•</span> Enhanced parental involvement
                features
              </li>
              <li>
                <span className="bullet">•</span> Multilingual support
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="column right-column">
          <section className="design-chromie">
            <h2 className="section-header">
              <span>Design: Chromie</span>
              <span role="img" aria-label="robot"></span>
            </h2>
            <p>
              Chromie is a space-themed cow extension designed as a
              child-friendly digital guide to online safety.
            </p>

            <h3>Core Features:</h3>
            <ul className="core-features-list">
              <li data-feature="learning-styles">
                <span className="feature-icon">🧠</span>
                <span>
                  Multi-modal learning support for Visual, Auditory,
                  Reading/Writing, and Kinaesthetic preferences
                </span>
              </li>
              <li data-feature="contextual-delivery">
                <span className="feature-icon">⚡</span>
                <span>
                  Contextual delivery: Just-in-time education at points of
                  online risk
                </span>
              </li>
              <li data-feature="password-generator">
                <span className="feature-icon">📚</span>
                <span>
                  Story-based password generator for memorable, secure passwords
                </span>
              </li>
              <li data-feature="content-analysis">
                <span className="feature-icon">🚩</span>
                <span>
                  Content analysis system to flag cyberbullying and
                  inappropriate material
                </span>
              </li>
              <li data-feature="privacy">
                <span className="feature-icon">🔒</span>
                <span>
                  Privacy-preserving design: Local browser-based monitoring
                </span>
              </li>
              <li data-feature="accessibility">
                <span className="feature-icon">⚙️</span>
                <span>
                  Accessibility tools: Adjustable text size, colour and contrast
                </span>
              </li>
              <li data-feature="typing-monitor">
                <span className="feature-icon">⌨️</span>
                <span>Typing monitor with healthy habit reminders</span>
              </li>
            </ul>
          </section>

          <section className="conclusion">
            <h2 className="section-header">
              <span>Conclusion</span>
              <span role="img" aria-label="checkmark"></span>
            </h2>
            <p>
              This research highlights the need for engaging, inclusive, and
              contextually relevant cyber hygiene education. Chromie bridges the
              gap between awareness and action by supporting diverse learning
              styles through interactive, adaptive content.
            </p>
            <p>
              By promoting digital resilience in children, this tool contributes
              to safer, more informed online experiences for young users.
            </p>
          </section>
        </div>
      </main>

      {/* Floating cow & video/audio */}
      <ChromieDemo onFeatureActive={setFeatureActive} />
    </div>
  );
};

export default PosterLayout;
