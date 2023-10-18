import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { error } from 'console';

inquirer
    .prompt([
        {
            "message": "Enter Your College URL",
            "name": "URL"
        }
    ])
    .then((answer) => {
        const url = answer.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("Clg_qr.png"));
    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });
