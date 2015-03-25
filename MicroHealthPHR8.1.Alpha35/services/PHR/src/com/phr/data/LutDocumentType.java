
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutDocumentType
 *  07/14/2013 11:01:25
 * 
 */
public class LutDocumentType {

    private Integer DocumentTypeID;
    private String DocumentType;
    private Set<com.phr.data.Documents> documentss = new HashSet<com.phr.data.Documents>();

    public Integer getDocumentTypeID() {
        return DocumentTypeID;
    }

    public void setDocumentTypeID(Integer DocumentTypeID) {
        this.DocumentTypeID = DocumentTypeID;
    }

    public String getDocumentType() {
        return DocumentType;
    }

    public void setDocumentType(String DocumentType) {
        this.DocumentType = DocumentType;
    }

    public Set<com.phr.data.Documents> getDocumentss() {
        return documentss;
    }

    public void setDocumentss(Set<com.phr.data.Documents> documentss) {
        this.documentss = documentss;
    }

}
