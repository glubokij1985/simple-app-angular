import { FormControl } from '@angular/forms';

export class CustomEmailValidators {
    static restrictedEmails(control: FormControl): {[key: string]: boolean} {
        if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
            return {restrictedEmails: true};
        }

        return null;
    }
}
