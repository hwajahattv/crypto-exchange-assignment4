import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/auth/Login";
import Blog from "./components/Blog";

test("renders Blog page with a button", () => {
    render(<Blog />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
});

test("renders a table with 5 columns in the first row of table", () => {
    render(<Blog />);

    const tableElement = screen.getByRole("table");
    const firstRow = tableElement.querySelector("tr");
    const columns = firstRow.querySelectorAll("th");

    expect(columns.length).toBe(5);
});

// test("renders a table with 2 SVG icons in the last column of each row (except the first row)", () => {
//     render(<Blog />);

//     const tableElement = screen.getByRole("table");
//     const rows = tableElement.querySelectorAll("tr");

//     // Start loop from index 1 to skip the first row
//     // for (let i = 1; i < rows.length; i++) {
//     const lastColumn = rows[1].querySelectorAll("td")[4];
//     const svgIcons = lastColumn.querySelectorAll("svg");

//     expect(svgIcons.length).toBe(2);
//     // }
// });

// test("Check if there are 2 input fields on login page", () => {
//     const { getByLabelText } = render(<Login />);
//     const emailInput = getByTestId("email");
//     const passwordInput = getByTestId("password");

//     fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
//     fireEvent.change(passwordInput, { target: { value: "1234" } });

//     expect(emailInput.value).toBe("test@gmail.com");
//     expect(passwordInput.value).toBe("1234");
// });
