import { useState } from 'react';

const selectOptions = [
  'Full Stack Application',
  'Mobile Application',
  'Front End Application',
  'Back End Application',
];

function ProjectsFilter({ setSelectProject }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedValue(selected); // Update the state
    setSelectProject(selected); // Update the parent component's state
  };

  return (
    <select
      value={selectedValue} // Bind the selected value
      onChange={handleChange}
      className="
        px-4
        sm:px-6
        py-2
        border
        dark:border-secondary-dark
        rounded-lg
        text-sm
        sm:text-md
        dark:font-medium
        bg-secondary-light
        dark:bg-ternary-dark
        text-primary-dark
        dark:text-ternary-light
      "
    >
      {/* Default 'All Projects' option with a value of '' */}
      <option value="" className="text-sm sm:text-md">
        All Projects
      </option>

      {/* Dynamically render options */}
      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;
