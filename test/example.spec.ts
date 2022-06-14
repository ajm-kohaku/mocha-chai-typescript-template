import {expect} from 'chai'
import fetch from 'node-fetch'

describe('some example tests', ()=> {
  it('basic assertion', ()=> {
    expect(true).to.be.true
  })

  it('does a basic fetch', async()=> {
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => response.json())
    expect(pokemon).to.have.property('abilities').and.have.length(2)
  })
})