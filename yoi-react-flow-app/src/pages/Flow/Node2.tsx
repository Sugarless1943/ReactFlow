import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(() => {
  return (
    <>
      <div
        style={{
          width: 50,
          height: 140,
          border: "1px solid #666",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        10
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 20, background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 64, top: "auto", background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ bottom: 14, top: "auto", background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />
    </>
  );
});
