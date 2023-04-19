import { invoke } from "@tauri-apps/api";
import { useState } from "react";
function Add() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <div className="flex row">
      <form className="flex p-8"
      onSubmit={(e) => {
      e.preventDefault();
      greet()
      }}>
      <input maxlength="30" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mx-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(e) => setName(e.currentTarget.value)}
      placeholder="Enter a name..."
      />
      <button type="submit">Greet</button>
      </form>
      </div>
      <p className="text-center mx-auto text-xl font-bold text-gray-900">{greetMsg}</p> 
    </>
  );
}

export default Add;
