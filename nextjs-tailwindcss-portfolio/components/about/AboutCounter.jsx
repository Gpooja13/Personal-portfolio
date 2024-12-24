import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

function AboutCounter() {
  useCountUp({ ref: "experienceCounter", end: 2, duration: 1 });
  useCountUp({ ref: "githubStarsCounter", end: 30, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 80, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 35, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Projects on GitHub"
          counter={<span id="githubStarsCounter" />}
          measurement="+"
        />

         <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        /> 


        <CounterItem
          title="Projects completed"
          counter={<span id="projectsCounter" />}
          measurement="+"
        />
      </div>
    </div>
  );
}

export default AboutCounter;
