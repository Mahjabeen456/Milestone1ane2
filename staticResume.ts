let objectiveBtn = document.getElementById('objectiveBtn');
let EducatioBbtn = document.getElementById('EducatioBbtn');
let SkillsBtn = document.getElementById('SkillsBtn');
let WorkExpBtn = document.getElementById('WorkExpBtn');

let objectiveSec: any = document.getElementById('objectiveSec');
let eduSec: any = document.getElementById('eduSec');
let skillSec: any = document.getElementById('skillSec');
let WorkExpSec: any = document.getElementById('workExpSec');

objectiveBtn?.addEventListener('click', () => {
    if(objectiveSec.style.display == 'block'){
        objectiveSec.style.display = 'none';
    }else{
        objectiveSec.style.display = 'block';
    }
})

EducatioBbtn?.addEventListener('click', () => {
    if(eduSec.style.display == 'block'){
        eduSec.style.display = 'none';
    }else{
        eduSec.style.display = 'block';
    }
})

SkillsBtn?.addEventListener('click', () => {
    if(skillSec.style.display == 'block'){
        skillSec.style.display = 'none';
    }else{
        skillSec.style.display = 'block';
    }
})

WorkExpBtn?.addEventListener('click', () => {
    if(WorkExpSec.style.display == 'block'){
        WorkExpSec.style.display = 'none';
    }else{
        WorkExpSec.style.display = 'block';
    }
});
