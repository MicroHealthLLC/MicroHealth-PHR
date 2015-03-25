
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Radiology
 *  07/14/2013 10:59:51
 * 
 */
public class Radiology {

    private Integer RadiologyID;
    private String RadiologyExam;
    private String RadiologyResult;
    private Date RadiologyDate;
    private Integer tenantid;
    private String RadiologyNotes;
    private Integer UserID;
    private String ProblemTitle;
    private LutRadiologyFlag relRadiologyFlag;

    public Integer getRadiologyID() {
        return RadiologyID;
    }

    public void setRadiologyID(Integer RadiologyID) {
        this.RadiologyID = RadiologyID;
    }

    public String getRadiologyExam() {
        return RadiologyExam;
    }

    public void setRadiologyExam(String RadiologyExam) {
        this.RadiologyExam = RadiologyExam;
    }

    public String getRadiologyResult() {
        return RadiologyResult;
    }

    public void setRadiologyResult(String RadiologyResult) {
        this.RadiologyResult = RadiologyResult;
    }

    public Date getRadiologyDate() {
        return RadiologyDate;
    }

    public void setRadiologyDate(Date RadiologyDate) {
        this.RadiologyDate = RadiologyDate;
    }

    public Integer getTenantid() {
        return tenantid;
    }

    public void setTenantid(Integer tenantid) {
        this.tenantid = tenantid;
    }

    public String getRadiologyNotes() {
        return RadiologyNotes;
    }

    public void setRadiologyNotes(String RadiologyNotes) {
        this.RadiologyNotes = RadiologyNotes;
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

    public LutRadiologyFlag getRelRadiologyFlag() {
        return relRadiologyFlag;
    }

    public void setRelRadiologyFlag(LutRadiologyFlag relRadiologyFlag) {
        this.relRadiologyFlag = relRadiologyFlag;
    }

}
