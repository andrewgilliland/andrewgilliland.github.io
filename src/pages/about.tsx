import { socialLinks } from "@/lib/utils/social";
import * as d3 from "d3";
import { useEffect } from "react";
import us from "@/lib/data/us.json";
import * as topojson from "topojson-client";

type CreateMapParams = {
  width: number;
  height: number;
  data: any;
};

const About = () => {
  const createMap = ({ width, height, data }: CreateMapParams) => {
    const path = d3.geoPath();
    console.log("path: ", path);

    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

    const svg = d3
      .create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto;")
      .on("click", reset);

    const g = svg.append("g");

    const states = g
      .append("g")
      .attr("fill", "#444")
      .attr("cursor", "pointer")
      .selectAll("path")
      .data(topojson.feature(data, data.objects.states).features)
      .join("path")
      .on("click", clicked)
      .attr("d", path);

    function reset() {
      states.transition().style("fill", null);
      svg
        .transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
        );
    }

    function clicked(event, d) {
      const [[x0, y0], [x1, y1]] = path.bounds(d);
      event.stopPropagation();
      states.transition().style("fill", null);
      d3.select(this).transition().style("fill", "red");
      svg
        .transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(
              Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height))
            )
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(event, svg.node())
        );
    }

    function zoomed(event) {
      const { transform } = event;
      g.attr("transform", transform);
      g.attr("stroke-width", 1 / transform.k);
    }
  };

  useEffect(() => {
    createMap({ width: 600, height: 600, data: us });
  }, []);

  return (
    <div className="max-w-3xl w-full mx-auto mt-14 px-8">
      <h1 className="font-bold text-gray-100 text-4xl stroke-white md:mx-0">
        About
      </h1>

      <p className="text-xl mx-auto mt-10">
        Hi👋, I&apos;m Andrew. I&apos;m a mobile developer living Bloomington,
        Illinois. I am passionate about constantly learning and using new mobile
        and web technologies. I currently work mainly with React Native and
        Swift to build mobile applications, but always enjoy implementing new
        technologies. In my spare time, I enjoy learning about fitness and
        nutrition, woodworking and am a music aficionado.
      </p>

      <div className="flex flex-col items-start mt-10">
        {socialLinks.map(({ title, href }, index) => (
          <a key={index} className={`group ${index ? "mt-6" : ""}`} href={href}>
            <div className="font-semibold text-cyan-300 text-xl">{title}</div>
            <div className="bg-cyan-300 h-0.5 w-[0%] group-hover:w-full transition-all" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
