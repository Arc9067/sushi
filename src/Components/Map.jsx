import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdRocketLaunch } from "react-icons/md";
import { BsBookmarkStarFill } from "react-icons/bs";
import { GiFallingStar } from "react-icons/gi";

const Map = () => {
  return (
    <section className="py-[50px] w-full bg-primary">
      <div className="container flex justify-center flex-col items-center">
        <h1 className="text-5xl text-white capitalize">roadmap</h1>
        <VerticalTimeline className="mt-10" lineColor="#FFE083">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6C2F41", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<MdRocketLaunch />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              phase 1
            </h3>
            <ul className="flex flex-col gap-2 mt-5 list-disc list-inside">
              <li className="capitalize">creating of community</li>
              <li className="capitalize">creation of website</li>
              <li className="capitalize">deployment of ca</li>
              <li className="capitalize">launch sushi</li>
              <li className="capitalize">renounce ownership</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6C2F41", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "#F34A07", color: "#fff" }} // icon={<WorkIcon />}
            icon={<BsBookmarkStarFill />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              phase 2
            </h3>
            <ul className="flex flex-col gap-2 mt-5 list-disc list-inside">
              <li className="capitalize">marketing commence</li>
              <li className="capitalize">start eth trending</li>
              <li className="capitalize">1m market cap</li>
              <li className="capitalize">1000 telegram members</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#FFE083", color: "#000" }}
            icon={<GiFallingStar />}
          >
            <h3 className="vertical-timeline-element-title text-3xl capitalize">
              phase 3
            </h3>
            <ul className="flex flex-col gap-2 mt-5 list-disc list-inside">
              <li className="capitalize">move deep in marketing</li>
              <li className="capitalize">2m market cap</li>
              <li className="capitalize">2000 Members</li>
              <li className="capitalize">keep Moon!</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Map;
