const profile = {
  name: "Abhishikth Thul",
  intro: "Machine Learning Enthusiast | Python & Web Developer | Passionate about building impactful solutions.",
  socials: [
    { name: "GitHub", url: "https://github.com/Abhishikth3330", icon: "fab fa-github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/abhishikth-thul", icon: "fab fa-linkedin" },
    // { name: "Twitter", url: "https://twitter.com/abhithul", icon: "fab fa-twitter" },
    { name: "LeetCode", url: "https://leetcode.com/abhishikththul", icon: "fas fa-code" },
  ]
};

document.getElementById("name").textContent = profile.name;
document.getElementById("intro").textContent = profile.intro;

const socialsContainer = document.getElementById("social-links");

profile.socials.forEach(social => {
  const link = document.createElement("a");
  link.href = social.url;
  link.target = "_blank";
  link.innerHTML = `<i class="${social.icon}"></i> ${social.name}`;
  socialsContainer.appendChild(link);
});
