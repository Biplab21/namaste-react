import React from "react";
import "@testing-library/jest-dom"
import ResturantCard from "../ResturantCard";
import MOCK_DATA from '../mocks/resCardMock.json'
import { render, screen } from "@testing-library/react";

it("Should render Restaurant card component with props data", () => {
    render(<ResturantCard resData={ MOCK_DATA } />)

    const name = screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument()
})