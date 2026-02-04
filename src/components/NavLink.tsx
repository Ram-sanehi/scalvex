import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
        onClick={handleClick}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
