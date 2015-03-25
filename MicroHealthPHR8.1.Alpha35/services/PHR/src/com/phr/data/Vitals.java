
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Vitals
 *  07/14/2013 10:59:32
 * 
 */
public class Vitals {

    private Integer VitalsID;
    private Date VitalsDate;
    private String VitalsMeasurement;
    private String VitalsNotes;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;
    private LutVitalsType relVitalsType;
    private LutVitalsFlag relVitalsFlag;

    public Integer getVitalsID() {
        return VitalsID;
    }

    public void setVitalsID(Integer VitalsID) {
        this.VitalsID = VitalsID;
    }

    public Date getVitalsDate() {
        return VitalsDate;
    }

    public void setVitalsDate(Date VitalsDate) {
        this.VitalsDate = VitalsDate;
    }

    public String getVitalsMeasurement() {
        return VitalsMeasurement;
    }

    public void setVitalsMeasurement(String VitalsMeasurement) {
        this.VitalsMeasurement = VitalsMeasurement;
    }

    public String getVitalsNotes() {
        return VitalsNotes;
    }

    public void setVitalsNotes(String VitalsNotes) {
        this.VitalsNotes = VitalsNotes;
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

    public LutVitalsType getRelVitalsType() {
        return relVitalsType;
    }

    public void setRelVitalsType(LutVitalsType relVitalsType) {
        this.relVitalsType = relVitalsType;
    }

    public LutVitalsFlag getRelVitalsFlag() {
        return relVitalsFlag;
    }

    public void setRelVitalsFlag(LutVitalsFlag relVitalsFlag) {
        this.relVitalsFlag = relVitalsFlag;
    }

}
