# RedCloud Affiliate Management System - Handover Notes

## Project Overview
The RedCloud Affiliate Management System is a multi-tenant web application built with React, TypeScript, and Tailwind CSS. It serves three distinct user types: Admin, Back Office, and Affiliate users, each with their own dashboard and specific functionalities.

## 🏗️ Architecture & Technology Stack

### Frontend Technology Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts library

### Design System
- **Color Palette**: HSL-based color system defined in `src/index.css`
- **Typography**: System fonts with custom font weights
- **Spacing**: Tailwind's standard spacing scale
- **Components**: Consistent component library using Shadcn/ui

## 📱 User Flows & Pages

### Authentication Flow
1. **Login Page** (`/login`)
   - Email/password authentication
   - Demo accounts for testing
   - Responsive design with company branding
   - Route-based redirection after login

2. **Registration Page** (`/register`)
   - Multi-step affiliate registration
   - File upload for selfie verification
   - Bank account information collection
   - Terms & conditions acceptance
   - **Navigation**: Back to Login button for easy return

### Admin Dashboard (`/admin`)
- **Dashboard** - Overview statistics and metrics
- **User Management** (`/admin/users`) - Manage affiliates and back office users
- **User Creation** (`/admin/users/create`) - Create both affiliate and back office users
  - **Conditional Fields**: Bank details only required for affiliate users
  - **Dual Role Support**: Admin can create both affiliate and back office users
- **Order Management** (`/admin/orders`) - Monitor all platform orders
- **Reports** (`/admin/reports`) - Generate affiliate login reports with date range selection and Excel export
- **Master Data** (`/admin/master-data/commission-upload`) - Upload commission details

### Back Office Dashboard (`/backoffice`)
- **Dashboard** - Back office specific metrics with clickable KPIs that redirect to user management
  - Pending Applications KPI → `/backoffice/users?status=pending`
  - Active Affiliates KPI → `/backoffice/users?status=active` 
  - Total Applications KPI → `/backoffice/users` (all statuses)
- **User Management** (`/backoffice/users`) - Limited user management with status filtering
- **User Creation** (`/backoffice/users/create`) - **Affiliate Creation Only**
  - **Restriction**: Back office users can only create affiliate users
  - **Required Fields**: All bank details required for affiliate creation
  - **Navigation**: Proper back navigation to user management (not login)
- **Reports** (`/backoffice/reports`) - Affiliate login reports with date range selection and Excel export

### Affiliate Dashboard (`/affiliate`)
- **Dashboard** - Personal earnings and performance metrics
  - **User Identity**: Shows affiliate ID (e.g., APR20000) prominently under user name
- **Retailers** (`/affiliate/retailers`) - Manage retailer relationships
  - **Enhanced Table**: Added FAO column (alphanumeric, e.g., FAO1234) and Cluster Manager column (email)
- **Orders** (`/affiliate/orders`) - View personal order history
  - **Updated Table**: Replaced 'Agent ID' with 'FAO' column
  - **Color Coding**: Days Since Order shows in red (font-semibold) when >= 10 days

## 🎨 Design System Details

### Color Palette (HSL Values)
```css
/* Primary Colors */
--primary: 222.2 47.4% 11.2%
--primary-foreground: 210 40% 98%

/* Secondary Colors */
--secondary: 210 40% 96.1%
--secondary-foreground: 222.2 47.4% 11.2%

/* Accent Colors */
--accent: 210 40% 96.1%
--accent-foreground: 222.2 47.4% 11.2%

/* Status Colors */
--destructive: 0 84.2% 60.2%
--muted: 210 40% 96.1%
--muted-foreground: 215.4 16.3% 46.9%

/* Background Colors */
--background: 0 0% 100%
--foreground: 222.2 84% 4.9%
--card: 0 0% 100%
--card-foreground: 222.2 84% 4.9%
```

### Typography
- **Font Family**: System fonts (Inter, system-ui, sans-serif)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Font Sizes**: Tailwind's default scale (text-sm, text-base, text-lg, etc.)

### Spacing & Layout
- **Container Max Width**: 1280px
- **Sidebar Width**: 240px (collapsed: 56px)
- **Header Height**: 64px
- **Card Padding**: 24px (p-6)
- **Form Spacing**: 24px between sections (space-y-6)

## 📄 Getting HTML Files & Assets

### Method 1: Build Output
```bash
npm run build
# or
yarn build
# or
bun run build
```
The built HTML, CSS, and JS files will be in the `dist/` folder.

### Method 2: Development Server
```bash
npm run dev
# or
yarn dev
# or
bun dev
```
Access pages at `http://localhost:5173/[route]` and save HTML via browser.

### Method 3: Static Generation
To generate static HTML files for each route, you can use tools like:
- `react-snap` for pre-rendering
- `puppeteer` for programmatic HTML generation
- Manual save via browser dev tools

## 🔧 Backend Requirements

### Authentication System
- JWT-based authentication
- Role-based access control (Admin, BackOffice, Affiliate)
- Session management
- Password reset functionality

### Database Schema Requirements

#### Users Table
```sql
- id (primary key)
- email (unique)
- password_hash
- role (admin/backoffice/affiliate)
- full_name
- phone
- status (active/inactive/pending)
- affiliate_id (for affiliates, e.g., APR20000)
- created_at
- updated_at
```

#### Affiliates Table
```sql
- id (primary key)
- user_id (foreign key)
- affiliate_code (unique, e.g., APR20000)
- bank_name
- account_number
- nin_or_bvn
- total_earnings
- pending_commission
- clicks
- conversions
- conversion_rate
- registration_date
```

#### Orders Table
```sql
- id (primary key)
- order_date
- customer_name
- product_name
- order_amount
- status (pending/processing/completed/cancelled)
- affiliate_id (foreign key)
- fao (alphanumeric identifier, e.g., FAO1234)
- created_at
- updated_at
```

#### Retailers Table
```sql
- id (primary key)
- affiliate_id (foreign key)
- business_name
- contact_person
- location
- registration_date
- total_orders
- total_value
- fao (alphanumeric, e.g., FAO1234)
- cluster_manager_email
- created_at
- updated_at
```

### API Endpoints Required

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Affiliate registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Token refresh

#### User Management
- `GET /api/users` - List users (admin/backoffice) with status filtering
- `POST /api/users` - Create user (admin: both types, backoffice: affiliate only)
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

#### Orders
- `GET /api/orders` - List orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order

#### Retailers
- `GET /api/retailers` - List retailers for affiliate
- `POST /api/retailers` - Create retailer
- `PUT /api/retailers/:id` - Update retailer

#### Reports
- `GET /api/reports/affiliate-login` - Affiliate login report with date range filtering
- `GET /api/reports/affiliate-login/export` - Export affiliate login report to Excel

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: 0-640px (sm)
- **Tablet**: 641-768px (md)
- **Desktop**: 769px+ (lg)

### Mobile-First Considerations
- Collapsible sidebar for mobile
- Touch-friendly button sizes (min 44px)
- Responsive tables with horizontal scroll
- Stack layout for cards on mobile
- Simplified navigation for small screens

## 🔄 State Management

### React Query Configuration
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
  },
});
```

### Key Query Keys
- `['users']` - User list
- `['users', { status: 'pending' }]` - Filtered user list
- `['orders']` - Order list
- `['retailers']` - Retailer list
- `['affiliate', id]` - Affiliate details
- `['reports', type, params]` - Report data

## 🚀 Deployment & Environment

### Environment Variables
```env
VITE_API_BASE_URL=your_api_base_url
VITE_APP_NAME=RedCloud
VITE_UPLOAD_MAX_SIZE=5242880
```

### Build Configuration
The project uses Vite for building. Key configuration in `vite.config.ts`:
- TypeScript support
- Path aliases (@/ for src/)
- CSS processing
- Asset optimization

## 🧪 Testing Strategy

### Demo Accounts
- **Admin**: admin@example.com / password123
- **Back Office**: backoffice@example.com / password123
- **Affiliate**: affiliate@example.com / password123 (ID: APR20000)

### Test Cases
1. **Authentication Flow**
   - Valid/invalid login attempts
   - Role-based redirections
   - Session persistence

2. **User Management**
   - Create/edit/delete users
   - Permission validation
   - Data validation
   - Status filtering functionality
   - **Role-based Creation**: Admin can create both types, back office only affiliates

3. **Responsive Design**
   - Mobile navigation
   - Table responsiveness
   - Form layouts

4. **New Features**
   - KPI click navigation
   - Date range report generation
   - Excel export functionality
   - Affiliate ID display
   - Updated table columns

## 📋 Component Structure

### Layout Components
- `DashboardLayout` - Main layout wrapper
- `Navbar` - Top navigation with user identity
- `AppSidebar` - Collapsible sidebar

### Feature Components
- `AffiliateTable` - User data table with status filtering
- `OrderTable` - Order management table with Agent ID
- `StatCard` - Metric display cards with click handlers

### Page Components
- `BackOfficeCreateUser` - Dedicated affiliate creation page for back office users
- `AdminCreateUser` - Comprehensive user creation page for admin users
- Enhanced dashboard pages with updated functionality
- Updated reports pages with date range selection

### UI Components (Shadcn/ui)
- All components follow Shadcn/ui patterns
- Consistent theming via CSS variables
- Accessible by default

## 🔗 GitHub Integration

This project is configured for GitHub sync. The repository contains:
- Complete source code
- Package.json with all dependencies
- TypeScript configuration
- Tailwind configuration
- Build scripts

### Getting Started for Developers
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start development server
npm run dev
# or
yarn dev
# or
bun dev
```

## 🎯 Recent Updates & New Features

### User Creation & Role Management
1. **Admin User Creation**: Can create both affiliate and back office users
   - **Conditional Form**: Bank details only shown for affiliate users
   - **Full Access**: Complete user creation capabilities

2. **Back Office User Creation**: Restricted to affiliate creation only
   - **Single Role**: Can only create affiliate users
   - **Required Fields**: All bank details mandatory for affiliates
   - **Clear Navigation**: Proper back button to user management

### Affiliate User Experience
1. **Order History**: Replaced 'Commission Earned' with 'Agent ID' column
   - **Color Coding**: Days Since Order displays in red when >= 10 days for better visibility
2. **Retailer Management**: Added FAO and Cluster Manager columns
3. **Dashboard Identity**: Prominently displays affiliate ID under user name

### Back Office User Experience
1. **Dashboard KPIs**: Made statistics clickable with smart navigation to filtered user lists
2. **User Creation**: Dedicated page with proper back navigation (not to login)
3. **Reports**: Streamlined to show only affiliate login reports with date range selection

### Admin User Experience
1. **Reports**: Updated to match back office functionality with date range selection and Excel export
2. **User Creation**: Enhanced form with role-based field visibility

### Technical Improvements
1. **Navigation Logic**: Enhanced with status-based filtering and proper routing
2. **User Interface**: Improved mobile responsiveness and user experience
3. **Data Structure**: Updated to support new column requirements and filtering
4. **Form Logic**: Conditional field rendering based on user role selection

## 🎯 Next Steps for Development Team

1. **Backend Development**
   - Implement API endpoints as specified
   - Set up database with updated schema including new columns
   - Configure authentication middleware
   - Implement status-based filtering for user management
   - Add Excel export functionality for reports
   - **Role-based User Creation**: Ensure backend validates user creation permissions

2. **Integration**
   - Replace mock data with API calls
   - Implement error handling
   - Add loading states
   - Connect date range filtering to backend
   - **Validation**: Implement server-side validation for role-based user creation

3. **Testing**
   - Unit tests for components
   - Integration tests for user flows
   - End-to-end testing for new features
   - Test KPI click navigation and filtering
   - **Permission Testing**: Verify role-based user creation restrictions

4. **Performance**
   - Optimize bundle size
   - Implement lazy loading
   - Add caching strategies
   - Optimize table rendering for mobile

5. **Security**
   - Input validation
   - XSS protection
   - CSRF protection
   - Secure file export functionality
   - **Role Validation**: Server-side enforcement of user creation permissions

## 📞 Support & Questions

For any questions about the frontend implementation, refer to:
- Component documentation in respective files
- Tailwind CSS documentation
- Shadcn/ui component library
- React Router documentation
- Updated user flow documentation

This handover document provides a complete blueprint for continuing development of the RedCloud Affiliate Management System with all recent enhancements and user experience improvements, including the updated role-based user creation functionality.
