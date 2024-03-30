import React from "react";
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from '../mocks/mockResListData.json'
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search res list for pizza text input", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )

    const cardBeforeSearch = screen.getAllByTestId('resCard')
    expect(cardBeforeSearch.length).toBe(9)

    const searchBtn = screen.getByRole("button", { name: "Search" })

    expect(searchBtn).toBeInTheDocument()

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, { target: { value: 'pizza' } })
    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId('resCard')
    expect(cardsAfterSearch.length).toBe(2)
})

it("Should filter top rated restaurant", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )

    const cardBeforeFilter = screen.getAllByTestId('resCard')
    expect(cardBeforeFilter.length).toBe(9)

    const filterBtn = screen.getByRole("button", { name: "Top Rated Resturants" })
    fireEvent.click(filterBtn)

    const cardAfterFilter = screen.getAllByTestId('resCard')
    expect(cardAfterFilter.length).toBe(4)

})