export function LockWorkflowIllustration() {
  const stages = [
    { label: "Quote", status: "6.937% · 100.125", active: false },
    { label: "Lock request", status: "Pending desk", active: true },
    { label: "Confirmed", status: "—", active: false },
  ];

  return (
    <div className="rate-dashboard" aria-hidden="true">
      <div className="rate-dashboard__chrome">
        <span>Lock desk workflow</span>
        <span style={{ opacity: 0.6 }}>Illustrative</span>
      </div>
      <div className="rate-dashboard__body">
        <span className="illustrative-tag">Illustrative lock flow</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: stage.active
                  ? "1px solid rgba(20, 104, 249, 0.4)"
                  : "1px solid var(--slate-200)",
                background: stage.active ? "rgba(20, 104, 249, 0.06)" : "var(--slate-50)",
              }}
            >
              <span
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  background: stage.active ? "var(--blue)" : "var(--slate-200)",
                  color: stage.active ? "white" : "var(--slate-600)",
                }}
              >
                {i + 1}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "0.8125rem" }}>{stage.label}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--slate-600)" }}>{stage.status}</div>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            margin: "1rem 0 0",
            fontSize: "0.6875rem",
            color: "var(--slate-400)",
            lineHeight: 1.5,
          }}
        >
          Full audit trail retained for capital markets and secondary — illustrative IDs only.
        </p>
      </div>
    </div>
  );
}