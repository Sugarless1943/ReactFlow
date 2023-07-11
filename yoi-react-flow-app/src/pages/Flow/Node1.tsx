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
        7
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20.5, background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ bottom: 63.5, top: "auto", background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ bottom: 13.5, top: "auto", background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </>
  );
});
