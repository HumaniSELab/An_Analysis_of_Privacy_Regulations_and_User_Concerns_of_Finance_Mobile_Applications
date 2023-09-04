import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) { }

  form!: FormGroup;

  // All FormControl names for questions that are obligatory
  noForms = ['persInfCol', 'digInfCol', 'behavInfCol', 'sensInfCol', 'markInfUsag', 'infColSharing', 'userDeletion', 'accCloseData'];
  valueNeeded = ['userAccess', 'userCorrect', 'dataStorage']
  dataStored = ['dataStorage_account', 'dataStorage_usage', 'dataStorage_location', 'dataStorage_device', 'dataStorage_transaction', 'dataStorage_other']

  // All FormControls for follow up Checkbox questions
  data = ['dataCol_whileUsing', 'dataCol_whileBackground', 'dataCol_whileInstalled', 'dataCol_other']
  contact = ['contactCol_name', 'contactCol_address', 'contactCol_email', 'contactCol_number', 'contactCol_birthdate', 'contactCol_other']
  gov = ['govRelIdsCol_taxfilenumber', 'govRelIdsCol_taxresidence', 'govRelIdsCol_passport', 'govRelIdsCol_driverlicence', 'govRelIdsCol_idcard', 'govRelIdsCol_birthcertificate', 'govRelIdsCol_other']
  perscirc = ['persCircCol_lifeevents', 'persCircCol_disasters', 'persCircCol_financialchange', 'persCircCol_injuriesandaddictions', 'persCircCol_other']
  finance = ['finInfCol_employment', 'finInfCol_income', 'finInfCol_credithistory', 'finInfCol_isuranceclaims', 'finInfCol_other']
  credit = ['credInfCol_identification', 'credInfCol_repayment', 'credInfCol_public', 'credInfCol_other']
  transaction = ['transInfCol_transfers', 'transInfCol_withdrawals', 'transInfCol_other']
  digitalKind = ['digInfCol_location', 'digInfCol_ipaddress', 'digInfCol_deviceused', 'digInfCol_network', 'digInfCol_other']
  digitalReason = ['digInfCol_reason_fraudprev', 'digInfCol_reason_business', 'digInfCol_reason_personalization', 'digInfCol_reason_other']
  behaviorKind = ['behavInfCol_patterns', 'behavInfCol_usagetimes', 'behavInfCol_other']
  behaviorReason = ['behavInfCol_reason_personalization', 'behavInfCol_reason_advertising', 'behavInfCol_reason_service', 'behavInfCol_reason_business', 'behavInfCol_reason_fraudprev', 'behavInfCol_reason_other']
  sensitive = ['sensInfCol_health', 'sensInfCol_biometric', 'sensInfCol_race', 'sensInfCol_other']
  marketing = ['markInfUsag_behavior', 'markInfUsag_digital', 'markInfUsag_personal', 'markInfUsag_other']
  sharing = ['infColSharing_auththirdparties', 'infColSharing_verifthirdparties', 'infColSharing_servicepartners', 'infColSharing_government', 'infColSharing_banks', 'infColSharing_other']
  overseas = ['infColSharingOverseas_companymembers', 'infColSharingOverseas_serviceproviders', 'infColSharingOverseas_transactions', 'infColSharingOverseas_law', 'infColSharingOverseas_other']
  accountclose = ['accCloseData_alldata', 'accCloseData_anonym', 'accCloseData_userspecific', 'accCloseData_other']


  ngOnInit() {
    // Controls for the questions and checkboxes
    this.form = new FormGroup({
      persInfCol: new FormControl(),
      dirOrThird: new FormControl(),
      dataCol_whileUsing: new FormControl(false),
      dataCol_whileBackground: new FormControl(false),
      dataCol_whileInstalled: new FormControl(false),
      dataCol_other: new FormControl(false),
      contactCol: new FormControl(),
      contactCol_name: new FormControl(false),
      contactCol_address: new FormControl(false),
      contactCol_email: new FormControl(false),
      contactCol_number: new FormControl(false),
      contactCol_birthdate: new FormControl(false),
      contactCol_other: new FormControl(false),
      govRelIdsCol: new FormControl(),
      govRelIdsCol_taxfilenumber: new FormControl(false),
      govRelIdsCol_taxresidence: new FormControl(false),
      govRelIdsCol_passport: new FormControl(false),
      govRelIdsCol_driverlicence: new FormControl(false),
      govRelIdsCol_idcard: new FormControl(false),
      govRelIdsCol_birthcertificate: new FormControl(false),
      govRelIdsCol_other: new FormControl(false),
      persCircCol: new FormControl(),
      persCircCol_lifeevents: new FormControl(false),
      persCircCol_disasters: new FormControl(false),
      persCircCol_financialchange: new FormControl(false),
      persCircCol_injuriesandaddictions: new FormControl(false),
      persCircCol_other: new FormControl(false),
      finInfCol: new FormControl(),
      finInfCol_employment: new FormControl(false),
      finInfCol_income: new FormControl(false),
      finInfCol_credithistory: new FormControl(false),
      finInfCol_isuranceclaims: new FormControl(false),
      finInfCol_other: new FormControl(false),
      credInfCol: new FormControl(),
      credInfCol_identification: new FormControl(false),
      credInfCol_repayment: new FormControl(false),
      credInfCol_public: new FormControl(false),
      credInfCol_other: new FormControl(false),
      transInfCol: new FormControl(),
      transInfCol_transfers: new FormControl(false),
      transInfCol_withdrawals: new FormControl(false),
      transInfCol_other: new FormControl(false),
      digInfCol: new FormControl(),
      digInfCol_location: new FormControl(false),
      digInfCol_ipaddress: new FormControl(false),
      digInfCol_deviceused: new FormControl(false),
      digInfCol_network: new FormControl(false),
      digInfCol_other: new FormControl(false),
      digInfCol_reason_fraudprev: new FormControl(false),
      digInfCol_reason_business: new FormControl(false),
      digInfCol_reason_personalization: new FormControl(false),
      digInfCol_reason_other: new FormControl(false),
      digInfColLink: new FormControl(),
      behavInfCol: new FormControl(),
      behavInfCol_patterns: new FormControl(false),
      behavInfCol_usagetimes: new FormControl(false),
      behavInfCol_other: new FormControl(false),
      behavInfCol_reason_personalization: new FormControl(false),
      behavInfCol_reason_advertising: new FormControl(false),
      behavInfCol_reason_service: new FormControl(false),
      behavInfCol_reason_business: new FormControl(false),
      behavInfCol_reason_fraudprev: new FormControl(false),
      behavInfCol_reason_other: new FormControl(false),
      behavInfColLink: new FormControl(),
      sensInfCol: new FormControl(),
      sensInfCol_health: new FormControl(false),
      sensInfCol_biometric: new FormControl(false),
      sensInfCol_race: new FormControl(false),
      sensInfCol_other: new FormControl(false),
      markInfUsag: new FormControl(),
      markInfUsag_behavior: new FormControl(false),
      markInfUsag_digital: new FormControl(false),
      markInfUsag_personal: new FormControl(false),
      markInfUsag_other: new FormControl(false),
      infColSharing: new FormControl(),
      infColSharing_auththirdparties: new FormControl(false),
      infColSharing_verifthirdparties: new FormControl(false),
      infColSharing_servicepartners: new FormControl(false),
      infColSharing_government: new FormControl(false),
      infColSharing_banks: new FormControl(false),
      infColSharing_other: new FormControl(false),
      infColSharingOverseas: new FormControl(),
      infColSharingOverseas_companymembers: new FormControl(false),
      infColSharingOverseas_serviceproviders: new FormControl(false),
      infColSharingOverseas_transactions: new FormControl(false),
      infColSharingOverseas_law: new FormControl(false),
      infColSharingOverseas_other: new FormControl(false),
      shareFinanPart: new FormControl(),
      encryption: new FormControl(),
      encryptionSpecific: new FormControl(),
      userAccess: new FormControl(),
      userCorrect: new FormControl(),
      userDeletion: new FormControl(),
      userDeletionThirdParties: new FormControl(),
      accCloseData: new FormControl(),
      accCloseData_alldata: new FormControl(false),
      accCloseData_anonym: new FormControl(false),
      accCloseData_userspecific: new FormControl(false),
      accCloseData_other: new FormControl(false),
      dataStorage: new FormControl(),
      dataStorage_account: new FormControl(false),
      dataStorage_usage: new FormControl(false),
      dataStorage_location: new FormControl(false),
      dataStorage_device: new FormControl(false),
      dataStorage_transaction: new FormControl(false),
      dataStorage_other: new FormControl(false)
    });

    // Trigger change detection when form values change
    this.form.valueChanges.subscribe(() => {
      this.cdRef.detectChanges();
    });
  }

  // Function which checks if the questionnaire has been filled in completely
  everythingClicked(): boolean {
    if (!this.noForms.every((value) => this.form.get(value)?.value === 'no')) {
      if (!this.form.get('persInfCol')?.value) return false;
      if (this.form.get('persInfCol')?.value === 'yes') {
        // Follow up questions if the app collects personal information
        // Does it collect the data directly from the person or also from third parties?
        if (!this.form.get('dirOrThird')?.value || (this.form.get('dirOrThird')?.value === 'thirdparties' && (document.getElementById('thiParDataColTextarea') as HTMLTextAreaElement)?.value === '')) {
          return false;
        }
        //When does it collect personal data?
        if (this.data.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('dataCol_other')?.value === true && (document.getElementById('dataCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
        // Does your app collect personal and contact details?
        if (!this.form.get('contactCol')?.value) return false;
        if (this.form.get('contactCol')?.value === 'yes') {
          // What kind of personal and contact details does it collect?
          if (this.contact.every((value) => this.form.get(value)?.value === false)) {
            return false;
          } else if (this.form.get('contactCol_other')?.value === true && (document.getElementById('contactCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
            return false;
          }
        }
        // Does your app collect details about government related identifiers?
        if (!this.form.get('govRelIdsCol')?.value) return false;
        if (this.form.get('govRelIdsCol')?.value === 'yes') {
          // What kind of details about government related identifiers does it collect?
          if (this.gov.every((value) => this.form.get(value)?.value === false)) {
            return false;
          } else if (this.form.get('govRelIdsCol_other')?.value === true && (document.getElementById('govRelIdsCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
            return false;
          }
        }
        // Does this app collect information about personal circumstances?
        if (!this.form.get('persCircCol')?.value) return false;
        if (this.form.get('persCircCol')?.value === 'yes') {
          // What kind of information about personal circumstances does it collect?
          if (this.perscirc.every((value) => this.form.get(value)?.value === false)) {
            return false;
          } else if (this.form.get('persCircCol_other')?.value === true && (document.getElementById('persCircCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
            return false;
          }
        }
        // Does this app collect financial information?
        if (!this.form.get('finInfCol')?.value) return false;
        if (this.form.get('finInfCol')?.value === 'yes') {
          // What kind of financial information does it collect?
          if (this.finance.every((value) => this.form.get(value)?.value === false)) {
            return false;
          } else if (this.form.get('finInfCol_other')?.value === true && (document.getElementById('finInfCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
            return false;
          }
          // Does this app collect credit information?
          if (!this.form.get('credInfCol')?.value) return false;
          if (this.form.get('credInfCol')?.value === 'yes') {
            // What kind of credit information does it collect?
            if (this.credit.every((value) => this.form.get(value)?.value === false)) {
              return false;
            } else if (this.form.get('credInfCol_other')?.value === true && (document.getElementById('credInfCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
              return false;
            }
          }
          // Does this app collect transaction information?
          if (!this.form.get('transInfCol')?.value) return false;
          if (this.form.get('transInfCol')?.value === 'yes') {
            // What kind of transaction information does it collect?
            if (this.transaction.every((value) => this.form.get(value)?.value === false)) {
              return false;
            } else if (this.form.get('transInfCol_other')?.value === true && (document.getElementById('transInfCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
              return false;
            }
          }
        }
      }
      if (!this.form.get('digInfCol')?.value) return false;
      if (this.form.get('digInfCol')?.value === 'yes') {
        // Follow up questions if the app collects digital information
        // What kind of digital information does it collect?
        if (this.digitalKind.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('digInfCol_other')?.value === true && (document.getElementById('digInfCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
        // For what reason does it collect the digital information?
        if (this.digitalReason.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('digInfCol_reason_other')?.value === true && (document.getElementById('digInfCol_reason_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
        // Does the digital information collected become linked to the user?
        if (!this.form.get('digInfColLink')?.value) {
          return false;
        }
      }
      if (!this.form.get('behavInfCol')?.value) return false;
      if (this.form.get('behavInfCol')?.value === 'yes') {
        // Follow up questions if the app collects behavioral information
        // What kind of behavioral information does it collect?
        if (this.behaviorKind.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('behavInfCol_other')?.value === true && (document.getElementById('behavInfCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
        // For what reason does it collect the behavioral information?
        if (this.behaviorReason.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('behavInfCol_reason_other')?.value === true && (document.getElementById('behavInfCol_reason_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
        // Does the behavioral information collected become linked to the user?
        if (!this.form.get('behavInfColLink')?.value) {
          return false;
        }
      }
      if (!this.form.get('sensInfCol')?.value) return false;
      if (this.form.get('sensInfCol')?.value === 'yes') {
        // Follow up questions if the app collects sensitive information
        // What kind of sensitive information does it collect?
        if (this.sensitive.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('sensInfCol_other')?.value === true && (document.getElementById('sensInfCol_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
      }
      if (!this.form.get('markInfUsag')?.value) return false;
      if (this.form.get('markInfUsag')?.value === 'yes') {
        // Follow up questions if the app collects marketing information
        // Which information do you use for marketing purposes?
        if (this.marketing.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('markInfUsag_other')?.value === true && (document.getElementById('markInfUsag_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
      }
      if (!this.form.get('infColSharing')?.value) return false;
      if (this.form.get('infColSharing')?.value === 'yes') {
        // Follow up questions if the app shares information
        // With whom do you share it?
        if (this.sharing.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('infColSharing_other')?.value === true && (document.getElementById('infColSharing_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
        // Do you also share the data overseas?
        if (!this.form.get('infColSharingOverseas')?.value) return false;
        if (this.form.get('infColSharingOverseas')?.value === 'yes') {
          // Why or with whom do you share it overseas?
          if (this.overseas.every((value) => this.form.get(value)?.value === false)) {
            return false;
          } else if (this.form.get('infColSharingOverseas_other')?.value === true && (document.getElementById('infColSharingOverseas_other_Textarea') as HTMLTextAreaElement)?.value === '') {
            return false;
          }
        }
        // Are all parties with whom data is shared part of the financial sector or indispensable for the performance of financial services?
        if (!this.form.get('shareFinanPart')?.value) {
          return false;
        }
      }
      if (!this.form.get('userDeletion')?.value) return false;
      if (this.form.get('userDeletion')?.value === 'yes') {
        // Follow up questions if the app allows users to request data deletion
        // Will this deletion request also delete all shared information with third parties?
        if (!this.form.get('userDeletionThirdParties')?.value) {
          return false;
        }
      }
      if (!this.form.get('accCloseData')?.value) return false;
      if (this.form.get('accCloseData')?.value === 'yes') {
        // Follow up questions if the app retains data if a user closes his account
        // Which data will be retained if the user account is closed?
        if (this.accountclose.every((value) => this.form.get(value)?.value === false)) {
          return false;
        } else if (this.form.get('accCloseData_other')?.value === true && (document.getElementById('accCloseData_other_Textarea') as HTMLTextAreaElement)?.value === '') {
          return false;
        }
      }
    }
    if (!this.form.get('encryption')?.value) return false;
    if (this.form.get('encryption')?.value === 'no') {
      // Follow up questions if the app doesn't encrypt all data stored and sent
      // What is not encrypted?
      if (!this.form.get('encryptionSpecific')?.value) {
        return false;
      }
    }
    if (!this.valueNeeded.every((value) => this.form.get(value)?.value)) return false;
    if (this.dataStored.every((value) => this.form.get(value)?.value === false)) {
      return false;
    } else if (this.form.get('dataStorage_other')?.value === true && (document.getElementById('dataStorage_other_Textarea') as HTMLTextAreaElement)?.value === '') {
      return false;
    }

    return true;
  }

  // Function which changes the tooltip message for the submit button, depending on whether the questionnaire has been filled in completely or not
  getTooltipMessage(): string {
    if (this.everythingClicked()) {
      return 'Submit questionnaire and export results as an HTML file';
    } else {
      return 'You have not completed the entire questionnaire yet';
    }
  }

  // Function which exports the data of the questionnaire to an HTML file 
  exportData() {
    if (this.everythingClicked()) {

      // Mapping which assigns specific output texts to each FormControl and its values
      const controlOutputMap: { [key: string]: { [key: string]: string } | string } = {
        persInfCol: {
          yes: 'This app collects your personal information:',
          no: 'This app does not collect your personal information.',
        },
        dirOrThird: {
          directly: 'It collects the information directly from you.',
          thirdparties: 'It collects the information directly from you and from the following third-parties:',
        },
        dataCol_whileUsing: 'While using the app',
        dataCol_whileBackground: 'When the app is running in the background',
        dataCol_whileInstalled: 'When the app is installed',
        contactCol: {
          yes: 'This app collects your personal and contact details:',
          no: 'This app does not collect your personal and contact details.',
        },
        contactCol_name: 'Name',
        contactCol_address: 'Address',
        contactCol_email: 'Email-Address',
        contactCol_number: 'Phone Number',
        contactCol_birthdate: 'Date of Birth',
        govRelIdsCol: {
          yes: 'This app collects details about your government related identifiers:',
          no: 'This app does not collect details about your government related identifiers.',
        },
        govRelIdsCol_taxfilenumber: 'Tax File Number',
        govRelIdsCol_taxresidence: 'Country of Tax Residency',
        govRelIdsCol_passport: 'Passport',
        govRelIdsCol_driverlicence: 'Drivers Licence',
        govRelIdsCol_idcard: 'ID Card',
        govRelIdsCol_birthcertificate: 'Birth Certificate',
        persCircCol: {
          yes: 'This app collects information about your personal circumstances:',
          no: 'This app does not collect information about your personal circumstances.',
        },
        persCircCol_lifeevents: 'Significant life events (e.g. death in the family)',
        persCircCol_disasters: 'Emergency events or natural disasters (e.g. house destroyed by an earthquake)',
        persCircCol_financialchange: 'Changes in the financial situation (e.g. job loss or bankruptcy)',
        persCircCol_injuriesandaddictions: 'Details of injury, illness, gambling or addiction',
        finInfCol: {
          yes: 'This app collects your finanical information:',
          no: 'This app does not collect your finanical information.',
        },
        finInfCol_employment: 'Employment details',
        finInfCol_income: 'Income',
        finInfCol_credithistory: 'Credit History',
        finInfCol_isuranceclaims: 'Insurance Claim History',
        credInfCol: {
          yes: 'This app collects your credit information:',
          no: 'This app does not collect your credit information.',
        },
        credInfCol_identification: 'Identification information (e.g. name, gender, employers)',
        credInfCol_repayment: 'Repayment history',
        credInfCol_public: 'Public information (e.g. debt agreements, personal insolvency)',
        transInfCol: {
          yes: 'This app collects your transaction information:',
          no: 'This app does not collect your transaction information.',
        },
        transInfCol_transfers: 'Transfers',
        transInfCol_withdrawals: 'Money Withdrawals',
        digInfCol: {
          yes: 'This app collects your digital information:',
          no: 'This app does not collect your digital information.',
        },
        digInfCol_location: 'Location',
        digInfCol_ipaddress: 'IP Address',
        digInfCol_deviceused: 'Device used to access the app',
        digInfCol_network: 'Network details',
        digInfCol_reason_fraudprev: 'Fraud Prevention',
        digInfCol_reason_business: 'Business Purposes',
        digInfCol_reason_personalization: 'Personalization',
        digInfColLink: {
          yes: 'The collected digital data is linked to you.',
          no: 'The collected digital data is not linked to you.',
        },
        behavInfCol: {
          yes: 'This app collects your behaviorial information:',
          no: 'This app does not collect your behavioral information.',
        },
        behavInfCol_patterns: 'Spending patterns',
        behavInfCol_usagetimes: 'Usage Times',
        behavInfCol_reason_personalization: 'Personalization',
        behavInfCol_reason_advertising: 'Targeted Advertising',
        behavInfCol_reason_service: 'Service Improvement',
        behavInfCol_reason_business: 'Business Purposes',
        behavInfCol_reason_fraudprev: 'Fraud Prevention',
        behavInfColLink: {
          yes: 'The collected behavioral data is linked to you.',
          no: 'The collected behavioral data is not linked to you.',
        },
        sensInfCol: {
          yes: 'This app collects your sensitive information:',
          no: 'This app does not collect your sensitive information.',
        },
        sensInfCol_health: 'Health Information (e.g. if a user is in financial difficulty and asks for hardship relief due to illness)',
        sensInfCol_biometric: 'Biometric Information (e.g. face or fingerprint)',
        sensInfCol_race: 'Race or ethnicity (e.g. for improved language services)',
        markInfUsag: {
          yes: 'This app uses your information for marketing purposes:',
          no: 'This app does not use your information for marketing purposes.',
        },
        markInfUsag_behavior: 'Behavioral Information',
        markInfUsag_digital: 'Digital Information',
        markInfUsag_personal: 'Personal Information',
        infColSharing: {
          yes: 'This app shares your information:',
          no: 'This app does not share your information.',
        },
        infColSharing_auththirdparties: 'Authorized Third Parties (Third Parties that you allow)',
        infColSharing_verifthirdparties: 'Third parties that can verify the collected information',
        infColSharing_servicepartners: 'Service Partners',
        infColSharing_government: 'Government Agencies',
        infColSharing_banks: 'Credit Agencies or Banks',
        infColSharingOverseas: {
          yes: 'This app also shares your information overseas:',
          no: 'This app does not share your information overseas.',
        },
        infColSharingOverseas_companymembers: 'Foreign Company Members',
        infColSharingOverseas_serviceproviders: 'Foreign Service Providers',
        infColSharingOverseas_transactions: 'Completing international transactions',
        infColSharingOverseas_law: 'Legal Reasons',
        shareFinanPart: {
          yes: 'All parties with whom data is shared are part of the financial sector or indispensable for the performance of financial services.',
          no: 'Not all parties with whom data is shared are part of the financial sector or indispensable for the performance of financial services.',
        },
        encryption: 'All data is stored and sent encrypted.',
        encryptionSpecific: {
          stored: 'Your data is not encrypted when stored.',
          sent: 'Your data is not encrypted when sent.',
          both: 'Your data is not encrypted when stored or sent.',
        },
        userAccess: {
          yes: 'You can access your information.',
          no: 'You can not access your information.',
        },
        userCorrect: {
          yes: 'You can correct or update your information.',
          no: 'You can not correct or update your information.',
        },
        userDeletion: {
          yes: 'You can request that all the information collected about you gets deleted.',
          no: 'You can not request that all the information collected about you gets deleted.',
        },
        userDeletionThirdParties: {
          yes: 'This deletion request will also delete all shared information with third parties.',
          no: 'This deletion request will not delete all shared information with third parties.',
        },
        accCloseData: {
          yes: 'Your data will be retained if you close your account.',
          no: 'Your data will not be retained if you close your account.',
        },
        accCloseData_alldata: 'All Data',
        accCloseData_anonym: 'Anonymized Data',
        accCloseData_userspecific: 'User-Specific Data',
        dataStorage: {
          less: 'The collected data will be stored less than a year.',
          onetothree: 'The collected data will be stored one to three years.',
          threetoten: 'The collected data will be stored three to ten years.',
          overten: 'The collected data will be stored over ten years.',
        },
        dataStorage_account: 'Registration and account data',
        dataStorage_usage: 'Usage Data',
        dataStorage_location: 'Location Data',
        dataStorage_device: 'Device Information',
        dataStorage_transaction: 'Payment and Transaction Data',
      };

      let htmlContent = "<html><head><title>Questionnaire result</title></head><body>";

      // Boolean flags to check if specific description texts got already added to the HTML file
      const sectionsAdded = {
        data: false,
        contact: false,
        gov: false,
        perscirc: false,
        finance: false,
        credit: false,
        transaction: false,
        digitalKind: false,
        digitalReason: false,
        behaviorKind: false,
        behaviorReason: false,
        sensitive: false,
        marketing: false,
        sharing: false,
        overseas: false,
        accountclose: false,
        dataStored: false
      };
      
      // Function which writes the answers of the questionnaire into a HTML file
      for (const controlName in this.form.controls) {
        if (this.form.controls.hasOwnProperty(controlName)) {
          const control = this.form.controls[controlName];
      
          if (control.value && control.value !== false) {
            if (this.data.includes(controlName) && !sectionsAdded.data) {
              htmlContent += "<p>Data is collected in the following cases:</p>";
              sectionsAdded.data = true;
            }
            if (this.contact.includes(controlName) && !sectionsAdded.contact) {
              htmlContent += "<p>The following personal and contact details are collected:</p>";
              sectionsAdded.contact = true;
            }
            if (this.gov.includes(controlName) && !sectionsAdded.gov) {
              htmlContent += "<p>The following data is collected about government related identifiers:</p>";
              sectionsAdded.gov = true;
            }      
            if (this.perscirc.includes(controlName) && !sectionsAdded.perscirc) {
              htmlContent += "<p>The following data is collected about personal circumstances:</p>";
              sectionsAdded.perscirc = true;
            }      
            if (this.finance.includes(controlName) && !sectionsAdded.finance) {
              htmlContent += "<p>The following kinds of financial information are collected:</p>";
              sectionsAdded.finance = true;
            }      
            if (this.credit.includes(controlName) && !sectionsAdded.credit) {
              htmlContent += "<p>The following kinds of credit information are collected:</p>";
              sectionsAdded.credit = true;
            }      
            if (this.transaction.includes(controlName) && !sectionsAdded.transaction) {
              htmlContent += "<p>The following kinds of transaction information are collected:</p>";
              sectionsAdded.transaction = true;
            }      
            if (this.digitalKind.includes(controlName) && !sectionsAdded.digitalKind) {
              htmlContent += "<p>The following kinds of digital information are collected:</p>";
              sectionsAdded.digitalKind = true;
            }      
            if (this.digitalReason.includes(controlName) && !sectionsAdded.digitalReason) {
              htmlContent += "<p>The digital information is collected for the following reasons:</p>";
              sectionsAdded.digitalReason = true;
            }      
            if (this.behaviorKind.includes(controlName) && !sectionsAdded.behaviorKind) {
              htmlContent += "<p>The following kinds of behavioral information are collected:</p>";
              sectionsAdded.behaviorKind = true;
            }      
            if (this.behaviorReason.includes(controlName) && !sectionsAdded.behaviorReason) {
              htmlContent += "<p>The behavioral information is collected for the following reasons:</p>";
              sectionsAdded.behaviorReason = true;
            }      
            if (this.sensitive.includes(controlName) && !sectionsAdded.sensitive) {
              htmlContent += "<p>The following kinds of sensitive information are collected:</p>";
              sectionsAdded.sensitive = true;
            }      
            if (this.marketing.includes(controlName) && !sectionsAdded.marketing) {
              htmlContent += "<p>The following kinds of information are used for marketing purposes:</p>";
              sectionsAdded.marketing = true;
            }      
            if (this.sharing.includes(controlName) && !sectionsAdded.sharing) {
              htmlContent += "<p>Your information is shared with the following entities:</p>";
              sectionsAdded.sharing = true;
            }      
            if (this.overseas.includes(controlName) && !sectionsAdded.overseas) {
              htmlContent += "<p>Data is sent abroad to the following entities or for the following reasons:</p>";
              sectionsAdded.overseas = true;
            }      
            if (this.accountclose.includes(controlName) && !sectionsAdded.accountclose) {
              htmlContent += "<p>The following data will be retained if you close your account:</p>";
              sectionsAdded.accountclose = true;
            }      
            if (this.dataStored.includes(controlName) && !sectionsAdded.dataStored) {
              htmlContent += "<p>The following kinds of data are stored:</p>";
              sectionsAdded.dataStored = true;
            }      
            if (controlName.includes('other')) {
              htmlContent += "<p>" + (document.getElementById(controlName + '_Textarea') as HTMLTextAreaElement)?.value + "<p>";
            }   
            if (!controlName.includes('other')) {   
              if ((controlName === 'encryption' && control.value === 'yes') || controlName !== 'encryption') {
                htmlContent += "<p>" + ((controlOutputMap[controlName] as any)?.[control.value] || controlOutputMap[controlName]) + "</p>";
              }              
            }
          }
        }
      }      

      htmlContent += "</body></html>";

      const link = document.createElement("a");
      const file = new Blob([htmlContent], { type: 'text/html' });
      link.href = URL.createObjectURL(file);
      link.download = "questionnaire_data_visualization.html";
      link.click();
    }
  }  
}