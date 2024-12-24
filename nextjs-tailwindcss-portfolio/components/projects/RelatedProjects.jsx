import Image from "next/image";
import { useRouter } from "next/router";
import Link from 'next/link';
import { projectsData } from "../../data/projectsData";

function RelatedProjects() {
  const router = useRouter();
  const { id } = router.query; 

  const relatedProjects = projectsData.filter((project) => project.id != id).slice(0, 4);
 
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Related Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {relatedProjects.map((project) => {
          return (
			<Link
				href="/projects/[id]"
				as={'/projects/' + project.id}
				aria-label="Single Project"
				passHref
			>
            <Image
              src={project.img}
              className="rounded-xl cursor-pointer"
              width="400"
              height="400"
              alt={project.title}
              key={project.id}
            />
			<p className="text-center mt-2">{project.title}</p>
			</Link>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProjects;
