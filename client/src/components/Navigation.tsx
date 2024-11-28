import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCat } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onSearch: (query: string) => void;
}

export default function Navigation({ onSearch }: NavigationProps) {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCat} className="text-3xl text-blue-500" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">CatFace</span>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                  Models
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                  Datasets
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                  Spaces
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex-1 max-w-xl relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search models, datasets, users..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
