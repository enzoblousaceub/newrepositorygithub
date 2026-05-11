# 📦 StockManager — Inventory Management System

Welcome to **StockManager**, a professional AI-powered stock management platform designed to help businesses monitor, organize, and optimize their inventory operations.

This document provides a complete guide on how to set up, run, and use all the features of the application.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
*   **[.NET 10 SDK](https://dotnet.microsoft.com/download)** (Backend)
*   **[Node.js 18+](https://nodejs.org/)** (Frontend)
*   **Angular CLI** (Optional, can be run via `npx`)

---

## 🛠️ Installation & Setup

Follow these steps to get the project running locally:

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd projetoIntegrador
```

### 2. Set Up the Backend
The backend uses **ASP.NET Core 10** and **SQLite**.
```bash
cd backend
dotnet restore
dotnet build
dotnet run
```
> [!IMPORTANT]
> The backend is configured to run on **http://localhost:5005**.
> On first run, it will automatically create the `data/stock.db` database and populate it with seed data.

### 3. Set Up the Frontend
The frontend uses **Angular 19** with **Angular Material**.
```bash
cd ../frontend
npm install
npx ng serve
```
> [!NOTE]
> The frontend will be available at **http://localhost:4200**.

---

## 📖 User Tutorial: How to Use StockManager

### 1. Dashboard (The Command Center)
When you first open the app, you'll land on the **Dashboard**.
*   **Stats Cards:** Instantly view your total product count, total items in stock, and the total monetary value of your inventory.
*   **Alerts:** Keep an eye on "Low Stock" and "Out of Stock" cards. If these numbers are above zero, it's time to restock!
*   **Quick Actions:** Use the buttons at the bottom to quickly jump to the product list or add a new item.

### 2. Managing Your Inventory
Click on **"Products"** in the sidebar to see your full inventory.
*   **Searching:** Use the search bar to find products by name or description.
*   **Filtering:** Use the "Category" dropdown to see only specific types of items (e.g., Electronics, Furniture).
*   **Sorting:** Click on any column header (Name, Category, Quantity, Price) to sort the list.
*   **Status Badges:** Look at the "Status" column to see visual indicators:
    *   🟢 **In Stock:** Good to go.
    *   🟡 **Low Stock:** Approaching minimum levels.
    *   🔴 **Out of Stock:** Item is completely sold out.

### 3. Adding & Editing Products
*   **Adding:** Click **"Add Product"** in the sidebar or the **"+"** button on the product list.
*   **Editing:** Click the **Edit (pencil icon)** next to any product in the list.
*   **Form Fields:**
    *   **Min Stock Level:** This is crucial! Set this number to define when the system should warn you that stock is low.
    *   **Price & Quantity:** Standard values for tracking your assets.

### 4. Deleting Items
*   To remove an item, click the **Delete (trash icon)**.
*   A confirmation dialog will appear to prevent accidental deletions. **Warning:** This action cannot be undone.

---

## 🏗️ Technical Architecture

### Project Structure
```txt
projetoIntegrador/
├── backend/                  # ASP.NET Core Web API
│   ├── Controllers/          # API REST Endpoints
│   ├── Data/                 # SQLite & Entity Framework Logic
│   ├── Models/               # Data Entities
│   └── appsettings.json      # Configuration (Port 5005)
├── frontend/                 # Angular 19 SPA
│   ├── src/app/pages/        # Dashboard, List, Form components
│   └── src/app/services/     # API Integration logic
└── data/                     # Database storage
    └── stock.db              # SQLite Database file
```

---

## 🧪 Troubleshooting

*   **Port Conflict:** If you get an error saying port 5005 or 4200 is in use, ensure you don't have another instance of the app running.
*   **CORS Errors:** Ensure the backend is running on `http://localhost:5005`. The frontend is specifically configured to trust this origin.
*   **Database Locked:** If the backend fails to start because the database is locked, ensure no other SQLite browser or application is accessing `data/stock.db`.

---

## 📜 Coding Standards

*   **Backend:** Follows **Clean Architecture** patterns and **SOLID** principles.
*   **Frontend:** Uses **Standalone Components** (Angular 19) and **Material Design 3**.
*   **Naming:** `camelCase` for variables/properties, `PascalCase` for classes/components.

---
*Created with ❤️ for smarter inventory management.*
