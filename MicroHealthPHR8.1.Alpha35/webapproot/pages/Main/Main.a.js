dojo.declare("Main", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
btnExportProblems: function(inSender, inEvent) {
try {
this.problemsDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportProblems: ' + e);
}
},
btnExportPlan: function(inSender, inEvent) {
try {
this.careplanDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportPlan: ' + e);
}
},
btnExportJournal: function(inSender, inEvent) {
try {
this.journalDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportJournal: ' + e);
}
},
btnExportAppt: function(inSender, inEvent) {
try {
this.appointmentDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportAppt: ' + e);
}
},
btnExportAllergies: function(inSender, inEvent) {
try {
this.allergiesDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportAllergies: ' + e);
}
},
btnExportMeds: function(inSender, inEvent) {
try {
this.medicationsDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportMeds: ' + e);
}
},
btnExportLabs: function(inSender, inEvent) {
try {
this.laboratoryDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportLabs: ' + e);
}
},
btnExportRads: function(inSender, inEvent) {
try {
this.radiologyDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportRads: ' + e);
}
},
btnExportShots: function(inSender, inEvent) {
try {
this.immunizationDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportShots: ' + e);
}
},
btnExportVitals: function(inSender, inEvent) {
try {
this.vitalsDojoGrid.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportVitals: ' + e);
}
},
btnExportDocs: function(inSender, inEvent) {
try {
this.documentsDojoGrid1.showCSVData();
} catch(e) {
console.error('ERROR IN btnExportDocs: ' + e);
}
},
btnClearProblemClick: function(inSender) {
this.selectMenu1.clear();
},
btnAddProblemClick: function(inSender) {
this.ProblemTitleEditor1.setShowing(true);
this.cboProblemProblem.setShowing(false);
this.btnAddProblem.setShowing(false);
},
problemReset: function(inSender, inData) {
this.ProblemTitleEditor1.setShowing(false);
this.cboProblemProblem.setShowing(true);
this.btnAddProblem.setShowing(false);
},
cboProblemProblemChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.btnAddProblem.setShowing(true);
},
btnAddJournalClick: function(inSender) {
this.JournalTitleEditor1.setShowing(true);
this.cboJournalTitle.setShowing(false);
this.btnAddJournal.setShowing(false);
},
journalReset: function(inSender, inData) {
this.JournalTitleEditor1.setShowing(false);
this.cboJournalTitle.setShowing(true);
this.btnAddJournal.setShowing(false);
},
cboJournalChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.btnAddJournal.setShowing(true);
},
btnAddAllergyClick: function(inSender) {
this.AllergyTitleEditor1.setShowing(true);
this.cboAllergyTitle.setShowing(false);
this.btnAddAllergy.setShowing(false);
},
allergyReset: function(inSender, inData) {
this.AllergyTitleEditor1.setShowing(false);
this.cboAllergyTitle.setShowing(true);
this.btnAddAllergy.setShowing(false);
},
cboAllergyChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.btnAddAllergy.setShowing(true);
},
btnAddMedicationClick: function(inSender) {
this.MedicationTitleEditor1.setShowing(true);
this.cboMedicationTitle.setShowing(false);
this.btnAddMedication.setShowing(false);
},
medicationReset: function(inSender, inData) {
this.MedicationTitleEditor1.setShowing(false);
this.cboMedicationTitle.setShowing(true);
this.btnAddMedication.setShowing(false);
},
cboMedicationChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.btnAddMedication.setShowing(true);
},
btnAddLaboratoryClick: function(inSender) {
this.LaboratoryTestEditor1.setShowing(true);
this.cboLaboratoryTitle.setShowing(false);
this.btnAddLaboratory.setShowing(false);
},
laboratoryReset: function(inSender, inData) {
this.LaboratoryTestEditor1.setShowing(false);
this.cboLaboratoryTitle.setShowing(true);
this.btnAddLaboratory.setShowing(false);
},
cboLaboratoryChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.btnAddLaboratory.setShowing(true);
},
_end: 0
});

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
serviceFileList: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":undefined,"operation":"listFiles","service":"FileUploadDownload","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"listFilesInputs"}, {}]
}],
serviceFileDelete: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"deleteFile","service":"FileUploadDownload"}, {"onSuccess":"serviceFileList"}, {
input: ["wm.ServiceInput", {"type":"deleteFileInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem.name","targetProperty":"files"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload1.variable.name","targetProperty":"file"}, {}]
}]
}]
}],
serviceFileDownload: ["wm.ServiceVariable", {"downloadFile":true,"inFlightBehavior":undefined,"operation":"downloadFile","service":"FileUploadDownload"}, {}, {
input: ["wm.ServiceInput", {"type":"downloadFileInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem.path","targetProperty":"file"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem.name","targetProperty":"returnname"}, {}]
}]
}]
}],
journalLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Journal"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Journal","view":[{"caption":"JournalID","sortable":true,"dataIndex":"JournalID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9000,"subType":null,"widthUnits":"px"},{"caption":"JournalTitle","sortable":true,"dataIndex":"JournalTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":9001,"subType":null,"widthUnits":"px"},{"caption":"JournalDate","sortable":true,"dataIndex":"JournalDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9002,"subType":null,"widthUnits":"px"},{"caption":"JournalEntry","sortable":true,"dataIndex":"JournalEntry","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9003,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9004,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9005,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":9006}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
problemsLiveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"inFlightBehavior":"executeLast","type":"com.phr.data.Problems"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Problems","related":["relProblemType"],"view":[{"caption":"ProblemID","sortable":true,"dataIndex":"ProblemID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"ProblemTypeID","sortable":true,"dataIndex":"relProblemType.ProblemTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"ProblemType","sortable":true,"dataIndex":"relProblemType.ProblemType","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"ProblemDescription","sortable":true,"dataIndex":"ProblemDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"ProblemDateStart","sortable":true,"dataIndex":"ProblemDateStart","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ProblemDateResolve","sortable":true,"dataIndex":"ProblemDateResolve","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"ProblemCode","sortable":true,"dataIndex":"ProblemCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
medicationsLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Medications"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Medications","related":["relMedicationStatus"],"view":[{"caption":"MedicationID","sortable":true,"dataIndex":"MedicationID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":12000,"subType":null,"widthUnits":"px"},{"caption":"MedicationTitle","sortable":true,"dataIndex":"MedicationTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":12001,"subType":null,"widthUnits":"px"},{"caption":"MedicationDirection","sortable":true,"dataIndex":"MedicationDirection","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12002,"subType":null,"widthUnits":"px"},{"caption":"MedicationQuantity","sortable":true,"dataIndex":"MedicationQuantity","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12003,"subType":null,"widthUnits":"px"},{"caption":"MedicationRefillsLeft","sortable":true,"dataIndex":"MedicationRefillsLeft","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12004,"subType":null,"widthUnits":"px"},{"caption":"MedicationPharmacy","sortable":true,"dataIndex":"MedicationPharmacy","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12005,"subType":null,"widthUnits":"px"},{"caption":"MedicationDateFilled","sortable":true,"dataIndex":"MedicationDateFilled","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12006,"subType":null,"widthUnits":"px"},{"caption":"MedicationNextRefillDate","sortable":true,"dataIndex":"MedicationNextRefillDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12007,"subType":null,"widthUnits":"px"},{"caption":"MedicationNotes","sortable":true,"dataIndex":"MedicationNotes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12008,"subType":null,"widthUnits":"px"},{"caption":"MedicationExpirationDate","sortable":true,"dataIndex":"MedicationExpirationDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12009,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12010,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12011,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12012},{"caption":"MedicationStatusID","sortable":true,"dataIndex":"relMedicationStatus.MedicationStatusID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":13000,"subType":null,"widthUnits":"px"},{"caption":"MedicationStatus","sortable":true,"dataIndex":"relMedicationStatus.MedicationStatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":13001,"subType":null,"widthUnits":"px"}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
laboratoryLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Laboratory"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Laboratory","related":["relLaboratoryFlag"],"view":[{"caption":"LaboratoryID","sortable":true,"dataIndex":"LaboratoryID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":10000,"subType":null,"widthUnits":"px"},{"caption":"LaboratoryPanel","sortable":true,"dataIndex":"LaboratoryPanel","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10001,"subType":null,"widthUnits":"px"},{"caption":"LaboratoryTest","sortable":true,"dataIndex":"LaboratoryTest","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":10002,"subType":null,"widthUnits":"px"},{"caption":"LaboratoryResult","sortable":true,"dataIndex":"LaboratoryResult","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":10003,"subType":null,"widthUnits":"px"},{"caption":"LaboratoryRefRange","sortable":true,"dataIndex":"LaboratoryRefRange","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10004,"subType":null,"widthUnits":"px"},{"caption":"LaboratoryDate","sortable":true,"dataIndex":"LaboratoryDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10005,"subType":null,"widthUnits":"px"},{"caption":"LaboratoryNotes","sortable":true,"dataIndex":"LaboratoryNotes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10006,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10007,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10008,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10009},{"caption":"LaboratoryFlagID","sortable":true,"dataIndex":"relLaboratoryFlag.LaboratoryFlagID","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11000},{"caption":"LaboratoryFlag","sortable":true,"dataIndex":"relLaboratoryFlag.LaboratoryFlag","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11001}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
radiologyLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Radiology"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Radiology","related":["relRadiologyFlag"],"view":[{"caption":"RadiologyID","sortable":true,"dataIndex":"RadiologyID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":16000,"subType":null,"widthUnits":"px"},{"caption":"RadiologyExam","sortable":true,"dataIndex":"RadiologyExam","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":16001,"subType":null,"widthUnits":"px"},{"caption":"RadiologyResult","sortable":true,"dataIndex":"RadiologyResult","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16002,"subType":null,"widthUnits":"px"},{"caption":"RadiologyDate","sortable":true,"dataIndex":"RadiologyDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16003,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16004,"subType":null,"widthUnits":"px"},{"caption":"RadiologyNotes","sortable":true,"dataIndex":"RadiologyNotes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16005,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16006,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":16007},{"caption":"RadiologyFlagID","sortable":true,"dataIndex":"relRadiologyFlag.RadiologyFlagID","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":17000},{"caption":"RadiologyFlag","sortable":true,"dataIndex":"relRadiologyFlag.RadiologyFlag","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":17001}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
immunizationLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Immunization"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Immunization","view":[{"caption":"ImmunizationID","sortable":true,"dataIndex":"ImmunizationID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":8000,"subType":null,"widthUnits":"px"},{"caption":"ImmunizationName","sortable":true,"dataIndex":"ImmunizationName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8001,"subType":null,"widthUnits":"px"},{"caption":"ImmunizationDate","sortable":true,"dataIndex":"ImmunizationDate","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8002,"subType":null,"widthUnits":"px"},{"caption":"ImmunizationNextDue","sortable":true,"dataIndex":"ImmunizationNextDue","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8003,"subType":null,"widthUnits":"px"},{"caption":"ImmunizationNotes","sortable":true,"dataIndex":"ImmunizationNotes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8004,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8005,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8006,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8007}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
userLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.User"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.User","view":[{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"Email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"FirstName","sortable":true,"dataIndex":"FirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"LastName","sortable":true,"dataIndex":"LastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"Role","sortable":true,"dataIndex":"Role","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}]
}]
}],
navSetup: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"SystemSetup\"","targetProperty":"pageName"}, {}]
}]
}]
}],
serviceGetUserVariable1: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserId","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
}],
allergiesLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Allergies"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Allergies","view":[{"caption":"AllergyID","sortable":true,"dataIndex":"AllergyID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"AllergyTitle","sortable":true,"dataIndex":"AllergyTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"AllergyDescription","sortable":true,"dataIndex":"AllergyDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"AllergyReaction","sortable":true,"dataIndex":"AllergyReaction","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"AllergyStart","sortable":true,"dataIndex":"AllergyStart","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"AllergyResolved","sortable":true,"dataIndex":"AllergyResolved","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"AllergyCode","sortable":true,"dataIndex":"AllergyCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1007,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":1008},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":1009}]}, {}]
}],
serviceGetUsernameVariable1: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
vitalsLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Vitals"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Vitals","related":["relVitalsType","relVitalsFlag"],"view":[{"caption":"VitalsID","sortable":true,"dataIndex":"VitalsID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":19000,"subType":null,"widthUnits":"px"},{"caption":"VitalsDate","sortable":true,"dataIndex":"VitalsDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19001,"subType":null,"widthUnits":"px"},{"caption":"VitalsMeasurement","sortable":true,"dataIndex":"VitalsMeasurement","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19002,"subType":null,"widthUnits":"px"},{"caption":"VitalsNotes","sortable":true,"dataIndex":"VitalsNotes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19003,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19004,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19005,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":19006},{"caption":"VitalsTypeID","sortable":true,"dataIndex":"relVitalsType.VitalsTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":20000,"subType":null,"widthUnits":"px"},{"caption":"VitalsType","sortable":true,"dataIndex":"relVitalsType.VitalsType","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":20001,"subType":null,"widthUnits":"px"},{"caption":"VitalsFlagID","sortable":true,"dataIndex":"relVitalsFlag.VitalsFlagID","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":21000},{"caption":"VitalsFlag","sortable":true,"dataIndex":"relVitalsFlag.VitalsFlag","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":21001}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}]
}],
careplanLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.CarePlan"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.CarePlan","related":["relCarePlanStatus"],"view":[{"caption":"CarePlanID","sortable":true,"dataIndex":"CarePlanID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"CarePlan","sortable":true,"dataIndex":"CarePlan","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"CarePlanDueDate","sortable":true,"dataIndex":"CarePlanDueDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"CarePlanDate","sortable":true,"dataIndex":"CarePlanDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"CarePlanStatsID","sortable":true,"dataIndex":"relCarePlanStatus.CarePlanStatsID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"CarePlanStatus","sortable":true,"dataIndex":"relCarePlanStatus.CarePlanStatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
serviceProblemListVariable1: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getProblemList","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getProblemListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"UserID"}, {}]
}]
}]
}],
filesLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Files"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsDojoGrid1.selectedItem.DocumentID","targetProperty":"filter.DocumentID"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Files","view":[{"caption":"FilesID","sortable":true,"dataIndex":"FilesID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Path","sortable":true,"dataIndex":"path","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"DocumentID","sortable":true,"dataIndex":"DocumentID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
serviceDeleteDBFiles: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"deleteFiles","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"deleteFilesInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem.path","targetProperty":"PathInput"}, {}]
}]
}]
}],
appointmentLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Appointment"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Appointment","related":["relAppointmetnStatus"],"view":[{"caption":"AppointmentID","sortable":true,"dataIndex":"AppointmentID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"AppointmentTitle","sortable":true,"dataIndex":"AppointmentTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"AppointmentDescription","sortable":true,"dataIndex":"AppointmentDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"AppointmentDate","sortable":true,"dataIndex":"AppointmentDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"AppointmentTime","sortable":true,"dataIndex":"AppointmentTime","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"AppointmentStatusid","sortable":true,"dataIndex":"relAppointmetnStatus.AppointmentStatusid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"AppointmentStatus","sortable":true,"dataIndex":"relAppointmetnStatus.AppointmentStatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
serviceDocumentFileDelete: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteDocumentFiles","service":"PHR"}, {}, {
input: ["wm.ServiceInput", {"type":"deleteDocumentFilesInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsDojoGrid.selectedItem.DocumentID","targetProperty":"documentid"}, {}]
}]
}]
}],
careplanHomeVar: ["wm.LiveVariable", {"type":"com.phr.data.CarePlan"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.CarePlan","view":[{"caption":"CarePlanID","sortable":true,"dataIndex":"CarePlanID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"CarePlan","sortable":true,"dataIndex":"CarePlan","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"CarePlanDueDate","sortable":true,"dataIndex":"CarePlanDueDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"CarePlanDate","sortable":true,"dataIndex":"CarePlanDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
ProblemsHomeVar: ["wm.LiveVariable", {"type":"com.phr.data.Problems"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Problems","related":["relProblemType"],"view":[{"caption":"ProblemID","sortable":true,"dataIndex":"ProblemID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"ProblemDescription","sortable":true,"dataIndex":"ProblemDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"ProblemDateStart","sortable":true,"dataIndex":"ProblemDateStart","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"ProblemDateResolve","sortable":true,"dataIndex":"ProblemDateResolve","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"ProblemCode","sortable":true,"dataIndex":"ProblemCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1007,"subType":null,"widthUnits":"px"},{"caption":"ProblemTypeID","sortable":true,"dataIndex":"relProblemType.ProblemTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2000},{"caption":"ProblemType","sortable":true,"dataIndex":"relProblemType.ProblemType","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2001}]}, {}]
}],
MedsHomeVar: ["wm.LiveVariable", {"type":"com.phr.data.Medications"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire2: ["wm.Wire", {"expression":"\"Taking\"","targetProperty":"filter.relMedicationStatus.MedicationStatus"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Medications","related":["relMedicationStatus"],"view":[{"caption":"MedicationID","sortable":true,"dataIndex":"MedicationID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3000,"subType":null,"widthUnits":"px"},{"caption":"MedicationTitle","sortable":true,"dataIndex":"MedicationTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3001,"subType":null,"widthUnits":"px"},{"caption":"MedicationDirection","sortable":true,"dataIndex":"MedicationDirection","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3002,"subType":null,"widthUnits":"px"},{"caption":"MedicationQuantity","sortable":true,"dataIndex":"MedicationQuantity","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3003,"subType":null,"widthUnits":"px"},{"caption":"MedicationRefillsLeft","sortable":true,"dataIndex":"MedicationRefillsLeft","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3004,"subType":null,"widthUnits":"px"},{"caption":"MedicationPharmacy","sortable":true,"dataIndex":"MedicationPharmacy","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3005,"subType":null,"widthUnits":"px"},{"caption":"MedicationDateFilled","sortable":true,"dataIndex":"MedicationDateFilled","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3006,"subType":null,"widthUnits":"px"},{"caption":"MedicationNextRefillDate","sortable":true,"dataIndex":"MedicationNextRefillDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3007,"subType":null,"widthUnits":"px"},{"caption":"MedicationNotes","sortable":true,"dataIndex":"MedicationNotes","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3008,"subType":null,"widthUnits":"px"},{"caption":"MedicationExpirationDate","sortable":true,"dataIndex":"MedicationExpirationDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3009,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3010,"subType":null,"widthUnits":"px"},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3011,"subType":null,"widthUnits":"px"},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3012,"subType":null,"widthUnits":"px"},{"caption":"MedicationStatusID","sortable":true,"dataIndex":"relMedicationStatus.MedicationStatusID","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4000},{"caption":"MedicationStatus","sortable":true,"dataIndex":"relMedicationStatus.MedicationStatus","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4001}]}, {}]
}],
AllergiesHomeVar: ["wm.LiveVariable", {"type":"com.phr.data.Allergies"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Allergies","view":[{"caption":"AllergyID","sortable":true,"dataIndex":"AllergyID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"AllergyTitle","sortable":true,"dataIndex":"AllergyTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"AllergyDescription","sortable":true,"dataIndex":"AllergyDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"AllergyReaction","sortable":true,"dataIndex":"AllergyReaction","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"AllergyStart","sortable":true,"dataIndex":"AllergyStart","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"AllergyResolved","sortable":true,"dataIndex":"AllergyResolved","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"AllergyCode","sortable":true,"dataIndex":"AllergyCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}]}, {}]
}],
ApptHomeVar: ["wm.LiveVariable", {"type":"com.phr.data.Appointment"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Appointment","view":[{"caption":"AppointmentID","sortable":true,"dataIndex":"AppointmentID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"AppointmentTitle","sortable":true,"dataIndex":"AppointmentTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"AppointmentDescription","sortable":true,"dataIndex":"AppointmentDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"AppointmentDate","sortable":true,"dataIndex":"AppointmentDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"AppointmentTime","sortable":true,"dataIndex":"AppointmentTime","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
}],
JournalHomeVar: ["wm.LiveVariable", {"type":"com.phr.data.Journal"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Journal","view":[{"caption":"JournalID","sortable":true,"dataIndex":"JournalID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"JournalTitle","sortable":true,"dataIndex":"JournalTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"JournalDate","sortable":true,"dataIndex":"JournalDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"JournalEntry","sortable":true,"dataIndex":"JournalEntry","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}]
}],
serviceNlmMedlinePlus: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"invoke","service":"nlmMedlinePlusHealth"}, {}, {
input: ["wm.ServiceInput", {"type":"invokeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"term"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"db"}, {}]
}]
}]
}],
serviceVitalsGraph: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","maxResults":10,"operation":"getVitalsGraph","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getVitalsGraphInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"vitalsDojoGrid.selectedItem.relVitalsType.VitalsTypeID","targetProperty":"vitalstypeID"}, {}]
}]
}]
}],
serviceLabsGraph: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","maxResults":10,"operation":"getLabsGraph","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getLabsGraphInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"laboratoryDojoGrid.selectedItem.LaboratoryTest","targetProperty":"laboratorytest"}, {}]
}]
}]
}],
serviceJournalListVariable: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getJournalTitle","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getJournalTitleInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"UserID"}, {}]
}]
}]
}],
serviceAllergyListVariable: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getAllergyTitle","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getAllergyTitleInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"UserID"}, {}]
}]
}]
}],
serviceMedicationListVariable: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getMedicationList","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getMedicationListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"UserID"}, {}]
}]
}]
}],
serviceLaboratoryListVariable: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getLabsList","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getLabsListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"UserID"}, {}]
}]
}]
}],
documentsLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.Documents"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"filter.UserID"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"filter.ProblemTitle"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.phr.data.Documents","related":["relDocumetType"],"view":[{"caption":"DocumentID","sortable":true,"dataIndex":"DocumentID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"DocumentTitle","sortable":true,"dataIndex":"DocumentTitle","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"DocumentDescription","sortable":true,"dataIndex":"DocumentDescription","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"DocumentDate","sortable":true,"dataIndex":"DocumentDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"ProblemTitle","sortable":true,"dataIndex":"ProblemTitle","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"DocumentTypeID","sortable":true,"dataIndex":"relDocumetType.DocumentTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"DocumentType","sortable":true,"dataIndex":"relDocumetType.DocumentType","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
serviceCarePlanGraph: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","maxResults":10,"operation":"getCarePlanGraph","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getCarePlanGraphInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"userid"}, {}]
}]
}]
}],
serviceJournalGraph: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":undefined,"maxResults":10,"operation":"getJournalGraph","service":"PHR","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getJournalGraphInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"userid"}, {}]
}]
}]
}],
designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Attachments"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel15: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblDocumentAssociated: ["wm.Label", {"caption":"Selected Document:","padding":"4","width":"150px"}, {}],
lbldocname: ["wm.Label", {"padding":"4","width":"150px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsDojoGrid1.selectedItem.DocumentTitle","targetProperty":"caption"}, {}]
}]
}],
lblDate: ["wm.Label", {"display":"Date","padding":"4","width":"100px"}, {}, {
format: ["wm.DateFormatter", {}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsDojoGrid1.selectedItem.DocumentDate","targetProperty":"caption"}, {}]
}]
}]
}],
dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"path","title":"Path","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"FilesID","title":"FilesID","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"UserID","title":"UserID","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"DocumentID","title":"DocumentID","width":"80px","displayType":"Number","align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"noHeader":true,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"filesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
dojoFileUpload1: ["wm.DojoFileUpload", {"height":"35px","useList":false,"width":"99%"}, {"onSuccess":"filesDBForm1.saveData","onSuccess1":"filesDBForm1.editNewObject","onSuccess2":"filesLiveVariable1"}, {
input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
}],
panel9: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnDownload: ["wm.Button", {"caption":"Download","margin":"4"}, {"onclick":"serviceFileDownload"}],
btnDelete: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"serviceFileDelete","onclick1":"serviceDeleteDBFiles","onclick2":"filesLiveVariable1"}],
btnclose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"designableDialog1.hide"}]
}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
dialogVitalsChart: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerVitalsChart"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vitalsDojoGrid.selectedItem.relVitalsType.VitalsType","targetProperty":"title"}, {}]
}],
containerVitalsChart: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dojoChartVitals: ["wm.DojoChart", {"chartTitle":"Vitals","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","theme":"WatersEdge","width":"100%","xAxis":"date","xdisplay":"Date","yAxis":"vitals","yAxisTitle":"Viewing Last 10 Measurements"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVitalsGraph","targetProperty":"dataSet"}, {}]
}],
xformat: ["wm.DateFormatter", {"formatLength":"short"}, {}]
}],
btnCloseVitals: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"dialogVitalsChart.hide"}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
dialogLabsChart: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"ContainerLabsChart"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"laboratoryDojoGrid.selectedItem.LaboratoryTest","targetProperty":"title"}, {}]
}],
ContainerLabsChart: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dojoChartLabs: ["wm.DojoChart", {"chartTitle":"Laboratory","height":"100%","hideLegend":true,"legendHeight":"0px","padding":"4","theme":"WatersEdge","width":"100%","xAxis":"date","xdisplay":"Date","yAxis":"labs","yAxisTitle":"Viewing Last 10 Tests"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceLabsGraph","targetProperty":"dataSet"}, {}]
}],
xformat: ["wm.DateFormatter", {"formatLength":"short"}, {}]
}],
btnCloseLabs: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"dialogLabsChart.hide"}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
dialogCarePlan: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","title":"Top 10 Care Plan Problems"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dojoChart1: ["wm.DojoChart", {"chartType":"Pie","height":"100%","padding":"4","theme":"WatersEdge","verticalLegend":true,"width":"100%","xAxis":"problem","yAxis":"occurence"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceCarePlanGraph","targetProperty":"dataSet"}, {}]
}]
}],
btnCloseCarePlan: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"dialogCarePlan.hide"}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
dialogJournalGraph: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","title":"Top 10 Journal Entries"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dojoChart2: ["wm.DojoChart", {"chartType":"Pie","height":"100%","padding":"4","theme":"WatersEdge","verticalLegend":true,"width":"100%","xAxis":"journal","yAxis":"occurrence"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceJournalGraph","targetProperty":"dataSet"}, {}]
}]
}],
btnCloseJournalGraph: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"dialogJournalGraph.hide"}]
}],
buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"autoScroll":true,"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"79px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
HeaderLogo: ["wm.Picture", {"height":"75px","source":"resources/images/logos/customLogo.png","width":"303px"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"90%"}, {}, {
lblWelcome: ["wm.Label", {"align":"left","caption":"Welcome","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%"}, {}, {
lblUsername: ["wm.Label", {"padding":"4","styles":{"fontSize":"12px"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceGetUsernameVariable1.dataValue","targetProperty":"caption"}, {}]
}]
}],
lblUser: ["wm.Label", {"display":"Number","padding":"4","showing":false,"styles":{"fontSize":"12px"},"width":"100%"}, {}, {
format: ["wm.NumberFormatter", {}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceGetUserVariable1.dataValue","targetProperty":"caption"}, {}]
}]
}],
btnClearProblem: ["wm.Button", {"caption":"Clear","desktopHeight":"30px","height":"30px","margin":"4"}, {"onclick":"btnClearProblemClick","onclick1":"problemsLiveVariable1","onclick10":"appointmentLiveVariable1","onclick2":"careplanLiveVariable1","onclick3":"journalLiveVariable1","onclick4":"allergiesLiveVariable1","onclick5":"medicationsLiveVariable1","onclick6":"laboratoryLiveVariable1","onclick7":"radiologyLiveVariable1","onclick8":"immunizationLiveVariable1","onclick9":"vitalsLiveVariable1"}]
}]
}],
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel7: ["wm.Panel", {"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSetup: ["wm.Button", {"caption":"Setup","margin":"4"}, {"onclick":"navSetup"}],
logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varTemplateLogout"}]
}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"bottom","width":"100%"}, {}, {
lblProblemFilter: ["wm.Label", {"caption":"Selected Problem","height":"100%","padding":"4","styles":{"fontWeight":"bold","fontSize":"12px"},"width":"100%"}, {}],
selectMenu1: ["wm.SelectMenu", {"caption":undefined,"dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"displayField":"problem","displayValue":"","startUpdate":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"120px"}, {}, {
MenuSideBar: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"Home","separator":undefined,"defaultLabel":"Home","iconClass":"app_silkIconList_19","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerHome","children":[]},{"label":"Summary","separator":undefined,"defaultLabel":"Summary","iconClass":"app_silkIconList_58","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerSummary","children":[]},{"label":"Care Plan","separator":undefined,"defaultLabel":"Care Plan","iconClass":"app_silkIconList_73","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerCarePlan","children":[]},{"label":"Problems","separator":undefined,"defaultLabel":"Problems","iconClass":"app_silkIconList_55","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerProblems","children":[]},{"label":"Journal","separator":undefined,"defaultLabel":"Journal","iconClass":"app_silkIconList_88","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerJournal","children":[]},{"label":"Appointments","separator":undefined,"defaultLabel":"Appointments","iconClass":"app_silkIconList_39","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerAppt","children":[]},{"label":"Allergies","separator":undefined,"defaultLabel":"Allergies","iconClass":"app_silkIconList_8","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerAllergies","children":[]},{"label":"Medications","separator":undefined,"defaultLabel":"Medications","iconClass":"app_silkIconList_11","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerMedications","children":[]},{"label":"Laboratory","separator":undefined,"defaultLabel":"Laboratory","iconClass":"app_silkIconList_83","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerLaboratory","children":[]},{"label":"Radiology","separator":undefined,"defaultLabel":"Radiology","iconClass":"app_silkIconList_59","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerRadiology","children":[]},{"label":"Immunization","separator":undefined,"defaultLabel":"Immunization","iconClass":"app_silkIconList_79","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerImmunization","children":[]},{"label":"Vitals","separator":undefined,"defaultLabel":"Vitals","iconClass":"app_silkIconList_23","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerVitals","children":[]},{"label":"Documents","separator":undefined,"defaultLabel":"Documents","iconClass":"app_silkIconList_82","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerDoc","children":[]},{"label":"My Account","separator":undefined,"defaultLabel":"My Account","iconClass":"app_silkIconList_43","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"layerMyAccount","children":[]}],"height":"100%","localizationStructure":{},"padding":"20,0,0,0","transparent":false,"vertical":true}, {}]
}],
panel4: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
Layers: ["wm.BreadcrumbLayers", {"defaultLayer":0}, {}, {
layerHome: ["wm.Layer", {"borderColor":"","caption":"Home","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"http://emedlifeline.com/mobile/200000.htm\"","targetProperty":"source"}, {}]
}]
}]
}],
layerSummary: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Summary","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridCarePlan: ["wm.DojoGrid", {"columns":[{"show":false,"field":"CarePlanID","title":"CarePlanID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"CarePlan","title":"Care Plan","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"CarePlanDate","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"CarePlanDueDate","title":"Due Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"ProblemTitle","title":"ProblemTitle","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Care Plan: \" + ${CarePlan} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${CarePlanDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Due Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${CarePlanDueDate}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.phr.data.CarePlan","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"layerCarePlan","onShow":"careplanHomeVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"careplanHomeVar","targetProperty":"dataSet"}, {}]
}]
}],
dojoGridProblem: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Problem : \" + ${ProblemTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${ProblemDateStart}) + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"ProblemID","title":"ProblemID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem ","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"ProblemDescription","title":"ProblemDescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemDateStart","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"ProblemDateResolve","title":"ProblemDateResolve","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"ProblemCode","title":"ProblemCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"relProblemType.ProblemTypeID","title":"RelProblemType.ProblemTypeID","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"relProblemType.ProblemType","title":"RelProblemType.ProblemType","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"layerProblems","onShow":"ProblemsHomeVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ProblemsHomeVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridMedication: ["wm.DojoGrid", {"columns":[{"show":false,"field":"ProblemTitle","title":"ProblemTitle","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Medication: \" + ${MedicationTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Next Refill: \" + wm.List.prototype.dateFormatter({}, null,null,null,${MedicationNextRefillDate}) + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"MedicationDateFilled","title":"MedicationDateFilled","width":"436px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"MedicationID","title":"MedicationID","width":"255px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"MedicationTitle","title":"Medication","width":"92px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"MedicationDirection","title":"Direction","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"MedicationQuantity","title":"MedicationQuantity","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"MedicationRefillsLeft","title":"MedicationRefillsLeft","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"MedicationPharmacy","title":"MedicationPharmacy","width":"102px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"MedicationNextRefillDate","title":"Next Refill","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"MedicationNotes","title":"MedicationNotes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"MedicationExpirationDate","title":"MedicationExpirationDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"relMedicationStatus.MedicationStatusID","title":"RelMedicationStatus.MedicationStatusID","width":"128px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"relMedicationStatus.MedicationStatus","title":"Status","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"layerMedications","onShow":"MedsHomeVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"MedsHomeVar","targetProperty":"dataSet"}, {}]
}]
}],
dojoGridAllergy: ["wm.DojoGrid", {"columns":[{"show":false,"field":"AllergyID","title":"AllergyID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"AllergyTitle","title":"Allergy","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"AllergyDescription","title":"AllergyDescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"AllergyReaction","title":"Reaction","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"AllergyStart","title":"AllergyStart","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"AllergyResolved","title":"AllergyResolved","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"AllergyCode","title":"AllergyCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"ProblemTitle","title":"ProblemTitle","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Allergy: \" + ${AllergyTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Reaction: \" + ${AllergyReaction} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.phr.data.Allergies","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"layerAllergies","onShow":"AllergiesHomeVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"AllergiesHomeVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGridAppt: ["wm.DojoGrid", {"columns":[{"show":false,"field":"AppointmentID","title":"AppointmentID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"AppointmentTitle","title":"Appointment","width":"191px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"AppointmentDescription","title":"AppointmentDescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"AppointmentDate","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"AppointmentTime","title":"Time","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"ProblemTitle","title":"ProblemTitle","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Appointment: \" + ${AppointmentTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${AppointmentDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Time: \" + wm.List.prototype.dateFormatter({}, null,null,null,${AppointmentTime}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.phr.data.Appointment","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"layerAppt","onShow":"ApptHomeVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ApptHomeVar","targetProperty":"dataSet"}, {}]
}]
}],
dojoGridJournal: ["wm.DojoGrid", {"columns":[{"show":false,"field":"JournalID","title":"JournalID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"JournalTitle","title":"Journal","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"JournalDate","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"JournalEntry","title":"JournalEntry","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"ProblemTitle","title":"ProblemTitle","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Journal: \" + ${JournalTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${JournalDate}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.phr.data.Journal","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"layerJournal","onShow":"JournalHomeVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"JournalHomeVar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layerProblems: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Problems","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
problemsLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
problemsGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Problems"}, {}, {
problemsDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"ProblemID","title":"ProblemID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"ProblemDescription","title":"ProblemDescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemDateStart","title":"Date Onset","width":"90px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemDateResolve","title":"Date Resolved","width":"115px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"ProblemCode","title":"ProblemCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"relProblemType.ProblemTypeID","title":"ProblemTypeID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"relProblemType.ProblemType","title":"ProblemType","width":"133px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Problem Name: \" + ${ProblemTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date Onset: \" + wm.List.prototype.dateFormatter({\"dateType\":\"date\"}, null,null,null,${ProblemDateStart}) + \"</div>\"\n+ \"<div class='MobileRow'>Date Resolved: \" + wm.List.prototype.dateFormatter({\"dateType\":\"date\"}, null,null,null,${ProblemDateResolve}) + \"</div>\"\n+ \"<div class='MobileRow'>ProblemType: \" + ${relProblemType.ProblemType} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false}],"dsType":"com.phr.data.Problems","height":"100%","localizationStructure":{},"margin":"4","selectFirstRow":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"problemsLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
ExportProblems: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportProblems"}]
}],
problemsDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"266px","title":"Details"}, {}, {
problemsLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"234px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onCancelEdit":"problemReset","onDeleteData":"problemReset","onSuccess":"problemsLiveVariable1","onSuccess1":"serviceProblemListVariable1","onSuccess2":"problemReset"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"problemsDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
ProblemIDEditor1: ["wm.Number", {"caption":"ProblemID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"ProblemID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
panel21: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"90%"}, {}, {
cboProblemProblem: ["wm.SelectMenu", {"caption":"Problem Name","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"defaultInsert":"","desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"100%"}, {"onfocus":"cboProblemProblemChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}]
}]
}],
btnAddProblem: ["wm.Button", {"caption":"Add to List","desktopHeight":"24px","height":"24px","margin":"4","showing":false,"width":"100px"}, {"onclick":"btnAddProblemClick"}]
}],
ProblemTitleEditor1: ["wm.Text", {"caption":"Enter Problem","captionSize":"140px","changeOnKey":true,"defaultInsert":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemProblem.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
relProblemTypeLookup1: ["wm.Lookup", {"caption":"Problem Type","captionSize":"140px","dataType":"com.phr.data.LutProblemType","dataValue":undefined,"defaultInsert":"","desktopHeight":"26px","displayField":"ProblemType","formField":"relProblemType","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
userIDEditor4: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemDescriptionEditor1: ["wm.LargeTextArea", {"caption":"Description","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"ProblemDescription","readonly":true,"width":"90%"}, {}],
ProblemDateStartEditor1: ["wm.Date", {"caption":"Date Onset","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"ProblemDateStart","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemDateResolveEditor1: ["wm.Date", {"caption":"Date Resolved","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"ProblemDateResolve","height":"26px","readonly":true,"width":"90%"}, {}],
ProblemCodeEditor1: ["wm.Text", {"caption":"ProblemCode","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemCode","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
tenantidEditor1: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
problemsLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"problemsLiveForm1","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton2: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"problemsLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"problemsLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton2: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"problemsLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton2: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"problemsLiveForm1EditPanel.beginDataInsert"}],
updateButton2: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"problemsLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"problemsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton2: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"problemsLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"problemsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerCarePlan: ["wm.Layer", {"borderColor":"","caption":"Care Plan","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
careplanLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
careplanGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Careplan"}, {}, {
careplanDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"CarePlanID","title":"CarePlanID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"CarePlan","title":"Care Plan","width":"264px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"CarePlanDate","title":"Plan Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"CarePlanDueDate","title":"Date Due","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Care Plan: \" + ${CarePlan} + \"</div>\"\n+ \"<div class='MobileRow'>Plan Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${CarePlanDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Date Due: \" + wm.List.prototype.dateFormatter({}, null,null,null,${CarePlanDueDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${relCarePlanStatus.CarePlanStatus} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"relCarePlanStatus.CarePlanStatsID","title":"RelCarePlanStatus.CarePlanStatsID","width":"71px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"relCarePlanStatus.CarePlanStatus","title":"Status","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"212px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false}],"height":"100%","hint":"Double Click to Graph This","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"dialogCarePlan.show","onCellDblClick1":"serviceCarePlanGraph"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"careplanLiveVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGridCarePlan.selectedItem.CarePlan","targetProperty":"selectedItem"}, {}]
}]
}],
panel27: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblCarePlanCount: ["wm.Label", {"align":"left","caption":"Count It","height":"25px","hint":"Click a Care Plan First","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"dialogCarePlan.show","onclick1":"serviceCarePlanGraph"}],
ExportPlan: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportPlan"}]
}]
}],
careplanDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"290px","title":"Details"}, {}, {
careplanLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"258px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"careplanLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"careplanDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
CarePlanIDEditor1: ["wm.Number", {"caption":"CarePlanID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"CarePlanID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
CarePlanEditor1: ["wm.RichText", {"caption":"Care Plan","captionAlign":"right","captionPosition":"left","captionSize":"140px","desktopHeight":"120px","formField":"CarePlan","height":"120px","readonly":true,"required":true,"width":"90%"}, {}],
CarePlanDateEditor1: ["wm.Date", {"caption":"Plan Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"CarePlanDate","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
CarePlanDueDateEditor1: ["wm.Date", {"caption":"Date Due","captionSize":"140px","desktopHeight":"26px","emptyValue":"null","formField":"CarePlanDueDate","height":"26px","readonly":true,"width":"90%"}, {}],
UserIDEditor2: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"UserID","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
relPlanStatusLookup2: ["wm.Lookup", {"caption":"Status","captionSize":"140px","dataType":"com.phr.data.LutCarePlanStatus","dataValue":undefined,"desktopHeight":"26px","displayField":"CarePlanStatus","formField":"relCarePlanStatus","height":"26px","readonly":true,"required":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"relPlanStatusLookup2.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":"'Start'","targetProperty":"defaultInsert"}, {}]
}]
}],
cboProblemCare: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor2: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemCare.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
careplanLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"careplanLiveForm1","operationPanel":"operationPanel12","savePanel":"savePanel12"}, {}, {
savePanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton12: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"careplanLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"careplanLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton12: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"careplanLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton12: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"careplanLiveForm1EditPanel.beginDataInsert"}],
updateButton12: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"careplanLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"careplanLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton12: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"careplanLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"careplanLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerJournal: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Journal","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
journalLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
journalGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Journal"}, {}, {
journalDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"JournalID","title":"JournalID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"JournalTitle","title":"Journal Title","width":"431px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"JournalDate","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"JournalEntry","title":"Health Journal","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Journal Title: \" + ${JournalTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${JournalDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"212px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false}],"dsType":"com.phr.data.Journal","height":"100%","margin":"4"}, {"onCellDblClick":"dialogJournalGraph.show","onCellDblClick1":"serviceJournalGraph"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"journalLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
panel28: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblJournalCount: ["wm.Label", {"align":"left","caption":"Count It","height":"25px","hint":"Click a Journal Title First","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"dialogJournalGraph.show","onclick1":"serviceJournalGraph"}],
ExportJournal: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportJournal"}]
}]
}],
journalDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"294px","title":"Details"}, {}, {
journalLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"262px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onCancelEdit":"journalReset","onDeleteData":"journalReset","onSuccess":"journalLiveVariable1","onSuccess1":"serviceJournalListVariable","onSuccess2":"journalReset"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"journalDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
JournalIDEditor1: ["wm.Number", {"caption":"JournalID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"JournalID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
panel22: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"90%"}, {}, {
cboJournalTitle: ["wm.SelectMenu", {"caption":"Journal Title","captionSize":"140px","dataType":"com.phr.data.output.GetJournalTitleRtnType","dataValue":undefined,"defaultInsert":"","desktopHeight":"26px","displayField":"journal","formField":"JournalTitle","height":"26px","readonly":true,"width":"100%"}, {"onfocus":"cboJournalChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceJournalListVariable","targetProperty":"dataSet"}, {}]
}]
}],
btnAddJournal: ["wm.Button", {"caption":"Add to List","desktopHeight":"24px","height":"24px","margin":"4","showing":false,"width":"100px"}, {"onclick":"btnAddJournalClick"}]
}],
JournalTitleEditor1: ["wm.Text", {"caption":"Enter Journal Title","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"JournalTitle","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboJournalTitle.selectedItem.journal","targetProperty":"dataValue"}, {}]
}]
}],
JournalDateEditor1: ["wm.Date", {"caption":"Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"JournalDate","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
JournalEntryEditor1: ["wm.RichText", {"caption":"Health Journal","captionAlign":"right","captionPosition":"left","captionSize":"140px","desktopHeight":"150px","formField":"JournalEntry","height":"150px","readonly":true,"width":"90%"}, {}],
tenantidEditor9: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
cboProblemJournal: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor3: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemJournal.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
journalLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"journalLiveForm1","operationPanel":"operationPanel7","savePanel":"savePanel7"}, {}, {
savePanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton7: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"journalLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"journalLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton7: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"journalLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton7: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"journalLiveForm1EditPanel.beginDataInsert"}],
updateButton7: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"journalLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"journalLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton7: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"journalLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"journalLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}],
userIDEditor2: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}]
}]
}]
}]
}],
layerAllergies: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Allergies","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
allergiesLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
allergiesGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Allergies"}, {}, {
allergiesDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"AllergyID","title":"AllergyID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"AllergyTitle","title":"Allergy Name","width":"244px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"AllergyDescription","title":"AllergyDescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"AllergyReaction","title":"Allergic Reaction","width":"189px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"AllergyStart","title":"Date Onset","width":"107px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"AllergyResolved","title":"AllergyResolved","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"AllergyCode","title":"AllergyCode","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Allergy Name: \" + ${AllergyTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Allergic Reaction: \" + ${AllergyReaction} + \"</div>\"\n+ \"<div class='MobileRow'>Date Onset: \" + wm.List.prototype.dateFormatter({}, null,null,null,${AllergyStart}) + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"UserID","title":"UserID","width":"176px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"allergiesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
ExportAllergies: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportAllergies"}]
}],
allergiesDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"276px","title":"Details"}, {}, {
allergiesLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"244px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onCancelEdit":"allergyReset","onDeleteData":"allergyReset","onSuccess":"allergiesLiveVariable1","onSuccess1":"serviceAllergyListVariable","onSuccess2":"allergyReset"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"allergiesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
AllergyIDEditor1: ["wm.Number", {"caption":"AllergyID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"AllergyID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
UserEditor2: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
panel23: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"90%"}, {}, {
cboAllergyTitle: ["wm.SelectMenu", {"caption":"Allergy Name","captionSize":"140px","dataType":"com.phr.data.output.GetAllergyTitleRtnType","dataValue":undefined,"defaultInsert":"","desktopHeight":"26px","displayField":"allergy","formField":"AllergyTitle","height":"26px","readonly":true,"width":"100%"}, {"onfocus":"cboAllergyChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceAllergyListVariable","targetProperty":"dataSet"}, {}]
}]
}],
btnAddAllergy: ["wm.Button", {"caption":"Add to List","desktopHeight":"24px","height":"24px","margin":"4","showing":false,"width":"100px"}, {"onclick":"btnAddAllergyClick"}]
}],
AllergyTitleEditor1: ["wm.Text", {"caption":"Enter Allergy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"AllergyTitle","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboAllergyTitle.selectedItem.allergy","targetProperty":"dataValue"}, {}]
}]
}],
AllergyDescriptionEditor1: ["wm.LargeTextArea", {"caption":"Allergy Description","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"80px","emptyValue":"emptyString","formField":"AllergyDescription","height":"80px","readonly":true,"width":"90%"}, {}],
AllergyReactionEditor1: ["wm.Text", {"caption":"Allergic Reaction","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"AllergyReaction","height":"26px","readonly":true,"width":"90%"}, {}],
AllergyStartEditor1: ["wm.Date", {"caption":"Date Onset","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"AllergyStart","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
AllergyResolvedEditor1: ["wm.Date", {"caption":"Date Resolved","captionSize":"140px","desktopHeight":"26px","emptyValue":"null","formField":"AllergyResolved","height":"26px","readonly":true,"width":"90%"}, {}],
AllergyCodeEditor1: ["wm.Text", {"caption":"AllergyCode","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"AllergyCode","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
tenantidEditor4: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
cboProblemAllergies: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor5: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemAllergies.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
allergiesLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"allergiesLiveForm1","operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton4: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"allergiesLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"allergiesLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton4: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"allergiesLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton4: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"allergiesLiveForm1EditPanel.beginDataInsert"}],
updateButton4: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"allergiesLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"allergiesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton4: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"allergiesLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"allergiesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerMedications: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Meds","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
medicationsLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
medicationsGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Medications"}, {}, {
medicationsDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"MedicationID","title":"MedicationID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"MedicationTitle","title":"Medication Name","width":"253px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"MedicationDateFilled","title":"Date Filled","width":"93px","align":"left","formatFunc":"wm_date_formatter","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"MedicationRefillsLeft","title":"Refills Left","width":"80px","align":"left","formatFunc":"","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"MedicationNextRefillDate","title":"Next Refill Date","width":"120px","align":"left","formatFunc":"wm_date_formatter","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"relMedicationStatus.MedicationStatus","title":"Status","width":"79px","align":"left","formatFunc":"","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"MedicationDirection","title":"MedicationDirection","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"MedicationQuantity","title":"MedicationQuantity","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"MedicationPharmacy","title":"MedicationPharmacy","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"MedicationNotes","title":"MedicationNotes","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"MedicationExpirationDate","title":"MedicationExpirationDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"relMedicationStatus.MedicationStatusID","title":"MedicationStatusID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Medication Name: \" + ${MedicationTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date Filled: \" + wm.List.prototype.dateFormatter({}, null,null,null,${MedicationDateFilled}) + \"</div>\"\n+ \"<div class='MobileRow'>Next Refill Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${MedicationNextRefillDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${relMedicationStatus.MedicationStatus} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"ProblemTitle","title":"Problem","width":"149px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false}],"dsType":"com.phr.data.Medications","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"medicationsLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
ExportMeds: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportMeds"}]
}],
medicationsDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"322px","title":"Details"}, {}, {
medicationsLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"290px","horizontalAlign":"center","layoutKind":"left-to-right","readonly":true,"verticalAlign":"top"}, {"onCancelEdit":"medicationReset","onDeleteData":"medicationReset","onSuccess":"medicationsLiveVariable1","onSuccess1":"serviceMedicationListVariable","onSuccess2":"medicationReset"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"medicationsDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
MedicationIDEditor1: ["wm.Number", {"caption":"MedicationID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"MedicationID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
panel13: ["wm.Panel", {"height":"288px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel24: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"90%"}, {}, {
cboMedicationTitle: ["wm.SelectMenu", {"caption":"Medication Name","captionSize":"140px","dataType":"com.phr.data.output.GetMedicationListRtnType","dataValue":undefined,"defaultInsert":"","desktopHeight":"26px","displayField":"medication","formField":"MedicationTitle","height":"26px","readonly":true,"width":"100%"}, {"onfocus":"cboMedicationChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceMedicationListVariable","targetProperty":"dataSet"}, {}]
}]
}],
btnAddMedication: ["wm.Button", {"caption":"Add to List","desktopHeight":"24px","height":"24px","margin":"4","showing":false,"width":"100px"}, {"onclick":"btnAddMedicationClick"}]
}],
MedicationTitleEditor1: ["wm.Text", {"caption":"Enter Medication","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"MedicationTitle","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboMedicationTitle.selectedItem.medication","targetProperty":"dataValue"}, {}]
}]
}],
relMedicationStatusLookup1: ["wm.Lookup", {"caption":"Status","captionSize":"140px","dataType":"com.phr.data.LutMedicationStatus","dataValue":undefined,"desktopHeight":"26px","displayField":"MedicationStatus","formField":"relMedicationStatus","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
MedicationDirectionEditor1: ["wm.Text", {"caption":"Directions","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"MedicationDirection","height":"26px","readonly":true,"width":"90%"}, {}],
MedicationQuantityEditor1: ["wm.Number", {"caption":"Quantity Given","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"MedicationQuantity","height":"26px","readonly":true,"width":"90%"}, {}],
MedicationRefillsLeftEditor1: ["wm.Number", {"caption":"Refills Left","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"MedicationRefillsLeft","height":"26px","readonly":true,"width":"90%"}, {}],
MedicationDateFilledEditor1: ["wm.Date", {"caption":"Date Filled","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"MedicationDateFilled","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
MedicationNextRefillDateEditor1: ["wm.Date", {"caption":"Next Refill Date","captionSize":"140px","defaultInsert":"","desktopHeight":"26px","emptyValue":"null","formField":"MedicationNextRefillDate","height":"26px","readonly":true,"width":"90%"}, {}],
MedicationExpirationDateEditor1: ["wm.Date", {"caption":"Expiration Date","captionSize":"140px","desktopHeight":"26px","emptyValue":"null","formField":"MedicationExpirationDate","height":"26px","readonly":true,"width":"90%"}, {}]
}],
userIDEditor5: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
panel14: ["wm.Panel", {"height":"232px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
MedicationPharmacyEditor1: ["wm.Text", {"caption":"Pharmacy","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"MedicationPharmacy","height":"26px","readonly":true,"width":"90%"}, {}],
MedicationNotesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"120px","emptyValue":"emptyString","formField":"MedicationNotes","height":"120px","readonly":true,"width":"90%"}, {}],
cboProblemMeds: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
medicationsLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"medicationsLiveForm1","operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton3: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"medicationsLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"medicationsLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton3: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"medicationsLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton3: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"medicationsLiveForm1EditPanel.beginDataInsert"}],
updateButton3: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"medicationsLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"medicationsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton3: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"medicationsLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"medicationsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
tenantidEditor3: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
ProblemTitleEditor6: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemMeds.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}]
}],
layerLaboratory: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Labs","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
laboratoryLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
laboratoryGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Laboratory"}, {}, {
laboratoryDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"LaboratoryID","title":"LaboratoryID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"LaboratoryPanel","title":"LaboratoryPanel","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"LaboratoryTest","title":"Laboratory Test","width":"294px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"LaboratoryDate","title":"Test Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"LaboratoryResult","title":"Test Result","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"LaboratoryRefRange","title":"LaboratoryRefRange","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"LaboratoryNotes","title":"Laboratory Flag","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Laboratory Test: \" + ${LaboratoryTest} + \"</div>\"\n+ \"<div class='MobileRow'>Test Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${LaboratoryDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Test Result: \" + ${LaboratoryResult} + \"</div>\"\n+ \"<div class='MobileRow'>Flag: \" + ${relLaboratoryFlag.LaboratoryFlag} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"relLaboratoryFlag.LaboratoryFlagID","title":"RelLaboratoryFlag.LaboratoryFlagID","width":"90px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"relLaboratoryFlag.LaboratoryFlag","title":"Flag","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"129px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false}],"dsType":"com.phr.data.Laboratory","height":"100%","hint":"Double Click to Graph It","margin":"4"}, {"onCellDblClick":"dialogLabsChart.show","onCellDblClick1":"serviceLabsGraph"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"laboratoryLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
panel20: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblLabsGraph: ["wm.Label", {"align":"left","caption":"Graph It","height":"25px","hint":"Click a Lab Test Name First","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"dialogLabsChart.show","onclick1":"serviceLabsGraph"}],
ExportLabs1: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportLabs"}]
}]
}],
laboratoryDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"298px","title":"Details"}, {}, {
laboratoryLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"266px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onCancelEdit":"laboratoryReset","onDeleteData":"laboratoryReset","onSuccess":"laboratoryLiveVariable1","onSuccess1":"serviceLaboratoryListVariable","onSuccess2":"laboratoryReset"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"laboratoryDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
LaboratoryIDEditor1: ["wm.Number", {"caption":"LaboratoryID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"LaboratoryID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
panel25: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"90%"}, {}, {
cboLaboratoryTitle: ["wm.SelectMenu", {"caption":"Laboratory Test","captionSize":"140px","dataType":"com.phr.data.output.GetLabsListRtnType","dataValue":undefined,"defaultInsert":"","desktopHeight":"26px","displayField":"lab","formField":"LaboratoryTest","height":"26px","readonly":true,"width":"100%"}, {"onfocus":"cboLaboratoryChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceLaboratoryListVariable","targetProperty":"dataSet"}, {}]
}]
}],
btnAddLaboratory: ["wm.Button", {"caption":"Add to List","desktopHeight":"24px","height":"24px","margin":"4","showing":false,"width":"100px"}, {"onclick":"btnAddLaboratoryClick"}]
}],
LaboratoryTestEditor1: ["wm.Text", {"caption":"Enter Laboratory","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"LaboratoryTest","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboLaboratoryTitle.selectedItem.lab","targetProperty":"dataValue"}, {}]
}]
}],
userIDEditor6: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
LaboratoryDateEditor1: ["wm.Date", {"caption":"Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"LaboratoryDate","height":"26px","readonly":true,"required":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
LaboratoryResultEditor1: ["wm.Text", {"caption":"Test Result","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"LaboratoryResult","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
LaboratoyFlagEditor1: ["wm.Lookup", {"caption":"Flag","captionSize":"140px","dataType":"com.phr.data.LutLaboratoryFlag","dataValue":undefined,"desktopHeight":"26px","displayField":"LaboratoryFlag","formField":"relLaboratoryFlag","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"LaboratoyFlagEditor1.liveVariable","targetProperty":"dataSet"}, {}]
}]
}],
LaboratoryRefRangeEditor1: ["wm.Text", {"caption":"Reference Range","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"LaboratoryRefRange","height":"26px","readonly":true,"width":"90%"}, {}],
LaboratoryPanelEditor1: ["wm.Text", {"caption":"Laboratory Panel","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"LaboratoryPanel","height":"26px","readonly":true,"width":"90%"}, {}],
LaboratoryNotesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"50px","emptyValue":"emptyString","formField":"LaboratoryNotes","height":"50px","readonly":true,"width":"90%"}, {}],
tenantidEditor5: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
cboProblemLabs: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor7: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemLabs.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
laboratoryLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"laboratoryLiveForm1","operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton5: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"laboratoryLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"laboratoryLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton5: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"laboratoryLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton5: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"laboratoryLiveForm1EditPanel.beginDataInsert"}],
updateButton5: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"laboratoryLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"laboratoryLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton5: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"laboratoryLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"laboratoryLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerRadiology: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Rads","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
radiologyLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
radiologyGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Radiology"}, {}, {
radiologyDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"RadiologyID","title":"RadiologyID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"RadiologyExam","title":"Radiology Exam","width":"315px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"RadiologyDate","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"RadiologyResult","title":"RadiologyResult","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"RadiologyNotes","title":"RadiologyNotes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Radiology Exam: \" + ${RadiologyExam} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${RadiologyDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Flag: \" + ${relRadiologyFlag.RadiologyFlag} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"relRadiologyFlag.RadiologyFlagID","title":"RelRadiologyFlag.RadiologyFlagID","width":"114px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"relRadiologyFlag.RadiologyFlag","title":"Flag","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"209px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"296px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false}],"dsType":"com.phr.data.Radiology","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"radiologyLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
ExportRads: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportRads"}]
}],
radiologyDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"270px","title":"Details"}, {}, {
radiologyLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"238px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"radiologyLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"radiologyDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
RadiologyIDEditor1: ["wm.Number", {"caption":"RadiologyID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"RadiologyID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
userIDEditor7: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
RadiologyExamEditor1: ["wm.Text", {"caption":"Radiology Exam","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"RadiologyExam","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
RadiologyFlagEditor1: ["wm.Lookup", {"caption":"Flag","captionSize":"140px","dataType":"com.phr.data.LutRadiologyFlag","dataValue":undefined,"desktopHeight":"26px","displayField":"RadiologyFlag","formField":"relRadiologyFlag","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"RadiologyFlagEditor1.liveVariable","targetProperty":"dataSet"}, {}]
}]
}],
RadiologyResultEditor1: ["wm.LargeTextArea", {"caption":"Radiology Result","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"50px","emptyValue":"emptyString","formField":"RadiologyResult","height":"50px","readonly":true,"width":"90%"}, {}],
RadiologyDateEditor1: ["wm.Date", {"caption":"Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"RadiologyDate","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
tenantidEditor6: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
RadiologyNotesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"50px","emptyValue":"emptyString","formField":"RadiologyNotes","height":"50px","readonly":true,"width":"90%"}, {}],
cboProblemRads: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor8: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemRads.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
radiologyLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"radiologyLiveForm1","operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton6: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"radiologyLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"radiologyLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton6: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"radiologyLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton6: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"radiologyLiveForm1EditPanel.beginDataInsert"}],
updateButton6: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"radiologyLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"radiologyLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton6: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"radiologyLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"radiologyLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerImmunization: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Shots","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
immunizationLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
immunizationGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Immunization"}, {}, {
immunizationDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"ImmunizationID","title":"ImmunizationID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ImmunizationName","title":"Immunization Name","width":"289px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ImmunizationDate","title":"Date","width":"121px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ImmunizationNextDue","title":"Next Due Date","width":"128px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"ImmunizationNotes","title":"ImmunizationNotes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Immunization Name: \" + ${ImmunizationName} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${ImmunizationDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Next Due Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${ImmunizationNextDue}) + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"178px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false}],"dsType":"com.phr.data.Immunization","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"immunizationLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
ExportShots: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportShots"}]
}],
immunizationDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"266px","title":"Details"}, {}, {
immunizationLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"234px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"immunizationLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"immunizationDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
ImmunizationIDEditor1: ["wm.Number", {"caption":"ImmunizationID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"ImmunizationID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
ImmunizationNameEditor1: ["wm.Text", {"caption":"Immunization Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"ImmunizationName","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
userIDEditor8: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
ImmunizationDateEditor1: ["wm.Date", {"caption":"Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"ImmunizationDate","height":"26px","readonly":true,"required":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
ImmunizationNextDueEditor1: ["wm.Date", {"caption":"Next Due Date","captionSize":"140px","defaultInsert":"","desktopHeight":"26px","emptyValue":"null","formField":"ImmunizationNextDue","height":"26px","readonly":true,"width":"90%"}, {}],
ImmunizationNotesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"ImmunizationNotes","readonly":true,"width":"90%"}, {}],
tenantidEditor7: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
cboProblemShots: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor9: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemShots.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
immunizationLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"immunizationLiveForm1","operationPanel":"operationPanel8","savePanel":"savePanel8"}, {}, {
savePanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton8: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"immunizationLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"immunizationLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton8: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"immunizationLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton8: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"immunizationLiveForm1EditPanel.beginDataInsert"}],
updateButton8: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"immunizationLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"immunizationLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton8: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"immunizationLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"immunizationLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerVitals: ["wm.Layer", {"borderColor":"","caption":"Vitals","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
vitalsLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
vitalsGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Vitals"}, {}, {
vitalsDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"VitalsID","title":"VitalsID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"relVitalsType.VitalsType","title":"Vitals Name","width":"196px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"VitalsDate","title":"Date","width":"81px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"VitalsMeasurement","title":"Measurement","width":"173px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"VitalsNotes","title":"VitalsNotes","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"relVitalsType.VitalsTypeID","title":"VitalsTypeID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Vitals Name: \" + ${relVitalsType.VitalsType} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${VitalsDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Measurement: \" + ${VitalsMeasurement} + \"</div>\"\n+ \"<div class='MobileRow'>Flag: \" + ${relVitalsFlag.VitalsFlag} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"relVitalsFlag.VitalsFlagID","title":"RelVitalsFlag.VitalsFlagID","width":"117px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"relVitalsFlag.VitalsFlag","title":"Flag","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"159px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false}],"dsType":"com.phr.data.Vitals","height":"100%","hint":"Double Click to Graph It","margin":"4"}, {"onCellDblClick":"dialogVitalsChart.show","onCellDblClick1":"serviceVitalsGraph"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"vitalsLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
panel19: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblGraphVitals: ["wm.Label", {"align":"left","caption":"Graph It","height":"25px","hint":"Click a Vital Name First","padding":"4","styles":{"textDecoration":"","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"dialogVitalsChart.show","onclick1":"serviceVitalsGraph"}],
ExportVitals1: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportVitals"}]
}]
}],
vitalsDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"292px","title":"Details"}, {}, {
vitalsLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"260px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"vitalsLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vitalsDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
VitalsIDEditor1: ["wm.Number", {"caption":"VitalsID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"VitalsID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
relVitalsTypeLookup1: ["wm.Lookup", {"caption":"Vital Name","captionSize":"140px","dataType":"com.phr.data.LutVitalsType","dataValue":undefined,"desktopHeight":"26px","displayField":"VitalsType","formField":"relVitalsType","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
VitalsDateEditor1: ["wm.Date", {"caption":"Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"VitalsDate","height":"26px","readonly":true,"required":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
VitalsMeasurementEditor1: ["wm.Text", {"caption":"Measurement","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"VitalsMeasurement","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
relVitalsFlagLookup2: ["wm.Lookup", {"caption":"Flag","captionSize":"140px","dataType":"com.phr.data.LutVitalsFlag","dataValue":undefined,"desktopHeight":"26px","displayField":"VitalsFlag","formField":"relVitalsFlag","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"relVitalsFlagLookup2.liveVariable","targetProperty":"dataSet"}, {}]
}]
}],
VitalsNotesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"VitalsNotes","readonly":true,"width":"90%"}, {}],
tenantidEditor8: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
UserIDEditor1: ["wm.Text", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"UserID","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
cboProblemVitals: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor10: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemVitals.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
vitalsLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"vitalsLiveForm1","operationPanel":"operationPanel9","savePanel":"savePanel9"}, {}, {
savePanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton9: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"vitalsLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vitalsLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton9: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"vitalsLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton9: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"vitalsLiveForm1EditPanel.beginDataInsert"}],
updateButton9: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"vitalsLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vitalsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton9: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"vitalsLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"vitalsLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerMyAccount: ["wm.Layer", {"borderColor":"","caption":"Account","height":"518px","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top","width":"768px"}, {}, {
userLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
userDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"FirstName","title":"FirstName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"LastName","title":"LastName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>UserID: \" + ${UserID} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"Role","title":"Role","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"Email","title":"Email","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.phr.data.User","height":"35px","localizationStructure":{},"margin":"4","minDesktopHeight":60,"noHeader":true,"selectFirstRow":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
userLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"userLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
tenantidEditor11: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
FirstNameEditor1: ["wm.Text", {"caption":"First Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"FirstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
LastNameEditor1: ["wm.Text", {"caption":"Last Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"LastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
EmailEditor1: ["wm.Text", {"caption":"Email","captionSize":"140px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","password":true,"readonly":true,"required":true,"width":"100%"}, {}],
userLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"userLiveForm1","operationPanel":"operationPanel11","savePanel":"savePanel11"}, {}, {
savePanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton11: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton11: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton11: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.beginDataInsert"}],
updateButton11: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton11: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
layerAppt: ["wm.Layer", {"borderColor":"","caption":"Appt","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
appointmentLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
appointmentGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Appointment"}, {}, {
appointmentDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"AppointmentID","title":"AppointmentID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"AppointmentTitle","title":"Appointment","width":"301px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"AppointmentDescription","title":"AppointmentDescription","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"AppointmentDate","title":"Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"AppointmentTime","title":"Time","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"useLocalTime":true,"dateType":"time"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"relAppointmetnStatus.AppointmentStatus","title":"Status","width":"102px","align":"left","formatFunc":"","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"150px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"relAppointmetnStatus.AppointmentStatusid","title":"AppointmentStatusid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Appointment: \" + ${AppointmentTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${AppointmentDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Time: \" + wm.List.prototype.dateFormatter({\"useLocalTime\":true,\"dateType\":\"time\"}, null,null,null,${AppointmentTime}) + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${relAppointmetnStatus.AppointmentStatus} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.phr.data.Appointment","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"appointmentLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
ExportAppt: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportAppt"}]
}],
appointmentDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"292px","title":"Details"}, {}, {
appointmentLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"260px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"appointmentLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"appointmentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
AppointmentIDEditor1: ["wm.Number", {"caption":"AppointmentID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"AppointmentID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
AppointmentTitleEditor1: ["wm.Text", {"caption":"Appointment","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"AppointmentTitle","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
AppointmentDescriptionEditor1: ["wm.LargeTextArea", {"caption":"Description","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"AppointmentDescription","readonly":true,"width":"90%"}, {}],
AppointmentDateEditor1: ["wm.Date", {"caption":"Date","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"AppointmentDate","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
AppointmentTimeEditor1: ["wm.Time", {"caption":"Time","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"AppointmentTime","height":"26px","readonly":true,"width":"90%"}, {}],
tenantidEditor2: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
UserIDEditor4: ["wm.Number", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"UserID","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
relAppointmetnStatusLookup1: ["wm.Lookup", {"caption":"Status","captionSize":"140px","dataType":"com.phr.data.LutAppointmentStatus","dataValue":undefined,"desktopHeight":"26px","displayField":"AppointmentStatus","formField":"relAppointmetnStatus","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
cboProblemAppt: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor4: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemAppt.selectedItem.problem","targetProperty":"dataValue"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
appointmentLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"appointmentLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"appointmentLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"appointmentLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"appointmentLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"appointmentLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"appointmentLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"appointmentLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"appointmentLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"appointmentLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
layerDoc: ["wm.Layer", {"borderColor":"","caption":"Doc","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
documentsLivePanel2: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
documentsGridPanel: ["wm.FancyPanel", {"innerHorizontalAlign":"right","minHeight":220,"title":"Documents"}, {}, {
documentsDojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"DocumentID","title":"DocumentID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"DocumentTitle","title":"Document Name","width":"262px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"DocumentDescription","title":"DocumentDescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"DocumentDate","title":"Date","width":"78px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"relDocumetType.DocumentType","title":"Type","width":"123px","align":"left","formatFunc":"","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ProblemTitle","title":"Problem","width":"155px","align":"left","formatFunc":"","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Document Name: \" + ${DocumentTitle} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({\"formatLength\":\"short\",\"dateType\":\"date\"}, null,null,null,${DocumentDate}) + \"</div>\"\n+ \"<div class='MobileRow'>Type: \" + ${relDocumetType.DocumentType} + \"</div>\"\n+ \"<div class='MobileRow'>Problem: \" + ${ProblemTitle} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"relDocumetType.DocumentTypeID","title":"RelDocumetType.DocumentTypeID","width":"94px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"Attachments","title":"Files","width":"100%","align":"left","formatFunc":"wm_button_formatter","fieldType":"dojox.grid.cells.Select","editorProps":{"restrictValues":true},"isCustomField":true,"mobileColumn":false}],"height":"100%","hint":"Double Click to View Attachments","margin":"4"}, {"onCellDblClick":"designableDialog1.show","onGridButtonClick":"designableDialog1.show"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
panel26: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
AttachDocs1: ["wm.Label", {"align":"left","caption":"Attachments","height":"25px","hint":"Select a Document First Then Click Attachments","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"designableDialog1.show"}],
ExportDocs1: ["wm.Label", {"align":"right","caption":"Export","height":"25px","padding":"4","styles":{"textDecoration":"underline","backgroundColor":"","color":"#3879eb","fontWeight":"bold"},"width":"100%"}, {"onclick":"btnExportDocs"}]
}]
}],
documentsDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"281px","title":"Details"}, {}, {
documentsLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"234px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"documentsLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsDojoGrid1.selectedItem","targetProperty":"dataSet"}, {}]
}],
DocumentTitleEditor1: ["wm.Text", {"caption":"Document Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"DocumentTitle","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
DocumentDateEditor2: ["wm.Date", {"caption":"Date","captionSize":"140px","desktopHeight":"26px","emptyValue":"null","formField":"DocumentDate","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
DocsType1: ["wm.Lookup", {"caption":"Document Type","captionSize":"140px","dataType":"com.phr.data.LutDocumentType","dataValue":undefined,"desktopHeight":"26px","displayField":"DocumentType","formField":"relDocumetType","height":"26px","readonly":true,"required":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"DocsType1.liveVariable","targetProperty":"dataSet"}, {}]
}]
}],
DocumentDescriptionEditor2: ["wm.LargeTextArea", {"caption":"Description","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"DocumentDescription","readonly":true,"width":"90%"}, {}],
cboProblemDoc: ["wm.SelectMenu", {"caption":"Problem","captionSize":"140px","dataType":"com.phr.data.output.GetProblemListRtnType","dataValue":undefined,"desktopHeight":"26px","displayField":"problem","formField":"ProblemTitle","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceProblemListVariable1","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.problem","targetProperty":"defaultInsert"}, {}]
}]
}],
ProblemTitleEditor12: ["wm.Text", {"caption":"Problem","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ProblemTitle","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cboProblemDoc.selectedItem.problem","targetProperty":"dataValue"}, {}]
}]
}],
DocumentIDEditor3: ["wm.Number", {"caption":"DocumentID","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"DocumentID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
tenantidEditor13: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
UserIDEditor5: ["wm.Number", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"UserID","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"defaultInsert"}, {}]
}]
}],
documentsLiveForm2EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"documentsLiveForm2","operationPanel":"operationPanel13","savePanel":"savePanel13"}, {}, {
savePanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton13: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"documentsLiveForm2EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton13: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"documentsLiveForm2EditPanel.cancelEdit"}]
}],
operationPanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton13: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"documentsLiveForm2EditPanel.beginDataInsert"}],
updateButton13: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"documentsLiveForm2EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton13: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"documentsLiveForm2EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
filesDBForm1: ["wm.DBForm", {"desktopHeight":"15px","fitToContentHeight":true,"formBehavior":"insertOnly","height":"15px","isCompositeKey":false,"type":"com.phr.data.Files"}, {"onEnterKeyPress":"filesDBForm1.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"filesDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"filesDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire2: ["wm.Wire", {"source":"filesDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}]
}],
FilesIDEditor2: ["wm.Number", {"caption":"FilesID","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"FilesID","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
nameEditor2: ["wm.Text", {"caption":"Name","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"name","height":"26px","required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload1.variable.name","targetProperty":"dataValue"}, {}]
}]
}],
pathEditor2: ["wm.Text", {"caption":"Path","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"path","height":"26px","required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload1.variable.path","targetProperty":"dataValue"}, {}]
}]
}],
tenantidEditor14: ["wm.Number", {"caption":"Tenantid","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","showing":false,"width":"100%"}, {}],
UserIDEditor6: ["wm.Number", {"caption":"UserID","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"UserID","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lblUser.caption","targetProperty":"dataValue"}, {}]
}]
}],
DocumentIDEditor4: ["wm.Number", {"caption":"DocumentID","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"DocumentID","height":"26px","required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documentsLiveForm2.dataOutput.DocumentID","targetProperty":"dataValue"}, {}]
}]
}],
filesDBFormButtonPanel1: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
filesDBFormSaveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"filesDBForm1.saveData","onclick1":"filesDBForm1.editNewObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${filesDBForm.invalid} || !${filesDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
filesDBFormCancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"filesDBForm1.cancelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"!${filesDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2013 [MicroHealth, LLC]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';