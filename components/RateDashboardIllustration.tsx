const ROWS = [
  { product: "30-Yr Fixed", coupon: "6.500%", rate: "6.812%", price: "99.875", channel: "Retail" },
  { product: "30-Yr Fixed", coupon: "6.625%", rate: "6.937%", price: "100.125", channel: "Retail" },
  { product: "15-Yr Fixed", coupon: "6.125%", rate: "6.375%", price: "100.250", channel: "Wholesale" },
  { product: "5/6 ARM", coupon: "5.875%", rate: "6.625%", price: "99.500", channel: "Broker" },
];

export function RateDashboardIllustration() {
  return (
    <div className="rate-dashboard" aria-hidden="true">
      <div className="rate-dashboard__chrome">
        <div className="rate-dashboard__dots">
          <span />
          <span />
          <span />
        </div>
        <span>Ratesboard · Unified price engine</span>
        <span style={{ opacity: 0.6 }}>Live</span>
      </div>
      <div className="rate-dashboard__body">
        <span className="illustrative-tag">Illustrative pricing view</span>
        <div className="rate-dashboard__meta">
          <span>Sheet v2024.11.26-A</span>
          <span>Effective 11/26/2024 09:00 ET</span>
          <span>All channels</span>
        </div>
        <table className="rate-grid">
          <thead>
            <tr>
              <th>Product</th>
              <th>Coupon</th>
              <th>Par rate</th>
              <th>Price</th>
              <th>Channel</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={`${row.product}-${row.coupon}`}>
                <td>{row.product}</td>
                <td>{row.coupon}</td>
                <td className="rate-highlight">{row.rate}</td>
                <td>{row.price}</td>
                <td>{row.channel}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="rate-dashboard__footer">
          <div className="mini-stat">
            <div className="mini-stat__label">LLPA stack (illustrative)</div>
            <div className="mini-stat__value">−0.250 pts FICO · −0.125 LTV</div>
          </div>
          <div className="mini-stat mini-stat--private">
            <div className="mini-stat__label">Lock desk margin (restricted)</div>
            <div className="mini-stat__value">+42 bps · desk only</div>
          </div>
        </div>
      </div>
    </div>
  );
}