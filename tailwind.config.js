// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  safelist: [
    "bg-blue-600/10",
    "bg-yellow-500/10",
    "bg-green-600/10",
    "bg-rose-500/10",
    "bg-fuchsia-600/10",
    "bg-purple-600/10",

    "bg-blue-600",
    "bg-yellow-500",
    "bg-green-600",
    "bg-rose-500",
    "bg-fuchsia-600",
    "bg-purple-600",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
