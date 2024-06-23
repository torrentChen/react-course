import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-sky-200 dark:bg-gray-600", className)}
      {...props}
    />
  )
}

export { Skeleton }
