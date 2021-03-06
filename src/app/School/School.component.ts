/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SchoolService } from './School.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-School',
	templateUrl: './School.component.html',
	styleUrls: ['./School.component.css'],
  providers: [SchoolService]
})
export class SchoolComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          schId = new FormControl("", Validators.required);
        
  
      
          schName = new FormControl("", Validators.required);
        
  
      
          address = new FormControl("", Validators.required);
        
  
      
          contactAdress = new FormControl("", Validators.required);
        
  
      
          hompage = new FormControl("", Validators.required);
        
  
      
          requestUser = new FormControl("", Validators.required);
        
  


  constructor(private serviceSchool:SchoolService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          schId:this.schId,
        
    
        
          schName:this.schName,
        
    
        
          address:this.address,
        
    
        
          contactAdress:this.contactAdress,
        
    
        
          hompage:this.hompage,
        
    
        
          requestUser:this.requestUser
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceSchool.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "hansung.ac.kr.participants.School",
      
        
          "schId":this.schId.value,
        
      
        
          "schName":this.schName.value,
        
      
        
          "address":this.address.value,
        
      
        
          "contactAdress":this.contactAdress.value,
        
      
        
          "hompage":this.hompage.value,
        
      
        
          "requestUser":this.requestUser.value
        
      
    };

    this.myForm.setValue({
      
        
          "schId":null,
        
      
        
          "schName":null,
        
      
        
          "address":null,
        
      
        
          "contactAdress":null,
        
      
        
          "hompage":null,
        
      
        
          "requestUser":null
        
      
    });

    return this.serviceSchool.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "schId":null,
        
      
        
          "schName":null,
        
      
        
          "address":null,
        
      
        
          "contactAdress":null,
        
      
        
          "hompage":null,
        
      
        
          "requestUser":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "hansung.ac.kr.participants.School",
      
        
          
        
    
        
          
            "schName":this.schName.value,
          
        
    
        
          
            "address":this.address.value,
          
        
    
        
          
            "contactAdress":this.contactAdress.value,
          
        
    
        
          
            "hompage":this.hompage.value,
          
        
    
        
          
            "requestUser":this.requestUser.value
          
        
    
    };

    return this.serviceSchool.updateParticipant(form.get("schId").value,this.participant)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceSchool.deleteParticipant(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceSchool.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "schId":null,
          
        
          
            "schName":null,
          
        
          
            "address":null,
          
        
          
            "contactAdress":null,
          
        
          
            "hompage":null,
          
        
          
            "requestUser":null 
          
        
      };



      
        if(result.schId){
          
            formObject.schId = result.schId;
          
        }else{
          formObject.schId = null;
        }
      
        if(result.schName){
          
            formObject.schName = result.schName;
          
        }else{
          formObject.schName = null;
        }
      
        if(result.address){
          
            formObject.address = result.address;
          
        }else{
          formObject.address = null;
        }
      
        if(result.contactAdress){
          
            formObject.contactAdress = result.contactAdress;
          
        }else{
          formObject.contactAdress = null;
        }
      
        if(result.hompage){
          
            formObject.hompage = result.hompage;
          
        }else{
          formObject.hompage = null;
        }
      
        if(result.requestUser){
          
            formObject.requestUser = result.requestUser;
          
        }else{
          formObject.requestUser = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "schId":null,
        
      
        
          "schName":null,
        
      
        
          "address":null,
        
      
        
          "contactAdress":null,
        
      
        
          "hompage":null,
        
      
        
          "requestUser":null 
        
      
      });
  }

}
