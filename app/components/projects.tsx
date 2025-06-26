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
        <Card>
            <CardHeader>
                <CardTitle>Minesweeper AI</CardTitle>
                <CardDescription>
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant={'secondary'}>Python</Badge>
                    <Badge variant={'secondary'}>AI</Badge>
                    </div>
                    With a team of 3, our group competed in a class wide tournament where we created
                    our own AI to beat Minesweeper. Our AI managed to beat boards with a 66% win rate.
                    Our AI used advanced-constraint propagation and increased scores by 37% for 16x16 boards.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full mb-1">
                    <Image 
                        src="/MinesweeperAI.png"
                        alt="Minesweeper Project"
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