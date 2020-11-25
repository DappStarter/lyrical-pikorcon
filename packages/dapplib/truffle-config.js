require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth script coin hunt narrow swift system'; 
let testAccounts = [
"0x81e4409126fd3bbcd59d391a6aab1ce539684e2d8ee94142cc041f53cc2e7dc7",
"0xe52385a7bfa784c39a2113d570b2df4b680f5317b94a85abe3c47909776af861",
"0x0287274de146d3fca8859883a1789e0bdfe1cc0130f0c1f29ec6f7fd9d329113",
"0x88dcfb50bda9fdcad244bd422d3351fe5dcc4ecc3d83e764ee0b08a3384d072c",
"0x9ec24e1f647ac758541cb093781826ede67e29e89606e7e8c1c28a87ddd3e982",
"0x172fbea31bbef49ef6b5ac25e91bf6c3ad49a1368204d91b657949dc837f68b4",
"0x62752fb3df35c5f65b7b2b27bf1f6a374c5642e95fb97fbb7c52d82e162c79f4",
"0xe13ebcc809b017c9296722f90a717f9003d7fe005bc06568da5ef6a5b0292836",
"0x0cd8756fe21412804f80c3eae1b739e9c3527b4b59d7abe2ec9f10b9c72a5dfb",
"0x5d9bb95a017f08a2a8815397e2e4c6d5f46a61ac4fcd97fbd86de951ab0d5a31"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
