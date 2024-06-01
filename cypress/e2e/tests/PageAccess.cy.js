import launchlsevenapp from "../pages/launchlsevenapp"

describe("Verify user is able to access L7 page",()=>{
    beforeEach("Access page",() => {
        cy.visit("http://localhost:3000");
    })

    it('Login into L7 page and verify Hello! displayed on clicking button',()=>{
        const llseven = new launchlsevenapp();
        llseven.clickl7Button();
        llseven.verifyOutputText();
    })
    
})