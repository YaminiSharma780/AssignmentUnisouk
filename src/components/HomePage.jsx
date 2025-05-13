export default function HomePage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">nullBrains.</div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="navbar-buttons">
          <button className="navbar-signup">Sign UP</button>
          <button className="navbar-signin">Sign In</button>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>
          Start Crafting Your <br />
          <span className="highlight">Next Great Idea</span>
        </h1>
        <p>
          Simplifying the creation of landing pages, blog pages, <br />
          application dashboards and much more.
        </p>
        <button className="cta-btn">Purchase Now</button>
        <div className="trusted-by">
          <span>Trusted by 10K+ leading companies</span>
          <div className="trusted-logos">
            <img src="/disneylogo.png" alt="Disney" />
            <img src="/googlelogo.png" alt="Google" />
            <img src="/hubspotlogo.png" alt="HubSpot" />
            <img src="/youtubesvg.svg" alt="Youtube" />
            <img src="/slacksvg.svg" alt="Slack" />
            <img src="/shopifylogo.svg" alt="Shopify" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-illustrations">
          <img src="/astronaut.png" alt="Boost Productivity" />
          <div>
            <h3>Boost Productivity</h3>
            <h4>
              Build an atmosphere that creates productivity in your organization
              and your company culture
            </h4>
            <ul>
              <li>Build your company productivity</li>
              <li>Automate manual tasks</li>
              <li>Keep your team in sync</li>
            </ul>
          </div>
        </div>
        <div className="features-illustrations">
          <div>
            <h3>Automated Tasks</h3>
            <h4>
              Save time and money with our revolutionary services. We are
              leaders in the industry.
            </h4>
            <ul>
              <li>Automate repetitive tasks</li>
              <li>Integrate with your favorite tools</li>
              <li>Save time and reduce errors</li>
            </ul>
          </div>
          <img src="/astronaut.png" alt="Automated Tasks" />
        </div>
      </section>

      {/* Our Features */}
      <section id="features" className="our-features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <div>Certifications</div>
            <p>
              Each of our users will provide you with a certificate for each
              project completed.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <div>Notifications</div>
            <p>
              Send and receive notifications on all project milestones and
              deadlines.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <div>Bulletin</div>
            <p>
              Stay updated with the latest news and announcements in your
              project area.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <div>Developer Tools</div>
            <p>Access developer tools and resources to build and test code.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔲</div>
            <div>Building Blocks</div>
            <p>
              Drag and building blocks to create layouts and structure for your
              site.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <div>Chapters</div>
            <p>
              Organize your project into special chapters and document your
              flow.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2>An incredible team of amazing individuals</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Freddy Smith" />
            </div>
            <div>Freddy Smith</div>
            <div>CEO and Founder</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Carl James" />
            </div>
            <div>Carl James</div>
            <div>CTO and Co-Founder</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Susan Peterson" />
            </div>
            <div>Susan Peterson</div>
            <div>Marketing Director</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Tommy Banks" />
            </div>
            <div>Tommy Banks</div>
            <div>Lead Developer</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Ben Johnson" />
            </div>
            <div>Ben Johnson</div>
            <div>Senior Developer</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Pete Tompkins" />
            </div>
            <div>Pete Tompkins</div>
            <div>Designer</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Kelly Richards" />
            </div>
            <div>Kelly Richards</div>
            <div>Senior Marketer</div>
          </div>
          <div className="team-card">
            <div className="team-card-div-img">
              <img src="/profile.jpg" alt="Alexa Jordan" />
            </div>
            <div>Alexa Jordan</div>
            <div>Affiliate Lead</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <h2>The Project Blog</h2>
        <p>Design and layouts to help you with your app.</p>
        <div className="blog-featured">
          <div className="blog-card blog-purple">
            <img src="/apple.jpg" alt="Refreshing Designs" />
            <div className="blog-title">Refreshing Designs</div>
            <p>
              Opens up exciting options to help your app stand out in a noisy
              market.
            </p>
          </div>
          <div className="blog-card blog-blue">
            <img src="/mug.jpg" alt="Healthier Lifestyle" />
            <div className="blog-title">Healthier Lifestyle</div>
            <p>
              Living a healthier lifestyle and help your productivity along the
              way.
            </p>
          </div>
          <div className="blog-card blog-yellow">
            <img src="/toy.jpg" alt="Gaming Evolution" />
            <div className="blog-title">Gaming Evolution</div>
            <p>Explore the evolution of gaming and its impact on learning.</p>
          </div>
        </div>
        <div className="blog-list">
          <div className="blog-item">
            <img src="/workstation.jpg" alt="Workstations" />
            <div classname="blog-item-div">
              <h4>Best Workstations of the Year</h4>
              <p>
                Check out these inspiring workstations to get ideas on how to
                level up your workstation.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <img src="/rastaurant.jpg" alt="Eating for Productivity" />
            <div classname="blog-item-div">
              <h4>Eating for Productivity</h4>
              <p>
                Learn how to master disciplined diet in your office and how you
                can use it to maximize productivity.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <img src="/books.jpg" alt="Design Mindset" />
            <div classname="blog-item-div">
              <h4>A Design Mind-set</h4>
              <p>
                Learn what it means to have a design mindset. Learn how to
                improve your design for the user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Terms</li>
        </ul>
        <ul>
          <li>
            <svg
              fill="grey"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </li>
          <li>
            <svg
              fill="grey"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </li>
          <li>
            <svg
              fill="grey"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
          </li>
          <li>
            <svg
              fill="grey"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </li>
          <li>
            <svg
              fill="grey"
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </li>
        </ul>
        <div>© 2025 nullBrains. All rights reserved.</div>
      </footer>
    </div>
  );
}
