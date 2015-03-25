
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutAppointmentStatus
 *  07/14/2013 11:02:01
 * 
 */
public class LutAppointmentStatus {

    private Integer AppointmentStatusid;
    private String AppointmentStatus;
    private Set<com.phr.data.Appointment> appointments = new HashSet<com.phr.data.Appointment>();

    public Integer getAppointmentStatusid() {
        return AppointmentStatusid;
    }

    public void setAppointmentStatusid(Integer AppointmentStatusid) {
        this.AppointmentStatusid = AppointmentStatusid;
    }

    public String getAppointmentStatus() {
        return AppointmentStatus;
    }

    public void setAppointmentStatus(String AppointmentStatus) {
        this.AppointmentStatus = AppointmentStatus;
    }

    public Set<com.phr.data.Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Set<com.phr.data.Appointment> appointments) {
        this.appointments = appointments;
    }

}
