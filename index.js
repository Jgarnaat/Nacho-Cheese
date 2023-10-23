const inquirer = require('inquirer')
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'input the title of your project',
            name: 'title',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        }, 
        {
            type: 'input',
            message: 'how do you install this app?',
            name: 'install',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },
        {
            type: 'input',
            message: 'what are the instructions for use?',
            name: 'instructions',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },
        {
            type: 'input',
            message: 'are there any credits for this project?',
            name: ' credits',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },
        {
            type: 'input',
            message: 'what is the usage of this app',
            name: 'Usage',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },
        {
            type: 'list',
            message: 'select the license used for this project?',
            name: 'license',
            choices:['The MIT license', 'the GNU license','Apache license','None'] ,

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },
        {
            type: 'input',
            message: 'what is your GITHub username?',
            name: 'Git',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email',

            validate: (val)=>{if(val){return true} else {return 'this must be filled out'}}
        },        
    ]
).then(({
    title,
    install,
    instructions,
    credits,
    license,
    Git,
    email,
    Usage,
})=>{
    const template = 
`# ${title}
    
- [Installation]{#Installation}
- [Usage]{#Usage}
- [Credits]{#Credits}
- [License]{#License}
# Installation
${install}
## Usage
${Usage}
## Instructions
${instructions}
## Credits
${credits}
## License
${license}

# Contact
* GITHub ${Git}
* Email ${email}`;


createNewFile(title,template);  
});


function createNewFile(filename,data){
    fs.writeFile(`./${filename.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err);
    }})
};