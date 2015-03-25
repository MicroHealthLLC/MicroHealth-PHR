
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Problems
 *  07/14/2013 11:00:03
 * 
 */
public class Problems {

    private Integer ProblemID;
    private String ProblemTitle;
    private String ProblemDescription;
    private Date ProblemDateStart;
    private Date ProblemDateResolve;
    private String ProblemCode;
    private Integer tenantid;
    private Integer UserID;
    private LutProblemType relProblemType;

    public Integer getProblemID() {
        return ProblemID;
    }

    public void setProblemID(Integer ProblemID) {
        this.ProblemID = ProblemID;
    }

    public String getProblemTitle() {
        return ProblemTitle;
    }

    public void setProblemTitle(String ProblemTitle) {
        this.ProblemTitle = ProblemTitle;
    }

    public String getProblemDescription() {
        return ProblemDescription;
    }

    public void setProblemDescription(String ProblemDescription) {
        this.ProblemDescription = ProblemDescription;
    }

    public Date getProblemDateStart() {
        return ProblemDateStart;
    }

    public void setProblemDateStart(Date ProblemDateStart) {
        this.ProblemDateStart = ProblemDateStart;
    }

    public Date getProblemDateResolve() {
        return ProblemDateResolve;
    }

    public void setProblemDateResolve(Date ProblemDateResolve) {
        this.ProblemDateResolve = ProblemDateResolve;
    }

    public String getProblemCode() {
        return ProblemCode;
    }

    public void setProblemCode(String ProblemCode) {
        this.ProblemCode = ProblemCode;
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

    public LutProblemType getRelProblemType() {
        return relProblemType;
    }

    public void setRelProblemType(LutProblemType relProblemType) {
        this.relProblemType = relProblemType;
    }

}
