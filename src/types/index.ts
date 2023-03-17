import { ReactNode } from "react";

export type WithChildren = {
  children: ReactNode
}

export type Stack = 'front-end' | 'back-end' | 'full stack'

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

export interface ITech {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
  color: string;
}