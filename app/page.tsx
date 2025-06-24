import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"


export default function Page() {
  return (
    <section>
      <Image
        src="/icon.png"
        alt="Profile Picture"
        width={125}
        height={125}
        className='mb-1'
      />
      <h1 className="mb-5 text-2xl font-semibold tracking-tighter">
        Tim Dacalos
      </h1>
    <p className="mb-4">
      {`Hey everyone, my name is Tim. I'm a fourth-year Computer Science student at the University of California: Irvine, specializing in Systems and Software. I'm passionate about understanding how technology works at its core—from the hardware/software interface to building robust, high-performance systems.`}
    </p>
    <p className="mb-4">
      {`I initially gravitated towards coding to help others, and my journey has led me to explore low-level programming and operating systems. I'm actively seeking summer internships to apply and expand these skills.`}
    </p>
    <p className='mb-4'>{`Outside of the computer, you'll find me indulging in J-RPGs and discussing the newest anime.`}</p>
    <h2 className="mb-2 text-xl font-semibold tracking-tighter">
        Skills
    </h2>
    <Badge variant="secondary">React</Badge>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
