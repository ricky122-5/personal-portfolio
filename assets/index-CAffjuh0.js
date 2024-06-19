(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const N=["██▀███   ██▓ ▄████▄   ██ ▄█▀▓██   ██▓  ██████        ██▓███   ▒█████   ██▀███  ▄▄▄█████▓  █████▒▒█████   ██▓     ██▓ ▒█████","▓██ ▒ ██▒▓██▒▒██▀ ▀█   ██▄█▒  ▒██  ██▒▒██    ▒       ▓██░  ██▒▒██▒  ██▒▓██ ▒ ██▒▓  ██▒ ▓▒▓██   ▒▒██▒  ██▒▓██▒    ▓██▒▒██▒  ██▒","▓██ ░▄█ ▒▒██▒▒▓█    ▄ ▓███▄░   ▒██ ██░░ ▓██▄         ▓██░ ██▓▒▒██░  ██▒▓██ ░▄█ ▒▒ ▓██░ ▒░▒████ ░▒██░  ██▒▒██░    ▒██▒▒██░  ██▒","▒██▀▀█▄  ░██░▒▓▓▄ ▄██▒▓██ █▄   ░ ▐██▓░  ▒   ██▒      ▒██▄█▓▒ ▒▒██   ██░▒██▀▀█▄  ░ ▓██▓ ░ ░▓█▒  ░▒██   ██░▒██░    ░██░▒██   ██░","░██▓ ▒██▒░██░▒ ▓███▀ ░▒██▒ █▄  ░ ██▒▓░▒██████▒▒      ▒██▒ ░  ░░ ████▓▒░░██▓ ▒██▒  ▒██▒ ░ ░▒█░   ░ ████▓▒░░██████▒░██░░ ████▓▒░","░ ▒▓ ░▒▓░░▓  ░ ░▒ ▒  ░▒ ▒▒ ▓▒   ██▒▒▒ ▒ ▒▓▒ ▒ ░      ▒▓▒░ ░  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░  ▒ ░░    ▒ ░   ░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ░ ▒░▒░▒░","  ░▒ ░ ▒░ ▒ ░  ░  ▒   ░ ░▒ ▒░ ▓██ ░▒░ ░ ░▒  ░ ░      ░▒ ░       ░ ▒ ▒░   ░▒ ░ ▒░    ░     ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░  ░ ▒ ▒░","  ░░   ░  ▒ ░░        ░ ░░ ░  ▒ ▒ ░░  ░  ░  ░        ░░       ░ ░ ░ ▒    ░░   ░   ░       ░ ░   ░ ░ ░ ▒    ░ ░    ▒ ░░ ░ ░ ▒","   ░      ░  ░ ░      ░  ░    ░ ░           ░                     ░ ░     ░                         ░ ░      ░  ░ ░      ░ ░","             ░                ░ ░"],j="Ricky's Portfolio",G="visitor",D="ricky's",U="050823",W="https://github.com/ricky122-5/personalportfolio",_={email:"reddygari.rithvik@gmail.com",github:"ricky122-5/",linkedin:"rithvik-reddygari/"},Y=`Hey!
I am Rithvik Reddygari, or Ricky, and I'm a CS Major at Georgia Tech with a minor in FinTech.`,J=[["Password Manager","C++ Based GUI Password Manager System with Custom Hashing and Encryption","https://github.com/ricky122-5/advanced-password-manager"],["Wrapped 2.0","A Firebase-backed Android app using Spotify API to track your top music and artists, offering AI insights on your self-expression","https://github.com/rithvikr1255/SpotifyWrapped202-2"],["StockVisAI","React Stock Visualization App with AI Spice","https://github.com/ricky122-5/stockvisai"],["Walker","Computer Vision Navigation for the Visually Impaired + Best AI/ML Hack @ HackTJ 8.0","https://github.com/ricky122-5/walker"],["SnowSource","An app to track and forecast snowmelt sources using machine learning, addressing water supply concerns due to declining snowpacks","https://sites.google.com/view/snowsource/home"],["AI in Health","A comparative study comparing the YOLO and FR-CNN deep learning algorithms on effective chest illness detection + 3rd Place at RSEF","https://sites.google.com/lcps.org/2022-lcps-rsef/systems-software?authuser=0"],["AI in Health v2","A comparative study comparing the YOLO-R and YOLOv5 deep learning algorithms on effective chest illness detection","https://sites.google.com/lcps.org/2023lcpsrsef/systems-software?authuser=0"],["ENSO-SAT","A conceptual satellite that could predict and monitor the weather phenomenon El Niño, part of my NASA internship","https://www.youtube.com/watch?app=desktop&v=t8OX39G72QY"]],K={background:"#000000",foreground:"#F8DDE5",banner:"#FF4500",border:{visible:!0,color:"#FF0000"},prompt:{default:"#FFFFFF",user:"#FFA500",host:"#FF0000",input:"#FFFFFF"},link:{text:"#FFA500",highlightColor:"#FF0000",highlightText:"#000000"},commands:{textColor:"#FFFFFF"}},o={ascii:N,title:j,username:G,hostname:D,password:U,repoLink:W,social:_,aboutGreeting:Y,projects:J,colors:K};(()=>{const e=document.createElement("style"),t=document.head,r=`body {background: ${o.colors.background}}`,s=`body {color: ${o.colors.foreground}}`,n=`input {background: ${o.colors.background}}`,i=`input {color: ${o.colors.prompt.input}}`,h=`.output {color: ${o.colors.prompt.input}}`,g=`#pre-host {color: ${o.colors.prompt.host}}`,a=`#host {color: ${o.colors.prompt.host}}`,L=`#pre-user {color: ${o.colors.prompt.user}}`,S=`#user {color: ${o.colors.prompt.user}}`,O=`#prompt {color: ${o.colors.prompt.default}}`,P=`pre {color: ${o.colors.banner}}`,C=`a {color: ${o.colors.link.text}}`,H=`a:hover {background: ${o.colors.link.highlightColor}}`,x=`a:hover {color: ${o.colors.link.highlightText}}`,B=`.command {color: ${o.colors.commands.textColor}}`,M=`.keys {color: ${o.colors.banner}}`;t.appendChild(e),e.sheet&&(e.sheet.insertRule(`#bars {background: ${o.colors.background}}`),e.sheet.insertRule(`main {border-color: ${o.colors.border.color}}`),e.sheet.insertRule(`#bar-1 {background: ${o.colors.border.color}; color: ${o.colors.background}}`),e.sheet.insertRule(`#bar-2 {background: ${o.colors.border.color}}`),e.sheet.insertRule(`#bar-3 {background: ${o.colors.border.color}}`),e.sheet.insertRule(`#bar-4 {background: ${o.colors.border.color}}`),e.sheet.insertRule(`#bar-5 {background: ${o.colors.border.color}}`),e.sheet.insertRule(r),e.sheet.insertRule(s),e.sheet.insertRule(n),e.sheet.insertRule(i),e.sheet.insertRule(h),e.sheet.insertRule(g),e.sheet.insertRule(a),e.sheet.insertRule(L),e.sheet.insertRule(S),e.sheet.insertRule(O),e.sheet.insertRule(P),e.sheet.insertRule(C),e.sheet.insertRule(H),e.sheet.insertRule(x),e.sheet.insertRule(B),e.sheet.insertRule(M))})();const V={commands:[["'about'","Quick intro to me!"],["'projects'","What I've been working on."],["'whoami'","A slightly longer intro to me and my experience."],["'download'","Download my resume."],["'repo'","View the Github repo for this website."],["'banner'","Display the banner again."],["'clear'","Clear the terminal."]]},z=()=>{const e=[];return e.push("<br>"),V.commands.forEach(t=>{if(Array.isArray(t)&&t.length===2&&typeof t[0]=="string"&&typeof t[1]=="string"){const r="&nbsp;";let s="";s+=r.repeat(2),s+="<span class='command'>",s+=t[0],s+="</span>",s+=r.repeat(17-t[0].length),s+=t[1],e.push(s)}}),e.push("<br>"),e.push("Press <span class='keys'>[Tab]</span> for auto completion."),e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),e.push("<br>"),e},Q=z(),q=()=>{const e=[];return e.push("<br>"),o.ascii.forEach(t=>{let r="";for(let n=0;n<t.length;n++)t[n]===" "?r+="&nbsp;":r+=t[n];let s=`<pre>${r}</pre>`;e.push(s)}),e.push("<br>"),e.push("Welcome to my portfolio!"),e.push("Type <span class='command'>'help'</span> for a list of all available commands."),e.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${o.repoLink}' target='_blank'>here</a>.`),e.push("<br>"),e},F=q(),X=()=>{const e=[],t="&nbsp;",r="Email",s="Github",n="Linkedin",i=`<i class='fa-solid fa-envelope'></i> ${r}`,h=`<i class='fa-brands fa-github'></i> ${s}`,g=`<i class='fa-brands fa-linkedin'></i> ${n}`;let a="";return e.push("<br>"),e.push(o.aboutGreeting),e.push("I'm currently interning at the Georgia Tech Research Institute working on Javelin, a govt. personnel management application."),e.push("I love to work in deep learning, high-performance computing, financial applications, and full-stack dev!"),e.push("<br>"),a+=t.repeat(2),a+=i,a+=t.repeat(17-r.length),a+=`<a target='_blank' href='mailto:${o.social.email}'>${o.social.email}</a>`,e.push(a),a="",a+=t.repeat(2),a+=h,a+=t.repeat(17-s.length),a+=`<a target='_blank' href='https://github.com/${o.social.github}'>github/${o.social.github}</a>`,e.push(a),a="",a+=t.repeat(2),a+=g,a+=t.repeat(17-n.length),a+=`<a target='_blank' href='https://www.linkedin.com/in/${o.social.linkedin}'>linkedin/${o.social.linkedin}</a>`,e.push(a),e.push("<br>"),e},Z=X(),ee=()=>{const e=["<br>","COMMAND NOT FOUND","Type <span class='command'>'help'</span> to get started.","<br>"],t=[];return e.forEach(r=>{t.push(r)}),t},te=ee(),oe=()=>{let e="";const t=[],r=`${o.projects.length} File(s)`,s="&nbsp;";return t.push("<br>"),o.projects.forEach(n=>{let i=`<a href="${n[2]}" target="_blank">${n[0]}</a>`;e+=s.repeat(2),e+=i,e+=s.repeat(17-n[0].length),e+=n[1],t.push(e),e=""}),t.push("<br>"),t.push(r),t.push("<br>"),t},ne=oe(),re={message:[["Hello! I'm Rithvik Reddygari, a passionate and driven computer science student at Georgia Institute of Technology,","where I am pursuing a BS in Computer Science with a Minor in FinTech, maintaining a GPA of 3.84.","My academic journey has been complemented by active involvement in clubs like the GT Fintech Club, GT Trading Club,","and leading social media efforts for the GT Jadoo Bollywood Fusion Dance Team."],["Throughout my career, I've had the opportunity to work on a variety of exciting projects.","As a Full-Stack Cybersecurity Software Engineer Intern at Georgia Tech Research Institute,","I currently spearhead the development of a government personnel management application, using technologies like Angular, JavaScript, Java, React, and OracleSQL.","This experience sharpened my skills in full-stack development and cybersecurity."],["I also worked as a Software Engineering Intern at George Mason University,","where I developed machine learning models for Snow Water Equivalent predictions.","Integrating data from various satellites and deploying advanced ML models for real-time predictions was a challenging yet rewarding experience","that significantly enhanced my data analysis and machine learning skills."],["One of my most memorable projects is the Advanced Password Manager, a user-friendly GUI system developed using C++ and Qt.","By implementing cryptographic techniques such as Fast Positive Hash for master authentication and RSA encryption for account password retrieval,","I ensured robust security for users."],["Another exciting project is StockVisAI, a sophisticated stock visualization app built with React.","By leveraging the Finnhub REST API and integrating AI for trend analysis and predictive insights,","I created a tool that provides users with accurate and up-to-date stock information in a highly interactive and intuitive manner."],["Winning 1st place in the Best AI/ML Hacks at HackTJ 8.0 with my project Walker was a proud moment for me.","This computer vision-driven navigation system for the visually impaired utilized YOLOv3 and the COCO dataset","to provide real-time object identification and spatial localization, offering auditory guidance via Google’s Text-to-Speech API."],["Beyond my technical pursuits, I have a keen interest in dancing, trading, and exploring new places.","These hobbies not only provide a creative outlet but also inspire my work in user experience and accessibility.","I am always looking for ways to make technology more intuitive and inclusive."],["Feel free to connect with me on LinkedIn to learn more about my projects and experiences!","Also, type 'projects' to see more about my projects!","You can reach me at reddygari.rithvik@gmail.com.","I'm always excited to connect with like-minded individuals and explore new opportunities."]]},se=()=>{const e=[];return e.push("<br>"),re.message.forEach(t=>{t.forEach(r=>{e.push(r)}),e.push("<br>")}),e};let d=document.getElementById("write-lines"),u=0,y="",l;const f=d,b=document.getElementById("terminal"),c=document.getElementById("user-input"),k=document.getElementById("pre-host"),v=document.getElementById("pre-user"),w=document.getElementById("host"),I=document.getElementById("user"),R=document.getElementById("prompt"),ae=["help","about","projects","whoami","repo","banner","clear","download"],m=[],ie=o.repoLink,$=()=>{const e=document.getElementById("main");e&&(e.scrollTop=e.scrollHeight)};function E(e){const t=e.key;switch(t){case"Enter":e.preventDefault(),ce(),$();break;case"Escape":c.value="";break;case"ArrowUp":T(t),e.preventDefault();break;case"ArrowDown":T(t);break;case"Tab":le(),e.preventDefault();break}}function ce(){if(!d||!R)return;const e="";let t;if(l=c.value,t=`<span class='output'>${l}</span>`,m.push(l),u=m.length,l==="clear"){A(l.toLowerCase().trim()),c.value=e,l=e;return}const r=document.createElement("div");r.innerHTML=`<span id="prompt">${R.innerHTML}</span> ${t}`,d.parentNode&&d.parentNode.insertBefore(r,d),l.trim().length!==0&&A(l.toLowerCase().trim()),c.value=e,l=e}function le(){let e=c.value;for(const t of ae)if(t.startsWith(e)){c.value=t;return}}function T(e){switch(e){case"ArrowDown":u!==m.length&&(u+=1,c.value=m[u],u===m.length&&(c.value=y));break;case"ArrowUp":u===m.length&&(y=c.value),u!==0&&(u-=1,c.value=m[u]);break}}function A(e){switch(e){case"clear":setTimeout(()=>{!b||!f||(b.innerHTML="",b.appendChild(f),d=f)});break;case"banner":p(F);break;case"help":p(Q);break;case"whoami":p(se());break;case"about":p(Z);break;case"projects":p(ne);break;case"repo":p(["Redirecting to github.com...","<br>"]),setTimeout(()=>{window.open(ie,"_blank")},500);break;case"download":p(["Downloading resume...","<br>"]),pe();break;default:p(te);break}}function p(e){e.forEach((t,r)=>{ue(t,r)})}function ue(e,t){setTimeout(()=>{if(!d)return;const r=document.createElement("p");r.innerHTML=e,d.parentNode.insertBefore(r,d),$()},40*t)}function pe(){const e=document.createElement("a");e.href="src/RithvikReddygariResume.pdf",e.download="RithvikReddygariResume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}const de=()=>{w&&(w.innerText=o.hostname),I&&(I.innerText=o.username),k&&(k.innerText=o.hostname),v&&(v.innerText=o.username),window.addEventListener("load",()=>{p(F)}),c.addEventListener("keypress",E),c.addEventListener("keydown",E),window.addEventListener("click",()=>{c.focus()}),console.log(`%cPassword: ${o.password}`,"color: red; font-size: 20px;")};de();
