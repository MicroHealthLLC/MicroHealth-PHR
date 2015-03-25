dojo.declare("SystemSetup", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

SystemSetup.widgets = {
lutappointmentstatusLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutAppointmentStatus"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutAppointmentStatus","view":[{"caption":"AppointmentStatusid","sortable":true,"dataIndex":"AppointmentStatusid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"AppointmentStatus","sortable":true,"dataIndex":"AppointmentStatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutdocumenttypeLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutDocumentType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutDocumentType","view":[{"caption":"DocumentTypeID","sortable":true,"dataIndex":"DocumentTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"DocumentType","sortable":true,"dataIndex":"DocumentType","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutlaboratoryflagLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutLaboratoryFlag"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutLaboratoryFlag","view":[{"caption":"LaboratoryFlagID","sortable":true,"dataIndex":"LaboratoryFlagID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"LaboratoryFlag","sortable":true,"dataIndex":"LaboratoryFlag","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutmedicationstatusLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutMedicationStatus"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutMedicationStatus","view":[{"caption":"MedicationStatusID","sortable":true,"dataIndex":"MedicationStatusID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"MedicationStatus","sortable":true,"dataIndex":"MedicationStatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutproblemtypeLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutProblemType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutProblemType","view":[{"caption":"ProblemTypeID","sortable":true,"dataIndex":"ProblemTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"ProblemType","sortable":true,"dataIndex":"ProblemType","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutradiologyflagLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutRadiologyFlag"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutRadiologyFlag","view":[{"caption":"RadiologyFlagID","sortable":true,"dataIndex":"RadiologyFlagID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"RadiologyFlag","sortable":true,"dataIndex":"RadiologyFlag","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutvitalsflagLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutVitalsFlag"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutVitalsFlag","view":[{"caption":"VitalsFlagID","sortable":true,"dataIndex":"VitalsFlagID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"VitalsFlag","sortable":true,"dataIndex":"VitalsFlag","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
navHome: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
userListVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUser","service":"PHR"}, {}, {
input: ["wm.ServiceInput", {"type":"getUserInputs"}, {}]
}],
lutvitalstypeLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutVitalsType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutVitalsType","view":[{"caption":"VitalsTypeID","sortable":true,"dataIndex":"VitalsTypeID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"VitalsType","sortable":true,"dataIndex":"VitalsType","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
lutcareplanstatusLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.LutCarePlanStatus"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.LutCarePlanStatus","view":[{"caption":"CarePlanStatsID","sortable":true,"dataIndex":"CarePlanStatsID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"CarePlanStatus","sortable":true,"dataIndex":"CarePlanStatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
userLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.User"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.phr.data.User","view":[{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"FirstName","sortable":true,"dataIndex":"FirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"LastName","sortable":true,"dataIndex":"LastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Role","sortable":true,"dataIndex":"Role","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"Email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"height":"1200px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
HeaderLogo: ["wm.Picture", {"height":"78px","source":"resources/images/logos/customLogo.png","width":"305px"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"100%"}, {}],
btnHome: ["wm.Button", {"caption":"Home","margin":"4"}, {"onclick":"navHome"}]
}],
panel1: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
tabLayers1: ["wm.TabLayers", {"roles":["Administrator"]}, {}, {
layerCarePlanStatus: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Care Plan","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutcareplanstatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutcareplanstatusDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutcareplanstatusDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"CarePlanStatsID","title":"CarePlanStatsID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"CarePlanStatus","title":"Care Plan Status","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Care Plan Status: \" + ${CarePlanStatus} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutCarePlanStatus","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutcareplanstatusLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutcareplanstatusGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutcareplanstatusNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutcareplanstatusDojoGrid.addEmptyRow"}]
}]
}]
}],
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Appt","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutappointmentstatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutappointmentstatusDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutappointmentstatusDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"AppointmentStatusid","title":"AppointmentStatusid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"AppointmentStatus","title":"Appointment Status","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Appointment Status: \" + ${AppointmentStatus} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutAppointmentStatus","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutappointmentstatusLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutappointmentstatusGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutappointmentstatusNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutappointmentstatusDojoGrid.addEmptyRow"}]
}]
}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Docs","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutdocumenttypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutdocumenttypeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutdocumenttypeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"DocumentTypeID","title":"DocumentTypeID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"DocumentType","title":"Document Type","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Document Type: \" + ${DocumentType} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutDocumentType","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutdocumenttypeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutdocumenttypeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutdocumenttypeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutdocumenttypeDojoGrid.addEmptyRow"}]
}]
}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Labs","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutlaboratoryflagLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutlaboratoryflagDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutlaboratoryflagDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"LaboratoryFlagID","title":"LaboratoryFlagID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"LaboratoryFlag","title":"Laboratory Flag","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Laboratory Flag: \" + ${LaboratoryFlag} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutLaboratoryFlag","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutlaboratoryflagLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutlaboratoryflagGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutlaboratoryflagNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutlaboratoryflagDojoGrid.addEmptyRow"}]
}]
}]
}],
layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Meds","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutmedicationstatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutmedicationstatusDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutmedicationstatusDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"MedicationStatusID","title":"MedicationStatusID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"MedicationStatus","title":"Medication Status","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Medication Status: \" + ${MedicationStatus} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutMedicationStatus","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutmedicationstatusLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutmedicationstatusGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutmedicationstatusNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutmedicationstatusDojoGrid.addEmptyRow"}]
}]
}]
}],
layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Problems","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutproblemtypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutproblemtypeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutproblemtypeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"ProblemTypeID","title":"ProblemTypeID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"ProblemType","title":"Problem Type","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Problem Type: \" + ${ProblemType} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutProblemType","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutproblemtypeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutproblemtypeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutproblemtypeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutproblemtypeDojoGrid.addEmptyRow"}]
}]
}]
}],
layer6: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Rads","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutradiologyflagLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutradiologyflagDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutradiologyflagDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"RadiologyFlagID","title":"RadiologyFlagID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"RadiologyFlag","title":"Radiology Flag","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Radiology Flag: \" + ${RadiologyFlag} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutRadiologyFlag","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutradiologyflagLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutradiologyflagGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutradiologyflagNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutradiologyflagDojoGrid.addEmptyRow"}]
}]
}]
}],
layer7: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Vitals","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lutvitalsflagLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutvitalsflagDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutvitalsflagDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"VitalsFlagID","title":"VitalsFlagID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"VitalsFlag","title":"Vitals Flag","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Vitals Flag: \" + ${VitalsFlag} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutVitalsFlag","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutvitalsflagLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutvitalsflagGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutvitalsflagNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutvitalsflagDojoGrid.addEmptyRow"}]
}],
lutvitalstypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutvitalstypeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
lutvitalstypeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"VitalsTypeID","title":"VitalsTypeID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"VitalsType","title":"Vitals Type","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Vitals Type: \" + ${VitalsType} + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.phr.data.LutVitalsType","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lutvitalstypeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
lutvitalstypeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
lutvitalstypeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lutvitalstypeDojoGrid.addEmptyRow"}]
}]
}]
}]
}],
layer8: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Users","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
userLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
userGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"User"}, {}, {
userDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"UserID","title":"UserID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"FirstName","title":"First Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"LastName","title":"Last Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"Email","title":"Email","width":"300px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"Role","title":"Role","width":"125px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>First Name: \" + ${FirstName} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${LastName} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${Email} + \"</div>\"\n+ \"<div class='MobileRow'>Role: \" + ${Role} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.phr.data.User","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"userLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
userDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"222px","title":"Details"}, {}, {
userLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"190px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"userLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
UserIDEditor1: ["wm.Number", {"caption":"UserID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"90%"}, {}],
FirstNameEditor1: ["wm.Text", {"caption":"First Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"FirstName","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
LastNameEditor1: ["wm.Text", {"caption":"Last Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"LastName","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
EmailEditor1: ["wm.Text", {"caption":"Email","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"Email","height":"26px","readonly":true,"width":"90%"}, {}],
RoleEditor1: ["wm.Text", {"caption":"Role","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"Role","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"User\"","targetProperty":"defaultInsert"}, {}]
}]
}],
tenantidEditor1: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}],
userLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"userLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"userLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

SystemSetup.prototype._cssText = '';
SystemSetup.prototype._htmlText = '';