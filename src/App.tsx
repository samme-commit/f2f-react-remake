import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolderOpen,
  faTriangleExclamation,
  faCircleInfo,
  faSkull,
  faLocationDot,
  faSignal,
  faArrowUpRightFromSquare,
  faGlobe,
  faShirt,
  faRadio,
  faVideo,
  faBell,
  faBuilding,
  faHeadphones,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  faDiscord,
  faSteam,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Dock from "./components/Dock/Dock";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import { episodes, latestEpisode } from "./data/episodes";
import { useState } from "react";
import OrbitImages from "./components/OrbitImages/OrbitImages";
import "./index.css";

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const dockItems = [
    {
      icon: <FontAwesomeIcon icon={faHouse} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <FontAwesomeIcon icon={faCircleInfo} />,
      label: "Built With",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
      label: "Episodes",
      onClick: () => scrollToSection("episodes"),
    },
    {
      icon: <FontAwesomeIcon icon={faTriangleExclamation} />,
      label: "Atmosphere",
      onClick: () => scrollToSection("atmosphere"),
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      label: "Community",
      onClick: () => scrollToSection("community"),
    },
    {
      icon: <FontAwesomeIcon icon={faRadio} />,
      label: "Media",
      onClick: () => scrollToSection("media"),
    },
  ];

  const officialLinks = [
    {
      label: "Official Website",
      description: "Visit the current official Fears to Fathom website.",
      href: "https://www.fearstofathom.com/",
      icon: <FontAwesomeIcon icon={faGlobe} />,
    },
    {
      label: "Steam Franchise",
      description: "View all released episodes and the latest release on Steam.",
      href: "https://store.steampowered.com/franchise/f2f",
      icon: <FontAwesomeIcon icon={faSteam} />,
    },
    {
      label: "Discord",
      description: "Join the official community server for news and discussion.",
      href: "https://discord.com/invite/V4HdJpAzZP",
      icon: <FontAwesomeIcon icon={faDiscord} />,
    },
    {
      label: "Merch",
      description: "Open the official merchandise store.",
      href: "https://fearstofathom.store/",
      icon: <FontAwesomeIcon icon={faShirt} />,
    },
    {
      label: "Instagram",
      description: "Follow official updates and media posts.",
      href: "https://www.instagram.com/rayllgames/",
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      label: "X / Twitter",
      description: "Follow Rayll for updates and announcements.",
      href: "https://twitter.com/theRayll",
      icon: <FontAwesomeIcon icon={faXTwitter} />,
    },
    {
      label: "LinkedIn",
      description: "View Rayll Studios on LinkedIn.",
      href: "https://www.linkedin.com/company/rayll-studios",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
  ];

  const soundCards = [
    {
      title: "Radio silence",
      description:
        "A lot of the tension comes from quiet spaces, distant ambience and the feeling that something should be making noise but is not.",
      icon: <FontAwesomeIcon icon={faRadio} />,
      color: "rgba(239, 68, 68, 0.18)",
    },
    {
      title: "Ambient dread",
      description:
        "Instead of feeling like action-horror, the atmosphere leans into background noise, stillness and slow uncertainty.",
      icon: <FontAwesomeIcon icon={faHeadphones} />,
      color: "rgba(168, 85, 247, 0.16)",
    },
    {
      title: "Credits later",
      description:
        "Specific soundtrack and music credits should be added only when verified from official credits or trusted sources.",
      icon: <FontAwesomeIcon icon={faCircleInfo} />,
      color: "rgba(14, 165, 233, 0.16)",
    },
  ];

  const [isOrbitPaused, setIsOrbitPaused] = useState(false);

  const techLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  ];

  return (
    <>
      <div className="site-noise" />

      <main className="site-shell">
        <section id="home" className="section hero-section">
          <div className="hero-content">
            <p className="eyebrow">Unofficial fan-made redesign</p>

            <h1>
              Fears to
              <br />
              Fathom
            </h1>

            <p className="hero-text">
              Fears to Fathom is an episodic psychological horror game where each episode unveils a short story narrated by the ones who survived. 
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollToSection("episodes")}
              >
                View Available Episodes
              </button>

              <a
                className="secondary-button"
                href="https://www.fearstofathom.com/"
                target="_blank"
                rel="noreferrer"
              >
                Official website
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>

          {latestEpisode && (
            <SpotlightCard
              className="latest-card"
              spotlightColor="rgba(220, 38, 38, 0.28)"
            >
              <div className="latest-image-wrap">
                <img src={latestEpisode.image} alt={latestEpisode.title} />
                <div className="latest-image-overlay" />
                <span className="latest-badge">Latest Release</span>
              </div>

              <div className="latest-content">
                <p className="case-label">{latestEpisode.caseNumber}</p>
                <h2>{latestEpisode.title}</h2>

                <div className="latest-meta">
                  <span>{latestEpisode.releaseDate}</span>
                  <span>{latestEpisode.setting}</span>
                </div>

                <p>{latestEpisode.description}</p>

                <a
                  className="latest-link"
                  href={latestEpisode.steamUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Steam
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </SpotlightCard>
          )}
        </section>

        <section id="about" className="section orbit-tech-section">
          <div
            className="orbit-tech-wrap"
            onMouseEnter={() => setIsOrbitPaused(true)}
            onMouseLeave={() => setIsOrbitPaused(false)}
          >
            <OrbitImages
              images={techLogos}
              altPrefix="Technology logo"
              shape="ellipse"
              radiusX={600}
              radiusY={320}
              rotation={-6}
              duration={30}
              itemSize={80}
              responsive={true}
              paused={isOrbitPaused}
              centerContent={
                <div className="orbit-center-card">
                  <p className="eyebrow">Built with</p>
                  <h2>This website was made with</h2>
                  <p>
                    React, TypeScript, Vite, ReactBits components, HTML and CSS — styled as
                    a fan-made horror redesign.
                  </p>
                </div>
              }
            />
          </div>
        </section>

        <section id="episodes" className="section">
          <div className="section-header">
            <p className="eyebrow">Episodes</p>
            <h2>Episodes</h2>
            <p>
              Each episode is presented like a recovered incident report, with
              location, threat level and a short atmospheric summary.
            </p>
          </div>

          <div className="episode-grid">
            {episodes.map((episode) => (
              <SpotlightCard
                key={episode.id}
                className="episode-card"
                spotlightColor={episode.accent}
              >
                <div className="episode-image-wrap">
                  <img src={episode.image} alt={episode.title} />
                  <div className="episode-image-overlay" />

                  {episode.isLatest && (
                    <span className="episode-badge">Latest</span>
                  )}
                </div>

                <div className="episode-card-body">
                  <div className="episode-topline">
                    <span>{episode.caseNumber}</span>
                    <FontAwesomeIcon icon={faSkull} />
                  </div>

                  <h3>{episode.title}</h3>

                  <div className="episode-meta">
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {episode.setting}
                    </span>

                    <span>
                      <FontAwesomeIcon icon={faSignal} />
                      Threat: {episode.threatLevel}
                    </span>
                  </div>

                  <p>{episode.description}</p>

                  <a
                    className="episode-link"
                    href={episode.steamUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Steam page
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="atmosphere" className="section">
          <div className="section-header">
            <p className="eyebrow">Atmosphere</p>
            <h2>Why the horror works</h2>
          </div>

          <div className="atmosphere-grid">
            <SpotlightCard
              className="atmosphere-card"
              spotlightColor="rgba(239, 68, 68, 0.18)"
            >
              <h3>Realistic fear</h3>
              <p>
                The horror feels grounded because the situations start normal
                before slowly becoming unsafe.
              </p>
            </SpotlightCard>

            <SpotlightCard
              className="atmosphere-card"
              spotlightColor="rgba(245, 158, 11, 0.16)"
            >
              <h3>Slow tension</h3>
              <p>
                Instead of constant jumpscares, the fear builds through silence,
                distance and uncertainty.
              </p>
            </SpotlightCard>

            <SpotlightCard
              className="atmosphere-card"
              spotlightColor="rgba(168, 85, 247, 0.16)"
            >
              <h3>Found-footage feeling</h3>
              <p>
                The visual style makes every message, hallway and shadow feel
                like part of a recovered recording.
              </p>
            </SpotlightCard>
          </div>
        </section>

        <section id="community" className="section">
          <div className="section-header">
            <p className="eyebrow">Community</p>
            <h2>Official channels</h2>
            <p>
              A hub for the official website, Steam pages, community links and social
              channels connected to Fears to Fathom.
            </p>
          </div>

          <div className="links-grid">
            {officialLinks.map((link) => (
              <SpotlightCard
                key={link.label}
                className="official-link-card"
                spotlightColor="rgba(239, 68, 68, 0.18)"
              >
                <div className="official-link-icon">{link.icon}</div>

                <div>
                  <h3>{link.label}</h3>
                  <p>{link.description}</p>
                </div>

                <a href={link.href} target="_blank" rel="noreferrer">
                  Open
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="studio" className="section split-section">
          <div>
            <p className="eyebrow">Creator</p>
            <h2>Rayll Studios</h2>
          </div>

          <SpotlightCard
            className="studio-card"
            spotlightColor="rgba(239, 68, 68, 0.2)"
          >
            <div className="studio-icon">
              <FontAwesomeIcon icon={faBuilding} />
            </div>

            <h3>Creators of Fears to Fathom</h3>

            <p>
              Rayll Studios is connected to the Fears to Fathom horror anthology. This
              section exists to make the fan redesign feel more complete while still
              being clear that the project is unofficial.
            </p>

            <a
              className="text-link"
              href="https://www.rayllstudios.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Rayll Studios
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </SpotlightCard>
        </section>

        <section id="media" className="section">
          <div className="section-header">
            <p className="eyebrow">Media</p>
            <h2>Sound, trailer & archive updates</h2>
            <p>
              A horror website feels stronger when it has more than episode cards. This
              section adds space for trailers, sound design and future update features.
            </p>
          </div>

          <div className="media-layout">
            <SpotlightCard
              className="trailer-card"
              spotlightColor="rgba(239, 68, 68, 0.2)"
            >
              <div className="trailer-screen">
                <FontAwesomeIcon icon={faVideo} />
                <span>Playback signal found</span>
              </div>

              <div className="trailer-content">
                <p className="case-label">Trailer feed</p>
                <h3>Latest episode trailer</h3>
                <p>
                  Add an embedded trailer here later, or link directly to the official
                  Steam page for the latest release.
                </p>

                {latestEpisode && (
                  <a
                    className="text-link"
                    href={latestEpisode.steamUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View latest release
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}
              </div>
            </SpotlightCard>

            <div className="sound-grid">
              {soundCards.map((card) => (
                <SpotlightCard
                  key={card.title}
                  className="sound-card"
                  spotlightColor={card.color}
                >
                  <div className="sound-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <SpotlightCard
            className="updates-card"
            spotlightColor="rgba(239, 68, 68, 0.18)"
          >
            <div>
              <p className="eyebrow">Archive updates</p>
              <h3>Receive new case alerts</h3>
              <p>
                A fake newsletter-style component for practicing forms and UI states in
                React. Later, this can be connected to state and validation.
              </p>
            </div>

            <form
              className="updates-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label htmlFor="email">Email address</label>

              <div>
                <input id="email" type="email" placeholder="you@example.com" />
                <button type="submit">
                  Notify me
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </div>
            </form>
          </SpotlightCard>
        </section>

        <footer className="footer">
          <p>
            This is an unofficial fan-made redesign concept created for learning and
            portfolio purposes. Fears to Fathom and related assets belong to their
            original creators and rights holders.
          </p>
        </footer>
      </main>

      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={74}
      />
    </>
  );
}

export default App;