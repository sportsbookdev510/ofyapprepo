import { a as e, n as t, t as n } from "./jsx-runtime-C27Mmbu5.js";
import { y as r } from "./index-Dl_p4h_u.js";
import { t as i } from "./features-BAGssNv0.js";
var a = e(t(), 1),
  o = `September 29, 2026`,
  s = [
    {
      id: `start`,
      title: `Getting started`,
      blurb: `What Offyield is, and your first deposit.`,
      pages: [
        {
          id: `introduction`,
          h: `Introduction`,
          body: [
            `Offyield is a non-custodial app on Robinhood Chain built around one rule: you spend the interest, never the principal. You deposit USDG, it is supplied to a single lending market, and only the interest it earns ever becomes spendable. Your deposit stays locked to spending by the smart contract itself, not by a setting or a promise.`,
            {
              list: [
                `Principal — what you deposited. It is never spendable, and you can withdraw it whenever you want.`,
                `Spendable yield — interest accrued, minus interest you have already spent or taken out. Nothing else ever feeds it.`,
                `Non-custodial — you act from your own wallet. Offyield never holds your funds or your keys.`,
              ],
            },
            {
              note: `Offyield is in early access. It runs with real USDG on Robinhood Chain, with deposits capped while we scale up.`,
            },
          ],
        },
        {
          id: `requirements`,
          h: `What you need`,
          body: [
            {
              table: {
                head: [`Item`, `Details`],
                rows: [
                  [
                    `Wallet`,
                    `MetaMask (browser extension, or the MetaMask in-app browser on a phone).`,
                  ],
                  [
                    `Network`,
                    `Robinhood Chain. The app asks your wallet to switch — and adds the network if it’s missing.`,
                  ],
                  [
                    `Deposit asset`,
                    `USDG, the Paxos-issued stablecoin native to Robinhood Chain.`,
                  ],
                  [
                    `Gas`,
                    `A little ETH on Robinhood Chain. About $1 of ETH covers many deposits.`,
                  ],
                ],
              },
            },
            {
              p: `Access to the app is not available from sanctioned regions (Cuba, Iran, North Korea and Syria). The public website stays readable everywhere.`,
            },
          ],
        },
        {
          id: `first-deposit`,
          h: `Your first deposit`,
          body: [
            {
              steps: [
                {
                  t: `Connect MetaMask`,
                  d: `Open the app and connect. Approve the switch to Robinhood Chain if your wallet asks.`,
                },
                {
                  t: `Get a little ETH for gas`,
                  d: `Any small amount of ETH on Robinhood Chain pays for your transactions.`,
                },
                {
                  t: `Hold USDG in your wallet`,
                  d: `This is what you will deposit. See “Adding funds” for the ways to get it.`,
                },
                {
                  t: `Deposit from the Vault tab`,
                  d: `Enter an amount and sign twice: first approve this exact amount, then deposit it.`,
                },
              ],
            },
            `Once the deposit confirms, your principal shows as locked and interest starts accruing immediately. The spendable number on Overview grows on its own; there is nothing to claim.`,
          ],
        },
      ],
    },
    {
      id: `concepts`,
      title: `Core concepts`,
      blurb: `Principal, yield, and the rules the contract enforces.`,
      pages: [
        {
          id: `the-one-rule`,
          h: `The one rule`,
          body: [
            `Principal and spendable yield are separate accounting values inside the vault contract. A spend can only draw from spendable yield. If a charge is larger than your accrued interest it is declined whole — there is no partial fill, and no fallback path that tops up the shortfall from your deposit.`,
            `Principal leaves only when you explicitly withdraw it, in full or in part, straight back to your own wallet. A spend can never trigger it.`,
          ],
        },
        {
          id: `yield`,
          h: `Where the yield comes from`,
          body: [
            `Deposits are supplied to one lending market on Robinhood Chain: the Steakhouse USDG vault on Morpho. The interest is plain lending interest paid by borrowers. There is no validator staking, no leverage, no strategy rotation and no rehypothecation, and your deposit and its interest never touch the $OFY token.`,
            {
              note: `The rate is variable and set by the lending market. It is not fixed, promised or guaranteed, and past rates don’t predict future ones.`,
              tone: `warn`,
            },
          ],
        },
        {
          id: `fail-closed`,
          h: `Fails closed`,
          body: [
            `When the app cannot read the chain, it assumes the safest thing rather than guessing:`,
            {
              list: [
                `Spendable shows 0 and spending is disabled (“Chain unreachable — showing 0, spending disabled”).`,
                `Deposits and card checkout are disabled until reads recover.`,
                `Withdrawals stay available — the transaction itself verifies everything on-chain.`,
                `Activity hides vault events it can’t read, instead of showing stale ones.`,
              ],
            },
          ],
        },
        {
          id: `numbers`,
          h: `How the numbers update`,
          body: [
            `Every balance is read live from the vault contract about every 15 seconds, all from the same block, so the figures always agree with each other. Nothing is estimated in your browser.`,
            {
              table: {
                head: [`Figure`, `Meaning`],
                rows: [
                  [
                    `Principal (locked)`,
                    `What you deposited, minus principal you withdrew. Never spendable.`,
                  ],
                  [`Spendable yield`, `Interest you can spend right now.`],
                  [
                    `Position value`,
                    `What your position is worth in the lending market today.`,
                  ],
                  [
                    `Interest earned`,
                    `Interest already paid out plus interest spendable now.`,
                  ],
                  [`Supply APY`, `Variable, set by the lending market.`],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: `app`,
      title: `Using the app`,
      blurb: `A tour of every tab in the dashboard.`,
      pages: [
        {
          id: `overview`,
          h: `Overview`,
          body: [
            `Your home screen. It leads with spendable yield, then principal locked and interest earned, with quick actions to Spend yield or Add principal.`,
            {
              list: [
                `Stat tiles for principal, position value, interest paid out (all time) and the current supply APY.`,
                `“Interest earned this session” — a live chart while the page is open.`,
                `Recent activity — your latest vault events from the past 30 days.`,
                {
                  ff: `PROJECTION`,
                  text: `Next card date — an estimate of when your interest will cover a card, from the rate the vault actually earned over the last 7 and 30 days. You can add it to your calendar.`,
                },
                {
                  ff: `ONBOARDING`,
                  text: `A first-deposit checklist that walks you through connecting, gas, USDG and your deposit. You can hide it.`,
                },
              ],
            },
          ],
        },
        {
          id: `vault`,
          h: `Vault`,
          body: [
            `Deposit and withdraw USDG principal.`,
            {
              list: [
                `Deposits take two signatures: approve this exact amount, then deposit.`,
                `Early-access limits are read live from the contract and shown above the form — a per-deposit maximum and the room left in the vault.`,
                `The form refuses a deposit before asking you to sign if it can’t go through: deposits paused, the vault full, not enough USDG, or over the per-deposit limit.`,
              ],
            },
            {
              note: `Your deposit is supplied to a lending market and can lose value if that market takes a loss. See “Risks”.`,
              tone: `warn`,
            },
          ],
        },
        {
          id: `spend`,
          h: `Spend`,
          body: [
            `Draws from accrued interest only. You can send interest as USDG to your own wallet, or turn it into a prepaid card from the card shop.`,
            `Enter more than your accrued interest and the app tells you up front that the contract will decline it. Spending is also disabled while the vault is paused, if your position is impaired, or when the chain can’t be reached.`,
          ],
        },
        {
          id: `activity`,
          h: `Activity`,
          body: [
            `The last 30 days of your position. Vault events come straight from the chain: deposits, yield spends, principal withdrawals, impaired (pro-rata) withdrawals, position exits, emergency exits and lending-market devaluations.`,
            `Actions that happen outside the vault — such as card orders, swaps or bridges — are recorded in this browser only, so they appear on the device you used.`,
          ],
        },
        {
          id: `chain-tab`,
          h: `Chain`,
          body: [
            `Network facts for Robinhood Chain and a short explainer of how the dashboard numbers update.`,
            {
              table: {
                head: [`Property`, `Value`],
                rows: [
                  [`Network`, `Robinhood Chain`],
                  [
                    `Type`,
                    `Arbitrum Orbit rollup, EVM-compatible, settles to Ethereum`,
                  ],
                  [`Chain id`, `4663`],
                  [`Stablecoin`, `USDG (Paxos)`],
                ],
              },
            },
          ],
        },
        {
          id: `wallet-session`,
          h: `Wallet and session`,
          body: [
            {
              list: [
                `Refreshing the page keeps you connected.`,
                `After 30 minutes without activity you are disconnected automatically.`,
                `Disconnect revokes the site’s permission in MetaMask and returns you to the home page.`,
                `Before every transaction the app confirms your wallet is on Robinhood Chain.`,
                {
                  ff: `WALLET_REACH`,
                  text: `If several wallets are installed you can pick one, and the app remembers it for next time. On a phone, “Open in MetaMask” opens the app in MetaMask’s browser.`,
                },
              ],
            },
          ],
        },
        {
          id: `settings`,
          h: `Settings`,
          ff: `SETTINGS`,
          body: [
            {
              list: [
                `Passcode lock — 4 to 8 digits, stored only as a hash in your browser. After 5 wrong tries, each further try waits 30 seconds.`,
                `Auto-lock — never, or after 5 minutes, 15 minutes or 1 hour.`,
                `Hide balances — blurs amounts on screen.`,
                `Reset this browser’s data — clears local app data. Your funds and on-chain history are not affected.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `funds`,
      title: `Adding funds`,
      blurb: `Getting USDG and gas onto Robinhood Chain.`,
      pages: [
        {
          id: `getting-usdg`,
          h: `Getting USDG`,
          body: [
            `You need USDG on Robinhood Chain in your MetaMask wallet before you deposit. Always send a small test amount first, and make sure it’s the genuine USDG token on the right network.`,
            {
              list: [
                {
                  ff: `ADD_FUNDS`,
                  text: `Add funds — the Vault tab shows the USDG and gas in your wallet, how much you can deposit, and fills in the deposit when new USDG arrives.`,
                },
                {
                  ff: `FUND_EXCHANGE`,
                  text: `From an exchange — withdraw USDG straight to your wallet on Robinhood Chain from Robinhood, Kraken, KuCoin, OKX or Gate. Availability, minimums and fees depend on the exchange and your region; the app lists them.`,
                },
                {
                  ff: `SWAP_ETH`,
                  text: `Swap ETH to USDG — one transaction on Uniswap, checked against Chainlink’s ETH/USD price, with a guaranteed minimum shown before you sign. The app keeps a little ETH aside for gas.`,
                },
                {
                  ff: `BRIDGE_IN`,
                  text: `Bridge in — bring USDC, USDT or ETH from Base, Arbitrum, Ethereum, Optimism or Polygon through Relay. If your wallet has almost no ETH, a little is added for gas. Tracking resumes after a reload.`,
                },
                `Any wallet or exchange that can send USDG on Robinhood Chain works.`,
              ],
            },
          ],
        },
        {
          id: `gas`,
          h: `Gas`,
          body: [
            `Transactions on Robinhood Chain are paid in ETH. A very small amount is enough — about $1 lasts many deposits. If your balance runs low, the app warns you before you try to sign.`,
          ],
        },
      ],
    },
    {
      id: `cards`,
      title: `Cards`,
      blurb: `Turn your interest into a prepaid card.`,
      pages: [
        {
          id: `prepaid-cards`,
          h: `Prepaid cards`,
          body: [
            `Today you can turn your interest into a one-time prepaid card that works online worldwide, supplied by our card provider, CryptoRefills. A reloadable Offyield card is still in development.`,
            {
              table: {
                head: [`Card`, `Notes`],
                rows: [
                  [
                    `Visa`,
                    `US-issued. Works at most online Visa merchants worldwide. Issuer fees apply; expires 12 months after purchase.`,
                  ],
                  [
                    `American Express`,
                    `US only. Funds expire after 6 months. No recurring billing, no ATM.`,
                  ],
                  [
                    `Gift cards`,
                    `Brand gift cards across about 100 storefront countries.`,
                  ],
                ],
              },
            },
            {
              note: `These are one-time USD cards for online use. They are not reloadable and have no 3-D Secure, so some (mostly EU) merchants may decline them.`,
              tone: `warn`,
            },
          ],
        },
        {
          id: `buying-a-card`,
          h: `Buying a card`,
          body: [
            {
              steps: [
                {
                  t: `Pick a card and amount`,
                  d: `Choose the brand and value. The exact total, fees included, is shown before you pay.`,
                },
                {
                  t: `Enter your details`,
                  d: `Full name where the issuer needs it, and the email the card is delivered to. A delivered card can’t be re-sent to another email.`,
                },
                {
                  t: `Review and sign`,
                  d: `Confirm the card terms and sign the order. Signing is free and moves no money.`,
                },
                {
                  t: `Pay`,
                  d: `Pay the exact amount shown, on the network shown, within the time shown.`,
                },
                {
                  t: `Receive it by email`,
                  d: `Delivery is usually within minutes of payment.`,
                },
              ],
            },
            {
              list: [
                {
                  ff: `PAY_WITH_INTEREST`,
                  text: `Pay with interest — pay the order straight from your spendable yield in a few wallet prompts. The bridge fee is shown before you sign.`,
                },
                {
                  ff: `USDG_PAY`,
                  text: `Pay with USDG — a single USDG transfer on Robinhood Chain. If the card can’t be completed, the USDG is sent back.`,
                },
              ],
            },
            `The card provider adds a fee of around 12%, which varies by card. For example, about $33.60 of interest buys a $30 prepaid Visa, fees included. Offyield charges you no fee of its own.`,
          ],
        },
        {
          id: `cashback`,
          h: `Cashback`,
          body: [
            `Once cashback is live, $OFY holders earn 5% cashback in USDG on prepaid cards bought through the app. It’s paid once the card is delivered, and each order shows its card reference (OFY-…) so you can follow it.`,
            `Cashback is funded separately. Your deposit and its interest never touch $OFY.`,
          ],
        },
        {
          id: `my-cards`,
          h: `My cards`,
          ff: `MY_CARDS`,
          body: [
            `Every card you ordered from this browser, with live status, “Finish paying” and “Buy again”. An expiry reminder can be added to your calendar 14 days before a card expires. The list is kept only in this browser and never includes your email or name.`,
          ],
        },
        {
          id: `membership`,
          h: `Membership levels`,
          ff: `OFY_LEVELS`,
          body: [
            `Levels — Member, Silver and Gold — are reached by holding $OFY or by keeping USDG principal in the vault, and holding longer moves you up. Levels are recognition only: they never pay out anything, and your deposit and its interest never touch $OFY.`,
          ],
        },
      ],
    },
    {
      id: `exit`,
      title: `Withdrawing`,
      blurb: `Getting your principal and interest back out.`,
      pages: [
        {
          id: `withdraw`,
          h: `Withdraw principal`,
          body: [
            `From the Vault tab, choose how much principal to take back. A healthy position pays exactly the amount asked, or the transaction cancels. Accrued interest stays spendable after a withdrawal.`,
            {
              note: `Principal withdrawals can never be paused — not by Offyield, not by anyone.`,
            },
          ],
        },
        {
          id: `close-position`,
          h: `Close position`,
          body: [
            `Takes everything out in one step — principal and all accrued interest. The app shows what you’ll receive and the minimum it will accept, and asks you to confirm before you sign.`,
            `Closing works even if the Offyield website goes away: it is a direct call to the vault contract that nobody can pause or block.`,
          ],
        },
        {
          id: `impairment`,
          h: `If the lending market takes a loss`,
          body: [
            `If the underlying market loses value, a position becomes impaired. Withdrawals then pay pro-rata at the position’s real, reduced value, and the shortfall is recorded. New deposits into an impaired position are refused until it’s settled.`,
            `Before an impaired withdrawal, the app checks the payout and asks you to confirm a minimum. If the payout would come in below it, the transaction cancels itself and nothing moves.`,
          ],
        },
        {
          id: `emergency-exit`,
          h: `Emergency exit`,
          body: [
            `If withdrawals or reads keep failing for a wallet that has a position, the app offers “Exit in kind”: your position is paid out as lending-market shares instead of USDG, which you can redeem at the market yourself. It can’t be paused or undone, so it asks you to confirm twice. The market may charge a small fee if it has to pull cash back first.`,
          ],
        },
        {
          id: `pausing`,
          h: `What a pause does`,
          body: [
            `The vault can be paused in an emergency. A pause stops deposits and spending only. Withdrawals, closing a position and the emergency exit all keep working while paused.`,
          ],
        },
      ],
    },
    {
      id: `trust`,
      title: `Security & risk`,
      blurb: `Audit, custody, and what can go wrong.`,
      pages: [
        {
          id: `security`,
          h: `Security`,
          body: [
            {
              list: [
                `The vault contract is audited by Shieldify and its source is publicly verified. The audit report is linked in the footer.`,
                `Offyield never has custody of your funds and never sees your private keys or seed phrase.`,
                `Every flow — deposit, accrual, spend, withdraw — is proven end to end with small amounts before limits are raised.`,
              ],
            },
            {
              note: `Nobody from Offyield will ever DM you first or ask for your seed phrase. Anyone who does is a scammer.`,
              tone: `warn`,
            },
          ],
        },
        {
          id: `risks`,
          h: `Risks`,
          body: [
            {
              list: [
                `Smart-contract risk — code can contain bugs despite audits and testing.`,
                `Lending-market risk — the underlying market can lose value, reducing what a position returns.`,
                `Stablecoin risk — USDG could lose its peg or become illiquid.`,
                `Availability risk — networks, RPCs, wallets or the website can be slow or down (the vault exit still works directly).`,
                `No insurance — deposits are not bank deposits and are not covered by any government scheme.`,
              ],
            },
            `Only deposit what you’re prepared to lose. Read the full Terms of Service before using the app.`,
          ],
        },
        {
          id: `stocks`,
          h: `Stock tokens`,
          body: [
            `Where available, the Stocks tab lists Robinhood Stock Tokens with links to third-party venues where they trade. Offyield doesn’t issue, sell, recommend or route them, and takes no fee. The list is closed in the United States and to US persons, and in Canada, the UK and Switzerland — and stays closed if your region can’t be confirmed.`,
          ],
        },
      ],
    },
    {
      id: `help`,
      title: `FAQ`,
      blurb: `Quick answers to common questions.`,
      pages: [
        {
          id: `faq`,
          h: `Frequently asked questions`,
          body: [
            {
              qa: [
                [
                  `Can Offyield spend or move my deposit?`,
                  `No. The contract only allows spending from accrued interest, and principal only ever goes back to your own wallet when you withdraw it.`,
                ],
                [
                  `Is there a minimum deposit or lock-up?`,
                  `There’s no lock-up — withdraw whenever you want. During early access there’s a per-deposit maximum and a total vault cap, both shown live in the Vault tab.`,
                ],
                [
                  `What does Offyield charge?`,
                  `Nothing of its own. Third-party costs — network gas, the card provider’s fee, exchange or bridge fees — are shown before you sign.`,
                ],
                [
                  `Why does my spendable show 0?`,
                  `Either no interest has accrued yet, or the app can’t reach the chain and is failing closed. Your funds are unaffected; try again shortly.`,
                ],
                [
                  `Which wallets work?`,
                  `MetaMask, as a browser extension or through the MetaMask in-app browser on a phone.`,
                ],
                [
                  `I don’t see a token I swapped for in the dashboard.`,
                  `The dashboard shows your Offyield vault position — principal and interest in USDG. Other tokens in your wallet aren’t part of the vault.`,
                ],
                [
                  `What happens if the website goes down?`,
                  `Your position lives in the vault contract, not on the website. Withdrawing and closing are direct contract calls that can never be paused.`,
                ],
                [
                  `Is the APY fixed?`,
                  `No. It’s set by the lending market and changes with supply and demand.`,
                ],
              ],
            },
          ],
        },
      ],
    },
  ],
  c = n(),
  l = (0, c.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    children: (0, c.jsx)(`path`, {
      d: `M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.5L6.3 22H3.2l7.3-8.3L2.4 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L8.3 3.8H6.5L17.8 20Z`,
    }),
  }),
  u = (0, c.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    children: (0, c.jsx)(`path`, {
      d: `M21.9 4.3 18.9 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.2c-.3.3-.5.5-1 .5l.4-4.9L18.6 6c.4-.3-.1-.5-.6-.2L7.1 12.6l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1.2 1.5Z`,
    }),
  }),
  d = (e) => (t) => !t.ff || e[t.ff];
function f({ it: e, ff: t }) {
  return typeof e == `string`
    ? (0, c.jsx)(`p`, { children: e })
    : e.p
    ? (0, c.jsx)(`p`, { children: e.p })
    : e.list
    ? (0, c.jsx)(`ul`, {
        children: e.list
          .filter((e) => typeof e == `string` || d(t)(e))
          .map((e, t) =>
            (0, c.jsx)(`li`, { children: typeof e == `string` ? e : e.text }, t)
          ),
      })
    : e.steps
    ? (0, c.jsx)(`ol`, {
        className: `docs-steps`,
        children: e.steps.map((e, t) =>
          (0, c.jsxs)(
            `li`,
            {
              children: [
                (0, c.jsx)(`b`, { children: e.t }),
                (0, c.jsx)(`span`, { children: e.d }),
              ],
            },
            t
          )
        ),
      })
    : e.table
    ? (0, c.jsx)(`div`, {
        className: `docs-table-wrap`,
        children: (0, c.jsxs)(`table`, {
          className: `docs-table`,
          children: [
            (0, c.jsx)(`thead`, {
              children: (0, c.jsx)(`tr`, {
                children: e.table.head.map((e) =>
                  (0, c.jsx)(`th`, { children: e }, e)
                ),
              }),
            }),
            (0, c.jsx)(`tbody`, {
              children: e.table.rows.map((e, t) =>
                (0, c.jsx)(
                  `tr`,
                  {
                    children: e.map((e, t) =>
                      (0, c.jsx)(`td`, { children: e }, t)
                    ),
                  },
                  t
                )
              ),
            }),
          ],
        }),
      })
    : e.note
    ? (0, c.jsx)(`div`, {
        className: `legal-note` + (e.tone === `warn` ? ` docs-warn` : ``),
        children: e.note,
      })
    : e.qa
    ? (0, c.jsx)(`div`, {
        className: `docs-faq`,
        children: e.qa.map(([e, t]) =>
          (0, c.jsxs)(
            `details`,
            {
              children: [
                (0, c.jsx)(`summary`, { children: e }),
                (0, c.jsx)(`p`, { children: t }),
              ],
            },
            e
          )
        ),
      })
    : null;
}
function p() {
  let [e, t] = (0, a.useState)(i);
  (0, a.useEffect)(() => {
    let e = !0;
    return (
      fetch(`/api/features`)
        .then((e) => (e.ok ? e.json() : null))
        .then((n) => {
          e && n && t({ ...i, ...n });
        })
        .catch(() => {}),
      () => {
        e = !1;
      }
    );
  }, []);
  let n = s
      .map((t) => ({ ...t, pages: t.pages.filter(d(e)) }))
      .filter((e) => e.pages.length),
    p = (0, a.useRef)(null),
    [m, h] = (0, a.useState)(n[0].pages[0].id);
  (0, a.useEffect)(() => {
    document.documentElement.style.fontSize = ``;
    let e = p.current;
    if (window.matchMedia(`(prefers-reduced-motion:reduce)`).matches) {
      e.querySelectorAll(`.anim, .reveal`).forEach((e) =>
        e.classList.add(`in`)
      );
      return;
    }
    let t = setTimeout(
        () =>
          e.querySelectorAll(`.anim`).forEach((e) => {
            (e.style.transitionDelay =
              parseInt(e.dataset.delay || `0`, 10) + `ms`),
              e.classList.add(`in`);
          }),
        60
      ),
      n = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting &&
              (e.target.classList.add(`in`), n.unobserve(e.target));
          });
        },
        { threshold: 0.08, rootMargin: `0px 0px -6% 0px` }
      );
    return (
      e.querySelectorAll(`.reveal:not(.in)`).forEach((e) => n.observe(e)),
      () => {
        clearTimeout(t), n.disconnect();
      }
    );
  }, [e]),
    (0, a.useEffect)(() => {
      let e = [...p.current.querySelectorAll(`.docs-page`)],
        t = new IntersectionObserver(
          (e) => {
            let t = e
              .filter((e) => e.isIntersecting)
              .sort(
                (e, t) => e.boundingClientRect.top - t.boundingClientRect.top
              )[0];
            t && h(t.target.id);
          },
          { rootMargin: `-15% 0px -70% 0px` }
        );
      return e.forEach((e) => t.observe(e)), () => t.disconnect();
    }, [e]);
  let g = (e) => (t) => {
      t.preventDefault();
      let n = p.current?.querySelector(`#${e}`),
        r = window.matchMedia(`(prefers-reduced-motion:reduce)`).matches;
      n &&
        n.scrollIntoView({ behavior: r ? `auto` : `smooth`, block: `start` }),
        history.replaceState(null, ``, `#${e}`);
    },
    _ = 0;
  return (0, c.jsxs)(`div`, {
    id: `site`,
    className: `legal docs`,
    ref: p,
    children: [
      (0, c.jsxs)(`nav`, {
        className: `legal-nav`,
        children: [
          (0, c.jsx)(r, {
            className: `legal-brand`,
            to: `/`,
            children: (0, c.jsx)(`img`, {
              className: `brand-mark`,
              src: `/offyield-logo.png`,
              alt: `Offyield`,
              width: `132`,
              height: `132`,
            }),
          }),
          (0, c.jsxs)(`div`, {
            className: `legal-nav-links`,
            children: [
              (0, c.jsx)(r, { to: `/`, children: `Home` }),
              (0, c.jsx)(r, {
                to: `/docs`,
                className: `active`,
                children: `Docs`,
              }),
              (0, c.jsx)(`a`, { href: `/dashboard`, children: `Open app` }),
            ],
          }),
        ],
      }),
      (0, c.jsx)(`header`, {
        className: `legal-hero`,
        children: (0, c.jsxs)(`div`, {
          className: `legal-shell`,
          children: [
            (0, c.jsxs)(`span`, {
              className: `eyebrow anim rise`,
              "data-delay": `0`,
              children: [
                (0, c.jsx)(`span`, { className: `dot` }),
                `Documentation`,
              ],
            }),
            (0, c.jsxs)(`h1`, {
              className: `legal-title anim rise`,
              "data-delay": `60`,
              children: [
                `Offyield `,
                (0, c.jsx)(`span`, { className: `accent`, children: `Docs` }),
              ],
            }),
            (0, c.jsx)(`p`, {
              className: `legal-lede anim rise`,
              "data-delay": `120`,
              children: `Everything you need to use Offyield: how the vault keeps your principal locked, how interest accrues, how to add funds, buy cards and exit, and what each screen of the app shows you.`,
            }),
            (0, c.jsxs)(`div`, {
              className: `legal-meta anim rise`,
              "data-delay": `180`,
              children: [
                (0, c.jsxs)(`span`, { children: [`Last updated `, o] }),
                (0, c.jsx)(`span`, { className: `legal-dot` }),
                (0, c.jsxs)(`span`, {
                  children: [
                    n.reduce((e, t) => e + t.pages.length, 0),
                    ` articles`,
                  ],
                }),
              ],
            }),
            (0, c.jsx)(`div`, {
              className: `docs-quick anim rise`,
              "data-delay": `240`,
              children: n.map((e) =>
                (0, c.jsxs)(
                  `a`,
                  {
                    href: `#${e.pages[0].id}`,
                    onClick: g(e.pages[0].id),
                    className: `docs-quick-card`,
                    children: [
                      (0, c.jsx)(`span`, {
                        className: `docs-quick-k`,
                        children: e.title,
                      }),
                      (0, c.jsx)(`span`, {
                        className: `docs-quick-d`,
                        children: e.blurb,
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        }),
      }),
      (0, c.jsx)(`div`, { className: `legal-rule`, "aria-hidden": `true` }),
      (0, c.jsxs)(`div`, {
        className: `docs-layout`,
        children: [
          (0, c.jsx)(`aside`, {
            className: `docs-side`,
            "aria-label": `Documentation`,
            children: n.map((e) =>
              (0, c.jsxs)(
                `div`,
                {
                  className: `docs-side-group`,
                  children: [
                    (0, c.jsx)(`h4`, { children: e.title }),
                    e.pages.map((e) =>
                      (0, c.jsx)(
                        `a`,
                        {
                          href: `#${e.id}`,
                          onClick: g(e.id),
                          className: m === e.id ? `active` : ``,
                          "aria-current": m === e.id ? `location` : void 0,
                          children: e.h,
                        },
                        e.id
                      )
                    ),
                  ],
                },
                e.id
              )
            ),
          }),
          (0, c.jsxs)(`main`, {
            className: `docs-main`,
            children: [
              n.map((t) =>
                (0, c.jsxs)(
                  `div`,
                  {
                    className: `docs-group`,
                    children: [
                      (0, c.jsx)(`div`, {
                        className: `docs-group-head reveal`,
                        children: (0, c.jsxs)(`span`, {
                          className: `eyebrow`,
                          children: [
                            (0, c.jsx)(`span`, { className: `dot` }),
                            t.title,
                          ],
                        }),
                      }),
                      t.pages.map((t) =>
                        (0, c.jsxs)(
                          `section`,
                          {
                            className: `legal-section docs-page reveal`,
                            id: t.id,
                            children: [
                              (0, c.jsx)(`div`, {
                                className: `legal-section-index`,
                                children: String(++_).padStart(2, `0`),
                              }),
                              (0, c.jsxs)(`div`, {
                                className: `legal-section-copy`,
                                children: [
                                  (0, c.jsx)(`h2`, { children: t.h }),
                                  t.body
                                    .filter(
                                      (t) => typeof t == `string` || d(e)(t)
                                    )
                                    .map((t, n) =>
                                      (0, c.jsx)(f, { it: t, ff: e }, n)
                                    ),
                                ],
                              }),
                            ],
                          },
                          t.id
                        )
                      ),
                    ],
                  },
                  t.id
                )
              ),
              (0, c.jsxs)(`section`, {
                className: `legal-section legal-contact reveal`,
                children: [
                  (0, c.jsx)(`div`, {
                    className: `legal-section-index`,
                    children: `✦`,
                  }),
                  (0, c.jsxs)(`div`, {
                    className: `legal-section-copy`,
                    children: [
                      (0, c.jsx)(`h2`, { children: `Still stuck?` }),
                      (0, c.jsxs)(`p`, {
                        children: [
                          `Reach the team at `,
                          (0, c.jsx)(`a`, {
                            href: `mailto:team@offyield.com`,
                            children: `team@offyield.com`,
                          }),
                          `, or ask in `,
                          (0, c.jsx)(`a`, {
                            href: `https://t.me/offyield`,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            children: `Telegram`,
                          }),
                          `. We will never DM you first and never ask for your seed phrase. For security reports, please use a private channel rather than a public post.`,
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
      (0, c.jsx)(`footer`, {
        className: `footer`,
        children: (0, c.jsxs)(`div`, {
          className: `footer-inner`,
          children: [
            (0, c.jsxs)(`div`, {
              className: `brand`,
              children: [
                (0, c.jsx)(`div`, {
                  className: `logo`,
                  children: (0, c.jsx)(`img`, {
                    className: `brand-mark lg`,
                    src: `/offyield-logo.png`,
                    alt: `Offyield`,
                    width: `140`,
                    height: `140`,
                  }),
                }),
                (0, c.jsx)(`p`, {
                  children: `Spend your interest, never your principal. A yield-only card built on Robinhood Chain.`,
                }),
              ],
            }),
            (0, c.jsxs)(`div`, {
              className: `cols`,
              children: [
                (0, c.jsxs)(`div`, {
                  className: `col`,
                  children: [
                    (0, c.jsx)(`h4`, { children: `Product` }),
                    (0, c.jsx)(r, { to: `/`, children: `How it works` }),
                    (0, c.jsx)(r, {
                      to: `/docs`,
                      className: `active`,
                      children: `Docs`,
                    }),
                    (0, c.jsx)(`a`, {
                      href: `/dashboard`,
                      children: `Open app`,
                    }),
                  ],
                }),
                (0, c.jsxs)(`div`, {
                  className: `col`,
                  children: [
                    (0, c.jsx)(`h4`, { children: `Legal` }),
                    (0, c.jsx)(r, {
                      to: `/privacy`,
                      children: `Privacy Policy`,
                    }),
                    (0, c.jsx)(r, {
                      to: `/terms`,
                      children: `Terms of Service`,
                    }),
                    (0, c.jsx)(`a`, {
                      href: `https://github.com/shieldify-security/audits-portfolio/blob/main/reports/OffYield-Security-Review.pdf`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      children: `Audit`,
                    }),
                  ],
                }),
                (0, c.jsxs)(`div`, {
                  className: `col`,
                  children: [
                    (0, c.jsx)(`h4`, { children: `Connect` }),
                    (0, c.jsxs)(`div`, {
                      className: `social-btns`,
                      children: [
                        (0, c.jsxs)(`a`, {
                          className: `social-btn`,
                          href: `https://x.com/offyield`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "aria-label": `Offyield on X`,
                          children: [
                            l,
                            (0, c.jsx)(`span`, { children: `@offyield` }),
                          ],
                        }),
                        (0, c.jsxs)(`a`, {
                          className: `social-btn`,
                          href: `https://t.me/offyield`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "aria-label": `Offyield on Telegram`,
                          children: [
                            u,
                            (0, c.jsx)(`span`, { children: `t.me/offyield` }),
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
var m = () => (0, c.jsx)(p, {});
export { m as component };
