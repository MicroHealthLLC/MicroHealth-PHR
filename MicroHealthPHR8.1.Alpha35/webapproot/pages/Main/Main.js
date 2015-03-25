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
