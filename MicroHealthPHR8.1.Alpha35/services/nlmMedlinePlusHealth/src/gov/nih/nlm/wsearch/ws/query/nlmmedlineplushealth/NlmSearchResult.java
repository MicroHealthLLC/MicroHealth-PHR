
package gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for nlmSearchResultType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="nlmSearchResultType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="term" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="file" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="server" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="count" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="retstart" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="retmax" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="list" type="{}listType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "nlmSearchResultType", propOrder = {
    "term",
    "file",
    "server",
    "count",
    "retstart",
    "retmax",
    "list"
})
@XmlRootElement(name = "nlmSearchResult")
public class NlmSearchResult {

    @XmlElement(required = true)
    protected String term;
    @XmlElement(required = true)
    protected String file;
    @XmlElement(required = true)
    protected String server;
    @XmlElement(required = true)
    protected String count;
    @XmlElement(required = true)
    protected String retstart;
    @XmlElement(required = true)
    protected String retmax;
    @XmlElement(required = true)
    protected ListTypeType list;

    /**
     * Gets the value of the term property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerm() {
        return term;
    }

    /**
     * Sets the value of the term property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerm(String value) {
        this.term = value;
    }

    /**
     * Gets the value of the file property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFile() {
        return file;
    }

    /**
     * Sets the value of the file property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFile(String value) {
        this.file = value;
    }

    /**
     * Gets the value of the server property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServer() {
        return server;
    }

    /**
     * Sets the value of the server property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServer(String value) {
        this.server = value;
    }

    /**
     * Gets the value of the count property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCount() {
        return count;
    }

    /**
     * Sets the value of the count property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCount(String value) {
        this.count = value;
    }

    /**
     * Gets the value of the retstart property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRetstart() {
        return retstart;
    }

    /**
     * Sets the value of the retstart property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRetstart(String value) {
        this.retstart = value;
    }

    /**
     * Gets the value of the retmax property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRetmax() {
        return retmax;
    }

    /**
     * Sets the value of the retmax property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRetmax(String value) {
        this.retmax = value;
    }

    /**
     * Gets the value of the list property.
     * 
     * @return
     *     possible object is
     *     {@link ListTypeType }
     *     
     */
    public ListTypeType getList() {
        return list;
    }

    /**
     * Sets the value of the list property.
     * 
     * @param value
     *     allowed object is
     *     {@link ListTypeType }
     *     
     */
    public void setList(ListTypeType value) {
        this.list = value;
    }

}
