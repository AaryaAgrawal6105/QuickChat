# 💬 Real-Time Chat App

A fully functional real-time chat application built using the **MERN stack**, **Socket.IO**, and **Zustand** for global state management. It supports **JWT-based authentication**, **live messaging**, **online user presence**, and clean UI powered by **TailwindCSS** + **DaisyUI**.

---

## 🚀 Highlights

- 🌟 **Tech Stack**: MERN + Socket.IO + TailwindCSS + Daisy UI  
- 🎯 **Authentication & Authorization** with JWT  
- ⚡ **Real-Time Messaging** using Socket.IO  
- 🟢 **Online/Offline User Status**  
- 🗂️ **Global State Management** with Zustand  
- 💥 **Error Handling** on both client & server  
- 🔒 **Protected Routes**  
- 📲 **Responsive Design**  
- 🧪 **Deployed like a Pro — for FREE!**  
- ⏳ **And much more...**

---

## 🧰 Tech Stack

| Layer        | Technology                  |
|--------------|------------------------------|
| **Frontend** | React, TailwindCSS, DaisyUI, Zustand |
| **Backend**  | Node.js, Express.js          |
| **Database** | MongoDB + Mongoose           |
| **Sockets**  | Socket.IO                    |
| **Auth**     | JWT                          |
| **Deploy**   | Vercel (Frontend) + Fly.io/Render (Backend) |

---

## 📁 Project Structure

```
chat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   │   └── useAuthStore.js
│   │   └── App.jsx
├── .env
├── package.json
└── README.md
```

---

## 🔐 .env Configuration

Create a `.env` file inside the `backend/` directory with:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

---

## 🔧 Setup Instructions

### 📦 Backend

```bash
cd backend
npm install
node server.js
```

### 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

Make sure both frontend and backend are running simultaneously.

---

## 🔗 Core Features

### 🔐 Auth System

- JWT-based registration & login
- Secure password hashing with bcrypt
- Protected routes on both frontend & backend
- Auto logout on token expiration

### 💬 Real-Time Chat

- Socket.IO connection on login
- Broadcast messages in real-time to other users
- Show online/offline status dynamically

### 🧠 State Management (Zustand)

```js
// useAuthStore.js
export const useAuthStore = create((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));
```

Used to persist auth state across components without prop drilling.

---

## 📡 Socket.IO Events

| Event              | Client           | Server            | Description                    |
|-------------------|------------------|-------------------|--------------------------------|
| `connect`         | ✅               | ✅                | Establishes socket connection |
| `message`         | ✅               | ✅                | Sends/receives chat messages  |
| `online-users`    | ✅               | ✅                | Tracks & broadcasts user status |
| `disconnect`      | ✅               | ✅                | Handles user leaving          |

---

## ✨ UI / UX

- Fully responsive chat layout
- Modern components via DaisyUI
- Online users listed separately
- Chat bubbles, time stamps, typing indicators *(optional)*

---

## 🧪 Future Enhancements

- ✅ Group chats
- ✅ Message reactions
- ✅ Typing indicators
- ✅ Notifications
- ✅ Unread badges
- ✅ Dark mode toggle
- ✅ Profile picture & bio editing

---

## 📦 Deployment

### 🖥 Frontend – Vercel

```bash
vercel deploy
```

### ⚙️ Backend – Fly.io or Render

```bash
fly launch
fly deploy
```

Or for Render:
- Create new Web Service
- Set build command: `npm install && node server.js`
- Connect GitHub repo

---

## 🧠 Credits

Built with ❤️ using:
- MERN stack
- Zustand
- Socket.IO
- TailwindCSS + DaisyUI

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first.

```bash
git clone https://github.com/yourname/realtime-chat-app.git
cd realtime-chat-app
```

Happy Coding! 🚀

