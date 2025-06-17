import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names conditionally and merges Tailwind classes intelligently.
 * @example cn("p-4", isDark && "bg-black")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
