class launchlsevenapp{
    

    clickl7Button(){
        cy.get("button").click();
    }

    verifyOutputText(){
        cy.get("pre[id='output']").contains('Hello!');
    }


}
export default launchlsevenapp;