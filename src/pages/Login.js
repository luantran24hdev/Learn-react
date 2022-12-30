import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  ValidMessage,
} from "@atlaskit/form";
import styled from "styled-components";
import ButtonGroup from "@atlaskit/button/button-group";
import LoadingButton from "@atlaskit/button/loading-button";
import Button from "@atlaskit/button/standard-button";
import { useDispatch } from "react-redux";
import TextField from "@atlaskit/textfield";
import { handleLogin } from "../store/auth/action";
import DetailViewIcon from "@atlaskit/icon/glyph/detail-view";

export const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledForm = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 25px;
  border-radius: 5px;
`;
export const StyleFormHeader = styled.div`
  font-size: 10px;
`;

export default function Login() {
  const history = useHistory();
  // const location = useLocation();
  const dispath = useDispatch();

  function handleRedirectRegister(e) {
    e.preventDefault();
    history.push("/register");
  }
  // const token = useSelector((state) => state.auth.access_token);
  // useEffect(() => {
  //   if (token) {
  //     history.push("/admin");
  //   } else {
  //     // history.push("/login");
  //   }
  // }, [location, history, token]);

  const submit = async (data) => {
    const { email, password } = data;
    dispath(handleLogin({ email, password })).then((res) => {
      console.log("----------res", res);
      if (res.ok) {
        alert("Login success!");
        history.push("/user/all");
      } else {
        console.log(res.error);
      }
    });
  };
  return (
    <StyledWrapper>
      <StyledForm>
        <Form
          onSubmit={(data) => {
            submit(data);
          }}
        >
          {({ formProps, submitting }) => (
            <form {...formProps}>
              <StyleFormHeader>
                <FormHeader title="Please login to the dashboard" />
              </StyleFormHeader>
              <FormSection>
                <Field
                  aria-required={true}
                  name="email"
                  label="Email"
                  isRequired
                  defaultValue=""
                >
                  {({ fieldProps, error }) => (
                    <Fragment>
                      <TextField autoComplete="off" {...fieldProps} />
                      {!error && (
                        <HelperMessage>
                          {/* You can use letters, numbers and periods. */}
                        </HelperMessage>
                      )}
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
                    value && value.length < 6 ? "TOO_SHORT" : undefined
                  }
                >
                  {({ fieldProps, error, valid, meta }) => {
                    return (
                      <Fragment>
                        <TextField type="password" {...fieldProps} />
                        {error && !valid && (
                          <HelperMessage>
                            {/* Use 8 or more characters with a mix of letters,
                          numbers and symbols. */}
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
                  <Button
                    onClick={handleRedirectRegister}
                    size="small"
                    appearance="subtle-link"
                  >
                    Forgot password
                  </Button>
                  <LoadingButton
                    iconBefore={<DetailViewIcon label="" size="small" />}
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                  >
                    Login
                  </LoadingButton>
                </ButtonGroup>
              </FormFooter>
            </form>
          )}
        </Form>
      </StyledForm>
    </StyledWrapper>
  );
}
