import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";
import { recruiterProjects } from "../profilePage/projectData";

type RecruiterProject = (typeof recruiterProjects)[number];

// Helper: extract YouTube video ID from an embed URL
function getYouTubeThumbnail(src: string): string | null {
  const match = src.match(
    /(?:youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

function formatTeamCredits(team?: string): string {
  if (!team) return "";

  return team
    .replace(/\s+Art Directors?:/gi, "\nArt Directors:")
    .replace(/\s+Art Director:/gi, "\nArt Director:");
}

// ─── Coverflow Carousel ───────────────────────────────────────────────
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
    // px-based offset so active card sits at center of stage
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
          const isActive = i === active;
          return (
            <div
              key={i}
              className={`coverflow-card${isActive ? " coverflow-active" : ""}`}
              style={getStyle(i)}
              onClick={() => {
                if (isActive) onExpand(asset);
                else setActive(i);
              }}
            >
              {asset.type === "image" && (
                <img src={asset.src} alt={asset.alt || projectTitle} />
              )}
              {asset.type === "video" && (
                <video
                  src={asset.src}
                  muted
                  playsInline
                  poster={asset.poster}
                />
              )}
              {asset.type === "embed" &&
                (asset.thumbnail ? (
                  <div className="coverflow-embed-thumb">
                    <img src={asset.thumbnail} alt={asset.title || "Post"} />
                    <div className="coverflow-embed-play-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="white"
                        opacity="0.9"
                      >
                        <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.5)" />
                        <polygon points="10,8 17,12 10,16" fill="white" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="coverflow-embed-placeholder">
                    <svg
                      width="32"
                      height="32"
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
                ))}
              {isActive && asset.caption && (
                <div className="coverflow-caption">{asset.caption}</div>
              )}
              {isActive && (
                <div className="coverflow-expand-hint">click to expand</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Prev / Next arrows */}
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

const Projects: React.FC = () => {
  const SHOW_BETWEEN_CLASSES = false;

  const campaignHomepageIds = [
    "postbox-id",
    "goat-mercedes-cla",
    "1",
    "roku",
    "la-roche-posay",
  ];

  const campaignFromHomepage: RecruiterProject[] = recruiterProjects.filter(
    (p) => campaignHomepageIds.includes(String(p.id))
  );

  const placeholderCampaigns: RecruiterProject[] = [];

  const campaignThinkingRow: RecruiterProject[] = [
    {
      id: "bon-appeLIT",
      title: "Bon AppeLIT",
      subtitle: "Lipton Ice Tea",
      multiLineLabel: true,
      thumbnail: "/BonAppelit.png",
      cover: "/LiptonCover.jpg",
      shortDescription:
        "An influencer campaign that pairs Lipton Ice Tea with the best part of every meal, turning a behaviour gap into a flavour insight.",
      year: "2021",
      team: "Copywriter: Suyash Gupta",
      assets: [
        {
          type: "embed",
          src: "https://www.instagram.com/p/CYopqJKAd6Z/embed",
          title: "Bon AppeLIT – RJ Abhinav",
          thumbnail: "/LiptonReelRJ.png",
        },
        {
          type: "embed",
          src: "https://www.instagram.com/p/CYYOUDHghLi/embed",
          title: "Bon AppeLIT Campaign – Chef Kunal Kapoor",
          thumbnail: "/LiptonReelKK.png",
        },
      ],
    },
    ...placeholderCampaigns,
    ...campaignFromHomepage,
  ];

  const icwProject = recruiterProjects.find(
    (p) => String(p.id) === "india-craft-week"
  );

  const bigCopyEnergyRow: RecruiterProject[] = [
    {
      id: "patagonia-long-copy",
      title: "Patagonia — Long Copy",
      subtitle: "(School Work)",
      multiLineLabel: true,
      thumbnail: "/Patagonia.jpg",
      cover: "/PatagoniaLogo.jpeg",
      shortDescription:
        "3 different headlines and one body copy for the famous campaign from Patagonia",
      team: "—",
      assets: [
        {
          type: "image",
          src: "/Patagonia1.jpg",
          alt: "Patagonia long copy",
          caption: "Headline 1",
        },
        {
          type: "image",
          src: "/Patagonia2.jpg",
          alt: "Patagonia long copy",
          caption: "Headline 2",
        },
        {
          type: "image",
          src: "/Patagonia3.jpg",
          alt: "Patagonia long copy",
          caption: "Headline 3",
        },
      ],
    },
    ...(icwProject ? [icwProject] : []),
  ];

  const shortCopiesRow: RecruiterProject[] = [
    {
      id: "short-bmw",
      title: "BMW",
      subtitle: "(Internship Work)",
      multiLineLabel: true,
      thumbnail: "/bmw.jpeg",
      cover: "/BMW4.png",
      shortDescription:
        "Copies to advertise the Trade-In service from BMW Germany.",
      team: "—",
      assets: [
        { type: "image", src: "/BMW1.png", alt: "BMW" },
        { type: "image", src: "/BMW2.png", alt: "Placeholder 1" },
        { type: "image", src: "/BMW3.png", alt: "BMW" },
      ],
    },
    {
      id: "short-lipton",
      title: "Lipton",
      subtitle: "(Agency Work)",
      multiLineLabel: true,
      thumbnail: "/Lipton.jpg",
      cover: "/LiptonCover.jpg",
      shortDescription: "Social Media and BAU copies for Lipton Ice Tea India.",
      team: "—",
      assets: [
        {
          type: "image",
          src: "/Lipton-budget.jpg",
          alt: "Lipton cover",
          caption: "Topical post when the Govt released the new budget.",
          link: "https://www.instagram.com/p/CZi4PfqIC3h/",
        },
        {
          type: "image",
          src: "/Lipton2.png",
          alt: "Placeholder 1",
          caption: "USP driven post - All natural.",
        },
        {
          type: "image",
          src: "/Lipton-FriendshipDay.jpg",
          alt: "Placeholder 1",
          caption: "Friendship Day Post",
        },
      ],
    },
    {
      id: "short-suzuki",
      title: "Suzuki",
      subtitle: "(Agency work)",
      multiLineLabel: true,
      thumbnail: "/SuzukiCover.jpg",
      cover: "/SuzukiCover.jpg",
      shortDescription: "Social Media and BAU copies for Suzuki 2 Wheelers.",
      team: "—",
      assets: [
        { type: "image", src: "/Suzuki1.jpg", alt: "Suzuki" },
        { type: "image", src: "/Suzuki5.jpg", alt: "Placeholder 1" },
        {
          type: "embed",
          src: "https://www.instagram.com/reel/Cwp2p_RJcEd/embed",
          title: "Suzuki Matsuri",
          thumbnail: "/MatsuriLogo.png",
        },
        {
          type: "embed",
          src: "https://www.instagram.com/reel/Ct3U1EAvWys/embed",
          title: "Suzuki Reel",
          thumbnail: "/Reel3.png",
        },
      ],
    },
    {
      id: "short-headspace",
      title: "Headspace",
      subtitle: "(School Work)",
      multiLineLabel: true,
      thumbnail: "/Headspace.jpg",
      cover: "/Headspace.jpg",
      shortDescription:
        "Ad Copies for Headspace campaign - Everything's Different.",
      team: "—",
      assets: [
        { type: "image", src: "/Headspace2.jpg", alt: "Headspace" },
        { type: "image", src: "/Headspace1.jpg", alt: "Placeholder 1" },
        { type: "image", src: "/Headspace3.jpg", alt: "Placeholder 1" },
      ],
    },
    {
      id: "short-misc",
      title: "Miscellaneous Brands",
      multiLineLabel: true,
      thumbnail: "/Liam-Nesson.jpeg",
      cover: "/MiscBrands.gif",
      shortDescription:
        "Some ad copies for different brands across my agency years",
      team: "—",
      assets: [
        {
          type: "image",
          src: "/Matter1.jpg",
          alt: "Placeholder 1",
          caption: "Post for Matter Electric Bike",
        },
        {
          type: "image",
          src: "/Matter2.jpg",
          alt: "Placeholder 2",
          caption: "Post for Matter Electric Bike",
        },
        {
          type: "image",
          src: "/Matter3.jpg",
          alt: "Placeholder 2",
          caption: "Post for Matter Electric Bike",
        },
        {
          type: "image",
          src: "/Matter4.jpg",
          alt: "Placeholder 2",
          caption: "Post for Matter Electric Bike",
        },
        {
          type: "image",
          src: "/Simba.jpg",
          alt: "Placeholder 2",
          caption: "Post for Simba Beer",
        },
        {
          type: "image",
          src: "/Boult1.jpg",
          alt: "Placeholder 2",
          caption: "Post for Boult Headphones",
        },
        {
          type: "image",
          src: "/Boult2.jpg",
          alt: "Placeholder 2",
          caption: "Post for Boult Headphones",
        },
        {
          type: "image",
          src: "/Boult3.jpg",
          alt: "Placeholder 2",
          caption: "Post for Boult Headphones",
        },
        {
          type: "image",
          src: "/Prudential.jpg",
          alt: "Placeholder 2",
          caption: "Post for Prudential Insurance Cambodia",
        },
      ],
    },
  ];

  // Refs + scroll arrows
  const scrollRefCampaign = useRef<HTMLDivElement | null>(null);
  const [canScrollLeftCampaign, setCanScrollLeftCampaign] = useState(false);
  const [canScrollRightCampaign, setCanScrollRightCampaign] = useState(false);

  const scrollRefShort = useRef<HTMLDivElement | null>(null);
  const [canScrollLeftShort, setCanScrollLeftShort] = useState(false);
  const [canScrollRightShort, setCanScrollRightShort] = useState(false);

  const modalBodyRef = useRef<HTMLDivElement | null>(null);

  const updateScrollArrows = (
    ref: React.RefObject<HTMLDivElement>,
    setLeft: (val: boolean) => void,
    setRight: (val: boolean) => void
  ) => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setLeft(scrollLeft > 0);
    setRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollByAmount = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    const el = ref.current;
    if (!el) return;
    const amount = direction === "left" ? -325 : 325;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollArrows(
      scrollRefCampaign,
      setCanScrollLeftCampaign,
      setCanScrollRightCampaign
    );
    updateScrollArrows(
      scrollRefShort,
      setCanScrollLeftShort,
      setCanScrollRightShort
    );
  }, []);

  // Modal state
  const [activeProjectIndex, setActiveProjectIndex] = useState<{
    project: RecruiterProject;
    rowIndex: number;
    rowProjects: RecruiterProject[];
  } | null>(null);

  const [lightboxState, setLightboxState] = useState<{
    assets: any[];
    index: number;
    projectTitle: string;
  } | null>(null);

  // Lock background scroll when modal open
  useEffect(() => {
    if (activeProjectIndex?.project) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [activeProjectIndex?.project]);

  // Scroll modal to top when project changes
  useEffect(() => {
    if (activeProjectIndex?.project && modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [activeProjectIndex?.project]);

  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <h1>More projects, in all shapes and sizes</h1>
        <p>Miscellaneous work from my career so far</p>
      </div>

      {/* ===================== ROW 1: Campaign Thinking ===================== */}
      <div className="projects-row">
        <h2 className="row-title">Campaign Thinking</h2>

        <div className="card-row-wrapper">
          {canScrollLeftCampaign && (
            <button
              className="scroll-arrow scroll-arrow-left"
              onClick={() => scrollByAmount(scrollRefCampaign, "left")}
            >
              ‹
            </button>
          )}

          <div
            className="card-row scrollable-card-row"
            ref={scrollRefCampaign}
            onScroll={() =>
              updateScrollArrows(
                scrollRefCampaign,
                setCanScrollLeftCampaign,
                setCanScrollRightCampaign
              )
            }
          >
            {campaignThinkingRow.map((project, index) => (
              <div
                key={String(project.id)}
                className="pick-card"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() =>
                  setActiveProjectIndex({
                    project,
                    rowIndex: 0,
                    rowProjects: campaignThinkingRow,
                  })
                }
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

          {canScrollRightCampaign && (
            <button
              className="scroll-arrow scroll-arrow-right"
              onClick={() => scrollByAmount(scrollRefCampaign, "right")}
            >
              ›
            </button>
          )}
        </div>
      </div>

      {/* ===================== ROW 2: Short Copies ===================== */}
      <div className="projects-row">
        <h2 className="row-title">Short Copies</h2>

        <div className="card-row-wrapper">
          {canScrollLeftShort && (
            <button
              className="scroll-arrow scroll-arrow-left"
              onClick={() => scrollByAmount(scrollRefShort, "left")}
            >
              ‹
            </button>
          )}

          <div
            className="card-row scrollable-card-row"
            ref={scrollRefShort}
            onScroll={() =>
              updateScrollArrows(
                scrollRefShort,
                setCanScrollLeftShort,
                setCanScrollRightShort
              )
            }
          >
            {shortCopiesRow.map((project, index) => (
              <div
                key={String(project.id)}
                className="pick-card"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() =>
                  setActiveProjectIndex({
                    project,
                    rowIndex: 1,
                    rowProjects: shortCopiesRow,
                  })
                }
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

          {canScrollRightShort && (
            <button
              className="scroll-arrow scroll-arrow-right"
              onClick={() => scrollByAmount(scrollRefShort, "right")}
            >
              ›
            </button>
          )}
        </div>
      </div>

      {/* ===================== ROW 3: Big Copy Energy ===================== */}
      <div className="projects-row">
        <h2 className="row-title">Big Copy Energy</h2>

        <div className="card-row-wrapper">
          <div className="card-row scrollable-card-row">
            {bigCopyEnergyRow.map((project, index) => (
              <div
                key={String(project.id)}
                className="pick-card"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() =>
                  setActiveProjectIndex({
                    project,
                    rowIndex: 2,
                    rowProjects: bigCopyEnergyRow,
                  })
                }
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
        </div>
      </div>

      {/* ===================== ROW 4: Between Classes ===================== */}
      {SHOW_BETWEEN_CLASSES && (
        <div className="projects-row">
          <h2 className="row-title">Between Classes</h2>
          <div className="card-row-wrapper">
            <div className="card-row scrollable-card-row">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`student-${index}`}
                  className="pick-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() =>
                    setActiveProjectIndex({
                      project: {
                        id: `student-${index}`,
                        title: `Between Classes ${index + 1}`,
                        thumbnail: "/Postbox.jpg",
                        cover: "/Postbox.jpg",
                        subtitle: "(Placeholder)",
                        multiLineLabel: true,
                        shortDescription:
                          "Placeholder. We'll add the real student work here later.",
                        team: "—",
                        assets: [
                          {
                            type: "image",
                            src: "/Postbox.jpg",
                            alt: "Student work",
                          },
                        ],
                      },
                      rowIndex: 3,
                      rowProjects: Array.from({ length: 6 }).map((_, i) => ({
                        id: `student-${i}`,
                        title: `Between Classes ${i + 1}`,
                        thumbnail: "/Postbox.jpg",
                        cover: "/Postbox.jpg",
                        subtitle: "(Placeholder)",
                        multiLineLabel: true,
                        shortDescription:
                          "Placeholder. We'll add the real student work here later.",
                        team: "—",
                        assets: [
                          {
                            type: "image",
                            src: "/Postbox.jpg",
                            alt: "Student work",
                          },
                        ],
                      })),
                    })
                  }
                >
                  <img src="/Postbox.jpg" alt="" className="pick-image" />
                  <div className="overlay">
                    <div className="overlay-bottom">
                      <div className="pick-label">
                        <span className="pick-label-single">
                          Student Work {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===================== SHARED MODAL ===================== */}
      {activeProjectIndex &&
        (() => {
          const project = activeProjectIndex.project;
          const assets = project.assets ?? [];
          const total = activeProjectIndex.rowProjects.length;
          const currentIndex = activeProjectIndex.rowProjects.findIndex(
            (p) => p.id === project.id
          );
          const prevProject =
            activeProjectIndex.rowProjects[(currentIndex - 1 + total) % total];
          const nextProject =
            activeProjectIndex.rowProjects[(currentIndex + 1) % total];

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
                            alt={currentAsset.alt || lightboxState.projectTitle}
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

              {/* MODAL BACKDROP */}
              <div
                className="project-modal-backdrop"
                onClick={() => setActiveProjectIndex(null)}
              >
                <div
                  className="project-modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Blurred background */}
                  <div
                    className="project-modal-bg"
                    style={{ backgroundImage: `url(${project.cover})` }}
                  />
                  {/* Sharp cover image with tint */}
                  <div
                    className="project-modal-cover-img"
                    style={{ backgroundImage: `url(${project.cover})` }}
                  />

                  {/* Close button */}
                  <button
                    className="project-modal-close"
                    onClick={() => setActiveProjectIndex(null)}
                  >
                    ✕
                  </button>

                  {/* Content */}
                  <div className="project-modal-content">
                    {/* LEFT: Info panel */}
                    <div className="project-modal-info">
                      <h2 className="project-modal-title">{project.title}</h2>
                      <p className="project-modal-subtitle">
                        {project.subtitle}
                      </p>
                      <div className="project-modal-divider" />
                      <p
                        className="project-modal-description"
                        dangerouslySetInnerHTML={{
                          __html:
                            project.shortDescription ||
                            "More details coming soon.",
                        }}
                      />
                      {project.team ? (
                        <p className="project-modal-team">
                          {formatTeamCredits(project.team)
                            .split("\n")
                            .map((line, i) => {
                              const cleanedLine = line.replace(/\.\s*$/, "");
                              const colonIndex = cleanedLine.indexOf(":");

                              if (colonIndex === -1) {
                                return (
                                  <span
                                    key={i}
                                    className="project-modal-team-line"
                                  >
                                    {cleanedLine}
                                  </span>
                                );
                              }

                              const label = cleanedLine.slice(
                                0,
                                colonIndex + 1
                              );
                              const names = cleanedLine
                                .slice(colonIndex + 1)
                                .trim();

                              return (
                                <span
                                  key={i}
                                  className="project-modal-team-line"
                                >
                                  <span className="project-modal-team-label">
                                    {label}
                                  </span>{" "}
                                  <span className="project-modal-team-names">
                                    {names}
                                  </span>
                                </span>
                              );
                            })}
                        </p>
                      ) : null}
                    </div>

                    {/* RIGHT: Coverflow Asset Carousel */}
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

                  {/* Prev / Next project nav */}
                  <div className="project-modal-nav">
                    <button
                      type="button"
                      className="project-modal-nav-link project-modal-nav-link-prev"
                      onClick={() =>
                        setActiveProjectIndex({
                          ...activeProjectIndex,
                          project: prevProject,
                        })
                      }
                    >
                      ← {prevProject.title}
                    </button>
                    <button
                      type="button"
                      className="project-modal-nav-link project-modal-nav-link-next"
                      onClick={() =>
                        setActiveProjectIndex({
                          ...activeProjectIndex,
                          project: nextProject,
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
};

export default Projects;
