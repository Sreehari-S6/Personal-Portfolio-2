import { describe, test, expect, beforeEach } from "@jest/globals";

import { render, screen, fireEvent, within } from "@testing-library/react";

import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";

describe("Navbar Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const renderNavbar = () =>
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );

  test("renders the logo", () => {
    renderNavbar();

    expect(screen.getByText("SREEHARI")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    renderNavbar();

    expect(screen.getAllByRole("link", { name: "Home" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "About" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Skills" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Projects" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Contact" }).length).toBeGreaterThan(0);
  });

  test("opens the mobile navigation menu", () => {
    renderNavbar();

    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));

    const mobileMenu = document.getElementById("mobile-navigation");

    expect(mobileMenu).toBeInTheDocument();
    expect(within(mobileMenu!).getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  test("closes the mobile menu when a navigation link is clicked", () => {
    renderNavbar();

    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));

    const mobileMenu = document.getElementById("mobile-navigation");

    fireEvent.click(within(mobileMenu!).getByRole("link", { name: "About" }));

    expect(screen.queryByRole("button", { name: "Close navigation menu" })).not.toBeInTheDocument();
  });

  test("closes the mobile menu when Escape is pressed", () => {
    renderNavbar();

    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));

    fireEvent.keyDown(screen.getByRole("banner"), { key: "Escape" });

    expect(screen.queryByRole("button", { name: "Close navigation menu" })).not.toBeInTheDocument();
  });

  test("toggles the theme", () => {
    renderNavbar();

    fireEvent.click(screen.getAllByRole("button", { name: "Switch to light mode" })[0]);

    expect(screen.getAllByRole("button", { name: "Switch to dark mode" }).length).toBeGreaterThan(
      0,
    );
  });
});
