import type { ReactNode } from "react";

export type ResourceColumn<T> = {
  id: string;
  label: string;
  render(record: T): ReactNode;
};
export type ResourceTableProps<T> = {
  title: string;
  records: readonly T[];
  columns: readonly ResourceColumn<T>[];
  getKey(record: T): string;
  actions?: (record: T) => ReactNode;
  emptyMessage?: string;
};

export function ResourceHeader({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {action}
    </header>
  );
}

export function ResourceFeedback({
  error,
  loading,
  retry,
}: {
  error?: string;
  loading?: boolean;
  retry?: ReactNode;
}) {
  if (error)
    return (
      <div role="alert" className="grid gap-2">
        <p>{error}</p>
        {retry}
      </div>
    );
  return loading ? <p role="status">Loading…</p> : null;
}

export function ResourceTable<T>({
  title,
  records,
  columns,
  getKey,
  actions,
  emptyMessage = "No records found.",
}: ResourceTableProps<T>) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr>
              {columns.map((column) => (
                <th scope="col" className="border-b px-3 py-3" key={column.id}>
                  {column.label}
                </th>
              ))}
              {actions && (
                <th scope="col" className="border-b px-3 py-3">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={getKey(record)}>
                {columns.map((column) => (
                  <td className="border-b px-3 py-3" key={column.id}>
                    {column.render(record)}
                  </td>
                ))}
                {actions && (
                  <td className="border-b px-3 py-3">{actions(record)}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!records.length && <p role="status">{emptyMessage}</p>}
    </>
  );
}
