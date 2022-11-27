import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
export const StyledForm = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export default function Register() {
  const history = useHistory();
  const location = useLocation();
  const dispath = useDispatch();


  const token = useSelector((state) => state.auth.access_token);
  console.log('token',token);
  useEffect(() => {
    if (token) {
      history.push("/admin");
    } else {
    }
  }, [location, history, token]);

  const submit = async (data) => {  
  const { email, password } = data;
    dispath(handleLogin({ email, password })).then((res) => {
      if (res.ok) {
        history.push("/admin");
      } else {
        console.log(res.error);
      }
    });
  };
  return (
    <StyledForm>
      <Form
        onSubmit={(data) => {
          submit(data);
        }}
      >
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <FormHeader title="Sign in" />
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
                <Button appearance="subtle">Sign up</Button>
                <LoadingButton
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Submit
                </LoadingButton>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </StyledForm>
  );
}
