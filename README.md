# ContractSphere AI

Enterprise contract automation platform — hackathon MVP.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Query** (data fetching)
- **Zustand** (global state)
- **Recharts** (charts)
- **Lucide React** (icons)

## Pages
| Route | Description |
|-------|-------------|
| `/dashboard` | Metrics, charts, recent contracts |
| `/jira` | Jira ticket sync & contract generation |
| `/contracts` | Contracts table with filters |
| `/contracts/[id]` | Contract detail, approvals, DocuSign status |
| `/approvals` | 3-stage approval workflow (Legal → Finance → Compliance) |
| `/compliance` | Document tracker with expiry alerts |
| `/ai-risk` | AI clause extraction & risk scoring |
| `/vendor` | Vendor portal with compliance checklist |
| `/settings` | Integrations, workflow config |

## Quick Start
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project Structure
```
app/              # Next.js App Router pages
components/
  layout/         # Sidebar, Topbar, QueryProvider
  ui/             # StatusBadge, RiskBadge, MetricCard, FileUpload, ...
  approvals/      # ApprovalTimeline component
lib/
  api.ts          # API client (mock)
  mock-data.ts    # All mock data
  utils.ts        # cn(), formatters, color helpers
types/index.ts    # All TypeScript interfaces
store/app-store.ts  # Zustand global store
```

## Color Palette
| Token | Hex |
|-------|-----|
| Sidebar | `#172554` |
| Sidebar hover | `#1e3a8a` |
| Primary blue | `#2563eb` |
| Success | `#10b981` |
| Warning | `#f59e0b` |
| Danger | `#ef4444` |
| Surface | `#f9fafb` |

## Connecting Real APIs
Replace the functions in `lib/api.ts` with real fetch calls to your backend.
All UI components consume data through React Query — swap mock implementations for real endpoints without touching any component code.
