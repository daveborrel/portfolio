import { Stack } from "react-bootstrap";
import { AboutView } from "./AboutSection/AboutView";
import { ExperiencesView } from "./ExperienceSection/ExperiencesView";
import { ProjectsView } from "./ProjectsSection/ProjectsView";

export const PortfolioView = () => {
  return (
    <Stack gap={0} className="overflow-hidden">
      <section className="full-screen">
        <AboutView />
      </section>
      <section className="full-screen">
        <ExperiencesView />
      </section>
      <section className="full-screen">
        <ProjectsView />
      </section>
    </Stack>
  );
};
