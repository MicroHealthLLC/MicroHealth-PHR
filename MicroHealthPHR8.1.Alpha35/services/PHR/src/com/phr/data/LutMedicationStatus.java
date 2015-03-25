
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutMedicationStatus
 *  07/14/2013 11:00:14
 * 
 */
public class LutMedicationStatus {

    private Integer MedicationStatusID;
    private String MedicationStatus;
    private Set<com.phr.data.Medications> medicationss = new HashSet<com.phr.data.Medications>();

    public Integer getMedicationStatusID() {
        return MedicationStatusID;
    }

    public void setMedicationStatusID(Integer MedicationStatusID) {
        this.MedicationStatusID = MedicationStatusID;
    }

    public String getMedicationStatus() {
        return MedicationStatus;
    }

    public void setMedicationStatus(String MedicationStatus) {
        this.MedicationStatus = MedicationStatus;
    }

    public Set<com.phr.data.Medications> getMedicationss() {
        return medicationss;
    }

    public void setMedicationss(Set<com.phr.data.Medications> medicationss) {
        this.medicationss = medicationss;
    }

}
