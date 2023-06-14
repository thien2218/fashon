import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border border-input hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary"
			},
			size: {
				default: "ks:h-10 ks:px-4 sm:h-9 sm:px-4 h-8 py-2 px-3 rounded-md",
				sm: "ks:h-9 ks:px-3 h-8 px-2.5 rounded",
				lg: "ks:h-11 ks:px-8 h-10 px-7 rounded-md"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
