import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  });
});

it("Should check the restaurant card loaded ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );   

const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);
});

it("Should Search Res List for coffee text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "coffee" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

test("Should Search Res List for top rated restaurants ", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", { name: "Top rated Restaurants" });

  fireEvent.click(topRatedBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(6);

});
