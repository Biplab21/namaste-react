import React from "react";
import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe('Contact Us page test cases', () => {

    it("Should load contact us component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument()
    })

    it("Should load input box", () => {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText("name")

        expect(inputName).toBeInTheDocument()
    })

    test("Should load button", () => {
        render(<Contact />)

        const submitButton = screen.getByText("Submit")

        expect(submitButton).toBeInTheDocument()
    })

    test("Should load 2 input boxes on the contact component", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
    })
})
