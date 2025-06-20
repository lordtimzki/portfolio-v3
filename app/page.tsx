import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Tim Dacalos
      </h1>
      <p className="mb-4">
        {`
        Hey everyone, my name is Tim. I'm a fourth year Computer Science 
        student at the University of California: Irvine specializing in 
        systems and software. After years of rigorous academic work, 
        I am looking for summer internships.`}
      </p>
      <p>{`Outside of the computer, 
        I enjoy endulging in J-RPGs and discussing about anime.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
