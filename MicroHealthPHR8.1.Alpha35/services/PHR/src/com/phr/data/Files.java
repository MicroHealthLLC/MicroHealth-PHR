
package com.phr.data;



/**
 *  PHR.Files
 *  07/14/2013 11:01:11
 * 
 */
public class Files {

    private Integer FilesID;
    private String name;
    private String path;
    private Integer tenantid;
    private Integer UserID;
    private Integer DocumentID;

    public Integer getFilesID() {
        return FilesID;
    }

    public void setFilesID(Integer FilesID) {
        this.FilesID = FilesID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
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

    public Integer getDocumentID() {
        return DocumentID;
    }

    public void setDocumentID(Integer DocumentID) {
        this.DocumentID = DocumentID;
    }

}
