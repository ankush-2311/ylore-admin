export type Column<T> = {
  key: keyof T | string;
  label?: string;
  render?: (row: T) => React.ReactNode;
  align?: "left" | "right" | "center";
};

export interface CommonTableProps<T> {
  title: string;
  viewAllText?: string;
  columns: Column<T>[];
  rows: T[];
}