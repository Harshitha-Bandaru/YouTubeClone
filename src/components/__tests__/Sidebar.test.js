import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../Sidebar";
import { sideBarElements } from "../../constants";

// Mock the Redux store
const mockStore = {
  getState: () => ({ app: { isMenuOpen: true } }),
  subscribe: () => {},
  dispatch: () => {},
};

// Mock the sideBarElements
jest.mock("../../constants", () => ({
  sideBarElements: [
    { name: "Home", icon: "🏠", link: "/" },
    { name: "Profile", icon: "👤", link: "/profile" },
    // Add more elements as needed for your tests
  ],
}));

describe("Sidebar", () => {
  it("should render sidebar when menu is open", () => {
    render(
      <Provider store={mockStore}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>
    );

    // Use ByRole to find list items
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(sideBarElements.length);

    // Use ByText to find the text for each item
    sideBarElements.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it("should not render sidebar when menu is closed", () => {
    // Override the store to simulate a closed menu
    const closedMenuStore = {
      ...mockStore,
      getState: () => ({ app: { isMenuOpen: false } }),
    };

    render(
      <Provider store={closedMenuStore}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>
    );

    // Since the sidebar should not be rendered, getByRole will throw an error
    expect(() => screen.getByRole("list")).toThrow();
  });

  // Add more tests as needed to cover different scenarios and interactions
});
