import { a as e, n as t, t as n } from "./jsx-runtime-C27Mmbu5.js";
import { t as r } from "./useQuery-Crahd3VI.js";
import { r as i, y as a } from "./index-D4fqyBzS.js";
import {
  D as o,
  E as s,
  Gt as c,
  H as l,
  Jt as u,
  Kt as d,
  St as f,
  V as p,
  a as m,
  bt as h,
  dt as g,
  g as _,
  h as v,
  ht as y,
  i as b,
  kt as x,
  l as S,
  m as C,
  n as w,
  nt as T,
  o as E,
  p as D,
  pt as O,
  r as k,
  s as A,
  t as j,
  u as M,
  v as N,
  xt as P,
  zt as F,
} from "./vault-2n0SjY1L.js";
import {
  B as ee,
  C as I,
  D as L,
  E as te,
  F as R,
  G as ne,
  H as re,
  I as ie,
  N as ae,
  O as oe,
  P as se,
  R as ce,
  S as le,
  T as ue,
  V as de,
  W as fe,
  _ as pe,
  a as me,
  b as he,
  c as ge,
  d as _e,
  f as ve,
  g as ye,
  h as be,
  i as xe,
  l as Se,
  m as z,
  n as Ce,
  nt as we,
  o as Te,
  p as Ee,
  q as De,
  r as Oe,
  rt as ke,
  s as Ae,
  t as je,
  u as Me,
  v as Ne,
  w as Pe,
  x as Fe,
  y as Ie,
} from "./wallet-CDclTGIu.js";
import { i as Le, n as Re, r as ze, t as B } from "./chain-Ee_88rpD.js";
import { t as Be } from "./features-BAGssNv0.js";
function Ve(e, t = `wei`) {
  return P(e, t);
}
var V = e(t(), 1),
  He = u([
    `function balanceOf(address) view returns (uint256)`,
    `function allowance(address owner, address spender) view returns (uint256)`,
    `function approve(address spender, uint256 amount) returns (bool)`,
    `function decimals() view returns (uint8)`,
  ]);
u([
  `function paused() view returns (bool)`,
  `function oraclePaused() view returns (bool)`,
]);
var Ue = u([
  `function decimals() view returns (uint8)`,
  `function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)`,
]);
u([
  `function exactOutputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 amountOut, uint256 amountInMaximum, uint160 sqrtPriceLimitX96) params) payable returns (uint256 amountIn)`,
  `function multicall(uint256 deadline, bytes[] data) payable returns (bytes[] results)`,
]);
var We = u([
    `function depositV3(address depositor, address recipient, address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 destinationChainId, address exclusiveRelayer, uint32 quoteTimestamp, uint32 fillDeadline, uint32 exclusivityParameter, bytes message) payable`,
    `event FundsDeposited(bytes32 inputToken, bytes32 outputToken, uint256 inputAmount, uint256 outputAmount, uint256 indexed destinationChainId, uint256 indexed depositId, uint32 quoteTimestamp, uint32 fillDeadline, uint32 exclusivityDeadline, bytes32 indexed depositor, bytes32 recipient, bytes32 exclusiveRelayer, bytes message)`,
  ]),
  Ge = `0x0000000000000000000000000000000000000000`,
  Ke = 40000n,
  qe = 2;
u([
  `event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)`,
])[0];
var Je = class extends Error {
  code;
  constructor(e, t) {
    super(t), (this.code = e), (this.name = `StockSpendError`);
  }
};
function H(e, t) {
  throw new Je(e, t);
}
var Ye = {
  "Too much requested": `The price moved past your limit, so nothing was sold. Try again.`,
  STF: `The token transfer failed. Check your balance and that the token isn't paused.`,
  "Transaction too old": `The sale took too long to confirm, so nothing was sold. Try again.`,
  InvalidFillDeadline: `The payment window closed before the bridge deposit, so nothing was sent.`,
  InvalidQuoteTimestamp: `The bridge quote went stale. Try again.`,
  DepositsArePaused: `The bridge has paused deposits. Your USDG stays in your wallet.`,
  ExceedsSpendableYield: `That's more than your spendable interest, so nothing was spent.`,
  EnforcedPause: `Spending is paused right now. Nothing was spent; withdrawals still work.`,
  DepositWhileImpaired: `Your position is impaired, so spending is off. Nothing was spent.`,
};
function Xe(e) {
  if (e instanceof Je) return e;
  if (e instanceof c) {
    if (e.walk((e) => e.code === 4001))
      return new Je(`REJECTED`, `Signature request cancelled.`);
    let t = e.walk((e) => e instanceof y),
      n = t?.data?.errorName ?? t?.reason;
    return n
      ? new Je(`REVERTED`, Ye[n] ?? `The transaction would fail (${n}).`)
      : new Je(`TX_FAILED`, e.shortMessage);
  }
  return e instanceof Error ? e : Error(String(e));
}
async function Ze(e) {
  let t = `0x${ce.toString(16)}`;
  try {
    await e.request({
      method: `wallet_switchEthereumChain`,
      params: [{ chainId: t }],
    });
  } catch (n) {
    if (n.code !== 4902) throw n;
    await e.request({
      method: `wallet_addEthereumChain`,
      params: [
        {
          chainId: t,
          chainName: Le.name,
          nativeCurrency: Le.nativeCurrency,
          rpcUrls: [...Le.rpcUrls.default.http],
          blockExplorerUrls: [Le.blockExplorers.default.url],
        },
      ],
    }),
      await e.request({
        method: `wallet_switchEthereumChain`,
        params: [{ chainId: t }],
      });
  }
}
function Qe() {
  try {
    let e = window.localStorage;
    return e.setItem(`offyield.probe`, `1`), e.removeItem(`offyield.probe`), e;
  } catch {
    return null;
  }
}
var $e = () => (typeof navigator < `u` ? navigator.locks : void 0) ?? null;
function et(e = $e()) {
  return e
    ? (t, n) =>
        e.request(
          t,
          { ifAvailable: !0 },
          async (e) => (
            e ||
              H(
                `BUSY`,
                `This wallet is paying a card in another tab or window. Finish there, or close it and try again.`
              ),
            n()
          )
        )
    : async () =>
        H(
          `BUSY`,
          `This browser can't make sure a card is paid only once across tabs. Update it, or use a current Chrome, Firefox or Safari.`
        );
}
var tt = null;
function nt() {
  return (
    (tt ??= N({
      chain: Le,
      transport: _(void 0, { timeout: 1e4, retryCount: 2 }),
    })),
    tt
  );
}
function rt(e) {
  let t = Pe();
  return (
    t || H(`NO_WALLET`, `No wallet found.`),
    {
      pub: nt(),
      wallet: ke({ account: e, chain: Le, transport: we(t) }),
      fetch: window.fetch.bind(window),
      now: () => Date.now(),
      storage: Qe(),
      ensureChain: () => Ze(t),
      api: ``,
      lock: et(),
    }
  );
}
var it = (e) => {
    let t = e.wallet.account?.address;
    return t || H(`NO_WALLET`, `Connect a wallet first.`), t;
  },
  at = (e) => e.toLowerCase();
function ot(e) {
  try {
    if (
      (e.storage?.setItem(`offyield.stockspend.probe`, `1`),
      e.storage?.removeItem(`offyield.stockspend.probe`),
      e.storage)
    )
      return;
  } catch {}
  H(
    `STORAGE_BLOCKED`,
    `This browser is blocking site storage, which this page needs to make sure nothing is paid twice. Allow site data for Offyield and try again.`
  );
}
async function st(e) {
  try {
    let t = await e.pub.getBlock({ blockTag: `latest` });
    return Math.min(e.now(), Number(t.timestamp) * 1e3);
  } catch {
    return -1 / 0;
  }
}
var ct = (e) =>
  (typeof e == `string` && /^\d{1,30}$/.test(e)) ||
  (typeof e == `number` && Number.isSafeInteger(e) && e >= 0)
    ? BigInt(e)
    : null;
async function lt(e, t, n, r) {
  let i = new URLSearchParams({
      inputToken: de,
      outputToken: n.usdc,
      originChainId: String(ce),
      destinationChainId: String(n.chainId),
      amount: t.toString(),
    }),
    a = null;
  try {
    let t = await e.fetch(`${L.api}/suggested-fees?${i}`, {
      signal:
        typeof AbortSignal.timeout == `function`
          ? AbortSignal.timeout(1e4)
          : void 0,
    });
    t.ok && (a = await t.json());
  } catch {
    a = null;
  }
  if (!a)
    return H(
      `BRIDGE_UNAVAILABLE`,
      `The bridge couldn't quote right now. ${r} Try again shortly.`
    );
  let o = a.inputToken ?? {},
    s = a.outputToken ?? {},
    c = (e, t) => typeof e == `string` && e.toLowerCase() === t.toLowerCase();
  (!c(a.spokePoolAddress, L.spokePool) ||
    !c(o.address, `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`) ||
    o.chainId !== 4663 ||
    o.decimals !== 6 ||
    !c(s.address, n.usdc) ||
    s.chainId !== n.chainId ||
    s.decimals !== 6) &&
    H(
      `BRIDGE_UNSAFE`,
      `The bridge quote didn't match the pinned contracts, so this page won't use it. ${r}`
    ),
    a.isAmountTooLow !== !1 &&
      H(`BRIDGE_AMOUNT`, `This amount is below the bridge minimum. ${r}`);
  let l = ct(a.outputAmount),
    u = Number(a.timestamp),
    d = a.limits ?? {},
    f = ct(d.minDeposit),
    p = ct(d.maxDepositInstant);
  (l === null || !Number.isSafeInteger(u) || f === null || p === null) &&
    H(`BRIDGE_UNSAFE`, `The bridge quote was incomplete. ${r}`);
  let m = Number(a.exclusivityDeadline),
    h = De(a.exclusiveRelayer) && Number.isInteger(m) && m > 0 && m <= 60;
  return {
    outputAmount: l,
    quoteTimestamp: u,
    exclusiveRelayer: h ? a.exclusiveRelayer : Ge,
    exclusivity: h ? m : 0,
    minDeposit: f,
    maxInstant: p,
  };
}
async function ut(e, t, n = `Nothing was sold.`) {
  let r = { chainId: t.destChainId, usdc: t.destUsdc },
    i = t.coinUnits,
    a = await lt(e, i, r, n),
    o = i + (i > a.outputAmount ? i - a.outputAmount : 0n),
    s = !1;
  for (let t = 0; t < 4 && !s; t++)
    (a = await lt(e, o, r, n)),
      a.outputAmount >= i ? (s = !0) : (o += i - a.outputAmount + 1n);
  s ||
    H(`BRIDGE_FEE_HIGH`, `The bridge fee kept moving. ${n} Try again shortly.`),
    (o = re(o, qe));
  let c = o - i;
  c > (i * BigInt(100)) / 10000n + 500000n &&
    H(
      `BRIDGE_FEE_HIGH`,
      `The bridge fee is unusually high right now. ${n} Try again later.`
    ),
    (o < a.minDeposit || o > a.maxInstant) &&
      H(
        `BRIDGE_AMOUNT`,
        `This amount is outside what the bridge fills instantly right now. ${n}`
      );
  let l = Math.floor(e.now() / 1e3);
  return (
    (a.quoteTimestamp > l + 60 || l - a.quoteTimestamp > 1800) &&
      H(
        `BRIDGE_UNSAFE`,
        `The bridge quote's timestamp is off. ${n} Try again.`
      ),
    {
      inputAmount: o,
      outputAmount: i,
      fee: c,
      quoteTimestamp: a.quoteTimestamp,
      exclusiveRelayer: a.exclusiveRelayer,
      exclusivity: a.exclusivity,
      destChainId: r.chainId,
      destUsdc: r.usdc,
    }
  );
}
async function dt(e, t) {
  try {
    let n = null,
      r = await e.pub.waitForTransactionReceipt({
        hash: t,
        timeout: 3e4,
        onReplaced: (e) => {
          n = e;
        },
      }),
      i = n;
    return i && i.reason !== `repriced`
      ? { out: `reverted` }
      : r.status === `success`
      ? { out: `success`, receipt: r }
      : { out: `reverted` };
  } catch {
    return { out: `unknown` };
  }
}
function ft(e, t, n) {
  for (let r of e.logs ?? [])
    if (at(r.address) === at(L.spokePool))
      try {
        let e = l({ abi: We, data: r.data, topics: r.topics });
        if (
          e.eventName === `FundsDeposited` &&
          at(e.args.recipient) === at(F(at(t.payTo))) &&
          e.args.outputAmount === t.coinUnits &&
          at(e.args.outputToken) === at(F(at(t.destUsdc))) &&
          at(e.args.inputToken) ===
            at(F(at(`0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`))) &&
          at(e.args.depositor) === at(F(at(n)))
        )
          return e.args.depositId;
      } catch {}
  return null;
}
async function pt(e, t, n = {}) {
  try {
    await e.ensureChain();
    let { request: r } = await e.pub.simulateContract({
      ...t,
      account: e.wallet.account,
    });
    n.onPrompt?.();
    let i = await e.wallet.writeContract(r);
    n.onHash?.(i);
    let a = null,
      o = await e.pub.waitForTransactionReceipt({
        hash: i,
        onReplaced: (e) => {
          a = e;
        },
      }),
      s = a;
    s &&
      s.reason !== `repriced` &&
      (n.onReverted?.(i),
      H(
        `TX_FAILED`,
        `The transaction was cancelled or replaced in your wallet, so it didn't go through.`
      ));
    let c = s?.transaction.hash ?? o.transactionHash ?? i;
    return (
      o.status !== `success` &&
        (n.onReverted?.(i),
        H(`TX_FAILED`, `The transaction reverted on-chain.`)),
      { hash: c, receipt: o }
    );
  } catch (e) {
    throw Xe(e);
  }
}
async function mt(e, t, n, r) {
  let i = it(e),
    a = await e.pub
      .readContract({
        address: t,
        abi: He,
        functionName: `allowance`,
        args: [i, n],
      })
      .catch(() => null);
  if (
    (a === null &&
      H(`READ_FAILED`, `Couldn't read your token approval. Try again.`),
    a >= r)
  )
    return null;
  let { hash: o } = await pt(e, {
    address: t,
    abi: He,
    functionName: `approve`,
    args: [n, r],
  });
  return o;
}
async function ht(e, t, n) {
  let r = it(e),
    i;
  try {
    let t = await e.pub.getBlockNumber({ cacheTime: 0 }),
      a = t > Ke ? t - Ke : 0n;
    n && /^\d{1,20}$/.test(n) && BigInt(n) < a && (a = BigInt(n)),
      (i = await e.pub.getLogs({
        address: L.spokePool,
        event: f({ abi: We, name: `FundsDeposited` }),
        args: { depositor: F(r.toLowerCase()) },
        fromBlock: a,
        toBlock: `latest`,
      }));
  } catch {
    return H(
      `READ_FAILED`,
      `Couldn't confirm this order hasn't been paid already, so nothing was sent. Try again.`
    );
  }
  let a = F(t.payTo.toLowerCase()),
    o = F(t.destUsdc.toLowerCase()),
    s = F(de.toLowerCase()),
    c = Math.floor(t.createdAt / 1e3);
  for (let e of i) {
    let n = e.args;
    if (
      n.recipient?.toLowerCase() === a &&
      n.outputAmount === t.coinUnits &&
      n.destinationChainId === BigInt(t.destChainId) &&
      n.outputToken?.toLowerCase() === o &&
      n.inputToken?.toLowerCase() === s &&
      typeof n.inputAmount == `bigint` &&
      n.inputAmount >= n.outputAmount &&
      typeof n.fillDeadline == `number` &&
      n.fillDeadline >= c
    )
      return e.transactionHash;
  }
  return null;
}
async function gt(e, t) {
  try {
    let n = await (
      await e.fetch(
        `${L.api}/deposit/status?originChainId=${ce}&depositTxHash=${t}`
      )
    )
      .json()
      .catch(() => null);
    if (!n) return { state: `unknown` };
    if (n.error === `DepositNotFoundException`) return { state: `pending` };
    let r = String(n.status ?? ``),
      i =
        typeof n.fillTx == `string` && /^0x[0-9a-fA-F]{64}$/.test(n.fillTx)
          ? n.fillTx
          : void 0;
    return r === `filled`
      ? { state: `filled`, fillTx: i }
      : r === `expired`
      ? { state: `expired` }
      : r === `refunded`
      ? { state: `refunded` }
      : r === `pending` || r === `slowFillRequested`
      ? { state: `pending` }
      : { state: `unknown` };
  } catch {
    return { state: `unknown` };
  }
}
var _t = (e) => e.trim().replace(/\s+/g, ` `).slice(0, 80);
function vt(e) {
  return [
    `Offyield card order`,
    ``,
    `Card: ${e.brand}`,
    `Value: $${e.valueUsd}`,
    `Card storefront: ${e.country}`,
    `Delivery email: ${e.email}`,
    `Card holder name: ${e.fullName || `(not required)`}`,
    ...(e.funding === `wallet`
      ? [`Paid from: my own funds (not interest)`]
      : []),
    ...(e.funding === `usdg`
      ? [`Paid with: USDG from my wallet (Offyield pays the card)`]
      : []),
    `Wallet: ${e.wallet}`,
    `Order ref: ${e.intent}`,
    `Issued at: ${new Date(e.issuedAt).toISOString()}`,
    `site: offyield.com`,
  ].join(`
`);
}
var yt = 50,
  bt = (e) => `offyield.shop.history.${e.toLowerCase()}`,
  xt = (e, t = 64) => (typeof e == `string` && e.length <= t ? e : null);
function St(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = xt(t.orderId),
    r = xt(t.brand, 120);
  if (!n || !r || typeof t.createdAt != `number`) return null;
  let i = Number(t.faceUsd);
  return Number.isFinite(i)
    ? {
        orderId: n,
        brand: r,
        faceUsd: i,
        totalUsd: Number.isFinite(Number(t.totalUsd)) ? Number(t.totalUsd) : 0,
        coin: xt(t.coin) ?? ``,
        coinAmount: xt(t.coinAmount) ?? ``,
        network: xt(t.network) ?? ``,
        country: xt(t.country, 2) ?? ``,
        createdAt: t.createdAt,
        paymentState: xt(t.paymentState),
        orderState: xt(t.orderState),
        deliveryState: xt(t.deliveryState),
        checkedAt: typeof t.checkedAt == `number` ? t.checkedAt : void 0,
        cardRef:
          typeof t.cardRef == `string` && Ct.test(t.cardRef) ? t.cardRef : null,
        cashback: Tt(t.cashback),
      }
    : null;
}
var Ct = /^OFY-[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/,
  wt = new Set([`pending`, `eligible`, `paid`, `not_eligible`]);
function Tt(e) {
  if (!e || typeof e != `object`) return null;
  let { status: t, txHash: n } = e;
  return typeof t != `string` || !wt.has(t)
    ? null
    : {
        status: t,
        txHash: typeof n == `string` && /^0x[0-9a-f]{64}$/i.test(n) ? n : null,
      };
}
function Et(e, t) {
  try {
    let n = JSON.parse(e?.getItem(bt(t)) ?? `[]`);
    return Array.isArray(n)
      ? n
          .map(St)
          .filter((e) => e !== null)
          .sort((e, t) => t.createdAt - e.createdAt)
      : [];
  } catch {
    return [];
  }
}
function Dt(e, t, n) {
  try {
    e?.setItem(bt(t), JSON.stringify(n.slice(0, yt)));
  } catch {}
}
function Ot(e, t, n) {
  let r = Et(e, t),
    i = r.findIndex((e) => e.orderId === n.orderId),
    a = St({ ...(i >= 0 ? r[i] : {}), ...n });
  return a
    ? (i >= 0 ? (r[i] = a) : r.unshift(a),
      r.sort((e, t) => t.createdAt - e.createdAt),
      Dt(e, t, r),
      r.slice(0, yt))
    : r;
}
var kt = new Set([
    `delivered`,
    `expired`,
    `canceled`,
    `cancelled`,
    `failed`,
    `paymentsetupfailed`,
  ]),
  At = (e) =>
    [e.paymentState, e.orderState, e.deliveryState].some(
      (e) => typeof e == `string` && kt.has(e.toLowerCase())
    ),
  jt = { VISA: 12, AMEX: 6 },
  Mt = (e) =>
    /visa/i.test(e) ? `VISA` : /amex|american express/i.test(e) ? `AMEX` : e;
function Nt(e) {
  let t = jt[Mt(e.brand)];
  if (!t) return null;
  let n = new Date(e.createdAt);
  return n.setUTCMonth(n.getUTCMonth() + t), n;
}
var Pt = (e) =>
    `${e.getUTCFullYear()}${String(e.getUTCMonth() + 1).padStart(
      2,
      `0`
    )}${String(e.getUTCDate()).padStart(2, `0`)}`,
  Ft = (e) => e.replace(/[\\;,]/g, (e) => `\\${e}`).replace(/\r?\n/g, `\\n`);
function It(e, t) {
  let n = Nt(e);
  if (!n) return null;
  let r = new Date(n.getTime() - 14 * 864e5),
    i = new Date(r.getTime() + 864e5),
    a = `Use your $${e.faceUsd} ${e.brand} before it expires`,
    o = `The ${e.brand} card you bought with Offyield on ${new Date(e.createdAt)
      .toISOString()
      .slice(0, 10)} expires around ${n
      .toISOString()
      .slice(0, 10)}. The code was emailed to you when it was delivered.`,
    s = new Date(t)
      .toISOString()
      .replace(/[-:]/g, ``)
      .replace(/\.\d{3}/, ``);
  return [
    `BEGIN:VCALENDAR`,
    `VERSION:2.0`,
    `PRODID:-//Offyield//My Cards//EN`,
    `CALSCALE:GREGORIAN`,
    `BEGIN:VEVENT`,
    `UID:${e.orderId}@offyield.com`,
    `DTSTAMP:${s}`,
    `DTSTART;VALUE=DATE:${Pt(r)}`,
    `DTEND;VALUE=DATE:${Pt(i)}`,
    `SUMMARY:${Ft(a)}`,
    `DESCRIPTION:${Ft(o)}`,
    `BEGIN:VALARM`,
    `ACTION:DISPLAY`,
    `TRIGGER:-P1D`,
    `DESCRIPTION:${Ft(a)}`,
    `END:VALARM`,
    `END:VEVENT`,
    `END:VCALENDAR`,
    ``,
  ].join(`\r
`);
}
var Lt = `0x0000000000000000000000000000000000000000`,
  U = (e) => e.toLowerCase();
function W(e, t) {
  throw new Je(e, t);
}
var Rt = (e) => {
    let t = e.wallet.account?.address;
    return t || W(`NO_WALLET`, `Connect a wallet first.`), t;
  },
  zt = B.chain.id === ce,
  Bt = 625000000n,
  Vt = 12500n,
  Ht = `Nothing was spent.`,
  Ut = /cancel|expir|fail|reject|refund|deliver|complet|close|void/i,
  Wt = (e) => e != null && (typeof e != `string` || Ut.test(e)),
  Gt = `The interest you spent is in your wallet as USDG.`,
  Kt = (e) => typeof e == `string` && /^0x[0-9a-fA-F]{40}$/.test(e);
function qt(e, t) {
  if (!e || typeof e != `object`) return null;
  let n = e,
    r = typeof n.network == `string` ? n.network : ``,
    i = Object.prototype.hasOwnProperty.call(ie, r) ? ie[r] : null,
    a =
      typeof n.coinUnits == `string` && /^[1-9]\d{0,19}$/.test(n.coinUnits)
        ? BigInt(n.coinUnits)
        : null,
    o = Number(n.faceUsd);
  return typeof n.orderId != `string` ||
    !/^[0-9a-f-]{16,64}$/i.test(n.orderId) ||
    !Kt(n.payTo) ||
    !Kt(t) ||
    n.coin !== `USDC` ||
    !i ||
    a === null ||
    typeof n.createdAt != `number` ||
    !Number.isSafeInteger(n.createdAt) ||
    typeof n.binding != `string` ||
    !/^[0-9a-f]{64}$/.test(n.binding) ||
    !Number.isFinite(o) ||
    o <= 0 ||
    a > Bt ||
    a > (BigInt(Math.round(o * 100)) * 10000n * Vt) / 10000n ||
    ne(n.payTo, i.chainId, t, `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`)
    ? null
    : {
        orderId: n.orderId,
        wallet: t,
        payTo: n.payTo,
        coinUnits: a,
        network: r,
        destChainId: i.chainId,
        destUsdc: i.usdc,
        createdAt: n.createdAt,
        payBy: n.createdAt + se,
        binding: n.binding,
        faceUsd: o,
      };
}
async function Jt(e, t, n) {
  let r = await ht(e, t, Zt(e, t.orderId)?.payFrom);
  if (r) return r;
  let i;
  try {
    i = await e.fetch(`${e.api}/api/spend/order/check`, {
      method: `POST`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({
        orderId: t.orderId,
        wallet: t.wallet,
        payTo: t.payTo,
        coinUnits: t.coinUnits.toString(),
        network: t.network,
        createdAt: t.createdAt,
        binding: t.binding,
      }),
    });
  } catch {
    return W(
      `READ_FAILED`,
      `Couldn't check the card order, so nothing was sent. ${n}`
    );
  }
  i.status === 404 &&
    W(
      `ORDER_UNAVAILABLE`,
      `Paying from interest is switched off right now. ${n}`
    ),
    (i.status === 409 || i.status === 401) &&
      W(
        `ORDER_NOT_PAYABLE`,
        `The card order is closed, or its payment details don't match what this page expects, so it won't pay it. ${n}`
      ),
    i.status === 410 &&
      W(`WINDOW_CLOSED`, `This card order is too old to pay. ${n}`);
  let a = await i.json().catch(() => null);
  (!i.ok || !a) &&
    W(
      `READ_FAILED`,
      `Couldn't check the card order, so nothing was sent. ${n}`
    );
  let o = [a.orderState, a.deliveryState].find(Wt);
  return (
    (o !== void 0 || !R.has(String(a.paymentState))) &&
      W(
        `ORDER_NOT_PAYABLE`,
        `The card order isn't waiting for payment (${String(
          o ?? a.paymentState ?? `unknown`
        ).slice(0, 40)}), so nothing was sent. ${n}`
      ),
    null
  );
}
var Yt = (e) => `offyield.interestpay.v1.${e}`,
  Xt = (e) => `offyield.interestpay.v1.spent.${U(e)}`;
function Zt(e, t) {
  try {
    let n = JSON.parse(e.storage?.getItem(Yt(t)) ?? `null`);
    return !n || n.v !== 1 || n.orderId !== t || typeof n.wallet != `string`
      ? null
      : n;
  } catch {
    return null;
  }
}
function Qt(e, t) {
  try {
    let n = JSON.parse(e.storage?.getItem(Xt(t)) ?? `{}`);
    return n && typeof n == `object` && !Array.isArray(n) ? n : {};
  } catch {
    return {};
  }
}
function $t(e, t, n, r) {
  let i = Qt(e, t);
  if (!i[U(n)]) {
    i[U(n)] = r;
    try {
      e.storage?.setItem(
        Xt(t),
        JSON.stringify(Object.fromEntries(Object.entries(i).slice(-32)))
      );
    } catch {}
  }
}
function en(e, t, n, r = !1) {
  let i = Zt(e, t.orderId) ?? {
      v: 1,
      orderId: t.orderId,
      wallet: U(t.wallet),
      at: e.now(),
    },
    a = { spendTx: i.spendTx, depositTx: i.depositTx };
  n(i),
    r ||
      (a.spendTx &&
        i.spendTx &&
        i.spendTx !== a.spendTx &&
        (i.spendTx = a.spendTx),
      a.depositTx &&
        i.depositTx &&
        i.depositTx !== a.depositTx &&
        (i.depositTx = a.depositTx)),
    (i.at = e.now());
  try {
    e.storage?.setItem(Yt(t.orderId), JSON.stringify(i));
  } catch {}
  return (
    i.spendConfirmed && i.spendTx && $t(e, t.wallet, i.spendTx, t.orderId), i
  );
}
var tn = f({ abi: C, name: `YieldSpent` });
function nn(e, t) {
  let n = 0n;
  for (let r of e.logs ?? [])
    if (U(r.address) === U(B.vault))
      try {
        let e = l({ abi: C, data: r.data, topics: r.topics });
        if (e.eventName !== `YieldSpent`) continue;
        let i = e.args;
        U(i.user) === U(t) && U(i.receiver) === U(t) && (n += i.assets);
      } catch {}
  return n;
}
async function rn(e, t, n) {
  let r = Rt(e),
    i = Qt(e, r);
  try {
    for (let a of n) {
      if (!/^\d{1,20}$/.test(a.fromBlock) || !/^[1-9]\d{0,30}$/.test(a.amount))
        continue;
      let n = BigInt(a.amount),
        o = await e.pub.getLogs({
          address: B.vault,
          event: tn,
          args: { user: r, receiver: r },
          fromBlock: BigInt(a.fromBlock),
          toBlock: `latest`,
        });
      for (let e of o) {
        let r = e.transactionHash,
          a = i[U(r)];
        if (!(a && a !== t.orderId) && e.args.assets === n)
          return { tx: r, amount: n };
      }
    }
    return null;
  } catch {
    return W(
      `READ_FAILED`,
      `Couldn't check for an earlier spend, so ${U(Ht)} Try again.`
    );
  }
}
async function an(e, t, n, r) {
  let i = (n, r = !1) => en(e, t, n, r);
  if (r.spendTx && !r.spendConfirmed) {
    let a = r.spendTx,
      o = await dt(e, a);
    o.out === `unknown` &&
      !(r.spends?.length && (await rn(e, t, r.spends))) &&
      (await st(e)) <= t.payBy &&
      W(
        `PENDING`,
        `Your earlier spend is still confirming. Wait a minute, then resume.`
      );
    let s = o.out === `success` ? nn(o.receipt, n) : 0n;
    r = i((e) => {
      s > 0n
        ? ((e.spendTx =
            o.out === `success` ? o.receipt.transactionHash ?? a : a),
          (e.spendConfirmed = !0),
          (e.spent = s.toString()))
        : e.spendTx === a && (delete e.spendTx, delete e.spent);
    }, !0);
  }
  if (!r.spendConfirmed && r.spends?.length) {
    let n = await rn(e, t, r.spends);
    n &&
      (r = i((e) => {
        (e.spendTx = n.tx),
          (e.spendConfirmed = !0),
          (e.spent = n.amount.toString());
      }, !0));
  }
  return r;
}
async function on(e, t) {
  try {
    let n = await e.pub.getBlockNumber({ cacheTime: 0 }),
      [r, i] = await Promise.all([
        e.pub.readContract({
          address: B.vault,
          abi: C,
          functionName: `spendableYieldOf`,
          args: [t],
          blockNumber: n,
        }),
        e.pub.readContract({
          address: B.vault,
          abi: C,
          functionName: `paused`,
          blockNumber: n,
        }),
      ]);
    if (typeof r != `bigint` || typeof i != `boolean`) throw Error(`shape`);
    return { spendable: r, paused: i };
  } catch {
    return W(
      `READ_FAILED`,
      `Couldn't read your interest right now. ${Ht} Try again.`
    );
  }
}
function sn(e, t) {
  t.payBy - e.now() < 36e4 &&
    W(
      `WINDOW_CLOSED`,
      `Too little time is left on this card order to pay it safely. ${Ht} Start a new order.`
    );
}
async function cn(e, t) {
  let n = Rt(e);
  U(n) !== U(t.wallet) &&
    W(`WRONG_ACCOUNT`, `This order belongs to a different wallet.`);
  let r = Zt(e, t.orderId);
  if ((r && (await an(e, t, n, r)))?.spendConfirmed)
    return {
      order: t,
      account: n,
      bridge: await ut(e, t, Gt),
      spend: 0n,
      spendable: 0n,
      spentAlready: !0,
    };
  sn(e, t),
    (await Jt(e, t, Ht)) &&
      W(
        `ORDER_NOT_PAYABLE`,
        `This card order has already been paid from this wallet.`
      );
  let i = await ut(e, t, Ht),
    { spendable: a, paused: o } = await on(e, n);
  o &&
    W(
      `DECLINED`,
      `Spending is paused right now. ${Ht} Withdrawals still work.`
    ),
    a < i.inputAmount &&
      W(
        `NOT_ENOUGH`,
        `This card needs about ${(Number(i.inputAmount) / 1e6).toFixed(
          2
        )} USDG of interest including the bridge fee. ${Ht}`
      );
  let s = re(i.inputAmount, 30);
  return {
    order: t,
    account: n,
    bridge: i,
    spend: a < s ? a : s,
    spendable: a,
    spentAlready: !1,
  };
}
var ln = new Set();
function un(e, t, n = () => {}) {
  let r = t.order.orderId;
  if (ln.has(r))
    return Promise.reject(
      new Je(`BUSY`, `This order is already being paid on this page.`)
    );
  ln.add(r);
  let i = () => dn(e, t, n),
    a = `offyield.stockspend.${U(t.order.wallet)}`;
  return (e.lock ? e.lock(a, i) : i()).finally(() => ln.delete(r));
}
async function dn(e, t, n) {
  let { order: r } = t,
    i = Rt(e);
  U(i) !== U(r.wallet) &&
    W(`WRONG_ACCOUNT`, `This order belongs to a different wallet.`),
    ot(e);
  let a = (t, n = !1) => en(e, r, t, n),
    o = a(() => {}),
    s = (e) => (
      a((t) => {
        (t.depositTx = e), (t.depositConfirmed = !0);
      }, !0),
      { depositTx: e, depositId: null, alreadyPaid: !0, leftoverUsdg: null }
    );
  if (
    (o.pending &&
      (o.pending.until > (await st(e)) &&
        W(
          `BUSY`,
          `A payment request from an earlier attempt may still be open in your wallet. Confirm or reject it there; you can retry here after ${new Date(
            o.pending.until
          ).toLocaleTimeString([], { hour: `numeric`, minute: `2-digit` })}.`
        ),
      (o = a((e) => delete e.pending))),
    o.depositTx)
  ) {
    let t = o.depositTx;
    if (o.depositConfirmed)
      return {
        depositTx: t,
        depositId: null,
        alreadyPaid: !0,
        leftoverUsdg: null,
      };
    let n = await dt(e, t);
    if (n.out === `success` && ft(n.receipt, r, i) !== null)
      return s(n.receipt.transactionHash ?? t);
    if (n.out === `unknown`) {
      let t = await ht(e, r, o.payFrom);
      if (t) return s(t);
      (await st(e)) <= (o.payDeadline ?? r.payBy) + 6e4 &&
        W(
          `PENDING`,
          `Your payment is still confirming. Wait a minute, then check again. Nothing new was sent.`
        );
    }
    o = a((e) => {
      e.depositTx === t && (delete e.depositTx, delete e.depositConfirmed);
    });
  }
  o = await an(e, r, i, o);
  let c = !1;
  if (o.spendConfirmed) n({ step: `spend`, state: `skipped`, tx: o.spendTx });
  else {
    t.spentAlready &&
      W(
        `BAD_ORDER`,
        `This page lost track of the spend. Refresh and try again.`
      ),
      n({ step: `check`, state: `active` }),
      sn(e, r);
    let l = await Jt(e, r, Ht);
    if (l) return s(l);
    (await ut(e, r, Ht)).inputAmount > t.spend &&
      W(
        `BRIDGE_FEE_HIGH`,
        `The bridge fee rose since you reviewed it. ${Ht} Review the new price.`
      );
    let { spendable: u, paused: d } = await on(e, i);
    d &&
      W(
        `DECLINED`,
        `Spending is paused right now. ${Ht} Withdrawals still work.`
      ),
      u < t.spend &&
        W(`NOT_ENOUGH`, `Your interest no longer covers this card. ${Ht}`),
      n({ step: `check`, state: `done` }),
      n({ step: `spend`, state: `active` });
    let f;
    try {
      f = await e.pub.getBlockNumber({ cacheTime: 0 });
    } catch {
      return W(
        `READ_FAILED`,
        `Couldn't read the chain, so ${U(Ht)} Try again.`
      );
    }
    a((e) => {
      e.spends = [
        ...(e.spends ?? []),
        { fromBlock: f.toString(), amount: t.spend.toString() },
      ].slice(-8);
    });
    let p = await pt(
        e,
        {
          address: B.vault,
          abi: v,
          functionName: `spendFromYield`,
          args: [t.spend, i],
        },
        {
          onHash: (t) => {
            a((e) => {
              e.spendTx = t;
            }),
              $t(e, i, t, r.orderId);
          },
          onReverted: (e) =>
            a((t) => {
              t.spendTx === e && delete t.spendTx;
            }),
        }
      ),
      m = nn(p.receipt, i);
    if (m !== t.spend) {
      let e = p.hash;
      a((t) => {
        m === 0n && t.spendTx === e
          ? delete t.spendTx
          : m > 0n && ((t.spendConfirmed = !0), (t.spent = m.toString()));
      }),
        W(
          `TX_FAILED`,
          m === 0n
            ? `The spend transaction didn't pay out any interest, so ${U(Ht)}`
            : `The spend paid a different amount than expected, so nothing was sent onward. ${Gt}`
        );
    }
    (o = a((e) => {
      (e.spendTx = p.hash), (e.spendConfirmed = !0), (e.spent = m.toString());
    }, !0)),
      (c = !0),
      n({ step: `spend`, state: `done`, tx: p.hash });
  }
  n({ step: `pay-check`, state: `active` });
  let l = await Jt(e, r, Gt);
  if (l) return n({ step: `pay-check`, state: `done` }), s(l);
  let u = await ut(e, r, Gt),
    d;
  try {
    d = await e.pub.readContract({
      address: de,
      abi: He,
      functionName: `balanceOf`,
      args: [i],
    });
  } catch {
    return W(
      `READ_FAILED`,
      `Couldn't read your USDG balance. ${Gt} Try again.`
    );
  }
  let f = o.spent && /^\d+$/.test(o.spent) ? BigInt(o.spent) : 0n;
  u.inputAmount > f &&
    W(
      `BRIDGE_FEE_HIGH`,
      `The bridge fee rose past what was spent, so nothing was sent. ${Gt} Resume to review the new fee.`
    ),
    u.inputAmount > d &&
      W(
        `NOT_ENOUGH`,
        `Your wallet has less USDG than this payment needs, so nothing was sent.`
      ),
    n({ step: `pay-check`, state: `done` }),
    n({ step: `pay-approve`, state: `active` });
  let p = e.now(),
    m = await mt(e, de, L.spokePool, u.inputAmount);
  if (
    (n({ step: `pay-approve`, state: m ? `done` : `skipped`, tx: m ?? void 0 }),
    n({ step: `pay`, state: `active` }),
    e.now() - p > 12e4)
  ) {
    let t = await ut(e, r, Gt);
    t.inputAmount > u.inputAmount &&
      W(
        `BRIDGE_FEE_HIGH`,
        `The bridge fee rose while you signed, so nothing was sent. ${Gt} Resume to try again.`
      ),
      (u = {
        ...t,
        inputAmount: u.inputAmount,
        fee: u.inputAmount - t.outputAmount,
      });
  }
  let h = await Jt(e, r, Gt);
  if (h) return s(h);
  let g = fe(e.now(), r.payBy);
  g === null &&
    W(
      `WINDOW_CLOSED`,
      `The card order's window is about to close, so nothing was sent. ${Gt}`
    );
  let _ = Math.floor(e.now() / 1e3);
  u.exclusivity > 0 &&
    g - _ < u.exclusivity + 120 &&
    (u = { ...u, exclusiveRelayer: Lt, exclusivity: 0 });
  let y;
  try {
    y = await e.pub.getBlockNumber({ cacheTime: 0 });
  } catch {
    return W(
      `READ_FAILED`,
      `Couldn't read the chain, so nothing was sent. ${Gt} Try again.`
    );
  }
  a((e) => {
    (e.pending = { fn: `payment`, until: g * 1e3 + 15e3 }),
      (e.payDeadline = g * 1e3),
      (!e.payFrom || BigInt(e.payFrom) > y) && (e.payFrom = y.toString());
  });
  let b = !1,
    x = !1,
    S;
  try {
    (S = await pt(
      e,
      {
        address: L.spokePool,
        abi: We,
        functionName: `depositV3`,
        args: [
          i,
          r.payTo,
          de,
          r.destUsdc,
          u.inputAmount,
          r.coinUnits,
          BigInt(r.destChainId),
          u.exclusiveRelayer,
          u.quoteTimestamp,
          g,
          u.exclusivity,
          `0x`,
        ],
      },
      {
        onPrompt: () => (b = !0),
        onHash: (e) => {
          (x = !0),
            a((t) => {
              (t.depositTx = e), delete t.pending;
            });
        },
        onReverted: (e) =>
          a((t) => {
            t.depositTx === e && delete t.depositTx;
          }),
      }
    )),
      a((e) => delete e.pending);
  } catch (e) {
    throw ((!b || x || e.code === `REJECTED`) && a((e) => delete e.pending), e);
  }
  let C = ft(S.receipt, r, i);
  if (C === null) {
    let e = S.hash;
    a((t) => {
      t.depositTx === e && delete t.depositTx;
    }),
      W(
        `TX_FAILED`,
        `The payment transaction didn't create a bridge deposit, so nothing was paid. ${Gt}`
      );
  }
  return (
    a((e) => {
      (e.depositTx = S.hash), (e.depositConfirmed = !0);
    }, !0),
    n({ step: `pay`, state: `done`, tx: S.hash }),
    {
      depositTx: S.hash,
      depositId: C,
      alreadyPaid: !1,
      leftoverUsdg: c ? f - u.inputAmount : null,
    }
  );
}
function fn(e, t) {
  let n = Zt(e, t),
    r =
      n?.spendConfirmed && n.spent && /^\d+$/.test(n.spent)
        ? BigInt(n.spent)
        : null;
  return {
    spent: r,
    depositTx: n?.depositTx ?? null,
    paid: !!n?.depositConfirmed,
    locked: ln.has(t) || r !== null || !!n?.depositTx || !!n?.pending,
  };
}
async function pn(e, t, n) {
  let r = async () => {
    if (fn(e, t).locked)
      return {
        cancelled: !1,
        message: `This order is being paid, or was paid, from your interest, so it can't be cancelled.`,
      };
    try {
      let n = await e.fetch(`${e.api}/api/spend/cancel`, {
          method: `POST`,
          headers: { "content-type": `application/json` },
          body: JSON.stringify({ orderId: t }),
        }),
        r = await n.json().catch(() => ({}));
      if (n.ok && r.cancelled === !0)
        return { cancelled: !0, message: `Order cancelled` };
    } catch {}
    return {
      cancelled: !1,
      message: `Couldn't cancel — it may already be paid or will expire on its own`,
    };
  };
  try {
    return await (e.lock ? e.lock(`offyield.stockspend.${U(n)}`, r) : r());
  } catch (e) {
    return { cancelled: !1, message: e.message };
  }
}
var mn = 100,
  hn = (e) => `offyield.activity.${e.toLowerCase()}`,
  gn = new Set([
    `swap`,
    `bridge-in`,
    `interest-pay`,
    `card-pay`,
    `card-refund`,
  ]);
function _n(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  if (
    typeof t.id != `string` ||
    t.id.length > 200 ||
    !gn.has(t.kind) ||
    typeof t.amount != `string` ||
    !/^\d{1,30}$/.test(t.amount) ||
    typeof t.at != `number` ||
    !Number.isFinite(t.at)
  )
    return null;
  let n =
    typeof t.txHash == `string` && /^0x[0-9a-fA-F]{64}$/.test(t.txHash)
      ? t.txHash
      : null;
  return {
    id: t.id,
    kind: t.kind,
    amount: t.amount,
    detail: typeof t.detail == `string` ? t.detail.slice(0, 80) : ``,
    txHash: n,
    at: t.at,
  };
}
function vn(e, t, n) {
  try {
    let r = JSON.parse(e?.getItem(hn(t)) ?? `[]`);
    return Array.isArray(r)
      ? r
          .map(_n)
          .filter((e) => e !== null && n - e.at < 2592e6)
          .sort((e, t) => t.at - e.at)
      : [];
  } catch {
    return [];
  }
}
function yn(e, t, n) {
  let r = n.at,
    i = vn(e, t, r);
  if (i.some((e) => e.id === n.id)) return;
  let a = _n({ ...n, amount: n.amount.toString() });
  if (a)
    try {
      e?.setItem(hn(t), JSON.stringify([a, ...i].slice(0, mn)));
    } catch {}
}
function bn() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
var xn = 4663,
  Sn = `0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73`,
  Cn = `0x78F3556b67E17Df817D51Ef5a990cDaF09E8d3A9`,
  wn = 10n ** 15n,
  Tn = 5n * 10n ** 14n,
  En = 30n,
  Dn = 300000n,
  On = 200000000n,
  kn = 120,
  An = 26 * 36e5,
  jn = 5 * 6e4,
  Mn = 150n,
  Nn = u([
    `function quoteExactInputSingle((address tokenIn, address tokenOut, uint256 amountIn, uint24 fee, uint160 sqrtPriceLimitX96) params) returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate)`,
  ]),
  Pn = u([
    `function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96) params) payable returns (uint256 amountOut)`,
    `function multicall(uint256 deadline, bytes[] data) payable returns (bytes[] results)`,
  ]),
  Fn = u([
    `event Transfer(address indexed from, address indexed to, uint256 value)`,
  ]),
  In = class extends Error {
    code;
    hash;
    constructor(e, t, n) {
      super(t), (this.code = e), (this.hash = n), (this.name = `SwapError`);
    }
  };
function G(e, t, n) {
  throw new In(e, t, n);
}
var Ln = {
  "Too little received": `The price moved before your swap went through, so nothing was swapped. Try again.`,
  "Transaction too old": `The swap took too long to confirm, so nothing was swapped. Try again.`,
};
function Rn(e) {
  if (e instanceof In) return e;
  if (e instanceof c) {
    if (e.walk((e) => e.code === 4001))
      return new In(
        `REJECTED`,
        `Signature request cancelled. Nothing was swapped.`
      );
    if (e.walk((e) => e instanceof g))
      return new In(
        `NOT_ENOUGH`,
        `Not enough ETH to cover this swap plus gas.`
      );
    let t = e.walk((e) => e instanceof y),
      n = t?.reason ?? t?.data?.errorName;
    return n
      ? new In(
          `REVERTED`,
          Ln[n] ?? `The swap would fail (${n}), so nothing was swapped.`
        )
      : new In(`TX_FAILED`, e.shortMessage);
  }
  return e instanceof Error ? e : Error(String(e));
}
function zn(e) {
  B.chain.id !== 4663 &&
    G(
      `WRONG_CHAIN`,
      `Swapping ETH to USDG works on Robinhood Chain mainnet only.`
    );
  let t = Pe();
  t || G(`NO_WALLET`, `No wallet found.`);
  let n = ke({ account: e, chain: Le, transport: we(t) });
  return {
    pub: E,
    wallet: n,
    now: () => Date.now(),
    ensureChain: async () => {
      try {
        await n.switchChain({ id: xn });
      } catch (e) {
        if (!e.walk?.((e) => e.code === 4902)) throw e;
        await n.addChain({ chain: Le }), await n.switchChain({ id: xn });
      }
    },
  };
}
var Bn = (e) => {
  let t = e.wallet.account?.address;
  return t || G(`NO_WALLET`, `Connect a wallet first.`), t;
};
function Vn(e, t) {
  let n = t !== void 0 && t > On ? t : On,
    r = e - wn - Dn * n;
  return r > 0n ? r : 0n;
}
async function Hn(e) {
  let t = (t) => e.pub.readContract({ address: Cn, abi: Ue, functionName: t }),
    [n, r] = await Promise.all([t(`latestRoundData`), t(`decimals`)]).catch(
      () =>
        G(`NO_PRICE`, `Couldn't read the ETH market price. Try again shortly.`)
    ),
    [, i, , a] = n,
    o = Number(a) * 1e3,
    s = e.now();
  return (
    (Number(r) !== 8 || typeof i != `bigint` || i <= 0n || o > s + jn) &&
      G(
        `NO_PRICE`,
        `The ETH market price looks wrong right now, so swaps are paused. Try again later.`
      ),
    s - o > An &&
      G(
        `NO_PRICE`,
        `The ETH market price is out of date, so swaps are paused. Try again later.`
      ),
    i
  );
}
async function Un(e, t) {
  t < Tn && G(`TOO_SMALL`, `Swap at least 0.0005 ETH.`);
  let [n, r] = await Promise.all([
    e.pub
      .simulateContract({
        address: ee.quoterV2,
        abi: Nn,
        functionName: `quoteExactInputSingle`,
        args: [
          {
            tokenIn: Sn,
            tokenOut: de,
            amountIn: t,
            fee: 100,
            sqrtPriceLimitX96: 0n,
          },
        ],
      })
      .then(
        ({ result: e }) => e[0],
        () => null
      ),
    Hn(e),
  ]);
  (typeof n != `bigint` || n <= 0n) &&
    G(`NO_MARKET`, `Couldn't get a swap price right now. Try again shortly.`);
  let i = (n * 10n ** 20n) / t;
  return (
    i * 10000n < r * (10000n - Mn) &&
      G(
        `PRICE_OFF`,
        `The swap price is more than 1.5% below the ETH market price right now, so swapping is paused to protect you. Try again later.`
      ),
    i * 10000n > r * 10500n &&
      G(
        `PRICE_OFF`,
        `The swap price is far from the ETH market price right now, so swapping is paused. Try again later.`
      ),
    {
      amountIn: t,
      usdgOut: n,
      minOut: (n * (10000n - En)) / 10000n,
      ethUsd8: r,
      impliedPrice: i,
    }
  );
}
function Wn(e, t) {
  let n = 0n;
  for (let r of p({ abi: Fn, logs: e, eventName: `Transfer` }))
    r.address.toLowerCase() === `0x5fc5360d0400a0fd4f2af552add042d716f1d168` &&
      r.args.from.toLowerCase() ===
        `0x52e65b17fb6e5ba00ed806f37afcd2daa50271ca` &&
      r.args.to.toLowerCase() === t.toLowerCase() &&
      (n += r.args.value);
  return n;
}
async function Gn(e, t) {
  let n = Bn(e),
    { amountIn: r, minOut: i } = t;
  r < Tn && G(`TOO_SMALL`, `Swap at least 0.0005 ETH.`),
    i <= 0n && G(`PRICE_MOVED`, `Review the swap again before confirming.`);
  let a = await e.pub.getBalance({ address: n }).catch(() => null);
  a === null && G(`READ_FAILED`, `Couldn't read your ETH balance. Try again.`),
    a < r + wn &&
      G(
        `NOT_ENOUGH`,
        `That leaves too little ETH for gas. Swap a little less (try Max).`
      );
  let o = await Un(e, r);
  o.usdgOut < i &&
    G(
      `PRICE_MOVED`,
      `The price moved since you reviewed it, so nothing was swapped. Check the new amount and try again.`
    );
  let s = o.minOut > i ? o.minOut : i,
    c = BigInt(Math.floor(e.now() / 1e3) + kn),
    l = O({
      abi: Pn,
      functionName: `exactInputSingle`,
      args: [
        {
          tokenIn: Sn,
          tokenOut: de,
          fee: 100,
          recipient: n,
          amountIn: r,
          amountOutMinimum: s,
          sqrtPriceLimitX96: 0n,
        },
      ],
    }),
    u;
  try {
    await e.ensureChain();
    let { request: t } = await e.pub.simulateContract({
      address: ee.swapRouter02,
      abi: Pn,
      functionName: `multicall`,
      args: [c, [l]],
      value: r,
      account: e.wallet.account,
    });
    u = await e.wallet.writeContract(t);
  } catch (e) {
    throw Rn(e);
  }
  let d = null,
    f;
  try {
    f = await e.pub.waitForTransactionReceipt({
      hash: u,
      onReplaced: (e) => {
        d = e;
      },
    });
  } catch {
    G(
      `UNCONFIRMED`,
      `Couldn't confirm the swap yet. Check it on the explorer before trying again.`,
      u
    );
  }
  let p = d;
  p &&
    p.reason !== `repriced` &&
    G(
      `TX_FAILED`,
      `The swap was cancelled or replaced in your wallet, so it didn't go through.`
    );
  let m = p?.transaction.hash ?? f.transactionHash ?? u;
  f.status !== `success` &&
    G(
      `TX_FAILED`,
      `The swap reverted on-chain, so nothing was swapped (only gas was spent).`,
      m
    );
  let h = Wn(f.logs, n);
  return (
    h < s &&
      G(
        `TX_FAILED`,
        `The swap confirmed, but the USDG it delivered couldn't be verified. Check your wallet before trying again.`,
        m
      ),
    { hash: m, usdgOut: h }
  );
}
var Kn = `https://api.relay.link`,
  qn = 4663,
  Jn = `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`,
  Yn = `0x4cD00E387622C35bDDB9b4c962C136462338BC31`,
  Xn = `0x0000000000000000000000000000000000000000`,
  Zn = 9600n,
  Qn = 200n,
  $n = 26 * 36e5,
  er = `250000`,
  tr = (e) => e === null || e < 50000000000000n,
  nr = { name: `Ether`, symbol: `ETH`, decimals: 18 },
  rr = { symbol: `ETH`, address: Xn, decimals: 18 },
  ir = [
    {
      chainId: 8453,
      name: `Base`,
      relayId: `base`,
      explorer: `https://basescan.org`,
      rpcUrls: [`https://mainnet.base.org`],
      nativeCurrency: nr,
      tokens: [
        {
          symbol: `USDC`,
          address: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`,
          decimals: 6,
        },
        {
          symbol: `USDT`,
          address: `0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2`,
          decimals: 6,
        },
        rr,
      ],
    },
    {
      chainId: 42161,
      name: `Arbitrum`,
      relayId: `arbitrum`,
      explorer: `https://arbiscan.io`,
      rpcUrls: [`https://arb1.arbitrum.io/rpc`],
      nativeCurrency: nr,
      tokens: [
        {
          symbol: `USDC`,
          address: `0xaf88d065e77c8cC2239327C5EDb3A432268e5831`,
          decimals: 6,
        },
        {
          symbol: `USDT`,
          address: `0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9`,
          decimals: 6,
        },
        rr,
      ],
    },
    {
      chainId: 1,
      name: `Ethereum`,
      relayId: `ethereum`,
      explorer: `https://etherscan.io`,
      rpcUrls: [`https://ethereum-rpc.publicnode.com`],
      nativeCurrency: nr,
      tokens: [
        {
          symbol: `USDC`,
          address: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
          decimals: 6,
        },
        {
          symbol: `USDT`,
          address: `0xdAC17F958D2ee523a2206206994597C13D831ec7`,
          decimals: 6,
          resetAllowance: !0,
        },
        rr,
      ],
    },
    {
      chainId: 10,
      name: `Optimism`,
      relayId: `optimism`,
      explorer: `https://optimistic.etherscan.io`,
      rpcUrls: [`https://mainnet.optimism.io`],
      nativeCurrency: nr,
      tokens: [
        {
          symbol: `USDC`,
          address: `0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85`,
          decimals: 6,
        },
        {
          symbol: `USDT`,
          address: `0x94b008aA00579c1307B0EF2c499aD98a8ce58e58`,
          decimals: 6,
        },
        rr,
      ],
    },
    {
      chainId: 137,
      name: `Polygon`,
      relayId: `polygon`,
      explorer: `https://polygonscan.com`,
      rpcUrls: [`https://polygon-bor-rpc.publicnode.com`],
      nativeCurrency: { name: `POL`, symbol: `POL`, decimals: 18 },
      tokens: [
        {
          symbol: `USDC`,
          address: `0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359`,
          decimals: 6,
        },
        {
          symbol: `USDT`,
          address: `0xc2132D05D31c914a87C6611C10748AEb04B58e8F`,
          decimals: 6,
        },
      ],
    },
  ],
  ar = (e) => ir.find((t) => t.chainId === e) ?? null,
  or = (e) =>
    e.address === `0x0000000000000000000000000000000000000000`
      ? 4000000000000000n
      : 10n * 10n ** BigInt(e.decimals),
  sr = null;
function cr() {
  let e = null;
  try {
    e = window.localStorage;
  } catch {}
  return (
    (sr ??= N({
      chain: Le,
      transport: _(void 0, { timeout: 1e4, retryCount: 2 }),
    })),
    {
      fetch: window.fetch.bind(window),
      now: () => Date.now(),
      storage: e,
      pub: sr,
    }
  );
}
var lr = u([
    `function depositNative(address depositor, bytes32 id)`,
    `function depositErc20(address depositor, address token, uint256 amount, bytes32 id)`,
  ]),
  ur = {
    Order: [
      { name: `version`, type: `string` },
      { name: `solverChainId`, type: `string` },
      { name: `solver`, type: `address` },
      { name: `salt`, type: `uint256` },
      { name: `inputs`, type: `Input[]` },
      { name: `output`, type: `Output` },
      { name: `fees`, type: `Fee[]` },
    ],
    Input: [
      { name: `payment`, type: `InputPayment` },
      { name: `refunds`, type: `InputRefund[]` },
    ],
    InputPayment: [
      { name: `chainId`, type: `string` },
      { name: `currency`, type: `bytes` },
      { name: `amount`, type: `uint256` },
      { name: `weight`, type: `uint256` },
    ],
    InputRefund: [
      { name: `chainId`, type: `string` },
      { name: `recipient`, type: `bytes` },
      { name: `currency`, type: `bytes` },
      { name: `minimumAmount`, type: `uint256` },
      { name: `deadline`, type: `uint32` },
      { name: `extraData`, type: `bytes` },
    ],
    Output: [
      { name: `chainId`, type: `string` },
      { name: `payments`, type: `OutputPayment[]` },
      { name: `deadline`, type: `uint32` },
      { name: `calls`, type: `bytes[]` },
      { name: `extraData`, type: `bytes` },
    ],
    OutputPayment: [
      { name: `recipient`, type: `bytes` },
      { name: `currency`, type: `bytes` },
      { name: `minimumAmount`, type: `uint256` },
      { name: `expectedAmount`, type: `uint256` },
    ],
    Fee: [
      { name: `recipientChainId`, type: `string` },
      { name: `recipient`, type: `bytes` },
      { name: `currencyChainId`, type: `string` },
      { name: `currency`, type: `bytes` },
      { name: `amount`, type: `uint256` },
    ],
  },
  dr = (e) => o({ types: ur, primaryType: `Order`, data: e }),
  K = (e, t) => typeof e == `string` && e.toLowerCase() === t.toLowerCase(),
  fr = (e) => (typeof e == `string` && /^\d{1,78}$/.test(e) ? BigInt(e) : null),
  pr = (e) => (typeof e == `string` || typeof e == `number` ? Number(e) : NaN),
  mr = /^0x[0-9a-fA-F]{64}$/;
function q(e) {
  throw Error(`${e} Nothing was sent.`);
}
async function hr(e) {
  let t = (t) => e.pub.readContract({ address: Cn, abi: Ue, functionName: t }),
    n,
    r;
  try {
    [n, r] = await Promise.all([t(`latestRoundData`), t(`decimals`)]);
  } catch {
    q(`Couldn't read the ETH market price. Try again shortly.`);
  }
  let [, i, , a] = Array.isArray(n) ? n : [],
    o = e.now() - Number(a) * 1e3;
  return (
    (Number(r) !== 8 ||
      typeof i != `bigint` ||
      i <= 0n ||
      !(o >= -3e5 && o <= $n)) &&
      q(`The ETH market price is unavailable or out of date. Try again later.`),
    i
  );
}
async function gr(e, t) {
  let { user: n, originChainId: r, amount: i, topupGas: a } = t;
  x(n, { strict: !1 }) || q(`Connect a wallet first.`);
  let o = ar(r),
    c = o?.tokens.find((e) => K(e.address, t.token));
  (!o || !c) && q(`That chain or token isn't supported for bridging in.`);
  let l = or(c);
  i < l &&
    q(
      `The minimum is ${s(l, c.decimals)} ${
        c.symbol
      }: below that, Relay's fees eat more than 1%.`
    );
  let u =
      c.address === `0x0000000000000000000000000000000000000000`
        ? await hr(e)
        : null,
    d,
    f;
  try {
    (d = await e.fetch(`${Kn}/quote/v2`, {
      method: `POST`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({
        user: n,
        recipient: n,
        refundTo: n,
        originChainId: r,
        destinationChainId: qn,
        originCurrency: c.address,
        destinationCurrency: Jn,
        amount: i.toString(),
        tradeType: `EXACT_INPUT`,
        includeProtocolData: !0,
        usePermit: !1,
        useDepositAddress: !1,
        ...(a ? { topupGas: !0, topupGasAmount: er } : {}),
      }),
    })),
      (f = await d.json());
  } catch {
    q(`Couldn't reach Relay. Check your connection and try again.`);
  }
  return (
    d.status === 429 &&
      q(`Relay is busy right now. Wait a minute and try again.`),
    (!d.ok || !f || typeof f != `object`) &&
      q(
        `Relay couldn't quote this (${
          typeof f?.message == `string`
            ? f.message.slice(0, 160)
            : `HTTP ${d.status}`
        }).`
      ),
    _r(
      f,
      { user: n, origin: o, token: c, amount: i, topupGas: a, ethUsd8: u },
      e.now()
    )
  );
}
function _r(e, t, n) {
  let { user: r, origin: i, token: a, amount: o } = t,
    s = a.address === Xn,
    c = e.details ?? {};
  (typeof e.requestId != `string` || !mr.test(e.requestId)) &&
    q(`Relay's quote has no valid request id.`);
  let l = c.currencyOut;
  (l?.currency?.chainId !== 4663 ||
    !K(l.currency.address, `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`)) &&
    q(`Relay quoted a token other than USDG on Robinhood Chain.`),
    K(c.recipient, r) || q(`Relay's quote pays a wallet other than yours.`);
  let u = c.currencyIn;
  (u?.currency?.chainId !== i.chainId || !K(u.currency.address, a.address)) &&
    q(`Relay quoted a different token than ${a.symbol} on ${i.name}.`),
    fr(u.amount) !== o &&
      q(`Relay quoted a different amount than you entered.`);
  let f = e.protocol?.v2,
    p = f?.orderData;
  (!f || !p) && q(`Relay's quote is missing the order it would settle.`),
    p.version !== `v1` &&
      q(`Relay's order is in a format this app doesn't know.`);
  let m = p.inputs?.length === 1 ? p.inputs[0] : null,
    h = m?.payment;
  (!h ||
    h.chainId !== i.relayId ||
    !K(h.currency, a.address) ||
    fr(h.amount) !== o) &&
    q(
      `Relay's order takes a different token, chain or amount than you entered.`
    );
  let g = m?.refunds;
  (!Array.isArray(g) ||
    g.length === 0 ||
    g.some(
      (e) =>
        !K(e.recipient, r) ||
        (e.chainId !== i.relayId && e.chainId !== `robinhood`)
    )) &&
    q(`Relay's order would refund to a wallet other than yours.`);
  let _ = p.output,
    v = _?.payments?.length === 1 ? _.payments[0] : null;
  (_?.chainId !== `robinhood` ||
    !v ||
    !K(v.currency, `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`)) &&
    q(`Relay's order pays a token other than USDG on Robinhood Chain.`),
    K(v.recipient, r) || q(`Relay's order pays a wallet other than yours.`),
    (!Array.isArray(_.calls) || _.calls.length !== 0) &&
      q(`Relay's order runs extra calls on Robinhood Chain.`),
    (!Array.isArray(p.fees) || p.fees.length !== 0) &&
      q(`Relay's order carries extra fees.`),
    (typeof _.deadline != `number` || _.deadline * 1e3 < n + 10 * 6e4) &&
      q(`Relay's order expires too soon. Get a new quote.`);
  let y = fr(v.minimumAmount),
    b = fr(v.expectedAmount);
  (!y || !b || y > b) && q(`Relay's order has no valid USDG amount.`),
    (fr(l.amount) !== b || fr(l.minimumAmount) !== y) &&
      q(`Relay's quote disagrees with its own order.`);
  let x;
  try {
    x = dr(p);
  } catch {
    q(`Relay's order couldn't be checked.`);
  }
  K(f.orderId, x) || q(`Relay's order id doesn't match its order.`),
    f.paymentDetails &&
      !K(
        f.paymentDetails.depository,
        `0x4cD00E387622C35bDDB9b4c962C136462338BC31`
      ) &&
      q(
        `Relay's quote names a deposit contract other than Relay's depository.`
      );
  let S = e.steps;
  (!Array.isArray(S) || S.length === 0 || S.length > 2) &&
    q(`Relay's quote has an unexpected number of steps.`);
  let C = !1,
    w = !1;
  for (let e of S) {
    e.kind !== `transaction` &&
      q(
        `Relay asked for a signature instead of a transaction. Only transactions are allowed.`
      ),
      (!Array.isArray(e.items) || e.items.length !== 1) &&
        q(`Relay's quote has an unexpected step.`);
    let t = e.items[0].data ?? {};
    t.chainId !== i.chainId &&
      q(`Relay's quote has a transaction on a chain other than ${i.name}.`),
      t.from !== void 0 &&
        !K(t.from, r) &&
        q(`Relay's quote has a transaction from another wallet.`);
    let n = fr(t.value ?? `0`);
    if (e.id === `approve` && !s && !C && !w) {
      (C = !0),
        K(t.to, a.address) ||
          q(`Relay's approval is for a token other than ${a.symbol}.`);
      let e;
      try {
        e = T({ abi: d, data: t.data });
      } catch {
        q(`Relay's approval step isn't an approval.`);
      }
      e.functionName !== `approve` &&
        q(`Relay's approval step isn't an approval.`);
      let [r, i] = e.args;
      K(r, `0x4cD00E387622C35bDDB9b4c962C136462338BC31`) ||
        q(`Relay asked you to approve a contract other than its depository.`),
        i !== o &&
          q(
            `Relay asked to approve more or less than exactly the amount you're sending. Only exact approvals are allowed.`
          ),
        n !== 0n && q(`Relay's approval step sends ETH.`);
    } else if (e.id === `deposit` && !w) {
      (w = !0),
        K(t.to, `0x4cD00E387622C35bDDB9b4c962C136462338BC31`) ||
          q(
            `Relay's deposit goes to a contract other than its pinned depository.`
          );
      let e;
      try {
        e = T({ abi: lr, data: t.data });
      } catch {
        q(`Relay's deposit calls an unexpected function.`);
      }
      let i = e.args;
      K(i[0], r) || q(`Relay's deposit credits a wallet other than yours.`),
        K(i[i.length - 1], x) ||
          q(`Relay's deposit isn't tied to the order that was checked.`),
        s
          ? (e.functionName !== `depositNative` &&
              q(`Relay's deposit doesn't match ETH.`),
            n !== o &&
              q(`Relay's deposit sends a different ETH amount than quoted.`))
          : ((e.functionName !== `depositErc20` || !K(i[1], a.address)) &&
              q(`Relay's deposit doesn't match ${a.symbol}.`),
            i[2] !== o &&
              q(`Relay's deposit moves a different amount than quoted.`),
            n !== 0n && q(`Relay's deposit also sends ETH.`));
    } else q(`Relay's quote has an unexpected step.`);
  }
  w || q(`Relay's quote has no deposit step.`);
  let E = pr(c.totalImpact?.percent);
  Number.isFinite(E) || q(`Relay's quote has no price impact.`),
    E < -1 &&
      q(
        `Relay's price would lose ${(-E).toFixed(
          2
        )}% of this amount to fees. Try a larger amount.`
      );
  let D = s
    ? (o * (t.ethUsd8 ?? 0n)) / 10n ** 20n
    : (o * 1000000n) / 10n ** BigInt(a.decimals);
  if (s) {
    let e = pr(u.amountUsd),
      t = Number.isFinite(e) && e > 0 ? BigInt(Math.round(e * 1e6)) : 0n,
      n = t > D ? t - D : D - t;
    (D <= 0n || n * 10000n > D * Qn) &&
      q(
        `Relay's price for ETH is too far from the market price. Try again later.`
      );
  }
  let k = c.currencyGasTopup,
    A = k && fr(k.amount) ? pr(k.amountUsd) : 0;
  t.topupGas
    ? (k &&
        (k.currency?.chainId !== 4663 ||
          !K(
            k.currency?.address,
            `0x0000000000000000000000000000000000000000`
          )) &&
        q(`Relay's gas top-up isn't ETH on Robinhood Chain.`),
      (A >= 0 && A <= 0.5) || q(`Relay's gas top-up is larger than asked.`))
    : A !== 0 && q(`Relay added a gas top-up you didn't ask for.`);
  let j = y + BigInt(Math.round(A * 1e6));
  (D <= 0n || j * 10000n < D * Zn) &&
    q(
      `Relay's guaranteed minimum is too far below what you'd send. Try again later.`
    );
  let M = {
      kind: `approve`,
      to: a.address,
      data: O({ abi: d, functionName: `approve`, args: [Yn, o] }),
      value: 0n,
      chainId: i.chainId,
    },
    N = {
      kind: `deposit`,
      to: Yn,
      data: O(
        s
          ? { abi: lr, functionName: `depositNative`, args: [r, x] }
          : {
              abi: lr,
              functionName: `depositErc20`,
              args: [r, a.address, o, x],
            }
      ),
      value: s ? o : 0n,
      chainId: i.chainId,
    },
    P = pr(c.timeEstimate);
  return {
    requestId: e.requestId,
    user: r,
    originChainId: i.chainId,
    token: a,
    amount: o,
    steps: s ? [N] : [M, N],
    outUsdg: b,
    minOutUsdg: y,
    gasTopupUsd: A,
    impactPct: E,
    timeEstimateS: Number.isFinite(P) && P >= 0 ? P : null,
    feesUsd: Math.max(0, -pr(c.totalImpact?.usd) || 0),
    quotedAt: n,
  };
}
var vr = (e) => `0x${e.toString(16)}`,
  yr = (e) => e?.code === 4001;
async function br(e, t, n) {
  try {
    return await e.request({ method: t, params: n });
  } catch (e) {
    throw yr(e)
      ? Error(`You declined in your wallet.`)
      : Error(
          `Your wallet refused: ${e?.message ?? `unknown error`}`.slice(0, 240)
        );
  }
}
async function xr(e, t) {
  let n = vr(t.chainId);
  try {
    await e.request({
      method: `wallet_switchEthereumChain`,
      params: [{ chainId: n }],
    });
  } catch (r) {
    if (r?.code !== 4902)
      throw yr(r) ? Error(`Switch your wallet to ${t.name} to continue.`) : r;
    await br(e, `wallet_addEthereumChain`, [
      {
        chainId: n,
        chainName: t.name,
        nativeCurrency: t.nativeCurrency,
        rpcUrls: t.rpcUrls,
        blockExplorerUrls: [t.explorer],
      },
    ]),
      await br(e, `wallet_switchEthereumChain`, [{ chainId: n }]);
  }
}
async function Sr(e, t, n = 1, r = 0) {
  for (let i = 0; i < n; i++) {
    i && (await Cr(r));
    let n = await br(e, `eth_chainId`, []);
    if (typeof n == `string` && Number.parseInt(n, 16) === t.chainId) return;
  }
  throw Error(
    `Your wallet left ${t.name} partway through. Nothing more was sent; start again from Get quote.`
  );
}
var Cr = (e) => new Promise((t) => setTimeout(t, e));
async function wr(e, t, n) {
  let r = n.now() + n.timeoutMs;
  for (;;) {
    let i = await e
      .request({ method: `eth_getTransactionReceipt`, params: [t] })
      .catch(() => null);
    if (i) return i;
    if (n.now() >= r) return null;
    await Cr(n.pollMs);
  }
}
async function Tr(e, t, n, r = () => {}, i = {}) {
  let a = { pollMs: 2e3, timeoutMs: 3 * 6e4, now: Date.now, ...i },
    o = ar(n.originChainId);
  if (!o) throw Error(`That chain isn't supported for bridging in.`);
  if (!K(n.user, t))
    throw Error(
      `The connected wallet changed since this quote. Get a new quote.`
    );
  if (a.now() - n.quotedAt > 3e5)
    throw Error(`This quote is more than 5 minutes old. Get a fresh one.`);
  r({ step: `switch`, state: `active` }),
    await xr(e, o),
    await Sr(e, o, 10, Math.min(a.pollMs, 300)),
    r({ step: `switch`, state: `done` });
  let s = async (n, r, i) => {
      await Sr(e, o);
      let a = await br(e, `eth_sendTransaction`, [
        { from: t, to: n, data: r, value: vr(i), chainId: vr(o.chainId) },
      ]);
      if (typeof a != `string` || !mr.test(a))
        throw Error(`Your wallet didn't return a transaction hash.`);
      return a;
    },
    c = async (t, n) => {
      let r = await wr(e, t, a);
      if (r && r.status !== `0x1`)
        throw Error(
          `The ${n} transaction failed on ${o.name} (${t}). Nothing moved but the network fee.`
        );
      return r !== null;
    };
  for (let i of n.steps) {
    if ((r({ step: i.kind, state: `active` }), i.kind === `approve`)) {
      await Sr(e, o);
      let i = await br(e, `eth_call`, [
          {
            to: n.token.address,
            data: O({ abi: d, functionName: `allowance`, args: [t, Yn] }),
          },
          `latest`,
        ]),
        a =
          typeof i == `string` && /^0x[0-9a-fA-F]{1,64}$/.test(i)
            ? BigInt(i)
            : null;
      if (a === null)
        throw Error(`Couldn't read your ${n.token.symbol} allowance.`);
      if (a >= n.amount) {
        r({ step: `approve`, state: `skipped` });
        continue;
      }
      if (n.token.resetAllowance && a > 0n) {
        let e = O({ abi: d, functionName: `approve`, args: [Yn, 0n] }),
          t = await s(n.token.address, e, 0n);
        if (!(await c(t, `allowance reset`)))
          throw Error(
            `The allowance reset (${t}) is still confirming. Try again in a minute.`
          );
      }
    }
    let a = await s(i.to, i.data, i.value);
    r({ step: i.kind, state: `sent`, tx: a });
    let l = await c(a, i.kind === `approve` ? `approval` : `deposit`);
    if (i.kind === `deposit`)
      return (
        l && r({ step: `deposit`, state: `done`, tx: a }),
        { requestId: n.requestId, depositTx: a, confirmed: l }
      );
    if (!l)
      throw Error(
        `The approval (${a}) is still confirming after 3 minutes. Once it confirms, get a new quote: it won't be asked for again.`
      );
    r({ step: `approve`, state: `done`, tx: a });
  }
  throw Error(`This quote has no deposit step.`);
}
var Er = new Map([
    [`waiting`, `waiting`],
    [`depositing`, `pending`],
    [`pending`, `pending`],
    [`submitted`, `pending`],
    [`delayed`, `pending`],
    [`success`, `success`],
    [`refund`, `refund`],
    [`failure`, `failure`],
  ]),
  Dr = (e) => e === `success` || e === `refund` || e === `failure`;
async function Or(e, t) {
  if (!mr.test(t)) return { state: `unknown` };
  try {
    let n = await e(`${Kn}/intents/status/v3?requestId=${t}`);
    if (!n.ok) return { state: `unknown` };
    let r = await n.json(),
      i = (typeof r?.status == `string` && Er.get(r.status)) || `unknown`,
      a = Array.isArray(r.txHashes)
        ? r.txHashes.find((e) => typeof e == `string` && mr.test(e))
        : void 0;
    return i === `success` && a ? { state: i, destTx: a } : { state: i };
  } catch {
    return { state: `unknown` };
  }
}
var kr = 10,
  Ar = 8 * 864e5,
  jr = (e) => `offyield.bridgeIn.${e.toLowerCase()}`;
function Mr(e, t) {
  try {
    let n = JSON.parse(e.storage?.getItem(jr(t)) ?? `[]`);
    if (!Array.isArray(n)) return [];
    let r = e.now() - Ar;
    return n
      .map((e) => {
        let t = fr(e?.amount),
          n = fr(e?.outUsdg);
        return typeof e?.requestId != `string` ||
          !mr.test(e.requestId) ||
          !ar(e.originChainId) ||
          typeof e.symbol != `string` ||
          e.symbol.length > 8 ||
          t === null ||
          n === null ||
          typeof e.createdAt != `number` ||
          e.createdAt < r
          ? null
          : {
              requestId: e.requestId,
              originChainId: e.originChainId,
              symbol: e.symbol,
              amount: t,
              outUsdg: n,
              createdAt: e.createdAt,
            };
      })
      .filter((e) => e !== null)
      .sort((e, t) => t.createdAt - e.createdAt)
      .slice(0, kr);
  } catch {
    return [];
  }
}
function Nr(e, t, n) {
  try {
    e.storage?.setItem(
      jr(t),
      JSON.stringify(
        n
          .slice(0, kr)
          .map((e) => ({
            ...e,
            amount: e.amount.toString(),
            outUsdg: e.outUsdg.toString(),
          }))
      )
    );
  } catch {}
}
function Pr(e, t, n) {
  Nr(e, t, [n, ...Mr(e, t).filter((e) => e.requestId !== n.requestId)]);
}
function Fr(e, t, n) {
  Nr(
    e,
    t,
    Mr(e, t).filter((e) => e.requestId !== n)
  );
}
var Ir = new Map(),
  Lr = (e) => Ir.get(e.toLowerCase()) ?? null;
function Rr(e, t, n, r, i) {
  let a = Lr(n);
  if (a) return a;
  let o = {
    requestId: r.requestId,
    originChainId: r.originChainId,
    symbol: r.token.symbol,
    amount: r.amount,
    outUsdg: r.outUsdg,
    createdAt: e.now(),
  };
  Pr(e, n, o);
  let s = { quote: r, record: o, steps: {}, onSteps: null };
  return (
    (s.promise = Tr(
      t,
      n,
      r,
      (e) => {
        (s.steps = { ...s.steps, [e.step]: e }), s.onSteps?.(s.steps);
      },
      i
    )
      .catch((t) => {
        throw (Fr(e, n, o.requestId), t);
      })
      .finally(() => Ir.delete(n.toLowerCase()))),
    Ir.set(n.toLowerCase(), s),
    s
  );
}
var J = n(),
  zr = Le.blockExplorers.default.url,
  Br = [
    [`switch`, `Switch network`],
    [`approve`, `Approve exact amount`],
    [`deposit`, `Send`],
  ],
  Vr = (e) => (e ? e.slice(0, 6) + `…` + e.slice(-4) : ``),
  Hr = (e) => (Number(e) / 1e6).toFixed(2),
  Ur = { color: `var(--ink-soft)` },
  Wr = { fontSize: `0.8rem`, color: `var(--ink-faint)`, lineHeight: 1.5 };
function Gr(e, t) {
  let n = RegExp(`^(\\d+)(?:\\.(\\d{0,${t}}))?$`).exec(e.trim());
  return n ? BigInt(n[1] + (n[2] ?? ``).padEnd(t, `0`)) : null;
}
var Kr = {
  waiting: `Waiting for Relay to see your deposit…`,
  pending: `Relay is delivering to Robinhood Chain…`,
  unknown: `Checking with Relay…`,
};
function qr({ account: e, ethOn4663: t, toast: n, onArrived: r }) {
  let [i, a] = (0, V.useState)(ir[0].chainId),
    o = ar(i),
    [c, l] = (0, V.useState)(o.tokens[0].address),
    u = o.tokens.find((e) => e.address === c) ?? o.tokens[0],
    [d, f] = (0, V.useState)(``),
    [p, m] = (0, V.useState)(`form`),
    [h, g] = (0, V.useState)(null),
    [_, v] = (0, V.useState)({}),
    [y, b] = (0, V.useState)(null),
    [x, S] = (0, V.useState)(null),
    [C, w] = (0, V.useState)(null),
    T = (0, V.useRef)({ toast: n, onArrived: r });
  T.current = { toast: n, onArrived: r };
  let E = (0, V.useRef)(new Set()),
    D = (0, V.useRef)(null),
    O = tr(t ?? null),
    k = (e) => {
      (D.current = e),
        (e.onSteps = v),
        g(e.quote),
        v(e.steps),
        b(null),
        w(null),
        S(null),
        m(`running`),
        e.promise.then(
          () => {
            D.current === e && ((D.current = null), S(e.record), m(`tracking`));
          },
          (t) => {
            D.current === e && ((D.current = null), b(t.message), m(`error`));
          }
        );
    },
    A = () => {
      D.current?.onSteps === v && (D.current.onSteps = null),
        (D.current = null);
    },
    j = () => {
      A();
      let t = e ? Lr(e) : null;
      if (t) {
        k(t);
        return;
      }
      let [n] = e ? Mr(cr(), e) : [];
      g(null),
        v({}),
        b(null),
        w(null),
        S(n ?? null),
        m(n ? `tracking` : `form`);
    };
  (0, V.useEffect)(() => (j(), A), [e]),
    (0, V.useEffect)(() => {
      if (!x || !e) return;
      let t = cr(),
        n = Date.now(),
        r = !0,
        i = null,
        a = async () => {
          let o = await Or(t.fetch, x.requestId);
          if (r) {
            if ((w(o), !Dr(o.state))) {
              i = setTimeout(a, Date.now() - n > 30 * 6e4 ? 6e4 : 4e3);
              return;
            }
            Fr(t, e, x.requestId),
              !E.current.has(x.requestId) &&
                (E.current.add(x.requestId),
                o.state === `success`
                  ? (yn(bn(), e, {
                      id: `bridge:${x.requestId}`,
                      kind: `bridge-in`,
                      amount: x.outUsdg,
                      detail: `${x.symbol} from ${
                        ar(x.originChainId)?.name ?? `another chain`
                      }`,
                      txHash: o.destTx ?? null,
                      at: Date.now(),
                    }),
                    T.current.toast(
                      `Arrived — ${Hr(x.outUsdg)} USDG is in your wallet`
                    ),
                    T.current.onArrived?.(x.outUsdg))
                  : T.current.toast(
                      o.state === `refund`
                        ? `Relay refunded this bridge to your wallet`
                        : `Relay couldn't complete this bridge`
                    ));
          }
        };
      return (
        a(),
        () => {
          (r = !1), clearTimeout(i);
        }
      );
    }, [x, e]);
  let M = Gr(d, u.decimals),
    N = or(u),
    P =
      d && M === null
        ? `Enter an amount with at most ${u.decimals} decimals.`
        : M !== null && M < N
        ? `The minimum is ${s(N, u.decimals)} ${u.symbol}.`
        : null,
    F = async () => {
      if (!(!e || M === null || P)) {
        m(`quoting`), b(null);
        try {
          g(
            await gr(cr(), {
              user: e,
              originChainId: i,
              token: u.address,
              amount: M,
              topupGas: O,
            })
          ),
            m(`review`);
        } catch (e) {
          b(e.message), n(e.message), m(`form`);
        }
      }
    },
    ee = () => {
      let t = Pe();
      if (!t) {
        n(`No wallet found.`);
        return;
      }
      let r = Rr(cr(), t, e, h);
      r.promise.catch((e) => n(e.message)), k(r);
    },
    I = (e, t) =>
      (0, J.jsxs)(`a`, {
        className: `addr-mono`,
        href: `${e}/tx/${t}`,
        target: `_blank`,
        rel: `noreferrer noopener`,
        style: { color: `inherit` },
        children: [Vr(t), ` ↗`],
      }),
    L = h ? ar(h.originChainId) : o,
    te = x ? ar(x.originChainId) : o,
    R = C?.state ?? `unknown`;
  return (0, J.jsxs)(`div`, {
    className: `fade-in`,
    children: [
      (p === `form` || p === `quoting`) &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsxs)(`div`, {
              className: `form-row`,
              children: [
                (0, J.jsx)(`label`, {
                  className: `field-label`,
                  htmlFor: `bi-chain`,
                  children: `From`,
                }),
                (0, J.jsx)(`select`, {
                  id: `bi-chain`,
                  className: `input`,
                  disabled: p === `quoting`,
                  value: i,
                  onChange: (e) => {
                    let t = ar(Number(e.target.value));
                    a(t.chainId), l(t.tokens[0].address), b(null);
                  },
                  children: ir.map((e) =>
                    (0, J.jsx)(
                      `option`,
                      { value: e.chainId, children: e.name },
                      e.chainId
                    )
                  ),
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `form-row`,
              children: [
                (0, J.jsx)(`label`, {
                  className: `field-label`,
                  htmlFor: `bi-token`,
                  children: `Token`,
                }),
                (0, J.jsx)(`select`, {
                  id: `bi-token`,
                  className: `input`,
                  disabled: p === `quoting`,
                  value: u.address,
                  onChange: (e) => {
                    l(e.target.value), b(null);
                  },
                  children: o.tokens.map((e) =>
                    (0, J.jsx)(
                      `option`,
                      { value: e.address, children: e.symbol },
                      e.address
                    )
                  ),
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `form-row`,
              children: [
                (0, J.jsxs)(`label`, {
                  className: `field-label`,
                  htmlFor: `bi-amt`,
                  children: [
                    `Amount (`,
                    u.symbol,
                    ` on `,
                    o.name,
                    `) · minimum `,
                    s(N, u.decimals),
                    ` `,
                    u.symbol,
                  ],
                }),
                (0, J.jsx)(`input`, {
                  id: `bi-amt`,
                  className: `input mono`,
                  type: `text`,
                  inputMode: `decimal`,
                  disabled: p === `quoting`,
                  value: d,
                  onChange: (e) => {
                    f(e.target.value), b(null);
                  },
                  placeholder: `min ${s(N, u.decimals)}`,
                }),
              ],
            }),
            P &&
              (0, J.jsx)(`div`, {
                className: `split-total bad`,
                style: { marginBottom: `0.6rem` },
                children: (0, J.jsx)(`span`, { children: P }),
              }),
            y &&
              (0, J.jsx)(`div`, {
                className: `split-total bad`,
                style: { marginBottom: `0.6rem` },
                children: (0, J.jsx)(`span`, { children: y }),
              }),
            (0, J.jsxs)(`div`, {
              style: { ...Wr, marginBottom: `0.9rem` },
              children: [
                `USDG arrives in this same wallet on Robinhood Chain; deposit it into the vault afterwards.`,
                O &&
                  ` Includes about $0.25 of ETH there for gas, since this wallet has almost none.`,
              ],
            }),
            (0, J.jsx)(`button`, {
              className: `btn`,
              disabled: !e || p === `quoting` || M === null || !!P,
              style: { justifyContent: `center`, width: `100%` },
              onClick: F,
              children: p === `quoting` ? `Getting quote…` : `Get quote`,
            }),
            !e &&
              (0, J.jsx)(`div`, {
                style: { ...Wr, marginTop: `0.6rem` },
                children: `Connect a wallet first.`,
              }),
          ],
        }),
      p === `review` &&
        h &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, { style: Ur, children: `You send` }),
                (0, J.jsxs)(`b`, {
                  children: [
                    s(h.amount, h.token.decimals),
                    ` `,
                    h.token.symbol,
                    ` on `,
                    L.name,
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, { style: Ur, children: `You receive` }),
                (0, J.jsxs)(`b`, {
                  children: [`≈ `, Hr(h.outUsdg), ` USDG on Robinhood Chain`],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: Ur,
                  children: `Guaranteed at least`,
                }),
                (0, J.jsxs)(`b`, { children: [Hr(h.minOutUsdg), ` USDG`] }),
              ],
            }),
            h.gasTopupUsd > 0 &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: Ur,
                    children: `Plus gas on Robinhood Chain`,
                  }),
                  (0, J.jsxs)(`b`, {
                    children: [`+ ~$`, h.gasTopupUsd.toFixed(2), ` of ETH`],
                  }),
                ],
              }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: Ur,
                  children: `Fees and price impact`,
                }),
                (0, J.jsxs)(`b`, {
                  children: [
                    `≈ $`,
                    h.feesUsd.toFixed(2),
                    ` (`,
                    Math.abs(h.impactPct).toFixed(2),
                    `%)`,
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, { style: Ur, children: `Time` }),
                (0, J.jsx)(`b`, {
                  children:
                    h.timeEstimateS === null
                      ? `a few minutes`
                      : h.timeEstimateS < 60
                      ? `≈ ${Math.max(1, h.timeEstimateS)} seconds`
                      : `≈ ${Math.round(h.timeEstimateS / 60)} min`,
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, { style: Ur, children: `Route` }),
                (0, J.jsx)(`b`, { children: `Relay (third-party bridge)` }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              style: { ...Wr, margin: `0.6rem 0` },
              children: [
                `Relay is a third-party bridge, not part of Offyield. Your wallet sends to Relay's deposit contract on `,
                L.name,
                h.token.address === `0x0000000000000000000000000000000000000000`
                  ? ``
                  : ` after approving exactly this amount`,
                `; Relay delivers USDG to this same wallet. If it can't, it refunds this wallet. You also pay `,
                L.name,
                ` network gas. Quotes last 5 minutes.`,
              ],
            }),
            (0, J.jsxs)(`div`, {
              style: { display: `flex`, gap: `0.5rem` },
              children: [
                (0, J.jsx)(`button`, {
                  className: `btn`,
                  onClick: ee,
                  children: `Bridge`,
                }),
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  onClick: () => {
                    g(null), m(`form`);
                  },
                  children: `Cancel`,
                }),
              ],
            }),
          ],
        }),
      p === `running` &&
        h &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          style: { display: `grid`, gap: `0.4rem` },
          children: [
            Br.filter(
              ([e]) =>
                e !== `approve` || h.steps.some((e) => e.kind === `approve`)
            ).map(([e, t]) => {
              let n = _[e];
              return (0, J.jsxs)(
                `div`,
                {
                  className: `route-line`,
                  style: { opacity: n ? 1 : 0.5 },
                  children: [
                    (0, J.jsxs)(`span`, {
                      children: [
                        n?.state === `done`
                          ? `✓`
                          : n?.state === `skipped`
                          ? `–`
                          : n
                          ? `…`
                          : `·`,
                        ` `,
                        t,
                        e === `switch` ? ` to ${L.name}` : ``,
                      ],
                    }),
                    (0, J.jsx)(`span`, {
                      children: n?.tx
                        ? I(L.explorer, n.tx)
                        : n?.state === `skipped`
                        ? `already approved`
                        : n?.state === `active` && e !== `switch`
                        ? `confirm in wallet`
                        : ``,
                    }),
                  ],
                },
                e
              );
            }),
            (0, J.jsx)(`div`, {
              style: { ...Wr, marginTop: `0.4rem` },
              children: `Keep this page open and confirm each request in your wallet.`,
            }),
          ],
        }),
      p === `tracking` &&
        x &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsx)(`div`, {
              className:
                `split-total ` +
                (R === `success`
                  ? `ok`
                  : R === `refund` || R === `failure`
                  ? `bad`
                  : ``),
              style: { marginBottom: `0.6rem` },
              children: (0, J.jsx)(`span`, {
                children:
                  R === `success`
                    ? `Arrived — ${Hr(x.outUsdg)} USDG is in your wallet`
                    : R === `refund`
                    ? `Refunded to your wallet on ${te.name}`
                    : R === `failure`
                    ? `Relay couldn't complete this bridge. Contact Relay support with request ${Vr(
                        x.requestId
                      )} if no refund arrives.`
                    : Kr[R],
              }),
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, { style: Ur, children: `Bridging` }),
                (0, J.jsxs)(`b`, {
                  children: [
                    s(
                      x.amount,
                      te.tokens.find((e) => e.symbol === x.symbol)?.decimals ??
                        18
                    ),
                    ` `,
                    x.symbol,
                    ` from `,
                    te.name,
                  ],
                }),
              ],
            }),
            _.deposit?.tx &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsxs)(`span`, {
                    style: Ur,
                    children: [`Deposit on `, te.name],
                  }),
                  I(te.explorer, _.deposit.tx),
                ],
              }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, { style: Ur, children: `Relay request` }),
                (0, J.jsx)(`span`, {
                  className: `addr-mono`,
                  children: Vr(x.requestId),
                }),
              ],
            }),
            C?.destTx &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: Ur,
                    children: `Delivered on Robinhood Chain`,
                  }),
                  I(zr, C.destTx),
                ],
              }),
            (0, J.jsx)(`div`, {
              style: { display: `flex`, gap: `0.5rem`, marginTop: `0.75rem` },
              children: Dr(R)
                ? (0, J.jsx)(`button`, {
                    className: `btn ghost sm`,
                    onClick: j,
                    children: `Bridge more`,
                  })
                : (0, J.jsx)(`button`, {
                    className: `btn ghost sm`,
                    onClick: () => {
                      Fr(cr(), e, x.requestId), j();
                    },
                    children: `Stop following`,
                  }),
            }),
            !Dr(R) &&
              (0, J.jsx)(`div`, {
                style: { ...Wr, marginTop: `0.6rem` },
                children: `You can close this page: the bridge continues, and this panel picks it up again next time. "Stop following" only hides it here; use it if you never confirmed the deposit in your wallet.`,
              }),
          ],
        }),
      p === `error` &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsx)(`div`, {
              className: `split-total bad`,
              style: { marginBottom: `0.6rem` },
              children: (0, J.jsx)(`span`, { children: y }),
            }),
            (0, J.jsx)(`button`, {
              className: `btn ghost sm`,
              onClick: () => {
                g(null), m(`form`);
              },
              children: `Back`,
            }),
          ],
        }),
    ],
  });
}
var Jr = { fontSize: `0.85rem`, color: `var(--ink-soft)`, lineHeight: 1.55 },
  Yr = {
    fontSize: `0.75rem`,
    color: `var(--ink-faint)`,
    lineHeight: 1.5,
    marginTop: `0.75rem`,
  },
  Xr = 10n ** 18n,
  Zr = Tn + Xr - Vn(Xr),
  Qr = (e) => {
    let [t, n = ``] = h(e).split(`.`),
      r = n.slice(0, 6).replace(/0+$/, ``);
    return r ? `${t}.${r}` : t;
  },
  $r = (e) => {
    try {
      let t = Ve(e.trim());
      return t > 0n ? t : null;
    } catch {
      return null;
    }
  },
  ei = (e) =>
    (Number(e) / 1e8).toLocaleString(`en-US`, { maximumFractionDigits: 2 });
function ti({ account: e, ethBalance: t, toast: n, onSwapped: r }) {
  let [i, a] = (0, V.useState)(``),
    [o, s] = (0, V.useState)(null),
    [c, l] = (0, V.useState)(!1),
    [u, d] = (0, V.useState)(null),
    [f, p] = (0, V.useState)(null),
    [m, g] = (0, V.useState)(!1),
    [_, v] = (0, V.useState)(0),
    y = $r(i),
    x = t == null ? 0n : Vn(t),
    S = y !== null && y < Tn,
    C = y !== null && y > x,
    w = B.chain.id === xn;
  (0, V.useEffect)(() => {
    if ((s(null), !e || !w || y === null || S || C)) {
      l(!1);
      return;
    }
    let t = !0;
    l(!0);
    let n = setTimeout(() => {
      Promise.resolve()
        .then(() => Un(zn(e), y))
        .then(
          (e) => {
            t && s(e);
          },
          (e) => {
            t && d((t) => (t?.hash ? t : { message: e.message }));
          }
        )
        .finally(() => {
          t && l(!1);
        });
    }, 500);
    return () => {
      (t = !1), clearTimeout(n);
    };
  }, [e, w, y, S, C, _]);
  let T = (e) => {
      a(e), d(null), p(null);
    },
    E = async () => {
      g(!0), d(null), p(null);
      try {
        let t = await Gn(zn(e), o);
        p(t),
          a(``),
          yn(bn(), e, {
            id: `swap:${t.hash}`,
            kind: `swap`,
            amount: t.usdgOut,
            detail: `${Qr(o.amountIn)} ETH → USDG`,
            txHash: t.hash,
            at: Date.now(),
          }),
          n(`Swapped for ${b(t.usdgOut)} USDG`),
          r?.(t.usdgOut);
      } catch (e) {
        d({ message: e.message, hash: e.hash }),
          n(e.message),
          e.hash || v((e) => e + 1);
      } finally {
        g(!1);
      }
    };
  if (!w)
    return (0, J.jsx)(`div`, {
      className: `fade-in`,
      style: Jr,
      children: `Swapping ETH to USDG works on Robinhood Chain mainnet only.`,
    });
  if (!m && !f && !u) {
    if (t == null)
      return (0, J.jsx)(`div`, {
        className: `fade-in`,
        style: Jr,
        children: `Reading your ETH balance…`,
      });
    if (x < Tn)
      return (0, J.jsxs)(`div`, {
        className: `fade-in`,
        style: Jr,
        children: [
          `To swap, you need ETH on `,
          B.chain.name,
          ` first: at least `,
          Qr(Zr),
          ` ETH (the smallest swap, its gas, and 0.001 ETH kept for gas). Your wallet holds `,
          Qr(t),
          ` ETH. Withdraw ETH from an exchange to your address, or bridge it in, then come back here.`,
        ],
      });
  }
  let D = S
    ? `Swap at least ${Qr(Tn)} ETH.`
    : C
    ? `That leaves too little ETH for gas. The most you can swap is ${Qr(
        x
      )} ETH.`
    : null;
  return (0, J.jsxs)(`div`, {
    className: `fade-in`,
    children: [
      (0, J.jsx)(`div`, {
        style: { ...Jr, marginBottom: `0.75rem` },
        children: `Turn ETH into USDG in one transaction, straight into your own wallet. Then deposit it as usual.`,
      }),
      (0, J.jsxs)(`div`, {
        className: `form-row`,
        children: [
          (0, J.jsxs)(`label`, {
            className: `field-label`,
            htmlFor: `swap-eth`,
            children: [`Amount (ETH) · wallet holds `, t == null ? `…` : Qr(t)],
          }),
          (0, J.jsxs)(`div`, {
            style: { display: `flex`, gap: `0.5rem` },
            children: [
              (0, J.jsx)(`input`, {
                id: `swap-eth`,
                className: `input mono`,
                type: `number`,
                inputMode: `decimal`,
                min: `0`,
                step: `any`,
                value: i,
                disabled: m,
                onChange: (e) => T(e.target.value),
                placeholder: `0.0`,
                style: { flex: 1 },
              }),
              (0, J.jsx)(`button`, {
                className: `btn ghost sm`,
                disabled: m,
                onClick: () => T(h(x)),
                children: `Max`,
              }),
            ],
          }),
        ],
      }),
      D &&
        (0, J.jsx)(`div`, {
          className: `status bad`,
          style: { marginBottom: `0.6rem` },
          children: D,
        }),
      o &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `You receive`,
                }),
                (0, J.jsxs)(`b`, {
                  children: [
                    `≈ `,
                    b(o.usdgOut),
                    ` USDG · at least `,
                    b(o.minOut),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Rate`,
                }),
                (0, J.jsxs)(`span`, {
                  children: [`1 ETH ≈ `, ei(o.impliedPrice), ` USDG`],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Gas`,
                }),
                (0, J.jsx)(`span`, { children: `Keeps 0.001 ETH for gas` }),
              ],
            }),
          ],
        }),
      (0, J.jsxs)(`button`, {
        className: `btn`,
        disabled: !o || m || c || !!u?.hash,
        style: { justifyContent: `center`, width: `100%`, marginTop: `0.9rem` },
        onClick: E,
        children: [
          m
            ? `Confirm in wallet…`
            : u?.hash
            ? `Check your last swap first`
            : c
            ? `Getting a price…`
            : o
            ? `Swap ${Qr(o.amountIn)} ETH`
            : `Swap`,
          (0, J.jsx)(`span`, { className: `circ`, children: `→` }),
        ],
      }),
      f &&
        (0, J.jsxs)(`div`, {
          className: `split-total ok fade-in`,
          style: { marginTop: `0.75rem` },
          children: [
            (0, J.jsxs)(`span`, {
              children: [`Swapped for `, b(f.usdgOut), ` USDG`],
            }),
            (0, J.jsx)(`a`, {
              href: k(f.hash),
              target: `_blank`,
              rel: `noreferrer noopener`,
              style: { color: `inherit` },
              children: `View transaction ↗`,
            }),
          ],
        }),
      u &&
        (0, J.jsxs)(`div`, {
          className: `split-total bad fade-in`,
          style: { marginTop: `0.75rem` },
          children: [
            (0, J.jsx)(`span`, { children: u.message }),
            u.hash &&
              (0, J.jsx)(`a`, {
                href: k(u.hash),
                target: `_blank`,
                rel: `noreferrer noopener`,
                style: { color: `inherit` },
                children: `View transaction ↗`,
              }),
          ],
        }),
      (0, J.jsx)(`div`, {
        style: Yr,
        children: `Uniswap v3 · 0.01% pool. Uniswap is an independent third-party protocol; Offyield doesn't run it and never holds your ETH or USDG. The price is checked against Chainlink's ETH/USD price, and the swap can't complete below the minimum shown.`,
      }),
    ],
  });
}
var ni = [
    {
      name: `Robinhood`,
      assets: [`USDG`, `ETH`],
      network: `Robinhood Chain`,
      note: `The Robinhood app (US). Transfers on Robinhood Chain are not available in New York.`,
      url: `https://robinhood.com/us/en/support/articles/crypto-transfers/`,
    },
    {
      name: `Kraken`,
      assets: [`USDG`, `ETH`],
      network: `Robinhood Chain`,
      note: `USDG: minimum 5, fee 1.5. ETH: minimum 0.0021. Not in New York or Maine; USDG not in Canada.`,
      url: `https://support.kraken.com/articles/360000767986-cryptocurrency-withdrawal-fees-and-minimums`,
    },
    {
      name: `KuCoin`,
      assets: [`USDG`, `ETH`],
      network: `Robinhood`,
      note: `USDG: minimum 1, fee 0.5. ETH: minimum 0.0004. Not available to US users.`,
      url: `https://www.kucoin.com/support`,
    },
    {
      name: `OKX`,
      assets: [`USDG`, `ETH`],
      network: `Robinhood Chain`,
      note: `USDG: minimum 2. ETH: minimum 0.0002. Availability depends on your region.`,
      url: `https://www.okx.com/en-us/fees/withdrawal`,
    },
    {
      name: `Gate`,
      assets: [`USDG`],
      network: `ROBINHOOD`,
      note: `USDG only, no ETH on this network. Not available in the US, UK, Canada and much of the EU.`,
      url: `https://www.gate.com/`,
    },
  ],
  ri = 1000000n,
  ii = { fontSize: `0.85rem`, color: `var(--ink-soft)`, lineHeight: 1.55 },
  ai = (e) => {
    let [t, n = ``] = h(e).split(`.`),
      r = n.slice(0, 5).replace(/0+$/, ``);
    return r ? `${t}.${r}` : t;
  };
function oi(e) {
  return r({
    queryKey: [`ethBalance`, e],
    queryFn: () => E.getBalance({ address: e }),
    enabled: !!e,
    refetchInterval: 1e4,
    retry: 1,
  });
}
function si({ account: e, toast: t }) {
  return (0, J.jsxs)(`div`, {
    className: `route-line`,
    style: { flexWrap: `wrap`, gap: `0.5rem` },
    children: [
      (0, J.jsxs)(`span`, {
        style: { color: `var(--ink-soft)` },
        children: [`Your address on `, B.chain.name],
      }),
      (0, J.jsxs)(`span`, {
        style: {
          display: `flex`,
          gap: `0.5rem`,
          alignItems: `center`,
          flexWrap: `wrap`,
        },
        children: [
          (0, J.jsx)(`code`, {
            className: `addr-mono`,
            style: { wordBreak: `break-all`, userSelect: `all` },
            children: e,
          }),
          (0, J.jsx)(`button`, {
            className: `btn ghost sm`,
            onClick: () => {
              navigator.clipboard?.writeText(e).then(
                () => t(`Address copied`),
                () => t(`Couldn't copy: select the address and copy it`)
              );
            },
            children: `Copy`,
          }),
        ],
      }),
    ],
  });
}
function ci({ account: e, toast: t }) {
  return (0, J.jsxs)(`div`, {
    className: `fade-in`,
    children: [
      (0, J.jsxs)(`div`, {
        style: { ...ii, marginBottom: `0.75rem` },
        children: [
          `These exchanges can withdraw straight to `,
          B.chain.name,
          `. Withdraw to your own address below and pick the network exactly as named. Send USDG to deposit, plus about $1 of ETH for gas if your wallet has none.`,
        ],
      }),
      (0, J.jsx)(si, { account: e, toast: t }),
      (0, J.jsx)(`div`, {
        style: {
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fill, minmax(220px, 1fr))`,
          gap: `0.75rem`,
          marginTop: `0.9rem`,
        },
        children: ni.map((e) =>
          (0, J.jsxs)(
            `div`,
            {
              style: {
                border: `1px solid var(--hairline)`,
                borderRadius: `var(--radius-sm)`,
                padding: `0.9rem`,
              },
              children: [
                (0, J.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    justifyContent: `space-between`,
                    gap: `0.5rem`,
                    alignItems: `baseline`,
                  },
                  children: [
                    (0, J.jsx)(`b`, {
                      style: { fontWeight: 500 },
                      children: e.name,
                    }),
                    (0, J.jsx)(`a`, {
                      href: e.url,
                      target: `_blank`,
                      rel: `noreferrer noopener`,
                      style: { fontSize: `0.78rem`, color: `var(--ink-faint)` },
                      children: `Help ↗`,
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  style: {
                    fontSize: `0.8rem`,
                    color: `var(--ink-soft)`,
                    marginTop: `0.3rem`,
                  },
                  children: [
                    e.assets.join(` and `),
                    ` · network: `,
                    (0, J.jsx)(`b`, {
                      style: { fontWeight: 500 },
                      children: e.network,
                    }),
                  ],
                }),
                e.note &&
                  (0, J.jsx)(`div`, {
                    style: {
                      fontSize: `0.75rem`,
                      color: `var(--ink-faint)`,
                      marginTop: `0.3rem`,
                      lineHeight: 1.45,
                    },
                    children: e.note,
                  }),
              ],
            },
            e.name
          )
        ),
      }),
      (0, J.jsxs)(`div`, {
        style: {
          fontSize: `0.75rem`,
          color: `var(--ink-faint)`,
          marginTop: `0.75rem`,
          lineHeight: 1.5,
        },
        children: [
          `Exchanges are independent third parties; availability depends on your country and account. Always send a small test amount first. Only the USDG contract `,
          li(B.usdg),
          ` counts: tokens that merely call themselves USDG are not it.`,
        ],
      }),
    ],
  });
}
var li = (e) => (e ? e.slice(0, 6) + `…` + e.slice(-4) : ``);
function ui({ account: e, pos: t, ff: n, toast: r, onPrefill: a }) {
  let o = oi(e),
    s = o.data ?? null,
    c = t?.walletUsdg ?? null,
    l = t ? w(t) : null,
    u = s !== null && s < 50000000000000n,
    d = [
      n.FUND_EXCHANGE && [`exchange`, `From an exchange`],
      n.SWAP_ETH && [`swap`, `Swap ETH to USDG`],
      n.BRIDGE_IN && [`bridge`, `From another chain`],
    ].filter(Boolean),
    f =
      c !== null && c < ri && s !== null && !u && n.SWAP_ETH
        ? `swap`
        : n.BRIDGE_IN
        ? `bridge`
        : d[0]?.[0] ?? null,
    [p, m] = (0, V.useState)(null);
  (0, V.useEffect)(() => {
    p === null && c !== null && s !== null && f && m(f);
  }, [p, c, s, f]),
    (0, V.useEffect)(() => {
      m(null);
    }, [e]);
  let h = p ?? f,
    g = i(),
    _ = (0, V.useRef)(null),
    v = (0, V.useRef)(0),
    [y, x] = (0, V.useState)(null);
  (0, V.useEffect)(() => {
    (_.current = null), x(null);
  }, [e]),
    (0, V.useEffect)(() => {
      if (c !== null) {
        if (_.current === null) {
          _.current = c;
          return;
        }
        if (c > _.current) {
          let e = c - _.current;
          (_.current = c),
            Date.now() - v.current > 9e4 &&
              (x(e), r(`${b(e)} USDG arrived in your wallet`));
        } else c < _.current && (_.current = c);
      }
    }, [c, r]);
  let S = c === null ? 0n : l !== null && l < c ? l : c,
    C = (e) => a(e > S ? S : e),
    T = (e) => {
      (v.current = Date.now()),
        a(l !== null && e > l ? l : e),
        g.invalidateQueries({ queryKey: [`position`] }),
        g.invalidateQueries({ queryKey: [`ethBalance`] });
    };
  return e
    ? (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        style: { gridColumn: `1 / -1` },
        children: [
          (0, J.jsxs)(`div`, {
            className: `section-title`,
            children: [
              (0, J.jsxs)(`div`, {
                children: [
                  (0, J.jsx)(`div`, {
                    className: `eyebrow`,
                    children: `Get USDG into your wallet`,
                  }),
                  (0, J.jsx)(`h2`, { children: `Add funds` }),
                ],
              }),
              S >= ri &&
                !u &&
                (0, J.jsxs)(`button`, {
                  className: `btn sm`,
                  onClick: () => C(S),
                  children: [
                    `Deposit `,
                    b(S),
                    ` USDG`,
                    (0, J.jsx)(`span`, { className: `circ`, children: `↓` }),
                  ],
                }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `route-line`,
            children: [
              (0, J.jsx)(`span`, {
                style: { color: `var(--ink-soft)` },
                children: `USDG in your wallet`,
              }),
              (0, J.jsx)(`b`, { children: c === null ? `…` : `${b(c)} USDG` }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `route-line`,
            children: [
              (0, J.jsx)(`span`, {
                style: { color: `var(--ink-soft)` },
                children: `ETH for gas`,
              }),
              (0, J.jsx)(`b`, {
                style: { color: u ? `var(--amber, #c98a17)` : void 0 },
                children:
                  s === null
                    ? o.isError
                      ? `unreadable`
                      : `…`
                    : u
                    ? `${ai(s)} ETH · needs a little`
                    : `${ai(s)} ETH ✓`,
              }),
            ],
          }),
          l !== null &&
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `You can deposit up to`,
                }),
                (0, J.jsxs)(`b`, { children: [b(l), ` USDG right now`] }),
              ],
            }),
          y !== null &&
            (0, J.jsxs)(`div`, {
              className: `split-total ok`,
              style: { marginTop: `0.75rem` },
              children: [
                (0, J.jsxs)(`span`, { children: [b(y), ` USDG arrived`] }),
                (0, J.jsx)(`button`, {
                  className: `btn sm`,
                  disabled: u || S === 0n,
                  onClick: () => C(y),
                  children: `Fill in the deposit`,
                }),
              ],
            }),
          u &&
            (0, J.jsx)(`div`, {
              className: `split-total bad`,
              style: { marginTop: `0.75rem` },
              children: (0, J.jsxs)(`span`, {
                children: [
                  `Depositing needs a little ETH on `,
                  B.chain.name,
                  ` for gas (about $1 lasts many deposits).`,
                  n.BRIDGE_IN
                    ? ` Bridging in below can include it.`
                    : n.FUND_EXCHANGE
                    ? ` Withdraw some ETH from an exchange below.`
                    : ``,
                ],
              }),
            }),
          d.length > 0 &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(`div`, {
                  style: {
                    display: `flex`,
                    gap: `0.5rem`,
                    flexWrap: `wrap`,
                    margin: `1rem 0 0.9rem`,
                  },
                  children: d.map(([e, t]) =>
                    (0, J.jsx)(
                      `button`,
                      {
                        className: `btn sm ` + (h === e ? `` : `ghost`),
                        onClick: () => m(e),
                        children: t,
                      },
                      e
                    )
                  ),
                }),
                h === `exchange` && (0, J.jsx)(ci, { account: e, toast: r }),
                h === `swap` &&
                  (0, J.jsx)(ti, {
                    account: e,
                    ethBalance: s,
                    toast: r,
                    onSwapped: T,
                  }),
                h === `bridge` &&
                  (0, J.jsx)(qr, {
                    account: e,
                    ethOn4663: s,
                    toast: r,
                    onArrived: T,
                  }),
              ],
            }),
        ],
      })
    : (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        style: { gridColumn: `1 / -1` },
        children: [
          (0, J.jsx)(`div`, {
            className: `eyebrow`,
            style: { marginBottom: `0.5rem` },
            children: `Add funds`,
          }),
          (0, J.jsx)(`div`, {
            style: ii,
            children: `Connect a wallet to see how to get USDG into it.`,
          }),
        ],
      });
}
var di = 10n ** 18n,
  fi = 864e5,
  pi = u([
    `function convertToAssets(uint256 shares) view returns (uint256)`,
    `event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares)`,
  ]);
function mi(e, t) {
  let n = t.atMs - e.atMs;
  return n < fi || e.price <= 0n
    ? null
    : (Number(((t.price - e.price) * 10n ** 12n) / e.price) / 0xe8d4a51000) *
        ((365 * fi) / n);
}
var hi = 864000n,
  gi = 20000n,
  _i = 100000000n;
async function vi(e) {
  for (let t = 0n; t < 4n; t++) {
    let n = e + t * gi,
      r = (
        await E.getLogs({
          address: B.venue,
          event: pi[1],
          fromBlock: n,
          toBlock: n + gi - 1n,
        })
      ).find((e) => (e.args.assets ?? 0n) >= _i && (e.args.shares ?? 0n) > 0n);
    if (!r) continue;
    let i = await E.getBlock({ blockNumber: r.blockNumber });
    return {
      price: (r.args.assets * di) / r.args.shares,
      atMs: Number(i.timestamp) * 1e3,
    };
  }
  return null;
}
async function yi() {
  let e = await E.getBlock(),
    t = {
      price: await E.readContract({
        address: B.venue,
        abi: pi,
        functionName: `convertToAssets`,
        args: [di],
        blockNumber: e.number,
      }),
      atMs: Number(e.timestamp) * 1e3,
    },
    n = [];
  for (let r of [7n, 30n]) {
    let i = r * hi;
    if (e.number <= i) continue;
    let a = await vi(e.number - i),
      o = a && mi(a, t);
    o != null && o > 0 && n.push(o);
  }
  if (!n.length) throw Error(`no share-price sample in range`);
  return { low: Math.min(...n), high: Math.max(...n) };
}
function bi(e, t, n, r, i) {
  if (t >= n) return { ready: !0 };
  if (e <= 0n || r.low <= 0) return null;
  let a = Number(n - t),
    o = (t) => new Date(i + (a / ((Number(e) * t) / 365)) * fi);
  return {
    ready: !1,
    earliest: o(r.high),
    latest: o(r.low),
    perMonth: (Number(e) * ((r.low + r.high) / 2)) / 12,
  };
}
function xi(e, t) {
  let n = Math.ceil((Number(e) * 12) / t / 1e6) * 1e6;
  return BigInt(n);
}
function Si(e, t, n) {
  let r = new Date(e.getTime() + fi),
    i = `Your interest should cover a card (~${t})`,
    a = new Date(n)
      .toISOString()
      .replace(/[-:]/g, ``)
      .replace(/\.\d{3}/, ``);
  return [
    `BEGIN:VCALENDAR`,
    `VERSION:2.0`,
    `PRODID:-//Offyield//Next card//EN`,
    `CALSCALE:GREGORIAN`,
    `BEGIN:VEVENT`,
    `UID:next-card-${Pt(e)}@offyield.com`,
    `DTSTAMP:${a}`,
    `DTSTART;VALUE=DATE:${Pt(e)}`,
    `DTEND;VALUE=DATE:${Pt(r)}`,
    `SUMMARY:${Ft(i)}`,
    `DESCRIPTION:${Ft(
      `Offyield projected this date from the vault's realised rate. The rate is variable, so check your spendable interest before buying.`
    )}`,
    `END:VEVENT`,
    `END:VCALENDAR`,
    ``,
  ].join(`\r
`);
}
var Ci = [`None`, `Member`, `Silver`, `Gold`],
  wi = [10000n, 100000n, 1000000n],
  Ti = [100000000n, 500000000n, 1000000000n];
u([
  `function balanceOf(address) view returns (uint256)`,
  `function decimals() view returns (uint8)`,
  `event Transfer(address indexed from, address indexed to, uint256 value)`,
]);
var Ei = `offyield.lock.v1`,
  Di = `offyield.lock.fails`,
  Oi = 15e4,
  ki = /^\d{4,8}$/,
  Ai = 3e4,
  ji = [0, 5, 15, 60],
  Mi = (e) =>
    [...new Uint8Array(e)].map((e) => e.toString(16).padStart(2, `0`)).join(``),
  Ni = (e) =>
    new Uint8Array((e.match(/../g) ?? []).map((e) => parseInt(e, 16)));
async function Pi(e, t, n) {
  let r = await crypto.subtle.importKey(
    `raw`,
    new TextEncoder().encode(e),
    `PBKDF2`,
    !1,
    [`deriveBits`]
  );
  return Mi(
    await crypto.subtle.deriveBits(
      { name: `PBKDF2`, hash: `SHA-256`, salt: t, iterations: n },
      r,
      256
    )
  );
}
function Fi(e) {
  try {
    let t = JSON.parse(e?.getItem(Ei) ?? `null`);
    return t &&
      /^[0-9a-f]{32}$/.test(t.salt) &&
      /^[0-9a-f]{64}$/.test(t.hash) &&
      Number.isSafeInteger(t.iterations) &&
      t.iterations >= 1e4
      ? t
      : null;
  } catch {
    return null;
  }
}
var Ii = (e) => Fi(e) !== null;
function Li(e) {
  let t = Fi(e)?.autoLockMin ?? 0;
  return ji.includes(t) ? t : 0;
}
function Ri(e, t) {
  let n = Fi(e);
  !n ||
    !ji.includes(t) ||
    e?.setItem(Ei, JSON.stringify({ ...n, autoLockMin: t }));
}
async function zi(e, t, n = 15) {
  if (!ki.test(t)) throw Error(`Use 4 to 8 digits.`);
  if (!e)
    throw Error(
      `This browser is blocking site storage, so a passcode can't be saved.`
    );
  let r = crypto.getRandomValues(new Uint8Array(16)),
    i = await Pi(t, r, Oi);
  e.setItem(
    Ei,
    JSON.stringify({ salt: Mi(r), hash: i, iterations: Oi, autoLockMin: n })
  ),
    e.removeItem(Di);
}
function Bi(e) {
  try {
    let t = JSON.parse(e?.getItem(Di) ?? `null`);
    return t && Number.isFinite(t.count) && Number.isFinite(t.until)
      ? t
      : { count: 0, until: 0 };
  } catch {
    return { count: 0, until: 0 };
  }
}
var Vi = (e, t) => Math.max(0, Bi(e).until - t);
async function Hi(e, t, n) {
  let r = Fi(e);
  if (!r) return { ok: !0 };
  let i = Bi(e);
  if (i.until > n) return { ok: !1, waitMs: i.until - n, attemptsLeft: 0 };
  if (ki.test(t) && (await Pi(t, Ni(r.salt), r.iterations)) === r.hash)
    return e?.removeItem(Di), { ok: !0 };
  let a = i.count + 1,
    o = a >= 5 ? n + Ai : 0;
  return (
    e?.setItem(Di, JSON.stringify({ count: a, until: o })),
    { ok: !1, waitMs: o ? o - n : 0, attemptsLeft: Math.max(0, 5 - a) }
  );
}
function Ui(e) {
  e?.removeItem(Ei), e?.removeItem(Di);
}
function Wi(e) {
  if (!e) return 0;
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.key(n);
    r && r.startsWith(`offyield.`) && t.push(r);
  }
  for (let n of t) e.removeItem(n);
  return t.length;
}
var Gi = () => {
    try {
      return window.localStorage;
    } catch {
      return null;
    }
  },
  Ki = (e) => (e ? e.slice(0, 6) + `…` + e.slice(-4) : ``),
  qi = {
    copy: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `9`,
          y: `9`,
          width: `11`,
          height: `11`,
          rx: `2`,
        }),
        (0, J.jsx)(`path`, { d: `M5 15V5a2 2 0 0 1 2-2h10` }),
      ],
    }),
    gear: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`circle`, { cx: `12`, cy: `12`, r: `3` }),
        (0, J.jsx)(`path`, {
          d: `M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z`,
        }),
      ],
    }),
    out: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4` }),
        (0, J.jsx)(`polyline`, { points: `16 17 21 12 16 7` }),
        (0, J.jsx)(`line`, { x1: `21`, y1: `12`, x2: `9`, y2: `12` }),
      ],
    }),
    lock: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `4`,
          y: `10`,
          width: `16`,
          height: `10`,
          rx: `2`,
        }),
        (0, J.jsx)(`path`, { d: `M8 10V7a4 4 0 0 1 8 0v3` }),
      ],
    }),
    eye: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, {
          d: `M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z`,
        }),
        (0, J.jsx)(`circle`, { cx: `12`, cy: `12`, r: `3` }),
      ],
    }),
    wallet: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `2`,
          y: `6`,
          width: `20`,
          height: `14`,
          rx: `2`,
        }),
        (0, J.jsx)(`path`, { d: `M16 12h4` }),
      ],
    }),
    warn: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, {
          d: `M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z`,
        }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `9`, x2: `12`, y2: `13` }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `17`, x2: `12.01`, y2: `17` }),
      ],
    }),
    x: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
        (0, J.jsx)(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
      ],
    }),
    back: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, {
          d: `M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z`,
        }),
        (0, J.jsx)(`line`, { x1: `18`, y1: `9`, x2: `12`, y2: `15` }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `9`, x2: `18`, y2: `15` }),
      ],
    }),
  };
function Ji({ size: e = 40 }) {
  return (0, J.jsx)(`img`, {
    src: `/offyield-logo.png`,
    alt: ``,
    "aria-hidden": `true`,
    width: e,
    height: e,
    style: { width: e, height: e, flex: `none`, objectFit: `contain` },
  });
}
function Yi({
  account: e,
  balance: t,
  onCopy: n,
  onSettings: r,
  onDisconnect: i,
  settingsOn: a,
}) {
  let [o, s] = (0, V.useState)(!1),
    c = (0, V.useRef)(null);
  (0, V.useEffect)(() => {
    if (!o) return;
    let e = (e) => {
        c.current && !c.current.contains(e.target) && s(!1);
      },
      t = (e) => {
        e.key === `Escape` && s(!1);
      };
    return (
      document.addEventListener(`pointerdown`, e),
      document.addEventListener(`keydown`, t),
      () => {
        document.removeEventListener(`pointerdown`, e),
          document.removeEventListener(`keydown`, t);
      }
    );
  }, [o]);
  let l = (e) => () => {
    s(!1), e();
  };
  return (0, J.jsxs)(`div`, {
    className: `acct`,
    ref: c,
    children: [
      (0, J.jsxs)(`div`, {
        className: `acct-menu` + (o ? ` open` : ``),
        role: `menu`,
        "aria-hidden": !o,
        children: [
          (0, J.jsxs)(`div`, {
            className: `acct-head`,
            children: [
              (0, J.jsx)(Ji, { size: 34 }),
              (0, J.jsxs)(`div`, {
                style: { minWidth: 0 },
                children: [
                  (0, J.jsx)(`div`, {
                    className: `acct-label`,
                    children: `Connected with MetaMask`,
                  }),
                  (0, J.jsx)(`div`, {
                    className: `acct-key`,
                    title: e,
                    children: e,
                  }),
                ],
              }),
            ],
          }),
          (0, J.jsxs)(`button`, {
            className: `acct-item`,
            role: `menuitem`,
            tabIndex: o ? 0 : -1,
            onClick: l(n),
            children: [qi.copy, `Copy public key`],
          }),
          a
            ? (0, J.jsxs)(`button`, {
                className: `acct-item`,
                role: `menuitem`,
                tabIndex: o ? 0 : -1,
                onClick: l(r),
                children: [qi.gear, `Settings`],
              })
            : (0, J.jsxs)(`span`, {
                className: `acct-item soon`,
                role: `menuitem`,
                "aria-disabled": `true`,
                title: `Coming soon`,
                children: [
                  qi.gear,
                  `Settings`,
                  (0, J.jsx)(`em`, {
                    className: `acct-soon`,
                    children: `Soon`,
                  }),
                ],
              }),
          (0, J.jsx)(`div`, { className: `acct-sep` }),
          (0, J.jsxs)(`button`, {
            className: `acct-item danger`,
            role: `menuitem`,
            tabIndex: o ? 0 : -1,
            onClick: l(i),
            children: [qi.out, `Disconnect`],
          }),
        ],
      }),
      (0, J.jsxs)(`button`, {
        className: `wallet-chip acct-chip` + (o ? ` open` : ``),
        "aria-haspopup": `menu`,
        "aria-expanded": o,
        onClick: () => s((e) => !e),
        children: [
          (0, J.jsxs)(`div`, {
            className: `addr`,
            children: [
              qi.wallet,
              Ki(e),
              (0, J.jsx)(`span`, {
                className: `acct-caret`,
                "aria-hidden": `true`,
                children: `▴`,
              }),
            ],
          }),
          (0, J.jsx)(`div`, { className: `bal`, children: t }),
        ],
      }),
    ],
  });
}
function Xi({ on: e, onChange: t, label: n }) {
  return (0, J.jsx)(`button`, {
    type: `button`,
    role: `switch`,
    "aria-checked": e,
    "aria-label": n,
    className: `og-switch` + (e ? ` on` : ``),
    onClick: () => t(!e),
    children: (0, J.jsx)(`span`, {}),
  });
}
function Zi({ icon: e, title: t, desc: n, children: r }) {
  return (0, J.jsxs)(`div`, {
    className: `set-row`,
    children: [
      (0, J.jsx)(`span`, { className: `set-ico`, children: e }),
      (0, J.jsxs)(`div`, {
        className: `set-txt`,
        children: [
          (0, J.jsx)(`b`, { children: t }),
          n && (0, J.jsx)(`span`, { children: n }),
        ],
      }),
      (0, J.jsx)(`div`, { className: `set-ctl`, children: r }),
    ],
  });
}
function Qi({ value: e, onChange: t, placeholder: n, autoFocus: r, id: i }) {
  return (0, J.jsx)(`input`, {
    id: i,
    className: `input mono set-pin`,
    type: `password`,
    inputMode: `numeric`,
    autoComplete: `off`,
    maxLength: 8,
    value: e,
    autoFocus: r,
    placeholder: n,
    onChange: (e) => t(e.target.value.replace(/\D/g, ``).slice(0, 8)),
  });
}
function $i({
  account: e,
  onClose: t,
  toast: n,
  onDisconnect: r,
  hideBalances: i,
  setHideBalances: a,
  onLockNow: o,
  lockVersion: s,
  bumpLock: c,
}) {
  let l = Gi(),
    u = Ii(l),
    [d, f] = (0, V.useState)(null),
    [p, m] = (0, V.useState)(``),
    [h, g] = (0, V.useState)(``),
    [_, v] = (0, V.useState)(``),
    [y, b] = (0, V.useState)(!1),
    [x, S] = (0, V.useState)(``),
    [C, w] = (0, V.useState)(!1),
    T = Li(l),
    E = () => {
      w(!0), setTimeout(t, 180);
    };
  (0, V.useEffect)(() => {
    let e = (e) => {
      e.key === `Escape` && E();
    };
    return (
      document.addEventListener(`keydown`, e),
      () => document.removeEventListener(`keydown`, e)
    );
  }, []);
  let D = () => {
    f(null), m(``), g(``), v(``);
  };
  return (0, J.jsx)(`div`, {
    className: `og-overlay` + (C ? ` closing` : ``),
    onPointerDown: (e) => {
      e.target === e.currentTarget && E();
    },
    children: (0, J.jsxs)(`div`, {
      className: `og-sheet`,
      role: `dialog`,
      "aria-modal": `true`,
      "aria-labelledby": `set-title`,
      children: [
        (0, J.jsxs)(`div`, {
          className: `set-top`,
          children: [
            (0, J.jsx)(Ji, { size: 46 }),
            (0, J.jsxs)(`div`, {
              style: { minWidth: 0, flex: 1 },
              children: [
                (0, J.jsx)(`h2`, { id: `set-title`, children: `Settings` }),
                (0, J.jsxs)(`div`, {
                  className: `set-sub`,
                  children: [Ki(e), ` · `, B.chain.name],
                }),
              ],
            }),
            (0, J.jsx)(`button`, {
              className: `set-close`,
              onClick: E,
              "aria-label": `Close settings`,
              children: qi.x,
            }),
          ],
        }),
        (0, J.jsxs)(`div`, {
          className: `set-body`,
          children: [
            (0, J.jsxs)(`section`, {
              children: [
                (0, J.jsx)(`h3`, { children: `Security` }),
                (0, J.jsx)(Zi, {
                  icon: qi.lock,
                  title: `Passcode lock`,
                  desc: u
                    ? `The dashboard asks for your passcode when it opens.`
                    : `Ask for a passcode before this browser shows your dashboard.`,
                  children: (0, J.jsx)(Xi, {
                    label: `Passcode lock`,
                    on: u || d === `set`,
                    onChange: (e) => {
                      D(), f(e ? (u ? null : `set`) : u ? `off` : null);
                    },
                  }),
                }),
                d &&
                  (0, J.jsxs)(`div`, {
                    className: `set-form`,
                    children: [
                      (d === `change` || d === `off`) &&
                        (0, J.jsxs)(`label`, {
                          children: [
                            `Current passcode`,
                            (0, J.jsx)(Qi, {
                              value: _,
                              onChange: v,
                              autoFocus: !0,
                              placeholder: `••••`,
                            }),
                          ],
                        }),
                      d !== `off` &&
                        (0, J.jsxs)(J.Fragment, {
                          children: [
                            (0, J.jsxs)(`label`, {
                              children: [
                                d === `change`
                                  ? `New passcode`
                                  : `Passcode (4 to 8 digits)`,
                                (0, J.jsx)(Qi, {
                                  value: p,
                                  onChange: m,
                                  autoFocus: d === `set`,
                                  placeholder: `••••`,
                                }),
                              ],
                            }),
                            (0, J.jsxs)(`label`, {
                              children: [
                                `Confirm`,
                                (0, J.jsx)(Qi, {
                                  value: h,
                                  onChange: g,
                                  placeholder: `••••`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, J.jsxs)(`div`, {
                        className: `set-actions`,
                        children: [
                          (0, J.jsx)(`button`, {
                            className: `btn ghost sm`,
                            onClick: D,
                            children: `Cancel`,
                          }),
                          (0, J.jsx)(`button`, {
                            className: `btn sm`,
                            disabled: y,
                            onClick: async () => {
                              b(!0);
                              try {
                                if (d === `change` || d === `off`) {
                                  let e = await Hi(l, _, Date.now());
                                  if (!e.ok) {
                                    n(
                                      e.waitMs
                                        ? `Too many tries. Wait ${Math.ceil(
                                            e.waitMs / 1e3
                                          )}s.`
                                        : `Wrong passcode. ${e.attemptsLeft} tries left.`,
                                      `bad`
                                    );
                                    return;
                                  }
                                }
                                if (d === `off`) {
                                  Ui(l), n(`Passcode removed`, `ok`), D(), c();
                                  return;
                                }
                                if (!ki.test(p)) {
                                  n(`Use 4 to 8 digits.`, `bad`);
                                  return;
                                }
                                if (p !== h) {
                                  n(`The passcodes don't match.`, `bad`);
                                  return;
                                }
                                await zi(l, p, T || 15),
                                  n(
                                    d === `change`
                                      ? `Passcode changed`
                                      : `Passcode lock is on`,
                                    `ok`
                                  ),
                                  D(),
                                  c();
                              } catch (e) {
                                n(e.message, `bad`);
                              } finally {
                                b(!1);
                              }
                            },
                            children: y
                              ? `Saving…`
                              : d === `off`
                              ? `Remove passcode`
                              : `Save passcode`,
                          }),
                        ],
                      }),
                      (0, J.jsx)(`div`, {
                        className: `set-note`,
                        children: `Only a scrambled hash is stored in this browser. Forgot it? Reset this browser's data below. Your funds are never affected.`,
                      }),
                    ],
                  }),
                u &&
                  !d &&
                  (0, J.jsxs)(J.Fragment, {
                    children: [
                      (0, J.jsx)(Zi, {
                        icon: qi.lock,
                        title: `Auto-lock`,
                        desc: `Lock the dashboard after this long without activity.`,
                        children: (0, J.jsx)(`div`, {
                          className: `og-seg`,
                          role: `radiogroup`,
                          "aria-label": `Auto-lock`,
                          children: ji.map((e) =>
                            (0, J.jsx)(
                              `button`,
                              {
                                role: `radio`,
                                "aria-checked": T === e,
                                className: T === e ? `on` : ``,
                                onClick: () => {
                                  Ri(l, e), c();
                                },
                                children:
                                  e === 0 ? `Never` : e === 60 ? `1h` : `${e}m`,
                              },
                              e
                            )
                          ),
                        }),
                      }),
                      (0, J.jsxs)(`div`, {
                        className: `set-actions`,
                        style: { justifyContent: `flex-start` },
                        children: [
                          (0, J.jsx)(`button`, {
                            className: `btn ghost sm`,
                            onClick: () => {
                              D(), f(`change`);
                            },
                            children: `Change passcode`,
                          }),
                          (0, J.jsx)(`button`, {
                            className: `btn ghost sm`,
                            onClick: () => {
                              E(), setTimeout(o, 200);
                            },
                            children: `Lock now`,
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (0, J.jsxs)(`section`, {
              children: [
                (0, J.jsx)(`h3`, { children: `Privacy` }),
                (0, J.jsx)(Zi, {
                  icon: qi.eye,
                  title: `Hide balances`,
                  desc: `Blur amounts on screen until you hover them. Handy in public.`,
                  children: (0, J.jsx)(Xi, {
                    label: `Hide balances`,
                    on: i,
                    onChange: a,
                  }),
                }),
              ],
            }),
            (0, J.jsxs)(`section`, {
              children: [
                (0, J.jsx)(`h3`, { children: `Wallet` }),
                (0, J.jsxs)(`div`, {
                  className: `set-key`,
                  children: [
                    (0, J.jsx)(`span`, { className: `mono`, children: e }),
                    (0, J.jsxs)(`button`, {
                      className: `btn ghost sm`,
                      onClick: () =>
                        navigator.clipboard?.writeText(e).then(
                          () => n(`Public key copied`, `ok`),
                          () => n(`Select the key and copy it`, `bad`)
                        ),
                      children: [qi.copy, `Copy`],
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  className: `set-meta`,
                  children: [
                    (0, J.jsx)(`span`, { children: `MetaMask` }),
                    (0, J.jsxs)(`span`, {
                      children: [B.chain.name, ` · `, B.chain.id],
                    }),
                    (0, J.jsx)(`a`, {
                      href: `${B.explorer}/address/${e}`,
                      target: `_blank`,
                      rel: `noreferrer noopener`,
                      children: `View on Blockscout ↗`,
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`section`, {
              className: `set-danger`,
              children: [
                (0, J.jsx)(`h3`, { children: `Danger zone` }),
                (0, J.jsx)(Zi, {
                  icon: qi.warn,
                  title: `Reset this browser's data`,
                  desc: `Clears your card history, activity log, saved orders, passcode and preferences here, then disconnects. Your funds and on-chain history don't change.`,
                  children: (0, J.jsx)(`span`, {}),
                }),
                (0, J.jsxs)(`div`, {
                  className: `set-form`,
                  children: [
                    (0, J.jsxs)(`label`, {
                      children: [
                        `Type RESET to confirm`,
                        (0, J.jsx)(`input`, {
                          className: `input`,
                          value: x,
                          onChange: (e) => S(e.target.value),
                          placeholder: `RESET`,
                          autoComplete: `off`,
                        }),
                      ],
                    }),
                    (0, J.jsx)(`div`, {
                      className: `set-note`,
                      children: `If a card payment is in progress, finish it first: its saved progress is part of what gets cleared.`,
                    }),
                    (0, J.jsx)(`div`, {
                      className: `set-actions`,
                      children: (0, J.jsx)(`button`, {
                        className: `btn sm set-red`,
                        disabled: x !== `RESET`,
                        onClick: () => {
                          Wi(l),
                            n(`This browser's Offyield data was reset`, `ok`),
                            setTimeout(() => r({ silent: !0 }), 700);
                        },
                        children: `Reset and disconnect`,
                      }),
                    }),
                  ],
                }),
                (0, J.jsxs)(`button`, {
                  className: `acct-item danger set-disc`,
                  onClick: () => {
                    E(), setTimeout(() => r(), 200);
                  },
                  children: [qi.out, `Disconnect wallet`],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function ea({ onUnlock: e, onForgot: t }) {
  let [n, r] = (0, V.useState)(``),
    [i, a] = (0, V.useState)(``),
    [o, s] = (0, V.useState)(!1),
    [c, l] = (0, V.useState)(!1),
    [u, d] = (0, V.useState)(() => Vi(Gi(), Date.now())),
    [f, p] = (0, V.useState)(!1);
  (0, V.useEffect)(() => {
    if (!u) return;
    let e = setInterval(() => d(Vi(Gi(), Date.now())), 500);
    return () => clearInterval(e);
  }, [u]);
  let m = async (t) => {
      l(!0);
      let n = await Hi(Gi(), t, Date.now());
      if ((l(!1), n.ok)) {
        e();
        return;
      }
      r(``),
        s(!0),
        setTimeout(() => s(!1), 450),
        n.waitMs
          ? (d(n.waitMs), a(``))
          : a(
              `Wrong passcode. ${n.attemptsLeft} ${
                n.attemptsLeft === 1 ? `try` : `tries`
              } left.`
            );
    },
    h = (e) => {
      if (!(c || u || f)) {
        if (e === `del`) {
          r((e) => e.slice(0, -1));
          return;
        }
        if (e === `ok`) {
          n.length >= 4 && m(n);
          return;
        }
        r((t) => (t.length < 8 ? t + e : t)), a(``);
      }
    };
  return (
    (0, V.useEffect)(() => {
      let e = (e) => {
        /^\d$/.test(e.key)
          ? h(e.key)
          : e.key === `Backspace`
          ? h(`del`)
          : e.key === `Enter` && h(`ok`);
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }),
    (0, J.jsx)(`div`, {
      className: `lock-screen`,
      role: `dialog`,
      "aria-modal": `true`,
      "aria-label": `Dashboard locked`,
      children: (0, J.jsxs)(`div`, {
        className: `lock-card`,
        children: [
          (0, J.jsx)(`div`, { className: `lock-badge`, children: qi.lock }),
          (0, J.jsx)(`h2`, { children: `Offyield is locked` }),
          (0, J.jsx)(`p`, {
            children: `Enter your passcode to open the dashboard.`,
          }),
          (0, J.jsx)(`div`, {
            className: `lock-dots` + (o ? ` shake` : ``),
            "aria-live": `polite`,
            "aria-label": `${n.length} digits entered`,
            children: Array.from({ length: Math.max(4, n.length) }, (e, t) =>
              (0, J.jsx)(`span`, { className: t < n.length ? `on` : `` }, t)
            ),
          }),
          (0, J.jsx)(`div`, {
            className: `lock-msg`,
            children: u
              ? `Too many tries. Try again in ${Math.ceil(u / 1e3)}s.`
              : i || `\xA0`,
          }),
          (0, J.jsx)(`div`, {
            className: `lock-pad`,
            children: [
              `1`,
              `2`,
              `3`,
              `4`,
              `5`,
              `6`,
              `7`,
              `8`,
              `9`,
              `del`,
              `0`,
              `ok`,
            ].map((e) =>
              (0, J.jsx)(
                `button`,
                {
                  disabled: c || !!u || (e === `ok` && n.length < 4),
                  className: e === `ok` ? `ok` : e === `del` ? `fn` : ``,
                  onClick: () => h(e),
                  "aria-label":
                    e === `del` ? `Delete` : e === `ok` ? `Unlock` : e,
                  children: e === `del` ? qi.back : e === `ok` ? `→` : e,
                },
                e
              )
            ),
          }),
          f
            ? (0, J.jsxs)(`div`, {
                className: `set-note`,
                style: {
                  marginTop: `1rem`,
                  textAlign: `left`,
                  background: `rgba(214,69,69,0.06)`,
                  borderRadius: `0.8rem`,
                  padding: `0.8rem`,
                },
                children: [
                  `Resetting clears this browser's Offyield data (card history, saved orders, passcode, preferences) and disconnects. Your funds and on-chain history aren't affected.`,
                  (0, J.jsxs)(`div`, {
                    className: `set-actions`,
                    style: { paddingLeft: 0, marginTop: `0.6rem` },
                    children: [
                      (0, J.jsx)(`button`, {
                        className: `btn ghost sm`,
                        onClick: () => p(!1),
                        children: `Cancel`,
                      }),
                      (0, J.jsx)(`button`, {
                        className: `btn sm set-red`,
                        onClick: t,
                        children: `Reset this browser`,
                      }),
                    ],
                  }),
                ],
              })
            : (0, J.jsx)(`button`, {
                className: `lock-forgot`,
                onClick: () => p(!0),
                children: `Forgot passcode?`,
              }),
        ],
      }),
    })
  );
}
var Y = {
    grid: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `3`,
          y: `3`,
          width: `7`,
          height: `7`,
          rx: `1`,
        }),
        (0, J.jsx)(`rect`, {
          x: `14`,
          y: `3`,
          width: `7`,
          height: `7`,
          rx: `1`,
        }),
        (0, J.jsx)(`rect`, {
          x: `3`,
          y: `14`,
          width: `7`,
          height: `7`,
          rx: `1`,
        }),
        (0, J.jsx)(`rect`, {
          x: `14`,
          y: `14`,
          width: `7`,
          height: `7`,
          rx: `1`,
        }),
      ],
    }),
    vault: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `3`,
          y: `4`,
          width: `18`,
          height: `16`,
          rx: `2`,
        }),
        (0, J.jsx)(`circle`, { cx: `12`, cy: `12`, r: `3.5` }),
        (0, J.jsx)(`path`, { d: `M12 4v2M12 18v2` }),
      ],
    }),
    card: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `2`,
          y: `5`,
          width: `20`,
          height: `14`,
          rx: `2`,
        }),
        (0, J.jsx)(`path`, { d: `M2 10h20` }),
      ],
    }),
    act: (0, J.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: (0, J.jsx)(`path`, { d: `M22 12h-4l-3 9L9 3l-3 9H2` }),
    }),
    chain: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, {
          d: `M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7`,
        }),
        (0, J.jsx)(`path`, {
          d: `M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7`,
        }),
      ],
    }),
    chevron: (0, J.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: (0, J.jsx)(`path`, { d: `M9 6l6 6-6 6` }),
    }),
    down: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `12`, y1: `5`, x2: `12`, y2: `19` }),
        (0, J.jsx)(`polyline`, { points: `19 12 12 19 5 12` }),
      ],
    }),
    up: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `12`, y1: `19`, x2: `12`, y2: `5` }),
        (0, J.jsx)(`polyline`, { points: `5 12 12 5 19 12` }),
      ],
    }),
    wallet: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `2`,
          y: `6`,
          width: `20`,
          height: `14`,
          rx: `2`,
        }),
        (0, J.jsx)(`path`, { d: `M16 12h4` }),
      ],
    }),
    bolt: (0, J.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: (0, J.jsx)(`polygon`, {
        points: `13 2 3 14 12 14 11 22 21 10 12 10 13 2`,
      }),
    }),
    lock: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `4`,
          y: `10`,
          width: `16`,
          height: `10`,
          rx: `2`,
        }),
        (0, J.jsx)(`path`, { d: `M8 10V7a4 4 0 0 1 8 0v3` }),
      ],
    }),
    spark: (0, J.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: (0, J.jsx)(`path`, {
        d: `M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8`,
      }),
    }),
    check: (0, J.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: (0, J.jsx)(`polyline`, { points: `20 6 9 17 4 12` }),
    }),
    x: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
        (0, J.jsx)(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
      ],
    }),
    menu: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `3`, y1: `6`, x2: `21`, y2: `6` }),
        (0, J.jsx)(`line`, { x1: `3`, y1: `12`, x2: `21`, y2: `12` }),
        (0, J.jsx)(`line`, { x1: `3`, y1: `18`, x2: `21`, y2: `18` }),
      ],
    }),
    plus: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `12`, y1: `5`, x2: `12`, y2: `19` }),
        (0, J.jsx)(`line`, { x1: `5`, y1: `12`, x2: `19`, y2: `12` }),
      ],
    }),
    snow: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`line`, { x1: `12`, y1: `2`, x2: `12`, y2: `22` }),
        (0, J.jsx)(`line`, { x1: `2`, y1: `12`, x2: `22`, y2: `12` }),
        (0, J.jsx)(`line`, { x1: `5`, y1: `5`, x2: `19`, y2: `19` }),
        (0, J.jsx)(`line`, { x1: `19`, y1: `5`, x2: `5`, y2: `19` }),
      ],
    }),
    phone: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`rect`, {
          x: `6`,
          y: `2`,
          width: `12`,
          height: `20`,
          rx: `2`,
        }),
        (0, J.jsx)(`line`, { x1: `11`, y1: `18`, x2: `13`, y2: `18` }),
      ],
    }),
    info: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`circle`, { cx: `12`, cy: `12`, r: `10` }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `16`, x2: `12`, y2: `12` }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `8`, x2: `12.01`, y2: `8` }),
      ],
    }),
    warn: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, {
          d: `M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z`,
        }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `9`, x2: `12`, y2: `13` }),
        (0, J.jsx)(`line`, { x1: `12`, y1: `17`, x2: `12.01`, y2: `17` }),
      ],
    }),
    stocks: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`polyline`, { points: `3 17 9 11 13 15 21 7` }),
        (0, J.jsx)(`polyline`, { points: `15 7 21 7 21 13` }),
      ],
    }),
    ext: (0, J.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      children: [
        (0, J.jsx)(`path`, { d: `M14 4h6v6` }),
        (0, J.jsx)(`path`, { d: `M20 4l-9 9` }),
        (0, J.jsx)(`path`, {
          d: `M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5`,
        }),
      ],
    }),
  },
  X = B.isTestnet,
  Z = {
    name: B.chain.name,
    id: B.chain.id,
    stack: `Arbitrum Orbit`,
    settlement: `Ethereum L1`,
    asset: `USDG`,
    market: X
      ? `testnet yield venue (simulated)`
      : `Steakhouse USDG · Morpho lending`,
  },
  ta = (e) => (e ? e.slice(0, 6) + `…` + e.slice(-4) : ``),
  na = `Not connected`;
function ra(e) {
  return r({
    queryKey: [`position`, e],
    queryFn: () => S(e),
    enabled: !!e,
    refetchInterval: 15e3,
    retry: 1,
  });
}
function ia(e) {
  return r({
    queryKey: [`shares`, e],
    queryFn: () => M(e),
    enabled: !!e && D.exitInKind,
    refetchInterval: 3e4,
    retry: 1,
  });
}
function aa(e) {
  return r({
    queryKey: [`activity`, e],
    queryFn: () => A(e),
    enabled: !!e,
    refetchInterval: 3e4,
    retry: 1,
  });
}
function oa() {
  return (
    r({
      queryKey: [`features`],
      queryFn: async () => {
        let e = await $(`/api/features`);
        if (!e.ok) throw Error(`features unavailable`);
        return { ...Be, ...(await e.json()) };
      },
      staleTime: 3e5,
      retry: 1,
    }).data ?? Be
  );
}
function sa({ icon: e, label: t, value: n, unit: r, sub: i }) {
  return (0, J.jsxs)(`div`, {
    className: `card stat`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `lab`,
        children: [(0, J.jsx)(`span`, { className: `i`, children: e }), t],
      }),
      (0, J.jsxs)(`div`, {
        className: `val`,
        children: [n, r && (0, J.jsxs)(`small`, { children: [` `, r] })],
      }),
      i && (0, J.jsx)(`div`, { className: `sub`, children: i }),
    ],
  });
}
function ca({ data: e }) {
  let [t, n] = (0, V.useState)(null),
    r = e.map((e) => e.v);
  if (e.length < 2 || Math.max(...r) <= 0)
    return (0, J.jsx)(`div`, {
      className: `chart-wrap`,
      style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: `var(--ink-faint)`,
        fontSize: `0.9rem`,
      },
      children: `The curve draws itself as interest accrues while this page is open.`,
    });
  let i = Math.max(...r),
    a = Math.min(...r),
    o = r.map((e, t) => [
      6 + (t / (r.length - 1)) * 588,
      134 - ((e - a) / (i - a || 1)) * 128,
    ]),
    s = o
      .map((e, t) => (t ? `L` : `M`) + e[0].toFixed(1) + ` ` + e[1].toFixed(1))
      .join(` `),
    c = s + ` L 594 140 L 6 140 Z`,
    l = (e) => {
      let t = e.currentTarget.getBoundingClientRect(),
        i = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
      n(Math.round(i * (r.length - 1)));
    },
    u = t ?? null,
    d = u === null ? null : o[u],
    f = d ? (d[0] / 600) * 100 : 0;
  return (0, J.jsxs)(`div`, {
    className: `chart-wrap`,
    style: { position: `relative`, touchAction: `pan-y`, cursor: `crosshair` },
    onPointerMove: l,
    onPointerDown: l,
    onPointerLeave: () => n(null),
    children: [
      (0, J.jsxs)(`svg`, {
        viewBox: `0 0 600 140`,
        preserveAspectRatio: `none`,
        role: `img`,
        "aria-label": `Interest earned this session`,
        children: [
          (0, J.jsxs)(`defs`, {
            children: [
              (0, J.jsxs)(`linearGradient`, {
                id: `ogline`,
                x1: `0`,
                y1: `0`,
                x2: `1`,
                y2: `0`,
                children: [
                  (0, J.jsx)(`stop`, { offset: `0%`, stopColor: `#f857c8` }),
                  (0, J.jsx)(`stop`, { offset: `25%`, stopColor: `#a05ce8` }),
                  (0, J.jsx)(`stop`, { offset: `45%`, stopColor: `#5b9dfb` }),
                  (0, J.jsx)(`stop`, { offset: `62%`, stopColor: `#2fd48a` }),
                  (0, J.jsx)(`stop`, { offset: `78%`, stopColor: `#ffc72c` }),
                  (0, J.jsx)(`stop`, { offset: `100%`, stopColor: `#ff8a2b` }),
                ],
              }),
              (0, J.jsxs)(`linearGradient`, {
                id: `ogfill`,
                x1: `0`,
                y1: `0`,
                x2: `0`,
                y2: `1`,
                children: [
                  (0, J.jsx)(`stop`, {
                    offset: `0%`,
                    stopColor: `#a05ce8`,
                    stopOpacity: `0.22`,
                  }),
                  (0, J.jsx)(`stop`, {
                    offset: `100%`,
                    stopColor: `#a05ce8`,
                    stopOpacity: `0`,
                  }),
                ],
              }),
            ],
          }),
          (0, J.jsx)(`path`, { d: c, fill: `url(#ogfill)` }),
          (0, J.jsx)(`path`, {
            d: s,
            fill: `none`,
            stroke: `url(#ogline)`,
            strokeWidth: `2.5`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            vectorEffect: `non-scaling-stroke`,
          }),
          d &&
            (0, J.jsx)(`line`, {
              x1: d[0],
              x2: d[0],
              y1: 0,
              y2: 140,
              stroke: `rgba(13,13,15,0.25)`,
              strokeWidth: `1`,
              strokeDasharray: `3 3`,
              vectorEffect: `non-scaling-stroke`,
            }),
          !d &&
            o
              .slice(-1)
              .map((e, t) =>
                (0, J.jsx)(
                  `circle`,
                  { cx: e[0], cy: e[1], r: `4`, fill: `#ff8a2b` },
                  t
                )
              ),
        ],
      }),
      d &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`span`, {
              style: {
                position: `absolute`,
                left: `${f}%`,
                top: `${(d[1] / 140) * 100}%`,
                width: `0.7rem`,
                height: `0.7rem`,
                borderRadius: `50%`,
                background: `#fff`,
                border: `2px solid #a05ce8`,
                transform: `translate(-50%, -50%)`,
                pointerEvents: `none`,
              },
            }),
            (0, J.jsxs)(`div`, {
              style: {
                position: `absolute`,
                top: `calc(${(d[1] / 140) * 100}% - 0.8rem)`,
                left: `${f}%`,
                transform: `translate(${
                  f > 70 ? `-100%` : f < 30 ? `0` : `-50%`
                }, -100%)`,
                background: `var(--ink, #0d0d0f)`,
                color: `#fff`,
                borderRadius: `0.6rem`,
                padding: `0.4rem 0.6rem`,
                fontSize: `0.78rem`,
                lineHeight: 1.35,
                whiteSpace: `nowrap`,
                pointerEvents: `none`,
                boxShadow: `0 6px 18px rgba(0,0,0,0.18)`,
              },
              children: [
                (0, J.jsxs)(`b`, {
                  style: { fontWeight: 600 },
                  children: [e[u].v.toFixed(6), ` `, Z.asset],
                }),
                (0, J.jsxs)(`div`, {
                  style: { opacity: 0.7 },
                  children: [
                    `interest earned · `,
                    new Date(e[u].t).toLocaleTimeString([], {
                      hour: `numeric`,
                      minute: `2-digit`,
                      second: `2-digit`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function la({
  frozen: e,
  real: t,
  label: n = `Virtual`,
  last4: r = `4663`,
  name: i = `A. ANON`,
  brand: a = `Offyield`,
  unit: o = Z.asset,
}) {
  return (0, J.jsxs)(`div`, {
    className: `og-card ` + (e ? `frozen ` : ``) + (t ? `real` : ``),
    children: [
      (0, J.jsx)(`div`, { className: `og-card-sheen` }),
      (0, J.jsxs)(`div`, {
        className: `og-card-top`,
        children: [
          (0, J.jsx)(`span`, { className: `og-card-brand`, children: a }),
          (0, J.jsx)(`span`, { className: `og-card-kind`, children: n }),
        ],
      }),
      t &&
        (0, J.jsxs)(`div`, {
          className: `og-card-mid`,
          children: [
            (0, J.jsx)(`span`, { className: `og-card-chip` }),
            (0, J.jsxs)(`svg`, {
              className: `og-card-nfc`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              children: [
                (0, J.jsx)(`path`, { d: `M8.5 8.5a5 5 0 0 1 0 7` }),
                (0, J.jsx)(`path`, { d: `M12 5.5a9.5 9.5 0 0 1 0 13` }),
                (0, J.jsx)(`path`, { d: `M15.5 3a13 13 0 0 1 0 18` }),
              ],
            }),
          ],
        }),
      (0, J.jsxs)(`div`, {
        className: `og-card-num`,
        children: [`•••• •••• •••• `, r],
      }),
      (0, J.jsxs)(`div`, {
        className: `og-card-foot`,
        children: [
          (0, J.jsx)(`span`, { children: i }),
          (0, J.jsx)(`span`, { children: o }),
        ],
      }),
      e &&
        (0, J.jsx)(`div`, { className: `og-card-frozen`, children: `Frozen` }),
    ],
  });
}
var ua = {
    deposit: [`Principal deposit`, `wallet → vault`, `in`],
    spend: [`Yield spend`, `vault → wallet · interest only`, `out`],
    withdraw: [`Principal withdrawal`, `vault → wallet`, `out`],
    "impaired-withdraw": [`Impaired withdrawal`, `pro-rata payout`, `out`],
    exit: [`Position exit`, `full payout`, `out`],
    "exit-in-kind": [
      `Emergency exit (in kind)`,
      `venue shares → wallet · principal closed`,
      `out`,
    ],
    devalued: [`Venue devaluation`, `recorded shortfall`, `out`],
  },
  da = {
    swap: [`Swap`, `ETH → USDG, in your wallet`, `in`],
    "bridge-in": [`Bridged in`, `USDG arrived in your wallet`, `in`],
    "interest-pay": [`Card paid from interest`, `interest → card order`, `out`],
    "card-pay": [`Card paid with USDG`, `USDG → card order`, `out`],
    "card-refund": [`Card refund`, `USDG back from a card order`, `in`],
  };
function fa(e, t, n) {
  if (!e) return [];
  let r = Date.now(),
    i = n?.blockNumber,
    a = (t ?? []).map((e) => ({
      id: e.id,
      title: ua[e.kind][0],
      detail: ua[e.kind][1],
      dir: ua[e.kind][2],
      amount: `${b(e.amount)} ${Z.asset}`,
      txHash: e.txHash,
      at: i && i >= e.blockNumber ? r - Number(i - e.blockNumber) * 100 : null,
    }));
  for (let t of vn(bn(), e, r)) {
    let [e, n, r] = da[t.kind];
    a.push({
      id: t.id,
      title: e,
      detail: t.detail || n,
      dir: r,
      amount: `${b(BigInt(t.amount))} ${Z.asset}`,
      txHash: t.txHash,
      at: t.at,
    });
  }
  for (let t of Et(Ba(), e))
    r - t.createdAt > 30 * 864e5 ||
      a.push({
        id: `card:${t.orderId}`,
        title: `Card order`,
        detail: `${Pa(t.brand)} · ${Co(t)}`,
        dir: `out`,
        amount: `$${t.faceUsd}`,
        txHash: null,
        at: t.createdAt,
      });
  return a.sort((e, t) => (t.at ?? 0) - (e.at ?? 0));
}
var pa = (e) =>
    e
      ? new Date(e).toLocaleString([], {
          month: `short`,
          day: `numeric`,
          hour: `numeric`,
          minute: `2-digit`,
        })
      : ``,
  ma = `offyield.onboarding.hidden`;
function ha({ account: e, pos: t, onConnect: n, go: i, addFunds: a }) {
  let o = r({
      queryKey: [`ethBalance`, e],
      queryFn: () => E.getBalance({ address: e }),
      enabled: !!e,
      refetchInterval: 1e4,
      retry: 1,
    }),
    [s, c] = (0, V.useState)(!1);
  if (
    ((0, V.useEffect)(() => {
      try {
        c(localStorage.getItem(ma) === `1`);
      } catch {}
    }, []),
    s)
  )
    return null;
  let l = () => {
      c(!0);
      try {
        localStorage.setItem(ma, `1`);
      } catch {}
    },
    u = a
      ? `Add Funds in the Vault tab shows every way in.`
      : `${ni.map((e) => e.name).join(`, `)} withdraw straight to ${Z.name}.`,
    d = [
      {
        done: !!e,
        title: `Connect MetaMask`,
        hint: `Your wallet stays yours: Offyield never holds your keys.`,
        action: (0, J.jsx)(`button`, {
          className: `btn sm`,
          onClick: n,
          children: `Connect`,
        }),
      },
      {
        done: o.data !== void 0 && o.data >= 50000000000000n,
        title: `A little ETH for gas on ${Z.name}`,
        hint: X
          ? `Free from the testnet faucet.`
          : `About $1 of ETH covers dozens of deposits. ${u}`,
        action: X
          ? (0, J.jsx)(`a`, {
              className: `btn ghost sm`,
              href: Re,
              target: `_blank`,
              rel: `noreferrer`,
              children: `Faucet ↗`,
            })
          : (0, J.jsx)(`button`, {
              className: `btn ghost sm`,
              onClick: () => i(`vault`),
              children: `Add funds`,
            }),
      },
      {
        done: !!t && t.walletUsdg > 0n,
        title: `${Z.asset} in your wallet`,
        hint: X
          ? `Mint test USDG in the Vault tab.`
          : `Only the real USDG counts (${ta(B.usdg)}). ${u}`,
        action: (0, J.jsx)(`button`, {
          className: `btn ghost sm`,
          onClick: () => i(`vault`),
          children: X ? `Mint` : `Add funds`,
        }),
      },
      {
        done: !!t && t.principal > 0n,
        title: `Deposit it`,
        hint: `Two signatures: approve the amount, then deposit. Your principal stays withdrawable.`,
        action: (0, J.jsx)(`button`, {
          className: `btn sm`,
          onClick: () => i(`vault`),
          children: `Deposit`,
        }),
      },
      {
        done: !1,
        title: `Turn your interest into a card`,
        hint: `Once interest has accrued, spend it on a prepaid card that works online worldwide — your principal never moves.`,
        action: (0, J.jsx)(`button`, {
          className: `btn sm`,
          onClick: () => i(`spend`),
          children: `Get a card`,
        }),
      },
    ],
    f = d.findIndex((e) => !e.done);
  return (0, J.jsxs)(`div`, {
    className: `card pad-lg`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `section-title`,
        children: [
          (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                children: `Get started`,
              }),
              (0, J.jsx)(`h2`, {
                children: `Your first deposit, step by step`,
              }),
            ],
          }),
          (0, J.jsx)(`button`, {
            className: `btn ghost sm`,
            onClick: l,
            children: `Hide`,
          }),
        ],
      }),
      (0, J.jsx)(`ol`, {
        style: { listStyle: `none`, display: `grid`, gap: `0.25rem` },
        children: d.map((e, t) =>
          (0, J.jsxs)(
            `li`,
            {
              className: `route-line`,
              style: {
                gap: `0.9rem`,
                alignItems: `center`,
                opacity: t > f ? 0.55 : 1,
              },
              "aria-current": t === f ? `step` : void 0,
              children: [
                (0, J.jsx)(`span`, {
                  "aria-hidden": `true`,
                  style: {
                    width: `1.6rem`,
                    height: `1.6rem`,
                    flex: `none`,
                    borderRadius: `50%`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    fontSize: `0.8rem`,
                    background: e.done ? `var(--green)` : `transparent`,
                    border: e.done ? `none` : `1px solid var(--hairline)`,
                  },
                  children: e.done
                    ? (0, J.jsx)(`span`, {
                        style: {
                          width: `0.9rem`,
                          height: `0.9rem`,
                          display: `flex`,
                        },
                        children: Y.check,
                      })
                    : t + 1,
                }),
                (0, J.jsxs)(`div`, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, J.jsxs)(`b`, {
                      style: { fontWeight: 500 },
                      children: [e.title, e.done ? ` ✓` : ``],
                    }),
                    !e.done &&
                      (0, J.jsx)(`div`, {
                        style: {
                          fontSize: `0.8rem`,
                          color: `var(--ink-faint)`,
                          lineHeight: 1.45,
                        },
                        children: e.hint,
                      }),
                  ],
                }),
                t === f && e.action,
              ],
            },
            e.title
          )
        ),
      }),
    ],
  });
}
function ga(e) {
  return r({
    queryKey: [`rateBand`],
    queryFn: yi,
    enabled: e && !X,
    staleTime: 36e5,
    retry: 1,
  });
}
var _a = (e) =>
    e.toLocaleDateString([], {
      month: `short`,
      day: `numeric`,
      year: e.getFullYear() === new Date().getFullYear() ? void 0 : `numeric`,
    }),
  va = (e) => `${(e * 100).toFixed(1)}%`;
function ya(e) {
  let t = URL.createObjectURL(
      new Blob([Si(e, `$${b(Da)}`, Date.now())], { type: `text/calendar` })
    ),
    n = document.createElement(`a`);
  (n.href = t),
    (n.download = `offyield-next-card.ics`),
    document.body.appendChild(n),
    n.click(),
    n.remove(),
    setTimeout(() => URL.revokeObjectURL(t), 1e4);
}
function ba({ pos: e, band: t }) {
  if (!e || !t) return null;
  let n = bi(e.principal, e.spendable, Da, t, Date.now()),
    r = xi(Da, (t.low + t.high) / 2),
    i = t.low === t.high ? va(t.low) : `${va(t.low)}–${va(t.high)}`;
  return (0, J.jsxs)(`div`, {
    style: { marginTop: `0.75rem` },
    children: [
      n?.ready &&
        (0, J.jsxs)(`div`, {
          className: `route-line`,
          children: [
            (0, J.jsx)(`span`, {
              style: { color: `var(--ink-soft)` },
              children: `Next card`,
            }),
            (0, J.jsx)(`b`, { children: `Ready now` }),
          ],
        }),
      n &&
        !n.ready &&
        (0, J.jsxs)(`div`, {
          className: `route-line`,
          style: { flexWrap: `wrap`, gap: `0.5rem` },
          children: [
            (0, J.jsxs)(`span`, {
              style: { color: `var(--ink-soft)` },
              children: [`~$`, b(Da), ` of interest around`],
            }),
            (0, J.jsxs)(`span`, {
              style: { display: `flex`, gap: `0.5rem`, alignItems: `center` },
              children: [
                (0, J.jsxs)(`b`, {
                  children: [
                    _a(n.earliest),
                    _a(n.latest) === _a(n.earliest) ? `` : ` – ${_a(n.latest)}`,
                  ],
                }),
                (0, J.jsx)(`button`, {
                  className: `btn ghost sm`,
                  onClick: () => ya(n.earliest),
                  children: `Add to calendar`,
                }),
              ],
            }),
          ],
        }),
      (0, J.jsxs)(`div`, {
        style: {
          fontSize: `0.78rem`,
          color: `var(--ink-faint)`,
          lineHeight: 1.5,
          marginTop: `0.4rem`,
        },
        children: [
          `At the vault's recent rate (`,
          i,
          ` a year, realised over the last 7 and 30 days), about `,
          b(r, 0),
          ` `,
          Z.asset,
          ` of principal pays for a $30 card every month. The rate is variable: this is an estimate, not a promise.`,
        ],
      }),
    ],
  });
}
var xa = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`),
  Sa = {
    hold: `from the $OFY you held all week`,
    streak: `from your hold streak`,
    usage: `from your vault deposit`,
  };
function Ca({ account: e }) {
  let t = r({
    queryKey: [`level`, e],
    queryFn: async () => {
      let t = await $(`/api/levels/${e}`);
      if (!t.ok) throw Error(String(t.status));
      return t.json();
    },
    enabled: !!e,
    staleTime: 3e5,
    retry: 1,
  });
  if (!e) return null;
  let n = t.isError ? void 0 : t.data,
    i = n ? 10n ** BigInt(n.decimals) : 1n,
    a = n && n.level < 3 ? n.level + 1 : null,
    o = a
      ? [
          `hold ${xa(wi[a - 1])} $OFY for 7 days`,
          a >= 2 && `${xa(wi[a - 2])} for 30 days`,
          a >= 3 && `${xa(wi[a - 3])} for 90 days`,
          `keep ${b(Ti[a - 1], 0)} ${Z.asset} of principal in the vault`,
        ].filter(Boolean)
      : [],
    s = (e, t) =>
      (0, J.jsxs)(`div`, {
        className: `route-line`,
        children: [
          (0, J.jsx)(`span`, {
            style: { color: `var(--ink-soft)` },
            children: e,
          }),
          (0, J.jsxs)(`b`, { children: [xa(BigInt(t) / i), ` $OFY`] }),
        ],
      });
  return (0, J.jsxs)(`div`, {
    className: `card pad-lg`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `section-title`,
        children: [
          (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                children: `Membership`,
              }),
              (0, J.jsx)(`h2`, {
                children: n
                  ? n.level
                    ? `${n.name} member`
                    : `Not a member yet`
                  : t.isError
                  ? `Levels unavailable`
                  : `Checking your level…`,
              }),
            ],
          }),
          n &&
            n.level > 0 &&
            (0, J.jsxs)(`span`, {
              className: `pill ok`,
              children: [
                (0, J.jsx)(`span`, { className: `dot` }),
                `Level `,
                n.level,
              ],
            }),
        ],
      }),
      t.isError &&
        (0, J.jsx)(`div`, {
          style: { fontSize: `0.85rem`, color: `var(--ink-soft)` },
          children: `Couldn't work out your level right now. Try again in a few minutes.`,
        }),
      n &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            n.excluded &&
              (0, J.jsx)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-soft)`,
                  marginBottom: `0.5rem`,
                },
                children: `This is a pool, reserve or team wallet, so it has no level.`,
              }),
            n.level > 0 &&
              n.via &&
              (0, J.jsxs)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-soft)`,
                  marginBottom: `0.5rem`,
                },
                children: [n.name, ` `, Sa[n.via], `.`],
              }),
            s(`Lowest balance, last 7 days`, n.minBalances.d7),
            s(`Lowest balance, last 30 days`, n.minBalances.d30),
            s(`Lowest balance, last 90 days`, n.minBalances.d90),
            a &&
              !n.excluded &&
              (0, J.jsxs)(`div`, {
                style: {
                  fontSize: `0.82rem`,
                  color: `var(--ink-soft)`,
                  lineHeight: 1.55,
                  marginTop: `0.75rem`,
                },
                children: [`To reach `, Ci[a], `: `, o.join(`, or `), `.`],
              }),
            (0, J.jsx)(`div`, {
              style: {
                fontSize: `0.75rem`,
                color: `var(--ink-faint)`,
                lineHeight: 1.5,
                marginTop: `0.6rem`,
              },
              children: `Levels unlock perks like early access and a say in new cards. They never pay out anything, and selling only lowers your level. Your deposit and its interest never touch $OFY.`,
            }),
          ],
        }),
    ],
  });
}
function wa({
  account: e,
  pos: t,
  failed: n,
  spendable: r,
  lifetime: i,
  chart: a,
  activity: o,
  go: s,
  myCards: c,
  cardTab: l,
  ff: u,
  band: d,
  onConnect: f,
}) {
  return (0, J.jsxs)(`div`, {
    className: `fade-in stack`,
    children: [
      u.ONBOARDING &&
        !n &&
        (0, J.jsx)(ha, {
          account: e,
          pos: t,
          onConnect: f,
          go: s,
          addFunds: u.ADD_FUNDS && !X,
        }),
      (0, J.jsxs)(`div`, {
        className: `grid hero-grid`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `card pad-lg balance-hero`,
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                children: `Spendable yield`,
              }),
              (0, J.jsxs)(`div`, {
                className: `big-val mono`,
                children: [
                  b(r, 4),
                  (0, J.jsxs)(`small`, { children: [` `, Z.asset] }),
                ],
              }),
              (0, J.jsx)(`div`, {
                className: `hero-sub`,
                children: e
                  ? n
                    ? `Chain unreachable — showing 0, spending disabled.`
                    : t
                    ? `Read from the vault contract · block ${t.blockNumber.toString()}`
                    : `Reading your position…`
                  : `Connect a wallet to read your position.`,
              }),
              (0, J.jsx)(`div`, {
                className: `lease-bar`,
                children: (0, J.jsx)(`span`, {
                  style: {
                    width:
                      t && t.principal > 0n
                        ? Math.min(
                            100,
                            Number((r * 2000n) / t.principal) / 10
                          ) + `%`
                        : `0%`,
                  },
                }),
              }),
              (0, J.jsxs)(`div`, {
                className: `hero-actions-row`,
                children: [
                  (0, J.jsxs)(`button`, {
                    className: `btn`,
                    onClick: () => s(`spend`),
                    children: [
                      `Spend yield`,
                      (0, J.jsx)(`span`, {
                        className: `circ`,
                        children: Y.chevron,
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`button`, {
                    className: `btn ghost`,
                    onClick: () => s(`vault`),
                    children: [Y.plus, ` Add principal`],
                  }),
                ],
              }),
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Principal locked`,
                  }),
                  (0, J.jsxs)(`b`, {
                    children: [t ? b(t.principal) : `0.00`, ` `, Z.asset],
                  }),
                ],
              }),
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Interest earned (paid out + spendable)`,
                  }),
                  (0, J.jsxs)(`b`, { children: [b(i), ` `, Z.asset] }),
                ],
              }),
              u.PROJECTION && e && !n && (0, J.jsx)(ba, { pos: t, band: d }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `card pad-lg card-teaser is-soon`,
            children: [
              (0, J.jsx)(`div`, {
                className: `section-title`,
                children: (0, J.jsxs)(`div`, {
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `eyebrow`,
                      children: `Your card`,
                    }),
                    (0, J.jsx)(`h2`, { children: `In development` }),
                  ],
                }),
              }),
              (0, J.jsx)(`div`, {
                className: `card-art-wrap`,
                "aria-hidden": `true`,
                children: (0, J.jsx)(la, { real: !0 }),
              }),
              (0, J.jsx)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-faint)`,
                  lineHeight: 1.5,
                  marginTop: `1rem`,
                },
                children: `A reloadable Offyield card is still in development. Today you can turn your interest into a prepaid card that works online worldwide.`,
              }),
              (0, J.jsxs)(`button`, {
                className: `btn`,
                style: {
                  width: `100%`,
                  justifyContent: `center`,
                  marginTop: `0.9rem`,
                },
                onClick: () => s(l ? `card` : `spend`),
                children: [
                  `Buy a prepaid card`,
                  (0, J.jsx)(`span`, {
                    className: `circ`,
                    children: Y.chevron,
                  }),
                ],
              }),
              c &&
                !l &&
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  style: {
                    width: `100%`,
                    justifyContent: `center`,
                    marginTop: `0.5rem`,
                  },
                  onClick: () => s(`card`),
                  children: `My cards`,
                }),
            ],
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `grid stats`,
        children: [
          (0, J.jsx)(sa, {
            icon: Y.lock,
            label: `Principal (locked)`,
            value: t ? b(t.principal) : `0.00`,
            unit: Z.asset,
            sub: `Never spendable`,
          }),
          (0, J.jsx)(sa, {
            icon: Y.bolt,
            label: `Position value`,
            value: t ? b(t.value) : `0.00`,
            unit: Z.asset,
            sub: Z.market,
          }),
          (0, J.jsx)(sa, {
            icon: Y.card,
            label: `Interest paid out (all time)`,
            value: t ? b(t.spent) : `0.00`,
            unit: Z.asset,
            sub: D.exitCreditsSpent
              ? `Spent or withdrawn · interest only`
              : `Spent · interest only`,
          }),
          (0, J.jsx)(sa, {
            icon: Y.spark,
            label: `Supply APY`,
            value: `—`,
            sub: X
              ? `Testnet venue · yield is simulated`
              : `Variable · set by the lending market`,
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `grid two`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `card pad-lg`,
            children: [
              (0, J.jsxs)(`div`, {
                className: `section-title`,
                children: [
                  (0, J.jsxs)(`div`, {
                    children: [
                      (0, J.jsx)(`div`, {
                        className: `eyebrow`,
                        children: `Accrual`,
                      }),
                      (0, J.jsx)(`h2`, {
                        children: `Interest earned this session`,
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`span`, {
                    className: `pill ` + (n ? `warn` : `ok`),
                    children: [
                      (0, J.jsx)(`span`, { className: `dot` }),
                      n ? `Offline` : X ? `Live · testnet` : `Live`,
                    ],
                  }),
                ],
              }),
              (0, J.jsx)(ca, { data: a }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `card pad-lg`,
            children: [
              (0, J.jsxs)(`div`, {
                className: `section-title`,
                children: [
                  (0, J.jsxs)(`div`, {
                    children: [
                      (0, J.jsx)(`h2`, { children: `Recent activity` }),
                      (0, J.jsx)(`div`, {
                        style: {
                          fontSize: `0.8rem`,
                          color: `var(--ink-faint)`,
                        },
                        children: `Last 30 days`,
                      }),
                    ],
                  }),
                  (0, J.jsx)(`button`, {
                    className: `btn ghost sm`,
                    onClick: () => s(`activity`),
                    children: `View all`,
                  }),
                ],
              }),
              (() => {
                let n = fa(e, o, t);
                return n.length
                  ? n
                      .slice(0, 4)
                      .map((e) =>
                        (0, J.jsxs)(
                          `div`,
                          {
                            className: `route-line`,
                            children: [
                              (0, J.jsxs)(`div`, {
                                className: `who`,
                                children: [
                                  (0, J.jsx)(`b`, { children: e.title }),
                                  (0, J.jsx)(`span`, {
                                    className: `addr-mono`,
                                    children: pa(e.at),
                                  }),
                                ],
                              }),
                              (0, J.jsxs)(`span`, {
                                className: `amt`,
                                children: [
                                  e.dir === `out` ? `−` : `+`,
                                  e.amount,
                                ],
                              }),
                            ],
                          },
                          e.id
                        )
                      )
                  : (0, J.jsx)(`div`, {
                      className: `route-line`,
                      children: (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-faint)` },
                        children: `No activity in the last 30 days. Deposit principal to start.`,
                      }),
                    });
              })(),
            ],
          }),
        ],
      }),
      u.OFY_LEVELS && (0, J.jsx)(Ca, { account: e }),
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `section-title`,
            children: [
              (0, J.jsxs)(`div`, {
                children: [
                  (0, J.jsx)(`div`, {
                    className: `eyebrow`,
                    children: `Protocol invariant`,
                  }),
                  (0, J.jsx)(`h2`, {
                    children: `Principal can never be spent`,
                  }),
                ],
              }),
              (0, J.jsxs)(`span`, {
                className: `pill ok`,
                children: [
                  (0, J.jsx)(`span`, { className: `dot` }),
                  X ? `Enforced on-chain · testnet` : `Enforced on-chain`,
                ],
              }),
            ],
          }),
          (0, J.jsxs)(`p`, {
            style: {
              color: `var(--ink-soft)`,
              lineHeight: 1.6,
              fontSize: `0.95rem`,
            },
            children: [
              `The vault contract reverts any draw beyond your accrued interest — the numbers on this page are read straight from it, and every spend is checked by it. Only an explicit withdrawal moves principal.`,
              ` `,
              (0, J.jsx)(`a`, {
                href: `${B.explorer}/address/${B.vault}`,
                target: `_blank`,
                rel: `noreferrer`,
                style: { color: `inherit` },
                children: `Verified source on Blockscout ↗`,
              }),
              u.TRUST_CENTER &&
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    ` · `,
                    (0, J.jsx)(`a`, {
                      href: `/transparency`,
                      style: { color: `inherit` },
                      children: `Trust Center: live solvency and liquidity`,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ta({ card: e, setCard: t, spendable: n, toast: r }) {
  let [i, a] = (0, V.useState)(0),
    [o, s] = (0, V.useState)({ name: ``, city: ``, country: `` }),
    [c, l] = (0, V.useState)(e.limit),
    u = (0, J.jsx)(`div`, {
      className: `split-total`,
      style: { marginBottom: `1rem` },
      children: (0, J.jsxs)(`span`, {
        children: [
          Y.warn,
          ` Preview only — the card program is in development with our issuing partner. No real card is issued here.`,
        ],
      }),
    });
  if (!e.issued) {
    let c = [
      {
        t: `Verify identity`,
        d: `Quick KYC so the card issuer can approve you.`,
      },
      {
        t: `Link your vault`,
        d: `Your ${Z.asset} vault becomes the card's yield source.`,
      },
      {
        t: `Get spending`,
        d: `Virtual card instantly, physical card in 5-7 days.`,
      },
    ];
    return (0, J.jsxs)(`div`, {
      className: `grid two fade-in`,
      style: { alignItems: `start` },
      children: [
        (0, J.jsxs)(`div`, {
          className: `card pad-lg`,
          children: [
            (0, J.jsx)(`div`, {
              className: `eyebrow`,
              style: { marginBottom: `0.75rem` },
              children: `Card flow preview`,
            }),
            u,
            (0, J.jsx)(`h2`, {
              style: {
                fontSize: `1.25rem`,
                fontWeight: 500,
                marginBottom: `1rem`,
              },
              children: `Three steps, about two minutes`,
            }),
            (0, J.jsx)(`div`, {
              className: `steps-list`,
              children: c.map((e, t) =>
                (0, J.jsxs)(
                  `div`,
                  {
                    className:
                      `step-row ` + (t === i ? `active` : t < i ? `done` : ``),
                    children: [
                      (0, J.jsx)(`span`, {
                        className: `num`,
                        children: t < i ? Y.check : t + 1,
                      }),
                      (0, J.jsxs)(`div`, {
                        children: [
                          (0, J.jsx)(`b`, { children: e.t }),
                          (0, J.jsx)(`div`, {
                            style: {
                              fontSize: `0.85rem`,
                              color: `var(--ink-soft)`,
                            },
                            children: e.d,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.t
                )
              ),
            }),
            i === 0 &&
              (0, J.jsxs)(`div`, {
                style: { marginTop: `1.25rem` },
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `form-row`,
                    children: [
                      (0, J.jsx)(`label`, {
                        className: `field-label`,
                        children: `Full legal name`,
                      }),
                      (0, J.jsx)(`input`, {
                        className: `input`,
                        value: o.name,
                        onChange: (e) => s({ ...o, name: e.target.value }),
                        placeholder: `A. Anon`,
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`div`, {
                    className: `form-row`,
                    children: [
                      (0, J.jsx)(`label`, {
                        className: `field-label`,
                        children: `City`,
                      }),
                      (0, J.jsx)(`input`, {
                        className: `input`,
                        value: o.city,
                        onChange: (e) => s({ ...o, city: e.target.value }),
                        placeholder: `Toronto`,
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`div`, {
                    className: `form-row`,
                    children: [
                      (0, J.jsx)(`label`, {
                        className: `field-label`,
                        children: `Country`,
                      }),
                      (0, J.jsx)(`input`, {
                        className: `input`,
                        value: o.country,
                        onChange: (e) => s({ ...o, country: e.target.value }),
                        placeholder: `Canada`,
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`button`, {
                    className: `btn`,
                    style: { width: `100%`, justifyContent: `center` },
                    disabled: !o.name || !o.city || !o.country,
                    onClick: () => a(1),
                    children: [
                      `Continue`,
                      (0, J.jsx)(`span`, {
                        className: `circ`,
                        children: Y.chevron,
                      }),
                    ],
                  }),
                ],
              }),
            i === 1 &&
              (0, J.jsxs)(`div`, {
                style: { marginTop: `1.25rem` },
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `route-line`,
                    children: [
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-soft)` },
                        children: `Vault contract`,
                      }),
                      (0, J.jsx)(`span`, {
                        className: `addr-mono`,
                        children: ta(B.vault),
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`div`, {
                    className: `route-line`,
                    children: [
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-soft)` },
                        children: `Spending source`,
                      }),
                      (0, J.jsx)(`b`, { children: `Accrued yield only` }),
                    ],
                  }),
                  (0, J.jsxs)(`button`, {
                    className: `btn`,
                    style: {
                      width: `100%`,
                      justifyContent: `center`,
                      marginTop: `1rem`,
                    },
                    onClick: () => a(2),
                    children: [
                      `Link vault`,
                      (0, J.jsx)(`span`, {
                        className: `circ`,
                        children: Y.check,
                      }),
                    ],
                  }),
                ],
              }),
            i === 2 &&
              (0, J.jsxs)(`div`, {
                style: { marginTop: `1.25rem` },
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `split-total ok`,
                    children: [
                      (0, J.jsx)(`span`, {
                        children: `Would be ready to issue`,
                      }),
                      (0, J.jsxs)(`span`, {
                        children: [b(n), ` `, Z.asset, ` spendable`],
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`button`, {
                    className: `btn`,
                    style: {
                      width: `100%`,
                      justifyContent: `center`,
                      marginTop: `1rem`,
                    },
                    onClick: () => {
                      t({
                        ...e,
                        issued: !0,
                        name: o.name.toUpperCase() || `A. ANON`,
                      }),
                        r(`Preview card created (demo only)`);
                    },
                    children: [
                      `Preview virtual card`,
                      (0, J.jsx)(`span`, {
                        className: `circ`,
                        children: Y.chevron,
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        (0, J.jsxs)(`div`, {
          className: `card pad-lg`,
          children: [
            (0, J.jsx)(`div`, {
              className: `eyebrow`,
              style: { marginBottom: `0.9rem` },
              children: `Preview`,
            }),
            (0, J.jsx)(la, { name: o.name.toUpperCase() || `YOUR NAME` }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              style: { marginTop: `1.25rem` },
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Funding source`,
                }),
                (0, J.jsx)(`b`, { children: `Accrued yield` }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Principal at risk`,
                }),
                (0, J.jsxs)(`b`, { children: [`0.00 `, Z.asset] }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Settlement`,
                }),
                (0, J.jsxs)(`b`, { children: [Z.asset, ` on `, Z.name] }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  return (0, J.jsxs)(`div`, {
    className: `grid two fade-in`,
    style: { alignItems: `start` },
    children: [
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `section-title`,
            children: [
              (0, J.jsxs)(`div`, {
                children: [
                  (0, J.jsx)(`div`, {
                    className: `eyebrow`,
                    children: `Preview card (demo)`,
                  }),
                  (0, J.jsx)(`h2`, { children: `Virtual card` }),
                ],
              }),
              (0, J.jsxs)(`span`, {
                className: `pill ` + (e.frozen ? `warn` : `ok`),
                children: [
                  (0, J.jsx)(`span`, { className: `dot` }),
                  e.frozen ? `Frozen` : `Active`,
                ],
              }),
            ],
          }),
          u,
          (0, J.jsx)(la, { frozen: e.frozen, name: e.name }),
          (0, J.jsx)(`div`, {
            className: `card-actions`,
            children: (0, J.jsxs)(`button`, {
              className: `btn ghost sm`,
              onClick: () => {
                t({ ...e, frozen: !e.frozen }),
                  r(e.frozen ? `Preview card unfrozen` : `Preview card frozen`);
              },
              children: [Y.snow, ` `, e.frozen ? `Unfreeze` : `Freeze`],
            }),
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        children: [
          (0, J.jsx)(`div`, {
            className: `eyebrow`,
            style: { marginBottom: `0.9rem` },
            children: `Controls (demo)`,
          }),
          (0, J.jsxs)(`div`, {
            className: `form-row`,
            children: [
              (0, J.jsxs)(`label`, {
                className: `field-label`,
                children: [`Daily limit (`, Z.asset, `)`],
              }),
              (0, J.jsx)(`input`, {
                className: `input mono`,
                type: `number`,
                min: `0`,
                value: c,
                onChange: (e) => l(e.target.value),
              }),
            ],
          }),
          (0, J.jsx)(`button`, {
            className: `btn ghost`,
            style: { width: `100%`, justifyContent: `center` },
            onClick: () => {
              t({ ...e, limit: Number(c) || 0 }), r(`Preview limit set`);
            },
            children: `Save limit`,
          }),
          (0, J.jsxs)(`div`, {
            className: `route-line`,
            style: { marginTop: `1.25rem` },
            children: [
              (0, J.jsx)(`span`, {
                style: { color: `var(--ink-soft)` },
                children: `Available to spend`,
              }),
              (0, J.jsxs)(`b`, { children: [b(n, 4), ` `, Z.asset] }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `route-line`,
            children: [
              (0, J.jsx)(`span`, {
                style: { color: `var(--ink-soft)` },
                children: `Hard cap`,
              }),
              (0, J.jsx)(`b`, { children: `Accrued yield` }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `route-line`,
            children: [
              (0, J.jsx)(`span`, {
                style: { color: `var(--ink-soft)` },
                children: `Network`,
              }),
              (0, J.jsxs)(`b`, { children: [Z.name, ` · `, Z.id] }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Ea = (e) => {
    let [t, n = ``] = s(e, 18).split(`.`);
    return `${t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}.${n
      .slice(0, 6)
      .padEnd(6, `0`)}`;
  },
  Da = 33600000n;
function Oa({ pos: e, account: t, style: n, band: r }) {
  let i = e?.spendable ?? 0n,
    a = Math.min(100, Number((i * 1000n) / Da) / 10),
    o = (e, t) =>
      (0, J.jsxs)(`div`, {
        className: `route-line`,
        children: [
          (0, J.jsx)(`span`, {
            style: { color: `var(--ink-soft)` },
            children: e,
          }),
          (0, J.jsx)(`b`, { children: t }),
        ],
      });
  return (0, J.jsxs)(`div`, {
    className: `card pad-lg`,
    style: n,
    children: [
      (0, J.jsx)(`div`, {
        className: `eyebrow`,
        style: { marginBottom: `0.75rem` },
        children: `Your position`,
      }),
      (0, J.jsx)(`h2`, {
        style: {
          fontSize: `1.15rem`,
          fontWeight: 500,
          marginBottom: `0.75rem`,
        },
        children: `Principal stays, interest spends`,
      }),
      o(`Principal locked`, `${e ? b(e.principal) : `0.00`} ${Z.asset}`),
      o(`Interest ready to spend`, `${b(i, 4)} ${Z.asset}`),
      o(`Interest spent so far`, `${e ? b(e.spent) : `0.00`} ${Z.asset}`),
      (0, J.jsxs)(`div`, {
        style: {
          margin: `1rem 0 0.35rem`,
          display: `flex`,
          justifyContent: `space-between`,
          fontSize: `0.82rem`,
          color: `var(--ink-soft)`,
        },
        children: [
          (0, J.jsx)(`span`, { children: `Toward your first $30 card` }),
          (0, J.jsx)(`span`, {
            children: a >= 100 ? `Ready ✓` : `${a.toFixed(1)}%`,
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        className: `lease-bar`,
        children: (0, J.jsx)(`span`, { style: { width: `${a}%` } }),
      }),
      (0, J.jsx)(`div`, {
        style: {
          fontSize: `0.78rem`,
          color: `var(--ink-faint)`,
          marginTop: `0.4rem`,
        },
        children: t
          ? `About $33.60 of interest buys a $30 prepaid Visa, fees included.`
          : `Connect MetaMask to see your position.`,
      }),
      t && r && (0, J.jsx)(ba, { pos: e, band: r }),
    ],
  });
}
function ka({
  account: e,
  pos: t,
  failed: n,
  busy: r,
  shares: i,
  sharesFailed: a,
  onDeposit: o,
  onWithdraw: s,
  onExit: c,
  onExitInKind: l,
  onMint: u,
  toast: d,
  ff: f,
  band: p,
}) {
  let [h, g] = (0, V.useState)(``),
    [_, v] = (0, V.useState)(``),
    [y, x] = (0, V.useState)(null),
    [S, C] = (0, V.useState)(null),
    [T, E] = (0, V.useState)(null),
    [O, k] = (0, V.useState)(!1),
    A = m(h),
    M = m(_),
    N = t && A !== null ? j(t, A) : null,
    P = t ? w(t) : null,
    F = t ? (P !== null && P < t.walletUsdg ? P : t.walletUsdg) : 0n,
    ee = t?.principal ?? 0n,
    I = M !== null && M > ee,
    L = !!t?.impaired && D.withdrawFloor,
    te = !!t && (t.principal > 0n || t.value > 0n);
  (0, V.useEffect)(() => {
    x(null), C(null), k(!1);
  }, [e]);
  let R = async () => {
      if (!L) {
        await s(M, M), v(``);
        return;
      }
      if (y && y.amount === M) {
        await s(M, y.floor), v(``), x(null);
        return;
      }
      E(`withdraw`);
      try {
        x({ amount: M, ...(await ye(e, M, e)) });
      } catch (e) {
        d(e.message);
      } finally {
        E(null);
      }
    },
    [ne, re] = (0, V.useState)(!1),
    [ie, ae] = (0, V.useState)(!1),
    oe = async () => {
      S && (await c(S.floor ?? 0n), C(null), re(!1));
    },
    se = async () => {
      C(null), re(!0), E(`exit`);
      try {
        C((await be(e, e)) ?? { estimate: t?.value ?? 0n });
      } catch (e) {
        d(e.message);
      } finally {
        E(null);
      }
    },
    ce = (i ?? 0n) > 0n,
    [le, ue] = (0, V.useState)(null);
  (0, V.useEffect)(() => {
    e && (ce || te) && ue(e);
  }, [e, ce, te]);
  let de = D.exitInKind && !!e && (ce || ((a || n) && le === e));
  return (0, J.jsxs)(`div`, {
    className: `grid two fade-in`,
    style: { alignItems: `stretch` },
    children: [
      n &&
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          style: { gridColumn: `1 / -1` },
          children: (0, J.jsxs)(`span`, {
            children: [
              Y.warn,
              ` Chain unreachable — balances hidden, deposits disabled. Withdrawals stay available (the transaction itself will verify).`,
            ],
          }),
        }),
      f.ADD_FUNDS &&
        !X &&
        !n &&
        (0, J.jsx)(ui, {
          account: e,
          pos: t,
          ff: f,
          toast: d,
          onPrefill: (e) => {
            g(b(e, 6).replace(/,/g, ``)),
              document
                .getElementById(`dep-amt`)
                ?.scrollIntoView({ behavior: `smooth`, block: `center` });
          },
        }),
      (0, J.jsxs)(`div`, {
        style: { display: `flex`, flexDirection: `column`, gap: `1rem` },
        children: [
          (0, J.jsxs)(`div`, {
            className: `card pad-lg`,
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                style: { marginBottom: `0.75rem` },
                children: `Deposit`,
              }),
              (0, J.jsx)(`h2`, {
                style: {
                  fontSize: `1.15rem`,
                  fontWeight: 500,
                  marginBottom: `1rem`,
                },
                children: `Add principal`,
              }),
              (0, J.jsxs)(`div`, {
                className: `form-row`,
                children: [
                  (0, J.jsxs)(`label`, {
                    className: `field-label`,
                    htmlFor: `dep-amt`,
                    children: [
                      `Amount (`,
                      Z.asset,
                      `) · wallet holds `,
                      t ? b(t.walletUsdg) : `0.00`,
                    ],
                  }),
                  (0, J.jsxs)(`div`, {
                    style: { display: `flex`, gap: `0.5rem` },
                    children: [
                      (0, J.jsx)(`input`, {
                        id: `dep-amt`,
                        className: `input mono`,
                        type: `number`,
                        inputMode: `decimal`,
                        min: `0`,
                        value: h,
                        onChange: (e) => g(e.target.value),
                        placeholder: `0.00`,
                        style: { flex: 1 },
                      }),
                      (0, J.jsx)(`button`, {
                        className: `btn ghost sm`,
                        disabled: !t || F === 0n,
                        onClick: () => g(b(F, 6).replace(/,/g, ``)),
                        children: `Max`,
                      }),
                    ],
                  }),
                ],
              }),
              N &&
                (0, J.jsxs)(`div`, {
                  className: `status bad`,
                  style: { marginBottom: `0.6rem` },
                  children: [Y.x, ` `, N],
                }),
              (0, J.jsxs)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-soft)`,
                  marginBottom: `1rem`,
                  lineHeight: 1.5,
                },
                children: [
                  `Two wallet signatures: approve this exact amount, then deposit. `,
                  X
                    ? `Beta cap: 10,000 ${Z.asset} per deposit.`
                    : t && t.tvlCap > 0n
                    ? `Early access: up to ${b(t.maxSingleDeposit, 0)} ${
                        Z.asset
                      } per deposit · ${b(
                        t.tvlCap > t.totalPrincipal
                          ? t.tvlCap - t.totalPrincipal
                          : 0n,
                        0
                      )} of ${b(t.tvlCap, 0)} ${Z.asset} left in the vault.`
                    : `Early-access limits: up to 1,000 ${Z.asset} per deposit, 25,000 ${Z.asset} across the vault.`,
                ],
              }),
              (0, J.jsxs)(`button`, {
                className: `btn`,
                disabled: !e || n || A === null || !!N || r,
                style: { justifyContent: `center`, width: `100%` },
                onClick: () => {
                  o(A), g(``);
                },
                children: [
                  r === `deposit`
                    ? `Confirm in wallet…`
                    : `Deposit ${A ? b(A) : ``} ${Z.asset}`,
                  (0, J.jsx)(`span`, {
                    className: `circ`,
                    children: Y.chevron,
                  }),
                ],
              }),
              X &&
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  disabled: !e || n || r,
                  style: {
                    justifyContent: `center`,
                    width: `100%`,
                    marginTop: `0.6rem`,
                  },
                  onClick: u,
                  children:
                    r === `mint`
                      ? `Minting…`
                      : `Mint 1,000 test ${Z.asset} (faucet)`,
                }),
              X
                ? (0, J.jsxs)(`div`, {
                    style: {
                      fontSize: `0.8rem`,
                      color: `var(--ink-faint)`,
                      marginTop: `0.6rem`,
                    },
                    children: [
                      `Gas comes from the `,
                      (0, J.jsx)(`a`, {
                        href: Re,
                        target: `_blank`,
                        rel: `noreferrer`,
                        style: { color: `inherit` },
                        children: `Robinhood testnet faucet ↗`,
                      }),
                      `.`,
                    ],
                  })
                : (0, J.jsxs)(`div`, {
                    style: {
                      fontSize: `0.8rem`,
                      color: `var(--ink-faint)`,
                      marginTop: `0.6rem`,
                      lineHeight: 1.5,
                    },
                    children: [
                      `Real `,
                      Z.asset,
                      ` on `,
                      Z.name,
                      `. You need a little ETH on `,
                      Z.name,
                      ` for gas. Your deposit is supplied to a lending market and can lose value if that market takes a loss.`,
                    ],
                  }),
            ],
          }),
          (0, J.jsx)(Oa, {
            pos: t,
            account: e,
            style: { flex: 1 },
            band: f.PROJECTION && !n ? p : void 0,
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        onPointerLeave: (e) => {
          e.pointerType === `mouse` && ae(!1);
        },
        children: [
          (0, J.jsx)(`div`, {
            className: `eyebrow`,
            style: { marginBottom: `0.75rem` },
            children: `Withdraw`,
          }),
          (0, J.jsx)(`h2`, {
            style: {
              fontSize: `1.15rem`,
              fontWeight: 500,
              marginBottom: `1rem`,
            },
            children: `Take principal back`,
          }),
          (0, J.jsxs)(`div`, {
            className: `form-row`,
            children: [
              (0, J.jsxs)(`label`, {
                className: `field-label`,
                children: [`Amount (`, Z.asset, `) · max `, b(ee)],
              }),
              (0, J.jsx)(`input`, {
                className: `input mono`,
                type: `number`,
                min: `0`,
                value: _,
                onChange: (e) => {
                  v(e.target.value), x(null);
                },
                placeholder: `0.00`,
              }),
            ],
          }),
          I &&
            (0, J.jsxs)(`div`, {
              className: `status bad`,
              children: [Y.x, ` Exceeds principal balance`],
            }),
          t?.impaired &&
            (0, J.jsxs)(`div`, {
              className: `status bad`,
              children: [
                Y.warn,
                ` Position impaired: withdrawals pay pro-rata (`,
                b(t.impairment),
                ` `,
                Z.asset,
                ` shortfall recorded).`,
              ],
            }),
          y &&
            y.amount === M &&
            (0, J.jsxs)(`div`, {
              className: `split-total bad`,
              style: { marginTop: `0.75rem` },
              children: [
                (0, J.jsxs)(`span`, {
                  children: [
                    `Withdrawing `,
                    b(M),
                    ` of principal pays `,
                    b(y.paid),
                    ` `,
                    Z.asset,
                    ` right now`,
                  ],
                }),
                (0, J.jsxs)(`span`, {
                  children: [`you receive at least `, b(y.floor)],
                }),
              ],
            }),
          (0, J.jsxs)(`div`, {
            style: {
              fontSize: `0.85rem`,
              color: `var(--ink-soft)`,
              margin: `0.75rem 0 1rem`,
              lineHeight: 1.5,
            },
            children: [
              `Principal withdrawals can never be paused. Accrued yield stays spendable after a withdrawal.`,
              D.withdrawFloor &&
                ` If the payout would come in below what you confirmed, the transaction cancels itself and nothing moves.`,
            ],
          }),
          (0, J.jsx)(`button`, {
            className: `btn ghost`,
            disabled: !e || M === null || I || !!r || !!T,
            style: { justifyContent: `center`, width: `100%` },
            onClick: R,
            children:
              r === `withdraw`
                ? `Confirm in wallet…`
                : T === `withdraw`
                ? `Checking the payout…`
                : L
                ? y && y.amount === M
                  ? `Confirm: receive at least ${b(y.floor)} ${Z.asset}`
                  : `Check the payout`
                : `Withdraw`,
          }),
          y &&
            y.amount === M &&
            (0, J.jsx)(`button`, {
              className: `btn ghost sm`,
              style: { marginTop: `0.5rem` },
              disabled: !!r,
              onClick: () => x(null),
              children: `Cancel`,
            }),
          te &&
            (0, J.jsxs)(`div`, {
              style: {
                marginTop: `1.5rem`,
                paddingTop: `1.25rem`,
                borderTop: `1px solid var(--hairline)`,
              },
              children: [
                (0, J.jsx)(`div`, {
                  className: `eyebrow`,
                  style: { marginBottom: `0.5rem` },
                  children: `Close position`,
                }),
                (0, J.jsxs)(`div`, {
                  style: {
                    fontSize: `0.85rem`,
                    color: `var(--ink-soft)`,
                    lineHeight: 1.5,
                    marginBottom: `0.75rem`,
                  },
                  children: [
                    `Takes everything out in one step — principal and all accrued interest — to your wallet. Never pausable.`,
                    (0, J.jsx)(Aa, {
                      label: `What “never pausable” means`,
                      open: ie,
                      setOpen: ae,
                      panelId: `exit-tip`,
                    }),
                  ],
                }),
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  disabled: !e || !!r || !!T,
                  style: { justifyContent: `center`, width: `100%` },
                  onClick: se,
                  children:
                    r === `exit`
                      ? `Confirm in wallet…`
                      : `Close whole position`,
                }),
              ],
            }),
          ne &&
            (0, J.jsx)(ja, {
              account: e,
              quote: S,
              quoting: T === `exit`,
              busy: r === `exit`,
              onConfirm: oe,
              onClose: () => {
                re(!1), C(null);
              },
            }),
          (0, J.jsxs)(`div`, {
            className: `route-line`,
            style: { marginTop: `1.25rem` },
            children: [
              (0, J.jsx)(`span`, {
                style: { color: `var(--ink-soft)` },
                children: `Vault contract`,
              }),
              (0, J.jsxs)(`a`, {
                className: `addr-mono`,
                href: `${B.explorer}/address/${B.vault}`,
                target: `_blank`,
                rel: `noreferrer`,
                style: { color: `inherit` },
                children: [ta(B.vault), ` ↗`],
              }),
            ],
          }),
          te &&
            ie &&
            (0, J.jsxs)(`div`, {
              className: `info-pop`,
              id: `exit-tip`,
              role: `note`,
              children: [
                (0, J.jsx)(`b`, { children: `An exit nobody can close` }),
                (0, J.jsx)(`p`, {
                  children: `Closing your position is built into the vault contract as an emergency exit. Nobody can pause it or block it: not Offyield, not the venue, not anyone. It works even if the Offyield website goes away.`,
                }),
                (0, J.jsxs)(`p`, {
                  children: [
                    `It pays your principal plus all accrued interest in `,
                    Z.asset,
                    `, straight to your wallet.`,
                  ],
                }),
                (0, J.jsxs)(`p`, {
                  children: [
                    `If the yield venue ever runs short of cash so even this fails, a last-resort `,
                    (0, J.jsx)(`b`, { children: `exit in kind` }),
                    ` appears on this page. It hands you your share of the venue directly, which you can turn back into `,
                    Z.asset,
                    ` at the venue once it has cash.`,
                  ],
                }),
              ],
            }),
        ],
      }),
      de &&
        (0, J.jsxs)(`div`, {
          className: `card pad-lg`,
          style: { gridColumn: `1 / -1` },
          children: [
            (0, J.jsxs)(`div`, {
              className: `section-title`,
              children: [
                (0, J.jsxs)(`div`, {
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `eyebrow`,
                      children: `If withdrawals keep failing`,
                    }),
                    (0, J.jsx)(`h2`, { children: `Emergency exit` }),
                  ],
                }),
                (0, J.jsxs)(`span`, {
                  className: `pill ok`,
                  children: [
                    (0, J.jsx)(`span`, { className: `dot` }),
                    `Can't be paused`,
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`p`, {
              style: {
                color: `var(--ink-soft)`,
                lineHeight: 1.6,
                fontSize: `0.95rem`,
              },
              children: [
                `Use this only if withdrawing or closing your position keeps failing — for example because the yield venue is short of cash or can't work out its own value. Instead of `,
                Z.asset,
                `, you get your position as venue shares: the same claim the vault holds for you, moved to your wallet. Nobody can pause this, and it doesn't need the venue to have any cash.`,
              ],
            }),
            (0, J.jsxs)(`ul`, {
              style: {
                color: `var(--ink-soft)`,
                lineHeight: 1.6,
                fontSize: `0.9rem`,
                margin: `0.75rem 0 0 1.1rem`,
              },
              children: [
                (0, J.jsx)(`li`, {
                  children: `Your whole position closes: principal and interest together.`,
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    `The shares go to your wallet. You turn them into `,
                    Z.asset,
                    ` yourself, directly at the venue, once it has cash.`,
                  ],
                }),
                (0, J.jsx)(`li`, {
                  children: `After this, Offyield no longer holds or shows that money, and it no longer counts as spendable interest.`,
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              style: { marginTop: `1rem` },
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Venue shares you would receive`,
                }),
                (0, J.jsx)(`b`, {
                  children:
                    i == null ? `unknown — the transaction will check` : Ea(i),
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Venue (where you redeem them)`,
                }),
                (0, J.jsxs)(`a`, {
                  className: `addr-mono`,
                  href: `${B.explorer}/address/${B.venue}`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  style: { color: `inherit` },
                  children: [ta(B.venue), ` ↗`],
                }),
              ],
            }),
            (0, J.jsxs)(`details`, {
              style: {
                marginTop: `0.75rem`,
                fontSize: `0.85rem`,
                color: `var(--ink-soft)`,
                lineHeight: 1.55,
              },
              children: [
                (0, J.jsxs)(`summary`, {
                  style: { cursor: `pointer` },
                  children: [`How to turn the shares back into `, Z.asset],
                }),
                (0, J.jsxs)(`ol`, {
                  style: { margin: `0.5rem 0 0 1.1rem` },
                  children: [
                    (0, J.jsxs)(`li`, {
                      children: [
                        `On the venue contract, call `,
                        (0, J.jsx)(`code`, {
                          children: `redeem(shares, yourAddress, yourAddress)`,
                        }),
                        ` with your share balance (`,
                        (0, J.jsx)(`code`, {
                          children: `balanceOf(yourAddress)`,
                        }),
                        `). You can split it into smaller redemptions.`,
                      ],
                    }),
                    (0, J.jsxs)(`li`, {
                      children: [
                        `If that fails because the venue has no free cash, anyone can pull cash back from one of its markets with the venue's `,
                        (0, J.jsx)(`code`, { children: `forceDeallocate` }),
                        `. The venue may charge up to 2% of the amount moved. Do both in one transaction with the venue's `,
                        (0, J.jsx)(`code`, { children: `multicall` }),
                        ` so nothing can get in between.`,
                      ],
                    }),
                    (0, J.jsx)(`li`, {
                      children: `If the venue can't value itself at all, no redemption works until the venue is repaired. Your shares keep their claim in the meantime.`,
                    }),
                  ],
                }),
              ],
            }),
            O &&
              (0, J.jsx)(`div`, {
                className: `split-total bad`,
                style: { marginTop: `1rem` },
                children: (0, J.jsxs)(`span`, {
                  children: [
                    Y.warn,
                    ` This closes your whole position and sends venue shares, not `,
                    Z.asset,
                    `. It can't be undone.`,
                  ],
                }),
              }),
            (0, J.jsxs)(`div`, {
              style: {
                display: `flex`,
                gap: `0.6rem`,
                marginTop: `1rem`,
                flexWrap: `wrap`,
              },
              children: [
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  disabled: !e || !!r,
                  onClick: async () => {
                    if (!O) {
                      k(!0);
                      return;
                    }
                    await l(), k(!1);
                  },
                  children:
                    r === `exitInKind`
                      ? `Confirm in wallet…`
                      : O
                      ? `Confirm: send my venue shares to my wallet`
                      : `Exit in kind`,
                }),
                O &&
                  (0, J.jsx)(`button`, {
                    className: `btn ghost sm`,
                    disabled: !!r,
                    onClick: () => k(!1),
                    children: `Cancel`,
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Aa({ label: e, open: t, setOpen: n, panelId: r }) {
  let i = (0, V.useRef)(0);
  return (
    (0, V.useEffect)(() => {
      if (!t) return;
      let e = (e) => {
          e.target.closest?.(`.info-btn, #${r}`) || n(!1);
        },
        i = (e) => {
          e.key === `Escape` && n(!1);
        };
      return (
        document.addEventListener(`pointerdown`, e),
        document.addEventListener(`keydown`, i),
        () => {
          document.removeEventListener(`pointerdown`, e),
            document.removeEventListener(`keydown`, i);
        }
      );
    }, [t, r, n]),
    (0, V.useEffect)(() => () => clearTimeout(i.current), []),
    (0, J.jsx)(`button`, {
      type: `button`,
      className: `info-btn`,
      "aria-label": e,
      "aria-expanded": t,
      "aria-controls": r,
      onPointerEnter: (e) => {
        e.pointerType === `mouse` && (i.current = setTimeout(() => n(!0), 2e3));
      },
      onPointerLeave: () => clearTimeout(i.current),
      onClick: () => {
        clearTimeout(i.current), n(!t);
      },
      children: Y.info,
    })
  );
}
function ja({
  account: e,
  quote: t,
  quoting: n,
  busy: r,
  onConfirm: i,
  onClose: a,
}) {
  let [o, s] = (0, V.useState)(!1),
    c = () => {
      r || (s(!0), setTimeout(a, 180));
    };
  return (
    (0, V.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && c();
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }),
    (0, J.jsx)(`div`, {
      className: `og-overlay` + (o ? ` closing` : ``),
      onPointerDown: (e) => {
        e.target === e.currentTarget && c();
      },
      children: (0, J.jsxs)(`div`, {
        className: `og-sheet`,
        role: `alertdialog`,
        "aria-modal": `true`,
        "aria-labelledby": `cp-title`,
        "aria-describedby": `cp-warn`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `set-top`,
            children: [
              (0, J.jsx)(`span`, {
                className: `set-ico cp-ico`,
                children: Y.warn,
              }),
              (0, J.jsxs)(`div`, {
                style: { minWidth: 0, flex: 1 },
                children: [
                  (0, J.jsx)(`h2`, {
                    id: `cp-title`,
                    children: `Are you sure you want to close your position?`,
                  }),
                  (0, J.jsxs)(`div`, {
                    className: `set-sub`,
                    children: [ta(e), ` · `, Z.name],
                  }),
                ],
              }),
              (0, J.jsx)(`button`, {
                className: `set-close`,
                onClick: c,
                disabled: r,
                "aria-label": `Cancel`,
                children: Y.x,
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `set-body`,
            children: [
              (0, J.jsxs)(`div`, {
                className: `cp-warn`,
                id: `cp-warn`,
                children: [
                  (0, J.jsxs)(`b`, {
                    children: [Y.warn, ` What closing does`],
                  }),
                  (0, J.jsxs)(`ul`, {
                    children: [
                      (0, J.jsxs)(`li`, {
                        children: [
                          `Sends `,
                          (0, J.jsx)(`b`, { children: `all` }),
                          ` your principal and `,
                          (0, J.jsx)(`b`, { children: `all` }),
                          ` accrued interest to your wallet as `,
                          Z.asset,
                          `, in one transaction.`,
                        ],
                      }),
                      (0, J.jsx)(`li`, {
                        children: `Your position ends. It stops earning, and there's no interest left to spend on cards.`,
                      }),
                      (0, J.jsx)(`li`, {
                        children: `The amount is paid at the venue's price when the transaction lands. If it would come in below the minimum shown, it cancels itself and nothing moves.`,
                      }),
                      (0, J.jsx)(`li`, {
                        children: `It needs one MetaMask signature and a little ETH for gas. Once it lands it can't be undone, but you can deposit again any time.`,
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`span`, {
                    children: [
                      `Only want some back? Use `,
                      (0, J.jsx)(`b`, { children: `Withdraw` }),
                      ` above instead: it takes out principal and leaves your interest earning.`,
                    ],
                  }),
                ],
              }),
              (0, J.jsx)(`div`, {
                className: `split-total`,
                style: { marginTop: `1rem` },
                children: n
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsx)(`span`, {
                          children: `Checking the payout…`,
                        }),
                        (0, J.jsx)(`span`, {}),
                      ],
                    })
                  : t
                  ? t.estimate === void 0
                    ? (0, J.jsxs)(J.Fragment, {
                        children: [
                          (0, J.jsxs)(`span`, {
                            children: [
                              `You receive about `,
                              b(t.paid),
                              ` `,
                              Z.asset,
                            ],
                          }),
                          (0, J.jsxs)(`span`, {
                            children: [`at least `, b(t.floor)],
                          }),
                        ],
                      })
                    : (0, J.jsxs)(J.Fragment, {
                        children: [
                          (0, J.jsxs)(`span`, {
                            children: [`About `, b(t.estimate), ` `, Z.asset],
                          }),
                          (0, J.jsx)(`span`, {
                            children: `paid at the venue's price when it lands`,
                          }),
                        ],
                      })
                  : (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsx)(`span`, {
                          children: `Couldn't check the payout right now.`,
                        }),
                        (0, J.jsx)(`span`, {
                          children: `close this and try again`,
                        }),
                      ],
                    }),
              }),
              (0, J.jsxs)(`div`, {
                className: `set-actions`,
                style: { paddingLeft: 0, marginTop: `1.1rem` },
                children: [
                  (0, J.jsx)(`button`, {
                    className: `btn ghost sm`,
                    onClick: c,
                    disabled: r,
                    children: `Keep my position`,
                  }),
                  (0, J.jsx)(`button`, {
                    className: `btn sm set-red`,
                    onClick: i,
                    disabled: r || n || !t,
                    children: r
                      ? `Confirm in wallet…`
                      : `Yes, close my position`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var Ma = [
    [`AL`, `Albania`],
    [`AR`, `Argentina`],
    [`AM`, `Armenia`],
    [`AU`, `Australia`],
    [`AT`, `Austria`],
    [`AZ`, `Azerbaijan`],
    [`BH`, `Bahrain`],
    [`BD`, `Bangladesh`],
    [`BE`, `Belgium`],
    [`BO`, `Bolivia`],
    [`BA`, `Bosnia and Herzegovina`],
    [`BR`, `Brazil`],
    [`BG`, `Bulgaria`],
    [`KH`, `Cambodia`],
    [`CM`, `Cameroon`],
    [`CA`, `Canada`],
    [`CL`, `Chile`],
    [`CO`, `Colombia`],
    [`CR`, `Costa Rica`],
    [`HR`, `Croatia`],
    [`CY`, `Cyprus`],
    [`CZ`, `Czechia`],
    [`CI`, `Côte d'Ivoire`],
    [`DK`, `Denmark`],
    [`DO`, `Dominican Republic`],
    [`EC`, `Ecuador`],
    [`EG`, `Egypt`],
    [`SV`, `El Salvador`],
    [`EE`, `Estonia`],
    [`FI`, `Finland`],
    [`FR`, `France`],
    [`GE`, `Georgia`],
    [`DE`, `Germany`],
    [`GH`, `Ghana`],
    [`GR`, `Greece`],
    [`GT`, `Guatemala`],
    [`HN`, `Honduras`],
    [`HK`, `Hong Kong`],
    [`HU`, `Hungary`],
    [`IN`, `India`],
    [`ID`, `Indonesia`],
    [`IE`, `Ireland`],
    [`IL`, `Israel`],
    [`IT`, `Italy`],
    [`JM`, `Jamaica`],
    [`JP`, `Japan`],
    [`JO`, `Jordan`],
    [`KE`, `Kenya`],
    [`KW`, `Kuwait`],
    [`LV`, `Latvia`],
    [`LB`, `Lebanon`],
    [`LT`, `Lithuania`],
    [`LU`, `Luxembourg`],
    [`MY`, `Malaysia`],
    [`MT`, `Malta`],
    [`MX`, `Mexico`],
    [`MD`, `Moldova`],
    [`MA`, `Morocco`],
    [`NP`, `Nepal`],
    [`NZ`, `New Zealand`],
    [`NI`, `Nicaragua`],
    [`NG`, `Nigeria`],
    [`MK`, `North Macedonia`],
    [`NO`, `Norway`],
    [`OM`, `Oman`],
    [`PK`, `Pakistan`],
    [`PA`, `Panama`],
    [`PY`, `Paraguay`],
    [`PE`, `Peru`],
    [`PH`, `Philippines`],
    [`PL`, `Poland`],
    [`PT`, `Portugal`],
    [`QA`, `Qatar`],
    [`RO`, `Romania`],
    [`SA`, `Saudi Arabia`],
    [`SN`, `Senegal`],
    [`RS`, `Serbia`],
    [`SG`, `Singapore`],
    [`SK`, `Slovakia`],
    [`SI`, `Slovenia`],
    [`ZA`, `South Africa`],
    [`KR`, `South Korea`],
    [`ES`, `Spain`],
    [`LK`, `Sri Lanka`],
    [`SE`, `Sweden`],
    [`CH`, `Switzerland`],
    [`TW`, `Taiwan`],
    [`TZ`, `Tanzania`],
    [`TH`, `Thailand`],
    [`TT`, `Trinidad and Tobago`],
    [`TN`, `Tunisia`],
    [`TR`, `Türkiye`],
    [`UG`, `Uganda`],
    [`UA`, `Ukraine`],
    [`AE`, `United Arab Emirates`],
    [`GB`, `United Kingdom`],
    [`US`, `United States`],
    [`UY`, `Uruguay`],
    [`UZ`, `Uzbekistan`],
    [`VN`, `Vietnam`],
    [`ZM`, `Zambia`],
  ],
  Na = {
    VISA: {
      where: `Buy from anywhere · US-issued Visa · online purchases`,
      detail: `You redeem the voucher on the issuer's site, where you pick the card type. The card is US-issued and works at most online Visa merchants worldwide, but merchants that require 3-D Secure (common in the EU) can decline it, and it can't be used in person unless you pick a wallet-enabled card at redemption. The issuer charges its own activation and maintenance fees, and the voucher expires 12 months after purchase.`,
    },
    AMEX: {
      where: `US only · online and mail order`,
      detail: `Activates in the US only. Funds expire 6 months from issuance. Online and mail/phone order, in store only through a participating mobile wallet. No recurring billing, no ATM.`,
    },
  },
  Pa = (e) => {
    let t = String(e ?? ``);
    return /visa/i.test(t)
      ? `VISA`
      : /amex|american express/i.test(t)
      ? `AMEX`
      : /master/i.test(t)
      ? `MASTERCARD`
      : t || `Card`;
  };
function Fa({ brand: e, dim: t }) {
  let n = Pa(e),
    r = {
      height: `2rem`,
      minWidth: `3.4rem`,
      padding: `0 0.55rem`,
      borderRadius: `0.4rem`,
      display: `inline-flex`,
      alignItems: `center`,
      justifyContent: `center`,
      marginBottom: `0.6rem`,
      filter: t ? `grayscale(1)` : void 0,
      opacity: t ? 0.7 : 1,
    };
  return n === `VISA`
    ? (0, J.jsx)(`span`, {
        "aria-hidden": `true`,
        style: {
          ...r,
          background: `#1a1f71`,
          color: `#fff`,
          fontWeight: 800,
          fontStyle: `italic`,
          letterSpacing: `0.06em`,
          fontSize: `0.95rem`,
        },
        children: `VISA`,
      })
    : n === `AMEX`
    ? (0, J.jsx)(`span`, {
        "aria-hidden": `true`,
        style: {
          ...r,
          background: `#2e77bc`,
          color: `#fff`,
          fontWeight: 800,
          letterSpacing: `0.08em`,
          fontSize: `0.78rem`,
        },
        children: `AMEX`,
      })
    : n === `MASTERCARD`
    ? (0, J.jsxs)(`span`, {
        "aria-hidden": `true`,
        style: { ...r, background: `#141416` },
        children: [
          (0, J.jsx)(`span`, {
            style: {
              width: `1.05rem`,
              height: `1.05rem`,
              borderRadius: `50%`,
              background: `#eb001b`,
            },
          }),
          (0, J.jsx)(`span`, {
            style: {
              width: `1.05rem`,
              height: `1.05rem`,
              borderRadius: `50%`,
              background: `#f79e1b`,
              marginLeft: `-0.42rem`,
              mixBlendMode: `screen`,
            },
          }),
        ],
      })
    : (0, J.jsx)(`span`, {
        "aria-hidden": `true`,
        style: {
          ...r,
          background: `var(--grad-soft)`,
          color: `var(--ink)`,
          fontSize: `0.75rem`,
        },
        children: `CARD`,
      });
}
var Ia = (e) => `offyield.shop.open.${String(e).toLowerCase()}`,
  La = (e, t) => {
    try {
      localStorage.setItem(Ia(e), JSON.stringify(t));
    } catch {}
  },
  Ra = (e) => {
    try {
      localStorage.removeItem(Ia(e));
    } catch {}
  },
  za = (e) => {
    try {
      let t = JSON.parse(localStorage.getItem(Ia(e)) || `null`);
      return t &&
        typeof t.orderId == `string` &&
        Date.now() - (t.createdAt ?? 0) < 864e5
        ? t
        : null;
    } catch {
      return null;
    }
  },
  Ba = () => {
    try {
      return window.localStorage;
    } catch {
      return null;
    }
  },
  Va = (e, t) => Ot(Ba(), e, t),
  Ha = {
    pending: `pending delivery`,
    eligible: `on its way`,
    paid: `paid`,
    not_eligible: `not eligible`,
  },
  Ua = [`paid`, `not_eligible`];
function Wa({
  account: e,
  orderId: t,
  cardRef: n,
  delivered: r,
  cached: i,
  live: a = !0,
}) {
  let [o, s] = (0, V.useState)(i ?? null);
  (0, V.useEffect)(() => {
    s(i ?? null);
  }, [n]);
  let c = Ua.includes(o?.status);
  if (
    ((0, V.useEffect)(() => {
      if (!n || !r || c || !a) return;
      let i = !0,
        o = async () => {
          if (!document.hidden)
            try {
              let r = await $(`/api/spend/cashback/${n}`);
              if (!i) return;
              if (r.status === 404) {
                s({ status: `none` });
                return;
              }
              if (!r.ok) return;
              let a = await r.json();
              if (!i || !Ha[a.status]) return;
              s(a), e && Va(e, { orderId: t, cashback: a });
            } catch {}
        };
      o();
      let l = setInterval(o, 3e5);
      return () => {
        (i = !1), clearInterval(l);
      };
    }, [e, t, n, r, c, a]),
    !n || o?.status === `none` || (!a && !o && r))
  )
    return null;
  let l = o?.status ?? (r ? `eligible` : `pending`);
  return (0, J.jsxs)(`span`, {
    className: `cb-line ` + l,
    children: [
      `Cashback: `,
      Ha[l],
      l === `paid` &&
        o?.txHash &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            ` · `,
            (0, J.jsx)(`a`, {
              href: `${jo}/tx/${o.txHash}`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `view payment`,
            }),
          ],
        }),
    ],
  });
}
var Ga = (e) => {
  if (!e) return `Waiting for your payment`;
  if (e.deliveryState === `Delivered`) return `Delivered ✓`;
  let t =
    e.orderState && /cancel|expir|fail/i.test(e.orderState)
      ? e.orderState
      : e.paymentState;
  return (
    {
      WalletCreated: `Waiting for your payment`,
      PaymentDetected: `Payment detected`,
      PaymentReceived: `Payment received`,
      Paid: `Payment received`,
      Confirmed: `Payment received`,
      Expired: `Expired unpaid`,
      Canceled: `Cancelled`,
      Cancelled: `Cancelled`,
      Failed: `Failed`,
      PaymentSetupFailed: `Failed`,
    }[t] ?? (t ? String(t).replace(/([a-z])([A-Z])/g, `$1 $2`) : `Checking…`)
  );
};
function Ka({ until: e }) {
  let [t, n] = (0, V.useState)(() => Date.now());
  (0, V.useEffect)(() => {
    let e = setInterval(() => n(Date.now()), 1e3);
    return () => clearInterval(e);
  }, []);
  let r = e - t;
  if (r <= 0)
    return (0, J.jsx)(J.Fragment, {
      children: `Window passed. If you already paid, the card is still on its way.`,
    });
  let i = Math.floor(r / 6e4),
    a = Math.floor((r % 6e4) / 1e3);
  return (0, J.jsxs)(J.Fragment, {
    children: [i, `:`, String(a).padStart(2, `0`)],
  });
}
var qa = [
    [`check`, `Check the card order is still waiting for payment`],
    [`spend`, `Spend the interest to your wallet`],
    [`pay-check`, `Re-check the order and price the bridge`],
    [`pay-approve`, `Approve exactly the USDG for the bridge`],
    [`pay`, `Pay the card order`],
  ],
  Ja = {
    42161: `https://arbiscan.io`,
    8453: `https://basescan.org`,
    137: `https://polygonscan.com`,
  };
function Ya({ account: e, order: t, toast: n, onLock: r }) {
  let i = e ? qt(t, e) : null,
    [a, o] = (0, V.useState)(`idle`),
    [s, c] = (0, V.useState)(null),
    [l, u] = (0, V.useState)({}),
    [d, f] = (0, V.useState)(null),
    [p, m] = (0, V.useState)(null),
    [h, g] = (0, V.useState)(null),
    [_, v] = (0, V.useState)(null),
    y = t?.orderId;
  (0, V.useEffect)(() => {
    o(`idle`), c(null), u({}), f(null), m(null), g(null);
    let t = e ? Po(e) : null,
      n = t && y ? fn(t, y) : null;
    v(n),
      n?.paid &&
        n.depositTx &&
        (f({ depositTx: n.depositTx, alreadyPaid: !0, leftoverUsdg: null }),
        o(`paid`));
  }, [e, y]),
    (0, V.useEffect)(() => {
      if (a !== `paid` || !d?.depositTx) return;
      let t = Po(e);
      if (!t) return;
      let n = !0,
        r = null,
        i = Date.now(),
        o = async () => {
          let e = await gt(t, d.depositTx);
          n &&
            (g(e),
            e.state !== `filled` &&
              e.state !== `expired` &&
              e.state !== `refunded` &&
              Date.now() - i < 30 * 6e4 &&
              (r = setTimeout(o, 6e3)));
        };
      return (
        o(),
        () => {
          (n = !1), clearTimeout(r);
        }
      );
    }, [a, d, e]);
  let b = a === `running` || a === `paid` || !!_?.spent || !!_?.depositTx;
  if (
    ((0, V.useEffect)(() => {
      r?.(b);
    }, [b, r]),
    !i)
  )
    return null;
  let x = async () => {
      let t = Po(e);
      if (!t) {
        n(`No wallet found.`);
        return;
      }
      o(`pricing`), m(null);
      try {
        c(await cn(t, i)), o(`review`);
      } catch (e) {
        m(e.message), o(`error`);
      }
    },
    S = async () => {
      let t = Po(e);
      if (!(!t || !s)) {
        o(`running`), u({}), m(null);
        try {
          let r = await un(t, s, (e) => u((t) => ({ ...t, [e.step]: e })));
          f(r),
            o(`paid`),
            r.alreadyPaid ||
              yn(bn(), e, {
                id: `pay:${r.depositTx}`,
                kind: `interest-pay`,
                amount: s.spentAlready ? s.bridge.inputAmount : s.spend,
                detail: `$${i.faceUsd} card order`,
                txHash: r.depositTx,
                at: Date.now(),
              }),
            n(
              r.alreadyPaid
                ? `This order was already paid`
                : `Paid from your interest`
            );
        } catch (e) {
          m(e.message), o(`error`), v(fn(t, i.orderId));
        }
      }
    },
    C = (e) => (Number(e) / 1e6).toFixed(2),
    w = (e) =>
      (0, J.jsxs)(`a`, {
        className: `addr-mono`,
        href: k(e),
        target: `_blank`,
        rel: `noreferrer noopener`,
        style: { color: `inherit` },
        children: [ta(e), ` ↗`],
      });
  return (0, J.jsxs)(`div`, {
    style: {
      marginTop: `1rem`,
      paddingTop: `1rem`,
      borderTop: `1px solid var(--hairline)`,
    },
    children: [
      (0, J.jsx)(`div`, {
        className: `eyebrow`,
        style: { marginBottom: `0.5rem` },
        children: `Pay with your interest`,
      }),
      (a === `idle` || a === `pricing`) &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`div`, {
              style: {
                fontSize: `0.85rem`,
                color: `var(--ink-soft)`,
                lineHeight: 1.55,
                marginBottom: `0.6rem`,
              },
              children: _?.spent
                ? `You already spent ${C(
                    _.spent
                  )} USDG of interest to your wallet for this card. Finish paying with it.`
                : `Pay this card from your interest instead of sending USDC yourself. Your wallet will ask you to confirm three times: spend the interest, approve the exact amount, pay.`,
            }),
            (0, J.jsxs)(`button`, {
              className: `btn`,
              disabled: a === `pricing`,
              onClick: x,
              children: [
                a === `pricing`
                  ? `Pricing…`
                  : _?.spent
                  ? `Finish paying`
                  : `Pay with interest`,
                (0, J.jsx)(`span`, { className: `circ`, children: Y.chevron }),
              ],
            }),
          ],
        }),
      a === `review` &&
        s &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            s.spentAlready
              ? (0, J.jsxs)(`div`, {
                  className: `route-line`,
                  children: [
                    (0, J.jsx)(`span`, {
                      style: { color: `var(--ink-soft)` },
                      children: `From your wallet (interest you already spent)`,
                    }),
                    (0, J.jsxs)(`b`, {
                      children: [C(s.bridge.inputAmount), ` USDG`],
                    }),
                  ],
                })
              : (0, J.jsxs)(`div`, {
                  className: `route-line`,
                  children: [
                    (0, J.jsx)(`span`, {
                      style: { color: `var(--ink-soft)` },
                      children: `Interest spent`,
                    }),
                    (0, J.jsxs)(`b`, { children: [C(s.spend), ` USDG`] }),
                  ],
                }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Bridge fee (Across)`,
                }),
                (0, J.jsxs)(`b`, { children: [C(s.bridge.fee), ` USDG`] }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `The card order receives`,
                }),
                (0, J.jsxs)(`b`, {
                  children: [
                    `exactly `,
                    C(i.coinUnits),
                    ` USDC on `,
                    i.network,
                  ],
                }),
              ],
            }),
            !s.spentAlready &&
              s.spend > s.bridge.inputAmount &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Buffer, kept in your wallet if unused`,
                  }),
                  (0, J.jsxs)(`b`, {
                    children: [C(s.spend - s.bridge.inputAmount), ` USDG`],
                  }),
                ],
              }),
            (0, J.jsx)(`div`, {
              style: {
                fontSize: `0.78rem`,
                color: `var(--ink-faint)`,
                lineHeight: 1.5,
                margin: `0.6rem 0`,
              },
              children: `Only interest is spent; your principal can't be touched. Across is a third-party bridge. If it doesn't fill in time, it refunds the USDG to your wallet.`,
            }),
            (0, J.jsxs)(`div`, {
              style: { display: `flex`, gap: `0.5rem` },
              children: [
                (0, J.jsxs)(`button`, {
                  className: `btn`,
                  onClick: S,
                  children: [
                    `Confirm and pay`,
                    (0, J.jsx)(`span`, {
                      className: `circ`,
                      children: Y.check,
                    }),
                  ],
                }),
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  onClick: () => o(`idle`),
                  children: `Cancel`,
                }),
              ],
            }),
          ],
        }),
      a === `running` &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          style: { display: `grid`, gap: `0.4rem` },
          children: [
            qa.map(([e, t]) => {
              let n = l[e];
              return (0, J.jsxs)(
                `div`,
                {
                  className: `route-line`,
                  style: { opacity: n ? 1 : 0.5 },
                  children: [
                    (0, J.jsxs)(`span`, {
                      children: [
                        n?.state === `done`
                          ? `✓`
                          : n?.state === `skipped`
                          ? `–`
                          : n?.state === `active`
                          ? `…`
                          : `·`,
                        ` `,
                        t,
                      ],
                    }),
                    (0, J.jsx)(`span`, {
                      children: n?.tx
                        ? w(n.tx)
                        : n?.state === `skipped`
                        ? `not needed`
                        : ``,
                    }),
                  ],
                },
                e
              );
            }),
            (0, J.jsx)(`div`, {
              style: {
                fontSize: `0.8rem`,
                color: `var(--ink-faint)`,
                marginTop: `0.4rem`,
              },
              children: `Keep this page open and confirm each request in your wallet.`,
            }),
          ],
        }),
      a === `paid` &&
        d &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsxs)(`div`, {
              className:
                `split-total ` +
                (h?.state === `expired` || h?.state === `refunded`
                  ? `bad`
                  : `ok`),
              children: [
                (0, J.jsx)(`span`, {
                  children: d.alreadyPaid
                    ? `This order was already paid`
                    : `Paid from your interest`,
                }),
                (0, J.jsx)(`span`, {
                  children:
                    h?.state === `filled`
                      ? `Delivered to the card order ✓`
                      : h?.state === `expired` || h?.state === `refunded`
                      ? `Bridge refunded to your wallet`
                      : `Bridging…`,
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Payment`,
                }),
                w(d.depositTx),
              ],
            }),
            h?.fillTx &&
              Ja[i.destChainId] &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Bridge fill`,
                  }),
                  (0, J.jsxs)(`a`, {
                    className: `addr-mono`,
                    href: `${Ja[i.destChainId]}/tx/${h.fillTx}`,
                    target: `_blank`,
                    rel: `noreferrer noopener`,
                    style: { color: `inherit` },
                    children: [ta(h.fillTx), ` ↗`],
                  }),
                ],
              }),
            d.leftoverUsdg !== null &&
              d.leftoverUsdg > 0n &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Unused buffer, now in your wallet`,
                  }),
                  (0, J.jsxs)(`b`, { children: [C(d.leftoverUsdg), ` USDG`] }),
                ],
              }),
          ],
        }),
      a === `error` &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsx)(`div`, {
              className: `split-total bad`,
              style: { marginBottom: `0.6rem` },
              children: (0, J.jsx)(`span`, { children: p }),
            }),
            (0, J.jsx)(`button`, {
              className: `btn ghost sm`,
              onClick: () => o(`idle`),
              children: `Back`,
            }),
          ],
        }),
    ],
  });
}
function Xa({
  account: e,
  spendable: t,
  failed: n,
  toast: i,
  reorder: a,
  clearReorder: o,
  payWithInterestOn: s,
}) {
  let [c, l] = (0, V.useState)(null),
    [u, d] = (0, V.useState)(``),
    [f, p] = (0, V.useState)(``),
    [m, h] = (0, V.useState)(``),
    [g, _] = (0, V.useState)(null),
    [v, y] = (0, V.useState)(null),
    [x, S] = (0, V.useState)(!1),
    [C, w] = (0, V.useState)(!1);
  (0, V.useEffect)(() => {
    w(!1);
  }, [g?.orderId]);
  let [T, E] = (0, V.useState)(null),
    [D, O] = (0, V.useState)(`US`),
    k = r({
      queryKey: [`spendCatalog`, D],
      queryFn: async () => {
        let e = await $(`/api/spend/catalog?country=${D}`);
        if (!e.ok) throw Error(`catalog unavailable`);
        return (await e.json()).items;
      },
      staleTime: 6e5,
      retry: 1,
    }),
    A = Number(t) / 1e6,
    j = Number.isFinite(Number(u)) ? Number(u) : NaN,
    M = c ? (c.feePct ?? 12) / 100 : 0,
    N = (e) => Math.ceil(e * (1 + M) * 100) / 100,
    P = c ? Math.min(c.maxUsd, Math.floor(A / (1 + M))) : 0,
    F = c && P < c.minUsd,
    ee = c && Number.isFinite(j) && j >= c.minUsd && j <= P,
    I = c?.kind === `open-loop`,
    L = !I || m.trim().split(/\s+/).filter(Boolean).length >= 2,
    te = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f),
    R = [
      `delivered`,
      `expired`,
      `canceled`,
      `cancelled`,
      `failed`,
      `paymentsetupfailed`,
    ],
    ne = (e) =>
      [e.deliveryState, e.orderState, e.paymentState].some(
        (e) => typeof e == `string` && R.includes(e.toLowerCase())
      ),
    re = v && ne(v),
    ie = C || !!(e && g && fn({ storage: Ba() }, g.orderId).locked),
    ae = !!g?.usdgPay;
  (0, V.useEffect)(() => {
    if ((_(null), y(null), l(null), d(``), h(``), p(``), E(null), e)) {
      let t = za(e);
      t && _(t);
    }
  }, [e]),
    (0, V.useEffect)(() => {
      if (!a || !e || g) return;
      if (a.country && a.country !== D) {
        O(a.country);
        return;
      }
      if (!k.data) return;
      let t = k.data.find((e) => e.brand === Pa(a.brand) && !e.outOfStock);
      if (t) {
        l(t);
        let e = Math.min(
          t.maxUsd,
          Math.floor(A / (1 + (t.feePct ?? 12) / 100))
        );
        d(e >= t.minUsd ? String(Math.min(a.faceUsd, e)) : ``),
          E(crypto.randomUUID().replace(/-/g, ``));
      } else i(`${Pa(a.brand)} isn't available in this storefront right now`);
      o();
    }, [a, k.data, D, e, g]),
    (0, V.useEffect)(() => {
      if (!g) return;
      let t = !0,
        n = g.orderId,
        r = null,
        i = async () => {
          try {
            let i = await $(`/api/spend/order/${n}`);
            if (!i.ok) return;
            let a = await i.json();
            if (!t || n !== g.orderId) return;
            y(a),
              Va(e, {
                orderId: n,
                paymentState: a.paymentState,
                orderState: a.orderState,
                deliveryState: a.deliveryState,
                checkedAt: Date.now(),
              }),
              ne(a) && clearInterval(r);
          } catch {}
        };
      return (
        i(),
        (r = setInterval(i, 1e4)),
        () => {
          (t = !1), clearInterval(r);
        }
      );
    }, [g]);
  let oe = async () => {
      S(!0);
      try {
        let t = T ?? crypto.randomUUID().replace(/-/g, ``);
        T || E(t);
        let n = {
            wallet: e,
            brand: c.brand,
            valueUsd: String(j),
            email: f.trim(),
            country: D,
            fullName: I ? _t(m) : ``,
            intent: t,
            issuedAt: Date.now(),
          },
          r = await Ie(e, vt(n)),
          a = await $(`/api/spend/order`, {
            method: `POST`,
            headers: { "content-type": `application/json` },
            body: JSON.stringify({ ...n, signature: r }),
          }),
          o = await a.json().catch(() => ({}));
        if (!a.ok) {
          a.status < 500 && E(null), i(o.error ?? `Order declined`);
          return;
        }
        E(null);
        let s = { ...o, brand: c.brand, createdAt: o.createdAt ?? Date.now() };
        La(e, s),
          Va(e, { ...s, country: D }),
          _(s),
          y(null),
          i(`Order created — pay the exact USDC amount to complete it`);
      } catch (e) {
        i(e?.message ?? `Order failed — try again`);
      } finally {
        S(!1);
      }
    },
    se = async () => {
      let t = await pn(
        { storage: Ba(), fetch: $, api: ``, lock: et() },
        g.orderId,
        e
      );
      t.cancelled && (Ra(e), _(null), y(null)), i(t.message);
    },
    ce = () => {
      Ra(e), _(null), y(null);
    },
    le = (e) => {
      navigator.clipboard?.writeText(e).then(() => i(`Copied`));
    };
  return (0, J.jsxs)(`div`, {
    className: `card pad-lg`,
    style: { marginTop: `1rem` },
    children: [
      (0, J.jsxs)(`div`, {
        className: `section-title`,
        children: [
          (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                children: `Spend it in the real world`,
              }),
              (0, J.jsx)(`h2`, { children: `Prepaid cards` }),
            ],
          }),
          (0, J.jsxs)(`span`, {
            className: `pill ok`,
            children: [
              (0, J.jsx)(`span`, { className: `dot` }),
              `Live partner rail · beta`,
            ],
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        style: {
          fontSize: `0.85rem`,
          color: `var(--ink-soft)`,
          lineHeight: 1.55,
          marginBottom: `0.75rem`,
        },
        children: `Buy with the interest you've earned — never the principal. Orders are priced and paid in USDC on Arbitrum; your spendable interest is checked on-chain before any order is placed. Delivery goes to your email.`,
      }),
      (0, J.jsxs)(`div`, {
        className: `form-row`,
        style: { maxWidth: `20rem`, marginBottom: `1rem` },
        children: [
          (0, J.jsx)(`label`, {
            className: `field-label`,
            children: `Your country`,
          }),
          (0, J.jsx)(`select`, {
            className: `input`,
            value: D,
            onChange: (e) => {
              O(e.target.value), l(null), d(``), _(null), y(null);
            },
            children: Ma.map(([e, t]) =>
              (0, J.jsx)(`option`, { value: e, children: t }, e)
            ),
          }),
          (0, J.jsx)(`div`, {
            style: {
              fontSize: `0.75rem`,
              color: `var(--ink-faint)`,
              marginTop: `0.3rem`,
            },
            children: `These are USD cards for ONLINE purchases, redeemable from any supported country. They don't support 3D Secure, so they can decline at merchants that require it (common in the EU) and can't be used in-person. Card availability varies by country.`,
          }),
        ],
      }),
      n &&
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          children: (0, J.jsx)(`span`, {
            children: `Chain unreachable — shop disabled (fail closed)`,
          }),
        }),
      !n &&
        !e &&
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          children: (0, J.jsx)(`span`, {
            children: `Connect a wallet to shop with your interest`,
          }),
        }),
      !n &&
        e &&
        g &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsxs)(`div`, {
              className:
                `split-total ` +
                (re && v?.deliveryState !== `Delivered` ? `bad` : `ok`),
              style: { marginBottom: `0.75rem` },
              children: [
                (0, J.jsxs)(`span`, {
                  children: [g.faceUsd, ` USD `, Pa(g.brand ?? c?.brand)],
                }),
                (0, J.jsx)(`span`, { children: Ga(v) }),
              ],
            }),
            g.cardRef &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Card reference`,
                  }),
                  (0, J.jsx)(`b`, {
                    className: `addr-mono`,
                    children: g.cardRef,
                  }),
                ],
              }),
            g.cardRef &&
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `5% cashback in USDG`,
                  }),
                  (0, J.jsx)(Wa, {
                    account: e,
                    orderId: g.orderId,
                    cardRef: g.cardRef,
                    delivered: v?.deliveryState === `Delivered`,
                  }),
                ],
              }),
            !re &&
              !ie &&
              !ae &&
              (0, J.jsxs)(J.Fragment, {
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `route-line`,
                    children: [
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-soft)` },
                        children: `Send exactly`,
                      }),
                      (0, J.jsxs)(`b`, {
                        children: [
                          g.coinAmount,
                          ` `,
                          g.coin,
                          ` on `,
                          g.network,
                        ],
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`div`, {
                    className: `route-line`,
                    children: [
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-soft)` },
                        children: `To address`,
                      }),
                      (0, J.jsxs)(`button`, {
                        className: `addr-mono`,
                        style: {
                          background: `none`,
                          border: `none`,
                          cursor: `pointer`,
                          color: `inherit`,
                        },
                        onClick: () => le(g.payTo),
                        title: `Copy`,
                        children: [ta(g.payTo), ` ⧉`],
                      }),
                    ],
                  }),
                  (0, J.jsxs)(`div`, {
                    className: `route-line`,
                    children: [
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-soft)` },
                        children: `Pay within`,
                      }),
                      (0, J.jsx)(`b`, {
                        children: (0, J.jsx)(Ka, {
                          until:
                            (g.createdAt ?? Date.now()) +
                            (g.expiresInMinutes ?? 30) * 6e4,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            !re &&
              !ae &&
              s &&
              zt &&
              (0, J.jsx)(Ya, { account: e, order: g, toast: i, onLock: w }),
            (0, J.jsx)(`div`, {
              style: {
                fontSize: `0.8rem`,
                color: `var(--ink-faint)`,
                margin: `0.75rem 0`,
              },
              children: ae
                ? `This order is paid with USDG. Follow or finish it on the Cards page.`
                : re
                ? `This order is closed. Start another anytime.`
                : ie && !(s && zt)
                ? `A payment from your interest is recorded for this order in this browser, so paying it again and cancelling it are turned off here.`
                : X
                ? `The card/code is emailed to ${
                    f || `the email you entered`
                  } once payment confirms. Testnet interest can't pay a real order — this flow goes fully live with mainnet + the bridge leg.`
                : `The card/code is emailed to ${
                    f || `the email you entered`
                  } once payment confirms. Pay the exact USDC amount shown from any wallet${
                    s && zt
                      ? `, or pay from your interest below.`
                      : `; paying straight from your interest in one step is coming next.`
                  }`,
            }),
            ae
              ? null
              : re
              ? (0, J.jsxs)(`div`, {
                  style: { display: `flex`, gap: `0.6rem` },
                  children: [
                    (0, J.jsxs)(`button`, {
                      className: `btn`,
                      onClick: () => {
                        let e = Math.min(
                          c?.maxUsd ?? 0,
                          Math.floor(Number(t) / 1e6)
                        );
                        d(
                          e >= (c?.minUsd ?? 1 / 0)
                            ? String(Math.min(g.faceUsd, e))
                            : ``
                        ),
                          E(crypto.randomUUID().replace(/-/g, ``)),
                          ce();
                      },
                      children: [
                        `New card from interest`,
                        (0, J.jsx)(`span`, {
                          className: `circ`,
                          children: Y.chevron,
                        }),
                      ],
                    }),
                    (0, J.jsx)(`button`, {
                      className: `btn ghost`,
                      onClick: () => {
                        l(null), ce();
                      },
                      children: `Done`,
                    }),
                  ],
                })
              : !ie &&
                (0, J.jsx)(`button`, {
                  className: `btn ghost`,
                  onClick: se,
                  children: `Cancel order`,
                }),
          ],
        }),
      !n &&
        e &&
        !g &&
        c &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            (0, J.jsx)(`button`, {
              className: `btn ghost sm`,
              style: { marginBottom: `0.9rem` },
              onClick: () => l(null),
              children: `← All products`,
            }),
            (0, J.jsxs)(`div`, {
              className: `route-line`,
              children: [
                (0, J.jsx)(`span`, {
                  style: { color: `var(--ink-soft)` },
                  children: `Product`,
                }),
                (0, J.jsxs)(`b`, {
                  children: [
                    c.brand,
                    c.kind === `open-loop`
                      ? ` · online prepaid card (USD)`
                      : ` · gift card`,
                  ],
                }),
              ],
            }),
            F
              ? (0, J.jsxs)(`div`, {
                  className: `split-total bad`,
                  style: { marginTop: `0.75rem` },
                  children: [
                    (0, J.jsxs)(`span`, {
                      children: [
                        `You need about $`,
                        N(c.minUsd).toFixed(2),
                        ` of accrued interest (the $`,
                        c.minUsd,
                        ` card plus fees)`,
                      ],
                    }),
                    (0, J.jsxs)(`span`, { children: [b(t, 2), ` available`] }),
                  ],
                })
              : (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsxs)(`div`, {
                      className: `form-row`,
                      children: [
                        (0, J.jsxs)(`label`, {
                          className: `field-label`,
                          children: [`Amount (USD) — `, c.minUsd, ` to `, P],
                        }),
                        [30, 50, 100, 150].some(
                          (e) => e >= c.minUsd && e <= P
                        ) &&
                          (0, J.jsx)(`div`, {
                            style: {
                              display: `flex`,
                              gap: `0.5rem`,
                              margin: `0.35rem 0 0.5rem`,
                              flexWrap: `wrap`,
                            },
                            children: [30, 50, 100, 150]
                              .filter((e) => e >= c.minUsd && e <= P)
                              .map((e) =>
                                (0, J.jsxs)(
                                  `button`,
                                  {
                                    className:
                                      `btn sm ` + (j === e ? `` : `ghost`),
                                    onClick: () => d(String(e)),
                                    children: [`$`, e],
                                  },
                                  e
                                )
                              ),
                          }),
                        (0, J.jsx)(`input`, {
                          className: `input mono`,
                          type: `number`,
                          min: c.minUsd,
                          max: P,
                          value: u,
                          onChange: (e) => d(e.target.value),
                          placeholder: String(c.minUsd),
                        }),
                      ],
                    }),
                    (0, J.jsxs)(`div`, {
                      className: `form-row`,
                      children: [
                        (0, J.jsx)(`label`, {
                          className: `field-label`,
                          children: `Delivery email`,
                        }),
                        (0, J.jsx)(`input`, {
                          className: `input`,
                          type: `email`,
                          value: f,
                          onChange: (e) => p(e.target.value),
                          placeholder: `you@example.com`,
                        }),
                      ],
                    }),
                    I &&
                      (0, J.jsxs)(`div`, {
                        className: `form-row`,
                        children: [
                          (0, J.jsx)(`label`, {
                            className: `field-label`,
                            children: `Full name (card issuer requirement, up to $500)`,
                          }),
                          (0, J.jsx)(`input`, {
                            className: `input`,
                            value: m,
                            onChange: (e) => h(e.target.value),
                            placeholder: `First Last`,
                          }),
                        ],
                      }),
                    ee &&
                      (0, J.jsxs)(`div`, {
                        className: `split-total ok`,
                        children: [
                          (0, J.jsx)(`span`, {
                            children: `Estimated total with fees`,
                          }),
                          (0, J.jsxs)(`span`, {
                            children: [`$`, N(j).toFixed(2)],
                          }),
                        ],
                      }),
                    Number.isFinite(j) &&
                      j > P &&
                      (0, J.jsx)(`div`, {
                        className: `split-total bad`,
                        children: (0, J.jsx)(`span`, {
                          children:
                            N(j) > A
                              ? `About $${N(j).toFixed(
                                  2
                                )} with fees, more than your interest · max $${P}`
                              : `Above this card's limit — max $${P}`,
                        }),
                      }),
                    (0, J.jsxs)(`div`, {
                      style: {
                        fontSize: `0.78rem`,
                        color: `var(--ink-faint)`,
                        lineHeight: 1.5,
                        marginTop: `0.5rem`,
                      },
                      children: [
                        `Final price includes partner pricing — you'll see the exact USDC total before anything is paid.`,
                        I &&
                          (0, J.jsx)(J.Fragment, {
                            children: ` Cards expire in months, not years, and idle balances decay — buy what you'll spend soon, never park money on one.`,
                          }),
                        Na[c.brand] &&
                          (0, J.jsxs)(J.Fragment, {
                            children: [` `, Na[c.brand].detail],
                          }),
                      ],
                    }),
                    (0, J.jsxs)(`button`, {
                      className: `btn`,
                      disabled: !ee || !te || !L || x,
                      style: {
                        justifyContent: `center`,
                        width: `100%`,
                        marginTop: `0.75rem`,
                      },
                      onClick: oe,
                      children: [
                        x
                          ? `Creating order…`
                          : `Order ${ee ? `$${j} ` : ``}${c.brand}`,
                        (0, J.jsx)(`span`, {
                          className: `circ`,
                          children: Y.chevron,
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      !n &&
        e &&
        !g &&
        !c &&
        (0, J.jsxs)(`div`, {
          className: `fade-in`,
          children: [
            k.isLoading &&
              (0, J.jsx)(`div`, {
                style: { color: `var(--ink-faint)`, fontSize: `0.9rem` },
                children: `Loading catalog…`,
              }),
            k.isError &&
              !k.data &&
              (0, J.jsx)(`div`, {
                style: { color: `var(--ink-soft)`, fontSize: `0.9rem` },
                children: `Catalog unavailable right now.`,
              }),
            (k.data ?? []).some((e) => e.kind === `open-loop`) &&
              (0, J.jsxs)(J.Fragment, {
                children: [
                  (0, J.jsx)(`div`, {
                    className: `eyebrow`,
                    style: { marginBottom: `0.6rem` },
                    children: `Prepaid cards — a fresh card from your interest`,
                  }),
                  (0, J.jsx)(`div`, {
                    style: {
                      display: `grid`,
                      gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
                      gap: `0.75rem`,
                      marginBottom: `1.1rem`,
                    },
                    children: (k.data ?? [])
                      .filter((e) => e.kind === `open-loop`)
                      .sort((e, t) => !!t.global - +!!e.global)
                      .map((e) =>
                        (0, J.jsxs)(
                          `button`,
                          {
                            disabled: e.outOfStock,
                            onClick: () => {
                              l(e),
                                d(``),
                                E(crypto.randomUUID().replace(/-/g, ``));
                            },
                            style: {
                              textAlign: `left`,
                              border: `1px solid var(--hairline)`,
                              borderRadius: `var(--radius-sm)`,
                              padding: `1.1rem`,
                              background: e.outOfStock
                                ? `transparent`
                                : `var(--card, #fff)`,
                              cursor: e.outOfStock ? `default` : `pointer`,
                              opacity: e.outOfStock ? 0.45 : 1,
                            },
                            children: [
                              (0, J.jsx)(Fa, {
                                brand: e.brand,
                                dim: e.outOfStock,
                              }),
                              (0, J.jsxs)(`div`, {
                                style: {
                                  fontWeight: 500,
                                  fontSize: `0.95rem`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `0.45rem`,
                                  flexWrap: `wrap`,
                                },
                                children: [
                                  e.brand,
                                  e.global &&
                                    (0, J.jsx)(`span`, {
                                      style: {
                                        fontSize: `0.62rem`,
                                        textTransform: `uppercase`,
                                        letterSpacing: `0.07em`,
                                        color: `var(--green-ink, #0a7d55)`,
                                        border: `1px solid currentColor`,
                                        borderRadius: `9999px`,
                                        padding: `0.1rem 0.4rem`,
                                      },
                                      children: `Worldwide`,
                                    }),
                                ],
                              }),
                              (0, J.jsxs)(`div`, {
                                style: {
                                  fontSize: `0.78rem`,
                                  color: `var(--ink-faint)`,
                                  marginTop: `0.25rem`,
                                },
                                children: [
                                  Na[e.brand]?.where ??
                                    `A fresh card every time — nothing to freeze, nothing to drain.`,
                                  ` · $`,
                                  e.minUsd,
                                  `–$`,
                                  e.maxUsd,
                                  e.outOfStock ? ` · out of stock` : ``,
                                ],
                              }),
                            ],
                          },
                          e.brand
                        )
                      ),
                  }),
                  (k.data ?? []).some((e) => e.kind !== `open-loop`) &&
                    (0, J.jsx)(`div`, {
                      className: `eyebrow`,
                      style: { marginBottom: `0.6rem` },
                      children: `Gift cards`,
                    }),
                ],
              }),
            (0, J.jsx)(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
                gap: `0.75rem`,
              },
              children: (k.data ?? [])
                .filter((e) => e.kind !== `open-loop`)
                .map((e) =>
                  (0, J.jsxs)(
                    `button`,
                    {
                      disabled: e.outOfStock,
                      onClick: () => {
                        l(e), d(``), E(crypto.randomUUID().replace(/-/g, ``));
                      },
                      style: {
                        textAlign: `left`,
                        border: `1px solid var(--hairline)`,
                        borderRadius: `var(--radius-sm)`,
                        padding: `0.9rem`,
                        background: e.outOfStock
                          ? `transparent`
                          : `var(--card, #fff)`,
                        cursor: e.outOfStock ? `default` : `pointer`,
                        opacity: e.outOfStock ? 0.45 : 1,
                      },
                      children: [
                        (0, J.jsx)(Fa, { brand: e.brand, dim: e.outOfStock }),
                        (0, J.jsx)(`div`, {
                          style: { fontWeight: 500, fontSize: `0.9rem` },
                          children: e.brand,
                        }),
                        (0, J.jsxs)(`div`, {
                          style: {
                            fontSize: `0.75rem`,
                            color: `var(--ink-faint)`,
                            marginTop: `0.2rem`,
                          },
                          children: [
                            `$`,
                            e.minUsd,
                            `–$`,
                            e.maxUsd,
                            e.outOfStock ? ` · out of stock` : ``,
                          ],
                        }),
                      ],
                    },
                    e.brand
                  )
                ),
            }),
          ],
        }),
    ],
  });
}
var Za = [`Card`, `Amount`, `Your details`, `Review`, `Pay`],
  Qa = {
    brand: `MASTERCARD`,
    kind: `open-loop`,
    minUsd: 5,
    maxUsd: 99,
    outOfStock: !0,
    unavailable: !0,
  },
  $a = [30, 50, 100, 150, 250],
  eo = (e) =>
    !!e &&
    [e.deliveryState, e.orderState, e.paymentState].some(
      (e) =>
        typeof e == `string` &&
        [
          `delivered`,
          `expired`,
          `canceled`,
          `cancelled`,
          `failed`,
          `paymentsetupfailed`,
        ].includes(e.toLowerCase())
    ),
  to = (e) => {
    let [t, n] = String(e).split(`@`);
    return n ? `${t.slice(0, 2)}${t.length > 2 ? `…` : ``}@${n}` : ``;
  },
  no = (e) => (Number(e) % 1 ? Number(e).toFixed(2) : String(Number(e))),
  ro = [`paymentreceived`, `paid`, `confirmed`],
  Q = ({ k: e, children: t }) =>
    (0, J.jsxs)(`div`, {
      className: `route-line`,
      children: [
        (0, J.jsx)(`span`, {
          style: { color: `var(--ink-soft)` },
          children: e,
        }),
        (0, J.jsx)(`b`, {
          style: { textAlign: `right`, overflowWrap: `anywhere`, minWidth: 0 },
          children: t,
        }),
      ],
    }),
  io = ({ onClick: e, disabled: t }) =>
    (0, J.jsx)(`button`, {
      className: `btn ghost`,
      disabled: t,
      onClick: e,
      children: `Back`,
    });
function ao({ step: e }) {
  return (0, J.jsx)(`ol`, {
    "aria-label": `Checkout progress`,
    style: {
      display: `flex`,
      gap: `0.4rem`,
      flexWrap: `wrap`,
      listStyle: `none`,
      padding: 0,
      margin: `0 0 1.25rem`,
    },
    children: Za.map((t, n) => {
      let r = n < e ? `done` : n === e ? `active` : ``;
      return (0, J.jsxs)(
        `li`,
        {
          "aria-current": n === e ? `step` : void 0,
          style: {
            display: `flex`,
            alignItems: `center`,
            gap: `0.4rem`,
            padding: `0.35rem 0.75rem 0.35rem 0.35rem`,
            borderRadius: `9999px`,
            border: `1px solid var(--hairline)`,
            background: r === `active` ? `var(--grad-soft)` : `#fff`,
            opacity: r ? 1 : 0.55,
            fontSize: `0.82rem`,
          },
          children: [
            (0, J.jsx)(`span`, {
              style: {
                width: `1.35rem`,
                height: `1.35rem`,
                borderRadius: `50%`,
                display: `inline-flex`,
                alignItems: `center`,
                justifyContent: `center`,
                fontSize: `0.72rem`,
                fontWeight: 600,
                color: `#fff`,
                backgroundImage: r ? `var(--grad)` : `none`,
                backgroundColor: r ? `transparent` : `rgba(0,0,0,0.25)`,
              },
              children:
                r === `done`
                  ? (0, J.jsx)(`span`, {
                      style: {
                        width: `0.75rem`,
                        height: `0.75rem`,
                        display: `inline-flex`,
                      },
                      children: Y.check,
                    })
                  : n + 1,
            }),
            t,
          ],
        },
        t
      );
    }),
  });
}
var oo = B.chain.id === je.chainId,
  so = [
    `awaiting`,
    `paid`,
    `settling`,
    `settled`,
    `refunding`,
    `refunded`,
    `needs_team`,
  ],
  co = [`settled`, `refunded`, `needs_team`],
  lo = [`paid`, `settling`, `refunding`],
  uo = {
    underpaid: `the payment was less than the card costs`,
    "order closed": `the card order closed before it could be paid`,
    "float empty": `card payments are briefly unavailable`,
    "payment failed": `paying the card provider failed`,
    "float off": `card payments are paused`,
    "card not delivered": `the card provider failed to deliver the card`,
  },
  fo = (e) => typeof e == `string` && /^0x[0-9a-fA-F]{64}$/.test(e),
  po = (e) =>
    typeof e == `string` && /^\d{1,20}$/.test(e) ? s(BigInt(e), 6) : null,
  mo = (e) => `offyield.usdgpay.${e}`,
  ho = (e) => {
    try {
      let t = JSON.parse(localStorage.getItem(mo(e)) || `null`);
      return fo(t?.tx) ? t.tx : null;
    } catch {
      return null;
    }
  },
  go = (e, t) => {
    try {
      localStorage.setItem(mo(e), JSON.stringify({ tx: t, at: Date.now() }));
    } catch {}
  },
  _o = (e) => {
    try {
      localStorage.removeItem(mo(e));
    } catch {}
  },
  vo = ({ href: e, h: t }) =>
    (0, J.jsxs)(`a`, {
      className: `addr-mono`,
      href: e,
      target: `_blank`,
      rel: `noreferrer noopener`,
      style: { color: `inherit` },
      children: [ta(t), ` ↗`],
    });
function yo(e, t, n, r) {
  let i = !!t?.usdgPay,
    a = t?.orderId,
    o = (0, V.useRef)(a);
  o.current = a;
  let [s, c] = (0, V.useState)(() => (i && a ? ho(a) : null)),
    [l, u] = (0, V.useState)(null),
    [d, f] = (0, V.useState)(null),
    [p, m] = (0, V.useState)(!1),
    [h, g] = (0, V.useState)(0),
    [_, v] = (0, V.useState)(0);
  (0, V.useEffect)(() => {
    c(i && a ? ho(a) : null), u(null), f(null), v(0);
  }, [i, a]),
    (0, V.useEffect)(() => {
      if (!i || !n || !a) return;
      let e = !0,
        t = null,
        r = null,
        o = 0,
        c = async (t, n) => {
          try {
            let i = await t;
            if (!e) return;
            if (i.status === 404) return f(`gone`), `stop`;
            if (i.status === 503) {
              f(`paused`);
              return;
            }
            let a = i.ok ? (await i.json().catch(() => null))?.state : null;
            if (!e || !a || !so.includes(a.status)) return;
            for (let e of [`paymentTx`, `settleTx`, `refundTx`])
              fo(a[e]) || delete a[e];
            (r = a),
              u(a),
              f((e) => (e === `gone` || e === `paused` ? null : e)),
              n && v((e) => e + 1);
          } catch {}
        },
        l = () => (
          (o = Date.now()),
          c(
            $(`/api/spend/float/pay`, {
              method: `POST`,
              headers: { "content-type": `application/json` },
              body: JSON.stringify(s ? { orderId: a, tx: s } : { orderId: a }),
            }),
            !0
          )
        ),
        d = (n) => {
          !e ||
            n === `stop` ||
            (r && co.includes(r.status)) ||
            (r?.status === `awaiting` &&
              !s &&
              Date.now() > r.expiresAt + 10 * 6e4) ||
            (r && Date.now() > r.expiresAt + 36e5) ||
            (t = setTimeout(p, r ? 3e3 : 1e4));
        },
        p = async () => {
          d(
            await (r &&
            (lo.includes(r.status) || r.status === `awaiting`) &&
            Date.now() - o >= 15e3
              ? l()
              : c($(`/api/spend/float/${a}`)))
          );
        };
      return (
        l().then(d),
        () => {
          (e = !1), clearTimeout(t);
        }
      );
    }, [i, n, a, s, h]);
  let y = t ? `$${no(t.faceUsd)} ${Pa(t.brand)} card` : ``;
  (0, V.useEffect)(() => {
    !e ||
      !l ||
      (l.paymentTx &&
        /^\d{1,20}$/.test(l.paidUnits ?? ``) &&
        yn(bn(), e, {
          id: `usdgpay:${l.paymentTx}`,
          kind: `card-pay`,
          amount: BigInt(l.paidUnits),
          detail: y,
          txHash: l.paymentTx,
          at: Date.now(),
        }),
      l.refundTx &&
        l.refundOutcome === `success` &&
        /^\d{1,20}$/.test(l.refundUnits ?? ``) &&
        yn(bn(), e, {
          id: `usdgrefund:${l.refundTx}`,
          kind: `card-refund`,
          amount: BigInt(l.refundUnits),
          detail: y,
          txHash: l.refundTx,
          at: Date.now(),
        }));
  }, [e, l, y]);
  let b = !l || l.status === `awaiting`;
  (0, V.useEffect)(() => {
    if (!s || !a || !b) return;
    let e = !0;
    return (
      Se(s).then((t) => {
        e &&
          (t.state === `failed`
            ? (_o(a), c(null), f(`tx-failed`))
            : t.state === `ok` && t.hash !== s
            ? (go(a, t.hash), c(t.hash))
            : t.state === `ok` && g((e) => e + 1));
      }),
      () => {
        e = !1;
      }
    );
  }, [s, a, b]);
  let x = i ? le(t) : null;
  return {
    has: i,
    pay: x,
    tx: s,
    fs: l,
    problem: d,
    sending: p,
    send: async () => {
      if (!(!x || s || p || l?.status !== `awaiting`)) {
        m(!0), f(null);
        try {
          let n = await et()(
            `offyield.stockspend.${String(e).toLowerCase()}`,
            async () => {
              if (ho(a))
                throw Error(
                  `This order already has a payment from this browser. Reload to follow it.`
                );
              let n = await z(e, t.usdgPay.to, x.amountUnits);
              return go(a, n), n;
            }
          );
          o.current === a && c(n);
        } catch (e) {
          r(e?.message ?? `Payment cancelled`);
        } finally {
          m(!1);
        }
      }
    },
    looks: _,
  };
}
function bo({
  up: e,
  order: t,
  on: n,
  walletUsdg: r,
  terminal: i,
  delivered: a,
  cardPaid: o,
  excess: c,
  onFinish: l,
}) {
  let { pay: u, tx: d, fs: f, problem: p, sending: m, send: h, looks: g } = e,
    _ = f?.status,
    v = {
      fontSize: `0.9rem`,
      color: `var(--ink-soft)`,
      lineHeight: 1.55,
      marginBottom: `1rem`,
    },
    y = { fontSize: `0.8rem`, color: `var(--ink-faint)`, lineHeight: 1.5 },
    x = f?.reason ? ` (${uo[f.reason] ?? f.reason})` : ``,
    S =
      f?.refundTx &&
      (0, J.jsx)(Q, {
        k: `Refund`,
        children: (0, J.jsx)(vo, { href: k(f.refundTx), h: f.refundTx }),
      }),
    C = (0, J.jsxs)(`button`, {
      className: `btn`,
      onClick: l,
      children: [
        `Start a new card`,
        (0, J.jsx)(`span`, { className: `circ`, children: Y.chevron }),
      ],
    }),
    w = (0, J.jsx)(`b`, {
      className: `addr-mono`,
      children: t.cardRef ?? t.orderId,
    }),
    T = !n || p === `gone` || p === `paused`;
  if (_ === `needs_team` || (_ === `settled` && i && !a))
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          style: { marginBottom: `1rem` },
          children: (0, J.jsx)(`span`, {
            children:
              _ === `settled` || f?.reason === `card not delivered`
                ? (0, J.jsxs)(J.Fragment, {
                    children: [
                      `We paid the card provider, but it couldn't deliver this card. The team has been alerted and will sort it out with you. Your card reference is `,
                      w,
                      `.`,
                    ],
                  })
                : (0, J.jsxs)(J.Fragment, {
                    children: [
                      `We're checking this payment; the team has been alerted. Your card reference is `,
                      w,
                      `. Don't pay again.`,
                    ],
                  }),
          }),
        }),
        C,
      ],
    });
  if (_ === `awaiting` && f.reason === `replaced` && !d)
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          style: v,
          children: `You started a newer card order from this wallet, so this one can't be paid anymore. Nothing was taken from your wallet.`,
        }),
        C,
      ],
    });
  if (!c && (_ === `refunding` || _ === `refunded`)) {
    let e = po(f.refundUnits) ?? po(f.paidUnits);
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsxs)(`div`, {
          style: v,
          children: [
            `We couldn't complete this card`,
            x,
            `, so `,
            _ === `refunded` ? `we sent` : `we're sending`,
            ` `,
            e ? `your ${e} USDG` : `your USDG`,
            ` back to your wallet.`,
            _ === `refunding` ? ` This takes a minute.` : ``,
          ],
        }),
        S,
        _ === `refunded` &&
          (0, J.jsx)(`div`, { style: { marginTop: `1rem` }, children: C }),
      ],
    });
  }
  if (o) {
    let e = po(f?.refundUnits) ? `${po(f.refundUnits)} USDG` : `a little`,
      t = f?.refundOutcome;
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          style: v,
          children: `Your payment arrived and the card is paid. The card provider emails it within minutes.`,
        }),
        c &&
          (0, J.jsxs)(`div`, {
            style: y,
            children: [
              `You sent `,
              e,
              ` more than the card costs, so `,
              t === `success`
                ? `we sent the extra back to your wallet.`
                : t === `failed`
                ? `we couldn't send the extra back automatically. The team has been alerted and will send it by hand.`
                : `we're sending the extra back to your wallet.`,
            ],
          }),
        c && S,
      ],
    });
  }
  if (_ === `paid` || _ === `settling`)
    return (0, J.jsx)(`div`, {
      style: v,
      children: `Your payment arrived. Paying the card now…`,
    });
  if (i)
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          style: v,
          children: d
            ? `This order closed. If your payment went through, the USDG comes back to your wallet automatically.`
            : `This order closed before it was paid. Nothing was taken from your wallet.`,
        }),
        C,
      ],
    });
  if (d)
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          style: v,
          children: T
            ? `Payment sent. Card payments are paused for a moment; your payment is safe: the card is completed or the USDG comes back to this wallet, by the team if need be.`
            : `Payment sent. Waiting for Robinhood Chain to confirm it; the card is paid right after.`,
        }),
        (0, J.jsx)(Q, {
          k: `Your payment`,
          children: (0, J.jsx)(vo, { href: k(d), h: d }),
        }),
        (0, J.jsx)(`div`, {
          style: { ...y, marginTop: `0.5rem` },
          children: `You can leave this page: it picks up where it left off when you come back.`,
        }),
      ],
    });
  if (T)
    return (0, J.jsx)(`div`, {
      className: `split-total bad`,
      children: (0, J.jsx)(`span`, {
        children: `Paying with USDG is paused right now, so this order can't be paid. If you already sent a payment for it, it's safe: the card is completed or the USDG comes back. Otherwise cancel it or let it expire.`,
      }),
    });
  if (!u)
    return (0, J.jsx)(`div`, {
      className: `split-total bad`,
      children: (0, J.jsx)(`span`, {
        children: `This order's payment details don't check out, so this page won't pay it. Cancel it and start a new card.`,
      }),
    });
  if (!f)
    return (0, J.jsx)(`div`, { style: v, children: `Checking the payment…` });
  if (g < 2 && Date.now() - (t.createdAt ?? 0) > 6e4)
    return (0, J.jsx)(`div`, {
      style: v,
      children: `Checking whether a payment was already sent for this order…`,
    });
  let E = Number.isFinite(f.expiresAt)
    ? f.expiresAt
    : (t.createdAt ?? Date.now()) + 30 * 6e4;
  if (Date.now() > E - 3 * 6e4)
    return (0, J.jsx)(`div`, {
      className: `split-total bad`,
      children: (0, J.jsx)(`span`, {
        children: `Too little time is left to pay this order safely. Cancel it and start a new card.`,
      }),
    });
  let D = r == null ? null : u.amountUnits - r;
  return (0, J.jsxs)(`div`, {
    style: { marginTop: `0.25rem` },
    children: [
      (0, J.jsx)(`div`, {
        className: `eyebrow`,
        style: { marginBottom: `0.5rem` },
        children: `Pay with USDG`,
      }),
      (0, J.jsxs)(Q, { k: `You pay`, children: [u.amount, ` USDG`] }),
      (0, J.jsx)(Q, {
        k: `In your wallet`,
        children: r == null ? `…` : `${b(r, 2)} USDG`,
      }),
      (0, J.jsx)(Q, {
        k: `Pay within`,
        children: (0, J.jsx)(Ka, { until: E }),
      }),
      D !== null &&
        D > 0n &&
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          style: { marginTop: `0.6rem` },
          children: (0, J.jsxs)(`span`, {
            children: [
              `You need `,
              s(D, 6),
              ` more USDG in this wallet to pay.`,
            ],
          }),
        }),
      p === `tx-failed` &&
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          style: { marginTop: `0.6rem` },
          children: (0, J.jsx)(`span`, {
            children: `Your last payment didn't go through, so no USDG moved. You can pay again.`,
          }),
        }),
      (0, J.jsxs)(`button`, {
        className: `btn`,
        style: { marginTop: `0.9rem` },
        disabled: m || D === null || D > 0n,
        onClick: h,
        children: [
          m ? `Confirm in MetaMask…` : `Pay ${u.amount} USDG`,
          (0, J.jsx)(`span`, { className: `circ`, children: Y.check }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        style: { ...y, marginTop: `0.6rem` },
        children: [
          `One transfer on Robinhood Chain to Offyield's payment wallet `,
          (0, J.jsx)(`span`, { className: `addr-mono`, children: ta(je.to) }),
          `. We pay the card provider for you as soon as it confirms; if we can't, the USDG comes back to this wallet.`,
        ],
      }),
    ],
  });
}
function xo({
  account: e,
  spendable: t,
  failed: n,
  toast: i,
  payWithInterestOn: a,
  reorder: o,
  clearReorder: s,
  myCards: c,
  onConnect: l,
  usdgOn: u,
  walletUsdg: d,
}) {
  let [f, p] = (0, V.useState)(0),
    m = (0, V.useRef)(e),
    [h, g] = (0, V.useState)(`US`),
    [_, v] = (0, V.useState)(null),
    [y, x] = (0, V.useState)(``),
    [S, C] = (0, V.useState)(``),
    [w, T] = (0, V.useState)(``),
    [E, D] = (0, V.useState)(``),
    [O, A] = (0, V.useState)(!1),
    [j, M] = (0, V.useState)(null),
    [N, P] = (0, V.useState)(!1),
    [F, ee] = (0, V.useState)(null),
    [I, L] = (0, V.useState)(null),
    [te, R] = (0, V.useState)(!1);
  (0, V.useEffect)(() => {
    R(!1);
  }, [F?.orderId]);
  let ne = r({
      queryKey: [`spendCatalog`, h],
      queryFn: async () => {
        let e = await $(`/api/spend/catalog?country=${h}`);
        if (!e.ok) throw Error(`catalog unavailable`);
        return (await e.json()).items;
      },
      staleTime: 6e5,
      retry: 1,
    }),
    re = (ne.data ?? [])
      .filter((e) => e.kind === `open-loop`)
      .sort((e, t) => !!t.global - +!!e.global),
    ie =
      ne.data && !re.some((e) => Pa(e.brand) === `MASTERCARD`)
        ? [...re, Qa]
        : re,
    se = Number(t) / 1e6,
    ce = _ ? (_.feePct ?? 12) / 100 : 0,
    le = (e) => Math.ceil(e * (1 + ce) * 100) / 100,
    ue = _ ? _.maxUsd : 0,
    de = _ ? Math.floor(se / (1 + ce)) : 0,
    fe = /^\d{1,6}(\.\d{1,2})?$/.test(y.trim()) ? Number(y) : NaN,
    pe = !!_ && Number.isFinite(fe) && fe >= _.minUsd && fe <= ue,
    me = _t(S),
    he = me.split(` `).length >= 2 && ae.test(me),
    ge = oe.test(w.trim()),
    _e = ge && w.trim().toLowerCase() === E.trim().toLowerCase(),
    ve = eo(I),
    ye = String(I?.deliveryState ?? ``).toLowerCase() === `delivered`,
    be = F ? 4 : f,
    xe = te || !!(e && F && fn({ storage: Ba() }, F.orderId).locked),
    Se = _ ? Na[_.brand] : null,
    z = yo(e, F, u, i),
    Ce = z.fs?.status,
    we = z.fs?.reason === `overpaid`,
    Te = !!z.fs?.paymentTx || [`paid`, `settling`, `settled`].includes(Ce),
    Ee =
      ye ||
      Ce === `settled` ||
      (we && (Ce === `refunding` || Ce === `refunded`)),
    De = Ce === `settled` && ve && !ye,
    Oe =
      Ce === `needs_team` ||
      De ||
      (!we && (Ce === `refunding` || Ce === `refunded`)),
    ke =
      !z.has || ye
        ? null
        : Ce === `needs_team` || De
        ? `Being checked`
        : Oe
        ? Ce === `refunded`
          ? `Refunded`
          : `Refunding`
        : Ee
        ? `Card paid`
        : Ce === `paid` || Ce === `settling`
        ? `Paying the card…`
        : z.tx
        ? `Payment sent`
        : null,
    Ae =
      !ve &&
      !z.tx &&
      !z.sending &&
      (z.fs
        ? Ce === `awaiting`
        : !u || z.problem === `gone` || z.problem === `paused`),
    je = z.has
      ? [
          [`Order placed`, !0],
          [
            `Payment received (USDG)`,
            ye || Te,
            z.fs?.paymentTx &&
              (0, J.jsx)(vo, { href: k(z.fs.paymentTx), h: z.fs.paymentTx }),
          ],
          [
            `Card paid`,
            Ee,
            Ee &&
              z.fs?.settleTx &&
              (0, J.jsx)(vo, {
                href: `${Ja[42161]}/tx/${z.fs.settleTx}`,
                h: z.fs.settleTx,
              }),
          ],
          [`Card emailed to ${ge ? to(w.trim()) : `you`}`, ye],
        ]
      : [
          [`Order placed`, !0],
          [
            `Payment received`,
            ye || ro.includes(String(I?.paymentState ?? ``).toLowerCase()),
          ],
          [`Card emailed to ${ge ? to(w.trim()) : `you`}`, ye],
        ],
    Me = z.has ? (ve || Oe ? -1 : je.findIndex(([, e]) => !e)) : ve ? -1 : 1,
    Ne = () => {
      v(null), x(``), A(!1), M(null), ee(null), L(null), p(0);
    };
  (0, V.useEffect)(() => {
    if (((m.current = e), Ne(), C(``), T(``), D(``), e)) {
      let t = za(e);
      t && ee(t);
    }
  }, [e]),
    (0, V.useEffect)(() => {
      if (!o || !e) return;
      if (F ? !ve : za(e)) {
        i(`Finish or cancel your open card order first`), s();
        return;
      }
      if (
        (F && (Ra(e), ee(null), L(null), p(0)), o.country && o.country !== h)
      ) {
        g(o.country);
        return;
      }
      if (!ne.data) return;
      let t = ne.data.find(
        (e) =>
          e.brand === Pa(o.brand) && e.kind === `open-loop` && !e.outOfStock
      );
      if (t) {
        v(t), A(!1), M(crypto.randomUUID().replace(/-/g, ``));
        let e = Math.min(o.faceUsd, t.maxUsd);
        e >= t.minUsd ? (x(String(e)), p(2)) : (x(``), p(1));
      } else i(`${Pa(o.brand)} isn't available in this storefront right now`);
      s();
    }, [o, ne.data, h, e, F, ve]),
    (0, V.useEffect)(() => {
      if (!F) return;
      let t = !0,
        n = F.orderId,
        r = null,
        i = async () => {
          try {
            let i = await $(`/api/spend/order/${n}`);
            if (!i.ok) return;
            let a = await i.json();
            if (!t) return;
            L(a),
              Va(e, {
                orderId: n,
                paymentState: a.paymentState,
                orderState: a.orderState,
                deliveryState: a.deliveryState,
                checkedAt: Date.now(),
              }),
              eo(a) && clearInterval(r);
          } catch {}
        };
      return (
        i(),
        (r = setInterval(i, 1e4)),
        () => {
          (t = !1), clearInterval(r);
        }
      );
    }, [F, e]);
  let Pe = (t) => {
      if (!e) {
        l?.();
        return;
      }
      v(t), x(``), A(!1), M(crypto.randomUUID().replace(/-/g, ``)), p(1);
    },
    Fe = async () => {
      P(!0);
      try {
        let t = j ?? crypto.randomUUID().replace(/-/g, ``);
        j || M(t);
        let n = {
            wallet: e,
            brand: _.brand,
            valueUsd: String(fe),
            email: w.trim(),
            country: h,
            fullName: me,
            intent: t,
            issuedAt: Date.now(),
            funding: u ? `usdg` : `wallet`,
          },
          r = await Ie(e, vt(n)),
          a = await $(`/api/spend/order`, {
            method: `POST`,
            headers: { "content-type": `application/json` },
            body: JSON.stringify({ ...n, signature: r }),
          }),
          o = await a.json().catch(() => ({}));
        if (!a.ok) {
          (a.status < 500 || (n.funding === `usdg` && a.status === 503)) &&
            M(null),
            i(o.error ?? `Order declined`);
          return;
        }
        M(null);
        let s = { ...o, brand: _.brand, createdAt: o.createdAt ?? Date.now() };
        if ((La(e, s), Va(e, { ...s, country: h }), m.current !== e)) return;
        ee(s),
          L(null),
          i(
            s.usdgPay
              ? `Order placed. Now pay it with USDG.`
              : `Order placed. Now pay for it.`
          );
      } catch (e) {
        i(e?.message ?? `Order failed. Try again.`);
      } finally {
        P(!1);
      }
    },
    Le = async () => {
      if (F.usdgPay && ho(F.orderId)) {
        i(`A USDG payment was sent for this order, so it can't be cancelled.`);
        return;
      }
      let t = await pn(
        { storage: Ba(), fetch: $, api: ``, lock: et() },
        F.orderId,
        e
      );
      t.cancelled && Ra(e),
        m.current === e &&
          (i(t.message),
          t.cancelled && (ee(null), L(null), A(!1), p(_ ? 3 : 0)));
    },
    Re = () => {
      F && _o(F.orderId), Ra(e), Ne();
    },
    ze = (e) => {
      let t = () => i(`Select the address and copy it`);
      if (!navigator.clipboard) return t();
      navigator.clipboard.writeText(e).then(() => i(`Copied`), t);
    },
    B = { color: `var(--ink-soft)` },
    Be = { fontSize: `0.8rem`, color: `var(--ink-faint)`, lineHeight: 1.5 },
    Ve = (0, J.jsxs)(`div`, {
      className: `card pad-lg`,
      children: [
        (0, J.jsx)(`div`, {
          className: `eyebrow`,
          style: { marginBottom: `0.9rem` },
          children: `Your card`,
        }),
        (0, J.jsx)(`div`, {
          className: `cc-art` + (_ || F ? `` : ` is-idle`),
          "aria-hidden": `true`,
          children: (0, J.jsx)(la, {
            brand:
              F?.brand || _?.brand ? Pa(F?.brand ?? _?.brand) : `Prepaid card`,
            label: `Prepaid`,
            unit: `USD`,
            last4: `••••`,
            name: me ? me.toUpperCase() : `YOUR NAME`,
          }),
        }),
        !_ &&
          !F &&
          (0, J.jsx)(`div`, {
            style: { ...Be, marginTop: `0.6rem`, textAlign: `center` },
            children: `Pick a card to see it here.`,
          }),
        (0, J.jsxs)(`div`, {
          style: { marginTop: `1.1rem` },
          children: [
            (0, J.jsx)(Q, {
              k: `Card`,
              children: F?.brand || _?.brand ? Pa(F?.brand ?? _?.brand) : `—`,
            }),
            (0, J.jsx)(Q, {
              k: `Amount`,
              children: F ? `$${no(F.faceUsd)}` : pe ? `$${no(fe)}` : `—`,
            }),
            (0, J.jsx)(Q, {
              k: `Total with fees`,
              children: F?.totalUsd
                ? `$${Number(F.totalUsd).toFixed(2)}`
                : pe
                ? `about $${le(fe).toFixed(2)}`
                : `—`,
            }),
            (0, J.jsx)(Q, {
              k: `Delivered to`,
              children: ge ? to(w.trim()) : F ? `the email you entered` : `—`,
            }),
            u
              ? (0, J.jsx)(Q, {
                  k: `USDG in your wallet`,
                  children: d == null ? `—` : `${b(d, 2)} ${Z.asset}`,
                })
              : (0, J.jsxs)(Q, {
                  k: `Interest available`,
                  children: [b(t, 2), ` `, Z.asset],
                }),
          ],
        }),
        (0, J.jsx)(`div`, {
          style: { ...Be, marginTop: `0.75rem` },
          children: u
            ? `Pay with USDG: one transfer from your wallet, and we pay the card provider for you. Your savings are never touched.`
            : `Pay with USDC from any wallet, or with interest you've earned. Your principal is never touched.`,
        }),
        (0, J.jsxs)(`div`, {
          className: `split-total ok`,
          style: { marginTop: `0.75rem`, fontSize: `0.85rem` },
          children: [
            (0, J.jsx)(`span`, {
              children: `Hold $OFY, get 5% back in USDG on every card`,
            }),
            (0, J.jsx)(`span`, { children: `paid after delivery` }),
          ],
        }),
      ],
    });
  return (0, J.jsxs)(`div`, {
    className: `grid two fade-in`,
    style: { alignItems: `stretch` },
    children: [
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `section-title`,
            children: [
              (0, J.jsxs)(`div`, {
                children: [
                  (0, J.jsx)(`div`, {
                    className: `eyebrow`,
                    children: `Prepaid cards`,
                  }),
                  (0, J.jsx)(`h2`, { children: `Get a prepaid card` }),
                ],
              }),
              (0, J.jsxs)(`span`, {
                className: `pill ok`,
                children: [
                  (0, J.jsx)(`span`, { className: `dot` }),
                  `Delivered by email`,
                ],
              }),
            ],
          }),
          (0, J.jsx)(ao, { step: be }),
          n &&
            (0, J.jsx)(`div`, {
              className: `split-total bad`,
              children: (0, J.jsx)(`span`, {
                children: `Chain unreachable. Card purchases are off until it's back.`,
              }),
            }),
          !n &&
            !e &&
            be > 0 &&
            (0, J.jsxs)(`div`, {
              className: `split-total bad`,
              children: [
                (0, J.jsx)(`span`, {
                  children: `Connect MetaMask to continue.`,
                }),
                (0, J.jsx)(`button`, {
                  className: `btn sm`,
                  onClick: l,
                  children: `Connect MetaMask`,
                }),
              ],
            }),
          !n &&
            be === 0 &&
            (0, J.jsxs)(`div`, {
              className: `fade-in`,
              children: [
                (0, J.jsxs)(`div`, {
                  className: `form-row`,
                  style: { maxWidth: `20rem` },
                  children: [
                    (0, J.jsx)(`label`, {
                      className: `field-label`,
                      htmlFor: `cc-country`,
                      children: `Where you'll use it`,
                    }),
                    (0, J.jsx)(`select`, {
                      id: `cc-country`,
                      className: `input`,
                      value: h,
                      onChange: (e) => {
                        g(e.target.value), v(null);
                      },
                      children: Ma.map(([e, t]) =>
                        (0, J.jsx)(`option`, { value: e, children: t }, e)
                      ),
                    }),
                  ],
                }),
                ne.isLoading &&
                  (0, J.jsx)(`div`, { style: Be, children: `Loading cards…` }),
                ne.isError &&
                  !ne.data &&
                  (0, J.jsx)(`div`, {
                    className: `split-total bad`,
                    children: (0, J.jsx)(`span`, {
                      children: `Cards can't be loaded right now. Try again in a moment.`,
                    }),
                  }),
                ne.data &&
                  re.length === 0 &&
                  (0, J.jsx)(`div`, {
                    style: Be,
                    children: `No prepaid cards are sold in this storefront right now. Try another country.`,
                  }),
                (0, J.jsx)(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
                    gap: `0.75rem`,
                    marginTop: `0.5rem`,
                  },
                  children: ie.map((e) =>
                    (0, J.jsxs)(
                      `button`,
                      {
                        disabled: e.outOfStock,
                        onClick: () => Pe(e),
                        "aria-pressed": _?.brand === e.brand,
                        style: {
                          textAlign: `left`,
                          border:
                            `1px solid ` +
                            (_?.brand === e.brand
                              ? `rgba(160,92,232,0.5)`
                              : `var(--hairline)`),
                          borderRadius: `var(--radius-sm)`,
                          padding: `1.1rem`,
                          background: e.outOfStock ? `transparent` : `#fff`,
                          cursor: e.outOfStock ? `not-allowed` : `pointer`,
                          opacity: e.outOfStock ? 0.65 : 1,
                          font: `inherit`,
                          color: `inherit`,
                        },
                        children: [
                          (0, J.jsx)(Fa, { brand: e.brand, dim: e.outOfStock }),
                          (0, J.jsxs)(`div`, {
                            style: {
                              fontWeight: 500,
                              display: `flex`,
                              gap: `0.45rem`,
                              alignItems: `center`,
                              flexWrap: `wrap`,
                            },
                            children: [
                              e.brand,
                              e.global &&
                                (0, J.jsx)(`span`, {
                                  style: {
                                    fontSize: `0.62rem`,
                                    textTransform: `uppercase`,
                                    letterSpacing: `0.07em`,
                                    color: `var(--green-deep)`,
                                    border: `1px solid currentColor`,
                                    borderRadius: `9999px`,
                                    padding: `0.1rem 0.4rem`,
                                  },
                                  children: `Worldwide`,
                                }),
                              e.outOfStock &&
                                (0, J.jsx)(`span`, {
                                  style: {
                                    fontSize: `0.62rem`,
                                    textTransform: `uppercase`,
                                    letterSpacing: `0.07em`,
                                    color: `var(--amber)`,
                                    border: `1px solid currentColor`,
                                    borderRadius: `9999px`,
                                    padding: `0.1rem 0.4rem`,
                                  },
                                  children: e.unavailable
                                    ? `Unavailable`
                                    : `Sold out`,
                                }),
                            ],
                          }),
                          (0, J.jsx)(`div`, {
                            style: {
                              fontSize: `0.78rem`,
                              color: `var(--ink-faint)`,
                              marginTop: `0.25rem`,
                              lineHeight: 1.45,
                            },
                            children: e.unavailable
                              ? `Mastercard · back when the card provider restocks it`
                              : `${
                                  Na[e.brand]?.where ?? `Online prepaid card`
                                } · $${e.minUsd}–$${e.maxUsd}`,
                          }),
                        ],
                      },
                      e.brand
                    )
                  ),
                }),
                (0, J.jsx)(`div`, {
                  style: { ...Be, marginTop: `0.9rem` },
                  children: `One-time USD cards for online purchases, not reloadable. They don't support 3-D Secure, so merchants that require it (common in the EU) can decline them.`,
                }),
                (0, J.jsx)(`div`, {
                  className: `cc-how`,
                  children: [
                    [
                      `Pick your card`,
                      `Choose where you'll use it and a card that works there.`,
                    ],
                    u
                      ? [
                          `Pay with USDG`,
                          `One transfer from your wallet. We pay the card provider for you.`,
                        ]
                      : [
                          `Pay your way`,
                          `Send USDC from any wallet, or pay from the interest your savings earn.`,
                        ],
                    [
                      `Check your inbox`,
                      `The card arrives by email, usually within minutes of payment.`,
                    ],
                  ].map(([e, t], n) =>
                    (0, J.jsxs)(
                      `div`,
                      {
                        className: `cc-how-step`,
                        children: [
                          (0, J.jsx)(`span`, {
                            className: `cc-how-num`,
                            children: n + 1,
                          }),
                          (0, J.jsx)(`b`, { children: e }),
                          (0, J.jsx)(`span`, { children: t }),
                        ],
                      },
                      e
                    )
                  ),
                }),
                !e &&
                  (0, J.jsx)(`div`, {
                    style: { ...Be, marginTop: `1rem`, textAlign: `center` },
                    children: `Browse freely. You'll connect MetaMask when you pick a card.`,
                  }),
              ],
            }),
          !n &&
            e &&
            be === 1 &&
            _ &&
            (0, J.jsxs)(`div`, {
              className: `fade-in`,
              children: [
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsxs)(`div`, {
                      className: `form-row`,
                      children: [
                        (0, J.jsxs)(`label`, {
                          className: `field-label`,
                          htmlFor: `cc-amt`,
                          children: [
                            `Card amount (USD) · $`,
                            _.minUsd,
                            ` to $`,
                            ue,
                          ],
                        }),
                        (0, J.jsx)(`div`, {
                          style: {
                            display: `flex`,
                            gap: `0.5rem`,
                            margin: `0.35rem 0 0.5rem`,
                            flexWrap: `wrap`,
                          },
                          children: $a
                            .filter((e) => e >= _.minUsd && e <= ue)
                            .map((e) =>
                              (0, J.jsxs)(
                                `button`,
                                {
                                  className:
                                    `btn sm ` + (fe === e ? `` : `ghost`),
                                  onClick: () => x(String(e)),
                                  children: [`$`, e],
                                },
                                e
                              )
                            ),
                        }),
                        (0, J.jsx)(`input`, {
                          id: `cc-amt`,
                          className: `input mono`,
                          type: `text`,
                          inputMode: `decimal`,
                          value: y,
                          onChange: (e) => x(e.target.value),
                          placeholder: String(_.minUsd),
                        }),
                      ],
                    }),
                    y &&
                      !pe &&
                      (0, J.jsxs)(`div`, {
                        className: `status bad`,
                        style: { marginBottom: `0.6rem` },
                        children: [
                          Y.x,
                          ` `,
                          Number.isFinite(fe) && fe > ue
                            ? `This card goes up to $${ue}.`
                            : `Enter an amount from $${_.minUsd} to $${ue}, in dollars and cents.`,
                        ],
                      }),
                    pe &&
                      (0, J.jsxs)(`div`, {
                        className: `split-total ok`,
                        children: [
                          (0, J.jsx)(`span`, {
                            children: `Estimated total with fees`,
                          }),
                          (0, J.jsxs)(`span`, {
                            children: [`$`, le(fe).toFixed(2)],
                          }),
                        ],
                      }),
                    (0, J.jsxs)(`div`, {
                      style: { ...Be, margin: `0.6rem 0 1rem` },
                      children: [
                        `The card provider adds about `,
                        _.feePct ?? 12,
                        `%. You see the exact total before you pay.`,
                        ` `,
                        u
                          ? `You pay in USDG from your wallet${
                              d != null &&
                              pe &&
                              d < BigInt(Math.round(le(fe) * 100)) * 10000n
                                ? `, which holds ${b(
                                    d,
                                    2
                                  )} USDG now: add more before you pay`
                                : ``
                            }.`
                          : de >= _.minUsd
                          ? `Your interest covers up to $${Math.min(
                              de,
                              ue
                            )} of it, if you want to pay that way.`
                          : `You'll pay with USDC; paying from interest needs more interest than you have yet.`,
                      ],
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  style: { display: `flex`, gap: `0.6rem` },
                  children: [
                    (0, J.jsx)(io, { onClick: () => p(0) }),
                    (0, J.jsxs)(`button`, {
                      className: `btn`,
                      disabled: !pe,
                      onClick: () => p(2),
                      children: [
                        `Continue`,
                        (0, J.jsx)(`span`, {
                          className: `circ`,
                          children: Y.chevron,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          !n &&
            e &&
            (be === 2 || be === 3) &&
            !pe &&
            (0, J.jsxs)(`div`, {
              className: `fade-in`,
              children: [
                (0, J.jsx)(`div`, {
                  className: `split-total bad`,
                  style: { marginBottom: `1rem` },
                  children: (0, J.jsx)(`span`, {
                    children: `This amount no longer fits your interest or the card's limits. Go back and pick another.`,
                  }),
                }),
                (0, J.jsx)(io, { disabled: N, onClick: () => p(+!!_) }),
              ],
            }),
          !n &&
            e &&
            be === 2 &&
            _ &&
            pe &&
            (0, J.jsxs)(`div`, {
              className: `fade-in`,
              children: [
                (0, J.jsxs)(`div`, {
                  className: `form-row`,
                  children: [
                    (0, J.jsx)(`label`, {
                      className: `field-label`,
                      htmlFor: `cc-name`,
                      children: `Full name`,
                    }),
                    (0, J.jsx)(`input`, {
                      id: `cc-name`,
                      className: `input`,
                      autoComplete: `name`,
                      value: S,
                      onChange: (e) => C(e.target.value),
                      placeholder: `First Last`,
                    }),
                    S &&
                      !he &&
                      (0, J.jsxs)(`div`, {
                        className: `status bad`,
                        style: { marginTop: `0.35rem` },
                        children: [
                          Y.x,
                          ` Enter your first and last name, letters only.`,
                        ],
                      }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  className: `form-row`,
                  children: [
                    (0, J.jsx)(`label`, {
                      className: `field-label`,
                      htmlFor: `cc-email`,
                      children: `Email for delivery`,
                    }),
                    (0, J.jsx)(`input`, {
                      id: `cc-email`,
                      className: `input`,
                      type: `email`,
                      autoComplete: `email`,
                      value: w,
                      onChange: (e) => T(e.target.value),
                      placeholder: `you@example.com`,
                    }),
                    w &&
                      !ge &&
                      (0, J.jsxs)(`div`, {
                        className: `status bad`,
                        style: { marginTop: `0.35rem` },
                        children: [
                          Y.x,
                          ` That doesn't look like an email address.`,
                        ],
                      }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  className: `form-row`,
                  children: [
                    (0, J.jsx)(`label`, {
                      className: `field-label`,
                      htmlFor: `cc-email2`,
                      children: `Confirm email`,
                    }),
                    (0, J.jsx)(`input`, {
                      id: `cc-email2`,
                      className: `input`,
                      type: `email`,
                      autoComplete: `email`,
                      value: E,
                      onChange: (e) => D(e.target.value),
                      onPaste: (e) => e.preventDefault(),
                      placeholder: `Type it again`,
                    }),
                    E &&
                      ge &&
                      !_e &&
                      (0, J.jsxs)(`div`, {
                        className: `status bad`,
                        style: { marginTop: `0.35rem` },
                        children: [Y.x, ` The two emails don't match.`],
                      }),
                  ],
                }),
                (0, J.jsx)(`div`, {
                  style: { ...Be, marginBottom: `1rem` },
                  children: `The card issuer needs the card holder's name. The card is emailed to this address, so check it carefully: a delivered card can't be sent again to another email. Offyield doesn't store either; they pass through to the card provider, CryptoRefills.`,
                }),
                (0, J.jsxs)(`div`, {
                  style: { display: `flex`, gap: `0.6rem` },
                  children: [
                    (0, J.jsx)(io, { onClick: () => p(1) }),
                    (0, J.jsxs)(`button`, {
                      className: `btn`,
                      disabled: !pe || !he || !_e,
                      onClick: () => {
                        A(!1), p(3);
                      },
                      children: [
                        `Review`,
                        (0, J.jsx)(`span`, {
                          className: `circ`,
                          children: Y.chevron,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          !n &&
            e &&
            be === 3 &&
            _ &&
            pe &&
            (0, J.jsxs)(`div`, {
              className: `fade-in`,
              children: [
                (0, J.jsx)(Q, { k: `Card`, children: _.brand }),
                (0, J.jsx)(Q, {
                  k: `Storefront`,
                  children: Ma.find(([e]) => e === h)?.[1] ?? h,
                }),
                (0, J.jsxs)(Q, { k: `Card amount`, children: [`$`, no(fe)] }),
                (0, J.jsxs)(Q, {
                  k: `Estimated total with fees`,
                  children: [`$`, le(fe).toFixed(2)],
                }),
                (0, J.jsx)(Q, { k: `Card holder`, children: me }),
                (0, J.jsx)(Q, { k: `Delivered to`, children: w.trim() }),
                u &&
                  (0, J.jsx)(Q, {
                    k: `You pay with`,
                    children: `USDG from this wallet`,
                  }),
                Se &&
                  (0, J.jsx)(`div`, {
                    style: { ...Be, margin: `0.9rem 0` },
                    children: Se.detail,
                  }),
                (0, J.jsxs)(`label`, {
                  style: {
                    display: `flex`,
                    gap: `0.6rem`,
                    alignItems: `flex-start`,
                    fontSize: `0.88rem`,
                    color: `var(--ink-soft)`,
                    lineHeight: 1.5,
                    margin: `0.6rem 0 1rem`,
                    cursor: `pointer`,
                  },
                  children: [
                    (0, J.jsx)(`input`, {
                      type: `checkbox`,
                      checked: O,
                      onChange: (e) => A(e.target.checked),
                      style: { marginTop: `0.25rem` },
                    }),
                    (0, J.jsx)(`span`, {
                      children: `I understand this is a one-time prepaid card for online use, it expires, and it can't be refunded once delivered.`,
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  style: { display: `flex`, gap: `0.6rem`, flexWrap: `wrap` },
                  children: [
                    (0, J.jsx)(io, { disabled: N, onClick: () => p(2) }),
                    (0, J.jsxs)(`button`, {
                      className: `btn`,
                      disabled: !O || N,
                      onClick: Fe,
                      children: [
                        N ? `Confirm in MetaMask…` : `Sign and place order`,
                        (0, J.jsx)(`span`, {
                          className: `circ`,
                          children: Y.check,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  style: { ...Be, marginTop: `0.6rem` },
                  children: [
                    `Signing is free and moves no money: it proves the order comes from your wallet. `,
                    u
                      ? `You pay in USDG in the next step, with one transfer from this wallet.`
                      : `You pay in the next step.`,
                  ],
                }),
              ],
            }),
          !n &&
            e &&
            be === 4 &&
            F &&
            (0, J.jsxs)(`div`, {
              className: `fade-in`,
              children: [
                (0, J.jsxs)(`div`, {
                  className:
                    `split-total ` + ((ve && !ye) || Oe ? `bad` : `ok`),
                  style: { marginBottom: `0.9rem` },
                  children: [
                    (0, J.jsxs)(`span`, {
                      children: [`$`, no(F.faceUsd), ` `, Pa(F.brand)],
                    }),
                    (0, J.jsx)(`span`, { children: ke ?? Ga(I) }),
                  ],
                }),
                F.cardRef
                  ? (0, J.jsxs)(`div`, {
                      style: { marginBottom: `0.9rem` },
                      children: [
                        (0, J.jsx)(Q, {
                          k: `Card reference`,
                          children: (0, J.jsx)(`span`, {
                            className: `addr-mono`,
                            children: F.cardRef,
                          }),
                        }),
                        (0, J.jsx)(Q, {
                          k: `5% cashback in USDG`,
                          children: (0, J.jsx)(Wa, {
                            account: e,
                            orderId: F.orderId,
                            cardRef: F.cardRef,
                            delivered: ye,
                          }),
                        }),
                      ],
                    })
                  : (0, J.jsx)(`div`, {
                      style: { ...Be, marginBottom: `0.9rem` },
                      children: `Hold $OFY in this wallet when you order and you get 5% of the card's value back in USDG.`,
                    }),
                (0, J.jsx)(`div`, {
                  className: `steps-list`,
                  style: { marginBottom: `1rem` },
                  children: je.map(([e, t, n], r) =>
                    (0, J.jsxs)(
                      `div`,
                      {
                        className:
                          `step-row ` + (t ? `done` : r === Me ? `active` : ``),
                        children: [
                          (0, J.jsx)(`span`, {
                            className: `num`,
                            children: t ? Y.check : r + 1,
                          }),
                          (0, J.jsxs)(`div`, {
                            children: [
                              (0, J.jsx)(`b`, {
                                style: { fontWeight: 500 },
                                children: e,
                              }),
                              n &&
                                (0, J.jsx)(`div`, {
                                  className: `cc-step-tx`,
                                  children: n,
                                }),
                            ],
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
                ye
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsxs)(`div`, {
                          style: {
                            fontSize: `0.92rem`,
                            color: `var(--ink-soft)`,
                            lineHeight: 1.55,
                            marginBottom: `1rem`,
                          },
                          children: [
                            `Your card is on its way to your inbox. Check spam if it isn't there in a few minutes.`,
                            c
                              ? ` It's also listed in your card history below.`
                              : ``,
                          ],
                        }),
                        (0, J.jsxs)(`button`, {
                          className: `btn`,
                          onClick: Re,
                          children: [
                            `Buy another card`,
                            (0, J.jsx)(`span`, {
                              className: `circ`,
                              children: Y.chevron,
                            }),
                          ],
                        }),
                      ],
                    })
                  : z.has
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsx)(bo, {
                          up: z,
                          order: F,
                          on: u,
                          walletUsdg: d,
                          terminal: ve,
                          delivered: ye,
                          cardPaid: Ee,
                          excess: we,
                          onFinish: Re,
                        }),
                        Ae &&
                          (0, J.jsx)(`button`, {
                            className: `btn ghost`,
                            style: { marginTop: `1rem` },
                            onClick: Le,
                            children: `Cancel order`,
                          }),
                      ],
                    })
                  : ve
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsx)(`div`, {
                          style: {
                            fontSize: `0.9rem`,
                            color: `var(--ink-soft)`,
                            lineHeight: 1.55,
                            marginBottom: `1rem`,
                          },
                          children: `This order is closed. If you already paid for it, the card provider refunds you by email.`,
                        }),
                        (0, J.jsxs)(`button`, {
                          className: `btn`,
                          onClick: Re,
                          children: [
                            `Start a new card`,
                            (0, J.jsx)(`span`, {
                              className: `circ`,
                              children: Y.chevron,
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, J.jsxs)(J.Fragment, {
                      children: [
                        a &&
                          zt &&
                          (0, J.jsx)(Ya, {
                            account: e,
                            order: F,
                            toast: i,
                            onLock: R,
                          }),
                        !xe &&
                          (0, J.jsxs)(`div`, {
                            style: {
                              marginTop: `1rem`,
                              paddingTop: `1rem`,
                              borderTop: `1px solid var(--hairline)`,
                            },
                            children: [
                              (0, J.jsx)(`div`, {
                                className: `eyebrow`,
                                style: { marginBottom: `0.5rem` },
                                children:
                                  a && zt
                                    ? `Or pay from any wallet`
                                    : `Pay from any wallet`,
                              }),
                              (0, J.jsxs)(Q, {
                                k: `Send exactly`,
                                children: [
                                  F.coinAmount,
                                  ` `,
                                  F.coin,
                                  ` on `,
                                  F.network,
                                ],
                              }),
                              (0, J.jsxs)(`div`, {
                                className: `route-line`,
                                style: { gap: `0.75rem` },
                                children: [
                                  (0, J.jsx)(`span`, {
                                    style: B,
                                    children: `To address`,
                                  }),
                                  (0, J.jsxs)(`span`, {
                                    style: {
                                      display: `flex`,
                                      gap: `0.5rem`,
                                      alignItems: `center`,
                                      minWidth: 0,
                                    },
                                    children: [
                                      (0, J.jsx)(`span`, {
                                        className: `addr-mono`,
                                        style: {
                                          overflowWrap: `anywhere`,
                                          textAlign: `right`,
                                          userSelect: `all`,
                                        },
                                        children: F.payTo,
                                      }),
                                      (0, J.jsx)(`button`, {
                                        className: `btn ghost sm`,
                                        onClick: () => ze(F.payTo),
                                        children: `Copy`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, J.jsx)(Q, {
                                k: `Pay within`,
                                children: (0, J.jsx)(Ka, {
                                  until:
                                    (F.createdAt ?? Date.now()) +
                                    (F.expiresInMinutes ?? 30) * 6e4,
                                }),
                              }),
                              (0, J.jsxs)(`div`, {
                                style: { ...Be, marginTop: `0.5rem` },
                                children: [
                                  `Send the exact amount on `,
                                  F.network,
                                  `; a different amount or network can delay or lose the order.`,
                                ],
                              }),
                            ],
                          }),
                        xe
                          ? (0, J.jsx)(`div`, {
                              style: { ...Be, marginTop: `0.9rem` },
                              children: `A payment from your interest is recorded for this order, so cancelling and paying again are turned off.`,
                            })
                          : (0, J.jsx)(`button`, {
                              className: `btn ghost`,
                              style: { marginTop: `1rem` },
                              onClick: Le,
                              children: `Cancel order`,
                            }),
                      ],
                    }),
              ],
            }),
        ],
      }),
      Ve,
    ],
  });
}
function So({
  account: e,
  pos: t,
  failed: n,
  spendable: r,
  busy: i,
  onSpend: a,
  toast: o,
  reorder: s,
  clearReorder: c,
  payWithInterestOn: l,
}) {
  let [u, d] = (0, V.useState)(``),
    f = m(u),
    p = f !== null && f > r,
    h = !e || n || !t || t.paused || t.impaired;
  return (0, J.jsxs)(`div`, {
    className: `fade-in`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `grid two`,
        style: { alignItems: `start` },
        children: [
          (0, J.jsxs)(`div`, {
            className: `card pad-lg`,
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                style: { marginBottom: `0.75rem` },
                children: X
                  ? `Spend interest — real testnet transaction`
                  : `Spend interest — sends real USDG to your wallet`,
              }),
              h &&
                e &&
                (0, J.jsx)(`div`, {
                  className: `split-total bad`,
                  style: { marginBottom: `1rem` },
                  children: (0, J.jsx)(`span`, {
                    children: n
                      ? `Chain unreachable — spending disabled`
                      : t?.impaired
                      ? `Position impaired — spending disabled`
                      : t?.paused
                      ? `Vault paused — spending disabled (withdrawals still work)`
                      : `Spending unavailable`,
                  }),
                }),
              (0, J.jsxs)(`div`, {
                className: `form-row`,
                children: [
                  (0, J.jsxs)(`label`, {
                    className: `field-label`,
                    children: [`Amount (`, Z.asset, `)`],
                  }),
                  (0, J.jsx)(`input`, {
                    className: `input mono`,
                    type: `number`,
                    min: `0`,
                    value: u,
                    onChange: (e) => d(e.target.value),
                    placeholder: `0.00`,
                  }),
                ],
              }),
              p
                ? (0, J.jsxs)(`div`, {
                    className: `split-total bad`,
                    children: [
                      (0, J.jsx)(`span`, {
                        children: `Will decline · exceeds accrued interest`,
                      }),
                      (0, J.jsxs)(`span`, { children: [b(f - r), ` short`] }),
                    ],
                  })
                : (0, J.jsxs)(`div`, {
                    className: `split-total ok`,
                    children: [
                      (0, J.jsx)(`span`, {
                        children: `Interest remaining after spend`,
                      }),
                      (0, J.jsxs)(`span`, {
                        children: [
                          b(f !== null && r >= f ? r - f : r),
                          ` `,
                          Z.asset,
                        ],
                      }),
                    ],
                  }),
              (0, J.jsxs)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-soft)`,
                  margin: `0.75rem 0 0`,
                  lineHeight: 1.5,
                },
                children: [
                  `This calls `,
                  (0, J.jsx)(`code`, { children: `spendFromYield` }),
                  ` and pays the interest to your own wallet — the exact draw a card authorization will make. The contract declines anything beyond accrued interest.`,
                ],
              }),
              (0, J.jsxs)(`button`, {
                className: `btn`,
                disabled: f === null || p || h || i,
                style: {
                  justifyContent: `center`,
                  width: `100%`,
                  marginTop: `1rem`,
                },
                onClick: () => {
                  a(f), d(``);
                },
                children: [
                  i === `spend`
                    ? `Confirm in wallet…`
                    : `Spend${f ? ` ${b(f)} ${Z.asset}` : ``}`,
                  (0, J.jsx)(`span`, { className: `circ`, children: Y.check }),
                ],
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `card pad-lg`,
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                style: { marginBottom: `0.9rem` },
                children: `Spending power`,
              }),
              (0, J.jsxs)(`div`, {
                className: `val`,
                style: { fontSize: `2.25rem`, fontWeight: 400 },
                children: [
                  b(r, 4),
                  (0, J.jsxs)(`small`, { children: [` `, Z.asset] }),
                ],
              }),
              (0, J.jsx)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-faint)`,
                  marginTop: `0.35rem`,
                },
                children: `Read from the vault contract, refreshed every ~15s`,
              }),
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                style: { marginTop: `1.25rem` },
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Network`,
                  }),
                  (0, J.jsxs)(`b`, { children: [Z.name, ` · `, Z.id] }),
                ],
              }),
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Principal at risk`,
                  }),
                  (0, J.jsxs)(`b`, { children: [`0.00 `, Z.asset] }),
                ],
              }),
              (0, J.jsxs)(`div`, {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: `Vault status`,
                  }),
                  (0, J.jsx)(`b`, {
                    children: n
                      ? `Unreachable`
                      : t?.paused
                      ? `Paused`
                      : `Active`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(Xa, {
        account: e,
        spendable: r,
        failed: n,
        toast: o,
        reorder: s,
        clearReorder: c,
        payWithInterestOn: l,
      }),
    ],
  });
}
var Co = (e) =>
  e.paymentState || e.orderState || e.deliveryState
    ? Ga(e)
    : Date.now() - e.createdAt < 864e5
    ? `Waiting for your payment`
    : `Status not checked`;
function wo(e) {
  let t = It(e, Date.now());
  if (!t) return;
  let n = URL.createObjectURL(new Blob([t], { type: `text/calendar` })),
    r = document.createElement(`a`);
  (r.href = n),
    (r.download = `offyield-card-reminder-${e.orderId.slice(0, 8)}.ics`),
    document.body.appendChild(r),
    r.click(),
    r.remove(),
    setTimeout(() => URL.revokeObjectURL(n), 1e4);
}
function To({ account: e, go: t, onReorder: n, onBuy: r }) {
  let i = r ?? (() => t(`spend`)),
    [a, o] = (0, V.useState)([]);
  (0, V.useEffect)(() => {
    o(e ? Et(Ba(), e) : []);
  }, [e]),
    (0, V.useEffect)(() => {
      if (!e) return;
      let t = !0,
        n = async () => {
          if (document.hidden) return;
          let n = Et(Ba(), e)
            .filter((e) => !At(e) && Date.now() - e.createdAt < 864e5)
            .slice(0, 5);
          for (let r of n)
            try {
              let n = await $(`/api/spend/order/${r.orderId}`);
              if (!n.ok) continue;
              let i = await n.json();
              if (!t) return;
              o(
                Va(e, {
                  orderId: r.orderId,
                  paymentState: i.paymentState,
                  orderState: i.orderState,
                  deliveryState: i.deliveryState,
                  checkedAt: Date.now(),
                })
              );
            } catch {}
        };
      n();
      let r = setInterval(n, 2e4);
      return () => {
        (t = !1), clearInterval(r);
      };
    }, [e]);
  let s = e ? za(e)?.orderId : null;
  return (0, J.jsxs)(`div`, {
    className: `card pad-lg fade-in`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `section-title`,
        children: [
          (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsx)(`div`, {
                className: `eyebrow`,
                children: r ? `Your card history` : `Bought with your interest`,
              }),
              (0, J.jsx)(`h2`, { children: `My cards` }),
            ],
          }),
          (0, J.jsxs)(`button`, {
            className: `btn sm`,
            onClick: i,
            children: [
              `Buy a card`,
              (0, J.jsx)(`span`, { className: `circ`, children: Y.chevron }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        style: {
          fontSize: `0.85rem`,
          color: `var(--ink-soft)`,
          lineHeight: 1.55,
          marginBottom: `0.75rem`,
        },
        children: `Every card you ordered from this browser. Codes are emailed to you on delivery; this list is kept only in this browser, without your email or name.`,
      }),
      !e &&
        (0, J.jsx)(`div`, {
          className: `split-total bad`,
          children: (0, J.jsx)(`span`, {
            children: `Connect MetaMask to see your cards`,
          }),
        }),
      e &&
        a.length === 0 &&
        (0, J.jsxs)(`div`, {
          style: {
            color: `var(--ink-faint)`,
            fontSize: `0.95rem`,
            padding: `0.5rem 0`,
          },
          children: [
            `No cards yet. When your interest covers one, buy it `,
            r ? `above` : `from the Spend tab`,
            ` and it shows up here.`,
          ],
        }),
      a.map((t, r) => {
        let a = At(t),
          o = t.deliveryState === `Delivered`,
          c = o ? Nt(t) : null;
        return (0, J.jsxs)(
          `div`,
          {
            className: `route-line`,
            style: { flexWrap: `wrap`, gap: `0.5rem`, alignItems: `center` },
            children: [
              (0, J.jsxs)(`div`, {
                className: `who`,
                style: { minWidth: `12rem` },
                children: [
                  (0, J.jsxs)(`b`, {
                    children: [`$`, t.faceUsd, ` `, Pa(t.brand)],
                  }),
                  (0, J.jsxs)(`span`, {
                    style: { fontSize: `0.78rem`, color: `var(--ink-faint)` },
                    children: [
                      new Date(t.createdAt).toLocaleDateString(),
                      t.totalUsd
                        ? ` · paid about $${t.totalUsd.toFixed(2)}`
                        : ``,
                      c ? ` · expires around ${c.toLocaleDateString()}` : ``,
                    ],
                  }),
                  t.cardRef &&
                    (0, J.jsxs)(`span`, {
                      style: {
                        fontSize: `0.78rem`,
                        color: `var(--ink-faint)`,
                        display: `flex`,
                        gap: `0.6rem`,
                        flexWrap: `wrap`,
                        alignItems: `center`,
                      },
                      children: [
                        (0, J.jsx)(`span`, {
                          className: `addr-mono`,
                          style: { fontSize: `0.74rem` },
                          children: t.cardRef,
                        }),
                        (o || !a) &&
                          (0, J.jsx)(J.Fragment, {
                            children: (0, J.jsx)(Wa, {
                              account: e,
                              orderId: t.orderId,
                              cardRef: t.cardRef,
                              delivered: o,
                              cached: t.cashback,
                              live: r < 8,
                            }),
                          }),
                      ],
                    }),
                ],
              }),
              (0, J.jsxs)(`span`, {
                className: `pill ` + (o ? `ok` : a ? `warn` : ``),
                children: [
                  (0, J.jsx)(`span`, { className: `dot` }),
                  Co(t),
                  o ? ` · check your email` : ``,
                ],
              }),
              (0, J.jsxs)(`div`, {
                style: { display: `flex`, gap: `0.4rem`, flexWrap: `wrap` },
                children: [
                  !a &&
                    s === t.orderId &&
                    (0, J.jsx)(`button`, {
                      className: `btn sm`,
                      onClick: i,
                      children: `Finish paying`,
                    }),
                  c &&
                    (0, J.jsx)(`button`, {
                      className: `btn ghost sm`,
                      onClick: () => wo(t),
                      children: `Expiry reminder`,
                    }),
                  (0, J.jsx)(`button`, {
                    className: `btn ghost sm`,
                    onClick: () =>
                      n({
                        brand: t.brand,
                        faceUsd: t.faceUsd,
                        country: t.country,
                      }),
                    children: `Buy again`,
                  }),
                ],
              }),
            ],
          },
          t.orderId
        );
      }),
    ],
  });
}
function Eo({ account: e, activity: t, pos: n, failed: r }) {
  let i = fa(e, r ? [] : t, n);
  return (0, J.jsxs)(`div`, {
    className: `card pad-lg fade-in`,
    children: [
      (0, J.jsx)(`div`, {
        style: {
          fontSize: `0.8rem`,
          color: `var(--ink-faint)`,
          paddingBottom: `0.75rem`,
        },
        children: `The last 30 days: vault events read from the contract, plus swaps, bridges and card orders made from this browser.`,
      }),
      r &&
        (0, J.jsxs)(`div`, {
          style: {
            color: `var(--ink-soft)`,
            fontSize: `0.9rem`,
            paddingBottom: `0.75rem`,
          },
          children: [
            Y.warn,
            ` Couldn't read the vault's event log, so vault events are hidden rather than shown stale.`,
          ],
        }),
      i.length === 0 &&
        (0, J.jsx)(`div`, {
          style: {
            color: `var(--ink-faint)`,
            fontSize: `0.95rem`,
            padding: `0.5rem 0`,
          },
          children: `No activity in the last 30 days. Deposits, swaps, bridges, spends and withdrawals will show up here.`,
        }),
      (0, J.jsxs)(`div`, {
        className: `act-row head`,
        style: { display: i.length === 0 ? `none` : void 0 },
        children: [
          (0, J.jsx)(`span`, {}),
          (0, J.jsx)(`span`, { children: `Event` }),
          (0, J.jsx)(`span`, { className: `hide-m`, children: `Detail` }),
          (0, J.jsx)(`span`, { className: `right`, children: `Amount` }),
          (0, J.jsx)(`span`, { className: `right hide-m`, children: `Tx` }),
        ],
      }),
      i.map((e) =>
        (0, J.jsxs)(
          `div`,
          {
            className: `act-row`,
            children: [
              (0, J.jsx)(`span`, {
                className: `act-ic ` + (e.dir === `out` ? `out` : `in`),
                children: e.dir === `out` ? Y.up : Y.down,
              }),
              (0, J.jsxs)(`div`, {
                children: [
                  (0, J.jsx)(`b`, {
                    style: { fontWeight: 500 },
                    children: e.title,
                  }),
                  (0, J.jsx)(`div`, {
                    style: { fontSize: `0.78rem`, color: `var(--ink-faint)` },
                    className: `hide-m`,
                    children: pa(e.at),
                  }),
                ],
              }),
              (0, J.jsx)(`span`, {
                className: `addr-mono hide-m`,
                children: e.detail,
              }),
              (0, J.jsxs)(`span`, {
                className: `right amt`,
                children: [e.dir === `out` ? `−` : `+`, e.amount],
              }),
              (0, J.jsx)(`span`, {
                className: `right hide-m`,
                children: e.txHash
                  ? (0, J.jsxs)(`a`, {
                      className: `addr-mono`,
                      href: k(e.txHash),
                      target: `_blank`,
                      rel: `noreferrer`,
                      style: { color: `var(--ink-faint)` },
                      children: [ta(e.txHash), ` ↗`],
                    })
                  : null,
              }),
            ],
          },
          e.id
        )
      ),
    ],
  });
}
function Do({ account: e, trustCenter: t }) {
  let n = [
    [`Network`, `${Z.name} (${Z.stack})`],
    [`Chain id`, String(Z.id)],
    [`Execution`, `EVM-compatible rollup`],
    [`Settles to`, Z.settlement],
    [
      `Deposit asset`,
      X ? `test ${Z.asset} (fake, open mint)` : `${Z.asset} (Paxos)`,
    ],
    [`Yield source`, Z.market],
    [`Not used`, `No validator staking, no rehypothecation`],
    [`Vault contract`, B.vault],
    [X ? `Test token` : `USDG token`, B.usdg],
    [X ? `Test venue` : `Lending vault`, B.venue],
    [`Your wallet`, e ?? na],
  ];
  return (0, J.jsxs)(`div`, {
    className: `grid two fade-in`,
    style: { alignItems: `start` },
    children: [
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        children: [
          (0, J.jsx)(`div`, {
            className: `eyebrow`,
            style: { marginBottom: `0.9rem` },
            children: `Network`,
          }),
          n.map(([e, t]) =>
            (0, J.jsxs)(
              `div`,
              {
                className: `route-line`,
                children: [
                  (0, J.jsx)(`span`, {
                    style: { color: `var(--ink-soft)` },
                    children: e,
                  }),
                  t.startsWith(`0x`)
                    ? (0, J.jsxs)(`a`, {
                        className: `addr-mono`,
                        href: `${B.explorer}/address/${t}`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        style: { color: `inherit`, textAlign: `right` },
                        children: [ta(t), ` ↗`],
                      })
                    : (0, J.jsx)(`span`, {
                        style: { textAlign: `right` },
                        children: t,
                      }),
                ],
              },
              e
            )
          ),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `card pad-lg`,
        children: [
          (0, J.jsx)(`div`, {
            className: `eyebrow`,
            style: { marginBottom: `0.9rem` },
            children: `How the numbers update`,
          }),
          (0, J.jsxs)(`p`, {
            style: {
              color: `var(--ink-soft)`,
              lineHeight: 1.6,
              fontSize: `0.95rem`,
            },
            children: [
              `Every figure on this dashboard is a live read of the vault contract — principal, spendable interest and position value come from `,
              (0, J.jsx)(`code`, { children: `principalOf` }),
              `, `,
              (0, J.jsx)(`code`, { children: `spendableYieldOf` }),
              ` and `,
              (0, J.jsx)(`code`, { children: `positionValue` }),
              `, refreshed every ~15 seconds. Nothing is estimated client-side. If the chain can't be reached, balances show zero and spending is disabled rather than showing a stale number.`,
            ],
          }),
          (0, J.jsx)(`p`, {
            style: {
              color: `var(--ink-soft)`,
              lineHeight: 1.6,
              fontSize: `0.95rem`,
              marginTop: `0.75rem`,
            },
            children: X
              ? `This is the testnet stack: the token and yield venue are fakes deployed for testing, so balances here are worth nothing — but the vault contract is the real thing.`
              : `This is the live vault on Robinhood Chain, audited by Shieldify and verified on Sourcify. Deposits are real USDG supplied to the Steakhouse USDG lending vault on Morpho; the rate is variable and principal can lose value if that market takes a loss.`,
          }),
          t &&
            (0, J.jsxs)(`a`, {
              className: `btn ghost sm`,
              href: `/transparency`,
              style: { marginTop: `1rem` },
              children: [
                `Open the Trust Center`,
                (0, J.jsx)(`span`, { className: `circ`, children: Y.chevron }),
              ],
            }),
        ],
      }),
    ],
  });
}
var Oo = 1,
  ko = `offyield.stocks.attest.v${Oo}`,
  Ao = `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`,
  jo = `https://robinhoodchain.blockscout.com`,
  Mo = [
    {
      name: `1inch`,
      url: () => `https://app.1inch.io/`,
      note: `pick Robinhood Chain, paste the token address`,
    },
    {
      name: `Uniswap`,
      url: (e) =>
        `https://app.uniswap.org/swap?chain=robinhood&inputCurrency=${Ao}&outputCurrency=${e}`,
      note: `opens with USDG → this token prefilled; change anything there`,
    },
  ];
function No() {
  try {
    let e = JSON.parse(localStorage.getItem(ko) || `null`);
    return e && e.version === Oo ? e : null;
  } catch {
    return null;
  }
}
var Po = (e) => {
  try {
    return rt(e);
  } catch {
    return null;
  }
};
function Fo({ account: e, toast: t, go: n }) {
  let [i, a] = (0, V.useState)(void 0),
    [o, s] = (0, V.useState)(!1),
    [c, l] = (0, V.useState)(``),
    [u, d] = (0, V.useState)(null),
    [f, p] = (0, V.useState)(!1);
  (0, V.useEffect)(() => {
    a(No() ?? !1);
  }, []);
  let m = r({
      queryKey: [`stocksEligibility`],
      queryFn: async () => {
        let e = await $(`/api/stocks/eligibility`);
        if (!e.ok) throw Error(`eligibility unavailable`);
        return e.json();
      },
      staleTime: 6e5,
      retry: 1,
    }),
    h = m.data?.allowed === !0,
    g = r({
      queryKey: [`stocksList`],
      queryFn: async () => {
        let e = await $(`/api/stocks/list`);
        if (!e.ok) throw Error(`list unavailable`);
        return (await e.json()).items;
      },
      enabled: h && !!i,
      staleTime: 36e5,
      retry: 1,
    }),
    _ = async () => {
      try {
        if (
          !(
            await $(`/api/stocks/attest`, {
              method: `POST`,
              headers: { "content-type": `application/json` },
              body: JSON.stringify({ wallet: e ?? void 0, version: Oo }),
            })
          ).ok
        ) {
          t(`Not available in your region`);
          return;
        }
        let n = {
          version: Oo,
          at: new Date().toISOString(),
          country: m.data?.country ?? null,
        };
        try {
          localStorage.setItem(ko, JSON.stringify(n));
        } catch {}
        a(n);
      } catch {
        t(`Couldn't record confirmation — try again`);
      }
    },
    v = (e) => {
      navigator.clipboard?.writeText(e).then(() => t(`Address copied`));
    },
    y = g.data ?? [],
    b = c.trim().toUpperCase(),
    x = b
      ? y.filter(
          (e) =>
            e.symbol.toUpperCase().includes(b) ||
            e.name.toUpperCase().includes(b)
        )
      : y,
    S = () =>
      (0, J.jsxs)(`div`, {
        className: `card`,
        style: {
          marginTop: `1rem`,
          fontSize: `0.85rem`,
          color: `var(--ink-soft)`,
          lineHeight: 1.6,
        },
        children: [
          (0, J.jsxs)(`button`, {
            className: `btn ghost sm`,
            onClick: () => p((e) => !e),
            children: [f ? `Hide` : `Read`, ` the disclosures`],
          }),
          f &&
            (0, J.jsxs)(`ol`, {
              style: {
                marginTop: `0.9rem`,
                paddingLeft: `1.2rem`,
                display: `grid`,
                gap: `0.5rem`,
              },
              children: [
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Who we are not.` }),
                    ` Offyield is not registered with the U.S. Securities and Exchange Commission or any other regulator as a broker, dealer, exchange, investment adviser or transfer agent, and is not licensed to distribute securities anywhere. This page is software that shows you a public list and public links`,
                    ``,
                    `.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `What these tokens are.` }),
                    ` Robinhood Stock Tokens are debt securities issued by Robinhood Assets (Jersey) Ltd that track the price of a stock or ETF. They are not shares. You get economic exposure, not ownership, voting rights or direct dividends. The issuer can pause, upgrade or burn tokens under its terms. Offyield is independent and not affiliated with Robinhood.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Who may hold them.` }),
                    ` Per the issuer, Stock Tokens are not available in the United States or to U.S. persons, nor in Canada, the United Kingdom or Switzerland. This page is hidden in those regions and you confirmed you are outside them. If that is not true, stop here.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Fees and conflicts.` }),
                    ` `,
                    `Offyield charges nothing for this page and earns nothing from any venue, token or trade. There are no referral, affiliate or order-flow arrangements. Venues charge their own fees, which you see on their site before you sign.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `What the list is.` }),
                    ` Every token marked active in the issuer's own registry on Robinhood Chain, shown in alphabetical order, unfiltered, refreshed about hourly. Nothing is featured, ranked, trending or recommended. Search only narrows what is on screen.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Venues.` }),
                    ` The venues are listed alphabetically. There is no default and Offyield does not route, quote or execute anything`,
                    ``,
                    `. The Uniswap link prefills USDG as the input only because USDG is the asset in your Offyield vault; you can change it there. On any venue the trade, its price, its slippage and its execution are between you and that venue.`,
                    ``,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Execution risk.` }),
                    ` On-chain swaps can be front-run or sandwiched, prices can move between quote and settlement, and liquidity can be thin. Set slippage on the venue. A confirmed transaction cannot be reversed.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Security.` }),
                    ` You sign from your own wallet. Verify the token address against the issuer's registry before you trade; a token with the same name and a different address is not a Robinhood Stock Token. Offyield never asks for keys and never holds tokens for you.`,
                  ],
                }),
                (0, J.jsxs)(`li`, {
                  children: [
                    (0, J.jsx)(`b`, { children: `Not advice.` }),
                    ` Nothing here is an offer, solicitation, recommendation or advice to buy, sell or hold anything. Do your own research, including the issuer's prospectus and final terms, and the laws that apply to you.`,
                  ],
                }),
                !1,
              ],
            }),
        ],
      });
  if (m.isLoading || i === void 0)
    return (0, J.jsx)(`div`, {
      className: `card pad-lg fade-in`,
      style: { color: `var(--ink-faint)` },
      children: `Checking availability…`,
    });
  if (m.isError || !h) {
    let e = m.isError || m.data?.reason === `unknown`;
    return (0, J.jsx)(`div`, {
      role: `dialog`,
      "aria-modal": `true`,
      "aria-labelledby": `stocks-restricted-title`,
      style: {
        position: `fixed`,
        inset: 0,
        zIndex: 60,
        background: `rgba(13,13,15,0.55)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `1.25rem`,
      },
      children: (0, J.jsxs)(`div`, {
        className: `card pad-lg fade-in`,
        style: {
          maxWidth: `32rem`,
          width: `100%`,
          boxShadow: `0 24px 64px rgba(0,0,0,0.35)`,
        },
        children: [
          (0, J.jsx)(`div`, {
            className: `eyebrow`,
            style: { marginBottom: `0.6rem` },
            children: `Stocks`,
          }),
          (0, J.jsx)(`h2`, {
            id: `stocks-restricted-title`,
            style: {
              margin: `0 0 0.75rem`,
              fontSize: `1.4rem`,
              letterSpacing: `-0.01em`,
            },
            children: e
              ? `We couldn't confirm your region`
              : `Restricted in your region`,
          }),
          (0, J.jsx)(`p`, {
            style: {
              color: `var(--ink-soft)`,
              lineHeight: 1.6,
              fontSize: `0.95rem`,
              margin: 0,
            },
            children: `Robinhood Stock Tokens are securities issued by Robinhood Assets (Jersey) Ltd under Regulation S of the U.S. Securities Act of 1933. Under the issuer's prospectus they may not be offered, sold or delivered in the United States or to U.S. persons, and they are also restricted in Canada, the United Kingdom and Switzerland.`,
          }),
          (0, J.jsx)(`p`, {
            style: {
              color: `var(--ink-soft)`,
              lineHeight: 1.6,
              fontSize: `0.95rem`,
              margin: `0.75rem 0 0`,
            },
            children: e
              ? `Offyield follows those restrictions and could not determine where you are, so this section stays closed. Everything else in Offyield works as normal.`
              : `Offyield follows those restrictions, so this section is closed where you are. Everything else in Offyield works as normal.`,
          }),
          (0, J.jsx)(`div`, {
            style: {
              marginTop: `1.25rem`,
              display: `flex`,
              justifyContent: `flex-end`,
            },
            children: (0, J.jsxs)(`button`, {
              className: `btn`,
              onClick: () => n(`overview`),
              children: [
                `Back to overview `,
                (0, J.jsx)(`span`, { className: `circ`, children: Y.chevron }),
              ],
            }),
          }),
        ],
      }),
    });
  }
  return i
    ? (0, J.jsxs)(`div`, {
        className: `fade-in`,
        children: [
          !1,
          (0, J.jsxs)(`div`, {
            className: `card pad-lg`,
            children: [
              (0, J.jsxs)(`div`, {
                className: `section-title`,
                children: [
                  (0, J.jsxs)(`div`, {
                    children: [
                      (0, J.jsx)(`div`, {
                        className: `eyebrow`,
                        children: `Stocks on Robinhood Chain`,
                      }),
                      (0, J.jsx)(`h2`, { children: `Stock Tokens` }),
                    ],
                  }),
                  (0, J.jsxs)(`span`, {
                    className: `pill ok`,
                    children: [
                      (0, J.jsx)(`span`, { className: `dot` }),
                      `Issuer registry · alphabetical · no fee`,
                      ``,
                    ],
                  }),
                ],
              }),
              (0, J.jsxs)(`div`, {
                style: {
                  fontSize: `0.85rem`,
                  color: `var(--ink-soft)`,
                  lineHeight: 1.55,
                  marginBottom: `0.9rem`,
                },
                children: [
                  `The full list of active Robinhood Stock Tokens, straight from the issuer's registry. Pick one to see its canonical address and the venues where it trades. You leave Offyield to trade; the venue's fees and execution are theirs`,
                  ``,
                  `. Interest you spend to your wallet arrives as USDG, and what you do with it there is up to you.`,
                ],
              }),
              (0, J.jsxs)(`div`, {
                className: `form-row`,
                style: { maxWidth: `22rem` },
                children: [
                  (0, J.jsx)(`label`, {
                    className: `field-label`,
                    children: `Search the list`,
                  }),
                  (0, J.jsx)(`input`, {
                    className: `input`,
                    value: c,
                    onChange: (e) => l(e.target.value),
                    placeholder: `Ticker or company`,
                  }),
                ],
              }),
              g.isLoading &&
                (0, J.jsx)(`div`, {
                  style: { color: `var(--ink-faint)` },
                  children: `Loading the issuer's registry…`,
                }),
              g.isError &&
                (0, J.jsxs)(`div`, {
                  style: { color: `var(--ink-soft)` },
                  children: [
                    Y.warn,
                    ` Couldn't load the issuer's registry — showing nothing rather than a stale copy.`,
                  ],
                }),
              !g.isLoading &&
                !g.isError &&
                x.length === 0 &&
                (0, J.jsx)(`div`, {
                  style: { color: `var(--ink-faint)` },
                  children: `Nothing matches.`,
                }),
              (0, J.jsx)(`div`, {
                style: {
                  maxHeight: `26rem`,
                  overflowY: `auto`,
                  border: `1px solid var(--hairline)`,
                  borderRadius: `var(--radius-sm)`,
                  display: x.length ? `block` : `none`,
                },
                children: x.map((e) =>
                  (0, J.jsxs)(
                    `button`,
                    {
                      className: `route-line`,
                      onClick: () => d(e),
                      style: {
                        width: `100%`,
                        background:
                          u?.address === e.address
                            ? `rgba(200,232,96,0.12)`
                            : `transparent`,
                        border: `none`,
                        borderBottom: `1px solid var(--hairline)`,
                        padding: `0.6rem 0.9rem`,
                        cursor: `pointer`,
                        font: `inherit`,
                        textAlign: `left`,
                      },
                      children: [
                        (0, J.jsxs)(`span`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `0.7rem`,
                          },
                          children: [
                            e.logoUrl
                              ? (0, J.jsx)(`img`, {
                                  src: e.logoUrl,
                                  alt: ``,
                                  width: `22`,
                                  height: `22`,
                                  style: { borderRadius: `50%` },
                                  loading: `lazy`,
                                })
                              : (0, J.jsx)(`span`, {
                                  style: {
                                    width: 22,
                                    height: 22,
                                    borderRadius: `50%`,
                                    background: `var(--hairline)`,
                                    display: `inline-block`,
                                  },
                                }),
                            (0, J.jsx)(`b`, {
                              style: { fontWeight: 500, minWidth: `4.5rem` },
                              children: e.symbol,
                            }),
                            (0, J.jsx)(`span`, {
                              style: { color: `var(--ink-soft)` },
                              children: e.name,
                            }),
                          ],
                        }),
                        (0, J.jsx)(`span`, {
                          className: `addr-mono hide-m`,
                          children: ta(e.address),
                        }),
                      ],
                    },
                    e.address
                  )
                ),
              }),
              (0, J.jsx)(`div`, {
                style: {
                  fontSize: `0.78rem`,
                  color: `var(--ink-faint)`,
                  marginTop: `0.6rem`,
                },
                children: y.length
                  ? `${y.length} active tokens · source: api.robinhood.com/rhj/assets · chain ${ze}`
                  : ``,
              }),
            ],
          }),
          u &&
            (0, J.jsxs)(`div`, {
              className: `card pad-lg`,
              style: { marginTop: `1rem` },
              children: [
                (0, J.jsxs)(`div`, {
                  className: `section-title`,
                  children: [
                    (0, J.jsxs)(`div`, {
                      children: [
                        (0, J.jsx)(`div`, {
                          className: `eyebrow`,
                          children: u.symbol,
                        }),
                        (0, J.jsx)(`h2`, { children: u.name }),
                      ],
                    }),
                    (0, J.jsxs)(`button`, {
                      className: `btn ghost sm`,
                      onClick: () => d(null),
                      children: [Y.x, ` Close`],
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  className: `route-line`,
                  children: [
                    (0, J.jsx)(`span`, {
                      style: { color: `var(--ink-soft)` },
                      children: `Canonical address`,
                    }),
                    (0, J.jsxs)(`span`, {
                      style: {
                        display: `flex`,
                        gap: `0.5rem`,
                        alignItems: `center`,
                      },
                      children: [
                        (0, J.jsx)(`span`, {
                          className: `addr-mono`,
                          children: u.address,
                        }),
                        (0, J.jsx)(`button`, {
                          className: `btn ghost sm`,
                          onClick: () => v(u.address),
                          children: `Copy`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  className: `route-line`,
                  children: [
                    (0, J.jsx)(`span`, {
                      style: { color: `var(--ink-soft)` },
                      children: `Explorer`,
                    }),
                    (0, J.jsx)(`a`, {
                      className: `addr-mono`,
                      href: `${jo}/token/${u.address}`,
                      target: `_blank`,
                      rel: `noreferrer noopener`,
                      style: { color: `inherit` },
                      children: `Blockscout ↗`,
                    }),
                  ],
                }),
                u.isin &&
                  (0, J.jsxs)(`div`, {
                    className: `route-line`,
                    children: [
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--ink-soft)` },
                        children: `Underlying ISIN`,
                      }),
                      (0, J.jsx)(`span`, {
                        className: `addr-mono`,
                        children: u.isin,
                      }),
                    ],
                  }),
                (0, J.jsxs)(`div`, {
                  className: `route-line`,
                  children: [
                    (0, J.jsx)(`span`, {
                      style: { color: `var(--ink-soft)` },
                      children: `Issuer`,
                    }),
                    (0, J.jsx)(`span`, {
                      children: `Robinhood Assets (Jersey) Ltd · debt security tracking the underlying`,
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  style: { marginTop: `1rem` },
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `field-label`,
                      children: `Venues where it trades (alphabetical, no default)`,
                    }),
                    (0, J.jsx)(`div`, {
                      style: {
                        display: `flex`,
                        gap: `0.6rem`,
                        flexWrap: `wrap`,
                      },
                      children: Mo.map((e) =>
                        (0, J.jsxs)(
                          `a`,
                          {
                            className: `btn ghost`,
                            href: e.url(u.address),
                            target: `_blank`,
                            rel: `noreferrer noopener`,
                            children: [e.name, ` `, Y.ext],
                          },
                          e.name
                        )
                      ),
                    }),
                    (0, J.jsxs)(`div`, {
                      style: {
                        fontSize: `0.8rem`,
                        color: `var(--ink-faint)`,
                        marginTop: `0.5rem`,
                        lineHeight: 1.5,
                      },
                      children: [
                        Mo.map((e) =>
                          (0, J.jsxs)(
                            `div`,
                            {
                              children: [
                                (0, J.jsxs)(`b`, {
                                  style: { fontWeight: 500 },
                                  children: [e.name, `:`],
                                }),
                                ` `,
                                e.note,
                                `.`,
                              ],
                            },
                            e.name
                          )
                        ),
                        (0, J.jsx)(`div`, {
                          style: { marginTop: `0.35rem` },
                          children: `You sign on the venue from your own wallet. Offyield is not part of the transaction.`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          (0, J.jsx)(S, {}),
        ],
      })
    : (0, J.jsxs)(`div`, {
        className: `card pad-lg fade-in`,
        children: [
          (0, J.jsx)(`div`, {
            className: `section-title`,
            children: (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`div`, {
                  className: `eyebrow`,
                  children: `Before you continue`,
                }),
                (0, J.jsx)(`h2`, { children: `Please confirm` }),
              ],
            }),
          }),
          (0, J.jsx)(`p`, {
            style: {
              color: `var(--ink-soft)`,
              lineHeight: 1.6,
              fontSize: `0.95rem`,
            },
            children: `This page shows the public list of Robinhood Stock Tokens on Robinhood Chain and links to third-party venues where they trade. Offyield does not sell, offer, recommend or route into them, and takes no fee. The issuer restricts who may hold them, so we need one confirmation from you.`,
          }),
          (0, J.jsxs)(`label`, {
            style: {
              display: `flex`,
              gap: `0.7rem`,
              alignItems: `flex-start`,
              marginTop: `1rem`,
              fontSize: `0.9rem`,
              lineHeight: 1.55,
              cursor: `pointer`,
            },
            children: [
              (0, J.jsx)(`input`, {
                type: `checkbox`,
                checked: o,
                onChange: (e) => s(e.target.checked),
                style: { marginTop: `0.3rem` },
              }),
              (0, J.jsxs)(`span`, {
                children: [
                  `I confirm that I am not a U.S. person as defined in Regulation S, that I am not located in the United States, Canada, the United Kingdom or Switzerland, that I have read the disclosures below`,
                  `,`,
                  ` and that I understand Offyield is not a broker and this page is not an offer or recommendation.`,
                ],
              }),
            ],
          }),
          (0, J.jsx)(`div`, {
            style: {
              marginTop: `1rem`,
              display: `flex`,
              gap: `0.6rem`,
              flexWrap: `wrap`,
            },
            children: (0, J.jsxs)(`button`, {
              className: `btn`,
              disabled: !o,
              onClick: _,
              children: [
                `Continue `,
                (0, J.jsx)(`span`, { className: `circ`, children: Y.chevron }),
              ],
            }),
          }),
          (0, J.jsx)(S, {}),
        ],
      });
}
function Io({ wallets: e, onPick: t, onClose: n }) {
  let r = _e();
  return (0, J.jsx)(`div`, {
    role: `dialog`,
    "aria-modal": `true`,
    "aria-label": `Connect a wallet`,
    onClick: n,
    style: {
      position: `fixed`,
      inset: 0,
      background: `rgba(13,13,15,0.35)`,
      zIndex: 80,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: `1rem`,
    },
    children: (0, J.jsxs)(`div`, {
      className: `card pad-lg`,
      onClick: (e) => e.stopPropagation(),
      style: {
        width: `100%`,
        maxWidth: `26rem`,
        maxHeight: `90vh`,
        overflowY: `auto`,
      },
      children: [
        (0, J.jsxs)(`div`, {
          className: `section-title`,
          children: [
            (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`div`, {
                  className: `eyebrow`,
                  children: e.length
                    ? `Choose MetaMask`
                    : r
                    ? `Open in MetaMask`
                    : `MetaMask not found`,
                }),
                (0, J.jsx)(`h2`, { children: `Connect MetaMask` }),
              ],
            }),
            (0, J.jsx)(`button`, {
              className: `btn ghost sm`,
              onClick: n,
              "aria-label": `Close`,
              children: Y.x,
            }),
          ],
        }),
        e.length > 0 &&
          (0, J.jsx)(`div`, {
            style: { display: `grid`, gap: `0.5rem` },
            children: e.map((e) =>
              (0, J.jsxs)(
                `button`,
                {
                  className: `btn ghost`,
                  style: {
                    justifyContent: `flex-start`,
                    gap: `0.7rem`,
                    width: `100%`,
                  },
                  onClick: () => t(e.rdns),
                  children: [
                    e.icon
                      ? (0, J.jsx)(`img`, {
                          src: e.icon,
                          alt: ``,
                          width: `24`,
                          height: `24`,
                          style: { borderRadius: `0.35rem` },
                        })
                      : (0, J.jsx)(`span`, {
                          style: {
                            width: 24,
                            height: 24,
                            display: `inline-flex`,
                          },
                          children: Y.wallet,
                        }),
                    e.name,
                  ],
                },
                e.rdns
              )
            ),
          }),
        e.length === 0 &&
          r &&
          (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsx)(`div`, {
                style: {
                  fontSize: `0.9rem`,
                  color: `var(--ink-soft)`,
                  lineHeight: 1.55,
                  marginBottom: `0.9rem`,
                },
                children: `Phone browsers can't hold a wallet. Open this page inside the MetaMask app's browser, then connect there.`,
              }),
              (0, J.jsx)(`div`, {
                style: { display: `grid`, gap: `0.5rem` },
                children: I().map((e) =>
                  (0, J.jsxs)(
                    `a`,
                    {
                      className: `btn ghost`,
                      style: { justifyContent: `center`, width: `100%` },
                      href: e.href,
                      rel: `noreferrer noopener`,
                      children: [`Open in `, e.name],
                    },
                    e.name
                  )
                ),
              }),
            ],
          }),
        e.length === 0 &&
          !r &&
          (0, J.jsxs)(`div`, {
            style: {
              fontSize: `0.9rem`,
              color: `var(--ink-soft)`,
              lineHeight: 1.55,
            },
            children: [
              `Offyield works with MetaMask.`,
              ` `,
              (0, J.jsx)(`a`, {
                href: `https://metamask.io/download/`,
                target: `_blank`,
                rel: `noreferrer noopener`,
                style: { color: `inherit` },
                children: `Install MetaMask ↗`,
              }),
              `, then reload this page. On a phone, open this page inside the MetaMask app's browser instead.`,
            ],
          }),
      ],
    }),
  });
}
var Lo = null,
  $ = (e, t = {}) =>
    fetch(
      e,
      Lo
        ? { ...t, headers: { ...(t.headers || {}), "x-offyield-wallet": Lo } }
        : t
    ),
  Ro = [
    { id: `overview`, label: `Overview`, icon: Y.grid },
    { id: `card`, label: `Card`, icon: Y.card, soon: !0 },
    { id: `vault`, label: `Vault`, icon: Y.vault },
    { id: `spend`, label: `Spend`, icon: Y.bolt },
    { id: `stocks`, label: `Stocks`, icon: Y.stocks },
    { id: `activity`, label: `Activity`, icon: Y.act },
    { id: `chain`, label: `Chain`, icon: Y.chain },
  ];
function zo() {
  let [e, t] = (0, V.useState)(`overview`),
    [n, r] = (0, V.useState)(null);
  Lo = n;
  let [o, s] = (0, V.useState)(null),
    [c, l] = (0, V.useState)([]),
    [u, d] = (0, V.useState)(!1),
    [f, p] = (0, V.useState)({
      issued: !1,
      physical: !1,
      frozen: !1,
      limit: 250,
      name: `A. ANON`,
    }),
    [m, h] = (0, V.useState)([]),
    g = i(),
    _ = oa(),
    v = ga(_.PROJECTION),
    y = v.isError ? void 0 : v.data,
    [x, S] = (0, V.useState)(null),
    C = Ro.map((e) =>
      e.id === `card`
        ? _.CARD_TAB
          ? { ...e, label: `Cards`, soon: !1 }
          : _.MY_CARDS
          ? { ...e, label: `My cards`, soon: !1 }
          : e
        : e
    ),
    w = ra(n),
    T = aa(n),
    E = ia(n),
    D = w.isError,
    O = D ? void 0 : w.data,
    k = O ? O.spendable : 0n,
    A = O ? O.spent + k : 0n,
    j = (0, V.useRef)(null),
    [, M] = (0, V.useState)(!1);
  (0, V.useEffect)(
    () => (
      (document.documentElement.style.fontSize = `16px`),
      () => {
        document.documentElement.style.fontSize = ``;
      }
    ),
    []
  ),
    (0, V.useEffect)(() => Ee((e) => r(e?.[0] ?? null)), [n]);
  let [N, P] = (0, V.useState)([]),
    [F, ee] = (0, V.useState)(!1);
  (0, V.useEffect)(() => {
    if (!_.WALLET_REACH) return;
    let e = ue(() => {
      P(me()), M(Me());
    });
    return P(me()), e;
  }, [_.WALLET_REACH]),
    (0, V.useEffect)(() => {
      let e = !0;
      return (
        pe().then((t) => {
          e && t && r((e) => e ?? t);
        }),
        () => {
          e = !1;
        }
      );
    }, []),
    (0, V.useEffect)(() => {
      if (!n) return;
      Fe();
      let e = Date.now(),
        t = () => {
          let t = Date.now();
          t - e > 3e4 && ((e = t), Fe(t));
        },
        i = [`pointerdown`, `pointermove`, `keydown`, `wheel`, `touchstart`];
      i.forEach((e) => window.addEventListener(e, t, { passive: !0 }));
      let a = setInterval(() => {
        Ne() ||
          (Te(),
          r(null),
          L(`Disconnected after 30 minutes without activity`, `info`));
      }, 3e4);
      return () => {
        i.forEach((e) => window.removeEventListener(e, t)), clearInterval(a);
      };
    }, [n]),
    (0, V.useEffect)(() => {
      M(Me());
    }, []),
    (0, V.useEffect)(() => {
      h([]), (j.current = null);
    }, [n]),
    (0, V.useEffect)(() => {
      if (!O) return;
      let e = Number(A) / 1e6;
      (j.current === e && m.length > 1) ||
        ((j.current = e), h((t) => [...t.slice(-47), { v: e, t: Date.now() }]));
    }, [O]);
  let I = (e) => {
      t(e), d(!1);
    },
    L = (e, t = `info`) => {
      let n = Date.now() + Math.random();
      l((r) => [...r.slice(-3), { id: n, msg: e, kind: t }]),
        setTimeout(
          () =>
            l((e) => e.map((e) => (e.id === n ? { ...e, leaving: !0 } : e))),
          3800
        ),
        setTimeout(() => l((e) => e.filter((e) => e.id !== n)), 4200);
    },
    R = () => {
      try {
        return window.localStorage;
      } catch {
        return null;
      }
    },
    [ne, re] = (0, V.useState)(!1),
    [ie, ae] = (0, V.useState)(0),
    [oe, se] = (0, V.useState)(!1),
    [ce, le] = (0, V.useState)(!1);
  (0, V.useEffect)(() => {
    Ii(R()) && se(!0), le(R()?.getItem(`offyield.pref.hideBalances`) === `1`);
  }, []);
  let de = (e) => {
    le(e);
    try {
      R()?.setItem(`offyield.pref.hideBalances`, e ? `1` : `0`);
    } catch {}
  };
  (0, V.useEffect)(() => {
    let e = Ii(R()) ? Li(R()) : 0;
    if (!e || oe) return;
    let t = Date.now(),
      n = () => {
        t = Date.now();
      },
      r = [`pointerdown`, `pointermove`, `keydown`, `wheel`, `touchstart`];
    r.forEach((e) => window.addEventListener(e, n, { passive: !0 }));
    let i = setInterval(() => {
      Date.now() - t > e * 6e4 && se(!0);
    }, 1e4);
    return () => {
      r.forEach((e) => window.removeEventListener(e, n)), clearInterval(i);
    };
  }, [oe, ie]);
  let fe = () =>
      navigator.clipboard?.writeText(n).then(
        () => L(`Public key copied`, `ok`),
        () => L(`Couldn't copy. Select the key in Settings.`, `bad`)
      ),
    _e = async ({ silent: e } = {}) => {
      e || L(`Wallet disconnected`, `ok`),
        await xe(),
        setTimeout(() => window.location.replace(`/`), 900);
    },
    ye = () => {
      g.invalidateQueries({ queryKey: [`position`] }),
        g.invalidateQueries({ queryKey: [`activity`] }),
        g.invalidateQueries({ queryKey: [`shares`] });
    },
    be = async () => {
      if (_.WALLET_REACH && (N.length > 1 || !Me())) {
        ee(!0);
        return;
      }
      try {
        r(await Ce());
      } catch (e) {
        L(e.message);
      }
    },
    Se = async (e) => {
      ee(!1);
      try {
        r(await Ce(e));
      } catch (e) {
        L(e.message);
      }
    },
    z =
      (e, t, n) =>
      async (...r) => {
        s(e);
        try {
          await t(...r), L(n), ye();
        } catch (e) {
          L(e.message), ye();
        } finally {
          s(null);
        }
      },
    we = z(
      `deposit`,
      (e) => Oe(n, e),
      `Deposited — principal is locked and earning`
    ),
    De = z(
      `withdraw`,
      (e, t) => te(n, e, n, t),
      `Principal withdrawn to your wallet`
    ),
    ke = z(
      `exit`,
      (e) => Ae(n, n, e),
      `Position closed — principal and interest sent to your wallet`
    ),
    je = z(
      `exitInKind`,
      () => ge(n, n),
      `Position closed — venue shares sent to your wallet`
    ),
    Pe = z(`spend`, (e) => he(n, e, n), `Interest spent to your wallet`),
    Ie = z(`mint`, () => ve(n, 1000000000n), `Minted 1,000 test USDG`),
    Le = {
      overview: [`Overview`, `Principal locked, interest spendable`],
      card: _.CARD_TAB
        ? [
            `Cards`,
            _.USDG_PAY && oo
              ? `Buy a prepaid card with USDG`
              : `Buy a prepaid card with USDC or your interest`,
          ]
        : _.MY_CARDS
        ? [`My cards`, `Every card you bought with your interest`]
        : [`Card preview`, `The card program is in development`],
      vault: [
        `Vault`,
        X
          ? `Deposit and withdraw test ${Z.asset} principal`
          : `Deposit and withdraw ${Z.asset} principal`,
      ],
      spend: [
        `Spend`,
        X
          ? `Real testnet draws from accrued interest only`
          : `Draws from accrued interest only`,
      ],
      stocks: [
        `Stocks`,
        `The issuer’s public list of Stock Tokens, and where they trade`,
      ],
      activity: [`Activity`, `Your on-chain vault events`],
      chain: [`Chain`, `${Z.name} · id ${Z.id}`],
    };
  return (0, J.jsx)(`div`, {
    id: `app`,
    className: ce ? `hide-amounts` : void 0,
    children: (0, J.jsxs)(`div`, {
      className: `app`,
      children: [
        (0, J.jsx)(`div`, {
          className: `scrim ` + (u ? `show` : ``),
          onClick: () => d(!1),
        }),
        (0, J.jsxs)(`aside`, {
          className: `sidebar ` + (u ? `open` : ``),
          inert: oe,
          children: [
            (0, J.jsx)(a, {
              className: `brand`,
              to: `/`,
              children: (0, J.jsx)(`img`, {
                className: `brand-mark`,
                src: `/offyield-logo.png`,
                alt: `Offyield`,
                width: `128`,
                height: `128`,
              }),
            }),
            (0, J.jsx)(`nav`, {
              className: `nav`,
              children: C.map((t) =>
                t.soon
                  ? (0, J.jsxs)(
                      `span`,
                      {
                        className: `nav-item soon`,
                        "aria-disabled": `true`,
                        title: `Not available yet`,
                        children: [
                          t.icon,
                          t.label,
                          (0, J.jsx)(`em`, {
                            className: `nav-soon`,
                            children: `Soon`,
                          }),
                        ],
                      },
                      t.id
                    )
                  : (0, J.jsxs)(
                      `button`,
                      {
                        className: `nav-item ` + (e === t.id ? `active` : ``),
                        onClick: () => I(t.id),
                        children: [t.icon, t.label],
                      },
                      t.id
                    )
              ),
            }),
            (0, J.jsx)(`div`, { className: `side-spacer` }),
            n
              ? (0, J.jsx)(Yi, {
                  account: n,
                  balance: (0, J.jsxs)(J.Fragment, {
                    children: [
                      b(k, 4),
                      ` `,
                      (0, J.jsxs)(`small`, { children: [Z.asset, ` yield`] }),
                    ],
                  }),
                  onCopy: fe,
                  onSettings: () => re(!0),
                  onDisconnect: () => _e(),
                  settingsOn: _.SETTINGS,
                })
              : (0, J.jsxs)(`button`, {
                  className: `wallet-chip`,
                  style: {
                    cursor: `pointer`,
                    textAlign: `left`,
                    border: `none`,
                    font: `inherit`,
                  },
                  onClick: be,
                  children: [
                    (0, J.jsxs)(`div`, {
                      className: `addr`,
                      children: [Y.wallet, `Connect MetaMask`],
                    }),
                    (0, J.jsx)(`div`, {
                      className: `bal`,
                      children: (0, J.jsxs)(`small`, {
                        children: [
                          X ? `Robinhood testnet` : `Robinhood Chain`,
                          ` · `,
                          Z.id,
                        ],
                      }),
                    }),
                  ],
                }),
          ],
        }),
        (0, J.jsxs)(`main`, {
          className: `main`,
          inert: oe,
          children: [
            (0, J.jsxs)(`div`, {
              className: `topbar`,
              children: [
                (0, J.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    gap: `0.9rem`,
                  },
                  children: [
                    (0, J.jsx)(`button`, {
                      className: `menu-btn`,
                      onClick: () => d(!0),
                      children: Y.menu,
                    }),
                    (0, J.jsxs)(`div`, {
                      className: `title`,
                      children: [
                        (0, J.jsx)(`h1`, { children: Le[e][0] }),
                        (0, J.jsx)(`p`, { children: Le[e][1] }),
                      ],
                    }),
                  ],
                }),
                (0, J.jsx)(`div`, {
                  className: `actions`,
                  children: n
                    ? (0, J.jsxs)(`button`, {
                        className: `btn`,
                        onClick: () => I(`spend`),
                        children: [
                          `Spend `,
                          (0, J.jsx)(`span`, {
                            className: `circ`,
                            children: Y.chevron,
                          }),
                        ],
                      })
                    : (0, J.jsxs)(`button`, {
                        className: `btn`,
                        onClick: be,
                        children: [
                          `Connect MetaMask `,
                          (0, J.jsx)(`span`, {
                            className: `circ`,
                            children: Y.chevron,
                          }),
                        ],
                      }),
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `content`,
              children: [
                (0, J.jsxs)(`div`, {
                  className: `split-total`,
                  style: { marginBottom: `1.25rem` },
                  children: [
                    (0, J.jsx)(`span`, {
                      children: X
                        ? `Testnet beta · fake ${Z.asset}, real vault contract on ${Z.name} (${Z.id}) · balances have no value`
                        : `Early access · real ${Z.asset} on ${Z.name} · deposits capped while we scale up`,
                    }),
                    O?.paused &&
                      (0, J.jsx)(`span`, {
                        style: { color: `var(--bad, #e5484d)` },
                        children: `Vault paused — withdrawals still work`,
                      }),
                  ],
                }),
                e === `overview` &&
                  (0, J.jsx)(wa, {
                    account: n,
                    pos: O,
                    failed: D,
                    spendable: k,
                    lifetime: A,
                    chart: m,
                    activity: T.data,
                    go: I,
                    myCards: _.MY_CARDS,
                    cardTab: _.CARD_TAB,
                    ff: _,
                    band: y,
                    onConnect: be,
                  }),
                e === `card` &&
                  (_.CARD_TAB
                    ? (0, J.jsxs)(J.Fragment, {
                        children: [
                          (0, J.jsx)(xo, {
                            account: n,
                            onConnect: be,
                            spendable: k,
                            failed: D,
                            toast: L,
                            payWithInterestOn: _.PAY_WITH_INTEREST,
                            reorder: x,
                            clearReorder: () => S(null),
                            myCards: _.MY_CARDS,
                            usdgOn: !!_.USDG_PAY && oo,
                            walletUsdg: O?.walletUsdg,
                          }),
                          _.MY_CARDS &&
                            (0, J.jsx)(`div`, {
                              style: { marginTop: `1rem` },
                              children: (0, J.jsx)(To, {
                                account: n,
                                go: I,
                                onBuy: () =>
                                  document
                                    .getElementById(`app`)
                                    ?.scrollIntoView({ behavior: `smooth` }),
                                onReorder: (e) => {
                                  S(e),
                                    document
                                      .getElementById(`app`)
                                      ?.scrollIntoView({ behavior: `smooth` });
                                },
                              }),
                            }),
                        ],
                      })
                    : _.MY_CARDS
                    ? (0, J.jsx)(To, {
                        account: n,
                        go: I,
                        onReorder: (e) => {
                          S(e), I(`spend`);
                        },
                      })
                    : (0, J.jsx)(Ta, {
                        card: f,
                        setCard: p,
                        spendable: k,
                        toast: L,
                      })),
                e === `vault` &&
                  (0, J.jsx)(ka, {
                    account: n,
                    pos: O,
                    failed: D,
                    busy: o,
                    shares: E.isError ? void 0 : E.data,
                    sharesFailed: E.isError,
                    onDeposit: we,
                    onWithdraw: De,
                    onExit: ke,
                    onExitInKind: je,
                    onMint: Ie,
                    toast: L,
                    ff: _,
                    band: y,
                  }),
                e === `spend` &&
                  (0, J.jsx)(So, {
                    account: n,
                    pos: O,
                    failed: D,
                    spendable: k,
                    busy: o,
                    onSpend: Pe,
                    toast: L,
                    reorder: x,
                    clearReorder: () => S(null),
                    payWithInterestOn: _.PAY_WITH_INTEREST,
                  }),
                e === `stocks` &&
                  (0, J.jsx)(Fo, { account: n, toast: L, go: I }),
                e === `activity` &&
                  (0, J.jsx)(Eo, {
                    account: n,
                    activity: T.data,
                    pos: O,
                    failed: T.isError,
                  }),
                e === `chain` &&
                  (0, J.jsx)(Do, { account: n, trustCenter: _.TRUST_CENTER }),
              ],
            }),
          ],
        }),
        (0, J.jsx)(`div`, {
          className: `toasts`,
          "aria-live": `polite`,
          inert: oe,
          children: c.map((e) =>
            (0, J.jsxs)(
              `div`,
              {
                className: `toast ` + e.kind + (e.leaving ? ` leaving` : ``),
                role: `status`,
                children: [
                  (0, J.jsx)(`span`, {
                    className: `t-ic`,
                    children:
                      e.kind === `ok` ? Y.check : e.kind === `bad` ? Y.x : null,
                  }),
                  e.msg,
                ],
              },
              e.id
            )
          ),
        }),
        ne &&
          !oe &&
          n &&
          _.SETTINGS &&
          (0, J.jsx)($i, {
            account: n,
            onClose: () => re(!1),
            toast: L,
            onDisconnect: _e,
            hideBalances: ce,
            setHideBalances: de,
            onLockNow: () => se(!0),
            lockVersion: ie,
            bumpLock: () => ae((e) => e + 1),
          }),
        oe &&
          (0, J.jsx)(ea, {
            onUnlock: () => {
              se(!1), L(`Unlocked`, `ok`);
            },
            onForgot: () => {
              Wi(R()), _e({ silent: !0 });
            },
          }),
        F &&
          !oe &&
          (0, J.jsx)(Io, { wallets: N, onPick: Se, onClose: () => ee(!1) }),
      ],
    }),
  });
}
var Bo = () => (0, J.jsx)(zo, {});
export { Bo as component };
