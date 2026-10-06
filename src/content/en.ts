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
  status: { planned: 'On the roadmap' },
  productNote: 'Your rules. Your members. Your shared workspace.',
  app: 'Open app',
  docs: 'Read the docs',
  docsNav: 'Docs',
  benefits: ['MEMBERSHIP', 'VOTING', 'PROJECT FUNDING', 'TREASURY', 'SHARED RECORDS'],
  community: 'Join the community',
  communityIq: {
    title: 'DAO governance for CommunityIQ',
    text: 'CommunityIQ brings people, ideas and shared knowledge together. It will use Daclify as its main DAO software to help its communities organize members, make decisions and manage shared resources.',
    linkLabel: 'Explore CommunityIQ',
  },
  more: 'Learn more',
  footer: 'Tools for communities that decide together.',
  footerNote:
    'Membership, decisions, funded work and shared knowledge. Connected in one workspace.',
  ctaTitle: 'Give your community a place to move forward.',
  ctaText:
    'Explore DAOs in the app, find the tools your community needs and use the handbook to learn how they work.',
  questions: 'Good questions. Straight answers.',
  faq: [
    {
      question: 'What is Daclify?',
      answer:
        'Daclify is a platform for running a DAO: a community that manages its own members, decisions and shared funds. It brings voting, project funding, contributor payments and documents into one workspace, with agreed rules recorded in smart contracts.',
    },
    {
      question: 'Who is it for?',
      answer:
        'Community projects, cooperatives, contributor groups and organizations that make decisions together. Use Daclify to give members a voice, organize a shared budget and keep track of the work it supports.',
    },
    {
      question: 'Does every member need a blockchain account?',
      answer:
        'No. Daclify accounts let members participate without creating their own native blockchain account. Your DAO still uses smart contracts to record its rules and actions. Additional wallet, social and Telegram sign-in options are on the roadmap.',
    },
    {
      question: 'What are governance credits?',
      answer:
        'Governance credits are voting units defined by your DAO. They help decide how much voting power a member has. They are separate from treasury assets and cannot be withdrawn as money.',
    },
    {
      question: 'Can we keep documents private?',
      answer:
        'Protected documents are encrypted before they are stored, and eligible members need the right keys to read them. Blockchain activity can still be public, and members can retain information they have already read. The privacy guide explains these limits.',
    },
    {
      question: 'How much does Daclify cost?',
      answer:
        'The goal is useful core governance for free, with optional paid modules and hosted services. Prices and resource limits will be published before those services are offered. The roadmap describes the planned options.',
    },
    {
      question: 'Where do we start?',
      answer:
        'Open the app to explore the DAO Hub. Read the handbook for accounts, DAO setup, voting, funded work and documents. For feature availability and deployment-specific guidance, use the documentation in the app.',
    },
  ],
  preview: {
    label: 'Example community',
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
      title: 'Daclify — DAO tools for communities that govern together',
      description:
        'Manage DAO members, vote on proposals, fund projects and organize shared documents with Daclify. Explore the app and learn how it works in the handbook.',
      eyebrow: 'A shared workspace for your DAO',
      heading: 'Your community.\nYour decisions.\nYour future.',
      lead: 'Run your community in one place. Manage members, vote on proposals, fund projects and keep documents organized—with rules your members can see and understand.',
      sections: [
        {
          title: 'From a good idea to something you can build.',
          text: 'Give your community a clear way to make decisions and act on them. Keep the proposal, the budget and the work connected, so everyone can follow what happens next.',
          cards: [
            {
              title: 'Bring people together',
              text: 'Give members an account, define their roles and make participation clear. People can join without setting up a native blockchain account of their own.',
              link: 'platform',
            },
            {
              title: 'Decide together',
              text: 'Put ideas to a vote. Set the rules, see the results and keep a shared record of the decisions your community makes.',
              link: 'modules',
            },
            {
              title: 'Fund meaningful work',
              text: 'Connect your budget to projects and milestones. Review what contributors deliver and track the payments your DAO approves.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'Choose the tools your community needs.',
          text: 'Start with focused modules for decisions, project funding and regular contributor payments. Each one has a clear purpose, so your workspace stays useful as your community grows.',
          cards: [
            {
              title: 'Decide',
              text: 'Create ballots, let eligible members vote and record the final result. Make community decisions easy to follow.',
              link: 'modules',
            },
            {
              title: 'Works',
              text: 'Propose a project, agree on milestones and review the work before approving payment. Give contributors and reviewers a shared process.',
              link: 'modules',
            },
            {
              title: 'Payroll',
              text: 'Organize funded, fixed-term contributor payments. Keep the schedule and approved commitments visible alongside your treasury.',
              link: 'modules',
            },
          ],
        },
        {
          title: 'A home for your DAO. A Hub for your community.',
          text: 'Find DAOs through the Hub and open a workspace for the community you want to take part in. Each DAO has its own members, rules and records.',
          cards: [
            {
              title: 'Start with shared contracts',
              text: 'Use shared infrastructure while keeping your DAO’s membership, settings and treasury records separate. Spend your time organizing the community.',
              link: 'platform',
            },
            {
              title: 'Operate your own deployment',
              text: 'DAO-owned contracts and direct connections are on the roadmap for communities that want to manage their own infrastructure and connect to the same Hub.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
        {
          title: 'Keep knowledge close to the work.',
          text: 'Store decisions, project notes and documents alongside the activity they support. Use public records when openness matters and encrypted documents when the content needs a smaller audience.',
          bullets: [
            'Keep a version history so members can follow changes.',
            'Use compact records for everyday information and IPFS references for larger files.',
            'Understand who can read protected content and who holds the recovery keys.',
          ],
        },
      ],
    },
    platform: {
      title: 'DAO membership, accounts and community workspaces | Daclify',
      description:
        'Bring members, roles, voting and shared funds together in Daclify. Learn about DAO accounts, the discovery Hub and shared or independent deployments.',
      eyebrow: 'The platform',
      heading: 'A clear place to organize together.',
      lead: 'Daclify gives your DAO a shared workspace for people, decisions, money and knowledge. Your community sets the rules; members can understand where they fit and what they can do.',
      sections: [
        {
          title: 'Make participation straightforward.',
          text: 'Daclify accounts identify members inside the smart contract. A member does not need a separate native blockchain account to take part. Roles define who can vote, review work or manage DAO settings.',
          cards: [
            {
              title: 'An account for each member',
              text: 'Use one identity across your DAO’s tools. Membership and permissions follow the person, instead of being recreated separately for voting, work and documents.',
            },
            {
              title: 'Keys you control',
              text: 'User-controlled accounts use a local encrypted vault and recovery credentials. Keep your backup safe: signing in on a new device does not replace a lost recovery credential.',
            },
            {
              title: 'More ways to sign in',
              text: 'Native wallet linking, social login, Telegram and clearly labelled managed recovery are on the roadmap. These options will have explicit permissions and recovery responsibilities.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Your DAO keeps its own identity.',
          text: 'Shared contracts give each DAO its own members, settings and treasury records. The Hub provides a place to discover and open those workspaces.',
          cards: [
            {
              title: 'Shared infrastructure',
              text: 'Create a DAO within a shared deployment and configure the tools your community needs. Keep the organization’s records together in one workspace.',
            },
            {
              title: 'Independent infrastructure',
              text: 'The roadmap includes DAO-owned contracts connected to the Hub. Communities choosing this mode will also take responsibility for deployment, upgrades and ongoing operations.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Voting power and money have different jobs.',
          text: 'Governance credits help your DAO decide who has a say. Treasury assets pay for the work the community supports. Keeping them separate makes the rules easier to explain.',
          bullets: [
            'Define voting power through your DAO’s governance policy.',
            'Use supported blockchain assets for treasury funding and payments.',
            'Check the app’s guides for supported tokens and voting policies.',
          ],
        },
        {
          title: 'Learn in the place where you work.',
          text: 'The app includes a searchable handbook for accounts, DAO setup, voting, projects, payroll and documents. Guides show their versions so you can check that the instructions match your connected deployment.',
          bullets: [
            'Use the handbook to understand a feature before taking action.',
            'Review a module’s permissions before enabling it.',
            'Keep signing and document recovery credentials safe.',
          ],
        },
      ],
    },
    modules: {
      title: 'DAO voting, project funding and contributor payments | Daclify',
      description:
        'Discover Daclify modules for DAO voting, milestone funding, payroll and shared documents. Choose the tools that fit how your community works.',
      eyebrow: 'The modules',
      heading: 'Tools that turn decisions into progress.',
      lead: 'Every community works differently. Choose focused tools for voting, funding projects and paying contributors, with shared accounts and records across your DAO.',
      sections: [
        {
          title: 'Decide — give members a clear voice.',
          text: 'Use ballots to collect votes and record an outcome. Define who is eligible, how voting power is counted and when the decision closes, so members know the rules before they participate.',
          bullets: [
            'Create a ballot with a clear question and options.',
            'Let eligible members vote through the DAO workspace.',
            'Finalize the ballot and keep the result as a shared record.',
          ],
        },
        {
          title: 'Works — connect funding to delivery.',
          text: 'Turn a project proposal into agreed milestones. Contributors submit their work; authorized reviewers can request changes or accept it. Track the funding and approved payment alongside the project.',
          bullets: [
            'Agree on the scope, amount and milestones.',
            'Keep submissions, feedback and approvals in one process.',
            'See which commitments have been accepted and which are still open.',
          ],
        },
        {
          title: 'Payroll — organize recurring contributions.',
          text: 'Set up funded, fixed-term schedules for contributors who work with your DAO over time. Keep payment commitments understandable for both the organization and the people doing the work.',
          bullets: [
            'Define the recipient, amount and payment schedule.',
            'Track due payments and approved obligations.',
            'Keep treasury records connected to contributor commitments.',
          ],
        },
        {
          title: 'Documents — remember why a decision was made.',
          text: 'Keep proposals, project notes, agreements and files close to the decisions they support. Versioned records help members follow changes; encrypted files protect content that should have a limited audience.',
          cards: [
            {
              title: 'Shared records',
              text: 'Use compact JSON records for everyday information and IPFS references for larger files. Keep earlier versions available for context.',
            },
            {
              title: 'Protected documents',
              text: 'Encrypt private content before storage and give eligible members the keys they need to read it. Learn what this protects and what stays public.',
              link: 'privacy',
            },
          ],
        },
        {
          title: 'Start with the essentials. Add what helps.',
          text: 'Useful core governance is intended to remain free. Optional paid modules and hosted services are planned for communities that need more operating capacity or convenience. Prices and limits will be published before those services are offered.',
          cards: [
            {
              title: 'Choose your workflow',
              text: 'Enable the tools that suit your community, review their permissions and use the handbook to understand the configuration.',
            },
            {
              title: 'Hosted Operations',
              text: 'Automation, notifications and selected integrations are on the roadmap as optional services. They support your DAO’s workflow without replacing its governance rules.',
              status: 'planned',
              link: 'roadmap',
            },
          ],
        },
      ],
    },
    privacy: {
      title: 'Private DAO documents and encrypted shared records | Daclify',
      description:
        'Keep DAO documents organized and protect private content with encryption. Understand member access, recovery keys and the limits of public blockchain records.',
      eyebrow: 'Privacy with clear choices',
      heading: 'Share knowledge with the right people.',
      lead: 'Some information belongs in public. Some belongs with the people doing the work. Daclify connects shared records and encrypted documents to your DAO, with clear choices about access and recovery.',
      sections: [
        {
          title: 'Protect the content before storing it.',
          text: 'Private files are encrypted on the user’s device before upload. The stored file contains encrypted content; an eligible member needs the correct key to read it. A public storage link alone does not unlock the document.',
          bullets: [
            'Keep signing keys separate from document encryption keys.',
            'Use version history to follow updates to a record.',
            'Check file integrity when retrieving stored content.',
          ],
        },
        {
          title: 'Know who holds the keys.',
          text: 'User-controlled accounts keep recovery credentials with the member. Managed recovery is a planned alternative and will carry a different trust relationship: a service that can recover decryption keys can also access them.',
          cards: [
            {
              title: 'User-controlled recovery',
              text: 'Back up your recovery credential and keep it safe. Without the credential or another authorized key holder, a lost decryption key can mean losing access to protected content.',
            },
            {
              title: 'Managed recovery',
              text: 'Planned service-assisted recovery will explain what the operator can recover and access. DAOs will need an explicit policy on whether they allow this mode.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Private documents do not make every action private.',
          text: 'Encryption protects document content. Membership references, vote records, transfers and other activity on a public blockchain may remain visible. Daclify does not promise anonymous membership or secret ballots.',
          bullets: [
            'An authorized member can copy or share information they can read.',
            'Removing a member cannot erase information already received.',
            'Public chain history and third-party file copies cannot be recalled.',
          ],
        },
        {
          title: 'Plan for changes in membership.',
          text: 'A DAO needs rules for who can read historical documents and how future access changes when people join or leave. The roadmap includes fuller member-access and key-rotation workflows; the handbook describes the supported behavior for each deployment.',
          bullets: [
            'Choose who should receive access to past records.',
            'Treat key rotation and member removal as related steps.',
            'Make recovery responsibilities clear before sharing sensitive content.',
          ],
        },
        {
          title: 'Keep records useful over time.',
          text: 'Compact information fits in contract records; larger documents use IPFS references. A content reference helps identify a file, while continued storage and access still depend on the configured provider and retained keys.',
          bullets: [
            'Keep essential recovery credentials backed up.',
            'Understand your deployment’s file-storage configuration.',
            'Use the handbook for current document and access procedures.',
          ],
        },
      ],
    },
    roadmap: {
      title: 'Daclify roadmap — accounts, DAO deployments and integrations',
      description:
        'Follow Daclify’s roadmap for social and Telegram login, independent DAO contracts, hosted services and future blockchain integrations. Explore the app and handbook.',
      eyebrow: 'The roadmap',
      heading: 'More ways to make Daclify yours.',
      lead: 'The roadmap builds on a shared workspace for membership, voting, funded work and documents. Here are the next capabilities we want to bring to communities, with availability described in the app’s handbook.',
      sections: [
        {
          title: 'More ways to join.',
          text: 'Planned account options include social login, Telegram, native wallet linking and managed recovery. Both user-controlled and managed modes need clear explanations of who controls the keys and how recovery works.',
          cards: [
            {
              title: 'Social and Telegram access',
              text: 'Make it easier to enter the workspace while preserving one member identity and the DAO’s existing permissions.',
              status: 'planned',
            },
            {
              title: 'Managed recovery',
              text: 'Offer a clearly labelled service-assisted mode alongside user-controlled keys, with documented recovery and exit responsibilities.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Your own contracts, connected to the Hub.',
          text: 'Independent deployments will let a DAO manage its own contracts and upgrades while using the Hub for discovery. This path also needs direct connections, compatible guides and clear operator responsibilities.',
          bullets: [
            'DAO-owned deployment and upgrade control.',
            'Discovery alongside communities using shared contracts.',
            'Direct access for communities operating their own infrastructure.',
          ],
        },
        {
          title: 'More support for everyday operations.',
          text: 'Optional hosted services are planned for scheduled actions, notifications and integrations. The goal is less routine administration, with transparent pricing and no change to a DAO’s voting rights.',
          cards: [
            {
              title: 'Hosted Operations',
              text: 'Scheduling, Telegram notifications and selected webhooks, with clear limits and permissions.',
              status: 'planned',
            },
            {
              title: 'Richer governance workflows',
              text: 'Additional election, committee and proposal-execution options, plus broader project and payroll policies.',
              status: 'planned',
            },
            {
              title: 'Document access tools',
              text: 'More complete member key lifecycle, export, retention and recovery workflows.',
              status: 'planned',
            },
          ],
        },
        {
          title: 'Connections beyond one chain.',
          text: 'Telos EVM identities and future payment connections are part of the longer-term direction. Cross-chain payments need verified transaction evidence and clear settlement rules before they can support DAO obligations.',
          bullets: [
            'Treat identity linking and payment settlement as separate capabilities.',
            'Add integrations for specific community needs.',
            'Publish supported chains and verification requirements in the handbook.',
          ],
        },
        {
          title: 'Keep the essentials accessible.',
          text: 'Our aim is a useful free governance foundation, with optional paid capabilities for communities that need more. There are no announced prices or delivery dates for roadmap items. The app’s versioned documentation is the reference for supported features.',
          bullets: [
            'Choose tools because they help your community.',
            'Review feature availability and deployment requirements in the app.',
            'Share feedback and use cases through the Daclify community.',
          ],
        },
      ],
    },
  },
};
