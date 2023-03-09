module.exports = buildHTML = employeeArray => {

    // top part of HTML page
    let fullPage = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Secular+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section id="employee-grid">`;

    // generate card HTML
    for(let i = 0; i < employeeArray.length; i++) {
        let icon;
        let lineThree;

        switch(employeeArray[i].getRole()) {
            case 'Manager':
                icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
                    </svg>`;
                lineThree = `<strong>Office Number:</strong> ${employeeArray[i].getOfficeNumber()}`;
                break;
            case 'Engineer':
                icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z"/>
                    </svg>`;
                lineThree = `<strong>GitHub:</strong> <a href="https://github.com/${employeeArray[i].getGithub()}" target="_blank">${employeeArray[i].getGithub()}</a>`;
                break;
            case 'Intern':
                icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                    </svg>`;
                lineThree = `<strong>School:</strong> ${employeeArray[i].getSchool()}`;
                break;
            default:
                console.log('Error generating page: invalid role.');
        };

        const card = `
            <div class="card">
                <h2>${employeeArray[i].getName()}</h2>
                <h3>
                    ${icon}
                    ${employeeArray[i].getRole()}
                </h3>
                <ul>
                    <li><strong>Employee ID:</strong> ${employeeArray[i].getId()}</li>
                    <li><strong>Email:</strong> <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></li>
                    <li>${lineThree}</li>
                </ul>
            </div>`

        // add card to full page
        fullPage += card;
    };

    // bottom part of HTML page
    const pageEnd = `
        </section>
    </main>
</body>
</html>`;

    // add bottom part after cards
    fullPage += pageEnd;

    return fullPage;
};