import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource-variable/roboto"
import { Provider } from 'react-redux'
import store from './store/store' // yoki './store' yoki to‘g‘ri yo‘l

createRoot(document.getElementById('root')).render(
    <Provider store={store}>    
        <App />
    </Provider>
)
