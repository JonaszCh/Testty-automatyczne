/// <reference types="cypress"/>

import Search from "../pages/search";
import Base from "../pages/base";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json";
import ResultPage from "../pages/resultPage";

describe("Wpisywanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu",() => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase);
        cy.wait(3000);
        Search.clearSearchPhrase();
        Search.typeSearchPhrase(`${searchPhrase} {enter}`);
        ResultPage.searchAlert.should("be.visible").and("include.text", notFoundProduct);
    })
})