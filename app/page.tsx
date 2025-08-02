import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { Skills } from './components/skills'
import { Projects } from './components/projects'


export default function Page() {
  return (
    <section>
      <Image
        src="/icon-col.png"
        alt="Profile Picture"
        width={125}
        height={125}
        quality={100}
        className='mb-1'
      />
      <h1 className="mb-5 text-2xl font-semibold tracking-tighter">
        Tim Dacalos
      </h1>
    <h2 className="mb-1 text-xl font-semibold tracking-tighter">
        About
    </h2>
    <p className="mb-4">
      {`Hey everyone, my name is Tim. I'm a fourth-year Computer Science student at the University of California: Irvine, specializing in Systems and Software. I'm passionate about understanding how technology works at its core—from the hardware/software interface to building robust, high-performance systems.`}
    </p>
    <p className="mb-4">
      {`I initially gravitated towards coding to help others, and my journey has led me to explore low-level programming, operating systems, and web development. I'm actively seeking summer internships to apply and expand these skills.`}
    </p>
    <p className='mb-4'>{`Outside of the computer, you'll find me indulging in J-RPGs and discussing the newest anime.`}</p>
    <h2 className="mb-3 text-xl font-semibold tracking-tighter">
        Education
    </h2>
    <div className="mb-8 flex gap-x-4 items-start justify-between">
      <div className="flex gap-x-4">
        <Image
          src="/uci.png"
          alt="Profile Picture"
          width={60}
          height={60}
          quality={100}
          className='mb-1 h-[60px] w-[60px] object-contain'
        />
        <div>
          <b className='primary'>University of California, Irvine</b>
          <br/>
          <p className='secondary'>Bachelor's in Computer Science</p>
        </div>
      </div>
      <div>
        <p className='text-s'>Sep 2022 – Present</p>
      </div>
    </div>
    <h2 className="mb-3 text-xl font-semibold tracking-tighter">
        Technologies
    </h2>
      <div className="mb-8">
        <Skills/>
      </div>
    <h2 className="mb-3 text-xl font-semibold tracking-tighter">
        Projects
    </h2>
      <div className="mb-8">
        <Projects/>
      </div>
    /*<h2 className="mb-3 text-xl font-semibold tracking-tighter">
        Blog Posts
    </h2>
      <div className="mb-4">
        <BlogPosts />
      </div>*/
    </section>
  )
}
