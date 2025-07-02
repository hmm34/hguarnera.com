import { awards } from "@/data/awards";
import { proposals } from "@/data/proposals";

import InstitutionLogo from "@/components/InstitutionLogo";

export default function AwardsSection() {
	return (
		<>
        <h2 className="text-2xl font-semibold mb-4">Awards & Funding</h2>

        <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Proposals</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          {proposals.map((p, idx) => (
            <li key={idx} className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 font-medium">
                  <InstitutionLogo institution={p.institution} />
                  <span>{p.title}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  PI: {p.pi} · Agency: {p.agency} · Period: {p.period}
                </div>
              </div>
              <div className="flex flex-col items-end text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap text-right">
                <span>{p.amount}</span>
                <span>{p.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>





        <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Awards, Funding, and Other Support</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          {awards.map((award, idx) => (
            <li key={idx} className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 font-medium">
                  <InstitutionLogo institution={award.institution} />
                  <span>{award.title}</span>
                </div>
                <div className="text-sm">{award.description}</div>
              </div>
              <div className="flex flex-col items-end text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                <span>{award.amount}</span>
                <span>{award.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>


      </>
	);
}