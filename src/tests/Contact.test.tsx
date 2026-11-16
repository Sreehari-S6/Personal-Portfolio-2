import { describe, test, expect, beforeEach } from "@jest/globals";

import { render, screen, fireEvent } from "@testing-library/react";

import Contact from "../components/Contact";

describe("Contact Component", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test("renders the contact section heading", () => {
    expect(screen.getByRole("heading", { name: /let's work together/i })).toBeInTheDocument();
  });

  test("renders the contact information", () => {
    expect(screen.getByText("Contact Information")).toBeInTheDocument();

    expect(screen.getByText("Visit my GitHub profile")).toBeInTheDocument();

    expect(screen.getByText("Connect with me")).toBeInTheDocument();
  });

  test("renders all contact form fields", () => {
    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  test("checks required form fields", () => {
    expect(screen.getByLabelText("Your Name")).toBeRequired();
    expect(screen.getByLabelText("Your Email")).toBeRequired();
    expect(screen.getByLabelText("Subject")).toBeRequired();
    expect(screen.getByLabelText("Message")).toBeRequired();
  });

  test("checks email input type", () => {
    expect(screen.getByLabelText("Your Email")).toHaveAttribute("type", "email");
  });

  test("allows users to enter form details", () => {
    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Sreehari" },
    });

    fireEvent.change(screen.getByLabelText("Your Email"), {
      target: { value: "test@example.com" },
    });

    expect(screen.getByLabelText("Your Name")).toHaveValue("Sreehari");
    expect(screen.getByLabelText("Your Email")).toHaveValue("test@example.com");
  });

  test("shows success message after valid submission", () => {
    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Sreehari" },
    });

    fireEvent.change(screen.getByLabelText("Your Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Job Opportunity" },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello, I would like to connect." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Thank you! Your message has been submitted successfully.",
    );
  });

  test("clears form fields after submission", () => {
    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Sreehari" },
    });

    fireEvent.change(screen.getByLabelText("Your Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Hello" },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Test message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByLabelText("Your Name")).toHaveValue("");
    expect(screen.getByLabelText("Your Email")).toHaveValue("");
    expect(screen.getByLabelText("Subject")).toHaveValue("");
    expect(screen.getByLabelText("Message")).toHaveValue("");
  });

  test("hides success message when user starts editing again", () => {
    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Sreehari" },
    });

    fireEvent.change(screen.getByLabelText("Your Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Hello" },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Test message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("status")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Another Name" },
    });

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
