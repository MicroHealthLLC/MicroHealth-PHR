
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Documents
 *  07/14/2013 11:01:25
 * 
 */
public class Documents {

    private Integer DocumentID;
    private String DocumentTitle;
    private String DocumentDescription;
    private Date DocumentDate;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;
    private LutDocumentType relDocumetType;

    public Integer getDocumentID() {
        return DocumentID;
    }

    public void setDocumentID(Integer DocumentID) {
        this.DocumentID = DocumentID;
    }

    public String getDocumentTitle() {
        return DocumentTitle;
    }

    public void setDocumentTitle(String DocumentTitle) {
        this.DocumentTitle = DocumentTitle;
    }

    public String getDocumentDescription() {
        return DocumentDescription;
    }

    public void setDocumentDescription(String DocumentDescription) {
        this.DocumentDescription = DocumentDescription;
    }

    public Date getDocumentDate() {
        return DocumentDate;
    }

    public void setDocumentDate(Date DocumentDate) {
        this.DocumentDate = DocumentDate;
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

    public LutDocumentType getRelDocumetType() {
        return relDocumetType;
    }

    public void setRelDocumetType(LutDocumentType relDocumetType) {
        this.relDocumetType = relDocumetType;
    }

}
