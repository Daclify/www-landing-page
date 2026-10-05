# DAO platform, accounts and deployment choices | Daclify

> Learn how Daclify V2 brings internal accounts, native wallets, DAO-owned contracts and Hub discovery into a modular governance platform.

https://daclify.com/platform/

Daclify V2 is in development. Public launch follows contract verification and release review.

Different communities need different rules. Daclify V2 is designed around a stable core for identity, authority and treasury, with focused modules that serve the way your community works.

## People first. Accounts that fit.

An internal identity lives in the smart contract and does not require a member to own a native blockchain account. Membership and roles belong to the DAO; linking another credential must not create another vote.

### User-controlled accounts — In development

Separate signing and encryption keys stay under the user’s control. Development flows include an encrypted local vault and recovery credentials. Social login alone cannot reconstruct these keys.

### Managed recovery — Planned

The planned managed mode supports service-assisted recovery and clearly discloses operator authority. An open-source key service is being evaluated; production recovery operations are not yet qualified.

### More ways to participate — Planned

Native Telos account linking, social and Telegram entry, and capability-gated Telos EVM identities are planned. These paths must preserve the same membership and permissions.


## Shared contracts or your own deployment.

A shared runtime provides DAO-specific state within common contracts. An independent deployment uses the same public interfaces under the DAO’s own upgrade and treasury policies.

### Shared deployment — In development

The development implementation supports DAO creation, roles, credits and treasury records in a shared runtime. Full isolation and native contract verification remain release gates.

### Independent deployment — Planned

DAO-owned contracts, direct connections and multi-runtime routing are planned. An independent DAO must remain usable if the discovery Hub or hosted services are unavailable.


## The Hub connects. It does not govern.

The discovery Hub is intended to list DAOs, identify their deployments and describe supported capabilities. A listing must not give the platform control of a DAO’s votes, treasury or contract upgrades.

- Authority comes from the DAO’s explicit roles and policies.
- Module permissions are bounded and reviewable.
- Public interfaces, versions and documentation travel together.

## A foundation built for accountable governance.

The core uses Antelope C++ contracts. The application and services use strict TypeScript, with a Vue frontend. Authoritative decisions and financial records belong to the contracts; a browser display cannot authorize a payment.

- DAO-specific governance credits are separate from money.
- Native-token governance needs a supported staking or weight policy.
- Broader chain support is added through bounded, independently verified adapters.

## Telegram

Building a community, cooperative or contributor network? Help shape what Daclify becomes. Follow the roadmap and talk with us on Telegram.

https://t.me/daclify
