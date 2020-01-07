import LooseSet from './index'

let set: LooseSet<any>

describe('Loose Sets', () => {
  beforeEach(() => set = new LooseSet)
  it('Should have literal values', () => {
    set.add(['hello'])

    set.has(['hello']).should.be.true()
  })

  it('Should not have duplicate literal values', () => {
    set
      .add({ hello: 'world' })
      .add({ hello: 'world' })

    set.should.have.size(1)
  })

  it('Should require the obj value to stay the same, even if reference is same', () => {
    const data = [12]
    set.add(data)
    data.push(123)

    set.has(data).should.be.false()
  })
})
