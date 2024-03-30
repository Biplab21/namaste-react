import React from "react";
import Header from '../Header'
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";

it("Should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={ appStore }>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
})

it("Should render header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={ appStore }>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();
})

it("Should change Login button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={ appStore }>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" });
    
    fireEvent.click(loginButton)
    
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    
    expect(logoutButton).toBeInTheDocument();
})