import { render, fireEvent, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  //popover starts out hidden

  const nullPopOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();

  //popover appears when we mouseover checkbox

  const termsandconditions = screen.getByText(/terms and conditions/i);

  await user.hover(termsandconditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when we mouseout
  await user.unhover(termsandconditions);
  const nullPopOverAgain = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopOverAgain).not.toBeInTheDocument();
});
