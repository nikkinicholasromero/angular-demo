describe('Registration Form', () => {
    it('should display initial page', () => {
        cy.visit('http://localhost:4200/registration');

        cy.get("#formTitle")
            .should("visible")
            .should("contain", "Registration Form");

        cy.get("label[for='emailAddress']")
            .should("visible")
            .should("contain", "Email Address");

        cy.get("input#emailAddress")
            .should("visible")
            .should("have.attr", "type", "email")
            .should("not.have.class", "is-valid")
            .should("not.have.class", "is-invalid")
            .should("value", "");

        cy.get("#emailAddressFeedback")
            .should("not.be.visible");

        cy.get("label[for='password']")
            .should("visible")
            .should("contain", "Password");

        cy.get("input#password")
            .should("visible")
            .should("have.attr", "type", "password")
            .should("not.have.class", "is-valid")
            .should("not.have.class", "is-invalid")
            .should("value", "");

        cy.get("#passwordFeedback")
            .should("not.be.visible");

        cy.get("label[for='confirmPassword']")
            .should("visible")
            .should("contain", "Confirm Password");

        cy.get("input#confirmPassword")
            .should("visible")
            .should("have.attr", "type", "password")
            .should("not.have.class", "is-valid")
            .should("not.have.class", "is-invalid")
            .should("value", "");

        cy.get("#confirmPasswordFeedback")
            .should("not.be.visible");

        cy.get("label[for='firstName']")
            .should("visible")
            .should("contain", "First Name");

        cy.get("input#firstName")
            .should("visible")
            .should("have.attr", "type", "text")
            .should("not.have.class", "is-valid")
            .should("not.have.class", "is-invalid")
            .should("value", "");

        cy.get("#firstNameFeedback")
            .should("not.be.visible");

        cy.get("label[for='lastName']")
            .should("visible")
            .should("contain", "Last Name");

        cy.get("input#lastName")
            .should("visible")
            .should("have.attr", "type", "text")
            .should("not.have.class", "is-valid")
            .should("not.have.class", "is-invalid")
            .should("value", "");

        cy.get("#lastNameFeedback")
            .should("not.be.visible");

        cy.get("button#submit")
            .should("visible")
            .should("have.attr", "type", "submit")
            .should('not.be.disabled')
            .contains("Register");

        cy.get("button#processing")
            .should("not.be.visible");
    });
});
