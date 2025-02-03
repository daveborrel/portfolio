import { Stack } from "react-bootstrap";
import { AboutView } from "./AboutSection/AboutView";
import { ExperiencesView } from "./ExperienceSection/ExperiencesView";
import { ProjectsView } from "./ProjectsSection/ProjectsView";

export const PortfolioView = () => {
  return (
    <Stack gap={3}>
      <AboutView />
      <ExperiencesView />
      <ProjectsView />
    </Stack>
  );
};
