import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// This utility function merges class names and removes duplicates.
// It uses clsx to handle conditional class names and twMerge to combine Tailwind CSS classes
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}