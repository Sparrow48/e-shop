import React from "react";

function AboutUs() {
  return (
    <div>
      <h1 className="text-center ">hello About</h1>
    </div>
  );
}

export default AboutUs;

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
