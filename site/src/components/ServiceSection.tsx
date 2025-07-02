import { programmingContests } from "@/data/programmingContests";
import { stemOutreach } from "@/data/stemOutreach";
import { universityServiceRoles } from "@/data/universityServiceRoles";

import { HiOutlinePresentationChartBar } from "react-icons/hi";

export default function ServiceSection() {
	return (
		<>
      <h2 className="text-2xl font-semibold mb-4">Service & Outreach</h2>
      <p className="mb-6 text-gray-800 dark:text-gray-200">
        I am actively involved in departmental and university service, including committee memberships, and outreach programs to encourage participation in STEM.
      </p>

      { /* University level stuff */ }
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">University Service</h3>
        <ul className="space-y-1 text-gray-800 dark:text-gray-200">
          {universityServiceRoles.map((role, idx) => (
            <li key={idx} className="flex items-start justify-between">
              <div className="flex items-center gap-1">
                {role.description && (
                  <span
                    className="text-gray-500 hover:text-blue-600 cursor-help"
                    title={role.description}
                  >
                    ℹ️
                  </span>
                )}
                <span>{role.title}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {role.years.join(", ")}
              </span>
            </li>
          ))}
        </ul>
      </section>

      { /* Fun programming stuff */ }
      <section className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Programming Contest Coach</h3>
      <ul className="text-gray-800 dark:text-gray-200">
        {programmingContests.map((item, idx) => (
          <li key={idx} className="flex items-start justify-between">
            <span>{item.contest}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
              {item.years.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </section>

    { /* Outreach stuff */ }
    <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2 mt-6">STEM Outreach</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          {stemOutreach.map((item, idx) => (
            <li key={idx} className="flex justify-between items-start">
              <div>
                <div className="font-medium flex items-center gap-2">
                  <span>{item.title}</span>
                  {item.link && (
                    <a
                      href={item.link}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download slides"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <HiOutlinePresentationChartBar className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="text-sm">{item.description}</div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {item.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      { /* Research stuff */ }
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
       
        <ul className="space-y-1 text-gray-800 dark:text-gray-200">
          <li className="flex items-start justify-between">
          <div className="flex items-start gap-2">
              <span>External reviewer for Discussiones Mathematicae Graph Theory (DMGT)</span></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">2020, 2022</span>
          </li>
          <li className="flex items-start justify-between">
          <div className="flex items-start gap-2">
              <span>External reviewer for Workshop on Graph-Theoretic Concepts in Computer Science (WG)</span></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">2018</span>
          </li>
        </ul>
      </section>


    </>
	);
}