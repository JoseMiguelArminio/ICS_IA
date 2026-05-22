export async function analyzeImageWithGroq(imageUrl) {

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: "llama-3.2-11b-vision-preview",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: "Analiza esta imagen y devuelve SOLO una lista de objetos o elementos visibles separados por comas, sin explicación."
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: imageUrl
                            }
                        }
                    ]
                }
            ],
            temperature: 0.2
        })
    });

    const data = await response.json();

    const content = data.choices?.[0]?.message?.content || "";

    const tags = content
        .split(",")
        .map(tag => tag.trim().toLowerCase())
        .filter(Boolean);

    return tags;
}