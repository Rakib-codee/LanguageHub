import { RouterProvider } from 'react-router'
import { AuthProvider } from './contexts/AuthContext'
import { Toaster } from 'react-hot-toast'
import router from './Routers/Route.jsx'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />
    </AuthProvider>
  )
}

export default App
