# Mileage Calculator App

A full-stack mileage calculator app built with Expo React Native (TypeScript) for the frontend and Node.js (TypeScript) with MongoDB for the backend.

---

## Features

- User Authentication (Login & Registration) with role-based access (admin, user)
- Manage multiple vehicles: add vehicle details like name, type, fuel type
- Log mileage entries by selecting vehicle, entering kilometers run and fuel filled
- Clean UI with Expo-powered React Native frontend using TypeScript
- Secure backend API with JWT-based authentication
- MongoDB for data persistence

---

## Tech Stack

- Frontend: Expo React Native, TypeScript, React Navigation, Axios
- Backend: Node.js, Express, TypeScript, MongoDB, JWT Authentication
- State Management: React Hooks
- Design: Modern, card-style UI with clean inputs and intuitive navigation

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- MongoDB (local or cloud, e.g. MongoDB Atlas)

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/mileage-calculator.git
cd mileage-calculator

2. Setup backend:

```
cd backend
npm install
cp .env.example .env
```

# Update .env variables like MONGO_URI and JWT_SECRET

```npm run dev```


3. Setup frontend:

```
cd ../millage-calculator-expo
npm install
npx expo start
```

---

## Usage

- Open Expo Go on your iOS/Android device or use an emulator/simulator.
- Scan the QR code or launch on your emulator to open the app.
- Register new users and login.
- Add vehicle information.
- Log mileage and fuel details per vehicle.
- Role-based access controls restrict screens based on user type.

---

## Folder Structure

```
mileage-calculator/
  ├─ backend/ # Node.js backend API
  ├─ millage-calculator-expo/ # Expo React Native frontend
  │ ├─ src/
  │ │ ├─ api/
  │ │ ├─ components/
  │ │ ├─ navigation/
  │ │ ├─ screens/
  │ │ └─ App.tsx
  │ ├─ app.json
  │ ├─ package.json
  │ └─ tsconfig.json
```

---

## Environment Variables

Example `.env` file for backend:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

---

## Future Improvements

- Add vehicle selection dropdown with data fetched from backend
- Add better form validation and error handling
- Improve UI with animations and icons
- Implement data visualization for mileage trends

---

## License

MIT License - feel free to use and customize this app for your needs.

---

Built with ❤️ using Expo and Node.js

