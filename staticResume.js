var objectiveBtn = document.getElementById('objectiveBtn');
var EducatioBbtn = document.getElementById('EducatioBbtn');
var SkillsBtn = document.getElementById('SkillsBtn');
var WorkExpBtn = document.getElementById('WorkExpBtn');
var objectiveSec = document.getElementById('objectiveSec');
var eduSec = document.getElementById('eduSec');
var skillSec = document.getElementById('skillSec');
var WorkExpSec = document.getElementById('workExpSec');
objectiveBtn === null || objectiveBtn === void 0 ? void 0 : objectiveBtn.addEventListener('click', function () {
    if (objectiveSec.style.display == 'block') {
        objectiveSec.style.display = 'none';
    }
    else {
        objectiveSec.style.display = 'block';
    }
});
EducatioBbtn === null || EducatioBbtn === void 0 ? void 0 : EducatioBbtn.addEventListener('click', function () {
    if (eduSec.style.display == 'block') {
        eduSec.style.display = 'none';
    }
    else {
        eduSec.style.display = 'block';
    }
});
SkillsBtn === null || SkillsBtn === void 0 ? void 0 : SkillsBtn.addEventListener('click', function () {
    if (skillSec.style.display == 'block') {
        skillSec.style.display = 'none';
    }
    else {
        skillSec.style.display = 'block';
    }
});
WorkExpBtn === null || WorkExpBtn === void 0 ? void 0 : WorkExpBtn.addEventListener('click', function () {
    if (WorkExpSec.style.display == 'block') {
        WorkExpSec.style.display = 'none';
    }
    else {
        WorkExpSec.style.display = 'block';
    }
});
