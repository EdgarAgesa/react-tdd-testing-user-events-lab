import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const checkbox1 = screen.getByLabelText("Option 1");
  const checkbox2 = screen.getByLabelText("Option 2");
  const checkbox3 = screen.getByLabelText("Option 3");

  expect(checkbox1).toBeInTheDocument();
  expect(checkbox2).toBeInTheDocument();
  expect(checkbox3).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const checkbox1 = screen.getByLabelText("Option 1");
  const checkbox2 = screen.getByLabelText("Option 2");
  const checkbox3 = screen.getByLabelText("Option 3");

  expect(checkbox1).not.toBeChecked();
  expect(checkbox2).not.toBeChecked();
  expect(checkbox3).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");

  userEvent.type(nameInput, "John Doe");
  userEvent.type(emailInput, "johndoe@example.com");

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("johndoe@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const checkbox1 = screen.getByLabelText("Option 1");

  userEvent.click(checkbox1);

  expect(checkbox1).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: /submit/i });

  userEvent.click(submitButton);

  const message = screen.getByText("Thank you for submitting!");

  expect(message).toBeInTheDocument();
});
