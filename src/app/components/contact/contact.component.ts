import { Component, OnInit } from '@angular/core';
import { Contact} from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Global } from '../../services/global';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:[ ContactService ]
})
export class ContactComponent implements OnInit {

  public title:string;
  public paragraphe:string;
  public contact:Contact;
  public status:string;


  constructor(
    private _contactService: ContactService
  )
   {
  this.title="Formulaire de Contact";
  this.paragraphe="Si vous avez rencontré un problème lors de votre experience avec EasySalle, veuillez nous envoyer un message";

  }

  ngOnInit() {

   //alert(this.textos.nativeElement.textContent);

  }
  onSubmit(form){

    this._contactService.saveContact(this.contact).subscribe(
      response=>{
        console.log(response);
        this.status='succes';
       form.reset();

      },error=>{
        console.log(<any>error);

      }


    )



  }




}
