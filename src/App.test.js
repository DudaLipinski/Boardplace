import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateAccount } from "./components/CreateAccount";
import { Provider } from "react-redux";
import state from "./state";
import { BrowserRouter } from "react-router-dom";

test("bla", () => {
  render(
    <Provider store={state}>
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    </Provider>
  );

  userEvent.type(screen.getByLabelText("First name"), "Maria");
  userEvent.type(screen.getByLabelText("Last name"), "Matucheski");
  userEvent.type(screen.getByLabelText("Age"), "24");
  userEvent.type(screen.getByLabelText("E-mail"), "dudalipinski@hotmail.com");
  userEvent.type(screen.getByLabelText("Password"), "12345678");
  // userEvent.type(screen.getByLabelText("Confirm password"), "12345678");

  userEvent.click(screen.getByRole("button", { name: "Create" }));
  expect(screen.getByTestId("user-details")).toBeInTheDocument();

  expect(screen.getByTestId("user-details__name")).toHaveTextContent(
    "Maria Matucheski"
  );
});
