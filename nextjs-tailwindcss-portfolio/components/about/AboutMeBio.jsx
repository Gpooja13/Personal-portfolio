import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="block sm:flex sm:gap-10 mt-8 sm:mt-20">
      {/* <div className="w-full sm:w-1/4 mb-7 mx-auto sm:mb-0">
        <Image
          src="/images/profile.png"
          width={270}
          height={270}
          className=" rounded-full"
          alt="Profile Image"
        />
      </div> */}
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:block">
        <Image
          src="/images/profile.png"
          width={270}
          height={270}
          className="rounded-full"
          alt="Profile Image"
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMeData.map((item) => (
          <div key={item.id}>
            {/* Displaying the bio */}
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              {item.bio}
            </p>

            {/* Iterating over techStack if it exists */}
            {item.techStack && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {item.techStack.map((category) => (
                  <div key={category.category} className="mb-4 transition-transform duration-300 transform hover:scale-105
">
                    <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light my-5">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((tech, index) => (
                        <li
                          key={index}
                          className="text-lg text-ternary-dark dark:text-ternary-light flex items-center space-x-2"
                        >
                          {/* Displaying the icon and the technology name */}
                          <span className="text-indigo-700">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
