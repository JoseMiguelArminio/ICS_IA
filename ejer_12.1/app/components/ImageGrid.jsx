import Image from "next/image";

export default function ImageGrid({ images }) {

    return (

        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "15px"
        }}>

            {images.map((img) => (

                <div key={img._id} style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                    background: "#fff"
                }}>

                    <Image
                        src={img.url}
                        alt={img.filename}
                        width={220}
                        height={220}
                        style={{ borderRadius: "6px" }}
                    />

                    <p style={{ fontWeight: "bold" }}>{img.filename}</p>

                    <div>
                        {img.tags.map((tag, i) => (
                            <span key={i} style={{
                                marginRight: "5px",
                                fontSize: "12px",
                                color: "#555"
                            }}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                </div>

            ))}

        </div>
    );
}