import { BookOpen, FileText, LinkIcon, MapPin, Phone, Mail } from "lucide-react";


export default function BioSection() {
  return (
    <>
    <h2 className="text-2xl font-semibold mb-2">Bio</h2>

    { /* Bio Blurb */ }
    <p className="mb-4 text-gray-800 dark:text-gray-200">
      I am an Assistant Professor of Computer Science at The College of Wooster.
      My research explores the intersection of graph theory and software engineering, particularly developing efficient graph mining and network analysis algorithms for large-scale software ecosystems.
      I am passionate about teaching and mentoring the next generation of computer scientists.
      { /* I am passionate about interdisciplinary collaboration and mentoring the next generation of computer scientists. 
      I particularly enjoy finding clean and aesthetic solutions to difficult problems in a manner that is easy to present and explain.*/ }
      <br/><br/>
      
      I earned my Ph.D. in Computer Science from Kent State University in 2020, supervised by <a className="text-blue-600 hover:underline" href="https://www.cs.kent.edu/~dragan/">Dr. Feodor Dragan</a>.
      My research centered on injective hulls, Helly graphs, and δ-hyperbolic graphs. δ-Hyperbolic graphs are metrically closer to a tree and are common in many real-world networks.
      We explored facility location and network analysis problems, focusing on the eccentricity e(v) of a vertex, and developed efficient algorithms for calculating eccentricities.
      During this time, I also worked as a software engineer consultant for GraphSQL Inc.

      <br/><br/>

      Before that, I studied computer science at The University of Akron.
      My Master's Thesis, advised by <a className="text-blue-600 hover:underline" href="https://mlcollard.net/">Dr. Michael Collard</a>, focused on software evolution - specifically, I studied developer habits in branch naming conventions and accurately detecting the branch to which a commit was originally made.
      During this time, I worked under two NSF grants on development and quality assurance for the <a className="text-blue-600 hover:underline" href="https://www.srcml.org/">srcML framework</a>. I was also a software engineer at BGI LLC, where I developed data analysis tools for the US Navy.

      <br/><br/>
      A fun fact: My Erdõs number is 3 (Paul Erdõs → Dieter Kratsch → Feodor Dragan → Heather Guarnera).

      <br/><br/>
      Beyond teaching and research, I enjoy family time with my spouse Drew (a.k.a. "the other Dr. Guarnera") and our 3 year old daughter Parker - we love board games, video games, and movie nights.
      I also enjoy a good cup of coffee and any reason to get outdoors, but kayaking and birding are among my favorite.
    </p>
    

    { /* Contact Info */ }
    <div className="w-full bg-blue-50 dark:bg-blue-900/50 mt-6 shadow-inner rounded-lg p-4 text-sm text-blue-900 dark:text-blue-200 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Contact</h3>
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-blue-600" />
        <span>Taylor Hall 303, The College of Wooster</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5 text-blue-600" />
        <a href="tel:+13302632308" className="hover:underline text-blue-700 dark:text-blue-400">
          (330)-263-2308
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-blue-600" />
        <a href="mailto:hguarnera@wooster.edu" className="hover:underline text-blue-700 dark:text-blue-400">
          hguarnera@wooster.edu
        </a>
      </div>
    </div>
    </>
  );
}