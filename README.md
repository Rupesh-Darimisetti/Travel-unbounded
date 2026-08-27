# ✈️ Travel Unbounded

A modern travel enquiry application built with **Next.js**, **NestJS**, **TypeScript**, and **MongoDB**.

Travel Unbounded allows users to submit their travel requirements through a simple enquiry form. The backend validates the submitted information and stores enquiries in MongoDB.

---

## 🚀 Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- CSS / Tailwind CSS
- Next.js App Router

### Backend

- NestJS 11
- TypeScript
- MongoDB
- Mongoose
- Class Validator
- Class Transformer
- REST API

---

## 📁 Project Structure

```text
Travel-unbounded/
│
├── backend/
│   ├── src/
│   │   ├── common/
│   │   │   └── validators/
│   │   │
│   │   ├── enquiries/
│   │   │   ├── dto/
│   │   │   │   └── create-enquiry.dto.ts
│   │   │   ├── schemas/
│   │   │   │   └── enquiry.schema.ts
│   │   │   ├── enquiries.controller.ts
│   │   │   ├── enquiries.service.ts
│   │   │   └── enquiries.module.ts
│   │   │
│   │   ├── app.module.ts
│   │   └── main.ts
│   │
│   ├── test/
│   ├── .env.example
│   ├── nest-cli.json
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── app/
    │   ├── about/
    │   ├── contact/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── components/
    ├── data/
    ├── lib/
    ├── public/
    ├── package.json
    └── next.config.ts
````

---

# ✨ Features

* Travel enquiry form
* User contact information collection
* Travel date selection
* Number of travellers
* Number of children
* Hotel category selection
* Server-side request validation
* MongoDB persistence
* REST API
* CORS configuration
* Global request validation
* Custom validation error responses
* API health-check endpoint

---

# 🏗️ Architecture

The application follows a simple full-stack architecture:

```text
┌──────────────────────┐
│      Next.js UI      │
│      Port: 3000      │
└──────────┬───────────┘
           │
           │ HTTP / REST
           ▼
┌──────────────────────┐
│      NestJS API      │
│      Port: 4000      │
│                      │
│     Controllers      │
│         ↓            │
│     Services         │
│         ↓            │
│     Mongoose         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       MongoDB        │
└──────────────────────┘
```

---

# ⚙️ Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB or MongoDB Atlas
* Git

Recommended:

```bash 
Node.js 20+
npm 10+
```

---

# 📥 Installation

Clone the repository:

```bash
git clone https://github.com/${{github.repository_owner}}$/Travel-unbounded.git
```

Move into the project:

```bash
cd Travel-unbounded
```

---

# 🔧 Backend Setup

Go to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Configure your environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/travel-unbounded
PORT=4000
FRONTEND_URL=http://localhost:3000
```

The application reads `MONGODB_URI` through NestJS `ConfigModule` and uses it to establish the Mongoose connection. ([GitHub][3])


---

# ▶️ Start Backend

Development mode:

```bash
npm run start:dev
```

The API will run on:

```text
http://localhost:4000
```

The backend configures `/api` as its global API prefix. ([GitHub][2])

---

# 🎨 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The frontend is built with Next.js and uses the App Router. ([GitHub][4])

---

# 🔌 API

## Base URL

```text
http://localhost:4000/api
```

---

## Health Check

### `GET /api/enquiries/health`

Checks whether the API is running.

### Response

```json
{
  "success": true,
  "message": "travel-unbounded-api"
}
```

---

# 📝 Submit Travel Enquiry

### `POST /api/enquiries/enquiry`

Creates a new travel enquiry.

### Request Body

```json
{
  "fullName": "John Doe",
  "contactNumber": "9876543210",
  "countryCode": "+91",
  "email": "john@example.com",
  "dateOfTravel": "2027-01-15",
  "numberOfPeople": 2,
  "hotelCategory": "Deluxe",
  "numberOfChildren": 1
}
```

---

## Request Fields

| Field              | Type   | Required | Description                       |
| ------------------ | ------ | -------: | --------------------------------- |
| `fullName`         | string |      Yes | Traveller's full name             |
| `contactNumber`    | string |      Yes | Contact phone number              |
| `countryCode`      | string |      Yes | International country code        |
| `email`            | string |      Yes | Valid email address               |
| `dateOfTravel`     | string |      Yes | Future travel date                |
| `numberOfPeople`   | number |      Yes | Number of travellers              |
| `hotelCategory`    | string |      Yes | `Standard`, `Deluxe`, or `Luxury` |
| `numberOfChildren` | number |      Yes | Number of children                |

The DTO validates email format, travel date, traveller count, hotel category, children count, phone number, and country code before the request reaches the service layer. ([GitHub][5])

---

## Successful Response

```json
{
  "id": "68xxxxxxxxxxxxxxxxxxxxxx",
  "message": "Enquiry submitted successfully"
}
```

The enquiry is persisted using Mongoose before the response is returned. ([GitHub][6])

---

# 🗄️ Database

MongoDB is used as the application's database.

The enquiry collection stores:

```text
Enquiry
├── fullName
├── contactNumber
├── countryCode
├── email
├── dateOfTravel
├── numberOfPeople
├── hotelCategory
├── numberOfChildren
└── createdAt
```

The supported hotel categories are:

```text
Standard
Deluxe
Luxury
```

MongoDB timestamps are enabled for creation time, while the schema disables Mongoose's version key. ([GitHub][7])

---

# 🛡️ Validation

The backend uses NestJS `ValidationPipe` with:

```text
whitelist: true
forbidNonWhitelisted: true
transform: true
```

Invalid requests return a structured response such as:

```json
{
  "success": false,
  "message": "Please correct the highlighted fields.",
  "errors": {
    "email": "Enter a valid email address"
  }
}
```

This allows the frontend to display field-specific validation errors. ([GitHub][2])

---

# 🌐 CORS

The backend enables CORS for the frontend application.

By default:

```text
http://localhost:3000
```

The frontend URL can be configured through:

```env
FRONTEND_URL=http://localhost:3000
```

The backend currently allows:

```text
GET
POST
OPTIONS
```

([GitHub][2])

---

# 🧪 Testing

## Backend Unit Tests

From the `backend` directory:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

Coverage:

```bash
npm run test:cov
```

End-to-end tests:

```bash
npm run test:e2e
```

---

# 🏭 Production Build

## Backend

```bash
cd backend

npm install
npm run build
npm run start:prod
```

## Frontend

```bash
cd frontend

npm install
npm run build
npm start
```

---

# 🔐 Environment Variables

## Backend

Create:

```text
backend/.env
```

Example:

```env
MONGODB_URI=mongodb://localhost:27017/travel-unbounded
PORT=4000
FRONTEND_URL=http://localhost:3000
```

Never commit `.env` files containing credentials or production secrets.

---

# 🧑‍💻 Development

Run both applications simultaneously.

### Terminal 1 — Backend

```bash
cd backend
npm run start:dev
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 📌 API Summary

| Method | Endpoint                 | Purpose               |
| ------ | ------------------------ | --------------------- |
| `GET`  | `/api/enquiries/health`  | API health check      |
| `POST` | `/api/enquiries/enquiry` | Submit travel enquiry |

---

# 🔄 Request Flow

```text
User
 │
 ▼
Next.js Travel Form
 │
 │ POST /api/enquiries/enquiry
 ▼
NestJS Controller
 │
 ▼
ValidationPipe
 │
 ├── Invalid → 400 Bad Request
 │
 ▼
EnquiriesService
 │
 ▼
Mongoose
 │
 ▼
MongoDB
 │
 ▼
Success Response
```

---

# 📦 Backend Dependencies

The backend uses:

* `@nestjs/common`
* `@nestjs/config`
* `@nestjs/core`
* `@nestjs/mongoose`
* `@nestjs/platform-express`
* `mongoose`
* `class-validator`
* `class-transformer`

The repository's current backend package configuration confirms NestJS 11, Mongoose 8, TypeScript 5.7, and the validation dependencies. ([GitHub][8])

---

# 📦 Frontend

The frontend currently uses:

* Next.js `16.3.2`
* React `19.2.8`
* React DOM `19.2.8`

([GitHub][9])

---

# 🚀 Future Improvements

Potential improvements for future versions:

* Admin dashboard for managing enquiries
* Authentication and authorization
* Enquiry status management
* Email notifications
* WhatsApp notifications
* Travel package management
* Destination management
* Booking management
* Pagination and search
* API documentation with Swagger
* Rate limiting
* Docker support
* Automated CI/CD
* Production monitoring and logging

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "feat: add your feature"
```

4. Push the branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# 📄 License

This project is currently marked as an unlicensed/private application in the backend package configuration.

Check the repository for the latest licensing information before redistributing the project.

---

# 👨‍💻 Author

**Rupesh Darimisetti**

GitHub:

[https://github.com/Rupesh-Darimisetti](https://github.com/Rupesh-Darimisetti)

---


[1]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/tree/main/backend "Travel-unbounded/backend at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[2]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/backend/src/main.ts "Travel-unbounded/backend/src/main.ts at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[3]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/backend/src/app.module.ts "Travel-unbounded/backend/src/app.module.ts at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[4]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/tree/main/frontend "Travel-unbounded/frontend at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[5]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/backend/src/enquiries/dto/create-enquiry.dto.ts "Travel-unbounded/backend/src/enquiries/dto/create-enquiry.dto.ts at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[6]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/backend/src/enquiries/enquiries.service.ts "Travel-unbounded/backend/src/enquiries/enquiries.service.ts at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[7]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/backend/src/enquiries/schemas/enquiry.schema.ts "Travel-unbounded/backend/src/enquiries/schemas/enquiry.schema.ts at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[8]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/backend/package.json "Travel-unbounded/backend/package.json at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
[9]: https://github.com/Rupesh-Darimisetti/Travel-unbounded/blob/main/frontend/package.json "Travel-unbounded/frontend/package.json at main · Rupesh-Darimisetti/Travel-unbounded · GitHub"
