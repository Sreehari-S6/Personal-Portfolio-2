
import { describe, test, expect, beforeEach, jest } from "@jest/globals";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "../components/Contact";

// Mock EmailJS — tests won't send real emails
jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: {
    send: jest.fn(),
  },
}));

const mockEmailSend = jest.mocked(emailjs.send);

describe("Contact Component", () => {
  beforeEach(() => {
    mockEmailSend.mockReset();

    // Simulate a successful email response
    mockEmailSend.mockResolvedValue({
      status: 200,
      text: "OK",
    });

    render(<Contact />);
  });

  const fillContactForm = () => {
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
  };

  test("renders the contact section heading", () => {
    expect(
      screen.getByRole("heading", { name: /let's work together/i }),
    ).toBeInTheDocument();
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
    expect(screen.getByLabelText("Your Email")).toHaveAttribute(
      "type",
      "email",
    );
  });

  test("allows users to enter form details", () => {
    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Sreehari" },
    });

    fireEvent.change(screen.getByLabelText("Your Email"), {
      target: { value: "test@example.com" },
    });

    expect(screen.getByLabelText("Your Name")).toHaveValue("Sreehari");
    expect(screen.getByLabelText("Your Email")).toHaveValue(
      "test@example.com",
    );
  });

  test("sends email and shows success message after valid submission", async () => {
    fillContactForm();

    fireEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    await waitFor(() => {
      expect(mockEmailSend).toHaveBeenCalledTimes(1);
    });

    expect(mockEmailSend).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        from_name: "Sreehari",
        reply_to: "test@example.com",
        subject: "Job Opportunity",
        message: "Hello, I would like to connect.",
      }),
      expect.any(String),
    );

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Thank you! Your message has been submitted successfully.",
    );
  });

  test("clears form fields after successful submission", async () => {
    fillContactForm();

    fireEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Your Name")).toHaveValue("");
      expect(screen.getByLabelText("Your Email")).toHaveValue("");
      expect(screen.getByLabelText("Subject")).toHaveValue("");
      expect(screen.getByLabelText("Message")).toHaveValue("");
    });
  });

  test("hides success message when user starts editing again", async () => {
    fillContactForm();

    fireEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(await screen.findByRole("status")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Your Name"), {
      target: { value: "Another Name" },
    });

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  test("shows an error message when email sending fails", async () => {
    mockEmailSend.mockRejectedValueOnce(
      new Error("Email sending failed"),
    );

    fillContactForm();

    fireEvent.click(
      screen.getByRole("button", { name: /send message/i }),
    );

    expect(await screen.findByRole("alert")).toBeInTheDocument();

    // Form values should remain available after failure
    expect(screen.getByLabelText("Your Name")).toHaveValue("Sreehari");
    expect(screen.getByLabelText("Your Email")).toHaveValue(
      "test@example.com",
    );
  });
});
