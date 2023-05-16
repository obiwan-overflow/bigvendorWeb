import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormArray } from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  addInput:any;
  groupUser:any = [];
  groupProduct:any = [];
  groupService:any = [];
  vendorRegister:FormGroup;

  // display
  displayProduct:boolean = false;
  displayService:boolean = false;

  // serivice
  optionService:any = [];
  optionServiceSub:any = [];
  optionServiceLists:any = [];

  get generalGroupUser() {
    return this.vendorRegister.get('generalGroupUser') as FormArray;
  }
  get generalGroupProduct() {
    return this.vendorRegister.get('generalGroupProduct') as FormArray;
  }
  get generalGroupService(){
    return this.vendorRegister.get('generalGroupService') as FormArray;
  }
  addGroupUser() {
    this.generalGroupUser.push(new FormGroup({
        cName: new FormControl(''),
        cTelephone: new FormControl(''),
        cEmail: new FormControl(''),
        cPosition: new FormControl(''),
      })
    );
  }
  addGroupProduct() {
    this.generalGroupProduct.push(new FormGroup({
        ptype: new FormControl(''),
        pDescription: new FormControl(''),
        pBrand: new FormControl(''),
      })
    );
  }
  addGroupService(){
    this.generalGroupService.push(new FormGroup({
      sCat: new FormControl(''),
      sSubcat: new FormControl(''),
      sService: new FormControl(''),
      sDescription: new FormControl(''),
    })
  );
  }
  removeGroupUser(index: number) {
    this.generalGroupUser.removeAt(index);
  }
  removeGroupProduct(index: number) {
    this.generalGroupProduct.removeAt(index);
  }
  removeGroupService(index: number) {
    this.generalGroupService.removeAt(index);
  }


  signIn:boolean;
  constructor(private api:RestApiService,public router:Router,public fb:FormBuilder,private sessionStorageService: SessionStorageService){
    this.signIn = false;
    this.vendorRegister = new FormGroup({
      email: new FormControl(),
      telephone: new FormControl(),
      fax: new FormControl(),
      genaralCompanyName: new FormControl(),
      genaralCompanySince: new FormControl(),
      genaralCompanyAddress: new FormControl(),
      genaralCompanyTelephone: new FormControl(),
      genaralCompanyFax: new FormControl(),
      generalGroupUser: new FormArray([
        new FormGroup({
          cName: new FormControl(''),
          cTelephone: new FormControl(''),
          cEmail: new FormControl(''),
          cPosition: new FormControl(''),
        }),
      ]),
      generalCompanyWebsite: new FormControl(),
      generalCompanyTypeBusiness: new FormControl(),
      generalManufactureProduct: new FormControl(),
      generalGroupProduct: new FormArray([
        new FormGroup({
          ptype: new FormControl(''),
          pDescription: new FormControl(''),
          pBrand: new FormControl(''),
        }),
      ]),
      generalGroupService: new FormArray([
        new FormGroup({
          sCat: new FormControl(''),
          sSubcat: new FormControl(''),
          sService: new FormControl(''),
          sDescription: new FormControl(''),
        }),
      ]),
      genaralFileCatalog: new FormControl(),
      genaralFileProfileCompany: new FormControl(),
      generalEmployeeCount: new FormControl(),
      generalEmployeePosition: new FormControl(),
      generalEmployeeTemporary: new FormControl(),
      generalEmployeeCount2: new FormControl(),
      generalEmployeePosition2: new FormControl(),
      generalEmployeeTemporary2: new FormControl(),
      financialAccept: new FormControl(),
      financialYear: new FormControl(),
      financialRevenue: new FormControl(),
      financialYear2: new FormControl(),
      financialRevenue2: new FormControl(),
      financialBank: new FormControl(),
      financialBankBranch: new FormControl(),
      financialBankAccount: new FormControl(),
      financialBank2: new FormControl(),
      financialBankBranch2: new FormControl(),
      financialBankAccount2: new FormControl(),
      financialCompany: new FormControl(),
      financialCompanyContact: new FormControl(),
      financialCompanyTelephone: new FormControl(),
      financialCompany2: new FormControl(),
      financialCompanyContact2: new FormControl(),
      financialCompanyTelephone2: new FormControl(),
      safetyIso9001: new FormControl(),
      safetyIso14001: new FormControl(),
      safetyGI: new FormControl(),
      safetySafety: new FormControl(),
      safetyRecord: new FormControl(),
      safetyHoliday: new FormControl(),
    });

    // function
    this.vendorRegister.get('generalCompanyTypeBusiness')?.valueChanges.subscribe((value)=>{
      console.log(value);
      if(value === 'Goods'){
        this.displayProduct = true;
        this.displayService = false;
      }else if(value === 'Service'){
        this.displayService = true;
        this.displayProduct = false;
      }else if(value === 'Both'){
        this.displayProduct = true;
        this.displayService = true;
      }
    });
  }
  ngOnInit(){
    this.api.getdata('vendorServiceCat').subscribe((res)=>{
      // console.log(res);
      this.optionService = res;
    },err=>{
      console.log(err);
    });
    
    // let status = this.sessionStorageService.retrieve('signIn');
    // if(status){
    //   this.signIn = true;
    //   this.vendorRegister = new FormGroup({
    //     email: new FormControl('test@gmail.com'),
    //     telephone: new FormControl('0987654321'),
    //     fax: new FormControl('0987654321'),
    //     genaralCompanyName: new FormControl('test'),
    //     genaralCompanySince: new FormControl('2022'),
    //     genaralCompanyAddress: new FormControl('122/11'),
    //     genaralCompanyTelephone: new FormControl('0987654321'),
    //     genaralCompanyFax: new FormControl('0987654321'),
    //     generalGroupUser: new FormArray([
    //       new FormGroup({
    //         cName: new FormControl('test1'),
    //         cTelephone: new FormControl('0987654321'),
    //         cEmail: new FormControl('test1@gmail.com'),
    //         cPosition: new FormControl('test'),
    //       }),
    //     ]),
    //     generalCompanyWebsite: new FormControl('dddd.com'),
    //     generalCompanyTypeBusiness: new FormControl('Service'),
    //     generalManufactureProduct: new FormControl('2'),
    //     generalGroupProduct: new FormArray([
    //       new FormGroup({
    //         ptype: new FormControl('Electrical'),
    //         pDescription: new FormControl('sssss'),
    //         pBrand: new FormControl('ssss'),
    //       }),
    //     ]),
    //     generalEmployeeCount: new FormControl('22'),
    //     generalEmployeePosition: new FormControl('2'),
    //     generalEmployeeTemporary: new FormControl('20'),
    //     generalEmployeeCount2: new FormControl('33'),
    //     generalEmployeePosition2: new FormControl('3'),
    //     generalEmployeeTemporary2: new FormControl('30'),
    //     financialAccept: new FormControl('yes'),
    //     financialYear: new FormControl('2021'),
    //     financialRevenue: new FormControl('2000000'),
    //     financialYear2: new FormControl('2022'),
    //     financialRevenue2: new FormControl('1000000'),
    //     financialBank: new FormControl('sss'),
    //     financialBankBranch: new FormControl('sss'),
    //     financialBankAccount: new FormControl('sss'),
    //     financialBank2: new FormControl('ss'),
    //     financialBankBranch2: new FormControl('ss'),
    //     financialBankAccount2: new FormControl('ss'),
    //     financialCompany: new FormControl('ss'),
    //     financialCompanyContact: new FormControl('ss'),
    //     financialCompanyTelephone: new FormControl('0987654321'),
    //     financialCompany2: new FormControl('asss'),
    //     financialCompanyContact2: new FormControl('kkk'),
    //     financialCompanyTelephone2: new FormControl('0987654321'),
    //     safetyIso9001: new FormControl('no'),
    //     safetyIso14001: new FormControl('no'),
    //     safetyGI: new FormControl('yes'),
    //     safetySafety: new FormControl('yes'),
    //     safetyRecord: new FormControl('200'),
    //     safetyHoliday: new FormControl('2'),
    //   });
    // }
  }

  // service
  async getSubcat(event:any){
    const value = event.target.value;
    this.api.getdata('vendorServiceSubcat/'+value).subscribe((res)=>{
      this.optionServiceSub = res;
    },err=>{
      console.log(err);
    });
  }
  async getServiceLists(event:any){
    const value = event.target.value;
    this.api.getdata('vendorServiceLists/'+value).subscribe((res)=>{
      this.optionServiceLists = res;
    },err=>{
      console.log(err);
    });
  }


  async onSubmit(){
    // console.log(this.vendorRegister.value);
    this.groupUser = this.vendorRegister.value.generalGroupUser;
    this.groupProduct = this.vendorRegister.value.generalGroupProduct;
    this.groupService = this.vendorRegister.value.generalGroupService;

    let body = new URLSearchParams();
    body.set('email', this.vendorRegister.value.email);
    body.set('telephone', this.vendorRegister.value.telephone);
    body.set('fax', this.vendorRegister.value.fax);
    body.set('genaralCompanyName', this.vendorRegister.value.genaralCompanyName);
    body.set('genaralCompanySince', this.vendorRegister.value.genaralCompanySince);
    body.set('genaralCompanyAddress', this.vendorRegister.value.genaralCompanyAddress);
    body.set('genaralCompanyTelephone', this.vendorRegister.value.genaralCompanyTelephone);
    body.set('genaralCompanyFax', this.vendorRegister.value.genaralCompanyFax);
    body.set('generalCompanyWebsite', this.vendorRegister.value.generalCompanyWebsite);
    body.set('generalComapnyTypeBusiness', this.vendorRegister.value.generalCompanyTypeBusiness);
    body.set('generalManufactureProduct', this.vendorRegister.value.generalManufactureProduct);

    body.set('generalEmployeeCount', this.vendorRegister.value.generalEmployeeCount);
    body.set('generalEmployeePosition', this.vendorRegister.value.generalEmployeePosition);
    body.set('generalEmployeeTemporary', this.vendorRegister.value.generalEmployeeTemporary);
    body.set('generalEmployeeCount2', this.vendorRegister.value.generalEmployeeCount2);
    body.set('generalEmployeePosition2', this.vendorRegister.value.generalEmployeePosition2);
    body.set('generalEmployeeTemporary2', this.vendorRegister.value.generalEmployeeTemporary2);
    body.set('financialAccept', this.vendorRegister.value.financialAccept);
    body.set('financialYear', this.vendorRegister.value.financialYear);
    body.set('financialRevenue', this.vendorRegister.value.financialRevenue);
    body.set('financialYear2', this.vendorRegister.value.financialYear2);
    body.set('financialRevenue2', this.vendorRegister.value.financialRevenue2);
    body.set('financialBank', this.vendorRegister.value.financialBank);
    body.set('financialBankBranch', this.vendorRegister.value.financialBankBranch);
    body.set('financialBankAccount', this.vendorRegister.value.financialBankAccount);
    body.set('financialBank2', this.vendorRegister.value.financialBank2);
    body.set('financialBankBranch2', this.vendorRegister.value.financialBankBranch2);
    body.set('financialBankAccount2', this.vendorRegister.value.financialBankAccount2);
    body.set('financialCompany', this.vendorRegister.value.financialCompany);
    body.set('financialCompanyContact', this.vendorRegister.value.financialCompanyContact);
    body.set('financialCompanyTelephone', this.vendorRegister.value.financialCompanyTelephone);
    body.set('financialCompany2', this.vendorRegister.value.financialCompany2);
    body.set('financialCompanyContact2', this.vendorRegister.value.financialCompanyContact2);
    body.set('financialCompanyTelephone2', this.vendorRegister.value.financialCompanyTelephone2);
    body.set('safetyIso9001', this.vendorRegister.value.safetyIso9001);
    body.set('safetyIso14001', this.vendorRegister.value.safetyIso14001);
    body.set('safetyGI', this.vendorRegister.value.safetyGI);
    body.set('safetySafety', this.vendorRegister.value.safetySafety);
    body.set('safetyRecord', this.vendorRegister.value.safetyRecord);
    body.set('safetyHoliday', this.vendorRegister.value.safetyHoliday);

    body.set('genaralFileCatalog', this.vendorRegister.value.genaralFileCatalog);
    body.set('genaralFileProfileCompany', this.vendorRegister.value.genaralFileProfileCompany);

    this.api.postdata('vendorRegister',body).subscribe((res)=>{
      for(const val of this.groupUser){
        body.set('register_id',res.message);
        body.set('person_name',val.cName);
        body.set('person_telephone',val.cTelephone);
        body.set('person_email',val.cEmail);
        body.set('person_position',val.cPosition);
        this.api.postdata('vendorRegisterPerson',body).subscribe(res=>{

        },err=>{
          console.log(err);
        });
      }
      for(const val of this.groupProduct){
        body.set('register_id',res.message);
        body.set('type',val.ptype);
        body.set('description',val.pDescription);
        body.set('brand',val.pBrand);
        this.api.postdata('vendorRegisterProducts',body).subscribe(res=>{

        },err=>{
          console.log(err);
        });
      }
      for(const val of this.groupService){
        body.set('register_id',res.message);
        body.set('cat_id',val.sCat);
        body.set('subcat_id',val.sSubcat);
        body.set('service_id',val.sService);
        body.set('description',val.sDescription);
        body.set('brand',val.pBrand);
        this.api.postdata('vendorRegisterServices',body).subscribe(res=>{

        },err=>{
          console.log(err);
        });
      }
      this.router.navigate(['form-register-success']);
    },(err)=>{
    });
  }
}
