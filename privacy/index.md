# Encrypted DAO documents and account custody | Daclify

> Understand Daclify’s privacy design: encrypted DAO documents, member key access, user-controlled or managed recovery, and the limits of public blockchains.

https://daclify.com/privacy/

Daclify V2 is in development. Public launch follows contract verification and release review.

A DAO may need a public treasury and private working documents. Daclify’s direction is to encrypt protected content before publication and make key ownership an explicit decision.

## Encrypt before you publish.

Small descriptive records can use bounded JSON; larger content uses IPFS CIDs. Protected titles, filenames and document bytes must be encrypted in the client before reaching a content provider or the public chain. Provider access links alone are not member encryption.

- Signing keys and encryption keys have separate purposes.
- Versioned envelopes and content commitments support integrity checks.
- Member grants and DAO key epochs define access to protected content.

## Choose who can recover the keys.

Account recovery and document confidentiality are related but different. The DAO’s admission policy must match the custody mode it permits. Complete managed recovery and membership lifecycle integration are still planned.

### User-controlled content keys — Design principle

The user keeps the decryption keys and recovery credential. A successful social login cannot restore a lost vault by itself. A DAO can require this mode when it wants no routine service custody.

### Managed recovery allowed — Planned

Service-assisted recovery means the relevant operator can access recoverable keys. That trust must be disclosed, with a tested recovery and exit policy rather than a promise of operator exclusion.


## Member changes need an access policy.

A DAO must choose whether newly admitted members receive historical access or future access only. Removing a member requires future-access rotation and explicit handling of previously granted keys. Complete admission, rotation and custody-transition journeys remain unfinished.

- An existing authorized key holder is needed to grant protected access.
- A blind backend cannot create decryption keys it does not hold.
- Former members may retain historical keys and plaintext they already received.

## What encryption does not hide.

Public-chain membership references, transaction activity, vote records and amounts may remain visible. Encrypting a document does not make a DAO anonymous or turn public contract execution into a secret ballot.

- Members can copy or share content they are authorized to read.
- A compromised device or malicious client update can expose unlocked keys.
- Deleting a pin cannot erase blockchain history or every third-party copy.

## Durable records, honest availability.

Development flows already exercise encrypted upload, retrieval checks, lost-response recovery and version history using a labelled local provider. Live Pinata integration, export, re-pinning, retention and complete recovery operations still need verification before a public release.

- Integrity checks and availability are separate requirements.
- Private search and notifications must follow the same content policy.
- A clear export and custody exit path is part of the product direction.

## Telegram

Building a community, cooperative or contributor network? Help shape what Daclify becomes. Follow the roadmap and talk with us on Telegram.

https://t.me/daclify
