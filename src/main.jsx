import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

class RootErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: 24,
            fontFamily: "system-ui, sans-serif",
            maxWidth: 720,
          }}
        >
          <h1 style={{ color: "#7f1d1d" }}>App error</h1>
          <p style={{ color: "#444" }}>{this.state.error.message}</p>
          <pre
            style={{
              fontSize: 12,
              overflow: "auto",
              background: "#f5f5f5",
              padding: 12,
              borderRadius: 8,
            }}
          >
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

/** GitHub Pages project URL is /<repo>/ — must match `base` in vite.config.js */
const routerBasename =
  import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootErrorBoundary>
      <BrowserRouter basename={routerBasename}>
        <App />
      </BrowserRouter>
    </RootErrorBoundary>
  </StrictMode>,
);
