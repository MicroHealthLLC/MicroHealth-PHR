
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Medications
 *  07/14/2013 11:00:14
 * 
 */
public class Medications {

    private Integer MedicationID;
    private String MedicationTitle;
    private String MedicationDirection;
    private Integer MedicationQuantity;
    private Integer MedicationRefillsLeft;
    private String MedicationPharmacy;
    private Date MedicationDateFilled;
    private Date MedicationNextRefillDate;
    private String MedicationNotes;
    private Date MedicationExpirationDate;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;
    private LutMedicationStatus relMedicationStatus;

    public Integer getMedicationID() {
        return MedicationID;
    }

    public void setMedicationID(Integer MedicationID) {
        this.MedicationID = MedicationID;
    }

    public String getMedicationTitle() {
        return MedicationTitle;
    }

    public void setMedicationTitle(String MedicationTitle) {
        this.MedicationTitle = MedicationTitle;
    }

    public String getMedicationDirection() {
        return MedicationDirection;
    }

    public void setMedicationDirection(String MedicationDirection) {
        this.MedicationDirection = MedicationDirection;
    }

    public Integer getMedicationQuantity() {
        return MedicationQuantity;
    }

    public void setMedicationQuantity(Integer MedicationQuantity) {
        this.MedicationQuantity = MedicationQuantity;
    }

    public Integer getMedicationRefillsLeft() {
        return MedicationRefillsLeft;
    }

    public void setMedicationRefillsLeft(Integer MedicationRefillsLeft) {
        this.MedicationRefillsLeft = MedicationRefillsLeft;
    }

    public String getMedicationPharmacy() {
        return MedicationPharmacy;
    }

    public void setMedicationPharmacy(String MedicationPharmacy) {
        this.MedicationPharmacy = MedicationPharmacy;
    }

    public Date getMedicationDateFilled() {
        return MedicationDateFilled;
    }

    public void setMedicationDateFilled(Date MedicationDateFilled) {
        this.MedicationDateFilled = MedicationDateFilled;
    }

    public Date getMedicationNextRefillDate() {
        return MedicationNextRefillDate;
    }

    public void setMedicationNextRefillDate(Date MedicationNextRefillDate) {
        this.MedicationNextRefillDate = MedicationNextRefillDate;
    }

    public String getMedicationNotes() {
        return MedicationNotes;
    }

    public void setMedicationNotes(String MedicationNotes) {
        this.MedicationNotes = MedicationNotes;
    }

    public Date getMedicationExpirationDate() {
        return MedicationExpirationDate;
    }

    public void setMedicationExpirationDate(Date MedicationExpirationDate) {
        this.MedicationExpirationDate = MedicationExpirationDate;
    }

    public Integer getTenantid() {
        return tenantid;
    }

    public void setTenantid(Integer tenantid) {
        this.tenantid = tenantid;
    }

    public Integer getUserID() {
        return UserID;
    }

    public void setUserID(Integer UserID) {
        this.UserID = UserID;
    }

    public String getProblemTitle() {
        return ProblemTitle;
    }

    public void setProblemTitle(String ProblemTitle) {
        this.ProblemTitle = ProblemTitle;
    }

    public LutMedicationStatus getRelMedicationStatus() {
        return relMedicationStatus;
    }

    public void setRelMedicationStatus(LutMedicationStatus relMedicationStatus) {
        this.relMedicationStatus = relMedicationStatus;
    }

}
