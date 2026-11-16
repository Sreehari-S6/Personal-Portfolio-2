import { describe, test, expect, beforeEach, jest } from "@jest/globals";

import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../components/ThemeProvider";
import { useTheme } from "../components/useTheme";

function TestComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="current-theme">{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  test("uses dark theme by default", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent("dark");
  });

  test("switches from dark to light theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));

    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
  });

  test("saves the selected theme in localStorage", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));

    expect(localStorage.getItem("portfolio-theme")).toBe("light");
  });

  test("loads the saved theme from localStorage", () => {
    localStorage.setItem("portfolio-theme", "light");

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
  });

  test("updates the document theme attribute", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    fireEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });

  test("throws an error when useTheme is outside ThemeProvider", () => {
    function InvalidComponent() {
      useTheme();
      return null;
    }

    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

    try {
      expect(() => render(<InvalidComponent />)).toThrow(
        "useTheme must be used inside ThemeProvider",
      );
    } finally {
      consoleError.mockRestore();
    }
  });
});
