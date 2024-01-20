import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import ProjectCard from "./_components/projetcard";

const PortfolioPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const projects = await db.projet.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-sky-600">Portfolio</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
      Bienvenue sur mon univers créatif, où chaque ligne de code et chaque pixel ont un but précis : donner vie à vos idées. 
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="mb-8">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
