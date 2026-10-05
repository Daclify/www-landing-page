import type { SiteCopy } from '../types.ts';
export const en: SiteCopy = {
  nav: {
    home: 'Home',
    platform: 'Platform',
    modules: 'Modules',
    privacy: 'Privacy',
    roadmap: 'Roadmap',
  },
  skip: 'Skip to content',
  menu: 'Menu',
  language: 'Choose language',
  status: { development: 'In development', planned: 'Planned', principle: 'Design principle' },
  statusNote:
    'Daclify V2 is in development. Public launch follows contract verification and release review.',
  explore: 'Explore the platform',
  community: 'Join the conversation',
  more: 'Explore',
  back: 'Back to home',
  footer: 'Tools for communities that decide together.',
  footerNote:
    'A new chapter for Daclify. Built around people, shared decisions and accountable work.',
  ctaTitle: 'Your next chapter starts with a conversation.',
  ctaText:
    'Building a community, cooperative or contributor network? Help shape what Daclify becomes. Follow the roadmap and talk with us on Telegram.',
  questions: 'Good questions. Straight answers.',
  faq: [
    {
      question: 'What is Daclify?',
      answer:
        'Daclify is a modular DAO platform being rebuilt to help communities manage membership, make decisions, fund work and keep shared records. A DAO is an organization whose agreed rules and decisions can be recorded and executed through smart contracts.',
    },
    {
      question: 'Does every member need a blockchain account?',
      answer:
        'The V2 design supports internal identities in the smart contract, so members can participate without creating their own native blockchain account. Native wallet linking, social login and Telegram entry are additional planned paths; their production journeys are not ready yet.',
    },
    {
      question: 'Are governance credits real money?',
      answer:
        'No. Internal governance credits represent a DAO’s configured voting power. They are separate from treasury assets and cannot be withdrawn as money. Native-token governance follows an explicit supported staking or weight policy.',
    },
    {
      question: 'Can a DAO keep its information private?',
      answer:
        'Protected documents can be encrypted before publication, with keys granted to eligible members. Encryption protects content, not public blockchain metadata. A member can retain information already received, and managed decryption recovery gives the relevant service access to keys.',
    },
    {
      question: 'Will Daclify be free?',
      answer:
        'The plan is to keep basic governance useful for free, with defined resource allowances. Hosted automation, notifications and additional services may be paid. Prices and limits have not been finalized. Subscription expiry must not take control of DAO funds or accepted obligations.',
    },
    {
      question: 'Can we use V2 with real funds now?',
      answer:
        'V2 is a development implementation, not a qualified production release. Contract verification, account integrations, independent deployment support and operating procedures still need work. Follow the roadmap for the distinction between implemented development flows and release-ready capabilities.',
    },
  ],
  preview: {
    label: 'Illustrative workspace',
    name: 'The Neighborhood Commons',
    caption: 'A shared purpose. A place to organize.',
    tabs: ['Decisions', 'Work', 'Documents'],
    rows: ['Community garden proposal', 'Workshop milestone', 'Shared project handbook'],
    tags: ['Voting', 'In review', 'Members'],
    flow: ['Propose', 'Decide', 'Deliver'],
    note: 'One community. Connected tools. Clear responsibilities.',
  },
  pages: {
    home: {
      title: 'Daclify — Modular DAO governance for real communities',
      description:
        'Discover Daclify V2: a modular DAO platform for community decisions, funded work and encrypted documents. Explore the vision and development roadmap.',
      eyebrow: 'The next chapter of community governance',
      heading: 'Your community.\nYour decisions.\nYour future.',
      lead: 'Bring people, decisions and meaningful work together. Daclify is building a modular DAO platform where communities choose their rules, their tools and their way forward.',
      sections: [
        {
          title: 'More than a vote. A way to work together.',
          text: 'A community needs more than a chat group and a treasury address. It needs a clear path from an idea to a shared decision, a funded contribution and a lasting record.',
          cards: [
            {
              title: 'Give people a place',
              text: 'Membership and roles define who can participate. Internal identities are designed to make joining possible without a native blockchain account.',
              link: 'platform',
            },
            {
              title: 'Make decisions count',
              text: 'Choose a voting policy, record the outcome and connect approved decisions to bounded actions. Governance should be understandable to the people using it.',
              link: 'modules',
            },
            {
              title: 'Turn agreement into work',
              text: 'Fund milestones, review deliverables and track approved payments. Keep responsibility and progress visible instead of losing them in a conversation.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Start with your purpose. Choose your tools.',
          text: 'The V2 development implementation connects a shared core to focused first-party modules. The goal is useful defaults, clear configuration and room for a community to grow.',
          cards: [
            {
              title: 'Decide',
              text: 'Proposals, voting and durable outcomes. Development flows include creating ballots, casting votes and finalizing results.',
              status: 'development',
              link: 'modules',
            },
            {
              title: 'Works',
              text: 'Milestone funding with submission, review, revision and acceptance. Approval creates a tracked obligation rather than an unaccountable promise.',
              status: 'development',
              link: 'modules',
            },
            {
              title: 'Payroll',
              text: 'Funded schedules and approved payment obligations. Existing development flows preserve accepted payments after module removal.',
              status: 'development',
              link: 'modules',
            },
          ],
        },
        {
          title: 'One vision. Two ways to make it yours.',
          text: 'Start in a shared deployment or operate your own contracts. Both modes are part of the V2 design; the complete independent deployment journey is still being built.',
          cards: [
            {
              title: 'A shared home',
              text: 'Many DAOs can use the same core contracts while keeping their own membership, configuration and treasury records isolated.',
              status: 'development',
              link: 'platform',
            },
            {
              title: 'Your own foundation',
              text: 'An independent DAO controls its deployment and connects to the Hub for discovery. It must also be able to operate directly without the Hub.',
              status: 'planned',
              link: 'platform',
            },
          ],
        },
        {
          title: 'Shared knowledge. Thoughtful privacy.',
          text: 'Keep small descriptive records as bounded JSON and larger documents through IPFS references. Encrypt protected content before publication, with explicit choices about who holds the keys.',
          bullets: [
            'User-controlled and managed recovery are different, clearly labelled account modes.',
            'Private content does not make membership, voting or transfers invisible on a public blockchain.',
            'Removing a member can restrict future access; it cannot erase information already received.',
          ],
        },
      ],
    },
    platform: {
      title: 'DAO platform, accounts and deployment choices | Daclify',
      description:
        'Learn how Daclify V2 brings internal accounts, native wallets, DAO-owned contracts and Hub discovery into a modular governance platform.',
      eyebrow: 'The platform',
      heading: 'An organization you can shape.',
      lead: 'Different communities need different rules. Daclify V2 is designed around a stable core for identity, authority and treasury, with focused modules that serve the way your community works.',
      sections: [
        {
          title: 'People first. Accounts that fit.',
          text: 'An internal identity lives in the smart contract and does not require a member to own a native blockchain account. Membership and roles belong to the DAO; linking another credential must not create another vote.',
          cards: [
            {
              title: 'User-controlled accounts',
              text: 'Separate signing and encryption keys stay under the user’s control. Development flows include an encrypted local vault and recovery credentials. Social login alone cannot reconstruct these keys.',
              status: 'development',
            },
            {
              title: 'Managed recovery',
              text: 'The planned managed mode supports service-assisted recovery and clearly discloses operator authority. An open-source key service is being evaluated; production recovery operations are not yet qualified.',
              status: 'planned',
            },
            {
              title: 'More ways to participate',
              text: 'Native Telos account linking, social and Telegram entry, and capability-gated Telos EVM identities are planned. These paths must preserve the same membership and permissions.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Shared contracts or your own deployment.',
          text: 'A shared runtime provides DAO-specific state within common contracts. An independent deployment uses the same public interfaces under the DAO’s own upgrade and treasury policies.',
          cards: [
            {
              title: 'Shared deployment',
              text: 'The development implementation supports DAO creation, roles, credits and treasury records in a shared runtime. Full isolation and native contract verification remain release gates.',
              status: 'development',
            },
            {
              title: 'Independent deployment',
              text: 'DAO-owned contracts, direct connections and multi-runtime routing are planned. An independent DAO must remain usable if the discovery Hub or hosted services are unavailable.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'The Hub connects. It does not govern.',
          text: 'The discovery Hub is intended to list DAOs, identify their deployments and describe supported capabilities. A listing must not give the platform control of a DAO’s votes, treasury or contract upgrades.',
          bullets: [
            'Authority comes from the DAO’s explicit roles and policies.',
            'Module permissions are bounded and reviewable.',
            'Public interfaces, versions and documentation travel together.',
          ],
        },
        {
          title: 'A foundation built for accountable governance.',
          text: 'The core uses Antelope C++ contracts. The application and services use strict TypeScript, with a Vue frontend. Authoritative decisions and financial records belong to the contracts; a browser display cannot authorize a payment.',
          bullets: [
            'DAO-specific governance credits are separate from money.',
            'Native-token governance needs a supported staking or weight policy.',
            'Broader chain support is added through bounded, independently verified adapters.',
          ],
        },
      ],
    },
    modules: {
      title: 'Decide, Works and payroll DAO modules | Daclify',
      description:
        'Explore Daclify’s modular governance vision: Decide voting, Works milestone funding, payroll, shared documents and planned hosted Operations.',
      eyebrow: 'The modules',
      heading: 'Less overhead. More shared progress.',
      lead: 'Choose the capabilities that match your organization. Each module has a focused job, a clear configuration and explicit authority. The current modules are development implementations, not production-ready services.',
      sections: [
        {
          title: 'Decide — a clear path to a shared decision.',
          text: 'Decide draws useful patterns from Telos governance and adapts them to Daclify’s internal identity model. Development flows include ballots, voting and finalization; richer elections, committees and proposal execution still need work.',
          bullets: [
            'Define who is eligible and how voting power is evaluated.',
            'Make quorum, approval and timing rules understandable.',
            'Keep a durable result; finalization and execution are separate responsibilities.',
          ],
        },
        {
          title: 'Works — fund outcomes, not vague promises.',
          text: 'Works connects funding to milestone reports and authorized review. Current development flows cover proposals, reservation, submission, requested changes, acceptance and cancellation. Persistent custom policy and complete dispute/deadline behavior remain unfinished.',
          bullets: [
            'Freeze approved amounts and document commitments.',
            'A report alone does not authorize payment.',
            'Accepted unpaid obligations survive module removal.',
          ],
        },
        {
          title: 'Payroll — predictable commitments.',
          text: 'The development payroll module supports funded fixed-term schedules and tracked obligations. Due-payment workflows must remain idempotent, with explicit policies for delays, catch-up, cancellation and insufficient funds.',
          bullets: [
            'Separate future schedules from approved liabilities.',
            'Retries must not duplicate a payment.',
            'Keep a manual execution path when automation is unavailable.',
          ],
        },
        {
          title: 'Knowledge and Operations.',
          text: 'Versioned JSON and hosted public/private files connect records to decisions and work. Planned hosted Operations adds bounded scheduling, notifications and selected integrations without granting governance authority.',
          cards: [
            {
              title: 'Documents',
              text: 'Development flows cover versioned records, client-encrypted files, verified uploads and downloads. Live Pinata availability and retention operations remain to be qualified.',
              status: 'development',
              link: 'privacy',
            },
            {
              title: 'Hosted Operations',
              text: 'Scheduled execution, Telegram notifications, webhooks and resource allowances are planned as an optional paid service package. Final pricing has not been chosen.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
        {
          title: 'Useful free governance. Optional services.',
          text: 'The business direction is a usable free foundation with measured limits, plus paid convenience and operating capacity. Buying a service must not grant extra votes; expiry must not seize keys, block safe withdrawals or erase accepted work.',
          bullets: [
            'Choose modules with understandable presets.',
            'Review requested authority before enabling a module.',
            'Keep compatible independent and self-hosted options.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Encrypted DAO documents and account custody | Daclify',
      description:
        'Understand Daclify’s privacy design: encrypted DAO documents, member key access, user-controlled or managed recovery, and the limits of public blockchains.',
      eyebrow: 'Privacy by informed choice',
      heading: 'Keep shared knowledge in the right hands.',
      lead: 'A DAO may need a public treasury and private working documents. Daclify’s direction is to encrypt protected content before publication and make key ownership an explicit decision.',
      sections: [
        {
          title: 'Encrypt before you publish.',
          text: 'Small descriptive records can use bounded JSON; larger content uses IPFS CIDs. Protected titles, filenames and document bytes must be encrypted in the client before reaching a content provider or the public chain. Provider access links alone are not member encryption.',
          bullets: [
            'Signing keys and encryption keys have separate purposes.',
            'Versioned envelopes and content commitments support integrity checks.',
            'Member grants and DAO key epochs define access to protected content.',
          ],
        },
        {
          title: 'Choose who can recover the keys.',
          text: 'Account recovery and document confidentiality are related but different. The DAO’s admission policy must match the custody mode it permits. Complete managed recovery and membership lifecycle integration are still planned.',
          cards: [
            {
              title: 'User-controlled content keys',
              text: 'The user keeps the decryption keys and recovery credential. A successful social login cannot restore a lost vault by itself. A DAO can require this mode when it wants no routine service custody.',
              status: 'principle',
            },
            {
              title: 'Managed recovery allowed',
              text: 'Service-assisted recovery means the relevant operator can access recoverable keys. That trust must be disclosed, with a tested recovery and exit policy rather than a promise of operator exclusion.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Member changes need an access policy.',
          text: 'A DAO must choose whether newly admitted members receive historical access or future access only. Removing a member requires future-access rotation and explicit handling of previously granted keys. Complete admission, rotation and custody-transition journeys remain unfinished.',
          bullets: [
            'An existing authorized key holder is needed to grant protected access.',
            'A blind backend cannot create decryption keys it does not hold.',
            'Former members may retain historical keys and plaintext they already received.',
          ],
        },
        {
          title: 'What encryption does not hide.',
          text: 'Public-chain membership references, transaction activity, vote records and amounts may remain visible. Encrypting a document does not make a DAO anonymous or turn public contract execution into a secret ballot.',
          bullets: [
            'Members can copy or share content they are authorized to read.',
            'A compromised device or malicious client update can expose unlocked keys.',
            'Deleting a pin cannot erase blockchain history or every third-party copy.',
          ],
        },
        {
          title: 'Durable records, honest availability.',
          text: 'Development flows already exercise encrypted upload, retrieval checks, lost-response recovery and version history using a labelled local provider. Live Pinata integration, export, re-pinning, retention and complete recovery operations still need verification before a public release.',
          bullets: [
            'Integrity checks and availability are separate requirements.',
            'Private search and notifications must follow the same content policy.',
            'A clear export and custody exit path is part of the product direction.',
          ],
        },
      ],
    },
    roadmap: {
      title: 'Daclify V2 development roadmap and release status',
      description:
        'See what Daclify V2 implements today and what remains: contract verification, accounts, independent deployments, Pinata, EVM and hosted Operations.',
      eyebrow: 'The roadmap',
      heading: 'Build carefully. Make progress visible.',
      lead: 'V2 is an active development implementation. Working local journeys are useful evidence, but they are not a production release. This roadmap separates implemented slices from the work required to launch responsibly.',
      sections: [
        {
          title: '01 / The foundation is taking shape.',
          text: 'The development checkpoint includes Antelope C++ core/Hub contracts, internal user-controlled accounts, a TypeScript API, shared DAO creation, governance credits, treasury flows and generated documentation.',
          cards: [
            {
              title: 'Connected governance',
              text: 'Decide voting/finalization, Works submission/review/revision and funded payroll are exercised in local flows.',
              status: 'development',
            },
            {
              title: 'Records and privacy',
              text: 'Versioned JSON and public/private file flows include integrity checks and upload reconciliation.',
              status: 'development',
            },
            {
              title: 'A usable interface',
              text: 'The Vue/TypeScript application has recovery, governance, documents, treasury and contextual help screens.',
              status: 'development',
            },
          ],
        },
        {
          title: '02 / Qualify the core before launch.',
          text: 'A confirmed native contract authorization defect and incomplete on-chain module code enforcement are release blockers. Full native verification, deployment hash checks, resource bounds, compatibility/release tooling and independent review remain required. V2 must not be used with real funds as a qualified product yet.',
          bullets: [
            'Fix and verify contract authority on the actual native runtime.',
            'Bind reviewed code, interfaces and documentation to tested releases.',
            'Complete shared and independent deployment conformance.',
          ],
        },
        {
          title: '03 / Complete the account and document journeys.',
          text: 'Production admission, native-wallet linking, managed recovery, social/Telegram login and member key lifecycle still need implementation and verification. Live Pinata, retention/export and supported client testing are also unfinished.',
          bullets: [
            'Both custody modes need complete loss/recovery and exit flows.',
            'Private-content policies must hold across member changes.',
            'Real provider evidence remains separate from local fixtures.',
          ],
        },
        {
          title: '04 / Extend what communities can do.',
          text: 'Planned extensions include committees and proposal execution, richer Works/payroll policies, capability-gated Telos EVM support, hosted Operations and measured service allowances. Other-chain adapters follow selected use cases with explicit proof and finality models.',
          bullets: [
            'EVM identity and payments are distinct capabilities.',
            'A transaction hash alone is not verified settlement.',
            'Paid service expiry must preserve core rights and approved liabilities.',
          ],
        },
        {
          title: 'A release is a commitment, not a countdown.',
          text: 'Deployment/migration tooling, backups, operator procedures and security review must accompany the code. Legacy documents and liabilities need a real inventory; missing data cannot be invented. There is no announced public launch date or finalized pricing on this website.',
          bullets: [
            'Follow development and contribute feedback through the community.',
            'Useful basic governance is intended to remain free within defined limits.',
            'Testnet and production publication follow explicit release review.',
          ],
        },
      ],
    },
  },
};
