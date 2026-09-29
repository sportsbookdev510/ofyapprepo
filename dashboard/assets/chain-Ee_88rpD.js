function e(e) {
  let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
  function n(e) {
    return (t) => {
      let r = typeof t == `function` ? t(e) : t,
        i = { ...e, ...r };
      return Object.assign(i, { extend: n(i) });
    };
  }
  return Object.assign(t, { extend: n(t) });
}
e({
  id: 46630,
  name: `Robinhood Chain Testnet`,
  nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 },
  rpcUrls: { default: { http: [`https://rpc.testnet.chain.robinhood.com`] } },
  blockExplorers: {
    default: {
      name: `Blockscout`,
      url: `https://explorer.testnet.chain.robinhood.com`,
    },
  },
  testnet: !0,
});
var t = e({
    id: 4663,
    name: `Robinhood Chain`,
    nativeCurrency: { name: `Ether`, symbol: `ETH`, decimals: 18 },
    rpcUrls: { default: { http: [`https://rpc.mainnet.chain.robinhood.com`] } },
    blockExplorers: {
      default: {
        name: `Blockscout`,
        url: `https://robinhoodchain.blockscout.com`,
      },
    },
    contracts: {
      multicall3: { address: `0xcA11bde05977b3631167028862bE2a173976CA11` },
    },
  }),
  n = {
    chain: t,
    isTestnet: !1,
    vault: `0xA28e7e778879Bc523d9B9137060Dd714ec850587`,
    usdg: `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`,
    venue: `0xBeEff033F34C046626B8D0A041844C5d1A5409dd`,
    deployBlock: 60532975n,
    usdgDecimals: 6,
    explorer: `https://robinhoodchain.blockscout.com`,
    vaultAbiVersion: `0.1.0-beta.2`,
  };
n.vault;
var r = `https://faucet.testnet.chain.robinhood.com`,
  i = 4663;
export { t as i, r as n, i as r, n as t };
