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
import { recruiterProjects } from "./projectData";

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
      imgSrc: "/Anthology.jpg",
      route: "/music/Stalker",
      icon: <FaMusic />,
    },
    {
      title: "Reading",
      imgSrc: "/Reading.jpg",
      route: "/reading",
      icon: <FaBook />,
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

// ─── Helper ──────────────────────────────────────────────────────────────────
function getYouTubeThumbnail(src: string): string | null {
  const match = src.match(
    new RegExp("(?:youtube\\.com/embed/|youtu\\.be/)([a-zA-Z0-9_-]{11})")
  );
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

// ─── Coverflow Carousel ───────────────────────────────────────────────────────
const CoverflowCarousel: React.FC<{
  assets: any[];
  projectTitle: string;
  onExpand: (asset: any) => void;
}> = ({ assets, projectTitle, onExpand }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [assets]);

  if (!assets.length) return null;

  const getStyle = (i: number): React.CSSProperties => {
    const offset = i - active;
    const absOffset = Math.abs(offset);
    if (absOffset > 2) return { display: "none" };
    const rotateY = offset * -45;
    const translateX = `calc(-50% + ${offset * 220}px)`;
    const translateZ = absOffset === 0 ? 0 : -180;
    const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.58;
    const brightness = absOffset === 0 ? 1 : absOffset === 1 ? 0.55 : 0.3;
    const zIndex = 10 - absOffset;
    return {
      transform: `translateX(${translateX}) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      filter: `brightness(${brightness})`,
      zIndex,
      cursor: "pointer",
      transition: "all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(assets.length - 1, a + 1));

  return (
    <div className="coverflow-wrapper">
      <div className="coverflow-stage">
        {assets.map((asset: any, i: number) => {
          const isImage = asset.type === "image";
          const isVideo = asset.type === "video";
          const isEmbed = asset.type === "embed";
          const ytThumb = isEmbed ? getYouTubeThumbnail(asset.src) : null;

          return (
            <div
              key={i}
              className="coverflow-card"
              style={getStyle(i)}
              onClick={() => {
                if (i === active) {
                  onExpand(asset);
                } else {
                  setActive(i);
                }
              }}
            >
              {isImage && (
                <img src={asset.src} alt={asset.alt || projectTitle} />
              )}
              {isVideo && (
                <video
                  src={asset.src}
                  poster={asset.poster}
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
              {isEmbed && (
                <div className="coverflow-embed-thumb">
                  {ytThumb ? (
                    <>
                      <img src={ytThumb} alt={asset.title || projectTitle} />
                      <div className="coverflow-embed-play-icon">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="rgba(255,255,255,0.85)"
                        >
                          <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div className="coverflow-embed-placeholder">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e50914"
                        strokeWidth="2"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="3" />
                        <path d="M8 12h8M12 8v8" />
                      </svg>
                      <span>{asset.title || "View Post"}</span>
                    </div>
                  )}
                </div>
              )}
              {i === active && (
                <div className="coverflow-expand-hint">click to expand</div>
              )}
              {asset.caption && (
                <div className="coverflow-caption">{asset.caption}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="coverflow-controls">
        <button
          className="coverflow-btn"
          onClick={prev}
          disabled={active === 0}
        >
          ‹
        </button>
        <div className="coverflow-dots">
          {assets.map((_: any, i: number) => (
            <button
              key={i}
              className={`coverflow-dot${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button
          className="coverflow-btn"
          onClick={next}
          disabled={active === assets.length - 1}
        >
          ›
        </button>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const [activeProject, setActiveProject] = useState<{
    project: (typeof recruiterProjects)[number];
    index: number;
  } | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    assets: any[];
    index: number;
    projectTitle: string;
  } | null>(null);
  const updateScrollArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -325 : 325,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollArrows();
  }, []);

  useEffect(() => {
    if (activeProject) {
      const orig = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [activeProject]);

  if (profile === "Recruiter") {
    const total = recruiterProjects.length;

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
                onClick={() => setActiveProject({ project, index })}
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

        {/* MODAL */}
        {activeProject &&
          (() => {
            const project = activeProject.project;
            const assets = project.assets ?? [];
            const currentIndex = activeProject.index;
            const prevProject =
              recruiterProjects[(currentIndex - 1 + total) % total];
            const nextProject = recruiterProjects[(currentIndex + 1) % total];

            return (
              <>
                {/* LIGHTBOX */}
                {lightboxState &&
                  (() => {
                    const currentAsset =
                      lightboxState.assets[lightboxState.index];
                    const hasPrev = lightboxState.index > 0;
                    const hasNext =
                      lightboxState.index < lightboxState.assets.length - 1;

                    const goPrev = () => {
                      if (!hasPrev) return;
                      setLightboxState({
                        ...lightboxState,
                        index: lightboxState.index - 1,
                      });
                    };

                    const goNext = () => {
                      if (!hasNext) return;
                      setLightboxState({
                        ...lightboxState,
                        index: lightboxState.index + 1,
                      });
                    };

                    return (
                      <div
                        className="lightbox-backdrop"
                        onClick={() => setLightboxState(null)}
                      >
                        <div
                          className="lightbox-inner"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            className="lightbox-close"
                            onClick={() => setLightboxState(null)}
                          >
                            ✕
                          </button>

                          {hasPrev && (
                            <button
                              className="lightbox-nav lightbox-nav-left"
                              onClick={goPrev}
                            >
                              ‹
                            </button>
                          )}

                          {currentAsset.type === "image" && (
                            <img
                              src={currentAsset.src}
                              alt={
                                currentAsset.alt || lightboxState.projectTitle
                              }
                            />
                          )}

                          {(currentAsset.type === "embed" ||
                            currentAsset.type === "video") && (
                            <div
                              className={`lightbox-embed${
                                currentAsset.src?.includes("instagram.com")
                                  ? " instagram-reel"
                                  : ""
                              }`}
                            >
                              {currentAsset.type === "embed" ? (
                                <iframe
                                  src={currentAsset.src}
                                  title={
                                    currentAsset.title ||
                                    lightboxState.projectTitle
                                  }
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : (
                                <video
                                  src={currentAsset.src}
                                  controls
                                  autoPlay
                                  style={{ width: "100%", height: "100%" }}
                                />
                              )}
                            </div>
                          )}

                          {hasNext && (
                            <button
                              className="lightbox-nav lightbox-nav-right"
                              onClick={goNext}
                            >
                              ›
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                {/* NETFLIX MODAL */}
                <div
                  className="project-modal-backdrop"
                  onClick={() => setActiveProject(null)}
                >
                  <div
                    className="project-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="project-modal-bg"
                      style={{
                        backgroundImage: `url(${
                          project.cover || project.thumbnail
                        })`,
                      }}
                    />
                    <div
                      className="project-modal-cover-img"
                      style={{
                        backgroundImage: `url(${
                          project.cover || project.thumbnail
                        })`,
                      }}
                    />

                    <button
                      className="project-modal-close"
                      onClick={() => setActiveProject(null)}
                    >
                      ✕
                    </button>

                    <div className="project-modal-content">
                      {/* LEFT */}
                      <div className="project-modal-info">
                        <p className="project-modal-subtitle">
                          {project.subtitle}
                        </p>
                        <h2 className="project-modal-title">{project.title}</h2>
                        <div className="project-modal-divider" />
                        <p
                          className="project-modal-description"
                          dangerouslySetInnerHTML={{
                            __html:
                              project.shortDescription ||
                              "More details coming soon.",
                          }}
                        />
                        {project.team && (
                          <p className="project-modal-team">{project.team}</p>
                        )}
                      </div>

                      {/* RIGHT — Coverflow */}
                      <div className="project-modal-assets-panel">
                        <CoverflowCarousel
                          assets={assets}
                          projectTitle={project.title}
                          onExpand={(asset) => {
                            const assetIndex = assets.findIndex(
                              (a) => a === asset
                            );
                            setLightboxState({
                              assets,
                              index: assetIndex,
                              projectTitle: project.title,
                            });
                          }}
                        />
                      </div>
                    </div>

                    {/* Prev / Next */}
                    <div className="project-modal-nav">
                      <button
                        type="button"
                        className="project-modal-nav-link project-modal-nav-link-prev"
                        onClick={() =>
                          setActiveProject({
                            project: prevProject,
                            index: (currentIndex - 1 + total) % total,
                          })
                        }
                      >
                        ← {prevProject.title}
                      </button>
                      <button
                        type="button"
                        className="project-modal-nav-link project-modal-nav-link-next"
                        onClick={() =>
                          setActiveProject({
                            project: nextProject,
                            index: (currentIndex + 1) % total,
                          })
                        }
                      >
                        {nextProject.title} →
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
      </div>
    );
  }

  // Other profiles — unchanged
  return (
    <div className="top-picks-row">
      <h2 className="row-title">{`Today's Top Picks for ${profile}`}</h2>
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
