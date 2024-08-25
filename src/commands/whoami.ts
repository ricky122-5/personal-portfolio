const whoamiObj = {
  "message" : [
    [
      "Hello! I'm Rithvik Reddygari, a passionate and driven computer science student at Georgia Institute of Technology,",
      "where I am pursuing a BS in Computer Science with a Minor in FinTech, maintaining a GPA of 3.84.",
      "My academic journey has been complemented by active involvement in clubs like Trading @ GT",
      "and leading social media efforts for the GT Jadoo Bollywood Fusion Dance Team."
    ],
    [
      "Throughout my career, I've had the opportunity to work on a variety of exciting projects.",
      "As a Full-Stack Cybersecurity Software Engineer Intern at Georgia Tech Research Institute,",
      "I currently spearhead the development of a government personnel management application, using technologies like Angular, JavaScript, Java, React, and OracleSQL.",
      "This experience sharpened my skills in full-stack development and cybersecurity."
    ],
    [
      "I also worked as a Software Engineering Intern at George Mason University,",
      "where I developed machine learning models for Snow Water Equivalent predictions.",
      "Integrating data from various satellites and deploying advanced ML models for real-time predictions was a challenging yet rewarding experience",
      "that significantly enhanced my data analysis and machine learning skills."
    ],
    [
      "One of my most memorable projects is the Advanced Password Manager, a user-friendly GUI system developed using C++ and Qt.",
      "By implementing cryptographic techniques such as Fast Positive Hash for master authentication and RSA encryption for account password retrieval,",
      "I ensured robust security for users."
    ],
    [
      "Another exciting project is StockVisAI, a sophisticated stock visualization app built with React.",
      "By leveraging the Finnhub REST API and integrating AI for trend analysis and predictive insights,",
      "I created a tool that provides users with accurate and up-to-date stock information in a highly interactive and intuitive manner."
    ],
    [
      "Winning 1st place in the Best AI/ML Hacks at HackTJ 8.0 with my project Walker was a proud moment for me.",
      "This computer vision-driven navigation system for the visually impaired utilized YOLOv3 and the COCO dataset",
      "to provide real-time object identification and spatial localization, offering auditory guidance via Google’s Text-to-Speech API."
    ],
    [
      "Beyond my technical pursuits, I have a keen interest in dancing, trading, and exploring new places.",
      "These hobbies not only provide a creative outlet but also inspire my work in user experience and accessibility.",
      "I am always looking for ways to make technology more intuitive and inclusive."
    ],
    [
      "Feel free to connect with me on LinkedIn to learn more about my projects and experiences!",
      "Also, type 'projects' to see more about my projects!",
      "You can reach me at reddygari.rithvik@gmail.com.",
      "I'm always excited to connect with like-minded individuals and explore new opportunities."
    ],
  ],
}


export const createWhoami = () : string[] => {
  const whoami : string[] = [];
  whoami.push("<br>");

  whoamiObj.message.forEach((messageArray) => {
    messageArray.forEach((ele) => {
      whoami.push(ele);
    });
    whoami.push("<br>");
  });

  return whoami;
}
