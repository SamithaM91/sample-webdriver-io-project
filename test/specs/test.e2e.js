import { expect, browser, $ } from "@wdio/globals";
import { assert } from "chai";

//Locators
describe("LeafGround Input Form", () => {
  it("should fill in name and email fields", async () => {
    await browser.url("https://www.leafground.com/input.xhtml");

    // Locating and interacting with the text box using its 'id'
    const nameField = await $("#j_idt88\\:name");
    await nameField.setValue("Samitha");

    // Locating and interacting with the email field using its 'id'
    const emailField = await $("#j_idt88\\:j_idt91");
    await emailField.setValue("samitha@example.com");

    console.log("Name and Email fields filled.");
  });
});

//Test Annotations
describe("LeafGround Input Form with Hooks", () => {
  before(async () => {
    await browser.url("https://www.leafground.com/input.xhtml");
  });

  it("should fill name and email fields", async () => {
    const nameField = await $("#j_idt88\\:name");
    await nameField.setValue("Samitha");
    const emailField = await $("#j_idt88\\:j_idt91");
    await emailField.setValue("samitha@example.com");
    console.log("Form filled successfully");
  });

  after(async () => {
    await browser.deleteSession();
  });
});

//Handling Input Fields and Assertions
describe("Form Validation", () => {
  it.only("should validate entered name", async () => {
    await browser.url("https://www.leafground.com/input.xhtml");

    const nameField = await $("#j_idt88\\:name");
    await nameField.setValue("Samitha");
    const enteredName = await nameField.getValue();

    // Assert the entered value
    assert.equal(enteredName, "Samitha");
  });
});
