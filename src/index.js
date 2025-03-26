import { mount } from 'svelte';
import App from "./containers/App.svelte";

const target = document.querySelector("main");

if (!target) {
    throw new Error("No se encontró el elemento <main> en el DOM.");
}

mount(App, {
  target: document.querySelector('main')
});

