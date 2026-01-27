import { useNavigate } from "react-router-dom";

function CloseButton() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {setTimeout(() => navigate("/"), 200);
      }}
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        width: 32,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#aaa",
        fontSize: 14,
        border: "1px solid #444",
        background: "#111",
        userSelect: "none",
      }}
    >
      close
    </div>
  );
}

export default CloseButton;
