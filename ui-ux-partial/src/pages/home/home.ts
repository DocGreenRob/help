import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { AlertController, LoadingController, NavController } from "ionic-angular";

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})

export class HomePage {
	simple: any;
	//setflag: boolean = false;
	user: any = {};
	//mailFlag: boolean = false;
	showMailFlag: boolean = false;
	availableUserTypes: any = [];
	userID: any = "";
	userName: any = "";
	ownerProperty = [];
	ownerMailingAddressState = false;
	//show is default
	isDefaultFlag: boolean = false;
	sameAsMailingAddress: boolean = false;
	notifications: any = [];
	interval: any;
	allAvailableUserTypes: any = [];
	userUserTypes: any = [];
	loader: any;
	companyTypes: any = [];
	currentUserType: any = {};
	addUserTypeActive: any = false;

	//mailing address form
	topForm = new FormGroup({
		Name: new FormControl(""),
		Id: new FormControl(""),
		StreetAddress1: new FormControl("", [Validators.required]),
		StreetAddress2: new FormControl(""),
		City: new FormControl("", [Validators.required]),
		State: new FormControl("", [Validators.required]),
		Zip: new FormControl("", [Validators.required]),
		MailingAddressType: new FormControl("0"),
		UserId: new FormControl(this.userID)
	});


	///property form for posting property info
	propertyForm = new FormGroup({
		Id: new FormControl(0),
		Customer: new FormGroup({
			Id: new FormControl("0"),
			Name: new FormControl(""),
			Email: new FormControl("")
		}),
		StreetAddress1: new FormControl("", [Validators.required]),
		StreetAddress2: new FormControl(""),
		City: new FormControl("", [Validators.required]),
		State: new FormControl("", [Validators.required]),
		Zip: new FormControl("", [Validators.required]),
		UserId: new FormControl(""),
		Type: new FormControl({}),
		Profiles: new FormControl([]),
		Name: new FormControl(""),
		IsProxy: new FormControl(false),
		IsDefault: new FormControl(false),
		ProxyPropertyId: new FormControl(0),
		UserTypeId: new FormControl([])
	});

	constructor(
	) {

	}

	updateSameAsMailingAddress() {
	}

	showSetting(availableUserType) {
	}


	// Mailing Address

	// save mail address
	saveMail(_availableUserType) {
		

	}

	// show / hide mail content
	showHideMailContent(selectedAvailableUserType) {
	}

	populateCustomerForm(properties: any[]) {
		
	}

	//show /hide property div
	showHidePropertyContent(selectedPage) {
	}

	//if an option has three options hide/show the third option here
	showHideCustomerContent(selectedPage) {
	}

	showSetUp(selectedUserType) {

	}

	toggleFormSelectionView(selectedAvailableUserType) {
		
	}

	//update default propety
	updateDefaultProperty() {
	}

	// go my page
	goMypage() {
	}

	//reset company info/mailing address form
	getMailingAddress(availableUserType) {

	}

	//on selecct of a property from the dropdown
	onPropertySelect(event, pageType) {
		
	}

	//get property default status
	get IsDefault() {
		return this.propertyForm.get("IsDefault").value;
	}

	getProperties(userType) {
		
	}

	//add a new property into the System
	addNewPropertyUpdate() {
	}

	//navigate to property-customer page
	addNewProperty(availableUserType) {
	}

	//post new or existing property and also customers
	async postProperty(_availableUserType) {
	}

	updateUserTypeLocalStorage(userType) {
	}

	// get all available user types
	getAllUserTypes() {
	}

	async getUserMailingAddressAndProperties() {
	}

	//get user notifications
	getNotififications() {}
	
	}
