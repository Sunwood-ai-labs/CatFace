import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeFork, faWater } from "@fortawesome/free-solid-svg-icons";
import type { Model } from "../lib/mock-data";

interface ModelCardProps {
  model: Model;
}

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={model.owner.avatar} />
          <AvatarFallback>{model.owner.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">{model.name}</h3>
          <p className="text-sm text-muted-foreground">{model.owner.name}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-300 to-blue-600 text-white hover:from-blue-400 hover:to-blue-700">
          <FontAwesomeIcon icon={faWater} className="h-3 w-3 mr-1" />
          {model.task}
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} className="h-4 w-4" />
            {model.stars}
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCodeFork} className="h-4 w-4" />
            {model.forks}
          </span>
        </div>
        <span>Updated {model.updatedAt}</span>
      </CardFooter>
    </Card>
  );
}
