import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'currencyPipe',
    standalone: true,
})

export class CurrencyPipe implements PipeTransform {
    transform(value: number) {
        return new Intl.NumberFormat(
            'vi-Vn',
            { style: 'currency', currency: 'VND' }
        ).format(value);
    }
}


