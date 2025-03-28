import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Lim
          <br />
          Chong
          <br />
          Yao
        </h1>
        <h2>
          <span>
            <a href="https://twitter.com/" target="_blank">
              <img src={theme === 'light' ? twitterLight : twitterDark} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/" target="_blank">
              <img src={theme === 'light' ? githubLight : githubDark} alt="Github Icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <img src={theme === 'light' ? linkedinLight : linkedinDark} alt="Linkedin Icon" />
            </a>
          </span>

          <p>With a passion for developing modern React web apps.</p>

          <a href={CV}>
            <button className="hover" download>
              Resume
            </button>
          </a>
        </h2>
      </div>
    </section>
  );
}

export default Hero;
