export type TextField<T extends string> = {
   label: string;
   type: "password" | "tel" | "text";
   name: T;
   placeholder: string;
}