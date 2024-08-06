function skillsMember() {
  var member = document.getElementById("member");
  if (member) {
    var memberSkill = member.getAttribute("data-skill");
    console.log(memberSkill);
  }
}