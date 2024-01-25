


export default function Projects() {
    const projectsData = [
        {
          id: 1,
          title: "InstantMD",
          description: "Investigation, Medication and Chief complaint recognition application using Natural Language Processing. Winner of the HealthCare Track at the MINeD Hackathon.",
          technologies: ["Regex", "Flask", "Semantic UI"],
          githubLink: "https://github.com/pycoder2000/InstantMD"
          // ... other project-specific properties
        },
        {
            id: 2,
            title: "InstantMD",
            description: "Investigation, Medication and Chief complaint recognition application using Natural Language Processing. Winner of the HealthCare Track at the MINeD Hackathon.",
            technologies: ["Regex", "Flask", "Semantic UI"],
            githubLink: "https://github.com/pycoder2000/InstantMD"
            // ... other project-specific properties
          },
          {
            id: 3,
            title: "InstantMD",
            description: "Investigation, Medication and Chief complaint recognition application using Natural Language Processing. Winner of the HealthCare Track at the MINeD Hackathon.",
            technologies: ["Regex", "Flask", "Semantic UI"],
            githubLink: "https://github.com/pycoder2000/InstantMD"
            // ... other project-specific properties
          },
        // ... add more projects here
      ];
    return (
        <body className="bg-white p-0 text-black antialiased dark:bg-black dark:text-white dark:min-height: 100vh">
        <div className="mx-auto max-w-6xl divide-y divide-gray-400 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">A list of projects I have been working on or built</p>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {projectsData.map(project => (
                <div key={project.id} className="p-4 md:w-1/2 cursor-pointer" style={{ maxWidth: '544px' }}>
                  <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-pink-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-pink-500 dark:hover:bg-gray-800">
                    <div className="p-6">
                      {/* Project content here */}
                      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>

                      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{project.title}</h2>
                      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{project.description}</p>
                      <div className="text-sm text-gray-400">{project.technologies.join(" • ")}</div>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </body>
      );
}
