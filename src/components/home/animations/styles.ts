import { cn } from "@/lib/utils";

export const styles = {
  badges: {
    beta: cn(
      "cursor-none rounded-full",
      "text-xs sm:text-sm text-primary font-medium",
      "px-2 py-1 sm:px-3 sm:py-1",
      "bg-primary/5 hover:bg-spotify-green/30",
      "transition-colors duration-600 ease",
    ),
  },
};
