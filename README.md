BRZ TOKEN

Dependencies

- https://openzeppelin.org/
- https://truffleframework.com/
- https://nodejs.org/en/

Configuration

    migrations/2_deploy_migration.js
    
        const name = "BRZ";
        const symbol = "BRZ";
        const decimals = 4;
            
    .secret
        
        your mnemonic words here 
    
    .infuraKey
    
        your infuraKey to deploy here (check for mainnet and rinkeby they might be different)
        
    
    .fromAddress
    
        your contract owner wallet address
        
Publish to Ethereum Network (change rinkeby for live to mainnet)

    $ truffle migrate --compile-all --reset --network rinkeby
    
   