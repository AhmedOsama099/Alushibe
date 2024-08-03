import { FC } from "react"

import { ChildrenProp } from "@/types/general"
import { cn } from "@/lib/utils"

interface StandardWrapperProps extends ChildrenProp {
  className?: string
}

const StandardWrapper: FC<StandardWrapperProps> = ({ children, className }) => {
  return (
    <section className={cn("flex  w-[100vw] justify-center", className)}>
      <div className="w-[85vw]">{children}</div>
    </section>
  )
}

export default StandardWrapper
