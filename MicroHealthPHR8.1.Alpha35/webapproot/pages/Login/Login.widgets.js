Login.widgets = {
	phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
	loginVariable1: ["wm.LoginVariable", {}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
		input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}]
			}]
		}]
	}],
	userLiveVariable1: ["wm.LiveVariable", {"type":"com.phr.data.User"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.phr.data.User","view":[{"caption":"UserID","sortable":true,"dataIndex":"UserID","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"FirstName","sortable":true,"dataIndex":"FirstName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"LastName","sortable":true,"dataIndex":"LastName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Role","sortable":true,"dataIndex":"Role","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Email","sortable":true,"dataIndex":"Email","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
	}],
	DialogRegistration: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"390px","height":"390px","mobileHeight":"400%","noEscape":true,"noMaxify":true,"noMinify":true,"title":"New User Registration","width":"400px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"4","verticalAlign":"middle","width":"100%"}, {}, {
			panel3: ["wm.Panel", {"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				btnClose: ["wm.Button", {"caption":"X","margin":"4","width":"27px"}, {"onclick":"userDBForm.cancelEdit","onclick1":"DialogRegistration.hide"}]
			}],
			PictureLoginLogo1: ["wm.Picture", {"height":"114px","source":"resources/images/logos/customLogo.png","width":"100%"}, {}],
			userDBForm: ["wm.DBForm", {"desktopHeight":"246px","fitToContentHeight":true,"formBehavior":"insertOnly","height":"168px","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.phr.data.User"}, {"onEnterKeyPress":"userDBForm.saveData"}, {
				binding: ["wm.Binding", {}, {}, {
					wire4: ["wm.Wire", {"source":"userDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
					wire5: ["wm.Wire", {"source":"userDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
					wire: ["wm.Wire", {"source":"userDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
					wire1: ["wm.Wire", {"source":"userDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
					wire2: ["wm.Wire", {"source":"userDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
					wire3: ["wm.Wire", {"source":"userDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
				}],
				UserIDEditor1: ["wm.Number", {"caption":"UserID","captionSize":"120px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"UserID","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
				FirstNameEditor1: ["wm.Text", {"caption":"First Name","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"FirstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
				LastNameEditor1: ["wm.Text", {"caption":"Last Name","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"LastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
				usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
				passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","password":true,"readonly":true,"required":true,"width":"100%"}, {}],
				RoleEditor1: ["wm.Text", {"caption":"Role","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"Role","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"User\"","targetProperty":"dataValue"}, {}]
					}]
				}],
				tenantidEditor1: ["wm.Number", {"caption":"Tenantid","captionSize":"120px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
				EmailEditor1: ["wm.Text", {"caption":"Email","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"Email","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
				userDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					userDBFormNewButton: ["wm.Button", {"caption":"Register","margin":"4"}, {"onclick":"userDBForm.editNewObject"}],
					userDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"userDBForm.cancelEdit","onclick1":"DialogRegistration.hide"}],
					userDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onHide":"userDBForm.editNewObject","onclick":"userDBForm.saveData","onclick1":"DialogRegistration.hide"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${userDBForm.invalid} || !${userDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
	}],
	layoutBox: ["wm.Layout", {}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"border":"2","desktopHeight":"222px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"318px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":""},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
				panel2: ["wm.Panel", {"height":"98px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					PictureLoginLogo: ["wm.Picture", {"height":"114px","source":"resources/images/logos/customLogo.png","width":"343px"}, {}]
				}],
				panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"102px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					lblDemo: ["wm.Label", {"caption":"For Demonstration Only","height":"30px","padding":"4","styles":{"color":"#d02828","fontWeight":"bold","fontSize":"24px"},"width":"100%"}, {}],
					usernameInput: ["wm.Text", {"caption":"Username","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","width":"100%"}, {}],
					passwordInput: ["wm.Text", {"caption":"Password","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","password":true,"width":"100%"}, {}]
				}],
				lblRegister: ["wm.Label", {"align":"right","caption":"Register","padding":"4","styles":{"fontWeight":"bold","textDecoration":"underline","color":"#4b5bda"},"width":"100%"}, {"onclick":"DialogRegistration.show"}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"borderColor":"#000000","caption":"Login","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"loginVariable1"}]
				}]
			}]
		}]
	}]
}