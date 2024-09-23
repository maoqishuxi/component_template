import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Nav } from "@/types/nav";
import React from "react";

export function Bread({ navs }: { navs: Nav[] }) {
  return (
    <Breadcrumb className="mb-8 text-base-content">
      <BreadcrumbList>
        {navs.map((nav: Nav, idx: number) => (
          <React.Fragment key={nav.title || idx}>
            <BreadcrumbItem className="cursor-pointer">
              {nav.active ? (
                <BreadcrumbPage className="text-primary">
                  {nav.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  className="text-base-content hover:text-primary"
                  href={nav.url}
                >
                  {nav.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!nav.active && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
