
package com.phr.data;

import java.util.Date;


/**
 *  PHR.CarePlan
 *  07/14/2013 11:01:41
 * 
 */
public class CarePlan {

    private Integer CarePlanID;
    private String CarePlan;
    private Date CarePlanDueDate;
    private Integer UserID;
    private String ProblemTitle;
    private Date CarePlanDate;
    private LutCarePlanStatus relCarePlanStatus;

    public Integer getCarePlanID() {
        return CarePlanID;
    }

    public void setCarePlanID(Integer CarePlanID) {
        this.CarePlanID = CarePlanID;
    }

    public String getCarePlan() {
        return CarePlan;
    }

    public void setCarePlan(String CarePlan) {
        this.CarePlan = CarePlan;
    }

    public Date getCarePlanDueDate() {
        return CarePlanDueDate;
    }

    public void setCarePlanDueDate(Date CarePlanDueDate) {
        this.CarePlanDueDate = CarePlanDueDate;
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

    public Date getCarePlanDate() {
        return CarePlanDate;
    }

    public void setCarePlanDate(Date CarePlanDate) {
        this.CarePlanDate = CarePlanDate;
    }

    public LutCarePlanStatus getRelCarePlanStatus() {
        return relCarePlanStatus;
    }

    public void setRelCarePlanStatus(LutCarePlanStatus relCarePlanStatus) {
        this.relCarePlanStatus = relCarePlanStatus;
    }

}
