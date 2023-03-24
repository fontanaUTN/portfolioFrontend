"use strict"

    const mainTitles = document.querySelector('.main__titles');
    const mainTitle = document.querySelector('.main__title');
    const mainSubtitle = document.querySelector('.main__subtitle');

    let titleActive = false;
    mainTitles.style.width = `${mainTitle.clientWidth}px`;


    const moveTitle = () => {
        
        if (titleActive) {
            mainTitles.style.width = '0';
            
            setTimeout(function(){
                mainTitle.style.display = 'block';
                mainSubtitle.style.display = 'none';
                mainTitles.style.width = `${mainTitle.clientWidth}px`;
            }, 1800)
        }
        else {
            mainTitles.style.width = '0';

            setTimeout(function(){
                mainTitle.style.display = 'none';
                mainSubtitle.style.display = 'block';
                mainTitles.style.width = `${mainSubtitle.clientWidth}px`;
            }, 1800)
        }

        titleActive = !titleActive;
    }

    setInterval(moveTitle, 3600);

    // About
    const aboutContainer = document.querySelector('.about');
    const aboutImg = document.querySelector('.about__imgs');
    const aboutTitle = document.querySelector('.about__title');
    const aboutTextArr = document.querySelectorAll('.about__text');
    const aboutDownload = document.querySelector('.about__download');
    const aboutPortfolio = document.querySelector('.about__portfolio');

    const moveAbout = () => {

        let topAbout = aboutContainer.getBoundingClientRect().top;

        if(topAbout <= window.innerHeight/2){
            
            aboutTitle.style.transform = 'translateY(0)';
            aboutTitle.style.visibility = 'visible';
            setTimeout( function() {
                aboutTextArr.forEach((aboutText) => {
                    setTimeout(()=> {
                        aboutText.style.transform = 'translateY(0)';
                        aboutText.style.visibility = 'visible';
                    }, 300)
                });
                setTimeout(function() {
                    aboutImg.style.visibility = 'visible';
                    setTimeout(function(){
                        aboutDownload.style.transform = 'translateY(0)';
                        aboutDownload.style.visibility = 'visible';
                        setTimeout(function() {
                            aboutPortfolio.style.transform = 'translateY(0)';
                            aboutPortfolio.style.visibility = 'visible';
                        }, 400)
                    }, 900)
                }, 400)
            }, 400)
        }
        else{
            aboutImg.style.visibility = 'hidden';
            aboutTitle.style.transform = 'translateY(50%)';
            aboutTitle.style.visibility = 'hidden';
            aboutTextArr.forEach((aboutText) => {
                aboutText.style.transform = 'translateY(50%)';
                aboutText.style.visibility = 'hidden';
            })
            aboutDownload.style.transform = 'translateY(50%)';
            aboutDownload.style.visibility = 'hidden';
            aboutPortfolio.style.transform = 'translateY(50%)';
            aboutPortfolio.style.visibility = 'hidden';
        }
    }
    // Services
    const servicesContainer = document.querySelector('.services');
    const servicesContent = document.querySelectorAll('.services__content');
    const servicesAbility = document.querySelectorAll('.ability');

    let servicesNumber = 0;
    let servicesInit = true;

    const moveServices = () => {

        let topServices = servicesContainer.getBoundingClientRect().top;

        if(topServices <= window.innerHeight/2){
            
            if (servicesInit) {
                let interval = setInterval(function() {
                    servicesContent[servicesNumber].style.visibility = 'visible';
                    let abilities = servicesContent[servicesNumber].querySelectorAll('.ability');

                    setTimeout(function() {
                        abilities.forEach((ability) => {
                            ability.style.transform = 'scale(1.4)';
                        })
                        setTimeout(function() {
                            abilities.forEach((ability) => {
                                ability.style.transform = 'scale(1)';
                            })
                        }, 300)
                    }, 300)

                    servicesNumber += 1;

                    if (servicesNumber >= servicesContent.length) {
                        clearInterval(interval);
                    }

                }, 800);
                servicesInit = false;
            }
        }
        else{
            servicesContent.forEach((content) => {
                content.style.visibility = 'hidden';
            })
            servicesInit = true;
            servicesNumber = 0;
        }
    }

    // Contact
    const contactContainer = document.querySelector('.contact');
    const contactText = document.querySelectorAll('.contact__text');
    const contactImage = document.querySelectorAll('.contact__img');
    let contactNumberOne = 0;
    let contactNumberTwo = 0;
    let contactNumberThree = 0;

    const moveContact = () => {

        let topContact = contactContainer.getBoundingClientRect().top;

        if(topContact <= window.innerHeight/2){
            writing(contactText[0],'@fedefontanaa__',1);
            setTimeout( function() {
                writing(contactText[1],'+ 54 3482 672468',2);
                setTimeout( function() {
                    writing(contactText[2],'+ 54 3482 672468',3);
                }, 1000)
            }, 1000)
        }
        else{
            contactNumberOne = 0;
            contactNumberTwo = 0;
            contactNumberThree = 0;
            contactText[0].innerHTML = '';
            contactText[1].innerHTML = '';
            contactText[2].innerHTML = '';
        }
    }

    let writing = (place, str, number) => {

        if(number == 1){
            if (contactNumberOne == 0) {
                contactNumberOne += contactNumberOne + 1;

                let arrFromStr = str.split('');
                let i = 0;

                let printStr = setInterval( function() {
                    if(arrFromStr[i] == ' ') {
                        place.innerHTML += arrFromStr[i];
                        place.innerHTML += arrFromStr[i + 1];
                        i += 2;
                    } else {
                        place.innerHTML += arrFromStr[i];
                        i++;
                    }

                    if(i == arrFromStr.length) {
                        clearInterval(printStr);
                    }
                }, 100)
            }
        }
        if(number == 2){
            if (contactNumberTwo == 0) {
                contactNumberTwo += contactNumberTwo + 1;

                let arrFromStr = str.split('');
                let i = 0;

                let printStr = setInterval( function() {
                    if(arrFromStr[i] == ' ') {
                        place.innerHTML += arrFromStr[i];
                        place.innerHTML += arrFromStr[i + 1];
                        i += 2;
                    } else {
                        place.innerHTML += arrFromStr[i];
                        i++;
                    }

                    if(i == arrFromStr.length) {
                        clearInterval(printStr);
                    }
                }, 100)
            }
        }
        if(number == 3){
            if (contactNumberThree == 0) {
                contactNumberThree += contactNumberThree + 1;

                let arrFromStr = str.split('');
                let i = 0;

                let printStr = setInterval( function() {
                    if(arrFromStr[i] == ' ') {
                        place.innerHTML += arrFromStr[i];
                        place.innerHTML += arrFromStr[i + 1];
                        i += 2;
                    } else {
                        place.innerHTML += arrFromStr[i];
                        i++;
                    }

                    if(i == arrFromStr.length) {
                        clearInterval(printStr);
                    }
                }, 100)
            }
        }
    }

    // Message
    const messageContainer = document.querySelector('.message');
    const messageInput = document.querySelectorAll('.message__input');
    const messageInputs = document.querySelector('.message__inputs');
    const messageTextarea = document.querySelector('.message__textarea');
    const messageBtn = document.querySelector('.message__btn');
    const messageLink = document.querySelectorAll('.message__link');

    const moveMessage = () => {

        let topMessage = messageContainer.getBoundingClientRect().top;

        if(topMessage <= window.innerHeight/2){
            messageInput[1].style.transform = 'translateX(0)';
            messageInput[1].style.visibility = 'visible';
            setTimeout(function(){
                messageInput[0].style.transform = 'translateX(0)';
                messageInput[0].style.visibility = 'visible';
                setTimeout(function(){
                    messageInputs.style.transform = 'translateX(0)';
                    messageInputs.style.visibility = 'visible';
                    setTimeout(function(){
                        messageTextarea.style.transform = 'translateX(0)';
                        messageTextarea.style.visibility = 'visible';
                        setTimeout(function(){
                            messageBtn.style.transform = 'translateX(0)';
                            messageBtn.style.visibility = 'visible';
                            setTimeout(function(){
                                messageLink[0].style.visibility = 'visible';
                                setTimeout(function(){
                                    messageLink[1].style.visibility = 'visible';
                                    setTimeout(function(){
                                        messageLink[2].style.visibility = 'visible';
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 400)
                    }, 400)
                }, 400)
            }, 400)
        }
        else{
            messageInput[0].style.transform = 'translateX(-150%)';
            messageInput[1].style.transform = 'translateX(-150%)';
            messageInputs.style.transform = 'translateX(-150%)';
            messageTextarea.style.transform = 'translateX(-150%)';
            messageBtn.style.transform = 'translateX(-400%)';

            messageInput[0].style.visibility1= 'hidden';
            messageInput[1].style.visibility1= 'hidden';
            messageInputs.style.visibility1= 'hidden';
            messageTextarea.style.visibility1= 'idden';
            messageBtn.style.visibility1= 'hidde';
            messageLink[0].style.visibility = 'hidden';
            messageLink[1].style.visibility = 'hidden';
            messageLink[2].style.visibility = 'hidden';
        }
    }
    // All functions
    const allFunctions = () => {
        moveAbout();
        moveContact();
        moveMessage();
    }

    window.addEventListener('scroll', allFunctions);