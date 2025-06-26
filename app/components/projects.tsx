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
        <Card>
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
    )
}