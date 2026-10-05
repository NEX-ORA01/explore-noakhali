import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { forest:"#123B2A", "forest-dark":"#08261B", tide:"#176B87", sand:"#E8D8B5", cream:"#F8F4E8", "sand-light":"#F2E9D4" }, fontFamily:{display:["Georgia","serif"],sans:["Arial","sans-serif"]}, boxShadow:{soft:"0 18px 50px rgba(8,38,27,.12)"}}}, plugins:[] };
export default config;
