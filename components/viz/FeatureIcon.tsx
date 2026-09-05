import {
  Drop,
  Lightning,
  Target,
  DeviceMobile,
  Clock,
  ShieldCheck,
  ChartLineUp,
  HardDrives,
  Hand,
  Scan,
  ShareNetwork,
  BatteryCharging,
  Scales,
  CheckCircle,
  WarningCircle,
  Stethoscope,
  Database,
  Package,
  Flask,
  Timer,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react";
import type { IconName } from "@/lib/content/types";

const registry: Record<IconName, React.ComponentType<IconProps>> = {
  Drop,
  Lightning,
  Target,
  DeviceMobile,
  Clock,
  ShieldCheck,
  ChartLineUp,
  HardDrives,
  Hand,
  Scan,
  ShareNetwork,
  BatteryCharging,
  Scales,
  CheckCircle,
  WarningCircle,
  Stethoscope,
  Database,
  Package,
  Flask,
  Timer,
  Medal,
};

export function FeatureIcon({
  name,
  className,
  weight = "duotone",
  size = 24,
}: {
  name: IconName;
  className?: string;
  weight?: IconProps["weight"];
  size?: number;
}) {
  const Icon = registry[name];
  return <Icon className={className} weight={weight} size={size} />;
}
