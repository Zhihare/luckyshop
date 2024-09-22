"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
    >(({ className, ...props }, ref) => (
        <ScrollAreaPrimitive.Root
            ref={ref}
            className={cn("relative h-60 w-full overflow-hidden", className)}>
            
    <ScrollAreaPrimitive.Viewport className="h-full w-full" {...props}/>
    <ScrollAreaPrimitive.Scrollbar orientation="vertical" className="w-2 bg-gray-200 min-h-full rounded">
      <ScrollAreaPrimitive.Thumb className="bg-blue-500 h-10 rounded"/>
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>

));

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea };
