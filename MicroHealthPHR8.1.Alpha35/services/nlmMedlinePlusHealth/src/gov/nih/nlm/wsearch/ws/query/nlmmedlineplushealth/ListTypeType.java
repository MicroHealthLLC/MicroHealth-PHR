
package gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for listType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="listType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="document" type="{}documentType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="num" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="start" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="per" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "listType", propOrder = {
    "documents"
})
public class ListTypeType {

    @XmlElement(name = "document")
    protected List<DocumentTypeType> documents;
    @XmlAttribute(name = "num")
    protected String num;
    @XmlAttribute(name = "start")
    protected String start;
    @XmlAttribute(name = "per")
    protected String per;

    /**
     * Gets the value of the documents property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the documents property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDocuments().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DocumentTypeType }
     * 
     * 
     */
    public List<DocumentTypeType> getDocuments() {
        if (documents == null) {
            documents = new ArrayList<DocumentTypeType>();
        }
        return this.documents;
    }

    /**
     * Gets the value of the num property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNum() {
        return num;
    }

    /**
     * Sets the value of the num property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNum(String value) {
        this.num = value;
    }

    /**
     * Gets the value of the start property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStart() {
        return start;
    }

    /**
     * Sets the value of the start property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStart(String value) {
        this.start = value;
    }

    /**
     * Gets the value of the per property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPer() {
        return per;
    }

    /**
     * Sets the value of the per property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPer(String value) {
        this.per = value;
    }

    /**
     * Sets the value of the documents property.
     * 
     * @param documents
     *     allowed object is
     *     {@link DocumentTypeType }
     *     
     */
    public void setDocuments(List<DocumentTypeType> documents) {
        this.documents = documents;
    }

}
