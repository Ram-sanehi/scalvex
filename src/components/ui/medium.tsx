import * as React from "react";
import { SVGProps } from "react";

// Lucide does not have a Medium icon, so we use a custom SVG
export const Medium = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="5.5" cy="12" r="4.5" />
    <rect x="12" y="7" width="4" height="10" rx="2" />
    <ellipse cx="18.5" cy="12" rx="2.5" ry="4.5" />
  </svg>
));

Medium.displayName = "Medium";

export default Medium;
