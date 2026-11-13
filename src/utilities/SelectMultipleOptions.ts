import {Page,Locator} from "@playwright/test";

export async function selectMultipleDropDownOptions(page:Page, actualOptions:Locator, options:string[]){
    for(let option of options){
        await actualOptions.filter({hasText:`${option}`}).first().click();
    }
}