import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "app/components/ui/card"
import Image  from 'next/image'
import { Badge } from "app/components/ui/badge"
export function Projects(){
    return(
        <>
        <Card className="mb-4">
            <CardHeader>
                <CardTitle>NextGenPicks</CardTitle>
                <CardDescription>
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant={'secondary'}>Swift</Badge>
                    <Badge variant={'secondary'}>Python</Badge>
                    <Badge variant={'secondary'}>Firebase</Badge>
                    </div>
                    NextGenPicks is a mobile app that allows users to quickly find the best NBA Props for the day
                    without having to scour the internet for the best bets.
                </CardDescription>
                    <CardAction><a href="https://github.com/lordtimzki/nextgenpicks" target="_blank">↗</a></CardAction>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full mb-1">
                    <Image 
                        src="/NextGenPicks.png"
                        alt="NextGenPicks Project"
                        fill
                        quality={100}
                        className="object-cover" 
                    />
                </div>
            </CardContent>
        </Card>   
        <Card className="mb-4">
            <CardHeader>
                <CardTitle>ShazAnime</CardTitle>
                <CardDescription>
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant={'secondary'}>React</Badge>
                    <Badge variant={'secondary'}>JavaScript</Badge>
                    <Badge variant={'secondary'}>Python</Badge>
                    <Badge variant={'secondary'}>Render</Badge>
                    <Badge variant={'secondary'}>Tailwind CSS</Badge>
                    </div>
                    ShazAnime is a website that allows users to find visuals of anime openings or endings just like Shazam.
                </CardDescription>
                    <CardAction><a href="shazanime.vercel.app" target="_blank">↗</a></CardAction>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full mb-1">
                    <Image 
                        src="/ShazAnime.png"
                        alt="ShazAnime Project"
                        fill
                        quality={100}
                        className="object-cover" 
                    />
                </div>
            </CardContent>
        </Card>  
        <Card className="mb-4">
            <CardHeader>
                <CardTitle>Seiyuu Hub</CardTitle>
                <CardDescription>
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant={'secondary'}>React</Badge>
                    <Badge variant={'secondary'}>Tailwind CSS</Badge>
                    <Badge variant={'secondary'}>Supabase</Badge>
                    </div>
                    Seiyuu Hub is a website where users can discuss
                    and discover content about their favorite seiyuu (japanese voice actor).
                    Users can create posts, view posts, and interact with them by commenting or
                    upvoting.
                </CardDescription>
                    <CardAction><a href="https://seiyuuhub.netlify.app/" target="_blank">↗</a></CardAction>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full mb-1">
                    <Image 
                        src="/SeiyuuHub.png"
                        alt="SeiyuuHub Project"
                        fill
                        quality={100}
                        className="object-cover" 
                    />
                </div>
            </CardContent>
        </Card>
        <Card className="mb-4">
            <CardHeader>
                <CardTitle>Fabflix Movie Database</CardTitle>
                <CardDescription>
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant={'secondary'}>JavaScript</Badge>
                    <Badge variant={'secondary'}>HTML/CSS</Badge>
                    <Badge variant={'secondary'}>MySQL</Badge>
                    <Badge variant={'secondary'}>AWS (EC2)</Badge>
                    <Badge variant={'secondary'}>Docker</Badge>
                    <Badge variant={'secondary'}>Apache Tomcat</Badge>
                    </div>
                    Fabflix is a full stack application built from scratch and powered by AWS.
                    It utilizes over 50K rows of movie data and is compromised of over 20 features,
                    including a secure login system, full-text search, cart checkout, and reCAPTCHA.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full mb-1">
                    <Image 
                        src="/Fabflix.png"
                        alt="Fabflix Project"
                        fill
                        quality={100}
                        className="object-cover" 
                    />
                </div>
            </CardContent>
        </Card>
        </>
    )
}