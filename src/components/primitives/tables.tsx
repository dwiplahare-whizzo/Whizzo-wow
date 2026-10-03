/* ---------- Comparison / data table ---------- */
export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="wz-tablewrap">
      <table className="wz-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((cell, i) =>
                i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i} data-label={columns[i]}>{cell}</td>,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


/* ---------- Titled tick list columns ---------- */
export function ListColumns({ columns }: { columns: { title: string; items: string[] }[] }) {
  return (
    <div className="wz-listcols">
      {columns.map((c) => (
        <div key={c.title} className="wz-listcol">
          <h3>{c.title}</h3>
          <ul>
            {c.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
