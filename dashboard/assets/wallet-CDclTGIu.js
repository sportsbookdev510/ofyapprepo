import {
  $ as e,
  A as t,
  At as n,
  B as r,
  C as i,
  Ct as a,
  Dt as o,
  E as s,
  Et as c,
  F as l,
  Ft as u,
  G as d,
  Gt as f,
  I as p,
  It as m,
  J as h,
  K as g,
  Kt as _,
  L as v,
  Lt as y,
  M as b,
  N as x,
  Nt as S,
  O as C,
  Ot as w,
  P as T,
  Pt as E,
  Q as D,
  R as O,
  Rt as k,
  S as A,
  T as ee,
  U as te,
  Ut as ne,
  V as re,
  Vt as ie,
  W as ae,
  Wt as oe,
  X as se,
  Y as ce,
  _ as le,
  at as ue,
  b as de,
  c as fe,
  ct as pe,
  d as me,
  f as he,
  ft as ge,
  h as _e,
  ht as ve,
  it as ye,
  j,
  k as be,
  l as xe,
  lt as Se,
  mt as Ce,
  o as M,
  ot as we,
  p as N,
  pt as Te,
  q as P,
  qt as F,
  st as Ee,
  t as De,
  w as Oe,
  x as I,
  y as ke,
  yt as Ae,
  z as je,
} from "./vault-2n0SjY1L.js";
import { t as L } from "./chain-Ee_88rpD.js";
function Me({ chain: e, currentChainId: t }) {
  if (!e) throw new oe();
  if (t !== e.id) throw new ne({ chain: e, currentChainId: t });
}
var Ne = new n(128);
async function R(t, n) {
  let {
    account: r = t.account,
    assertChainId: i = !0,
    chain: a = t.chain,
    accessList: o,
    authorizationList: s,
    blobs: u,
    data: m,
    dataSuffix: g = typeof t.dataSuffix == `string`
      ? t.dataSuffix
      : t.dataSuffix?.value,
    gas: _,
    gasPrice: y,
    maxFeePerBlobGas: b,
    maxFeePerGas: x,
    maxPriorityFeePerGas: S,
    nonce: C,
    type: w,
    value: T,
    ...E
  } = n;
  if (r === void 0)
    throw new p({ docsPath: `/docs/actions/wallet/sendTransaction` });
  let D = r ? F(r) : null,
    O;
  try {
    ye(n);
    let r = await (async () => {
      if (n.to) return n.to;
      if (n.to !== null && s && s.length > 0)
        return await se({ authorization: s[0] }).catch(() => {
          throw new f(
            "`to` is required. Could not infer from `authorizationList`."
          );
        });
    })();
    if (D?.type === `json-rpc` || D === null) {
      let n;
      a !== null &&
        ((n = await e(t, P, `getChainId`)({})),
        i && Me({ currentChainId: n, chain: a }));
      let l = t.chain?.formatters?.transactionRequest?.format,
        d = (l || we)(
          {
            ...Ee(E, { format: l }),
            accessList: o,
            account: D,
            authorizationList: s,
            blobs: u,
            chainId: n,
            data: g ? c([m ?? `0x`, g]) : m,
            gas: _,
            gasPrice: y,
            maxFeePerBlobGas: b,
            maxFeePerGas: x,
            maxPriorityFeePerGas: S,
            nonce: C,
            to: r,
            type: w,
            value: T,
          },
          `sendTransaction`
        ),
        f = Ne.get(t.uid),
        p = f ? `wallet_sendTransaction` : `eth_sendTransaction`;
      try {
        return await t.request({ method: p, params: [d] }, { retryCount: 0 });
      } catch (e) {
        if (f === !1) throw e;
        let n = e;
        if (
          n.name === `InvalidInputRpcError` ||
          n.name === `InvalidParamsRpcError` ||
          n.name === `MethodNotFoundRpcError` ||
          n.name === `MethodNotSupportedRpcError`
        )
          return await t
            .request(
              { method: `wallet_sendTransaction`, params: [d] },
              { retryCount: 0 }
            )
            .then((e) => (Ne.set(t.uid, !0), e))
            .catch((e) => {
              let r = e;
              throw r.name === `MethodNotFoundRpcError` ||
                r.name === `MethodNotSupportedRpcError`
                ? (Ne.set(t.uid, !1), n)
                : r;
            });
        throw n;
      }
    }
    if (D?.type === `local`) {
      let n = (() => {
          if (!D.nonceManager || C !== void 0) return D.nonceManager;
          let e = D.nonceManager;
          return {
            consume(t) {
              return (
                (O = { address: t.address, chainId: t.chainId }), e.consume(t)
              );
            },
            get(t) {
              return e.get(t);
            },
            increment(t) {
              return e.increment(t);
            },
            reset(t) {
              return e.reset(t);
            },
          };
        })(),
        i = await e(
          t,
          d,
          `prepareTransactionRequest`
        )({
          account: D,
          accessList: o,
          authorizationList: s,
          blobs: u,
          chain: a,
          data: g ? c([m ?? `0x`, g]) : m,
          gas: _,
          gasPrice: y,
          maxFeePerBlobGas: b,
          maxFeePerGas: x,
          maxPriorityFeePerGas: S,
          nonce: C,
          nonceManager: n,
          parameters: [...ae, `sidecars`],
          type: w,
          value: T,
          ...E,
          to: r,
        }),
        f = a?.serializers?.transaction,
        p = await D.signTransaction(i, { serializer: f });
      return await e(t, l, `sendRawTransaction`)({ serializedTransaction: p });
    }
    throw D?.type === `smart`
      ? new v({
          metaMessages: [
            "Consider using the `sendUserOperation` Action instead.",
          ],
          docsPath: `/docs/actions/bundler/sendUserOperation`,
          type: `smart`,
        })
      : new v({
          docsPath: `/docs/actions/wallet/sendTransaction`,
          type: D?.type,
        });
  } catch (e) {
    throw e instanceof v
      ? e
      : (O && D?.nonceManager?.reset(O),
        h(e, { ...n, account: D, chain: n.chain || void 0 }));
  }
}
async function z(e, t) {
  return z.internal(e, R, `sendTransaction`, t);
}
(function (t) {
  async function n(t, n, r, i) {
    let {
      abi: a,
      account: o = t.account,
      address: s,
      args: c,
      functionName: l,
      ...u
    } = i;
    if (o === void 0) throw new p({ docsPath: `/docs/contract/writeContract` });
    let d = o ? F(o) : null,
      f = Te({ abi: a, args: c, functionName: l });
    try {
      return await e(t, n, r)({ data: f, to: s, account: d, ...u });
    } catch (e) {
      throw D(e, {
        abi: a,
        address: s,
        args: c,
        docsPath: `/docs/contract/writeContract`,
        functionName: l,
        sender: d?.address,
      });
    }
  }
  t.internal = n;
})((z ||= {}));
var Pe = class extends f {
    constructor(e) {
      super(`Call bundle failed with status: ${e.statusCode}`, {
        name: `BundleFailedError`,
      }),
        Object.defineProperty(this, "result", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.result = e);
    }
  },
  Fe = `0x5792579257925792579257925792579257925792579257925792579257925792`,
  Ie = S(0, { size: 32 });
async function Le(e, t) {
  let {
      account: n = e.account,
      chain: r = e.chain,
      experimental_fallback: i,
      experimental_fallbackDelay: a = 32,
      forceAtomic: o = !1,
      id: s,
      version: l = `2.0.0`,
    } = t,
    u = n ? F(n) : null,
    d = t.capabilities;
  e.dataSuffix &&
    !t.capabilities?.dataSuffix &&
    (d =
      typeof e.dataSuffix == `string`
        ? {
            ...t.capabilities,
            dataSuffix: { value: e.dataSuffix, optional: !0 },
          }
        : {
            ...t.capabilities,
            dataSuffix: {
              value: e.dataSuffix.value,
              ...(e.dataSuffix.required ? {} : { optional: !0 }),
            },
          });
  let p = t.calls.map((e) => {
    let t = e,
      n = t.abi
        ? Te({ abi: t.abi, functionName: t.functionName, args: t.args })
        : t.data;
    return {
      data: t.dataSuffix && n ? c([n, t.dataSuffix]) : n,
      to: t.to,
      value: t.value ? S(t.value) : void 0,
    };
  });
  try {
    let t = await e.request(
      {
        method: `wallet_sendCalls`,
        params: [
          {
            atomicRequired: o,
            calls: p,
            capabilities: d,
            chainId: S(r.id),
            from: u?.address,
            id: s,
            version: l,
          },
        ],
      },
      { retryCount: 0 }
    );
    return typeof t == `string` ? { id: t } : t;
  } catch (n) {
    let s = n;
    if (
      i &&
      (s.name === `MethodNotFoundRpcError` ||
        s.name === `MethodNotSupportedRpcError` ||
        s.name === `UnknownRpcError` ||
        s.details.toLowerCase().includes(`does not exist / is not available`) ||
        s.details.toLowerCase().includes(`missing or invalid. request()`) ||
        s.details
          .toLowerCase()
          .includes(`did not match any variant of untagged enum`) ||
        s.details
          .toLowerCase()
          .includes(`account upgraded to unsupported contract`) ||
        s.details.toLowerCase().includes(`eip-7702 not supported`) ||
        s.details.toLowerCase().includes(`unsupported wc_ method`) ||
        s.details.toLowerCase().includes(`feature toggled misconfigured`) ||
        s.details
          .toLowerCase()
          .includes(
            `jsonrpcengine: response has no error or result for request`
          ))
    ) {
      if (d && Object.values(d).some((e) => !e.optional)) {
        let e =
          "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
        throw new Se(new f(e, { details: e }));
      }
      if (o && p.length > 1) {
        let e =
          "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
        throw new pe(new f(e, { details: e }));
      }
      let t = [];
      for (let n of p) {
        try {
          let i = await R(e, {
            account: u,
            chain: r,
            data: n.data,
            to: n.to,
            value: n.value ? m(n.value) : void 0,
          });
          t.push({ status: `fulfilled`, value: i });
        } catch (e) {
          t.push({ reason: e, status: `rejected` });
        }
        a > 0 && (await new Promise((e) => setTimeout(e, a)));
      }
      if (t.every((e) => e.status === `rejected`)) throw t[0].reason;
      return {
        id: c([
          ...t.map((e) => (e.status === `fulfilled` ? e.value : Ie)),
          S(r.id, { size: 32 }),
          Fe,
        ]),
      };
    }
    throw h(n, { ...t, account: u, chain: t.chain });
  }
}
async function Re(e, t) {
  async function n(t) {
    if (
      t.endsWith(
        `5792579257925792579257925792579257925792579257925792579257925792`
      )
    ) {
      let n = k(ie(t, -64, -32)),
        r = ie(t, 0, -64)
          .slice(2)
          .match(/.{1,64}/g),
        i = await Promise.all(
          r.map((t) =>
            Ie.slice(2) === t
              ? void 0
              : e.request(
                  { method: `eth_getTransactionReceipt`, params: [`0x${t}`] },
                  { dedupe: !0 }
                )
          )
        ),
        a = i.some((e) => e === null)
          ? 100
          : i.every((e) => e?.status === `0x1`)
          ? 200
          : i.every((e) => e?.status === `0x0`)
          ? 500
          : 600;
      return {
        atomic: !1,
        chainId: y(n),
        receipts: i.filter(Boolean),
        status: a,
        version: `2.0.0`,
      };
    }
    return e.request({ method: `wallet_getCallsStatus`, params: [t] });
  }
  let {
      atomic: r = !1,
      chainId: i,
      receipts: a,
      version: o = `2.0.0`,
      ...s
    } = await n(t.id),
    [c, l] = (() => {
      let e = s.status;
      return e >= 100 && e < 200
        ? [`pending`, e]
        : e >= 200 && e < 300
        ? [`success`, e]
        : e >= 300 && e < 700
        ? [`failure`, e]
        : e === `CONFIRMED`
        ? [`success`, 200]
        : e === `PENDING`
        ? [`pending`, 100]
        : [void 0, e];
    })();
  return {
    ...s,
    atomic: r,
    chainId: i ? y(i) : void 0,
    receipts:
      a?.map((e) => ({
        ...e,
        blockNumber: m(e.blockNumber),
        gasUsed: m(e.gasUsed),
        status: x[e.status],
      })) ?? [],
    statusCode: l,
    status: c,
    version: o,
  };
}
async function ze(t, n) {
  let {
      id: r,
      pollingInterval: i = t.pollingInterval,
      status: o = ({ statusCode: e }) => e === 200 || e >= 300,
      retryCount: s = 4,
      retryDelay: c = ({ count: e }) => ~~(1 << e) * 200,
      timeout: l = 6e4,
      throwOnFailure: u = !1,
    } = n,
    d = a([`waitForCallsStatus`, t.uid, r]),
    { promise: f, resolve: p, reject: m } = ue(),
    h,
    g = je(d, { resolve: p, reject: m }, (n) => {
      let a = O(
        async () => {
          let i = (e) => {
            clearTimeout(h), a(), e(), g();
          };
          try {
            let a = await T(
              async () => {
                let n = await e(t, Re, `getCallsStatus`)({ id: r });
                if (u && n.status === `failure`) throw new Pe(n);
                return n;
              },
              { retryCount: s, delay: c }
            );
            if (!o(a)) return;
            i(() => n.resolve(a));
          } catch (e) {
            i(() => n.reject(e));
          }
        },
        { interval: i, emitOnBegin: !0 }
      );
      return a;
    });
  return (
    (h = l
      ? setTimeout(() => {
          g(), clearTimeout(h), m(new Be({ id: r }));
        }, l)
      : void 0),
    await f
  );
}
var Be = class extends f {
  constructor({ id: e }) {
    super(
      `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
      { name: `WaitForCallsStatusTimeoutError` }
    );
  }
};
async function B(e, t) {
  return B.inner(z, e, t);
}
(function (e) {
  async function t(t, n, r) {
    return await t(n, { ...r, ...e.call(n, r) });
  }
  e.inner = t;
  function n(e, t) {
    return de(Ve(e, t));
  }
  e.call = n;
  async function i(t, n) {
    return te(t, { ...I(n), ...e.call(t, n) });
  }
  e.estimateGas = i;
  async function a(t, n) {
    return r(t, { ...I(n), ...e.call(t, n) });
  }
  e.simulate = a;
  function o(e) {
    let [t] = re({ abi: _, logs: e, eventName: `Approval`, strict: !0 });
    if (!t) throw Error("`Approval` event not found.");
    return t;
  }
  e.extractEvent = o;
})((B ||= {}));
function Ve(e, t) {
  let { amount: n, spender: r, token: a } = t,
    { address: o, decimals: s } = i(e, { token: a });
  return { abi: _, address: o, args: [r, Oe(n, s)], functionName: `approve` };
}
var He = new n(128);
async function Ue(t, n) {
  let {
      account: r = t.account,
      assertChainId: i = !0,
      chain: a = t.chain,
      accessList: o,
      authorizationList: s,
      blobs: l,
      data: u,
      dataSuffix: m = typeof t.dataSuffix == `string`
        ? t.dataSuffix
        : t.dataSuffix?.value,
      gas: g,
      gasPrice: _,
      maxFeePerBlobGas: y,
      maxFeePerGas: b,
      maxPriorityFeePerGas: x,
      nonce: S,
      pollingInterval: C,
      throwOnReceiptRevert: w,
      type: T,
      value: E,
      ...D
    } = n,
    O = n.timeout ?? Math.max((a?.blockTime ?? 0) * 3, 5e3);
  if (r === void 0)
    throw new p({ docsPath: `/docs/actions/wallet/sendTransactionSync` });
  let k = r ? F(r) : null,
    A;
  try {
    ye(n);
    let r = await (async () => {
      if (n.to) return n.to;
      if (n.to !== null && s && s.length > 0)
        return await se({ authorization: s[0] }).catch(() => {
          throw new f(
            "`to` is required. Could not infer from `authorizationList`."
          );
        });
    })();
    if (k?.type === `json-rpc` || k === null) {
      let n;
      a !== null &&
        ((n = await e(t, P, `getChainId`)({})),
        i && Me({ currentChainId: n, chain: a }));
      let d = t.chain?.formatters?.transactionRequest?.format,
        f = (d || we)(
          {
            ...Ee(D, { format: d }),
            accessList: o,
            account: k,
            authorizationList: s,
            blobs: l,
            chainId: n,
            data: m ? c([u ?? `0x`, m]) : u,
            gas: g,
            gasPrice: _,
            maxFeePerBlobGas: y,
            maxFeePerGas: b,
            maxPriorityFeePerGas: x,
            nonce: S,
            to: r,
            type: T,
            value: E,
          },
          `sendTransaction`
        ),
        p = He.get(t.uid),
        h = p ? `wallet_sendTransaction` : `eth_sendTransaction`,
        v = await (async () => {
          try {
            return await t.request(
              { method: h, params: [f] },
              { retryCount: 0 }
            );
          } catch (e) {
            if (p === !1) throw e;
            let n = e;
            if (
              n.name === `InvalidInputRpcError` ||
              n.name === `InvalidParamsRpcError` ||
              n.name === `MethodNotFoundRpcError` ||
              n.name === `MethodNotSupportedRpcError`
            )
              return await t
                .request(
                  { method: `wallet_sendTransaction`, params: [f] },
                  { retryCount: 0 }
                )
                .then((e) => (He.set(t.uid, !0), e))
                .catch((e) => {
                  let r = e;
                  throw r.name === `MethodNotFoundRpcError` ||
                    r.name === `MethodNotSupportedRpcError`
                    ? (He.set(t.uid, !1), n)
                    : r;
                });
            throw n;
          }
        })(),
        A = await e(
          t,
          ee,
          `waitForTransactionReceipt`
        )({ checkReplacement: !1, hash: v, pollingInterval: C, timeout: O });
      if (w && A.status === `reverted`) throw new Ae({ receipt: A });
      return A;
    }
    if (k?.type === `local`) {
      let i = (() => {
          if (!k.nonceManager || S !== void 0) return k.nonceManager;
          let e = k.nonceManager;
          return {
            consume(t) {
              return (
                (A = { address: t.address, chainId: t.chainId }), e.consume(t)
              );
            },
            get(t) {
              return e.get(t);
            },
            increment(t) {
              return e.increment(t);
            },
            reset(t) {
              return e.reset(t);
            },
          };
        })(),
        f = await e(
          t,
          d,
          `prepareTransactionRequest`
        )({
          account: k,
          accessList: o,
          authorizationList: s,
          blobs: l,
          chain: a,
          data: m ? c([u ?? `0x`, m]) : u,
          gas: g,
          gasPrice: _,
          maxFeePerBlobGas: y,
          maxFeePerGas: b,
          maxPriorityFeePerGas: x,
          nonce: S,
          nonceManager: i,
          parameters: [...ae, `sidecars`],
          type: T,
          value: E,
          ...D,
          to: r,
        }),
        p = a?.serializers?.transaction,
        h = await k.signTransaction(f, { serializer: p });
      return await e(
        t,
        ke,
        `sendRawTransactionSync`
      )({
        serializedTransaction: h,
        throwOnReceiptRevert: w,
        timeout: n.timeout,
      });
    }
    throw k?.type === `smart`
      ? new v({
          metaMessages: [
            "Consider using the `sendUserOperation` Action instead.",
          ],
          docsPath: `/docs/actions/bundler/sendUserOperation`,
          type: `smart`,
        })
      : new v({
          docsPath: `/docs/actions/wallet/sendTransactionSync`,
          type: k?.type,
        });
  } catch (e) {
    throw e instanceof v
      ? e
      : (A && !(e instanceof Ae) && k?.nonceManager?.reset(A),
        h(e, { ...n, account: k, chain: n.chain || void 0 }));
  }
}
async function We(e, t) {
  return z.internal(e, Ue, `sendTransactionSync`, t);
}
async function Ge(e, t) {
  let { amount: n, token: r, throwOnReceiptRevert: a = !0 } = t,
    { decimals: o } = i(e, { token: r }),
    c = A(n, o),
    l = await B.inner(We, e, { ...t, throwOnReceiptRevert: a }),
    { args: u } = B.extractEvent(l.logs);
  return {
    ...u,
    ...(c === void 0 ? {} : { decimals: c, formatted: s(u.value, c) }),
    receipt: l,
  };
}
async function V(e, t) {
  return V.inner(z, e, t);
}
(function (e) {
  async function t(t, n, r) {
    return await t(n, { ...r, ...e.call(n, r) });
  }
  e.inner = t;
  function n(e, t) {
    return de(Ke(e, t));
  }
  e.call = n;
  async function i(t, n) {
    return te(t, { ...I(n), ...e.call(t, n) });
  }
  e.estimateGas = i;
  async function a(t, n) {
    return r(t, { ...I(n), ...e.call(t, n) });
  }
  e.simulate = a;
  function o(e) {
    let [t] = re({ abi: _, logs: e, eventName: `Transfer`, strict: !0 });
    if (!t) throw Error("`Transfer` event not found.");
    return t;
  }
  e.extractEvent = o;
})((V ||= {}));
function Ke(e, t) {
  let { amount: n, from: r, to: a, token: o } = t,
    { address: s, decimals: c } = i(e, { token: o }),
    l = Oe(n, c);
  return r
    ? { abi: _, address: s, args: [r, a, l], functionName: `transferFrom` }
    : { abi: _, address: s, args: [a, l], functionName: `transfer` };
}
async function qe(e, t) {
  let { amount: n, token: r, throwOnReceiptRevert: a = !0 } = t,
    { decimals: o } = i(e, { token: r }),
    c = A(n, o),
    l = await V.inner(We, e, { ...t, throwOnReceiptRevert: a }),
    { args: u } = V.extractEvent(l.logs);
  return {
    ...u,
    ...(c === void 0 ? {} : { decimals: c, formatted: s(u.value, c) }),
    receipt: l,
  };
}
async function Je(e, { chain: t }) {
  let { id: n, name: r, nativeCurrency: i, rpcUrls: a, blockExplorers: o } = t;
  await e.request(
    {
      method: `wallet_addEthereumChain`,
      params: [
        {
          chainId: S(n),
          chainName: r,
          nativeCurrency: i,
          rpcUrls: a.default.http,
          blockExplorerUrls: o
            ? Object.values(o).map(({ url: e }) => e)
            : void 0,
        },
      ],
    },
    { dedupe: !0, retryCount: 0 }
  );
}
function Ye(e, t) {
  let { abi: n, args: r, bytecode: i, ...a } = t,
    o = Ce({ abi: n, args: r, bytecode: i });
  return R(e, { ...a, ...(a.authorizationList ? { to: null } : {}), data: o });
}
async function Xe(e) {
  return e.account?.type === `local`
    ? [e.account.address]
    : (await e.request({ method: `eth_accounts` }, { dedupe: !0 })).map((e) =>
        o(e)
      );
}
async function Ze(e, t = {}) {
  let { account: n = e.account, chainId: r } = t,
    i = n ? F(n) : void 0,
    a = r ? [i?.address, [S(r)]] : [i?.address],
    o = await e.request({ method: `wallet_getCapabilities`, params: a }),
    s = {};
  for (let [e, t] of Object.entries(o)) {
    s[Number(e)] = {};
    for (let [n, r] of Object.entries(t))
      n === `addSubAccount` && (n = `unstable_addSubAccount`),
        (s[Number(e)][n] = r);
  }
  return typeof r == `number` ? s[r] : s;
}
async function Qe(e) {
  return await e.request({ method: `wallet_getPermissions` }, { dedupe: !0 });
}
async function $e(t, n) {
  let { account: r = t.account, chainId: i, nonce: a } = n;
  if (!r) throw new p({ docsPath: `/docs/eip7702/prepareAuthorization` });
  let o = F(r),
    s = (() => {
      if (n.executor) return n.executor === `self` ? n.executor : F(n.executor);
    })(),
    c = { address: n.contractAddress ?? n.address, chainId: i, nonce: a };
  return (
    c.chainId === void 0 &&
      (c.chainId = t.chain?.id ?? (await e(t, P, `getChainId`)({}))),
    c.nonce === void 0 &&
      ((c.nonce = await e(
        t,
        ce,
        `getTransactionCount`
      )({ address: o.address, blockTag: `pending` })),
      (s === `self` || (s?.address && ge(s.address, o.address))) &&
        (c.nonce += 1)),
    c
  );
}
async function et(e) {
  return (
    await e.request(
      { method: `eth_requestAccounts` },
      { dedupe: !0, retryCount: 0 }
    )
  ).map((e) => w(e));
}
async function tt(e, t) {
  return e.request(
    { method: `wallet_requestPermissions`, params: [t] },
    { retryCount: 0 }
  );
}
async function nt(t, n) {
  let { chain: r = t.chain } = n,
    i = n.timeout ?? Math.max((r?.blockTime ?? 0) * 3, 5e3),
    a = await e(t, Le, `sendCalls`)(n);
  return await e(t, ze, `waitForCallsStatus`)({ ...n, id: a.id, timeout: i });
}
async function rt(e, t) {
  let { id: n } = t;
  await e.request({ method: `wallet_showCallsStatus`, params: [n] });
}
async function it(e, t) {
  let { account: n = e.account } = t;
  if (!n) throw new p({ docsPath: `/docs/eip7702/signAuthorization` });
  let r = F(n);
  if (!r.signAuthorization)
    throw new v({
      docsPath: `/docs/eip7702/signAuthorization`,
      metaMessages: [
        "The `signAuthorization` Action does not support JSON-RPC Accounts.",
      ],
      type: r.type,
    });
  let i = await $e(e, t);
  return r.signAuthorization(i);
}
async function at(e, { account: t = e.account, message: n }) {
  if (!t) throw new p({ docsPath: `/docs/actions/wallet/signMessage` });
  let r = F(t);
  if (r.signMessage) return r.signMessage({ message: n });
  let i =
    typeof n == `string`
      ? E(n)
      : n.raw instanceof Uint8Array
      ? u(n.raw)
      : n.raw;
  return e.request(
    { method: `personal_sign`, params: [i, r.address] },
    { retryCount: 0 }
  );
}
async function ot(t, n) {
  let { account: r = t.account, chain: i = t.chain, ...a } = n;
  if (!r) throw new p({ docsPath: `/docs/actions/wallet/signTransaction` });
  let o = F(r);
  ye({ account: o, ...n });
  let s = await e(t, P, `getChainId`)({});
  i !== null && Me({ currentChainId: s, chain: i });
  let c =
    (i?.formatters || t.chain?.formatters)?.transactionRequest?.format || we;
  return o.signTransaction
    ? o.signTransaction(
        { ...a, account: o, chainId: s },
        { serializer: t.chain?.serializers?.transaction }
      )
    : await t.request(
        {
          method: `eth_signTransaction`,
          params: [
            {
              ...c({ ...a, account: o }, `signTransaction`),
              chainId: S(s),
              from: o.address,
            },
          ],
        },
        { retryCount: 0 }
      );
}
async function st(e, n) {
  let { account: r = e.account, domain: i, message: a, primaryType: o } = n;
  if (!r) throw new p({ docsPath: `/docs/actions/wallet/signTypedData` });
  let s = F(r),
    c = { EIP712Domain: C({ domain: i }), ...n.types };
  if ((t({ domain: i, message: a, primaryType: o, types: c }), s.signTypedData))
    return s.signTypedData({ domain: i, message: a, primaryType: o, types: c });
  let l = be({ domain: i, message: a, primaryType: o, types: c });
  return e.request(
    { method: `eth_signTypedData_v4`, params: [s.address, l] },
    { retryCount: 0 }
  );
}
async function ct(e, { id: t }) {
  await e.request(
    { method: `wallet_switchEthereumChain`, params: [{ chainId: S(t) }] },
    { retryCount: 0 }
  );
}
async function lt(e, t) {
  return await e.request(
    { method: `wallet_watchAsset`, params: t },
    { retryCount: 0 }
  );
}
function ut(e) {
  return {
    addChain: (t) => Je(e, t),
    deployContract: (t) => Ye(e, t),
    fillTransaction: (t) => g(e, t),
    getAddresses: () => Xe(e),
    getCallsStatus: (t) => Re(e, t),
    getCapabilities: (t) => Ze(e, t),
    getChainId: () => P(e),
    getPermissions: () => Qe(e),
    prepareAuthorization: (t) => $e(e, t),
    prepareTransactionRequest: (t) => d(e, t),
    requestAddresses: () => et(e),
    requestPermissions: (t) => tt(e, t),
    sendCalls: (t) => Le(e, t),
    sendCallsSync: (t) => nt(e, t),
    sendRawTransaction: (t) => l(e, t),
    sendRawTransactionSync: (t) => ke(e, t),
    sendTransaction: (t) => R(e, t),
    sendTransactionSync: (t) => Ue(e, t),
    showCallsStatus: (t) => rt(e, t),
    signAuthorization: (t) => it(e, t),
    signMessage: (t) => at(e, t),
    signTransaction: (t) => ot(e, t),
    signTypedData: (t) => st(e, t),
    switchChain: (t) => ct(e, t),
    waitForCallsStatus: (t) => ze(e, t),
    watchAsset: (t) => lt(e, t),
    writeContract: (t) => z(e, t),
    writeContractSync: (t) => We(e, t),
    token: {
      approve: j(e, B),
      approveSync: j(e, Ge),
      transfer: j(e, V),
      transferSync: j(e, qe),
    },
  };
}
function dt(e) {
  let { key: t = `wallet`, name: n = `Wallet Client`, transport: r } = e;
  return b({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: `walletClient`,
  }).extend(ut);
}
function ft(e, t = {}) {
  let {
    key: n = `custom`,
    methods: r,
    name: i = `Custom Provider`,
    retryDelay: a,
  } = t;
  return ({ retryCount: o }) =>
    le({
      key: n,
      methods: r,
      name: i,
      request: e.request.bind(e),
      retryCount: t.retryCount ?? o,
      retryDelay: a,
      type: `custom`,
    });
}
var pt = 4663,
  mt = `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`,
  ht = {
    factory: `0x1f7d7550b1b028f7571e69a784071f0205fd2efa`,
    quoterV2: `0x33e885ed0ec9bf04ecfb19341582aadcb4c8a9e7`,
    swapRouter02: `0xcaf681a66d020601342297493863e78c959e5cb2`,
  },
  gt = [100, 500, 3e3, 1e4],
  _t = {
    api: `https://app.across.to/api`,
    spokePool: `0xD29C85F15DF544bA632C9E25829fd29d767d7978`,
  },
  vt = {
    Arbitrum: {
      chainId: 42161,
      usdc: `0xaf88d065e77c8cC2239327C5EDb3A432268e5831`,
    },
    Base: { chainId: 8453, usdc: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` },
    "Polygon (Matic)": {
      chainId: 137,
      usdc: `0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359`,
    },
  },
  yt = {
    42161: [
      `0xaf88d065e77c8cC2239327C5EDb3A432268e5831`,
      `0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8`,
      `0xe35e9842fceaCA96570B734083f4a58e8F7C5f2A`,
    ],
    8453: [
      `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`,
      `0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA`,
      `0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64`,
    ],
    137: [
      `0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359`,
      `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`,
      `0x9295ee1d8C5b022Be115A2AD3c30C72E34e7F096`,
    ],
  },
  bt = `0x0000000000000000000000000000000000000000`;
function xt(e, t, n, r) {
  let i = e.toLowerCase();
  return [
    bt,
    mt,
    _t.spokePool,
    ht.swapRouter02,
    n,
    r,
    ...(yt[t] ?? []),
    ...Object.values(yt).flat(),
  ].some((e) => e.toLowerCase() === i);
}
var St = {
    "0x117cc2133c37b721f49de2a7a74833232b3b4c0c": {
      symbol: `SPY`,
      feed: `0x319724394D3A0e3669269846abE664Cd621f9f6A`,
    },
    "0x12f190a9f9d7d37a250758b26824b97ce941bf54": {
      symbol: `AMZN`,
      feed: `0xD5a1508ceD74c084eBf3cBe853e2C968fB2a651C`,
    },
    "0x1b0e319c6a659f002271b69db8a7df2f911c153e": {
      symbol: `GME`,
      feed: `0x27C71df6A64fB476468EdF256CF72c038baB5B67`,
    },
    "0x284358abc07f9359f19f4b5b4ac91901be2597ba": {
      symbol: `RGTI`,
      feed: `0x2A045cF1C49c61c166C036d2f06FA2D2d984f765`,
    },
    "0x2e0847e8910a9732eb3fb1bb4b70a580adad4fe3": {
      symbol: `GOOGL`,
      feed: `0xF6f373a037c30F0e5010d854385cA89185AE638b`,
    },
    "0x322f0929c4625ed5bad873c95208d54e1c003b2d": {
      symbol: `TSLA`,
      feed: `0x4A1166a659A55625345e9515b32adECea5547C38`,
    },
    "0x3b14c39e89d60d627b42a1a4ca45b5bb45fc12e2": {
      symbol: `RKLB`,
      feed: `0x045477BF65Aef6f4F2386ad0164579e48381CC74`,
    },
    "0x411efb0e7f985935daec3d4c3ebaea0d0ad7d89f": {
      symbol: `SLV`,
      feed: `0x209b73908e92Ae021826eD79609845451Ecba2ce`,
    },
    "0x47f93d52cbec7c6d2cfc080e154002370a60daea": {
      symbol: `ASML`,
      feed: `0xB4106147E8cce40b7d46124090d373A71b70f87D`,
    },
    "0x4a0e65a3eccec6dbe60ae065f2e7bb85fae35eea": {
      symbol: `SPCX`,
      feed: `0xB265810950ba6c5C0Ff821c9963014a56fD8Bffb`,
    },
    "0x558378e000d634a36593e338ebacdd6207640efe": {
      symbol: `IONQ`,
      feed: `0x22EfeC4919baf55F360E0EDee4AbEB26DE4971eb`,
    },
    "0x58ffe4a942d3885baa22d7520691f611ef09e7aa": {
      symbol: `TSM`,
      feed: `0x874cF94aa8eC88Fd9560094dD065f2fB3E41Fc2F`,
    },
    "0x5f10a1c971b69e47e059e1dc91901b59b3fb49c3": {
      symbol: `CRWV`,
      feed: `0xe1b3aABCAFAd1c94708dc1367dcfF8Aa4407487C`,
    },
    "0x6330d8c3178a418788df01a47479c0ce7ccf450b": {
      symbol: `COIN`,
      feed: `0xA3a468A452940B7D6b69991207B508c609a98Ef2`,
    },
    "0x7f0abef0c07280f82c6a08ead09ded6bae2c13fc": {
      symbol: `EWY`,
      feed: `0xEFdf54610B62A7753Ec30bDc380847c12D32e1D1`,
    },
    "0x86923f96303d656e4aa86d9d42d1e57ad2023fdc": {
      symbol: `AMD`,
      feed: `0x943A29E7ae51A4798823ca9eEd2ed533B2A22C72`,
    },
    "0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a": {
      symbol: `PLTR`,
      feed: `0x820ABedFF239034956B7A9d2F0a331f9F075eB4c`,
    },
    "0x92fd66527192e3e61d4ddd13322aa222de86f9b5": {
      symbol: `SGOV`,
      feed: `0xa0DF4ee0fFf975306345875E3548Fcc519577A11`,
    },
    "0x941ae714ec6d8130c7b75d67160ca08f1e7d11dd": {
      symbol: `DELL`,
      feed: `0x1C6c8cADBe02E19129c39dDB92281cE4c0bf206b`,
    },
    "0x9d9c6684f596f66a64c030b93a886d51fd4d7931": {
      symbol: `NBIS`,
      feed: `0xE1D87B116Ba0fe898998f1D140339D1fA1E09705`,
    },
    "0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344": {
      symbol: `USO`,
      feed: `0x75a9c76Ef439e2C7c2E5a34Ab105EcFe3766431c`,
    },
    "0xad25ac6c84d497db898fa1e8387bf6af3532a1c4": {
      symbol: `BABA`,
      feed: `0x62Cc8F9b5f56a33c9C8A60c8B92779f523c4E984`,
    },
    "0xaf3d76f1834a1d425780943c99ea8a608f8a93f9": {
      symbol: `AAPL`,
      feed: `0x6B22A786bAa607d76728168703a39Ea9C99f2cD0`,
    },
    "0xb0992820e760d836549ba69bc7598b4af75dee03": {
      symbol: `ORCL`,
      feed: `0x0e6a64a2B58A6693a531E6c555f3A5d042eEA844`,
    },
    "0xb90a19ff0af67f7779aff50a882a9cff42446400": {
      symbol: `SNDK`,
      feed: `0xfb133Fa4B7b385802B693a293606682Df47109A3`,
    },
    "0xc0d6457c16cc70d6790dd43521c899c87ce02f35": {
      symbol: `META`,
      feed: `0x7C38C00C30BEe9378381E7B6135d7283356D71b1`,
    },
    "0xc72b96e0e48ecd4dc75e1e45396e26300bc39681": {
      symbol: `INTC`,
      feed: `0x3f390C5C24628Ac7C489515402235FeAD71D1913`,
    },
    "0xcbb95bbf36099d34da091dc6fa6f49efa257cee3": {
      symbol: `CLSK`,
      feed: `0x810c12D3a554Bc47fd39597Fe3b3AAC4941F50eF`,
    },
    "0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec": {
      symbol: `NVDA`,
      feed: `0x379EC4f7C378F34a1B47E4F3cbeBCbAC3E8E9F15`,
    },
    "0xd5f3879160bc7c32ebb4dc785f8a4f505888de68": {
      symbol: `QQQ`,
      feed: `0x80901d846d5D7B030F26B480776EE3b29374C2ae`,
    },
    "0xd917b029c761d264c6a312bbbcda868658ef86a6": {
      symbol: `USAR`,
      feed: `0xA994d3684e8400A6c8078226925779FdeE682DD9`,
    },
    "0xdf0992e440dd0be65bd8439b609d6d4366bf1cb5": {
      symbol: `CRCL`,
      feed: `0x6652eDf64bA3731C4F2D3ce821A0Fb1f1f6b482a`,
    },
    "0xe93237c50d904957cf27e7b1133b510c669c2e74": {
      symbol: `MSFT`,
      feed: `0x45C3C877C15E6BA2EBB19eA114Ea508d14C1Af2E`,
    },
    "0xec262a75e413fafd0df80480274532c79d42da09": {
      symbol: `MSTR`,
      feed: `0x396118bdFB181e6240E74D243F266B061c0edc3D`,
    },
    "0xff080c8ce2e5feadaca0da81314ae59d232d4afd": {
      symbol: `MU`,
      feed: `0x425EEFdCf05ed6526C3cE61Af99429A228a6d596`,
    },
  },
  Ct = (e) => St[e.toLowerCase()],
  wt = 1560 * 60 * 1e3,
  Tt = new Set([
    `2026-01-01`,
    `2026-01-19`,
    `2026-02-16`,
    `2026-04-03`,
    `2026-05-25`,
    `2026-06-19`,
    `2026-07-03`,
    `2026-09-07`,
    `2026-11-26`,
    `2026-12-25`,
    `2027-01-01`,
    `2027-01-18`,
    `2027-02-15`,
    `2027-03-26`,
    `2027-05-31`,
    `2027-06-18`,
    `2027-07-05`,
    `2027-09-06`,
    `2027-11-25`,
    `2027-12-24`,
  ]);
function Et(e) {
  let t = new Intl.DateTimeFormat(`en-US`, {
      timeZone: `America/New_York`,
      year: `numeric`,
      weekday: `short`,
    }).formatToParts(new Date(e + 14400 * 1e3)),
    n = (e) => t.find((t) => t.type === e)?.value ?? ``;
  return (
    !(n(`weekday`) === `Sat` || n(`weekday`) === `Sun`) &&
    !(Number(n(`year`)) <= 2027)
  );
}
function Dt(e) {
  let t = new Intl.DateTimeFormat(`en-US`, {
      timeZone: `America/New_York`,
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
      weekday: `short`,
    }).formatToParts(new Date(e + 14400 * 1e3)),
    n = (e) => t.find((t) => t.type === e)?.value ?? ``;
  if (!(Number(n(`year`)) <= 2027)) return !1;
  let r = n(`weekday`);
  return r === `Sat` || r === `Sun`
    ? !1
    : !Tt.has(`${n(`year`)}-${n(`month`)}-${n(`day`)}`);
}
function Ot(e, t, n, r, i = 300) {
  return e <= 0n || t <= 0n || r <= 0n
    ? !1
    : e * 100n * 10n ** BigInt(n) * 10000n >= t * r * BigInt(1e4 - i);
}
function kt(e, t, n, r, i = 300) {
  return e <= 0n || t <= 0n || r <= 0n
    ? !0
    : e * 100n * 10n ** BigInt(n) * 10000n > t * r * BigInt(1e4 + i);
}
function At(e, t, n, r = 300) {
  return n <= 0n
    ? 0n
    : (e * 100n * 10n ** BigInt(t) * 10000n) / (n * BigInt(1e4 - r));
}
function jt(e, t, n, r) {
  if (t <= 0n || r <= 0n) return 0;
  let i = (e * 100n * 10n ** BigInt(n)) / t;
  return Number(((i - r) * 10000n) / r);
}
var Mt = 180 * 1e3,
  Nt = 720 * 1e3,
  Pt = 60 * 1e3,
  Ft = 90 * 1e3,
  It = 36e4,
  Lt = 300 * 1e3,
  Rt = 900 * 1e3,
  zt = 500000n,
  Bt = new Set([`WalletCreated`, `PaymentRequested`]),
  Vt = new Set([
    `Delivered`,
    `Expired`,
    `Canceled`,
    `Cancelled`,
    `Failed`,
    `PaymentSetupFailed`,
  ]);
function Ht(e) {
  return Math.floor((e - Mt - Pt - Ft) / 1e3);
}
function Ut(e, t) {
  let n = Math.min(t - Mt, e + Nt);
  return n - e < 6e4 ? null : Math.floor(n / 1e3);
}
var Wt = `I confirm I am not a U.S. person (Regulation S) and I am not in the United States, Canada, the United Kingdom or Switzerland.`;
function Gt(e) {
  return [
    `Offyield: pay for a card with a stock token`,
    `site: offyield.com`,
    `wallet: ${e.wallet.toLowerCase()}`,
    `token: ${e.token.toLowerCase()}`,
    `card: ${e.brand}`,
    `card value (USD): ${e.valueUsd}`,
    `card storefront: ${e.country}`,
    `delivery email: ${e.email}`,
    `card holder name: ${e.fullName}`,
    Wt,
    `request id: ${e.idempotencyKey}`,
    `issued at: ${e.issuedAt}`,
    `chain: ${pt}`,
  ].join(`
`);
}
var Kt = (e) => typeof e == `string` && /^0x[0-9a-fA-F]{40}$/.test(e);
function qt(e, t) {
  if (typeof e != `string` && typeof e != `number`) return null;
  let n = String(e).trim();
  if (!/^\d{1,15}(\.\d{1,30})?$/.test(n)) return null;
  let [r, i = ``] = n.split(`.`),
    a =
      BigInt(r) * 10n ** BigInt(t) +
      BigInt(i.slice(0, t).padEnd(t, `0`) || `0`);
  return /[1-9]/.test(i.slice(t)) && (a += 1n), a > 0n ? a : null;
}
var Jt =
    /^(?:(?=[^ ]*\p{L})[\p{L}\p{M}'.-]+(?: (?=[^ ]*\p{L})[\p{L}\p{M}'.-]+)*)?$/u,
  Yt =
    /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;
function Xt(e, t) {
  return (e * BigInt(1e4 + t) + 9999n) / 10000n;
}
var H = new Map(),
  U = null,
  Zt = !1,
  Qt = new Set(),
  $t = `offyield.wallet.rdns`,
  W = `offyield.wallet.disconnected`,
  G = `offyield.wallet.lastActive`;
function en(e = Date.now()) {
  K(G, String(e));
}
function tn(e = Date.now()) {
  let t = Number(rn(G));
  return Number.isFinite(t) && t > 0 && e - t < 18e5;
}
function nn() {
  (U = null), K(G, null), K(W, `1`);
}
var rn = (e) => {
    try {
      return window.localStorage.getItem(e);
    } catch {
      return null;
    }
  },
  K = (e, t) => {
    try {
      t === null
        ? window.localStorage.removeItem(e)
        : window.localStorage.setItem(e, t);
    } catch {}
  },
  an = (e) =>
    typeof e == `string` &&
    /^data:image\/(svg\+xml|png|jpeg|webp|gif)[;,]/i.test(e) &&
    e.length < 2e5
      ? e
      : ``,
  on = (e) => e === `io.metamask` || e.startsWith(`io.metamask.`),
  sn = [
    `isPhantom`,
    `isRabby`,
    `isBraveWallet`,
    `isCoinbaseWallet`,
    `isTrust`,
    `isTrustWallet`,
    `isOkxWallet`,
    `isOKExWallet`,
    `isRainbow`,
    `isZerion`,
    `isFrame`,
  ];
function cn(e) {
  let t = e;
  return !!t && t.isMetaMask === !0 && !sn.some((e) => t[e]);
}
function ln(e) {
  let t = e.detail,
    n = t?.info?.rdns;
  if (
    typeof n != `string` ||
    !/^[a-z0-9.-]{3,100}$/i.test(n) ||
    !on(n) ||
    typeof t?.provider?.request != `function`
  )
    return;
  let r = typeof t.info?.name == `string` ? t.info.name.slice(0, 40) : n;
  H.set(n, {
    info: { rdns: n, name: r, icon: an(t.info?.icon) },
    provider: t.provider,
  });
  for (let e of Qt) e();
}
function un(e) {
  return typeof window > `u`
    ? () => {}
    : (Qt.add(e),
      Zt ||
        ((Zt = !0), window.addEventListener(`eip6963:announceProvider`, ln)),
      window.dispatchEvent(new Event(`eip6963:requestProvider`)),
      () => void Qt.delete(e));
}
function dn() {
  return [...H.values()].map((e) => e.info);
}
function q() {
  if (typeof window > `u`) return null;
  if (U) return U;
  let e = [...H.values()][0];
  if (e) return e.provider;
  let t = window.ethereum;
  return cn(t) ? t : null;
}
typeof window < `u` &&
  typeof window.addEventListener == `function` &&
  ((Zt = !0),
  window.addEventListener(`eip6963:announceProvider`, ln),
  window.dispatchEvent(new Event(`eip6963:requestProvider`)));
function fn() {
  return q() !== null;
}
async function pn() {
  if (typeof window > `u` || rn(W) || !tn()) return null;
  let e = rn($t);
  if (e) {
    for (let t = 0; t < 10 && !H.has(e); t++)
      await new Promise((e) => setTimeout(e, 50));
    let t = H.get(e);
    t && (U = t.provider);
  }
  let t = q();
  if (!t) return null;
  try {
    let e = (await t.request({ method: `eth_accounts` }))?.[0];
    return typeof e == `string` && /^0x[0-9a-fA-F]{40}$/.test(e) ? e : null;
  } catch {
    return null;
  }
}
function mn(e = `https://www.offyield.com/dashboard`) {
  return [
    {
      name: `MetaMask`,
      href: `https://link.metamask.io/dapp/${e.replace(/^https:\/\//, ``)}`,
    },
  ];
}
function hn() {
  if (typeof navigator > `u`) return !1;
  let e = navigator.userAgent ?? ``;
  return (
    /Android|iPhone|iPad|iPod|Mobile/i.test(e) ||
    (/Macintosh/.test(e) && (navigator.maxTouchPoints ?? 0) > 1)
  );
}
function gn() {
  return q();
}
async function _n(e) {
  let t = `0x${L.chain.id.toString(16)}`;
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
          chainName: L.chain.name,
          nativeCurrency: L.chain.nativeCurrency,
          rpcUrls: [...L.chain.rpcUrls.default.http],
          blockExplorerUrls: [L.explorer],
        },
      ],
    }),
      await e.request({
        method: `wallet_switchEthereumChain`,
        params: [{ chainId: t }],
      });
  }
}
async function J() {
  let e = q();
  if (!e) throw Error(`No wallet found.`);
  await _n(e);
}
async function vn() {
  let e = q();
  try {
    await e?.request({
      method: `wallet_revokePermissions`,
      params: [{ eth_accounts: {} }],
    });
  } catch {}
  (U = null), K($t, null), K(W, `1`), K(G, null);
}
async function yn(e) {
  if (e) {
    let t = H.get(e);
    if (!t)
      throw Error(
        `That wallet isn't available in this browser anymore. Reload and try again.`
      );
    U = t.provider;
  }
  let t = q();
  if (!t)
    throw Error(
      `MetaMask not found. Offyield works with MetaMask: install it, or on a phone open this page in the MetaMask app's browser.`
    );
  let n = await t.request({ method: `eth_requestAccounts` });
  if (!n?.[0]) throw Error(`Wallet returned no account.`);
  return await _n(t), e && K($t, e), K(W, null), en(), n[0];
}
function bn(e) {
  let t = q();
  return t?.on
    ? (t.on(`accountsChanged`, e),
      () => t.removeListener?.(`accountsChanged`, e))
    : () => {};
}
function Y(e) {
  let t = q();
  if (!t) throw Error(`No wallet found.`);
  return dt({ account: e, chain: L.chain, transport: ft(t) });
}
var xn = {
    ExceedsSpendableYield: `That's more than your spendable interest.`,
    ExceedsPrincipal: `That's more than your locked principal.`,
    CapExceeded: `Over the early-access deposit limit.`,
    ZeroAmount: `Amount must be above zero.`,
    DepositWhileImpaired: `Deposits are blocked while the position is impaired.`,
    EnforcedPause: `The vault is paused. Withdrawals still work.`,
    UnexpectedTransferAmount: `Token transfer verification failed.`,
    InsufficientAssetsOut: `The payout dropped below the amount you confirmed. Review the new amount and try again.`,
    PrincipalBreached: `The yield venue returned an unexpected result; no funds moved. Withdrawals still work.`,
  },
  Sn = {
    withdrawPrincipal: {
      ZeroAmount: `At the position's current (impaired) value this amount pays out nothing. Withdraw a larger amount, or close the whole position.`,
      PrincipalBreached: `The yield venue returned an unexpected result; no funds moved.`,
    },
    exit: { ZeroAmount: `There is no open position to close.` },
    exitInKind: {
      ZeroAmount: `There is no open position to close.`,
      ZeroAddress: `That receiving address can't hold the venue shares.`,
      PrincipalBreached: `The yield venue moved an unexpected number of shares, so nothing was moved.`,
    },
  };
function X(e, t) {
  if (e instanceof f) {
    let n = e.walk((e) => e instanceof ve)?.data?.errorName,
      r = n && t ? Sn[t]?.[n] : void 0;
    return r
      ? Error(r)
      : n && xn[n]
      ? Error(xn[n])
      : n
      ? Error(`Contract rejected the call: ${n}`)
      : e.shortMessage?.includes(`User rejected`)
      ? Error(`Signature request cancelled.`)
      : Error(e.shortMessage);
  }
  return e instanceof Error ? e : Error(String(e));
}
async function Z(e, t, n) {
  try {
    await J();
    let { request: r } = await M.simulateContract({
        address: L.vault,
        abi: _e,
        functionName: t,
        args: n,
        account: e,
      }),
      i = await Y(e).writeContract(r);
    if ((await M.waitForTransactionReceipt({ hash: i })).status !== `success`)
      throw Error(`Transaction reverted on-chain.`);
    return i;
  } catch (e) {
    throw X(e, t);
  }
}
async function Cn(e, t, n) {
  try {
    let { result: r } = await M.simulateContract({
      address: L.vault,
      abi: _e,
      functionName: t,
      args: n,
      account: e,
    });
    return r;
  } catch (e) {
    throw X(e, t);
  }
}
async function wn(e) {
  let t = await me().catch(() => null);
  return t !== null && t > 0n ? (e * 9995n) / 10000n : e;
}
async function Tn(e, t, n) {
  if (!N.withdrawFloor) return null;
  let r = await Cn(e, `withdrawPrincipal`, [t, n, 0n]);
  return { paid: r, floor: await wn(r) };
}
async function En(e, t) {
  if (!N.exitFloor) return null;
  let n = await Cn(e, `exit`, [t, 0n]);
  return { paid: n, floor: await wn(n) };
}
async function Dn(e, t) {
  let n = De(await xe(e), t);
  if (n) throw Error(n);
  if ((await fe(e)) < t)
    try {
      await J();
      let { request: n } = await M.simulateContract({
          address: L.usdg,
          abi: he,
          functionName: `approve`,
          args: [L.vault, t],
          account: e,
        }),
        r = await Y(e).writeContract(n);
      if ((await M.waitForTransactionReceipt({ hash: r })).status !== `success`)
        throw Error(`Approval reverted on-chain.`);
    } catch (e) {
      throw X(e);
    }
  return Z(e, `deposit`, [t]);
}
async function On(e, t) {
  try {
    return await Y(e).signMessage({ account: e, message: t });
  } catch (e) {
    throw X(e);
  }
}
async function kn(e, t, n) {
  return Z(e, `spendFromYield`, [t, n]);
}
async function An(e, t, n, r) {
  return Z(e, `withdrawPrincipal`, N.withdrawFloor ? [t, n, r] : [t, n]);
}
async function jn(e, t, n) {
  return Z(e, `exit`, N.exitFloor ? [t, n] : [t]);
}
async function Mn(e, t) {
  if (!N.exitInKind)
    throw Error(`The in-kind exit isn't available on this network.`);
  return Z(e, `exitInKind`, [t]);
}
async function Nn(e, t) {
  if (!L.isTestnet) throw Error(`Minting only exists on testnet.`);
  try {
    await J();
    let { request: n } = await M.simulateContract({
        address: L.usdg,
        abi: he,
        functionName: `mint`,
        args: [e, t],
        account: e,
      }),
      r = await Y(e).writeContract(n);
    if ((await M.waitForTransactionReceipt({ hash: r })).status !== `success`)
      throw Error(`Mint reverted on-chain.`);
    return r;
  } catch (e) {
    throw X(e);
  }
}
var Q = {
    chainId: 4663,
    token: `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`,
    to: `0x054c1a785c1fca277e9698e6E113aF8D493F0a47`,
  },
  Pn = 5000000000n,
  Fn = 12500n,
  $ = (e, t) =>
    typeof e == `string` &&
    /^0x[0-9a-fA-F]{40}$/.test(e) &&
    e.toLowerCase() === t.toLowerCase();
function In(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = t.usdgPay;
  if (
    !n ||
    typeof n != `object` ||
    !$(n.to, Q.to) ||
    !$(n.token, Q.token) ||
    n.chainId !== Q.chainId ||
    typeof n.amountUnits != `string` ||
    !/^[1-9]\d{0,15}$/.test(n.amountUnits)
  )
    return null;
  let r = BigInt(n.amountUnits);
  if (r > Pn || t.coin !== `USDC` || qt(t.coinAmount, 6) !== r) return null;
  let i = Number(t.faceUsd);
  if (!Number.isFinite(i) || i <= 0) return null;
  let a = BigInt(Math.round(i * 100)) * 10000n;
  return r * 10000n > a * Fn ? null : { amountUnits: r, amount: s(r, 6) };
}
async function Ln(e, t, n) {
  if (!$(t, Q.to))
    throw Error(`That isn't Offyield's payment address, so nothing was sent.`);
  if (typeof n != `bigint` || n <= 0n || n > Pn)
    throw Error(`That payment amount doesn't look right, so nothing was sent.`);
  if (L.chain.id !== Q.chainId || !$(L.usdg, Q.token))
    throw Error(`USDG payments only work on Robinhood Chain.`);
  try {
    await J();
    let { request: t } = await M.simulateContract({
      address: Q.token,
      abi: he,
      functionName: `transfer`,
      args: [Q.to, n],
      account: e,
    });
    return await Y(e).writeContract(t);
  } catch (e) {
    throw X(e);
  }
}
async function Rn(e, t = 12e4) {
  let n = null;
  try {
    let r = await M.waitForTransactionReceipt({
      hash: e,
      timeout: t,
      onReplaced: (e) => {
        n = e.reason;
      },
    });
    return n === `cancelled`
      ? { state: `failed`, hash: e }
      : n === `replaced`
      ? { state: `unknown`, hash: r.transactionHash }
      : {
          state: r.status === `success` ? `ok` : `failed`,
          hash: r.transactionHash,
        };
  } catch {
    return { state: `unknown`, hash: e };
  }
}
export {
  Ot as $,
  zt as A,
  ht as B,
  mn as C,
  _t as D,
  An as E,
  Bt as F,
  xt as G,
  Xt as H,
  vt as I,
  Ht as J,
  Et as K,
  Lt as L,
  It as M,
  Jt as N,
  Yt as O,
  Rt as P,
  At as Q,
  pt as R,
  In as S,
  un as T,
  jt as U,
  mt as V,
  Ut as W,
  Ct as X,
  Gt as Y,
  kt as Z,
  pn as _,
  dn as a,
  kn as b,
  Mn as c,
  hn as d,
  qt as et,
  Nn as f,
  Tn as g,
  En as h,
  vn as i,
  wt as j,
  gt as k,
  Rn as l,
  Ln as m,
  yn as n,
  ft as nt,
  nn as o,
  bn as p,
  Kt as q,
  Dn as r,
  dt as rt,
  jn as s,
  Q as t,
  Dt as tt,
  fn as u,
  tn as v,
  gn as w,
  en as x,
  On as y,
  Vt as z,
};
