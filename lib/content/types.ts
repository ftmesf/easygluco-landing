export type Tone = "primary" | "secondary" | "accent" | "risk";

export type IconName =
  | "Drop"
  | "Lightning"
  | "Target"
  | "DeviceMobile"
  | "Clock"
  | "ShieldCheck"
  | "ChartLineUp"
  | "HardDrives"
  | "Hand"
  | "Scan"
  | "ShareNetwork"
  | "BatteryCharging"
  | "Scales"
  | "CheckCircle"
  | "WarningCircle"
  | "Stethoscope"
  | "Database"
  | "Package"
  | "Flask"
  | "Timer"
  | "Medal";

export interface SpecRow {
  label: string;
  value: string;
}

export interface FeatureGroup {
  icon: IconName;
  tone: Tone;
  title: string;
  description: string;
}

export interface PainPoint {
  icon: IconName;
  badge: string;
  tone: Tone;
  title: string;
  bullets: [string, string];
}

export interface ClarifyPoint {
  icon: IconName;
  tone: Tone;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
