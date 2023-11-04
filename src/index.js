import van from "vanjs-core";
import App from "./App.ts";

// van.add(document.getElementById("root"), App({van}))
van.hydrate(document.getElementById("root"), (dom) => App({ van }));
