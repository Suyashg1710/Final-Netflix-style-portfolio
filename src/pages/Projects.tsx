import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { recruiterProjects } from "../profilePage/projectData";

type RecruiterProject = (typeof recruiterProjects)[number];

const Projects: React.FC = () => {
  // 1) Pick the 4 homepage projects you want inside Campaign Thinking
  const campaignHomepageIds = ["postbox-id", "1", "roku", "la-roche-posay"];

  const campaignFromHomepage: RecruiterProject[] = recruiterProjects.filter(
    (p) => campaignHomepageIds.includes(String(p.id))
  );

  // 2) Add 3 placeholder “unseen” projects BEFORE the homepage ones
  // Using Postbox.jpg (public folder) as placeholder
  const placeholderCampaigns: RecruiterProject[] = [
    {
      id: "placeholder-1",
      title: "Unseen Campaign 1",
      subtitle: "(Placeholder)",
      multiLineLabel: true,
      thumbnail: "/Postbox.jpg",
      cover: "/Postbox.jpg",
      shortDescription:
        "Placeholder project. Replace later with the real work.",
      team: "—",
      assets: [
        { type: "image", src: "/Postbox.jpg", alt: "Unseen Campaign 1" },
      ],
    },
    {
      id: "placeholder-2",
      title: "Unseen Campaign 2",
      subtitle: "(Placeholder)",
      multiLineLabel: true,
      thumbnail: "/Postbox.jpg",
      cover: "/Postbox.jpg",
      shortDescription:
        "Placeholder project. Replace later with the real work.",
      team: "—",
      assets: [
        { type: "image", src: "/Postbox.jpg", alt: "Unseen Campaign 2" },
      ],
    },
    {
      id: "placeholder-3",
      title: "Unseen Campaign 3",
      subtitle: "(Placeholder)",
      multiLineLabel: true,
      thumbnail: "/Postbox.jpg",
      cover: "/Postbox.jpg",
      shortDescription:
        "Placeholder project. Replace later with the real work.",
      team: "—",
      assets: [
        { type: "image", src: "/Postbox.jpg", alt: "Unseen Campaign 3" },
      ],
    },
  ];

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
      subtitle: "(Placeholder)",
      multiLineLabel: true,
      thumbnail: "/Patagonia.jpg",
      cover: "/Patagonia.jpg",
      shortDescription:
        "Placeholder. Replace later with the real Patagonia copy.",
      team: "—",
      assets: [
        { type: "image", src: "/Patagonia.jpg", alt: "Patagonia long copy" },
      ],
    },
    ...(icwProject ? [icwProject] : []),
  ];

  // Refs for horizontal scroll
  const scrollRefCampaign = useRef<HTMLDivElement | null>(null);
  const [canScrollLeftCampaign, setCanScrollLeftCampaign] = useState(false);
  const [canScrollRightCampaign, setCanScrollRightCampaign] = useState(false);

  const updateScrollArrows = (
    ref: React.RefObject<HTMLDivElement>,
    setLeft: any,
    setRight: any
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
    updateScrollArrows(
      scrollRefCampaign,
      setCanScrollLeftCampaign,
      setCanScrollRightCampaign
    );
  }, []);

  // Modal state
  // ✅ ONE modal for ALL rows
  const [activeProject, setActiveProject] = useState<RecruiterProject | null>(
    null
  );

  // Lock background scroll when modal open (same as homepage)
  useEffect(() => {
    if (activeProject) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [activeProject]);

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
                onClick={() => setActiveProject(project)}
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
      <div className="projects-row">
        <h2 className="row-title">Short Copies</h2>

        <div className="card-row-wrapper">
          <div className="card-row scrollable-card-row">
            {[
              { title: "BMW", img: "/bmw.jpeg" },
              { title: "Lipton", img: "/Lipton.jpg" },
              { title: "Suzuki", img: "/Suzuki2.jpg" },
              { title: "Headspace", img: "/Headspace.jpg" },
              { title: "Miscellaneous Brands", img: "/Postbox.jpg" },
            ].map((item, index) => (
              <div
                key={`short-${index}`}
                className="pick-card"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() =>
                  setActiveProject({
                    id: `short-${index}`,
                    title: item.title,
                    thumbnail: item.img,
                    cover: item.img,
                    subtitle: "(Placeholder)",
                    multiLineLabel: true,
                    shortDescription:
                      "Placeholder. We’ll add the real work here later.",
                    team: "—",
                    assets: [{ type: "image", src: item.img, alt: item.title }],
                  })
                }
              >
                <img src={item.img} alt="" className="pick-image" />

                <div className="overlay">
                  <div className="overlay-bottom">
                    <div className="pick-label">
                      <span className="pick-label-single">{item.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                onClick={() => setActiveProject(project)}
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
                  setActiveProject({
                    id: `student-${index}`,
                    title: `Between Classes ${index + 1}`,
                    thumbnail: "/Postbox.jpg",
                    cover: "/Postbox.jpg",
                    subtitle: "(Placeholder)",
                    multiLineLabel: true,
                    shortDescription:
                      "Placeholder. We’ll add the real student work here later.",
                    team: "—",
                    assets: [
                      {
                        type: "image",
                        src: "/Postbox.jpg",
                        alt: "Student work",
                      },
                    ],
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
      {/* ✅ ONE shared modal for ALL rows */}
      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            <div className="project-modal-hero">
              <img
                src={activeProject.cover}
                alt={activeProject.title}
                className="project-modal-cover"
              />
            </div>

            <div className="project-modal-body">
              <h2 className="project-modal-title">{activeProject.title}</h2>

              {activeProject.subtitle && (
                <p className="project-modal-subtitle">
                  {activeProject.subtitle}
                </p>
              )}

              <p
                className="project-modal-description"
                dangerouslySetInnerHTML={{
                  __html:
                    activeProject.shortDescription ||
                    "Placeholder. We’ll add the real work here later.",
                }}
              />

              <div className="project-modal-assets">
                {(activeProject.assets || []).map((asset: any, i: number) => {
                  if (asset.type === "image") {
                    return (
                      <img
                        key={i}
                        src={asset.src}
                        alt={asset.alt || activeProject.title}
                        className="project-asset-image"
                      />
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
                            title={asset.title || activeProject.title}
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

              <p className="project-modal-team">{activeProject.team || "—"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
