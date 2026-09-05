import type { Tone } from "@/lib/content/types";

type ToneClass = {
  icon: string;
  badge: string;
  footer: string;
  solid: string;
  wash: string;
  bullet: string;
  hover: string;
};

export const toneClasses: Record<Tone, ToneClass> = {
  primary: {
    icon: "bg-brand-primary/10 text-brand-primary",
    badge: "bg-brand-primary/10 text-brand-primary",
    footer: "text-brand-primary",
    solid: "bg-brand-primary text-white shadow-brand-primary/30",
    wash: "from-brand-primary/12",
    bullet: "bg-brand-primary",
    hover: "hover:border-brand-primary/40 hover:shadow-brand-primary/10",
  },
  secondary: {
    icon: "bg-brand-secondary/10 text-brand-secondary",
    badge: "bg-brand-secondary/10 text-brand-secondary",
    footer: "text-brand-secondary",
    solid: "bg-brand-secondary text-white shadow-brand-secondary/30",
    wash: "from-brand-secondary/12",
    bullet: "bg-brand-secondary",
    hover: "hover:border-brand-secondary/40 hover:shadow-brand-secondary/10",
  },
  accent: {
    icon: "bg-brand-accent/10 text-brand-accent",
    badge: "bg-brand-accent/10 text-brand-accent",
    footer: "text-brand-accent",
    solid: "bg-brand-accent text-white shadow-brand-accent/30",
    wash: "from-brand-accent/12",
    bullet: "bg-brand-accent",
    hover: "hover:border-brand-accent/40 hover:shadow-brand-accent/10",
  },
  risk: {
    icon: "bg-brand-risk-bg text-brand-risk",
    badge: "bg-brand-risk-bg text-brand-risk",
    footer: "text-brand-risk",
    solid: "bg-brand-risk text-white shadow-brand-risk/30",
    wash: "from-brand-risk/10",
    bullet: "bg-brand-risk",
    hover: "hover:border-brand-risk/40 hover:shadow-brand-risk/10",
  },
};
