const BRZToken = artifacts.require('BRZToken');
contract('BRZToken', accounts => {
    let token;
    const creator = accounts[0];
    beforeEach(async function () {
        token = await BRZToken.new("BRZ Test Token", "BRZT", 3);
    });
    it('has a name', async function () {
        const name = await token.name();
        assert.equal(name, 'BRZ Test Token');
    });
    it('has a symbol', async function () {
        const symbol = await token.symbol();
        assert.equal(symbol, 'BRZT');
    });
    it('has 3 decimals', async function () {
        const decimals = await token.decimals();
        assert.equal(decimals, 3);
    });
});