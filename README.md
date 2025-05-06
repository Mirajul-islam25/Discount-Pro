# Discount PRO : A Coupon Collecting Application 

![Discount PRO]()

EarthQuest is an eco-adventure blog website designed to showcase eco-friendly travel experiences like mountain treks, ocean dives, and wildlife safaris. It provides users with detailed adventure insights, authentication, and expert consultation features.

## 🔗 Live Website
[Visit Discount PRO]()
## 🚀 Features
- 🌿 **Explore Adventures**: View eco-friendly travel experiences with essential details.
- 📜 **Adventure Details**: See a dedicated page for each adventure with in-depth information.
- 🔐 **Authentication**: Firebase authentication (Google Login, Email & Password Login, Registration).
- 🛠 **User Profile**: Users can update their profile information.
- 📅 **Expert Consultation**: Users can consult an expert via Google Meet based on time availability.
- 🌎 **Dynamic Content**: Adventures are displayed using JSON data.
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile.
- 🎭 **Dark/Light Mode**: Toggle between themes.

## 🏗️ Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Daisy UI
- **State Management:** Context API
- **Authentication:** Firebase Authentication
- **Animations:** Animate.css / AOS
- **Backend:** *(Server-side repo required)*

## 🔑 Environment Variables
To run this project locally, create a `.env.local` file in the root directory and add the following:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## ⚡ Getting Started
### 1️⃣ Clone the Repository
```sh
git clone 
cd Discount Pro
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be running at **http://localhost:5173/**.

## 📂 Project Structure
```
Eco-Adventure/
│── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Pages (Home, Login, Register, Profile, etc.)
│   ├── hooks/          # Custom hooks
│   ├── context/        # Context API setup
│   ├── assets/         # Images and static files
│   ├── firebase/       # Firebase config
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│── public/             # Static files
│── .env.local          # Environment variables
│── package.json        # Dependencies and scripts
│── README.md           # Project documentation
```

## 🎯 Deployment
EarthQuest can be deployed on **Netlify, Firebase Hosting, or Vercel**.
To deploy with Netlify:
```sh
netlify deploy --prod
```
Or with Firebase Hosting:
```sh
firebase deploy
```

## 🔥 Challenges & Future Enhancements
- [ ] **User Profile Update**: Allow users to edit their profile name and photo.
- [ ] **Search Functionality**: Implement search based on adventure titles.
- [ ] **Dynamic Page Titles**: Set page titles dynamically using `useLocation`.
- [ ] **Forgot Password Feature**: Implement password reset functionality.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
📧 Need help? Contact **[]()** or create an issue on GitHub.

Happy Coding! 🌍🚀


