import React from 'react'
import AddCard from './AddCard'
import '../index.css'



Cypres.Comands.add('alertErrorHaveText', (expectedText) => {

      cy.contains('.alert-error', expectedText )
       .should('be.visible')
}


describe('<AddCard />', () => {
  it('exibe erros quando os campos obrigatórios não são informados', () => {
    cy.viewport (1440, 900)
    cy.mount(<AddCard />)


    cy.contains('button', 'Adicionar Cartão').click()

// mensagens de validação mostrada ao usuário quando ele não informa os campos obrigatórios utilizando o método alertErrorHaveText
    cy.alertErrorHaveText('Número do cartão é obrigatório')
       
    cy.alertErrorHaveText('Nome do titular é obrigatório')

    cy.alertErrorHaveText('CVV é obrigatório')  

    cy.alertErrorHaveText('Data de expiração é obrigatória')
 
    cy.alertErrorHaveText('Selecione um banco')


  })
})