
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Laboratory
 *  07/14/2013 11:00:25
 * 
 */
public class Laboratory {

    private Integer LaboratoryID;
    private String LaboratoryPanel;
    private String LaboratoryTest;
    private String LaboratoryResult;
    private String LaboratoryRefRange;
    private Date LaboratoryDate;
    private String LaboratoryNotes;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;
    private LutLaboratoryFlag relLaboratoryFlag;

    public Integer getLaboratoryID() {
        return LaboratoryID;
    }

    public void setLaboratoryID(Integer LaboratoryID) {
        this.LaboratoryID = LaboratoryID;
    }

    public String getLaboratoryPanel() {
        return LaboratoryPanel;
    }

    public void setLaboratoryPanel(String LaboratoryPanel) {
        this.LaboratoryPanel = LaboratoryPanel;
    }

    public String getLaboratoryTest() {
        return LaboratoryTest;
    }

    public void setLaboratoryTest(String LaboratoryTest) {
        this.LaboratoryTest = LaboratoryTest;
    }

    public String getLaboratoryResult() {
        return LaboratoryResult;
    }

    public void setLaboratoryResult(String LaboratoryResult) {
        this.LaboratoryResult = LaboratoryResult;
    }

    public String getLaboratoryRefRange() {
        return LaboratoryRefRange;
    }

    public void setLaboratoryRefRange(String LaboratoryRefRange) {
        this.LaboratoryRefRange = LaboratoryRefRange;
    }

    public Date getLaboratoryDate() {
        return LaboratoryDate;
    }

    public void setLaboratoryDate(Date LaboratoryDate) {
        this.LaboratoryDate = LaboratoryDate;
    }

    public String getLaboratoryNotes() {
        return LaboratoryNotes;
    }

    public void setLaboratoryNotes(String LaboratoryNotes) {
        this.LaboratoryNotes = LaboratoryNotes;
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

    public LutLaboratoryFlag getRelLaboratoryFlag() {
        return relLaboratoryFlag;
    }

    public void setRelLaboratoryFlag(LutLaboratoryFlag relLaboratoryFlag) {
        this.relLaboratoryFlag = relLaboratoryFlag;
    }

}
