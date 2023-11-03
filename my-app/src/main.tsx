import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Products from "./features/products/Products"
// import { Browser}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
        <Products />
    </BrowserRouter>
  </Provider>,
)
