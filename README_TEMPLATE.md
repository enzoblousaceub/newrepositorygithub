# Project Name

An AI-powered stock management platform that helps businesses monitor, organize, and optimize inventory operations intelligently. The application uses artificial intelligence to analyze stock movement, predict shortages, automate inventory insights, and improve decision-making in real time. Its main goal is to reduce operational costs, prevent stock issues, and increase efficiency for companies of all sizes. The target audience includes small businesses, warehouses, e-commerce stores, and enterprises that need smarter inventory control and data-driven stock management.

---

# Tech Stack

- Frontend:Angular 
- Backend: Dotnet 
- Database: SQLite

---

# Architecture

Describe the architecture pattern used in the project.

Examples:
- Clean Architecture
- MVC


Project structure example:

```txt
/src
 /src
  ├── api
  │    ├── controllers
  │    ├── routes
  │    └── middlewares
  │
  ├── application
  │    ├── services
  │    ├── use-cases
  │    └── dtos
  │
  ├── domain
  │    ├── entities
  │    ├── repositories
  │    └── interfaces
  │
  ├── infrastructure
  │    ├── database
  │    ├── prisma
  │    ├── external-services
  │    └── providers
  │
  ├── shared
  │    ├── utils
  │    ├── constants
  │    ├── errors
  │    └── types
  │
  ├── config
  └── tests
```

---

# Coding Standards

## General Rules

- Write clean, readable, and maintainable code
- Follow SOLID principles
- Use meaningful variable and method names
- Avoid duplicated code
- Keep methods small and focused
- Prefer composition over inheritance
- Use dependency injection when possible

---

# Naming Conventions

## Variables

```txt
camelCase
```

## Classes

```txt
PascalCase
```

## Interfaces

```txt
IInterfaceName
```

## Constants

```txt
UPPER_CASE
```

---
---

## When Generating Code

- Follow project folder structure
- Respect naming conventions
- Use existing patterns before creating new ones
- Avoid unnecessary dependencies
- Keep consistency across the codebase

---
