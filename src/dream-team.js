const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let selected = [];
  let noWhite = [];
  let initials = [];
  let teamName = "";

  if (members instanceof Array) {
    for(let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string") {
          selected.push(members[i]);
        } 
      }
      for(let i = 0; i < selected.length; i++) {
        noWhite.push(selected[i].replace(/\s+/g, ''));
      }
      for (let i = 0; i < noWhite.length; i++) {
        let letter = noWhite[i].slice(0,1);
          initials.push(letter.toUpperCase());
      }
      initials.sort();
      for (let i = 0; i < initials.length; i++) {
          teamName += initials[i];
      }
    }
  console.log(teamName);
  return teamName;
};
