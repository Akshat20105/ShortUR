/** @type {import('tailwindcss').Config} */
export default {
    content:["./index.html","./src/**/*.{js,ts,tsx,jsx}"],
    theme:{
        extend:{
            backgroundImage:{
                banner:"url('./src/assets/bg.jpg')"
            }
        }
    },
    plugins:[],
};