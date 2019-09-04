// Object that holds all of the elements
const elements = {
    time: document.getElementById('time'),
    resObj: document.getElementById('objective'),
    resObjLink: document.getElementById('obj-link'),
    resEdu: document.getElementById('education'),
    resEduLink: document.getElementById('edu-link'),
    resExp: document.getElementById('experience'),
    resExpLink: document.getElementById('exp-link'),
    resSkills: document.getElementById('skills'),
    resSkillsLink: document.getElementById('skills-link'),
    resProj: document.getElementById('projects'),
    resProjLink: document.getElementById('proj-link')
};

// Function to show local date and time
const dateAndTime = () => {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    // Adds zero for values less than ten
    day < 10 ? day = `0${date.getDate()}` : day = date.getDate();
    hour < 10 ? hour = `0${date.getHours()}` : hour = date.getHours();
    minute < 10 ? minute = `0${date.getMinutes()}` : minute = date.getMinutes();

    time.innerHTML = `Today is ${days[date.getDay()]}, ${months[date.getMonth()]} ${day}, ${date.getFullYear()}. Time is ${hour}:${minute}`;

    setTimeout(dateAndTime, 1000);
}

// Functions for the resume header links. When user clicks on the header in resume.html, 
// the rest of the content will be inserted, and the <a> tag will be deactivated by the 'disable' class


// Init function
const init = () => {
    dateAndTime();
}
init();