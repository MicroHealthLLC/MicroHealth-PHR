
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Allergies
 *  07/14/2013 11:02:13
 * 
 */
public class Allergies {

    private Integer AllergyID;
    private String AllergyTitle;
    private String AllergyDescription;
    private String AllergyReaction;
    private Date AllergyStart;
    private Date AllergyResolved;
    private String AllergyCode;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;

    public Integer getAllergyID() {
        return AllergyID;
    }

    public void setAllergyID(Integer AllergyID) {
        this.AllergyID = AllergyID;
    }

    public String getAllergyTitle() {
        return AllergyTitle;
    }

    public void setAllergyTitle(String AllergyTitle) {
        this.AllergyTitle = AllergyTitle;
    }

    public String getAllergyDescription() {
        return AllergyDescription;
    }

    public void setAllergyDescription(String AllergyDescription) {
        this.AllergyDescription = AllergyDescription;
    }

    public String getAllergyReaction() {
        return AllergyReaction;
    }

    public void setAllergyReaction(String AllergyReaction) {
        this.AllergyReaction = AllergyReaction;
    }

    public Date getAllergyStart() {
        return AllergyStart;
    }

    public void setAllergyStart(Date AllergyStart) {
        this.AllergyStart = AllergyStart;
    }

    public Date getAllergyResolved() {
        return AllergyResolved;
    }

    public void setAllergyResolved(Date AllergyResolved) {
        this.AllergyResolved = AllergyResolved;
    }

    public String getAllergyCode() {
        return AllergyCode;
    }

    public void setAllergyCode(String AllergyCode) {
        this.AllergyCode = AllergyCode;
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
