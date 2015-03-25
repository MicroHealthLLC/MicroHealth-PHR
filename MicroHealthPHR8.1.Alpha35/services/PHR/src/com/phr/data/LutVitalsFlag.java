
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutVitalsFlag
 *  07/14/2013 10:59:32
 * 
 */
public class LutVitalsFlag {

    private Integer VitalsFlagID;
    private String VitalsFlag;
    private Set<com.phr.data.Vitals> vitalss = new HashSet<com.phr.data.Vitals>();

    public Integer getVitalsFlagID() {
        return VitalsFlagID;
    }

    public void setVitalsFlagID(Integer VitalsFlagID) {
        this.VitalsFlagID = VitalsFlagID;
    }

    public String getVitalsFlag() {
        return VitalsFlag;
    }

    public void setVitalsFlag(String VitalsFlag) {
        this.VitalsFlag = VitalsFlag;
    }

    public Set<com.phr.data.Vitals> getVitalss() {
        return vitalss;
    }

    public void setVitalss(Set<com.phr.data.Vitals> vitalss) {
        this.vitalss = vitalss;
    }

}
