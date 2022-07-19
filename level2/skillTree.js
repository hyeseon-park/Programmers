const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
let cnt = 0;

const solution = () => {
  for (var i = 0; i < skill_trees.length; i++) {
    let tmpSkill = skill;
    let tree = skill_trees[i];
    while (tmpSkill.length !== 0 && tree.length !== 0) {
      if (tmpSkill.charAt(0) === tree.charAt(0)) {
        tmpSkill = tmpSkill.substring(1);
        tree = tree.substring(1);
      } else if (tmpSkill.includes(tree.charAt(0)) === false) {
        tree = tree.substring(1);
      } else {
        break;
      }
    }
    if (tmpSkill.length === 0 || tree.length === 0) {
      cnt += 1;
    }
  }
  return cnt;
};

console.log(solution());
