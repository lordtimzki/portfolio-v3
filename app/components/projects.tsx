'use client'

import { useState } from "react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "app/components/ui/card"
import Image  from 'next/image'
import { Badge } from "app/components/ui/badge"
import { Button } from "app/components/ui/button"

const categories = ['Web/Mobile'] as const
type Category = typeof categories[number]

type Project = {
    title: string
    category: Category
    tags: string[]
    description: string
    link?: string
    image: string
    alt: string
}

const projects: Project[] = [
    {
        title: 'NextGenPicks',
        category: 'Web/Mobile',
        tags: ['SwiftUI', 'Firebase', 'Python'],
        description: `An iOS app that automates 200+ NBA player prop analyses every day.
                    A Python ranking pipeline combines matchup strength with historical hit rates,
                    improving pick hit rate by 20% over the previous heuristic in a 3-week backtest,
                    and cached, hash-indexed lookups cut the daily fetch from 10 minutes to 3.`,
        link: 'https://github.com/lordtimzki/nextgenpicks',
        image: '/NextGenPicks.png',
        alt: 'NextGenPicks Project',
    },
    {
        title: 'ShazAnime',
        category: 'Web/Mobile',
        tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'Docker', 'Render', 'Tailwind CSS'],
        description: `Shazam for anime openings: it listens through your microphone and pulls up the matching
                    opening video from the AnimeThemes API in under 3 seconds. A multi-strategy matching pipeline
                    resolves Japanese/English title mismatches across APIs, and migrating to ShazamIO cut
                    recognition time from 7s to 3s while eliminating all hosting and API costs.`,
        link: 'https://shazanime.vercel.app',
        image: '/ShazAnime.png',
        alt: 'ShazAnime Project',
    },
    {
        title: 'Seiyuu Hub',
        category: 'Web/Mobile',
        tags: ['React', 'Tailwind CSS', 'Supabase'],
        description: `Seiyuu Hub is a website where users can discuss
                    and discover content about their favorite seiyuu (Japanese voice actor).
                    Users can create posts, view posts, and interact with them by commenting or
                    upvoting.`,
        link: 'https://seiyuuhub.netlify.app/',
        image: '/SeiyuuHub.png',
        alt: 'SeiyuuHub Project',
    },
    {
        title: 'Fabflix Movie Database',
        category: 'Web/Mobile',
        tags: ['Java', 'JavaScript', 'MySQL', 'AWS (EC2)', 'Docker', 'Kubernetes', 'Apache Tomcat'],
        description: `A full-stack movie database built from scratch, serving 50,000+ movies loaded through
                    a Java SAX-based ETL pipeline. It runs as a load-balanced, multi-service deployment on
                    AWS EC2 with Docker and Kubernetes, backed by a MySQL primary-replica setup that keeps
                    queries working when a replica fails. Features include secure login, full-text search,
                    cart checkout, and reCAPTCHA.`,
        image: '/Fabflix.png',
        alt: 'Fabflix Project',
    },
]

export function Projects(){
    const [selected, setSelected] = useState<Category>('Web/Mobile')

    return(
        <>
        <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
                <Button
                    key={category}
                    size="sm"
                    variant={selected === category ? 'default' : 'outline'}
                    aria-pressed={selected === category}
                    onClick={() => setSelected(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
        {projects.filter((project) => project.category === selected).map((project) => (
            <Card key={project.title} className="mb-4">
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                        <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant={'secondary'}>{tag}</Badge>
                        ))}
                        </div>
                        {project.description}
                    </CardDescription>
                    {project.link && (
                        <CardAction><a href={project.link} target="_blank">↗</a></CardAction>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="relative aspect-video w-full mb-1">
                        <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            quality={100}
                            className="object-cover"
                        />
                    </div>
                </CardContent>
            </Card>
        ))}
        </>
    )
}
