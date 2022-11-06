
const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="left-side">
        <div className="greeting">
        <h1>HI THERE!</h1>
        <p>My name is <em>Shawn Hellwege</em><br />and I <em>LOVE</em> making
          websites.</p>

        </div>
      </div>
      <div className="right-side">
        <ul className="stats">
          <li>15 years web design experience</li>
          <li>8 years back-end web development experience</li>
          <li>Avid Learner</li>
          <li>Aspiring UX/UI Desinger</li>
        </ul>

      </div>
      <div className="profile-pic">
        <img src="./images/shawn.jpg" alt="Shawn Hellwege" />
      </div>

    </section>
  );
};

export default AboutMe;
