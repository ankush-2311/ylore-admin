import React from "react";

export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
}

export interface CommonTableProps<T> {
  title: string;
  viewAllText?: string;
  columns: TableColumn<T>[];
  rows: T[];
}


export interface DataTableColumn<T> {
  key: keyof T;
  label: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
}

