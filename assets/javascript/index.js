 const iplocation = "https://api.ipgeolocation.io/ipgeo?apiKey=b047f3afe9fa44dca7f0c00a17443003";

   $.getJSON(iplocation, (data) => {

     const ip = data.ip;
     const country = data.country_name ? data.country_name : 'your country';

     $("p#ip").html(`<p class="top-right">${ip} ${country}</p>`);
   })

titleChanger = (text, delay) => {
  if (!text) return;

  delay = delay || 2000;

  let counter = 0;

  setInterval(() => {
    if (counter < text.length) document.title = text[counter++];
    else document.title = text[(counter = 0)];
  }, delay);
};

titleChanger(["yasu", "misopog#0560", "sup bro"], 2000);
