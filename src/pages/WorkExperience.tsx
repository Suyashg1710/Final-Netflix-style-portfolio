import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";
import "./WorkExperience.css";
import { TimelineItem } from "../types";

const WorkExperience: React.FC = () => {
  const timeLineData: TimelineItem[] = [
    // Heimat TBWA (blue - work)
    {
      seq: 1,
      name: "Heimat TBWA",
      title: "Concepter Copywriter Intern",
      dateRange: "Oct 2025 - Dec 2025",
      timelineType: "work",
      summaryPoints:
        "Worked with full team to develop ideas for Loctite, Perwoll, and Bref. Integral part of brainstorming sessions. Handled BAU copies across brands.",
    },
    // D&AD New Blood (gold - award)
    {
      seq: 2,
      name: "D&AD New Blood: The Portfolios 2026",
      title: "Featured Winner",
      dateRange: "Jun 2026",
      timelineType: "award",
      summaryPoints:
        "Ranked Top 7 Globally in D&AD New Blood's The Portfolios 2026 competition.",
    },
    // McCann (blue - work)
    {
      seq: 3,
      name: "McCann Worldgroup",
      title: "Concepter Copywriter Intern",
      dateRange: "Jul 2025 - Sep 2025",
      timelineType: "work",
      summaryPoints:
        "Pitched award ideas for La Roche-Posay, Kinder, and Thomy. Worked directly under Creative Director on various writing tasks.",
    },
    // antoni (blue - work)
    {
      seq: 4,
      name: "antoni",
      title: "Concepter Copywriter Intern",
      dateRange: "Apr 2025 - Jun 2025",
      timelineType: "work",
      summaryPoints:
        "Developed copies and ideas across TVCs, print, digital, and activations for live Mercedes-Benz briefs. Sharpened presentation skills under pressure.",
    },
    // Future Lions (gold - award)
    {
      seq: 5,
      name: "Cannes Lions – Future Lions",
      title: "Shortlist",
      dateRange: "May 2025",
      timelineType: "award",
      summaryPoints:
        'Shortlisted for "DHL x India Post – PostBox ID" in Cannes Lions\' Future Lions competition.',
    },
    // Monks (blue - work)
    {
      seq: 6,
      name: "Monks",
      title: "Concepter Copywriter Intern",
      dateRange: "Jan 2025 - Mar 2025",
      timelineType: "work",
      summaryPoints:
        "Worked on copy and campaign ideas for BMW, Duolingo, and PayPal. Supported creative team with words, wit, and ideas.",
    },
    // Miami Ad School (pink - school)
    {
      seq: 7,
      name: "Miami Ad School Europe",
      title: "Portfolio Program - Copywriting",
      dateRange: "2023 - 2025",
      timelineType: "school",
      summaryPoints:
        "Honing craft through real-world briefs. Learning to think like a Creative Director while sharpening presentation skills under pressure.",
    },
    // RepIndia (blue - work)
    {
      seq: 8,
      name: "RepIndia",
      title: "Senior Copywriter",
      dateRange: "Jun 2022 - Aug 2023",
      timelineType: "work",
      summaryPoints:
        "Created copies across media for Suzuki, Canon, Freecharge, Fortis Hospital. Led brainstorming sessions and designed integrated campaigns.",
    },
    // PixelRush (blue - work)
    {
      seq: 9,
      name: "PixelRush / TigerAsia",
      title: "Sr. Associate - Copywriting",
      dateRange: "Mar 2021 - Jun 2022",
      timelineType: "work",
      summaryPoints:
        "Created campaigns for Lipton Ice Tea, Abzorb, Vimal, Prudential. Led junior writers and handled influencer collaborations.",
    },
    // Vermmillion (blue - work)
    {
      seq: 10,
      name: "Vermmillion Communications",
      title: "Copywriter",
      dateRange: "Jan 2020 - Jan 2021",
      timelineType: "work",
      summaryPoints:
        "Developed digital/offline campaigns for Honda, Kohler, Patanjali, Biryani By Kilo. Crafted TVC scripts with SEO integration.",
    },
    // Harikrit Films (blue - work)
    {
      seq: 11,
      name: "Harikrit Films",
      title: "Copywriter Cum Scriptwriter",
      dateRange: "May 2019 - Dec 2019",
      timelineType: "work",
      summaryPoints:
        "Wrote scripts for films and advertising content. Pitched to potential clients to secure new business and multiple campaigns to existing clients.",
    },
    // Craft Village (blue - work)
    {
      seq: 12,
      name: "Craft Village",
      title: "Copywriter",
      dateRange: "Oct 2018 - Dec 2018",
      timelineType: "work",
      summaryPoints:
        "Wrote brochure copy and marketing material to introduce 'Craft Week' event to India.",
    },
    // AAFT Masters (pink - school)
    {
      seq: 13,
      name: "Asian Academy of Film and Television",
      title: "Masters in Advertising & Brand Communications",
      dateRange: "2017 - 2019",
      timelineType: "school",
      summaryPoints:
        "Foundation for crafting campaigns across print, digital, TVCs, and more. Learned the art of working with global brands.",
    },
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">
          📅 Work experience & Education Timeline
        </h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? {
                    background: "#2D2D2D",
                    color: "#FFFFFF",
                    boxShadow: "0 0 25px rgba(237, 9, 20, 0.5)",
                    transition: "all 0.3s ease",
                  }
                : item.timelineType === "award"
                ? {
                    background: "#2D2D2D",
                    color: "#FFFFFF",
                    boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)",
                    transition: "all 0.3s ease",
                  }
                : {
                    background: "rgb(255, 255, 255)",
                    color: "#E50914",
                  }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: "7px solid #2D2D2D" }
                : item.timelineType === "award"
                ? { borderRight: "7px solid #2D2D2D" }
                : { borderRight: "7px solid rgb(255, 255, 255)" }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? {
                    background: "#E50914",
                    color: "#fff",
                    boxShadow: "0 0 15px rgba(237, 9, 20, 0.6)",
                  }
                : item.timelineType === "award"
                ? {
                    background: "#FFD700",
                    color: "#1a1a1a",
                    boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)",
                  }
                : {
                    background: "rgb(255, 255, 255)",
                    color: "#E50914",
                  }
            }
            icon={
              item.timelineType === "work" ? (
                <WorkIcon />
              ) : item.timelineType === "award" ? (
                <StarIcon />
              ) : (
                <SchoolIcon />
              )
            }
          >
            <div>
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.title}
              </h4>
              <p>{item.summaryPoints}</p>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{
            background: "#E50914",
            color: "#fff",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;