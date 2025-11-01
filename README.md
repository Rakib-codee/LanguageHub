# 🌍 Language Hub

A modern, interactive language learning platform built with React and Firebase. Language Hub provides users with access to comprehensive language courses, category-based learning paths, and a seamless learning experience.

## ✨ Features

### 🔐 Authentication & User Management
- **Email/Password Authentication**: Secure user registration and login
- **Google Sign-In**: Quick authentication using Google accounts
- **Password Recovery**: Forgot password functionality
- **Protected Routes**: Secure access to course content
- **User Profile Management**: Personalized user profiles

### 📚 Course Features
- **Category-Based Courses**: Explore courses organized by language categories
- **Popular Courses**: Discover trending and highly-rated courses
- **Course Details**: Detailed information about each course
- **Course Booking**: Easy course enrollment system
- **Rating System**: View course ratings and reviews

### 🎨 User Interface
- **Modern & Responsive Design**: Beautiful UI built with TailwindCSS and DaisyUI
- **Smooth Animations**: Powered by Framer Motion and AOS
- **Interactive Sliders**: Course carousels using Swiper.js
- **Toast Notifications**: User-friendly notifications with React Hot Toast
- **Parallax Effects**: Engaging visual effects
- **Scroll Progress**: Visual scroll indicator

### 📊 Additional Features
- **Statistics Section**: Platform statistics and achievements
- **Testimonials**: Student reviews and feedback
- **Blog Section**: Latest updates and learning tips
- **Subscription Plans**: Multiple pricing options
- **Error Boundary**: Graceful error handling
- **Loading States**: Smooth loading experiences

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **Vite 7.1.7** - Fast build tool and dev server
- **React Router DOM 7.9.4** - Client-side routing
- **TailwindCSS 4.1.16** - Utility-first CSS framework
- **DaisyUI 5.3.8** - Component library for TailwindCSS

### Animation & UI Libraries
- **Framer Motion 12.23.24** - Production-ready motion library
- **AOS 2.3.4** - Animate On Scroll library
- **Animate.css 4.1.1** - CSS animation library
- **Swiper 12.0.3** - Modern touch slider
- **React Spring 10.0.3** - Spring-physics based animation

### Icons & Utilities
- **Lucide React 0.547.0** - Beautiful icon library
- **Heroicons 2.2.0** - Hand-crafted SVG icons
- **React Hot Toast 2.6.0** - Elegant toast notifications

### Backend & Services
- **Firebase 12.4.0** - Authentication and backend services
  - Firebase Authentication
  - User management

### Development Tools
- **ESLint 9.36.0** - Code linting
- **TypeScript Types** - Type definitions for React

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Language-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Firebase Configuration**

   The Firebase configuration is already set up in `src/firebase/config.js`. If you need to use your own Firebase project:
   
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Authentication (Email/Password and Google Sign-In)
   - Copy your Firebase config
   - Update `src/firebase/config.js` with your credentials:
   
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will open at `http://localhost:5173`

## 📁 Project Structure

```
Language-hub/
├── public/
│   ├── _redirects          # Netlify redirect configuration
│   ├── category.json       # Category data
│   ├── details.json        # Course details data
│   ├── plans.json          # Subscription plans data
│   ├── stats.json          # Statistics data
│   └── testimonials.json   # Testimonials data
├── src/
│   ├── assets/             # Images and static assets
│   ├── components/         # Reusable React components
│   │   ├── header/         # Navigation and banner components
│   │   ├── Homelayout/     # Home page sections
│   │   ├── CourseCard.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── FloatingActionButton.jsx
│   │   ├── Footer.jsx
│   │   ├── ParallaxBackground.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ScrollProgress.jsx
│   ├── contexts/           # React Context providers
│   │   └── AuthContext.jsx # Authentication context
│   ├── firebase/           # Firebase configuration
│   │   └── config.js
│   ├── layouts/            # Page layouts
│   │   └── Homelayout.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── CategoryDetail.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── Profile.jsx
│   ├── Routers/            # Routing configuration
│   │   └── Route.jsx
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   ├── App.css             # Global app styles
│   └── index.css           # Base styles
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 📜 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🎯 Key Features in Detail

### Authentication Flow
1. Users can sign up with email/password or Google
2. Protected routes ensure only authenticated users access courses
3. Password reset functionality available
4. User profile management

### Course Navigation
1. Browse courses by category on the home page
2. Click on categories to view detailed course listings
3. View course details and enroll in courses
4. Book courses with a simple form

### UI/UX Highlights
- Smooth page transitions and animations
- Responsive design for all screen sizes
- Interactive elements with hover effects
- Loading states for better user feedback
- Toast notifications for user actions

## 🔒 Environment Variables

For production deployment, consider using environment variables for Firebase configuration:

Create a `.env` file:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then update `src/firebase/config.js` to use these variables.

## 🚢 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Ensure `public/_redirects` is included for client-side routing

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite and configure build settings
3. Deploy!

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Rakib**
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- Firebase for authentication services
- All the open-source libraries that made this project possible
- The React and Vite communities for excellent documentation

---

**Note**: This project is for educational purposes. Make sure to configure your own Firebase project for production use.

## 📞 Support

If you have any questions or run into issues, please open an issue on the GitHub repository.

---

Made with ❤️ using React and Vite
