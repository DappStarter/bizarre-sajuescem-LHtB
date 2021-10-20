require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note snow coil install clog sugar slender'; 
let testAccounts = [
"0xe15aeab5b935347bd50519c64e91848df8f5b2013f29938b2cdb7dec80e66117",
"0x6e9d90629c90ea385df8601a3083d52532efd94ad18d190fd50ac8f3c94cf3a9",
"0x792bd5d3e1e4a3b8c4868078ddf834041055d1a15f5197d60119c6f709e3fd67",
"0x5ca60a99ab3fc85710fb2f1c5f98c684af5e4b0351b3f562a8886ef186fc82c0",
"0xdae2837dd8eec3a02725e1ea624257ae1c46f1e2cd438353d3ceb324fb51882f",
"0x476272b85c77adfc995bbfe20b8220baee57cb72861023bdb35dd507cdea9dcb",
"0xe81ef07387c53748ab8b0aadd4772a5e6c3b762b74ffb6441f3f36b55cc2df73",
"0xeb176fd3889263cd08c2c7c96e50658d8f1d07e2fed50dc8e754cfe6187334c6",
"0x0e6f70db43d387f45b3a2578dddc79f2d2027305abc25ee8f90bf131d0cc72f8",
"0xac583d771e34922edc42178c5c39194d2e284e78f7d00faef441216b8f3d63fd"
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
            version: '^0.8.0'
        }
    }
};

