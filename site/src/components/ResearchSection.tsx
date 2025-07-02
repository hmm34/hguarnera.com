import { publications } from "@/data/publications";
import { invitedTalks } from "@/data/invitedTalks";

import { SiArxiv, SiDblp, SiGooglescholar } from "react-icons/si";
import { BookOpen, FileText, LinkIcon, MapPin, Phone, Mail } from "lucide-react";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FaFilePdf, FaImage, FaGithub, FaLinkedin, FaResearchgate, FaStackOverflow, FaFilePowerpoint, FaYoutube } from "react-icons/fa";

export default function ResearchSection() {
 return (

 	<>
	<h2 className="text-2xl font-semibold mb-4">Research</h2>

	<p className="mb-6 text-gray-800 dark:text-gray-200">
	My research lies at the intersection of software engineering, socio-technical systems, and applied algorithmic graph theory in software ecosystem analysis.
	My research interests in graph theory and algorithms focus on the broad category of hyperbolic graphs, and includes the design and analysis of graph algorithms, complex network analysis, and algorithmic applications in software engineering, such as mining software repositories.
	I am particularly interested in social patterns in software development.
	</p>

	{ /* Publications */ }
	<h3 className="text-xl font-semibold mb-2">Publications</h3>
	<ul className="space-y-1 mb-4">
	{publications.map((pub, index) => (
	  <li key={index} className="flex justify-between items-start gap-4">
	    <div className="flex-1">
	      <span className="font-medium">"{pub.title}",</span>{" "}
	      <span className="text-gray-600 dark:text-gray-300">
	        {pub.authors.map((author, i) => (
	          <span
	            key={i}
	            className={ 'isStudent' in author && author.isStudent === true ? "text-blue-600 font-semibold" : "" }
	          >
	            {author.name}
	            {i < pub.authors.length - 1 ? "," : "."}{" "}
	          </span>
	        ))}
	        <span className="italic">{pub.venue}</span>, {pub.year}.
	      </span>
	    </div>
	    {/* publication links */}
	    <div className="flex gap-2 mt-0.5 shrink-0">
	      {pub.links.pdf && (
	        <a
	          href={pub.links.pdf}
	          target="_blank"
	          rel="noopener noreferrer"
	          aria-label="PDF"
	        >
	          <FaFilePdf className="w-4 h-4 hover:text-blue-600" />
	        </a>
	      )}
	      {pub.links.arxiv && (
	        <a
	          href={pub.links.arxiv}
	          target="_blank"
	          rel="noopener noreferrer"
	          aria-label="arXiv"
	        >
	          <SiArxiv className="w-4 h-4 hover:text-blue-600" />
	        </a>
	      )}
	      {pub.links.doi && (
	        <a
	          href={pub.links.doi}
	          target="_blank"
	          rel="noopener noreferrer"
	          aria-label="DOI"
	        >
	          <LinkIcon className="w-4 h-4 hover:text-blue-600" />
	        </a>
	      )}
	      {pub.links.pptx && (
	        <a
	          href={pub.links.pptx}
	          target="_blank"
	          rel="noopener noreferrer"
	          aria-label="Slides (PPTX)"
	        >
	          <HiOutlinePresentationChartBar className="w-4 h-4 hover:text-red-600" />
	        </a>
	      )}
	      {pub.links.poster && (
	        <a href={pub.links.poster} target="_blank" rel="noopener noreferrer" aria-label="Poster">
	          <FaImage className="w-4 h-4 hover:text-green-600" />
	        </a>
	      )}
	    </div>
	  </li>
	))}
	</ul>

	<p className="text-sm text-gray-500 mt-2">
	<span className="text-blue-600 font-semibold">Blue names</span> indicate student co-authors.
	</p>

	{ /* Talks */ }
	<h3 className="text-xl font-semibold mb-2 mt-6">Invited Talks</h3>
	<ul className="space-y-1 mb-4">
	{invitedTalks.map((talk, index) => (
	  <li key={index} className="flex justify-between items-start gap-4">
	    <div className="flex-1">
	      <span className="font-medium">"{talk.title}"</span>,{" "}
	      <span className="italic text-gray-600 dark:text-gray-300">{talk.location}</span>, {talk.year}.
	    </div>
	    <div className="shrink-0 mt-0.5">
	      {talk.pptx && (
	        <a
	          href={talk.pptx}
	          target="_blank"
	          rel="noopener noreferrer"
	          aria-label="Slides (PPTX)"
	        >
	          <HiOutlinePresentationChartBar className="w-4 h-4 hover:text-red-600" />
	        </a>
	      )}
	      {talk.poster && (
	        <a href={talk.poster} target="_blank" rel="noopener noreferrer" aria-label="Poster">
	          <FaImage className="w-4 h-4 hover:text-green-600" />
	        </a>
	      )}

	    </div>
	  </li>
	))}
	</ul>

	</>
 	);
}