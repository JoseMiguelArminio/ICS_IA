"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    function handleSearch(e) {

        e.preventDefault();

        setLoading(true);

        const query = text.trim().replace(/\s+/g, ",");

        router.push(`/images?search=${query}`);

        setLoading(false);
    }

    return (

        <form onSubmit={handleSearch}>

            <input
                type="text"
                placeholder="Ej: perro gato coche"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
            </button>

        </form>
    );
}