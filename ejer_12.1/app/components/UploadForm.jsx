"use client";

import { useState } from "react";

export default function UploadForm() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    async function handleSubmit(e) {

        e.preventDefault();

        if (!file) {
            setStatus({ type: "error", text: "Selecciona una imagen" });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {

            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Error al subir imagen");
            }

            setStatus({ type: "success", text: "Imagen subida correctamente" });
            setFile(null);

        } catch (err) {

            setStatus({ type: "error", text: err.message });
        }

        setLoading(false);
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button disabled={loading}>
                {loading ? "Subiendo..." : "Subir imagen"}
            </button>

            {status && (
                <p style={{ color: status.type === "error" ? "red" : "green" }}>
                    {status.text}
                </p>
            )}

        </form>
    );
}