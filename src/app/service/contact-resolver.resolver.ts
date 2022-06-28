import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { lastValueFrom, Observable, of } from 'rxjs';
import { Contact } from '../model/contact'
import { ContactService } from './contact.service'

@Injectable({
  providedIn: 'root'
})
export class ContactResolverResolver implements Resolve<Promise<Contact>> {
  constructor(private contactService:ContactService){}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const {contactId}=route.params
    const contact= await lastValueFrom(this.contactService.getContactById(contactId))
    return contact;
  }
}
