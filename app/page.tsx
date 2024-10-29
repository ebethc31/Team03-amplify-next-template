"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import Link from "next/link";
import { Amplify } from "aws-amplify";
//import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css"; 

//Amplify.configure(outputs);
//const client = generateClient<Schema>();

export default function App() {
  const [userInfo, setUsers] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will only run on the client

    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('response from API', data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!isClient) return null; // Ensures SSR doesn't attempt to render before the client is ready

  return (
    <div>
      <Link href="/about">ABOUT PAGE</Link>
      <p>
      <Link href="/admin">ADMIN DASHBOARD</Link>
      </p>
    </div>
  );
}


/*
export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo. LIZ WAS HERE
        <br />
        <a href="/about">
          ABOUT PAGE.
        </a>
      </div>
    </main>
  );
}
*/