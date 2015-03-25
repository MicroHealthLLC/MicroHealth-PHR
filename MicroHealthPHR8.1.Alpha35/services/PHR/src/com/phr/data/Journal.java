
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Journal
 *  07/14/2013 11:00:37
 * 
 */
public class Journal {

    private Integer JournalID;
    private String JournalTitle;
    private Date JournalDate;
    private String JournalEntry;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;

    public Integer getJournalID() {
        return JournalID;
    }

    public void setJournalID(Integer JournalID) {
        this.JournalID = JournalID;
    }

    public String getJournalTitle() {
        return JournalTitle;
    }

    public void setJournalTitle(String JournalTitle) {
        this.JournalTitle = JournalTitle;
    }

    public Date getJournalDate() {
        return JournalDate;
    }

    public void setJournalDate(Date JournalDate) {
        this.JournalDate = JournalDate;
    }

    public String getJournalEntry() {
        return JournalEntry;
    }

    public void setJournalEntry(String JournalEntry) {
        this.JournalEntry = JournalEntry;
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
