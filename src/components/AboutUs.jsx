import React from "react";
import HeroImage from "../assets/hero.png";

function AboutUs() {
  return (
    <div>
      <div className="grid items-center justify-center max-h-screen gap-20 px-10 py-12 mx-auto sm:py-24 md:py-48 lg:px-0 lg:grid-cols-2 lg:max-w-6xl">
        <img className="rounded " src={HeroImage} alt="Hero_Image" />
        <div>
          <h1 className="pb-5 text-2xl lg:text-3xl">About Us</h1>
          <p className="leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            quibusdam? Earum delectus fugit illum recusandae velit eveniet harum
            ipsam praesentium. Esse ipsam perferendis porro repudiandae mollitia
            amet, dolorum accusantium, fugit vitae nam possimus quibusdam
            suscipit commodi eum vel? Laboriosam excepturi, in dolorum hic
            explicabo praesentium eum atque libero optio eligendi.
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
