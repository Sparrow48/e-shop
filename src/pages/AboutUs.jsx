import React from "react";
import HeroImage from "../assets/hero.png";

const AboutUs = () => {
  return (
    <div>
      <div className="grid items-center justify-center gap-20 px-10 py-12 mx-auto sm:py-24 md:py-48 lg:px-0 lg:grid-cols-2 lg:max-w-6xl">
        <img className="rounded " src={HeroImage} alt="Hero_Image" />
        <div>
          <h1 className="pb-5 text-2xl lg:text-3xl">About Us</h1>
          <p className="leading-6">
            Welcome to e-Shop, your premier online destination for furniture shopping! We are a leading e-commerce website that specializes in offering a vast selection of high-quality furniture for your home, office, and outdoor spaces. Our collection features a variety of styles, from classic to contemporary, that are sure to fit any taste or budget. We understand that purchasing furniture can be a daunting task, which is why we strive to make the process as easy and stress-free as possible. Our user-friendly interface allows you to easily browse our selection by category, style, or room, and our detailed product descriptions and images help you make informed decisions. At e-Shop, we are committed to providing exceptional customer service and ensuring that your furniture shopping experience is a positive one. Shop with us today and discover why e-Shop is the go-to destination for stylish and affordable furniture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

/*-------------------------Send data to database-------------------------*/

// import React from "react";

// function AboutUs() {
//   const sendData = () => {
//     fetch("https://test-6d415-default-rtdb.firebaseio.com/products.json", {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Available: 5,
//         brand: "Hatil",
//         category: "Living Room",
//         description:
//           "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         id: "p9",
//         image:
//           "https://ik.imagekit.io/qfij7fu3q7c/FP1_HtQdrH27BI1.png?updatedAt=1641825659496",
//         price: 7000,
//         psn: "PID02001",
//         title: "sofa",
//       }),
//     });
//   };
//   return (
//     <div>
//       <button onClick={sendData}>Send data</button>
//     </div>
//   );
// }

// export default AboutUs;
