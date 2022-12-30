import React from "react";
// import { useHistory, useLocation } from "react-router-dom";
import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import __noop from "@atlaskit/ds-lib/noop";
import styled from "styled-components";

import PageHeader from "@atlaskit/page-header";

const breadcrumbs = (
  <Breadcrumbs onExpand={__noop}>
    <BreadcrumbsItem text="Project" key="project" />
    <BreadcrumbsItem text="Documents" key="documents" />
  </Breadcrumbs>
);
export const StylePageHeader = styled.div`
  // ${(props) => {
    //   if (props.isRenderHeader.isRenderHeader) {
    //     return `
    //    display:flex
    //     `;
    //   } else {
    //     return `
    //   display:none
    //   `;
  }}}
`;
export default function Header() {
  return (
    <StylePageHeader>
      <PageHeader breadcrumbs={breadcrumbs}></PageHeader>
    </StylePageHeader>
  );
}
