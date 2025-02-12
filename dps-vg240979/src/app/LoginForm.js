

// LoginForm.js
import { useState } from "react";
import "./styles.css";

export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        const validUser = "admin";
        const validPass = "12345";

        if (username === validUser && password === validPass) {
            setMessage("Inicio de sesión exitoso ✅");
        } else {
            setMessage("Credenciales incorrectas ❌");
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Ingresar</button>
            <p>{message}</p>
        </div>
    );
}