class Index {

    constructor() {

        //Elements to see the email
        this.emailButton = $('.email');
        this.text = $('.genericText');
        this.email = $('.theEmail');

        //Elements to see the skills
        this.changeButton = $('.skills');

        //Elemets to see profile
        this.backButton = $('.buttonBack');

        //Containers
        this.profile = $('.profileContainer');
        this.skills = $('.skillsContainer');

        //Events
        this.attachmentEvents();
        
    }

    attachmentEvents() {
        this.emailButton.addEventListener("mouseover",this.showEmail.bind(this));
        this.emailButton.addEventListener("mouseout",this.hiddenEmail.bind(this));
        
        this.changeButton.addEventListener("click",this.change.bind(this));
        this.backButton.addEventListener("click",this.back.bind(this));
    }

    showEmail() {
        this.email.classList.remove('vanish');
        this.text.classList.add('vanish');
    }

    hiddenEmail() {
        this.text.classList.remove('vanish');
        this.email.classList.add('vanish');
    }

    change() {
        this.profile.classList.add('vanish');
        this.skills.classList.remove('vanish');
    }

    back() {
        this.skills.classList.add('vanish');
        this.profile.classList.remove('vanish');
    }

}

const index = new Index();