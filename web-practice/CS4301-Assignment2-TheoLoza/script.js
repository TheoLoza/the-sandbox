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
elements.resObjLink.addEventListener('click', () => {
    const text = `
        <p>To further sharpen my technical skills and gain experience working in the technical industry with 
        a focus on web development and mobile application development.</p>
    `;
    elements.resObj.insertAdjacentHTML('beforeend', text);
    elements.resObjLink.setAttribute('class', 'disable');
});

elements.resEduLink.addEventListener('click', () => {
    const text = `
        <div class='edu-card'>
            <img src='images/utd.jpeg' alt='utd logo'>
            <p><strong>The University of Texas at Dallas</strong></p>
            <p><em>BS in Computer Science</em></p>
            <p>Expected December 2019</p>
        </div>
        <div class='edu-card'>
            <img src='images/cvc.jpeg' alt='cvc logo'>
            <p><strong>Cedar Valley College (Dual Credit Program)</strong></p>
            <p><em>Associates in Science</em></p>
            <p>Obtained May 2016</p>
        </div>
    `;
    elements.resEdu.insertAdjacentHTML('beforeend', text);
    elements.resEduLink.setAttribute('class', 'disable');
});

elements.resExpLink.addEventListener('click', () => {
    const text = `
        <img src='images/icode.png' alt='icode logo'>
        <p>iCode North Dallas -- Technical Lead and Lab Mentor</p>
        <p>Employed since July 2018</p>
        <p>Tasks and Responsibilities:</p>
        <ul>
            <li>Educate over 100 K-12 students over various conputer science concepts.</li>
            <li>Assess and report on the development of students.</li>
            <li>Plan and prepare lessons and activities for students.</li>
            <li>Organize and manage lab hardware and software for students to use.</li>
            <li>Provide assistance to students during lab hours and class projects.</li>
        </ul>
    `;
    elements.resExp.insertAdjacentHTML('beforeend', text);
    elements.resExpLink.setAttribute('class', 'disable');
});

elements.resSkillsLink.addEventListener('click', () => {
    const text = `
        <ul>
            <li>Comfortable with object-oriented languages like C++ and Java.</li>
            <li>Comfortable with front-end languages like HTML/HTML5, CSS, and Javascript.</li>
            <li>Intermediate experience with MacOS and Linux operating systems.</li>
            <li>Intermediate experience with version control software like Git.</li>
            <li>And more...</li>
        </ul>
    `;
    elements.resSkills.insertAdjacentHTML('beforeend', text);
    elements.resSkillsLink.setAttribute('class', 'disable');
});

elements.resProjLink.addEventListener('click', () => {
    const text = `
        <dl>
            <dt>BoxView (HackUTD 2019 Project):</dt>
            <dd>Developed an Augmented Reality application using Unity and Vuforia that replaces cover art of movies and video games with their corresponding trailers.</dd>
            <dt>Switch Buddy (HackUTD 2018 Project):</dt>
            <dd>Assembled a cheap and wireless “smart light switch” that responds to the Amazon Alexa service in 24 hours.</dd>
            <dt>Arduino Binary Adder:</dt>
            <dd>Designed code using C++ for an Arduino microcomputer, on a weekly basis, that adds three bit binary numbers and displays in three four-digit seven-segment displays.</dd>
            <dt>MIDI songs using Assembly language:</dt>
            <dd>Developed code using Assembly language that uses MIDI system calls to replicate songs. Learned that chords can be programmed sequentially using Assembly language system calls.</dd>
        </dl>
    `;
    elements.resProj.insertAdjacentHTML('beforeend', text);
    elements.resProjLink.setAttribute('class', 'disable');
});

// Init function
const init = () => {
    dateAndTime();
}
init();