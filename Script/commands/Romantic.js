module.exports.config = {
  name: "romantic",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "MR JUWEL",
  description: "Safe romantic videos sender ❤️",
  commandCategory: "fun",
  usages: "romantic",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const { threadID, messageID } = event;

  // 🔥 শুধু সেফ রোমান্টিক/এডিট/কাপল ভিডিও
  const videos = [
    "https://drive.google.com/uc?export=download&id=1nYpQbeYlrkdZk0mR7yVf0r_GCqbC1p48",
    "https://drive.google.com/uc?export=download&id=1T5lTbQ8h4nC4012gqC0VFfzr1Q7FYHrC",
    "https://drive.google.com/uc?export=download&id=1m8g9iQ0pRHRApmq2rFg1jJLhC65ko3cD",
    "https://drive.google.com/uc?export=download&id=1bJz3BMjb4lUvQ2vguGQnN8YHf8XgKfS7",
    "https://drive.google.com/uc?export=download&id=1K2f1mWofgQxuJpCrW4IFUu6pzl0P2cKE",
    "https://drive.google.com/uc?export=download&id=1lC8ZhLZcB3IX8j0NjY7V3w4Y5KBQDe6d"
    "https://drive.google.com/uc?export=download&id=1WR6Oa-7EE4vZl8iYclZEFnETpbOBBtSV",
    "https://drive.google.com/uc?export=download&id=1DCgIte4B79QeUCTyJjucrxoBujXoQnIn",
    "https://drive.google.com/uc?export=download&id=1pOcyU1xpVPnzJPMaRcA5NkN_oGAUU3Z2",
    "https://drive.google.com/uc?export=download&id=1D1GSdTKm1Z4NZkyGuhAMvxDsmKmTc6Ks",
    "https://drive.google.com/uc?export=download&id=1AnFT195JT02fhaJXBw7i1yfendTB-X7b",
    "https://drive.google.com/uc?export=download&id=17f9vAXYEoIb239C_Ptn9jM3R8kR53YaU",
    "https://drive.google.com/uc?export=download&id=1mP9xxTmXIzBbXhagAwSx5jOHJ047hozT",
    "https://drive.google.com/uc?export=download&id=1xSKsn9fZsNlhpsnUcVLXsaF91L3EvXf1",
    "https://drive.google.com/uc?export=download&id=1EIXeS4hpOCohGEPypwDf-Xk4RiDXnU0G",
    "https://drive.google.com/uc?export=download&id=1C0gHLG9wpggxJ0ZBLaLjKYBfkPjn1PBu",
    "https://drive.google.com/uc?export=download&id=13Jat-Kjv9TNdX4POOLPWZpMC-PZ_MlBr",
    "https://drive.google.com/uc?export=download&id=1rqU7qjJ4zGMiNe51sGhRAQAosHN4qMqW",
    "https://drive.google.com/uc?export=download&id=1jKUMfDk6aNffDTGm6Hc5k5uB80r5Ewby",
    "https://drive.google.com/uc?export=download&id=1ajLIJuzE_OWzkqytoWCSFcEvGy3S3ISs",
    "https://drive.google.com/uc?export=download&id=1jAERZHua3wFSVmiS_a3PxqlRaXxCPIsJ",
    "https://drive.google.com/uc?export=download&id=1XQAcvOVb6HUug1hGW-fjxKuEMe_gcOrB",
    "https://drive.google.com/uc?export=download&id=1r5urhhWExwHE5Aud86OQmcajfbEd1xw8",
    "https://drive.google.com/uc?export=download&id=1Tb78cllXQ76de-Nby8SqYX126zMqIuh6",
    "https://drive.google.com/uc?export=download&id=1QI4P5-UeYszwG_a2AFIljUevmyEndAeB",
    "https://drive.google.com/uc?export=download&id=1xwgf4a2UmJW7aPqLMVROIjDi90pOcliH",
    "https://drive.google.com/uc?export=download&id=1iQEuhXfjNZeU6Ztmuun0i6e0UGDL2_UI",
    "https://drive.google.com/uc?export=download&id=13bcsXymHqT_6Dz2O585X0NMUHLbS1TJ0",
    "https://drive.google.com/uc?export=download&id=1V_s7Fcj6Jjtn0GNGgl5x6FGpvmBvZwvw",
    "https://drive.google.com/uc?export=download&id=120NBq7y_gUvECo4RH8lkaNYw5-fZ7IAp",
    "https://drive.google.com/uc?export=download&id=16DB8Cixk9Sh80p68zwIzpCIBCVR-si_M",
    "https://drive.google.com/uc?export=download&id=1PD8ZRKb8oszSE_smKyfJ4oenNHn3Edx-",
    "https://drive.google.com/uc?export=download&id=1S_2tbOi-tVMCNJXQx9eJ4MUMSk2C1LGM",
    "https://drive.google.com/uc?export=download&id=1WtGtVoXY_3ldPSojKVCNTraHuCLUBI4-" 
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const path = __dirname + "/cache/romantic_safe.mp4";

  try {
    api.sendMessage("রোমান্টিক ভাইব লোড হচ্ছে... ❤️✨", threadID, messageID);

    const response = await axios({
      url: randomVideo,
      method: "GET",
      responseType: "stream"
    });

    const writer = fs.createWriteStream(path);
    response.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage({
        body: "এই নে একটি সুন্দর রোমান্টিক মুড ভিডিও ❤️✨\nEnjoy brother 😘",
        attachment: fs.createReadStream(path)
      }, threadID, () => fs.unlinkSync(path), messageID);
    });

    writer.on("error", () => {
      api.sendMessage("ভিডিও পাঠাতে সমস্যা হয়েছে ভাই 😓", threadID, messageID);
    });

  } catch (err) {
    console.error(err);
    api.sendMessage("সিস্টেমে সমস্যা হয়েছে রে ভাই 😭", threadID, messageID);
  }
};
