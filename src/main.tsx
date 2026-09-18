import {createRoot, hydrateRoot} from "react-dom/client";
import {App} from "./app.tsx";
import "./index.css";

const container = document.getElementById("root")!;

if (container.hasChildNodes()) {
    hydrateRoot(container, <App />);
} else {
    createRoot(container).render(<App />);
}
