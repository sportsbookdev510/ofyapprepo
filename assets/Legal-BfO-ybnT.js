import { a as e, n as t, t as n } from "./jsx-runtime-C27Mmbu5.js";
import { y as r } from "./index-Dl_p4h_u.js";
import { t as i } from "./features-BAGssNv0.js";
var a = e(t(), 1),
  o = n(),
  s = (0, o.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    children: (0, o.jsx)(`path`, {
      d: `M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.5L6.3 22H3.2l7.3-8.3L2.4 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L8.3 3.8H6.5L17.8 20Z`,
    }),
  }),
  c = (0, o.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    children: (0, o.jsx)(`path`, {
      d: `M21.9 4.3 18.9 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.2c-.3.3-.5.5-1 .5l.4-4.9L18.6 6c.4-.3-.1-.5-.6-.2L7.1 12.6l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1.2 1.5Z`,
    }),
  });
function l({ items: e, ff: t }) {
  return e.map((e, n) =>
    typeof e == `string`
      ? (0, o.jsx)(`p`, { children: e }, n)
      : e.list
      ? (0, o.jsx)(
          `ul`,
          {
            children: e.list
              .filter((e) => typeof e == `string` || t[e.ff])
              .map((e, t) =>
                (0, o.jsx)(
                  `li`,
                  { children: typeof e == `string` ? e : e.text },
                  t
                )
              ),
          },
          n
        )
      : e.note
      ? (0, o.jsx)(`div`, { className: `legal-note`, children: e.note }, n)
      : null
  );
}
function u({ doc: e }) {
  let [t, n] = (0, a.useState)(i);
  (0, a.useEffect)(() => {
    let e = !0;
    return (
      fetch(`/api/features`)
        .then((e) => (e.ok ? e.json() : null))
        .then((t) => {
          e && t && n({ ...i, ...t });
        })
        .catch(() => {}),
      () => {
        e = !1;
      }
    );
  }, []);
  let u = (0, a.useRef)(null);
  (0, a.useEffect)(() => {
    document.documentElement.style.fontSize = ``;
    let e = u.current;
    if (!e) return;
    if (window.matchMedia(`(prefers-reduced-motion:reduce)`).matches) {
      e.querySelectorAll(`.anim, .reveal`).forEach((e) =>
        e.classList.add(`in`)
      );
      return;
    }
    let t = [...e.querySelectorAll(`.anim`)],
      n = setTimeout(() => {
        t.forEach((e) => {
          (e.style.transitionDelay =
            (e.dataset.delay ? parseInt(e.dataset.delay, 10) : 0) + `ms`),
            e.classList.add(`in`);
        });
      }, 60),
      r = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting &&
              (e.target.classList.add(`in`), r.unobserve(e.target));
          });
        },
        { threshold: 0.12, rootMargin: `0px 0px -8% 0px` }
      );
    return (
      e.querySelectorAll(`.reveal`).forEach((e, t) => {
        (e.style.transitionDelay = Math.min(t * 40, 200) + `ms`), r.observe(e);
      }),
      () => {
        clearTimeout(n), r.disconnect();
      }
    );
  }, [e]);
  let d = (e) => (t) => {
    t.preventDefault();
    let n = u.current?.querySelector(`#${e}`),
      r = window.matchMedia(`(prefers-reduced-motion:reduce)`).matches;
    n && n.scrollIntoView({ behavior: r ? `auto` : `smooth`, block: `start` });
  };
  return (0, o.jsxs)(`div`, {
    id: `site`,
    className: `legal`,
    ref: u,
    children: [
      (0, o.jsxs)(`nav`, {
        className: `legal-nav`,
        children: [
          (0, o.jsx)(r, {
            className: `legal-brand`,
            to: `/`,
            children: (0, o.jsx)(`img`, {
              className: `brand-mark`,
              src: `/offyield-logo.png`,
              alt: `Offyield`,
              width: `132`,
              height: `132`,
            }),
          }),
          (0, o.jsxs)(`div`, {
            className: `legal-nav-links`,
            children: [
              (0, o.jsx)(r, { to: `/`, children: `Home` }),
              (0, o.jsx)(r, { to: `/docs`, children: `Docs` }),
              (0, o.jsx)(r, {
                to: `/privacy`,
                className: e.key === `privacy` ? `active` : ``,
                children: `Privacy`,
              }),
              (0, o.jsx)(r, {
                to: `/terms`,
                className: e.key === `terms` ? `active` : ``,
                children: `Terms`,
              }),
            ],
          }),
        ],
      }),
      (0, o.jsx)(`header`, {
        className: `legal-hero`,
        children: (0, o.jsxs)(`div`, {
          className: `legal-shell`,
          children: [
            (0, o.jsxs)(`span`, {
              className: `eyebrow anim rise`,
              "data-delay": `0`,
              children: [(0, o.jsx)(`span`, { className: `dot` }), `Legal`],
            }),
            (0, o.jsxs)(`h1`, {
              className: `legal-title anim rise`,
              "data-delay": `60`,
              children: [
                e.titleLead,
                ` `,
                (0, o.jsx)(`span`, {
                  className: `accent`,
                  children: e.titleAccent,
                }),
              ],
            }),
            (0, o.jsx)(`p`, {
              className: `legal-lede anim rise`,
              "data-delay": `120`,
              children: e.lede,
            }),
            (0, o.jsxs)(`div`, {
              className: `legal-meta anim rise`,
              "data-delay": `180`,
              children: [
                (0, o.jsxs)(`span`, { children: [`Last updated `, e.updated] }),
                (0, o.jsx)(`span`, { className: `legal-dot` }),
                (0, o.jsx)(`span`, { children: `Offyield LLC` }),
              ],
            }),
            (0, o.jsx)(`div`, {
              className: `legal-toc anim rise`,
              "data-delay": `240`,
              children: e.sections.map((e) =>
                (0, o.jsx)(
                  `a`,
                  {
                    href: `#${e.id}`,
                    onClick: d(e.id),
                    children: e.short ?? e.h,
                  },
                  e.id
                )
              ),
            }),
          ],
        }),
      }),
      (0, o.jsx)(`div`, { className: `legal-rule`, "aria-hidden": `true` }),
      (0, o.jsx)(`main`, {
        className: `legal-body`,
        children: (0, o.jsxs)(`div`, {
          className: `legal-shell`,
          children: [
            e.sections.map((e, n) =>
              (0, o.jsxs)(
                `section`,
                {
                  className: `legal-section reveal`,
                  id: e.id,
                  children: [
                    (0, o.jsx)(`div`, {
                      className: `legal-section-index`,
                      children: String(n + 1).padStart(2, `0`),
                    }),
                    (0, o.jsxs)(`div`, {
                      className: `legal-section-copy`,
                      children: [
                        (0, o.jsx)(`h2`, { children: e.h }),
                        (0, o.jsx)(l, { items: e.body, ff: t }),
                      ],
                    }),
                  ],
                },
                e.id
              )
            ),
            (0, o.jsxs)(`section`, {
              className: `legal-section legal-contact reveal`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `legal-section-index`,
                  children: `✦`,
                }),
                (0, o.jsxs)(`div`, {
                  className: `legal-section-copy`,
                  children: [
                    (0, o.jsx)(`h2`, { children: `Contact` }),
                    (0, o.jsxs)(`p`, {
                      children: [
                        `Questions about this `,
                        e.kind,
                        `? Reach the team at `,
                        (0, o.jsx)(`a`, {
                          href: `mailto:team@offyield.com`,
                          children: `team@offyield.com`,
                        }),
                        `. For security reports, please use a private channel rather than a public issue.`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, o.jsx)(`footer`, {
        className: `footer`,
        children: (0, o.jsxs)(`div`, {
          className: `footer-inner`,
          children: [
            (0, o.jsxs)(`div`, {
              className: `brand`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `logo`,
                  children: (0, o.jsx)(`img`, {
                    className: `brand-mark lg`,
                    src: `/offyield-logo.png`,
                    alt: `Offyield`,
                    width: `140`,
                    height: `140`,
                  }),
                }),
                (0, o.jsx)(`p`, {
                  children: `Spend your interest, never your principal. A yield-only card built on Robinhood Chain.`,
                }),
              ],
            }),
            (0, o.jsxs)(`div`, {
              className: `cols`,
              children: [
                (0, o.jsxs)(`div`, {
                  className: `col`,
                  children: [
                    (0, o.jsx)(`h4`, { children: `Product` }),
                    (0, o.jsx)(r, { to: `/`, children: `How it works` }),
                    (0, o.jsx)(r, { to: `/`, children: `The one rule` }),
                    (0, o.jsx)(r, { to: `/`, children: `The chain` }),
                    (0, o.jsx)(r, { to: `/docs`, children: `Docs` }),
                  ],
                }),
                (0, o.jsxs)(`div`, {
                  className: `col`,
                  children: [
                    (0, o.jsx)(`h4`, { children: `Legal` }),
                    (0, o.jsx)(r, {
                      to: `/privacy`,
                      className: e.key === `privacy` ? `active` : ``,
                      children: `Privacy Policy`,
                    }),
                    (0, o.jsx)(r, {
                      to: `/terms`,
                      className: e.key === `terms` ? `active` : ``,
                      children: `Terms of Service`,
                    }),
                    (0, o.jsx)(`a`, {
                      href: `https://github.com/shieldify-security/audits-portfolio/blob/main/reports/OffYield-Security-Review.pdf`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      children: `Audit`,
                    }),
                  ],
                }),
                (0, o.jsxs)(`div`, {
                  className: `col`,
                  children: [
                    (0, o.jsx)(`h4`, { children: `Connect` }),
                    (0, o.jsxs)(`div`, {
                      className: `social-btns`,
                      children: [
                        (0, o.jsxs)(`a`, {
                          className: `social-btn`,
                          href: `https://x.com/offyieldapp`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "aria-label": `Offyield on X`,
                          children: [
                            s,
                            (0, o.jsx)(`span`, { children: `@offyieldapp` }),
                          ],
                        }),
                        
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var d = `September 28, 2026`,
  f = {
    key: `privacy`,
    kind: `privacy policy`,
    titleLead: `Privacy`,
    titleAccent: `Policy`,
    updated: d,
    lede: `Offyield is non-custodial and privacy-first. We built the app so you can use it without creating an account, handing over your identity, or being tracked. This policy explains the little data that is involved and who processes it.`,
    sections: [
      {
        id: `who-we-are`,
        h: `Who we are`,
        short: `Who we are`,
        body: [
          `Offyield ("Offyield", "we", "us") is a product of Offyield LLC, a Wyoming limited liability company. Offyield provides a non-custodial software interface to smart contracts deployed on Robinhood Chain. We do not take custody of your funds, hold your private keys, or operate as a bank.`,
          `You can contact us about privacy at team@offyield.com.`,
        ],
      },
      {
        id: `no-account`,
        h: `You use Offyield without an account`,
        short: `No account`,
        body: [
          `Using the Offyield app requires no sign-up, no email, and no name. You interact with the smart contracts directly from your own self-custodial wallet. Because there is no account, there is no account profile for us to build, store, or lose.`,
          {
            list: [
              `We do not require your name, email address, phone number, or government identity to use the app. If you buy a card, the details the card provider needs pass through our server to that provider; Offyield never stores your email or name, and keeps only the short cashback record described below.`,
              `We do not run advertising or behavioral-tracking pixels, and we do not sell or rent personal data — ever.`,
              `We cannot access your wallet, your seed phrase, or your private keys, and we never ask for them.`,
            ],
          },
        ],
      },
      {
        id: `what-is-processed`,
        h: `Information involved when you use the app`,
        short: `What’s processed`,
        body: [
          `A small amount of data is unavoidably involved in delivering a web app that reads a public blockchain:`,
          {
            list: [
              `Public on-chain data. Your wallet address and its transactions are public on Robinhood Chain by nature. When you connect a wallet, the app reads your address and on-chain position through blockchain RPC endpoints to display your balances. This data lives on a public ledger we do not control and cannot alter or delete.`,
              `Technical delivery data. Like any website, our hosting and content-delivery infrastructure processes basic request metadata (such as IP address, timestamp, and browser type) to serve pages and protect against abuse. This is standard server logging, not profiling.`,
              `Local storage. The app may store small amounts of data in your browser (for example, interface state) so it works correctly. This is not used for advertising or cross-site tracking.`,
              `Card cashback records. Every prepaid card bought through the app earns 5% cashback in USDG, which we pay by hand once the card is delivered. To do that, our server keeps one record per card in a database run by Upstash, our database provider: your wallet address, the card reference shown to you (OFY-…), the card provider’s order id, the card brand, its value and storefront country, the order and delivery dates, the cashback status (and, if we decline it, our reason), and the transaction that paid it. Your email address and name are still never stored. A record is deleted 30 days after the cashback is paid or declined (an unpaid card’s record after 90 days). Only each payout transaction’s hash (public on the chain anyway) and the card reference it paid are kept longer, so one payment can never be counted twice. Our team can see these records only after signing in with a team wallet and a one-time code, and every time a full wallet address is shown to us it is logged. That activity log (sign-ins, and which card references were paid, declined or had their wallet shown; never the wallet itself or a decline reason) is kept for 90 days.`,
            ],
          },
          {
            note: `When you connect a wallet, your browser shares only your public address. Your seed phrase and private keys never leave your wallet and are never transmitted to us.`,
          },
        ],
      },
      {
        id: `third-parties`,
        h: `Third-party services`,
        short: `Third parties`,
        body: [
          `Offyield relies on a few third parties to function. Each has its own privacy practices, and where they receive data (such as your IP address) they act as independent controllers or as our processors:`,
          {
            list: [
              `Hosting and content delivery — serve the website and process request logs for delivery and security.`,
              `Database (Upstash) — stores the card cashback records and the team activity log described above, as our processor.`,
              `Blockchain RPC providers — endpoints for Robinhood Chain that receive your requests when the app reads or submits on-chain data.`,
              `Wallet providers — the self-custodial wallet you choose (for example, a browser wallet) is governed by that provider’s own terms and privacy policy.`,
              `Font delivery — a third-party font service may receive your IP address in order to serve typefaces.`,
              `Card provider (buying a prepaid card or gift card). When you buy one, the app sends the card you chose, its value, the storefront country, the delivery email, the card holder name where the card issuer requires one, and your wallet address to Offyield’s server, which passes them to the card provider, CryptoRefills, together with your IP address as CryptoRefills requires, so it can create and deliver your order. Offyield does not store the delivery email or the card holder name; it keeps only the cashback record described above. CryptoRefills handles these details under its own privacy policy. CryptoRefills pays Offyield a commission on card orders.`,
              {
                ff: `BRIDGE_IN`,
                text: `Bridge (adding funds from another chain). The app asks Relay, the bridge, for a price and for your transfer’s status directly from your browser, which shares your wallet address, the chain, token and amount, and the transaction’s details with Relay under its own privacy policy. Offyield’s server is not involved. An unfinished transfer is kept in your browser’s storage (no email or name) so its status can be followed after a reload.`,
              },
              {
                ff: `SWAP_ETH`,
                text: `Swap (turning ETH into USDG in the app). The swap runs on Uniswap’s contracts on Robinhood Chain from your own wallet; the app reads the price from the chain and checks it against Chainlink’s public price feed. No data goes to Offyield’s server.`,
              },
              {
                ff: `PAY_WITH_INTEREST`,
                text: `Paying a card from your interest. The app asks Across, the bridge, for a price and for your payment’s status, which shares the amount and the payment’s transaction hash. Offyield’s server asks the card provider whether your order is still waiting for payment, passing your IP address as CryptoRefills requires. The order and its transactions are kept in your browser’s storage (no email or name) so an unfinished payment can be resumed.`,
              },
              {
                ff: `MY_CARDS`,
                text: `Card history. The cards you ordered from a browser are listed from that browser’s storage (card, amount, date and order status; no email or name) until you clear its site data.`,
              },
              {
                ff: `WALLET_REACH`,
                text: `Wallet choice. If several wallets are installed, the one you pick is remembered in your browser’s storage so the app can reconnect to it on your next visit without asking.`,
              },
              `Card issuing partner (future). When the Offyield card becomes available, identity verification (KYC) will be performed by a regulated third-party card issuer under its own privacy policy and legal obligations. Offyield does not carry out that verification, and any identity documents you provide for a card are handled by that partner, not stored by Offyield as part of the app.`,
            ],
          },
        ],
      },
      {
        id: `how-we-use`,
        h: `How the data is used`,
        short: `How it’s used`,
        body: [
          `The limited data described above is used only to operate, secure, maintain, and improve the app, and to comply with applicable law. It is not used for advertising, and it is not sold.`,
        ],
      },
      {
        id: `sharing`,
        h: `Sharing`,
        short: `Sharing`,
        body: [
          `We do not sell personal data. We share the limited data described above only with the service providers listed above so the app can function, and where we are legally required to do so (for example, in response to a valid legal request), or to protect the rights, safety, and security of users and the service.`,
        ],
      },
      {
        id: `security`,
        h: `Security`,
        short: `Security`,
        body: [
          `We design the app to minimize the data at stake — the strongest protection is not collecting information in the first place. We apply reasonable technical measures to the systems we control. No method of transmission or storage is perfectly secure, and the security of your funds ultimately depends on you keeping your wallet and private keys safe. We can never recover a lost key or reverse an on-chain transaction.`,
        ],
      },
      {
        id: `your-choices`,
        h: `Your choices and rights`,
        short: `Your rights`,
        body: [
          `Because we hold little or no personal data about you, there is usually nothing tied to an identity for us to retrieve or erase. Where applicable data-protection law gives you rights over any personal data we do process, you may contact us at team@offyield.com to exercise them, and we will respond as required by law.`,
          {
            note: `On-chain data cannot be edited or deleted by anyone, including us — it is a permanent, public record maintained by the blockchain network, not by Offyield.`,
          },
        ],
      },
      {
        id: `jurisdiction-age`,
        h: `Eligibility and international use`,
        short: `Eligibility`,
        body: [
          `Offyield is intended for users who are at least 18 years old and who are not located in, or residents of, any jurisdiction where use of the app is prohibited or restricted, and who are not subject to applicable sanctions. The app is not directed to children, and we do not knowingly collect information from anyone under 18.`,
        ],
      },
      {
        id: `changes`,
        h: `Changes to this policy`,
        short: `Changes`,
        body: [
          `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Material changes will be reflected here; your continued use of the app after an update means you accept the revised policy.`,
        ],
      },
    ],
  },
  p = {
    key: `terms`,
    kind: `terms of service`,
    titleLead: `Terms of`,
    titleAccent: `Service`,
    updated: d,
    lede: `These terms govern your use of the Offyield app. Offyield is non-custodial software — you keep control of your funds at all times. Please read these terms, and the risks, carefully before using the app.`,
    sections: [
      {
        id: `acceptance`,
        h: `Acceptance of these terms`,
        short: `Acceptance`,
        body: [
          `The Offyield app is provided by Offyield LLC, a Wyoming limited liability company ("Offyield", "we", "us"). By accessing or using the app, you agree to these Terms of Service and to our Privacy Policy. If you do not agree, do not use the app.`,
        ],
      },
      {
        id: `what-offyield-is`,
        h: `What Offyield is — and is not`,
        short: `What it is`,
        body: [
          `Offyield is a non-custodial software interface to smart contracts on Robinhood Chain. It lets you deposit a supported stablecoin so that your principal is supplied to an on-chain lending market, and spend only the interest that accrues — never the principal. That is the one rule, and it is enforced by the smart contract itself.`,
          {
            list: [
              `Offyield is software. We provide an interface to public smart contracts; we do not take custody of your assets and never hold your private keys.`,
              `Offyield is not a bank, broker-dealer, money transmitter, exchange, custodian, or investment adviser, and nothing in the app is financial, investment, legal, or tax advice.`,
              `Your deposits are not bank deposits and are not insured by any government agency or deposit-insurance scheme.`,
            ],
          },
        ],
      },
      {
        id: `beta`,
        h: `Early access`,
        short: `Early access`,
        body: [
          `The app is in early access. It operates on Robinhood Chain with real USDG, with deposit limits in place while we scale up; a separate test network may also be offered for trying the app, where tokens have no monetary value. Features may change, pause, or be removed, and the software is provided on an "as is" and "as available" basis. Do not deposit anything you are not prepared to lose.`,
        ],
      },
      {
        id: `eligibility`,
        h: `Eligibility`,
        short: `Eligibility`,
        body: [
          `To use Offyield you represent that you are at least 18 years old and have the legal capacity to enter into these terms; that you are not located in, a resident of, or accessing the app from a jurisdiction where doing so is prohibited or restricted; that you are not a person or entity subject to applicable sanctions; and that your use complies with all laws that apply to you. You are solely responsible for understanding and following the laws of your jurisdiction, including any tax obligations.`,
        ],
      },
      {
        id: `third-party-tokens`,
        h: `Third-party tokenised securities`,
        short: `Tokenised securities`,
        body: [
          `Where available, the app may display a list of tokenised securities published by a third-party issuer (for example, Robinhood Stock Tokens issued by Robinhood Assets (Jersey) Ltd) together with links to third-party venues where those tokens trade. Offyield is not the issuer, distributor, broker, dealer, exchange or adviser for any such token; does not offer, sell, recommend, route or execute any transaction in them; and receives no fee, commission, referral or other compensation in connection with them. Any transaction you enter into on a third-party venue is between you and that venue, from your own wallet, on that venue’s terms.`,
          `Such tokens are subject to the issuer’s own restrictions. Per the issuer, Robinhood Stock Tokens are not available in the United States or to U.S. persons (as defined in Regulation S), nor in Canada, the United Kingdom or Switzerland, and the app does not make the list available in those regions. By using that part of the app you confirm you are not a restricted person and are not located in a restricted region, and you agree not to circumvent that restriction. The list is provided for information only and is not an offer, solicitation, recommendation or advice.`,
        ],
      },
      {
        id: `non-custodial`,
        h: `Non-custodial: your wallet, your responsibility`,
        short: `Your responsibility`,
        body: [
          `You interact with the smart contracts directly from your own self-custodial wallet. You are solely responsible for maintaining the security of your wallet, seed phrase, and private keys, and for every transaction you authorize.`,
          {
            list: [
              `On-chain transactions are final and irreversible. We cannot cancel, reverse, or refund them.`,
              `We cannot recover a lost or compromised private key, and we cannot move your funds on your behalf.`,
              `You are responsible for verifying transaction details and network fees before you sign.`,
            ],
          },
        ],
      },
      {
        id: `how-it-works`,
        h: `The protocol and yield`,
        short: `The protocol`,
        body: [
          `When you deposit, your principal is supplied to a third-party ERC-4626 lending venue on Robinhood Chain and begins accruing interest. The app displays your spendable interest, which you may withdraw or spend; your principal remains locked to spending by the contract and is withdrawable by you at any time through the contract’s withdrawal path.`,
          `Interest is generated by a third-party venue and is variable. It is not fixed, promised, or guaranteed by Offyield, and past or displayed rates do not predict future returns. In the event the underlying venue loses value, a position may become impaired and settle at its real, reduced value on a pro-rata basis, as the contract provides.`,
        ],
      },
      {
        id: `risks`,
        h: `Risks you accept`,
        short: `Risks`,
        body: [
          `Using blockchain-based software carries significant risk. By using Offyield you acknowledge and accept, among others:`,
          {
            list: [
              `Smart-contract risk — code may contain vulnerabilities despite testing and review.`,
              `Venue and impairment risk — the underlying lending market may lose value, reducing what a position can return.`,
              `Stablecoin risk — a supported stablecoin may lose its peg or become illiquid.`,
              `Technology and availability risk — RPC endpoints, networks, wallets, or the interface may be unavailable, delayed, or fail.`,
              `Regulatory risk — laws affecting digital assets may change and affect your ability to use the app.`,
              `No insurance — your assets are not covered by any deposit insurance or government guarantee.`,
            ],
          },
        ],
      },
      {
        id: `card`,
        h: `The Offyield card`,
        short: `The card`,
        body: [
          `The Offyield card is in development and is not yet generally available. When offered, the card will be issued by a regulated third-party issuing partner, subject to that partner’s own terms and to identity verification (KYC) required by law. Offyield is not the card issuer, a bank, or a money-services business. Card availability may be limited by jurisdiction, and using the card will require agreeing to the issuer’s terms.`,
        ],
      },
      {
        id: `acceptable-use`,
        h: `Acceptable use`,
        short: `Acceptable use`,
        body: [
          `You agree not to use the app for any unlawful, harmful, or abusive purpose, including money laundering, terrorist financing, sanctions evasion, fraud, or market manipulation; to attempt to exploit, attack, or interfere with the smart contracts, the interface, or the networks they rely on; to circumvent eligibility or geographic restrictions; or to infringe the rights of others. We may restrict access to the interface where required by law or to protect the service and its users, though we cannot alter the underlying public smart contracts.`,
        ],
      },
      {
        id: `ip`,
        h: `Intellectual property`,
        short: `Intellectual property`,
        body: [
          `The Offyield name, brand, interface, and content are owned by Offyield LLC or its licensors and are protected by applicable law. Open-source components are provided under their respective licenses. We grant you a limited, non-exclusive, non-transferable, revocable license to use the app for its intended purpose, subject to these terms. All rights not expressly granted are reserved.`,
        ],
      },
      {
        id: `third-party`,
        h: `Third-party services`,
        short: `Third parties`,
        body: [
          `The app depends on third parties we do not control, including Robinhood Chain and its validators, blockchain RPC providers, wallet software, the underlying lending venue, and (for the card) a future issuing partner. We are not responsible for the acts, omissions, availability, or performance of these third parties, and your use of them is governed by their own terms.`,
        ],
      },
      {
        id: `disclaimer`,
        h: `Disclaimer of warranties`,
        short: `Disclaimers`,
        body: [
          `To the maximum extent permitted by law, the app is provided "as is" and "as available", without warranties of any kind, whether express, implied, or statutory, including any implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the app will be uninterrupted, secure, error-free, or that any defect will be corrected.`,
        ],
      },
      {
        id: `liability`,
        h: `Limitation of liability`,
        short: `Liability`,
        body: [
          `To the maximum extent permitted by law, Offyield LLC and its members, contributors, and affiliates will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, assets, data, or goodwill, arising out of or relating to your use of (or inability to use) the app, even if advised of the possibility of such damages. Nothing in these terms excludes liability that cannot be excluded under applicable law.`,
        ],
      },
      {
        id: `indemnity`,
        h: `Indemnification`,
        short: `Indemnification`,
        body: [
          `You agree to indemnify and hold harmless Offyield LLC and its members, contributors, and affiliates from and against any claims, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of the app, your violation of these terms, or your violation of any law or the rights of any third party.`,
        ],
      },
      {
        id: `no-advice`,
        h: `No financial advice`,
        short: `No advice`,
        body: [
          `Nothing in the app or these terms constitutes financial, investment, legal, accounting, or tax advice, or a recommendation to enter into any transaction. You are solely responsible for your own decisions and should consult your own professional advisers as appropriate.`,
        ],
      },
      {
        id: `governing-law`,
        h: `Governing law and disputes`,
        short: `Governing law`,
        body: [
          `These terms are governed by the laws of the State of Wyoming, without regard to its conflict-of-laws rules, except where mandatory law in your place of residence requires otherwise. You agree that any dispute will be resolved on an individual basis, and you waive any right to participate in a class or representative action, to the extent permitted by law.`,
        ],
      },
      {
        id: `changes`,
        h: `Changes to these terms`,
        short: `Changes`,
        body: [
          `We may update these terms from time to time. When we do, we will revise the "Last updated" date at the top of this page. Your continued use of the app after an update means you accept the revised terms. If you do not agree to a change, stop using the app.`,
        ],
      },
    ],
  };
export { f as n, p as r, u as t };
