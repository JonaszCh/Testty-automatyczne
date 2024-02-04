/// <reference types="cypress"/>

import Base from "../pages/base";
import Home from "../pages/home";
import Women from "../pages/women"

describe("Test checkbox",() => {
    it("Kliknięcie w zakładkę Women ", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category")
    })
    it("Zaznaczanie checkbox woman",() =>{
        Women.checkTops();
        Women.topsCheckbox.should("be.checked");
        Women.checkDresses();
        Women.checkSize();

    })
}
)