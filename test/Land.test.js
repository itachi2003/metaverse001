const Land = artifacts.require("./Land")

contract( "Land", () => {
    const NAME = 'OWN Buildings'
    const SYMBOL = 'OWN'
    const COST = web3.utils.toWei('1', 'ether')

    let land, result

    beforeEach(
        async() => {
            land = await Land.new(NAME, SYMBOL, COST);
        }
    )

    
}

)