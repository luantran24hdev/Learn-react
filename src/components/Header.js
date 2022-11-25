import React from "react";

import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import __noop from "@atlaskit/ds-lib/noop";

import PageHeader from "@atlaskit/page-header";

const breadcrumbs = (
  <Breadcrumbs onExpand={__noop}>
    <BreadcrumbsItem text="Project" key="project" />
    <BreadcrumbsItem text="Documents" key="documents" />
  </Breadcrumbs>
);

export default function Header() {
  return <PageHeader breadcrumbs={breadcrumbs}></PageHeader>;
}
