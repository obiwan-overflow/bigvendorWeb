import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormArray, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { RestApiService } from '../rest-api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-form-register-step2',
  templateUrl: './form-register-step2.component.html',
  styleUrls: ['./form-register-step2.component.scss']
})
export class FormRegisterStep2Component {
  vendorRegister:FormGroup;
  file_20:any;
  file_20_type:any;
  file_company_certificate:any;
  file_company_certificate_type:any;
  file_bookbank:any;
  file_bookbank_type:any;
  file_transfer:any;
  file_transfer_type:any;

  data_file_20:any;
  data_file_company_certificate:any;
  data_file_bookbank:any;
  data_file_transfer:any;
  constructor(public router:Router,private sessionStorageService: SessionStorageService,private api:RestApiService,private http:HttpClient){
    this.vendorRegister = new FormGroup({
      file_20: new FormControl('',Validators.required),
      file_company_certificate: new FormControl('',Validators.required),
      file_bookbank: new FormControl('',Validators.required),
      file_transfer: new FormControl('',Validators.required),
    });
  }
  async onSubmit(){
    let data = this.sessionStorageService.retrieve('userDetail');
    let body = new URLSearchParams();
    body.set('status','1');
    body.set('file_20',this.data_file_20.fileName+'.'+this.data_file_20.fileExtension);
    body.set('file_company_certificate',this.data_file_company_certificate.fileName+'.'+this.data_file_company_certificate.fileExtension);
    body.set('file_bookbank',this.data_file_bookbank.fileName+'.'+this.data_file_bookbank.fileExtension);
    body.set('file_transfer',this.data_file_transfer.fileName+'.'+this.data_file_transfer.fileExtension);
    this.api.putdata('vendorRegisterFile/'+data.id_vendor_register,body).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('form-register-success');
    },err=>{
      console.log(err);
    });
  }
  async insertData(){
    // let data = this.sessionStorageService.retrieve('userDetail');

    // let data_file_20 = this.sessionStorageService.retrieve('file_20');
    // let file_20 = data_file_20.fileName+'.'+data_file_20.fileExtension;
    // let data_file_company_certificate = this.sessionStorageService.retrieve('file_company_certificate');
    // let file_company_certificate = data_file_company_certificate.fileName+'.'+data_file_company_certificate.fileExtension;
    // let data_file_bookbank = this.sessionStorageService.retrieve('file_bookbank');
    // let file_bookbank = data_file_bookbank.fileName+'.'+data_file_bookbank.fileExtension;
    // let data_file_transfer = this.sessionStorageService.retrieve('file_transfer');
    // let file_transfer = data_file_transfer.fileName+'.'+data_file_transfer.fileExtension;

    // let body = new URLSearchParams();
    // body.set('status','1');
    // body.set('file_20',file_20);
    // body.set('file_company_certificate',file_company_certificate);
    // body.set('file_bookbank',file_bookbank);
    // body.set('file_transfer',file_transfer);
    // this.api.putdata('vendorRegisterFile/'+data.id_vendor_register,body).subscribe(res=>{
    //   console.log(res);
    //   this.router.navigateByUrl('form-register-success');
    // },err=>{
    //   console.log(err);
    // });
  }


  fileUploadTravelling:any = [];
  imageSrcTravelling:any = [];

  handleFile1(event: any) {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const base64Image = e.target.result as string;
      const fileType = file.type;
  
      this.file_20 = base64Image;
      this.file_20_type = fileType;
      this.uploadFile1(this.file_20,this.file_20_type);
    };
    reader.readAsDataURL(file);
  }
  handleFile2(event: any) {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const base64Image = e.target.result as string;
      const fileType = file.type;
  
      this.file_company_certificate = base64Image;
      this.file_company_certificate_type = fileType;
      this.uploadFile2(this.file_company_certificate,this.file_company_certificate_type);
    };
    reader.readAsDataURL(file);
  }
  handleFile3(event: any) {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const base64Image = e.target.result as string;
      const fileType = file.type;
  
      this.file_bookbank = base64Image;
      this.file_bookbank_type = fileType;
      this.uploadFile3(this.file_bookbank,this.file_bookbank_type);
    };
    reader.readAsDataURL(file);
  }
  handleFile4(event: any) {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const base64Image = e.target.result as string;
      const fileType = file.type;
  
      this.file_transfer = base64Image;
      this.file_transfer_type = fileType;
      this.uploadFile4(this.file_transfer,this.file_transfer_type);
    };
    reader.readAsDataURL(file);
  }


  async uploadFile1(file:any,type:any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let body = new URLSearchParams();
    body.set('image',file);
    body.set('fileType',type);
    this.http.post('http://localhost:3003/saveImage', body, { headers }).subscribe(response => {
      this.data_file_20 = response;
    },error=>{
      console.error('Error uploading image:', error);
    });
  }
  async uploadFile2(file:any,type:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let body = new URLSearchParams();
    body.set('image',file);
    body.set('fileType',type);
    this.http.post('http://localhost:3003/saveImage', body, { headers }).subscribe(response => {
      this.data_file_company_certificate = response;
    },error=>{
      console.error('Error uploading image:', error);
    });
  }
  async uploadFile3(file:any,type:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let body = new URLSearchParams();
    body.set('image',file);
    body.set('fileType',type);
    this.http.post('http://localhost:3003/saveImage', body, { headers }).subscribe(response => {
      this.data_file_bookbank = response;
    },error=>{
      console.error('Error uploading image:', error);
    });
  }
  async uploadFile4(file:any,type:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let body = new URLSearchParams();
    body.set('image',file);
    body.set('fileType',type);
    this.http.post('http://localhost:3003/saveImage', body, { headers }).subscribe(response => {
      this.data_file_transfer = response;
    },error=>{
      console.error('Error uploading image:', error);
    });
  }



  ngOnDestroy(){
    this.sessionStorageService.clear('file_20');
    this.sessionStorageService.clear('file_company_certificate');
    this.sessionStorageService.clear('file_bookbank');
    this.sessionStorageService.clear('file_transfer');
  }
}
