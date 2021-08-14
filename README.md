# Password-Generator
Has the browser generate a secure password in the displayed text box for the user's given input after pressing the generate password button. The generated password has the options to include:
special characters, numerals, lowercase, and uppercase characters at the user's decision.

## Changes Created to Source Code
* Source code was given with only the button query created and the write password function
* Changes added included:
    * Function created that determines the user's inputs, and whether user's inputs were valid enteries.
        * Valid enteries include:
            * A numeral value that determines the length of the generated password.
            * Value of length is at the very least of 8 characters - nothing less than 8 will be accepted by the generator.
            * Value of length is no more than 129 characters - nothing more than 129 will be accepted
            by the generator
        * Function determines what character type the user would like in their password to include.
            * The generator will stop if no character type was selected - user has to pick at least one character type for the generator to create a password.
    * Function created to generate the new password.
        *This function determines what character type(s) the user decided on for their password and adds to an randomized array, where the final generated password will be created.

## Link to the password generator
Want to test out the password generator and get a secure password for all your logins? Follow this link!

        
![This is what the password generated looks like](./assets/password-generator-demo.png)

