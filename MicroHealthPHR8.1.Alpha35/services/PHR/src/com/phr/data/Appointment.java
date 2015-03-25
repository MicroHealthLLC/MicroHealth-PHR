
package com.phr.data;

import java.util.Date;


/**
 *  PHR.Appointment
 *  07/14/2013 11:02:01
 * 
 */
public class Appointment {

    private Integer AppointmentID;
    private String AppointmentTitle;
    private String AppointmentDescription;
    private Date AppointmentDate;
    private Date AppointmentTime;
    private Integer tenantid;
    private Integer UserID;
    private String ProblemTitle;
    private LutAppointmentStatus relAppointmetnStatus;

    public Integer getAppointmentID() {
        return AppointmentID;
    }

    public void setAppointmentID(Integer AppointmentID) {
        this.AppointmentID = AppointmentID;
    }

    public String getAppointmentTitle() {
        return AppointmentTitle;
    }

    public void setAppointmentTitle(String AppointmentTitle) {
        this.AppointmentTitle = AppointmentTitle;
    }

    public String getAppointmentDescription() {
        return AppointmentDescription;
    }

    public void setAppointmentDescription(String AppointmentDescription) {
        this.AppointmentDescription = AppointmentDescription;
    }

    public Date getAppointmentDate() {
        return AppointmentDate;
    }

    public void setAppointmentDate(Date AppointmentDate) {
        this.AppointmentDate = AppointmentDate;
    }

    public Date getAppointmentTime() {
        return AppointmentTime;
    }

    public void setAppointmentTime(Date AppointmentTime) {
        this.AppointmentTime = AppointmentTime;
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

    public LutAppointmentStatus getRelAppointmetnStatus() {
        return relAppointmetnStatus;
    }

    public void setRelAppointmetnStatus(LutAppointmentStatus relAppointmetnStatus) {
        this.relAppointmetnStatus = relAppointmetnStatus;
    }

}
