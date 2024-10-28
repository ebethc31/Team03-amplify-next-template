"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from 'aws-amplify';
import { defineAuth } from "@aws-amplify/backend"
import awsConfig from '../src/aws-exports.js';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsConfig);

const client = generateClient<Schema>();

export default function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => {
        Auth.federatedSignIn();
      });
  }, []);

  useEffect(() => {
    if (user) {
      listTodos();
    }
  }, [user]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  const signOut = () => {
    Auth.signOut()
      .then(() => setUser(null))
      .catch(err => console.log(err));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
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
