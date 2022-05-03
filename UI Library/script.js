
import { attach } from "./store.js";

import App from "./Component/App.js"

// attach(component, root)
attach(App, document.getElementById('root'))