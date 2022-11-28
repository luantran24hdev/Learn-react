import React, { Fragment, useState } from "react";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  ValidMessage,
} from "@atlaskit/form";
import ButtonGroup from "@atlaskit/button/button-group";
import LoadingButton from "@atlaskit/button/loading-button";
import styled from "styled-components";
import TextField from "@atlaskit/textfield";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { parseJwt } from "../helpers";
import "react-notifications/lib/notifications.css";
import { useDispatch } from "react-redux";
import { handleEditUser } from "../store/user/action";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export const StyledForm = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export default function UserDetail() {
  const dispath = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const token = useSelector((state) => state.auth.access_token);
  let userObj = parseJwt(token);
  console.log("----------userObj", userObj);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
    }
  }, [location, history, token]);

  const createNotification = (type) => {
    console.log("type", type);
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

  const submit = async (data) => {
    console.log("profile user,");
    createNotification("info");

    // const { email, password } = data;
    const dataObj = {
      user: data,
      userId: userObj.sub,
    };
    dispath(handleEditUser(dataObj)).then((res) => {
      console.log("res", res);
      // if (res.ok) {
      //   history.push("/admin");
      // } else {
      //   console.log(res.error);
      // }
    });
  };

  const format = () => {
    if (userObj && userObj.email) {
      return `Edit : ${userObj.email}`;
    }
  };
  return (
    <div>
      <div>
        <NotificationContainer />
      </div>
      <StyledForm>
        <Form
          onSubmit={(data) => {
            submit(data);
          }}
        >
          {({ formProps, submitting }) => (
            <form {...formProps}>
              <FormHeader title={format()} />
              <FormSection>
                <Field
                  aria-required={true}
                  name="email"
                  label="Password"
                  isRequired
                  defaultValue=""
                >
                  {({ fieldProps, error }) => (
                    <Fragment>
                      <TextField autoComplete="off" {...fieldProps} />
                      {!error && <HelperMessage></HelperMessage>}
                      {error && (
                        <ErrorMessage>
                          This username is already in use, try another one.
                        </ErrorMessage>
                      )}
                    </Fragment>
                  )}
                </Field>
                <Field
                  aria-required={true}
                  name="password"
                  label="Password"
                  defaultValue=""
                  isRequired
                  validate={(value) =>
                    value && value.length < 8 ? "TOO_SHORT" : undefined
                  }
                >
                  {({ fieldProps, error, valid, meta }) => {
                    return (
                      <Fragment>
                        <TextField
                          autoComplete="off"
                          type="password"
                          {...fieldProps}
                        />
                        {error && !valid && (
                          <HelperMessage>
                            Use 8 or more characters with a mix of letters,
                            numbers and symbols.
                          </HelperMessage>
                        )}
                        {error && (
                          <ErrorMessage>
                            Password needs to be more than 8 characters.
                          </ErrorMessage>
                        )}
                        {valid && meta.dirty ? (
                          <ValidMessage>Awesome password!</ValidMessage>
                        ) : null}
                      </Fragment>
                    );
                  }}
                </Field>
              </FormSection>

              <FormFooter>
                <ButtonGroup>
                  <LoadingButton
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                  >
                    Save
                  </LoadingButton>
                </ButtonGroup>
              </FormFooter>
            </form>
          )}
        </Form>
      </StyledForm>
    </div>
  );
}
