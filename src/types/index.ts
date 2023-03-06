import { ReactNode } from "react"

export type WithChildren = {
  children: ReactNode
}

export interface ISocialMedia {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface IMenuItem {
  id: string,
  name: string,
  icon: string,
  link: string
}