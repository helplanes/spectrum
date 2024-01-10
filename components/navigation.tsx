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
import { Star } from 'lucide-react'
import Link from "next/link"

export function Navigation() {
  return (
    <NavigationMenu>
      <Avatar className="mx-auto max-w-7xl flex flex-1 justify-items-start">
        <AvatarImage src="https://spectrumpccoe.github.io/Spectrum-23/image/SpectrumLogo1.png" />
      </Avatar>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Github</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="gap-3 space-y-2 p-6 md:w-[300px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#"
                    >
                      <Star className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                      Spectrum
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">  
                      Someone forgor to add the link, it wont click
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Temp</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6 md:w-[300px] space-y-2 ">
                <ListItem href="/ments/first" title="Spectrum">
                  Temp boilerplate for Spectrum&apos; 24
                </ListItem>
                <ListItem href="/ments/second" title="Spectrum">
                  Temp boilerplate for Spectrum&apos; 24
                </ListItem>
                <ListItem href="/ments/third" title="Spectrum">
                  Temp boilerplate for Spectrum&apos; 24
                </ListItem>
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