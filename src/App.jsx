import React from "react";
import "./App.css";
function App() {
  const price = 50000;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Your in offline checkout your internet");
    }

    const options = {
      key: "rzp_test_HffvJKjAMe5l80",
      currency: "INR",
      amount: amount * 100,
      name: "RazorPay",
      description: "Pay your bill",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xAA8EAABAwMDAgQEAQcNAAAAAAABAAIDBAURBhIhBzETIkFRYXGBkSMUFVJyobHBFhckMjM1QmKCkpSz0f/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAIDBf/EACERAQEAAgICAQUAAAAAAAAAAAABAhEDIRIxYQQTIkFR/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIvlPMyCJ8sjtrGNLnH2AGSg8z1EVNC6WeRkbGjJc44AVdp9TG53mCitrfwNxMszh3A77R/FVm5S192inqrpUNgbDF4rKTPmwThp2+gye5+i2XTqj3TVdYQMNaImn58n+C+lPpePDgy5Mruzp86/U8mfNjhjNSr2Oyn6rg91rL5q/qZW2uy3aopIQ98Yc2RwZG2JuCSAf0uPmQvrqbSus9M2qS7HVUtRHARvayaRjgCccZJB/YsX2vUt9t1z93TueVKpnSm+19+0jHWXZ/iTsmfF42APEa3GHHHGecH5Kw09/s9TV/kdPc6SWp7eEyZpd9srzuNl06l22SLDprpQVUroqWsp5pGglzI5WuIHxAK+P5/swODdaEH41DP/AFRWyRYNPeLbVTCGmr6WaU5wyOZrnHHwBXqvulBbWB9wq4KZp7GWQNz900bZiLCt92t9zYX26tgqmt/rGGQOx816qrpQUcjYqusp4JHDLWyytaSO3GSgy0WCbzbRXig/Lqf8sPaDxBv7Z7d+yRXi2zeJ4VfSv8Ju6TbM07B7nngK6ptnItdQ3y1XCV0VBcKapkb3ZFK1xH0CzZJo4ozJI4MY0ZLnHAA+Kg+iLWUmoLPWyPjpLnSTPjBL2smaSAO579l9GXm1yQvmZcaR0UeN7xM0hue2TnjKaGeix6StpqyMyUk8c8YOC6J4cM+2QvE9zoKaobT1FZTxTOxtjfK0OOe3GUGWigHKIPM0jYo3SSODWMBc5x7ADuVxzWvV0v30elAC08Or5G/9bT+8/ZdA6kS1kejLlHbqeaeqqI/AjbC0ucN52k8ewJK/PB0tqED+47h/x3LRwYY3vJ5cmVnUW/RwnGm6uvrJHyVNzrv7WQ5dIyNoySf13Ef6V1C0TNsGhp7lKMFkElSc+vHlH7vuqhBYa6norTbG0s+2Cmjje4MIG93mefu79i3/AFXjrm6JbbLRR1FRJUSRwObAwu2xjkk/DygfVa+fPGcOGEvu7rJw428+Wdnqacn6fxawbPU3XSlC2rmx4M88nhnBPmI87hyeCcLYi4aj17fI9MahusdAWSkPg8Hbue3uMDuRgkZOPX2XUuk9kksmi6aKpidFU1Mj6iZj24cC44AI9w0NH0VAu9lu1H1kFypbZVyUhuEMnjRxktDXta15z8MuWb7mOWV69NXjqR9OodVLRy2zp1pndHBsYyY55lc88NcR6f4ne+fmsvUnTKy6c0dUXKnqKr850TGzMqfF2gyAjs3sOe2OfisPqHZL/aeoDdSW2gmrYS+KaN0cZfhwABY4DkdvbsfgvOtrlrfU9jp45tPTUVDJLzBEHSSS4GQ53GWtHHHBJ+RSb/HVP7tsOg9qa+3Xq4yAsNRIKYOb3wG5JH1eFX9ead0dYZBa7NDW198mIYIm1JeInHtuA7u54b6qz1A1BpLptZ7Zp+gqDcaoF1S+KEvdBu8zjjtnJxz2VV0fLfdL1EtYzRdVXXCQn+lVHibgD3wMHk+ru5SW3K5Sl1JpYNNaZ/m409W6su4abmKfw4aVp8se8gBpPq4uxn2H1WJoPRrdeNqdSauqJ6kSyOjhja8tzjvz3DQeA0Y7HurVfaS9666ayie3iguT5RLHRuceQx/YkgckAkfRVHS+pNZ6btAsNNpWomlY5/gySQvGwk9jgYOD8VN5ZS3fa3UvwwLbb26b6zU9usskhiZUti5dkljowXNJ9QMnv7L6a2jqNYdVxa6KTaYHMp2ynkRhg3Pd9MkfMAK29P8ARlxtVbWar1ODNdXte+OEeZzSR5iccbjyAB2C1vR+w3P+VF1vV5oainlLCWmeMt3vleXOIz8ufmr5zu/CePWm1Oh7PoOkrdTxVdbUVtJSSkOnc05kcMbuAPN6d/VUzpVoaPU8FdV3WSZttD2xGKJ5Yah48x3HvtGR9fkrp12uQp9LU9vaSHVtU3cB+izzfvDVWNL3nV2jLLDRQacdX09Y1tVTSsa9wb4gBwdoP7cKY+XhvfdW6mTVXezx6V6rUFBYJJCGT07mBztzmB58zCfUbeefQre6+uVbrLXUGj7dO6Ohjl8ObaeHOA3Pc73DRwB7/TGz6faMvFTqSTVurWbKpzjJDA4DdvIxuIHAAHACrtytupNHdRKq80Fqnr45qiWSMtjc9sjJDktJaDtIzjn2XW5cvmRGb1E0DZtJaYjuVonqo66OZkW582fGDshwx2HGTx7Fe9Kaex0Wv8wi/Gro5alo284iHkA/2E/Va7qE/W2pYqF1bYpoKYB0kNHTtMjmu7bnnHBOeB7ZXYrbbIbVpWC1yFghp6MRSOPDeG+Y/LuVxllZhJb2s9uXdLNUUendC3iprS3ZTVf4MTTzK97BhrficfYE+izel1gq9RXqXW2o275HvP5G144z23NB7NHZv1PxNA0DpSXVF5bbhI82ynd4lTK0+UtHAx/mcOAfbJX6YpqeKlgjgp42xxRtDWMYMBoHYAJy2Y26/ZhLdbfQDCKUWd6iIiDzhSApRBGFKIghFKKaEIpRUQmFKIIARSiDlnU/R181bqSgFNDH+a4IxHI8zAOG53nIH6oGF0+KNsUbI2ANaxoaAPQBe8KV1ctyRNRGEUouVQc4VF6n27Ut6tzbTp6miNPPzVzSTBm4Z4YPgfX7eqvajCsui9q9ojS8GlrDDQRESTn8SomxzJIe5+Q7D4BWJES3d3Uk0IiKKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//Z",

      //receiving response as a object
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "RazorPay",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="card-container">
      <h1 className="head">iPhone 15</h1>
      <img
        alt="iphone"
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRI6MVILX2yUzULBuy7DvmaDA4CIcbofCakw&usqp=CAU"
      />
      <span className="price">Price: {price}</span>
      <button onClick={() => displayRazorPay(price)}>BUY NOW</button>
    </div>
  );
}

export default App;
