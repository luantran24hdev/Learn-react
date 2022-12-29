import React from "react";
import PersonCircleIcon from "@atlaskit/icon/glyph/person-circle";
import { useHistory, useLocation } from "react-router-dom";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import styled from "styled-components";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
import { useSelector } from "react-redux";
import { parseJwt } from "../helpers";

export const StyledTopHeader = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  ${(props) => {
    if (!props.isRenderTopHeader.isRenderTopHeader) {
      return `
     display:flex
      `;
    } else {
      return `
    display:none

    `;
    }
  }}
`;

const TopHeader = (isRenderTopHeader) => {
  const token = useSelector((state) => state.auth.access_token);
  const history = useHistory();
  let userObj = parseJwt(token);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token_login");
    history.push("/login");
  };
  const handleRedirectProfile = (e) => {
    e.preventDefault();

    if (userObj && userObj.sub) {
      history.push(`/user/${userObj.sub}`);
    }
  };

  return (
    <StyledTopHeader isRenderTopHeader={isRenderTopHeader}>
      <DropdownMenu
        color="text.secondary"
        trigger={userObj && userObj.email ? userObj.email : ""}
      >
        <DropdownItemGroup>
          <DropdownItem
            onClick={handleRedirectProfile}
            elemAfter={<PersonCircleIcon label="" />}
          >
            Profile{" "}
          </DropdownItem>

          <DropdownItem
            elemAfter={<SignOutIcon label="" />}
            onClick={handleLogout}
          >
            Logout
          </DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </StyledTopHeader>
  );
};

export default TopHeader;
