import type { DesignSystemBlockDefinition, DesignSystemVariantDefinition } from "./contracts";

const defaultVariant: DesignSystemVariantDefinition = {
  description: "The package-owned application default.",
  id: "default",
  name: "Default",
};

const tableVariants: readonly DesignSystemVariantDefinition[] = [
  {
    description: "A complete workspace table with tools, totals, and pagination.",
    id: "default",
    name: "Workspace",
  },
  {
    description: "A compact table section without page-level tools.",
    id: "section",
    name: "Section",
  },
];

const workspaceEntityCardVariants: readonly DesignSystemVariantDefinition[] = [
  defaultVariant,
  {
    description: "A workspace entity card with shared hover treatment for interactive inventory surfaces.",
    id: "interactive",
    name: "Interactive",
  },
];

export const designSystemBlocks: readonly DesignSystemBlockDefinition[] = [
  {
    defaultVariantId: "default",
    description: "Shared runtime state, health, publish, and route readiness surfaces for workspace dashboards.",
    id: "workspace-status",
    name: "Workspace Status",
    source: "@devxcrew/ui/blocks/workspace",
    variants: [
      defaultVariant,
      {
        description: "Runtime state with optional port, HTTP status, latency, and action.",
        id: "runtime",
        name: "Runtime",
      },
      { description: "Compact health metric summary.", id: "health", name: "Health" },
      { description: "Published, review, or draft state badge.", id: "publish", name: "Publish" },
      { description: "Ready, pending, or blocked route checklist.", id: "routes", name: "Routes" },
    ],
  },
  {
    defaultVariantId: "default",
    description: "A reusable entity card for workspace inventories, resources, and live status surfaces.",
    id: "workspace-entity-card",
    name: "Workspace Entity Card",
    source: "@devxcrew/ui/blocks/workspace",
    variants: workspaceEntityCardVariants,
  },
  {
    defaultVariantId: "default",
    description: "Observed execution state, readiness checklists, and optional startup splash with measured values.",
    id: "execution-status",
    name: "Execution Status",
    source: "@devxcrew/ui/blocks/execution-status",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A typed data table with application-owned rows and columns.",
    id: "table",
    name: "Table",
    source: "@devxcrew/ui/blocks/table",
    variants: tableVariants,
  },
  {
    defaultVariantId: "default",
    description: "A typed application form frame with tabs, lookup fields, and actions.",
    id: "form",
    name: "Form",
    source: "@devxcrew/ui/blocks/form",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A pointer-aware, clickable character rendered from two aligned 3x3 sprite sheets.",
    id: "mascot",
    name: "Mascot",
    source: "@devxcrew/ui/blocks/mascot",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "breadcrumb-actions",
    description: "A shared page-level header with breadcrumb, title, filter, resource, and action arrangements.",
    id: "app-header",
    name: "App Header",
    source: "@devxcrew/ui/blocks/app-header",
    variants: [
      {
        description: "Breadcrumb context with an optional profile slot and primary action.",
        id: "breadcrumb-actions",
        name: "Breadcrumb + action",
      },
      {
        description: "Icon and page title with filter controls and a primary action.",
        id: "title-actions",
        name: "Title + filter + action",
      },
      {
        description: "Resource link with a copy affordance at the right edge.",
        id: "resource-actions",
        name: "Resource + copy",
      },
    ],
  },
  {
    defaultVariantId: "default",
    description: "An interactive drag-and-drop Kanban board with sortable columns and cards.",
    id: "kanban",
    name: "Kanban Board",
    source: "@devxcrew/ui/blocks/kanban",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A hierarchical file and workspace explorer tree with icons, filter, and actions.",
    id: "file-tree",
    name: "File Tree",
    source: "@devxcrew/ui/blocks/file-tree",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A drag-and-drop file upload zone with type/size validation and progress tracking.",
    id: "dropzone",
    name: "File Dropzone",
    source: "@devxcrew/ui/blocks/dropzone",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A safe live preview for Mermaid diagram source.",
    id: "mermaid-preview",
    name: "Mermaid Preview",
    source: "@devxcrew/ui/blocks/mermaid-preview",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A multi-condition query filter builder with combinators and typed operators.",
    id: "filter-builder",
    name: "Filter Builder",
    source: "@devxcrew/ui/blocks/filter-builder",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "An e-commerce product card with image zoom, ratings, swatches, and cart actions.",
    id: "product-card",
    name: "Product Card",
    source: "@devxcrew/ui/blocks/product-card",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A multi-tier pricing table with monthly/annual interval toggle and feature lists.",
    id: "pricing",
    name: "Pricing Table",
    source: "@devxcrew/ui/blocks/pricing",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "An interactive storefront slide-over cart drawer with quantity stepper and shipping threshold meter.",
    id: "cart",
    name: "Storefront Cart",
    source: "@devxcrew/ui/blocks/ecommerce/cart",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A storefront category visual grid, megamenu navigation, and pill filter strip.",
    id: "categories",
    name: "Categories Showcase",
    source: "@devxcrew/ui/blocks/ecommerce/categories",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A multi-step checkout wizard covering shipping destination, payment method, and order review.",
    id: "checkout",
    name: "Checkout Wizard",
    source: "@devxcrew/ui/blocks/ecommerce/checkout",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A side-by-side product comparison matrix with spec rows and difference highlighting.",
    id: "comparison",
    name: "Product Comparison",
    source: "@devxcrew/ui/blocks/ecommerce/comparison",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A promotional coupon wallet with voucher cards, instant code copy, and applied discount management.",
    id: "coupon-wallet",
    name: "Coupon Wallet",
    source: "@devxcrew/ui/blocks/ecommerce/coupon-wallet",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A visual shipment milestone timeline with courier details and live delivery status.",
    id: "delivery-tracker",
    name: "Delivery Tracker",
    source: "@devxcrew/ui/blocks/ecommerce/delivery-tracker",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A checkout payment method selector covering saved cards with CVV entry, UPI, wallets, and COD.",
    id: "payment-methods",
    name: "Payment Methods",
    source: "@devxcrew/ui/blocks/ecommerce/payment-methods",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A historical price trend visualization with lowest/peak markers and price drop notifications.",
    id: "price-history",
    name: "Price History Tracker",
    source: "@devxcrew/ui/blocks/ecommerce/price-history",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "An aggregate rating breakdown, verified customer reviews list, and write-review form.",
    id: "reviews",
    name: "Reviews & Ratings",
    source: "@devxcrew/ui/blocks/ecommerce/reviews",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description: "A saved items wishlist grid with stock availability indicators and quick move-to-cart actions.",
    id: "wishlist",
    name: "Wishlist Grid",
    source: "@devxcrew/ui/blocks/ecommerce/wishlist",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description:
      "A multi-column storefront and content footer with newsletter subscribe, social links, and payment badges.",
    id: "footer",
    name: "Site Footer",
    source: "@devxcrew/ui/blocks/footer",
    variants: [defaultVariant],
  },
  {
    defaultVariantId: "default",
    description:
      "An editorial blog suite featuring post cards (standard, horizontal, compact) and rich article reading layout.",
    id: "blog",
    name: "Blog & Editorial",
    source: "@devxcrew/ui/blocks/blog",
    variants: [defaultVariant],
  },
];

export function getDesignSystemBlock(blockId: string) {
  return designSystemBlocks.find(({ id }) => id === blockId);
}
