# Emily Rose Cripps Design - Sanity Studio

Content management system for the Emily Rose Cripps Design portfolio website. This Sanity Studio provides an intuitive interface for managing portfolio content, project showcases, and website information.

**Developer:** **Daniel Hall**, Solutions Architect  
**Website:** [https://danieljh.uk](https://danieljh.uk)

## About

This Sanity Studio is configured to manage content for Emily Rose Cripps' design portfolio, providing:

- Content management for portfolio projects
- Blog post creation and editing
- Tag and category management
- Media asset organisation
- Real-time collaboration capabilities

## Content Types

### Portfolio Projects (`jobType`)
- Project title and description
- Project images and galleries
- Client information
- Project tags and categories
- Publication status

### Blog Posts (`postType`)
- Article title and content
- Featured images
- Publication dates
- Rich text editing capabilities

### Tags (`tagType`)
- Categorisation system for projects and posts
- Colour-coded organisation

## Getting Started

### Prerequisites

- Node.js 22.18.0 or higher
- pnpm (recommended) or npm
- Sanity account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danielhall/studio-emily-rose-cripps-design.git
cd studio-emily-rose-cripps-design
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Fill in your Sanity project credentials:
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

4. Start the development server:
```bash
pnpm dev
```

The studio will be available at [http://localhost:3333](http://localhost:3333).

## Environment Variables

Required environment variables (see `.env.example`):

- `SANITY_STUDIO_PROJECT_ID` - Your Sanity project ID
- `SANITY_STUDIO_DATASET` - Sanity dataset name (usually 'production')

## Project Structure

```
├── schemaTypes/          # Content type definitions
│   ├── index.ts         # Schema exports
│   ├── jobType.ts       # Portfolio project schema
│   ├── postType.ts      # Blog post schema
│   └── tagType.ts       # Tag schema
├── static/              # Static studio assets
├── .env                 # Environment variables (git-ignored)
├── sanity.cli.ts        # CLI configuration
└── sanity.config.ts     # Studio configuration
```

## Scripts

- `pnpm dev` - Start development studio
- `pnpm build` - Build studio for production
- `pnpm start` - Start production studio

## Technologies

- [Sanity.io](https://www.sanity.io/) - Headless CMS platform
- TypeScript - Type-safe schema definitions
- Modern studio UI with real-time collaboration

## Developer

**Daniel Hall**  
Solutions Architect  
[https://danieljh.uk](https://danieljh.uk)

## Licence

Copyright © 2025 Daniel Hall. All rights reserved.

This project is provided for portfolio demonstration purposes. See [LICENSE](./LICENSE) for full terms and conditions.