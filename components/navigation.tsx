"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage  } from "@/components/ui/avatar"
import { Terminal } from 'lucide-react'
import Link from "next/link"

export function Navigation() {
  return (
    <NavigationMenu className="">
      <a className="mx-auto max-w-7xl flex flex-1 justify-items-start" href="/">
        <Avatar>
          <AvatarImage src="https://spectrumpccoe.github.io/Spectrum-23/image/SpectrumLogo1.png" />
        </Avatar>
      </a>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger>Events</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-10 md:w-[350px] space-y-2">
                <ListItem href="/electrica" title="Electrica' 24" className="bg-stone-300">
                  Electrica is based on knowledge of Electrical and Electronics Engineering concepts
                </ListItem>
                <ListItem href="/" title="Brain Dasher' 24" className="bg-red-300">
                  Coming Soon
                </ListItem>
                <ListItem href="/" title="Treasure Hunt' 24" className="bg-orange-500">
                  Coming Soon
                </ListItem>
                <ListItem href="/" title="C paradox' 24" className="bg-yellow-400">
                  Coming Soon
                </ListItem>
                <ListItem href="/" title="IKS' 24" className="bg-green-400">
                  Coming Soon
                </ListItem>
                <ListItem href="/" title="Debate' 24" className="bg-blue-400">
                  Coming Soon
                </ListItem>
                <ListItem href="/" title="Bottle Rocket' 24" className="bg-purple-400">
                  Coming Soon
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Misc</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="gap-3 space-y-2 p-6 md:w-[300px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#"
                    >
                      <Terminal className="h-6 w-6" />
                      <div className="mb-2 mt-2 text-lg font-medium">
                      Team
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">  
                      The team behind Spectrum!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href="/" 
          {...props}
        >
          <div className="z-20 text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
export default Navigation;

ListItem.displayName = "ListItem"