function bfaValidForm(){
        const name =document.formList.yourname;
        const myNumber =document.formList.pnumber;
        const myEmail =document.formList.email;
        const myLocation =document.formList.yourlocation;
        const myCurrentSkill =document.formList.cskill;
        const myNewSkill =document.formList.rskill;


        if(name.value == ''){
            name.nextElementSibling.style.display = 'block';
            name.style.border = '1px solid rgb(233,  231, 22)';
            return false
        }else{name.nextElementSibling.style.display = 'none';
        name.style.border = '1px solid rgb(233,  231, 22)';

        };


        if(myNumber.value == ''){
            myNumber.nextElementSibling.style.display = 'block';
            myNumber.style.border = '1px solid rgb(233,  231, 22)';
            return false
        }else{myNumber.nextElementSibling.style.display = 'none';
        myNumber.style.border = '1px solid rgb(233,  231, 22)';

        };



        if(myEmail.value == ''){
            myEmail.nextElementSibling.style.display = 'block';
            myEmail.style.border = '1px solid rgb(233,  231, 22)';
            return false
        }else{myEmail.nextElementSibling.style.display = 'none';
        myEmail.style.border = '1px solid rgb(233,  231, 22)';

        };



        if(myLocation.value == ''){
            myLocation.nextElementSibling.style.display = 'block';
            myLocation.style.border = '1px solid rgb(233,  231, 22)';
            return false
        }else{myLocation.nextElementSibling.style.display = 'none';
        myLocation.style.border = '1px solid rgb(233,  231, 22)';

        };



        if(myCurrentSkill.value == ''){
            myCurrentSkill.nextElementSibling.style.display = 'block';
            myCurrentSkill.style.border = '1px solid rgb(233,  231, 22)';
            return false
        }else{myCurrentSkill.nextElementSibling.style.display = 'none';
        myCurrentSkill.style.border = '1px solid rgb(233,  231, 22)';

        };


        if(myNewSkill.value == ''){
            myNewSkill.nextElementSibling.style.display = 'block';
            myNewSkill.style.border = '1px solid rgb(233,  231, 22)';
            return false
        }else{myNewSkill.nextElementSibling.style.display = 'none';
        myNewSkill.style.border = '1px solid rgb(233,  231, 22)';

        };
};

bfaValidForm()


