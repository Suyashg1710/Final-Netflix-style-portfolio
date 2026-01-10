import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
} from "react-icons/fa";
import { recruiterProjects, RecruiterProject } from "./projectData";

type ProfileType = "Recruiter" | "Developer" | "Stalker" | "Adventurer";

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  Recruiter: [
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/workexperience/250/200",
      icon: <FaBriefcase />,
      route: "/work-experience",
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/projects/250/200",
      icon: <FaProjectDiagram />,
      route: "/projects",
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/contact/250/200",
      icon: <FaEnvelope />,
      route: "/contact-me",
    },
    {
      title: "Cerave skin donAItion",
      imgSrc: "/Cerave.png",
      route: "#",
      icon: <FaProjectDiagram />,
    },
  ],
  Developer: [
    {
      title: "Skills",
      imgSrc: "https://picsum.photos/seed/skills/250/200",
      icon: <FaCode />,
      route: "/skills",
    },
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/workexperience/250/200",
      icon: <FaBriefcase />,
      route: "/work-experience",
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/projects/250/200",
      icon: <FaProjectDiagram />,
      route: "/projects",
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/certifications/250/200",
      icon: <FaCertificate />,
      route: "/certifications",
    },
    {
      title: "Recommendations",
      imgSrc: "https://picsum.photos/seed/recommendations/250/200",
      icon: <FaHandsHelping />,
      route: "/recommendations",
    },
    {
      title: "Work Permit",
      imgSrc: "https://picsum.photos/seed/workpermit/250/200",
      icon: <FaPassport />,
      route: "/work-permit",
    },
    {
      title: "Music",
      imgSrc: "https://picsum.photos/seed/music/250/200",
      route: "/music",
      icon: <FaMusic />,
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/seed/books/250/200",
      route: "/reading",
      icon: <FaBook />,
    },
    {
      title: "Blogs",
      imgSrc: "https://picsum.photos/id/1027/300/200",
      route: "/blogs",
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/contact/250/200",
      icon: <FaEnvelope />,
      route: "/contact-me",
    },
  ],
  Stalker: [
    {
      title: "Music",
      imgSrc: "https://picsum.photos/seed/music/250/200",
      route: "/music",
      icon: <FaMusic />,
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/seed/books/250/200",
      route: "/reading",
      icon: <FaBook />,
    },
    {
      title: "Blogs",
      imgSrc: "https://picsum.photos/id/1027/300/200",
      route: "/blogs",
    },
  ],
  Adventurer: [
    {
      title: "Music",
      imgSrc: "https://picsum.photos/seed/music/250/200",
      route: "/music",
      icon: <FaMusic />,
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/seed/books/250/200",
      route: "/reading",
      icon: <FaBook />,
    },
    {
      title: "Blogs",
      imgSrc: "https://picsum.photos/id/1027/300/200",
      route: "/blogs",
    },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 325; // approx card width incl. gap
    const amount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollArrows();
  }, []);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const selectedProject =
    selectedProjectIndex !== null
      ? recruiterProjects[selectedProjectIndex]
      : null;
  useEffect(() => {
    if (selectedProjectIndex !== null) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [selectedProjectIndex]);

  // RECRUITER VIEW: Netflix-style row + modal
  if (profile === "Recruiter") {
    return (
      <div className="top-picks-row recruiter-row">
        <h2 className="row-title">Work So Far</h2>
        <div className="card-row-wrapper">
          {canScrollLeft && (
            <button
              className="scroll-arrow scroll-arrow-left"
              onClick={() => scrollByAmount("left")}
            >
              ‹
            </button>
          )}

          <div
            className="card-row scrollable-card-row"
            ref={scrollRef}
            onScroll={updateScrollArrows}
          >
            {recruiterProjects.map((project, index) => (
              <div
                key={project.id}
                className="pick-card"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProjectIndex(index)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="pick-image"
                />
                <div className="overlay">
                  <div className="overlay-bottom">
                    <div className="pick-label">
                      {project.multiLineLabel ? (
                        <>
                          <span className="pick-label-title">
                            {project.title}
                          </span>
                          {project.subtitle && (
                            <span className="pick-label-subtitle">
                              {project.subtitle}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="pick-label-single">
                          {project.title}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              className="scroll-arrow scroll-arrow-right"
              onClick={() => scrollByAmount("right")}
            >
              ›
            </button>
          )}
        </div>

        {selectedProject && selectedProjectIndex !== null && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProjectIndex(null)}
          >
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="project-modal-close"
                onClick={() => setSelectedProjectIndex(null)}
              >
                ✕
              </button>

              <div className="project-modal-hero">
                <img
                  src={selectedProject.cover}
                  alt={selectedProject.title}
                  className="project-modal-cover"
                />
              </div>

              <div className="project-modal-body">
                <h2 className="project-modal-title">{selectedProject.title}</h2>

                {selectedProject.subtitle && (
                  <p className="project-modal-subtitle">
                    {selectedProject.subtitle}
                  </p>
                )}

                <p
                  className="project-modal-description"
                  dangerouslySetInnerHTML={{
                    __html: selectedProject.shortDescription,
                  }}
                />

                {/* THIS is the block that “handles embed” */}
                <div
                  className={
                    selectedProject.id === "india-craft-week"
                      ? "project-modal-assets icw-assets-grid"
                      : "project-modal-assets"
                  }
                >
                  {selectedProject.assets.map((asset, i) => {
                    if (asset.type === "image") {
                      const imageElement = (
                        <img
                          src={asset.src}
                          alt={asset.alt || selectedProject.title}
                          className="project-asset-image"
                        />
                      );

                      // If the asset has a `link` (ICW images), make it clickable.
                      return asset.link ? (
                        <a
                          key={i}
                          href={asset.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {imageElement}
                        </a>
                      ) : (
                        // For all other images (no link), just render the image as before.
                        <React.Fragment key={i}>{imageElement}</React.Fragment>
                      );
                    }

                    if (asset.type === "video") {
                      return (
                        <video
                          key={i}
                          className="project-asset-video"
                          src={asset.src}
                          poster={asset.poster}
                          controls
                        />
                      );
                    }

                    if (asset.type === "embed") {
                      return (
                        <div key={i} className="project-asset-embed">
                          <div className="embed-responsive">
                            <iframe
                              src={`${asset.src}?title=0&byline=0&portrait=0`}
                              title={asset.title || selectedProject.title}
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>

                <p className="project-modal-team">{selectedProject.team}</p>
                {/* Modal project navigation */}
                <div className="project-modal-nav">
                  {(() => {
                    const total = recruiterProjects.length;
                    const prevIndex =
                      (selectedProjectIndex + total - 1) % total;
                    const nextIndex = (selectedProjectIndex + 1) % total;
                    const prevProject = recruiterProjects[prevIndex];
                    const nextProject = recruiterProjects[nextIndex];

                    return (
                      <>
                        <button
                          type="button"
                          className="project-modal-nav-link project-modal-nav-link-prev"
                          onClick={() => setSelectedProjectIndex(prevIndex)}
                        >
                          ‹ {prevProject.title}
                        </button>

                        <button
                          type="button"
                          className="project-modal-nav-link project-modal-nav-link-next"
                          onClick={() => setSelectedProjectIndex(nextIndex)}
                        >
                          {nextProject.title} ›
                        </button>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // OTHER PROFILES: keep old behaviour
  return (
    <div className="top-picks-row">
      <h2 className="row-title">
          : `Today's Top Picks for ${profile}`}
      </h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
