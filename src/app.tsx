import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import { invoke } from "@tauri-apps/api/tauri";
//import { Cog } from 'lucide-preact';



function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="flex -center p-10">
      <div className="">
        <h1>Welcome to Tauri!</h1>
        <div className="flex gap-5">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="h-24 p-6 will-change-auto transition-all duration-700 ease-in hover:drop-shadow-glow" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" className="h-24 p-6 will-change-auto transition-all duration-700 ease-in hover:drop-shadow-glow" alt="Tauri logo" />
          </a>
          <a href="https://preactjs.com" target="_blank">
            <img src={preactLogo} className="h-24 p-6 will-change-auto transition-all duration-700 ease-in hover:drop-shadow-glow" alt="Preact logo" />
          </a>
        </div>

        <p>Click on the Tauri, Vite, and Preact logos to learn more.</p>

        <form
          class="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onInput={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>

        <p>{greetMsg}</p>
        <div>
          <a href="/about">about</a>
        </div>
      </div>
    </main>
  );
}

export default App;
