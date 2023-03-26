/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        135: "40rem",
        "10px": "-10px",
        "16px": "-16px",
      },
      fontFamily: {
        logo: "'Aclonica', sans-serif",
      },
      gridTemplateColumns: {
        cart_title: "300px 1fr 1fr 1fr 1fr",
        cart_title_mobile: "175px 1fr 1fr",
        cart_img: " 100px 150px",
        cart_img_mobile: " 75px 75px",
        checkout_item: "1fr 1fr",
        "order-item": '10px 1fr 100px',
        "order-item-mobile": '10px 150px 75px'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}
