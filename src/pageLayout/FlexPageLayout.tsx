import { Timeline } from "@/src/components";

export interface FlexTimeline {
  title: string;
  children?: FlexTimeline[];
}

const FLEX_TIMELINE: FlexTimeline[] = [
  {
    title: "Introduction"
  },
  {
    title: "flex-container (부모)",
    children: [
      { title: "flex-direction" },
      { title: "justify-content" },
      { title: "align-items" },
      { title: "flex-wrap" },
      { title: "align-content" },
      { title: "gap" }
    ]
  },
  {
    title: "flex-item (자식)",
    children: [
      { title: "flex-basis" },
      { title: "flex-grow" },
      { title: "flex-shrink" },
      { title: "flex" },
      { title: "order" },
      { title: "align-self" }
    ]
  }
];

const FlexPageLayout = () => {
  return (
    <>
      {FLEX_TIMELINE.map(({ title, children: inner }) => {
        return <Timeline key={title} title={title} inner={inner} />;
      })}
    </>
  );
};

export default FlexPageLayout;
