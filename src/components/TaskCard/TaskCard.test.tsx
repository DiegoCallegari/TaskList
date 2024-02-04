import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import TaskCard from "./TaskCard";

describe("Given a TaskCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should shows the text 'Task title'", () => {
      const expectedText = "Task title";

      renderWithProviders(<TaskCard />);

      const title = screen.getByText(expectedText);

      expect(title).toBeInTheDocument();
    });
  });
});
