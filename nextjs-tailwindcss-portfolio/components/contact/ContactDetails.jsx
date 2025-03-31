import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Unnao (Kanpur), Uttar Pradesh, India - 209801",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "pooja13gupta09@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "+91 8299552682",
    icon: <FiPhone />,
  },
];

function ContactDetails() {
  return (
    <div className="flex gap-5 justify-between flex-col sm:flex-row w-full">
      <div className="w-full lg:w-1/2">
        <div className="text-left max-w-xl px-6">
          <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-10 mb-8">
            Contact details
          </h2>
          <ul>
            {contacts.map((contact) => (
              <li className="flex " key={contact.id}>
                <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                  {contact.icon}
                </i>
                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                  {contact.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28571.41307548092!2d80.36617332870554!3d26.474204887886916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3f66f42b2e73%3A0x7dccbd112b3bab46!2sShuklaganj%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1735049933394!5m2!1sen!2sin" 
          className="w-full h-72"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactDetails;
