import React from "react";
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={ appStore }>
                    <Header/>
                    <RestaurantMenu />
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    )

    const accordionHeader = screen.getByText("Sandwich (5)")
    fireEvent.click(accordionHeader)

    const foodItems = screen.getAllByTestId("foodItems")
    expect(foodItems.length).toBe(5)

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add +"})
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    const clearCartBtn = screen.getByRole("button", {name:"Clear Cart"})
    fireEvent.click(clearCartBtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    expect(
        screen.getByText("Cart is empty, add items to the cart")
      ).toBeInTheDocument();
})