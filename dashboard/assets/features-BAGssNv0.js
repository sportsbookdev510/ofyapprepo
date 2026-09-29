var e = [
    `ADD_FUNDS`,
    `FUND_EXCHANGE`,
    `SWAP_ETH`,
    `BRIDGE_IN`,
    `WALLET_REACH`,
    `PAY_WITH_INTEREST`,
    `MY_CARDS`,
    `CARD_TAB`,
    `USDG_PAY`,
    `SETTINGS`,
    `ONBOARDING`,
    `PROJECTION`,
    `TRUST_CENTER`,
    `OFY_LEVELS`,
  ],
  t = () => ({});
function n(e, n = t()) {
  return n[`FF_${e}`]?.trim() === `on`;
}
function r(r = t()) {
  return Object.fromEntries(e.map((e) => [e, n(e, r)]));
}
var i = r({});
export { i as t };
