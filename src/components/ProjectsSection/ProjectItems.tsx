import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "PokeDex",
    description:
      "This is a PokeDex that uses the pokemonAPI to display information about all 898 Pokemon. There is also an option to build a team of up to 6 Pokemon. I am using Materials UI to build the user interface.",
    githubLink: "https://github.com/daveborrel/PokeDex",
  },
  {
    id: 2,
    title: "Habit Tracker",
    description: "A simple habit tracker with data visualization in Java.",
    githubLink: "https://github.com/daveborrel/Weekly_Habit_Tracker",
  },
  // {
  //   id: 3,
  //   title: "Photo Project",
  //   description: "A beautiful landscape photo",
  // },
  // {
  //   id: 4,
  //   title: "Photo Project",
  //   description: "A beautiful landscape photo",
  // },
];

export const ProjectItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} item={project} />
      ))}
    </div>
  );
};
