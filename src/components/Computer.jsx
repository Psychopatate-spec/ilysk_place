import React, { useState, useRef, useEffect } from "react";
import CloseButton from "./CloseButton";
import "./../App.css";

function Computer() {
  // Create 99 files with random starting positions
  const [files, setFiles] = useState(
    Array.from({ length: 99 }, (_, i) => {
      const extensions = ["txt", "jpg", "html", "doc"];
      const randomExtension = extensions[Math.floor(Math.random() * extensions.length)];
      return {
        id: i,
        x: Math.random() * 400,
        y: Math.random() * 250,
        extension: randomExtension,
      };
    })
  );

  const draggingFile = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const onMouseDown = (e, id) => {
    draggingFile.current = id;

    const rect = e.target.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (draggingFile.current === null || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      setFiles((prev) =>
        prev.map((file) =>
          file.id === draggingFile.current
            ? {
                ...file,
                x: e.clientX - containerRect.left - offset.current.x,
                y: e.clientY - containerRect.top - offset.current.y,
              }
            : file
        )
      );
    };

    const onMouseUp = () => {
      draggingFile.current = null;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="Computer"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 400,
        background: "#0a0a0a",
        border: "2px solid #333",
        overflow: "hidden",
      }}
    >
      <CloseButton />
      <p style={{ color: "#555", fontSize: 12, padding: 8 }}>
        01101010 01110101 01110011 01110100 00100000 01100001 01101110 00100000
        01101111 01101100 01100100 00100000 01100011 01101111 01101101 01110000
        01110101 01110100 01100101 01110010 00101110
      </p>

      {files.map((file) => (
        <div
          key={file.id}
          onMouseDown={(e) => onMouseDown(e, file.id)}
          style={{
            position: "absolute",
            left: file.x,
            top: file.y,
            width: 40,
            height: 40,
            background: "#1e1e1e",
            border: "1px solid #444",
            color: "#888",
            fontSize: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "grab",
            userSelect: "none",
          }}
        >
          {`file_${file.id}.${file.extension}`}
        </div>
      ))}
    </div>
  );
}

export default Computer;
