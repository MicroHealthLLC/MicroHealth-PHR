
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Immunization
 *  07/14/2013 11:00:49
 * 
 */
public class Immunization {

    private Integer ImmunizationID;
    private String ImmunizationName;
    private Date ImmunizationDate;
    private Date ImmunizationNextDue;
    private String ImmunizationNotes;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;

    public Integer getImmunizationID() {
        return ImmunizationID;
    }

    public void setImmunizationID(Integer ImmunizationID) {
        this.ImmunizationID = ImmunizationID;
    }

    public String getImmunizationName() {
        return ImmunizationName;
    }

    public void setImmunizationName(String ImmunizationName) {
        this.ImmunizationName = ImmunizationName;
    }

    public Date getImmunizationDate() {
        return ImmunizationDate;
    }

    public void setImmunizationDate(Date ImmunizationDate) {
        this.ImmunizationDate = ImmunizationDate;
    }

    public Date getImmunizationNextDue() {
        return ImmunizationNextDue;
    }

    public void setImmunizationNextDue(Date ImmunizationNextDue) {
        this.ImmunizationNextDue = ImmunizationNextDue;
    }

    public String getImmunizationNotes() {
        return ImmunizationNotes;
    }

    public void setImmunizationNotes(String ImmunizationNotes) {
        this.ImmunizationNotes = ImmunizationNotes;
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

}
