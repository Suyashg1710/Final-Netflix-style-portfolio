import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { recruiterProjects } from "../profilePage/projectData";

type RecruiterProject = (typeof recruiterProjects)[number];

const Projects: React.FC = () => {
  const SHOW_BETWEEN_CLASSES = false;

  // 1) Pick the 4 homepage projects you want inside Campaign Thinking
  const campaignHomepageIds = ["postbox-id", "1", "roku", "la-roche-posay"];

  const campaignFromHomepage: RecruiterProject[] = recruiterProjects.filter(
    (p) => campaignHomepageIds.includes(String(p.id))
  );

  // 2) Add 3 placeholder “unseen” projects BEFORE the homepage ones
  // Using Postbox.jpg (public folder) as placeholder
  // 2) Add 3 placeholder "unseen" projects BEFORE the homepage ones
  const placeholderCampaigns: RecruiterProject[] = []; // Hidden for now

  // Final Campaign Thinking row order:
  const campaignThinkingRow: RecruiterProject[] = [
    ...placeholderCampaigns,
    ...campaignFromHomepage,
  ];

  // Find ICW project from homepage data (used for Big Copy Energy row)
  const icwProject = recruiterProjects.find(
    (p) => String(p.id) === "india-craft-week"
  );

  // Big Copy Energy row (Patagonia + ICW)
  const bigCopyEnergyRow: RecruiterProject[] = [
    {
      id: "patagonia-long-copy",
      title: "Patagonia — Long Copy",
      subtitle: "(School Work)",
      multiLineLabel: true,
      thumbnail: "/Patagonia.jpg",
      cover: "/Patagonia.jpg",
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

  // Short Copies row (tiles + modal content)
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
      cover: "/Lipton.jpg",
      shortDescription: "Social Media and BAU copies for Lipton Ice Tea India.",
      team: "—",
      assets: [
        {
          type: "image",
          src: "/Lipton-budget.jpg",
          alt: "Lipton cover",
          caption: "Topical post when the Govt released the new budget.",
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
      thumbnail: "/Suzuki2.jpg",
      cover: "/Suzuki2.jpg",
      shortDescription: "Social Media and BAU copies for Suzuki 2 Wheelers.",
      team: "—",
      assets: [
        { type: "image", src: "/Suzuki1.jpg", alt: "Suzuki" },
        { type: "image", src: "/Suzuki5.jpg", alt: "Placeholder 1" },
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
      thumbnail: "/Headline-meme.jpeg",
      cover: "/Liam-Nesson.jpeg",
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
  // Refs + arrows for horizontal scroll (Campaign Thinking row)
  const scrollRefCampaign = useRef<HTMLDivElement | null>(null);
  const [canScrollLeftCampaign, setCanScrollLeftCampaign] = useState(false);
  const [canScrollRightCampaign, setCanScrollRightCampaign] = useState(false);
  // Ref for modal scroll control
  const modalBodyRef = useRef<HTMLDivElement | null>(null);

  // Refs + arrows for horizontal scroll (Short Copies row)
  const scrollRefShort = useRef<HTMLDivElement | null>(null);
  const [canScrollLeftShort, setCanScrollLeftShort] = useState(false);
  const [canScrollRightShort, setCanScrollRightShort] = useState(false);

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
    const cardWidth = 325; // matches homepage spacing
    const amount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    // Campaign Thinking row
    updateScrollArrows(
      scrollRefCampaign,
      setCanScrollLeftCampaign,
      setCanScrollRightCampaign
    );

    // Short Copies row
    updateScrollArrows(
      scrollRefShort,
      setCanScrollLeftShort,
      setCanScrollRightShort
    );
  }, []);

  // Modal state
  // ✅ ONE modal for ALL rows
  const [activeProjectIndex, setActiveProjectIndex] = useState<{
    project: RecruiterProject;
    rowIndex: number;
    rowProjects: RecruiterProject[];
  } | null>(null);

  // Lock background scroll when modal open (same as homepage)
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
                    rowIndex: 0, // Campaign Thinking = row 0
                    rowProjects: campaignThinkingRow,
                  })
                }
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="pick-image"
                />

                {/* Title always visible + subtitle support (same as homepage) */}
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

        {/* Modal (same behavior as homepage) */}
      </div>

      {/* ===================== ROW 2: Short Copies ===================== */}
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
                    rowIndex: 1, // Short Copies = row 1
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
                    rowIndex: 2, // Big Copy = row 2
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
                      rowIndex: 3, // Between Classes = row 3
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

      {/* ✅ ONE shared modal for ALL rows */}
      {activeProjectIndex && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProjectIndex(null)}
        >
          <div
            className="project-modal"
            ref={modalBodyRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setActiveProjectIndex(null)}
            >
              &times;
            </button>

            <div className="project-modal-hero">
              <img
                src={activeProjectIndex?.project.cover}
                alt={activeProjectIndex?.project.title}
                className="project-modal-cover"
              />
            </div>

            <div className="project-modal-body">
              <h2 className="project-modal-title">
                {activeProjectIndex?.project.title}
              </h2>

              {activeProjectIndex?.project.subtitle && (
                <p className="project-modal-subtitle">
                  {activeProjectIndex?.project.subtitle}
                </p>
              )}

              <p
                className="project-modal-description"
                dangerouslySetInnerHTML={{
                  __html:
                    activeProjectIndex?.project.shortDescription ||
                    "Placeholder. We'll add the real work here later.",
                }}
              />

              <div className="project-modal-assets">
                {(activeProjectIndex?.project.assets || []).map(
                  (asset: any, i: number) => {
                    if (asset.type === "image") {
                      return (
                        <div key={i} className="project-asset-block">
                          <img
                            src={asset.src}
                            alt={asset.alt || activeProjectIndex?.project.title}
                            className="project-asset-image"
                          />
                          {asset.caption && (
                            <p className="project-asset-caption">
                              {asset.caption}
                            </p>
                          )}
                        </div>
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
                              title={
                                asset.title || activeProjectIndex?.project.title
                              }
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      );
                    }

                    return null;
                  }
                )}
              </div>

              <p className="project-modal-team">
                {activeProjectIndex?.project.team || "—"}
              </p>

              <div className="project-modal-nav">
                {(() => {
                  const total = activeProjectIndex!.rowProjects.length;
                  const currentIndex =
                    activeProjectIndex!.rowProjects.findIndex(
                      (p) => p.id === activeProjectIndex!.project.id
                    );
                  const prevIndex = (currentIndex + total - 1) % total;
                  const nextIndex = (currentIndex + 1) % total;
                  const prevProject =
                    activeProjectIndex!.rowProjects[prevIndex];
                  const nextProject =
                    activeProjectIndex!.rowProjects[nextIndex];

                  return (
                    <>
                      <button
                        type="button"
                        className="project-modal-nav-link project-modal-nav-link-prev"
                        onClick={() =>
                          setActiveProjectIndex({
                            ...activeProjectIndex!,
                            project: prevProject,
                          })
                        }
                      >
                        ‹ {prevProject.title}
                      </button>

                      <button
                        type="button"
                        className="project-modal-nav-link project-modal-nav-link-next"
                        onClick={() =>
                          setActiveProjectIndex({
                            ...activeProjectIndex!,
                            project: nextProject,
                          })
                        }
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
};

export default Projects;
