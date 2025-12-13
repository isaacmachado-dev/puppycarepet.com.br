import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-white outline-2 outline-transparent rounded-md p-2 pl-4  text-sm font-bold leading-5 w-80 h-10 hover:text-gray-200/50 hover:text-gray-800 hover:bg-gray-200/50 transition-colors duration-300   leading-5",
        className
      )}
      {...props}
    />
  )
}

export { Input }
