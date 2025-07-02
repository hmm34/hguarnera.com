import { bookClub } from "@/data/bookClub";
import { courses } from "@/data/courses";
import { mentoring } from "@/data/mentoring";
import { workshops } from "@/data/workshops";

import InstitutionLogo from "@/components/InstitutionLogo";

export default function TeachingSection () {
	return (
		<>
		<h2 className="text-2xl font-semibold mb-4">Teaching</h2>

		<p className="mb-4 text-gray-800 dark:text-gray-200">
		I love to mentor and teach. As a first-gen college student, I had some wonderful professors who were beyond helpful, and I endeavor to do the same for my students.
		I strive for inclusive, engaging, high-impact evidence-based teaching practices.
		As a lifelong learner, I continuously reflect and update my practices based on experience, professional development, and new research in the field.
		I particularly enjoy finding clean and aesthetic solutions to difficult problems in a manner that is easy to present and explain.
		</p>

		{ /* Main courses */ }
		<section className="mb-6">
		<h3 className="text-xl font-semibold mb-2">Courses Taught</h3>

		<p className="mb-4 text-gray-800 dark:text-gray-200">
		I have experience as a primary lecturer in a variety of undergraduate and graduate-level classes,
		with class sizes ranging from 5 students to 75+ students, at institutions including The University of Akron,
		Kent State University, and The College of Wooster. I can teach any course in the IEEE ACM Curriculum, but my favorite topics are in algorithmic computer science and its applications in software engineering.
		This includes algorithms, algorithmic graph theory, introductory series, and special topics such as software ecosystems.
		</p>

		<ul className="space-y-1">
		{courses.map((course, idx) => (
		  <li key={idx} className="flex flex-col gap-1">
		    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
		      <span className="max-w-full sm:max-w-[60%]">{course.name}</span>
		      <div className="flex flex-wrap items-center gap-2">
		        <span className="text-xs sm:text-sm text-right">
		          {course.terms.map((entry, subIdx) => (
		            <span key={subIdx}>
		              {entry.link ? (
		                <a
		                  href={entry.link}
		                  target="_blank"
		                  rel="noopener noreferrer"
		                  className="text-blue-600 hover:underline"
		                >
		                  {entry.term}
		                </a>
		              ) : (
		                <span className="text-black dark:text-gray-300">{entry.term}</span>
		              )}
		              {subIdx < course.terms.length - 1 ? ", " : ""}
		            </span>
		          ))}
		        </span>
		        <InstitutionLogo institution={course.institution} />
		      </div>
		    </div>
		  </li>
		))}
		</ul>
		</section>


		{ /* Research project courses */ }
		<section className="mb-6">
		<h3 className="text-xl font-semibold mb-2">Mentoring</h3>
		<p className="mb-4 text-gray-800 dark:text-gray-200">
		I actively mentor undergraduate and graduate students in research projects, academic career development, and professional growth.
		I have advised over 25 students on a year-long senior independent study research project and 5 students on sophomore research projects.
		I've also served as a mentor to 15 students working on internships, as well as advising 2-5 students per year in teaching assistantships.
		</p>

		<ul className="space-y-1">
		{mentoring.map((course, idx) => (
		  <li key={idx} className="flex flex-col gap-1">
		    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
		      <span className="max-w-full sm:max-w-[60%]">{course.name}</span>
		      <div className="flex flex-wrap items-center gap-2">
		        <span className="text-xs sm:text-sm text-right">
		          {course.terms.map((entry, subIdx) => (
		            <span key={subIdx}>
		              {entry.link ? (
		                <a
		                  href={entry.link}
		                  target="_blank"
		                  rel="noopener noreferrer"
		                  className="text-blue-600 hover:underline"
		                >
		                  {entry.term}
		                </a>
		              ) : (
		                <span className="text-black dark:text-gray-300">{entry.term}</span>
		              )}
		              {subIdx < course.terms.length - 1 ? ", " : ""}
		            </span>
		          ))}
		        </span>
		        <InstitutionLogo institution={course.institution} />
		      </div>
		    </div>
		  </li>
		))}
		</ul>
		</section>

		{ /* Academic advising */ }
		<section className="mb-6">
		<h3 className="text-xl font-semibold mb-2">Academic Advising</h3>
		<p className="mb-4 text-gray-800 dark:text-gray-200">
		I am the "official" advisor for anywhere between 10-30 students in a semester.
		We meet at least once per semester to talk about a four-year course plan, and more often than not, other topics such as: technical resumes and interviews, grad school applications, and after-graduation plans.
		I'm also the "unofficial" advisor for drop-by computer science students who want to talk out the big life questions.
		</p>
		</section>


		{ /* Professional Development */ }
		<section className="mb-6">
		<h3 className="text-xl font-semibold mb-4">Professional Development</h3>

		{/* Workshops */}
		<div className="mb-6">
		<h4 className="text-lg font-semibold mb-2">Workshops</h4>
		<p className="mb-4 text-gray-800 dark:text-gray-200">
		I'm a very serious life-long learner! Here is a non-inclusive list of some professional development trainings and learning communities for teaching and mentoring that I've engaged in over the years.
		</p>

		<ul className="space-y-1 text-gray-800 dark:text-gray-200">
		{workshops.map(({ title, venue, year }, idx) => (
		  <li key={idx} className="flex justify-between items-center">
		    <div className="max-w-[85%]">
		      <em>{title}</em>
		      {venue && (
		        <span className="text-sm text-gray-600 dark:text-gray-400">, {venue}</span>
		      )}
		    </div>
		    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
		      {year}
		    </span>
		  </li>
		))}
		</ul>
		</div>

		{/* Professional Development Book Club */}
		<div>
		<h4 className="text-lg font-semibold mb-2 mt-6">Book Club</h4>
		<p className="mb-4 text-gray-800 dark:text-gray-200">
		I also engage in pedagogical book clubs, and sometimes organize them if I see that an interesting new book came out. Some recent books or excerpts we discussed include:
		</p>
		<ul className="space-y-1 text-gray-800 dark:text-gray-200">
		{bookClub.map((book, idx) => (
		  <li key={idx} className="flex justify-between items-center">
		    <div className="max-w-[85%]">
		      <div><span>"{book.title}"</span>
		      <span className="text-sm text-gray-600 dark:text-gray-400">, by {book.author}</span>
		    </div>
		      
		    </div>
		    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
		      {book.year}
		    </span>
		  </li>
		))}
		</ul>

		</div>
		</section>
		</>
		);
}