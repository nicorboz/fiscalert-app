import{t as e}from"./index-browser-B_p9ja31.js";var t=`<?xml version="1.0" encoding="UTF-8"?>
<!-- edited with XMLSpy v2012 rel. 2 sp1 (x64) (http://www.altova.com) by Sebastien Michon (OECD) -->
<xsd:schema xmlns:cbc="urn:oecd:ties:cbc:v2" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:stf="urn:oecd:ties:cbcstf:v5" xmlns:iso="urn:oecd:ties:isocbctypes:v1" targetNamespace="urn:oecd:ties:cbc:v2" elementFormDefault="qualified" attributeFormDefault="unqualified" version="2.0">
	<xsd:import namespace="urn:oecd:ties:isocbctypes:v1" schemaLocation="isocbctypes_v1.1.xsd"/>
	<xsd:import namespace="urn:oecd:ties:cbcstf:v5" schemaLocation="oecdcbctypes_v5.0.xsd"/>
	<!--+++++++++++++++++++++++  Reusable Simple types ++++++++++++++++++++++++++++++++++++++ -->
	<!-- Message type definitions -->
	<xsd:simpleType name="MessageType_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Message type defines the type of reporting </xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="CBC"/>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!-- MessageTypeIndic - 4 -->
	<xsd:simpleType name="CbcMessageTypeIndic_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">The MessageTypeIndic defines the type of message sent</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="CBC401">
				<xsd:annotation>
					<xsd:documentation>The message contains new information</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC402">
				<xsd:annotation>
					<xsd:documentation>The message contains corrections for previously sent information</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!-- CBC Main business activities Type - 5 -->
	<xsd:simpleType name="CbcBizActivityType_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Main business activities
			</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="CBC501">
				<xsd:annotation>
					<xsd:documentation>Research and Development</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC502">
				<xsd:annotation>
					<xsd:documentation>Holding or Managing intellectual property</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC503">
				<xsd:annotation>
					<xsd:documentation>Purchasing or Procurement</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC504">
				<xsd:annotation>
					<xsd:documentation>Manufacturing or Production</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC505">
				<xsd:annotation>
					<xsd:documentation>Sales, Marketing or Distribution</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC506">
				<xsd:annotation>
					<xsd:documentation>Administrative, Management or Support Services</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC507">
				<xsd:annotation>
					<xsd:documentation>Provision of Services to unrelated parties</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC508">
				<xsd:annotation>
					<xsd:documentation>Internal Group Finance</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC509">
				<xsd:annotation>
					<xsd:documentation>Regulated Financial Services</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC510">
				<xsd:annotation>
					<xsd:documentation>Insurance</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC511">
				<xsd:annotation>
					<xsd:documentation>Holding shares or other equity instruments</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC512">
				<xsd:annotation>
					<xsd:documentation>Dormant</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC513">
				<xsd:annotation>
					<xsd:documentation>Other</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!-- List of Summary elements, for reference in AdditionalInfo - 6 -->
	<xsd:simpleType name="CbcSummaryListElementsType_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">List of Summary elements
			</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="CBC601">
				<xsd:annotation>
					<xsd:documentation>Revenues - Unrelated</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC602">
				<xsd:annotation>
					<xsd:documentation>Revenues - Related</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC603">
				<xsd:annotation>
					<xsd:documentation>Revenues - Total</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC604">
				<xsd:annotation>
					<xsd:documentation>Profit or Loss</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC605">
				<xsd:annotation>
					<xsd:documentation>Tax Paid</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC606">
				<xsd:annotation>
					<xsd:documentation>Tax Accrued</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC607">
				<xsd:annotation>
					<xsd:documentation>Capital</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC608">
				<xsd:annotation>
					<xsd:documentation>Earnings</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC609">
				<xsd:annotation>
					<xsd:documentation>Number of Employees</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC610">
				<xsd:annotation>
					<xsd:documentation>Assets</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC611">
				<xsd:annotation>
					<xsd:documentation>Name of MNE Group</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!-- ReportingRole - 7 -->
	<xsd:simpleType name="CbcReportingRole_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Reporting role</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="CBC701">
				<xsd:annotation>
					<xsd:documentation>Ultimate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC702">
				<xsd:annotation>
					<xsd:documentation>Surrogate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC703">
				<xsd:annotation>
					<xsd:documentation>Local Filing in the framework of an international exchange</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC704">
				<xsd:annotation>
					<xsd:documentation>Local Filing with Incomplete Information</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!-- Ultimate Parent Entity Role - 7 -->
	<xsd:simpleType name="UltimateParentEntityRole_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Reporting role</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="CBC801">
				<xsd:annotation>
					<xsd:documentation>Ultimate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC802">
				<xsd:annotation>
					<xsd:documentation>Reporting Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="CBC803">
				<xsd:annotation>
					<xsd:documentation>Both (Ultimate Parent Entity and Reporting Entity)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--++++++++++++++++++ Reusable Complex types +++++++++++++++++++++++++++++++++++++ -->
	<!-- -->
	<!-- Address Fix -->
	<xsd:complexType name="AddressFix_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">
			Structure of the address for a party broken down into its logical parts, recommended for easy matching. The 'City' element is the only required subelement. All of the subelements are simple text - data type 'string'.
			</xsd:documentation>
		</xsd:annotation>
		<xsd:sequence>
			<xsd:element name="Street" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="BuildingIdentifier" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="SuiteIdentifier" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="FloorIdentifier" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="DistrictName" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="POB" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="PostCode" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="City" type="stf:StringMin1Max200_Type"/>
			<xsd:element name="CountrySubentity" type="stf:StringMin1Max200_Type" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
	<!--  -->
	<!--  The Address of a Party, given in fixed or free Form, possibly in both Forms -->
	<xsd:complexType name="Address_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">
			The user has the option to enter the data about the address of a party either as one long field or to spread the data over up to eight  elements or even to use both formats. If the user chooses the option to enter the data required in separate elements, the container element for this will be 'AddressFix'. If the user chooses the option to enter the data required in a less structured way in 'AddressFree' all available address details shall be presented as one string of bytes, blank or "/" (slash) or carriage return- line feed used as a delimiter between parts of the address. PLEASE NOTE that the address country code is outside  both of these elements. The use of the fixed form is recommended as a rule to allow easy matching. However, the use of the free form is recommended if the sending state cannot reliably identify and distinguish the different parts of the address. The user may want to use both formats e.g. if besides separating the logical parts of the address he also wants to indicate a suitable breakdown into print-lines by delimiters in the free text form. In this case 'AddressFix' has to precede 'AddressFree'.
			</xsd:documentation>
		</xsd:annotation>
		<xsd:sequence>
			<xsd:element name="CountryCode" type="iso:CountryCode_Type"/>
			<xsd:choice>
				<xsd:element name="AddressFree" type="stf:StringMin1Max4000_Type"/>
				<xsd:sequence>
					<xsd:element name="AddressFix" type="cbc:AddressFix_Type"/>
					<xsd:element name="AddressFree" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
				</xsd:sequence>
			</xsd:choice>
		</xsd:sequence>
		<xsd:attribute name="legalAddressType" type="stf:OECDLegalAddressType_EnumType" use="optional"/>
	</xsd:complexType>
	<!--  -->
	<!-- General Type for Monetary Amounts -->
	<xsd:complexType name="MonAmnt_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">
This data type is to be used whenever monetary amounts are to be communicated.  Such amounts shall be given in full units, i.e. without decimals.  The code for the currency in which the value is expressed has to be
taken from the ISO codelist 4217 and added in attribute currCode.
</xsd:documentation>
		</xsd:annotation>
		<xsd:simpleContent>
			<xsd:extension base="xsd:integer">
				<xsd:attribute name="currCode" type="iso:currCode_Type" use="required"/>
			</xsd:extension>
		</xsd:simpleContent>
	</xsd:complexType>
	<!--  -->
	<!-- Organisation name -->
	<xsd:complexType name="NameOrganisation_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Name of organisation</xsd:documentation>
		</xsd:annotation>
		<xsd:simpleContent>
			<xsd:extension base="stf:StringMin1Max200_Type"/>
		</xsd:simpleContent>
	</xsd:complexType>
	<!-- -->
	<!-- TIN -->
	<xsd:complexType name="TIN_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">This is the identification number/identification code for the party in question. As the identifier may be not strictly numeric, it is just defined as a string of characters. Attribute 'issuedBy' is required to designate the issuer of the identifier. </xsd:documentation>
		</xsd:annotation>
		<xsd:simpleContent>
			<xsd:extension base="stf:StringMin1Max200_Type">
				<xsd:attribute name="issuedBy" type="iso:CountryCode_Type" use="optional">
					<xsd:annotation>
						<xsd:documentation xml:lang="en">Country code of issuing country, indicating country of Residence (to taxes and other)</xsd:documentation>
					</xsd:annotation>
				</xsd:attribute>
			</xsd:extension>
		</xsd:simpleContent>
	</xsd:complexType>
	<!-- -->
	<!-- Message specification: Data identifying and describing the message as a whole -->
	<xsd:complexType name="MessageSpec_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Information in the message header identifies the Tax Administration that is sending the message.  It specifies when the message was created, what period (normally a year) the report is for, and the nature of the report (original, corrected, supplemental, etc).</xsd:documentation>
		</xsd:annotation>
		<xsd:sequence>
			<xsd:element name="SendingEntityIN" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="TransmittingCountry" type="iso:CountryCode_Type"/>
			<xsd:element name="ReceivingCountry" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="MessageType" type="cbc:MessageType_EnumType"/>
			<xsd:element name="Language" type="iso:LanguageCode_Type" minOccurs="0"/>
			<xsd:element name="Warning" type="stf:StringMin1Max4000_Type" minOccurs="0">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">Free text expressing the restrictions for use of the information this
message contains and the legal framework under which it is given</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="Contact" type="stf:StringMin1Max4000_Type" minOccurs="0">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">All necessary contact information about persons responsible for and
involved in the processing of the data transmitted in this message, both legally and technically. Free text as this is not
intended for automatic processing. </xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="MessageRefId" type="stf:StringMin1Max170_Type">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">Sender's unique identifier for this message</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="MessageTypeIndic" type="cbc:CbcMessageTypeIndic_EnumType"/>
			<xsd:element name="CorrMessageRefId" type="stf:StringMin1Max170_Type" minOccurs="0" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">Sender's unique identifier that has to be corrected.  Must point to 1 or more previous message</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="ReportingPeriod" type="xsd:date">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">The reporting year for which information is transmitted in documents of
the current message.</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="Timestamp" type="xsd:dateTime"/>
		</xsd:sequence>
	</xsd:complexType>
	<!-- -->
	<!-- Constituent Entity Type -->
	<xsd:complexType name="ConstituentEntity_Type">
		<xsd:sequence>
			<xsd:element name="ConstEntity" type="cbc:OrganisationParty_Type"/>
			<xsd:element name="Role" type="cbc:UltimateParentEntityRole_EnumType" minOccurs="0"/>
			<xsd:element name="IncorpCountryCode" type="iso:CountryCode_Type" minOccurs="0">
				<xsd:annotation>
					<xsd:documentation>Tax Jurisdiction of organisation or incorporation if different from Tax Jurisdiction of Residence</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="BizActivities" type="cbc:CbcBizActivityType_EnumType" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Main business activity(ies) </xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="OtherEntityInfo" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
	<!-- -->
	<!-- Correctable CBC Report -->
	<xsd:complexType name="CorrectableCbcReport_Type">
		<xsd:sequence>
			<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
			<xsd:element name="ResCountryCode" type="iso:CountryCode_Type">
				<xsd:annotation>
					<xsd:documentation>Tax jurisdiction to which Summary and Const. Entities relates</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="Summary">
				<xsd:annotation>
					<xsd:documentation>Overview of allocation of income, taxes and business activities by tax jurisdiction</xsd:documentation>
				</xsd:annotation>
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="Revenues">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Unrelated" type="cbc:MonAmnt_Type">
										<xsd:annotation>
											<xsd:documentation>Unrelated Party</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="Related" type="cbc:MonAmnt_Type">
										<xsd:annotation>
											<xsd:documentation>Related Party </xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="Total" type="cbc:MonAmnt_Type"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="ProfitOrLoss" type="cbc:MonAmnt_Type">
							<xsd:annotation>
								<xsd:documentation>Profit (Loss) Before Income Tax 
</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="TaxPaid" type="cbc:MonAmnt_Type">
							<xsd:annotation>
								<xsd:documentation>Income Tax Paid (on cash basis) </xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="TaxAccrued" type="cbc:MonAmnt_Type">
							<xsd:annotation>
								<xsd:documentation>Income Tax Accrued -
Current Year </xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="Capital" type="cbc:MonAmnt_Type">
							<xsd:annotation>
								<xsd:documentation>Stated capital</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="Earnings" type="cbc:MonAmnt_Type">
							<xsd:annotation>
								<xsd:documentation>Accumulated earnings 
</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="NbEmployees" type="xsd:integer">
							<xsd:annotation>
								<xsd:documentation>Number of Employees</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="Assets" type="cbc:MonAmnt_Type">
							<xsd:annotation>
								<xsd:documentation>Tangible Assets 
other than Cash and Cash
Equivalents</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="ConstEntities" type="cbc:ConstituentEntity_Type" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>List of all the Constituent Entities of the MNE group included in each aggregation per tax jurisdiction</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<!--  -->
	<!-- Organisation Identification Number -->
	<xsd:complexType name="OrganisationIN_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">This is the identification number/identification code for the Entity in question. As the identifier may be not strictly numeric, it is just defined as a string of characters. Attribute 'issuedBy' is required to designate the issuer of the identifier.  Attribute 'INType' defines the type of identification number. </xsd:documentation>
		</xsd:annotation>
		<xsd:simpleContent>
			<xsd:extension base="stf:StringMin1Max200_Type">
				<xsd:attribute name="issuedBy" type="iso:CountryCode_Type" use="optional">
					<xsd:annotation>
						<xsd:documentation xml:lang="en">Country code of issuing country, indicating country of Residence (to taxes and other)</xsd:documentation>
					</xsd:annotation>
				</xsd:attribute>
				<xsd:attribute name="INType" type="stf:StringMin1Max200_Type" use="optional">
					<xsd:annotation>
						<xsd:documentation xml:lang="en">Identification Number Type</xsd:documentation>
					</xsd:annotation>
				</xsd:attribute>
			</xsd:extension>
		</xsd:simpleContent>
	</xsd:complexType>
	<!-- -->
	<!-- Collection of all Data describing an organisationy  as party-->
	<xsd:complexType name="OrganisationParty_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">
This container brings together all data about an organisation as a party. Name and address are required components and each can
be present more than once to enable as complete a description as possible. Whenever possible one or more identifiers (TIN
etc) should be added as well as a residence country code. Additional data that describes and identifies the party can be
given . The code for the legal type according to the OECD codelist must be added. The structures of
all of the subelements are defined elsewhere in this schema.</xsd:documentation>
		</xsd:annotation>
		<xsd:sequence>
			<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="TIN" type="cbc:TIN_Type">
				<xsd:annotation>
					<xsd:documentation>Tax Identification Number</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="IN" type="cbc:OrganisationIN_Type" minOccurs="0" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">Entity Identification Number</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="Name" type="cbc:NameOrganisation_Type" maxOccurs="unbounded"/>
			<xsd:element name="Address" type="cbc:Address_Type" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<!-- -->
	<!-- Reporting Entity -->
	<xsd:complexType name="ReportingEntity_Type">
		<xsd:sequence>
			<xsd:element name="Entity" type="cbc:OrganisationParty_Type"/>
			<xsd:element name="NameMNEGroup" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="ReportingRole" type="cbc:CbcReportingRole_EnumType"/>
			<xsd:element name="ReportingPeriod">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="StartDate" type="xsd:date"/>
						<xsd:element name="EndDate" type="xsd:date"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<!-- -->
	<!-- Correctable Reporting Entity -->
	<xsd:complexType name="CorrectableReportingEntity_Type">
		<xsd:complexContent>
			<xsd:extension base="cbc:ReportingEntity_Type">
				<xsd:sequence>
					<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
				</xsd:sequence>
			</xsd:extension>
		</xsd:complexContent>
	</xsd:complexType>
	<!-- -->
	<!--  -->
	<!-- Additional Info -->
	<xsd:complexType name="CorrectableAdditionalInfo_Type">
		<xsd:sequence>
			<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
			<xsd:element name="OtherInfo" type="stf:StringMin1Max4000WithLang_Type" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Please include any further brief information or explanation you consider necessary or that would facilitate the understanding of the compulsory information provided in the country-by-country report. </xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" minOccurs="0" maxOccurs="unbounded"/>
			<xsd:element name="SummaryRef" type="cbc:CbcSummaryListElementsType_EnumType" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<!--  -->
	<!--  -->
	<!-- CBC Body Type - CBC Reporting  -->
	<xsd:complexType name="CbcBody_Type">
		<xsd:sequence>
			<xsd:element name="ReportingEntity" type="cbc:CorrectableReportingEntity_Type">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">Reporting Entity of the group</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="CbcReports" type="cbc:CorrectableCbcReport_Type" minOccurs="0" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>CBC Reports by tax jurisdiction</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="AdditionalInfo" type="cbc:CorrectableAdditionalInfo_Type" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<!--  -->
	<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Schema  element ++++++++++++++++++++++++++++++++++++++++++++ -->
	<!-- CBC OECD File Message structure  -->
	<!-- -->
	<!-- CBC Message structure  -->
	<xsd:element name="CBC_OECD">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element name="MessageSpec" type="cbc:MessageSpec_Type"/>
				<xsd:element name="CbcBody" type="cbc:CbcBody_Type" maxOccurs="unbounded"/>
			</xsd:sequence>
			<xsd:attribute name="version" type="stf:StringMin1Max10_Type">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">CBC Version </xsd:documentation>
				</xsd:annotation>
			</xsd:attribute>
		</xsd:complexType>
	</xsd:element>
	<!-- -->
</xsd:schema>
`,n=`<?xml version="1.0" encoding="UTF-8"?>\r
<!-- edited with XMLSpy v2012 rel. 2 sp1 (x64) (http://www.altova.com) by Sebastien Michon (OECD) -->\r
<xsd:schema xmlns:stf="urn:oecd:ties:cbcstf:v5" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:iso="urn:oecd:ties:isocbctypes:v1" targetNamespace="urn:oecd:ties:cbcstf:v5" elementFormDefault="qualified" attributeFormDefault="unqualified" version="5.0">\r
	<xsd:import namespace="urn:oecd:ties:isocbctypes:v1" schemaLocation="isocbctypes_v1.1.xsd"/>\r
	<!-- -->\r
	<!--+++++++++++++++++++++++  String lenght types ++++++++++++++++++++++++++++++++++++++ -->\r
	<!-- -->\r
	<!-- Defines a string with minimum length 1 and maximum length of 10 -->\r
	<xsd:simpleType name="StringMin1Max10_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>Defines a string with minimum length 1 and maximum length of 10</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:minLength value="1"/>\r
			<xsd:maxLength value="10"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Defines a string with minimum length 1 and maximum length of 170 -->\r
	<xsd:simpleType name="StringMin1Max170_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>Defines a string with minimum length 1 and maximum length of 170</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:minLength value="1"/>\r
			<xsd:maxLength value="170"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Defines a string with minimum length 1 and maximum length of 200 -->\r
	<xsd:simpleType name="StringMin1Max200_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>Defines a string with minimum length 1 and maximum length of 200</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:minLength value="1"/>\r
			<xsd:maxLength value="200"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Defines a string with minimum length 1 and maximum length of 400 -->\r
	<xsd:simpleType name="StringMin1Max400_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>Defines a string with minimum length 1 and maximum length of 400</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:minLength value="1"/>\r
			<xsd:maxLength value="400"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Defines a string with minimum length 1 and maximum length of 4000 -->\r
	<xsd:simpleType name="StringMin1Max4000_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>Defines a string with minimum length 1 and maximum length of 4000</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:minLength value="1"/>\r
			<xsd:maxLength value="4000"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Defines a string with minimum length 1 and maximum length of 4000, with the Language attribute -->\r
	<xsd:complexType name="StringMin1Max4000WithLang_Type">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">Defines a string with minimum length 1 and maximum length of 4000, with the Language attribute</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:simpleContent>\r
			<xsd:extension base="stf:StringMin1Max4000_Type">\r
				<xsd:attribute name="language" type="iso:LanguageCode_Type" use="optional">\r
					<xsd:annotation>\r
						<xsd:documentation xml:lang="en">Language used</xsd:documentation>\r
					</xsd:annotation>\r
				</xsd:attribute>\r
			</xsd:extension>\r
		</xsd:simpleContent>\r
	</xsd:complexType>\r
	<!-- -->\r
	<!--+++++++++++++++++++++++  Reusable Simple types ++++++++++++++++++++++++++++++++++++++ -->\r
	<!-- Document type indicators types -->\r
	<xsd:simpleType name="OECDDocTypeIndic_EnumType">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">This element specifies the type of data being submitted.</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:enumeration value="OECD0">\r
				<xsd:annotation>\r
					<xsd:documentation>Resent Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD1">\r
				<xsd:annotation>\r
					<xsd:documentation>New Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD2">\r
				<xsd:annotation>\r
					<xsd:documentation>Corrected Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD3">\r
				<xsd:annotation>\r
					<xsd:documentation>Deletion of Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD10">\r
				<xsd:annotation>\r
					<xsd:documentation>Resent Test Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD11">\r
				<xsd:annotation>\r
					<xsd:documentation>New Test Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD12">\r
				<xsd:annotation>\r
					<xsd:documentation>Corrected Test Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD13">\r
				<xsd:annotation>\r
					<xsd:documentation>Deletion of Test Data</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Kind of Name -->\r
	<xsd:simpleType name="OECDNameType_EnumType">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">\r
				It is possible for stf documents to contain several names for the same party. This is a qualifier to indicate the type of a particular name. Such types include nicknames ('nick'), names under which a party does business ('dba' a short name for the entity, or a name that is used for public acquaintance instead of the official business name) etc.\r
			</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:enumeration value="OECD201">\r
				<xsd:annotation>\r
					<xsd:documentation>SMFAliasOrOther</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD202">\r
				<xsd:annotation>\r
					<xsd:documentation>indiv (individual)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD203">\r
				<xsd:annotation>\r
					<xsd:documentation>alias (alias)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD204">\r
				<xsd:annotation>\r
					<xsd:documentation>nick (nickname)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD205">\r
				<xsd:annotation>\r
					<xsd:documentation>aka (also known as)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD206">\r
				<xsd:annotation>\r
					<xsd:documentation>dba (doing business as)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD207">\r
				<xsd:annotation>\r
					<xsd:documentation>legal (legal name)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD208">\r
				<xsd:annotation>\r
					<xsd:documentation>atbirth (name at birth)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!-- Type of the address considered from a legal point of view -->\r
	<xsd:simpleType name="OECDLegalAddressType_EnumType">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">This is a datatype for an attribute to an address. It serves to indicate the legal character of that address (residential, business etc.)</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:token">\r
			<xsd:enumeration value="OECD301">\r
				<xsd:annotation>\r
					<xsd:documentation>residentialOrBusiness</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD302">\r
				<xsd:annotation>\r
					<xsd:documentation>residential</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD303">\r
				<xsd:annotation>\r
					<xsd:documentation>business</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD304">\r
				<xsd:annotation>\r
					<xsd:documentation>registeredOffice</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OECD305">\r
				<xsd:annotation>\r
					<xsd:documentation>unspecified</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- -->\r
	<!--++++++++++++++++++ Reusable Complex types +++++++++++++++++++++++++++++++++++++ -->\r
	<!-- -->\r
	<!-- Document specification: Data identifying and describing the document -->\r
	<xsd:complexType name="DocSpec_Type">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">Document specification: Data identifying and describing the document, where\r
'document' here means the part of a message that is to transmit the data about a single block of CBC information. </xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:sequence>\r
			<xsd:element name="DocTypeIndic" type="stf:OECDDocTypeIndic_EnumType"/>\r
			<xsd:element name="DocRefId" type="stf:StringMin1Max200_Type">\r
				<xsd:annotation>\r
					<xsd:documentation xml:lang="en">Sender's unique identifier of this document </xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:element>\r
			<xsd:element name="CorrMessageRefId" type="stf:StringMin1Max170_Type" minOccurs="0">\r
				<xsd:annotation>\r
					<xsd:documentation xml:lang="en">Reference id of the message of the document referred to if this is a correction</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:element>\r
			<xsd:element name="CorrDocRefId" type="stf:StringMin1Max200_Type" minOccurs="0">\r
				<xsd:annotation>\r
					<xsd:documentation xml:lang="en">Reference id of the document referred to if this is correction</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:element>\r
		</xsd:sequence>\r
	</xsd:complexType>\r
	<!-- -->\r
</xsd:schema>\r
`,r=`<?xml version="1.0" encoding="UTF-8"?>\r
<!-- edited with XMLSpy v2012 rel. 2 sp1 (x64) (http://www.altova.com) by Sebastien Michon (OECD) -->\r
<xsd:schema xmlns:iso="urn:oecd:ties:isocbctypes:v1" xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="urn:oecd:ties:isocbctypes:v1" elementFormDefault="qualified" attributeFormDefault="unqualified" version="1.1">\r
	<!--  ISO 3166 alpha 2 Country Code \r
\r
The following disclaimer refers to all uses of the ISO country code list in the CbC schema: For practical reasons, the list is based on the ISO 3166-1 country list. The use of this list does not imply the expression by the OECD of any opinion whatsoever concerning the legal status of the territories listed. Its content is without prejudice to the status of or sovereignty over any territory, to the delimitation of international frontiers and boundaries and to the name of any territory, city or area.   \r
    -->\r
	<xsd:simpleType name="CountryCode_Type">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">ISO-3166 Alpha 2 country codes</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:enumeration value="AF">\r
				<xsd:annotation>\r
					<xsd:documentation>AFGHANISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AX">\r
				<xsd:annotation>\r
					<xsd:documentation>ALAND ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AL">\r
				<xsd:annotation>\r
					<xsd:documentation>ALBANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DZ">\r
				<xsd:annotation>\r
					<xsd:documentation>ALGERIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AS">\r
				<xsd:annotation>\r
					<xsd:documentation>AMERICAN SAMOA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AD">\r
				<xsd:annotation>\r
					<xsd:documentation>ANDORRA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AO">\r
				<xsd:annotation>\r
					<xsd:documentation>ANGOLA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AI">\r
				<xsd:annotation>\r
					<xsd:documentation>ANGUILLA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AQ">\r
				<xsd:annotation>\r
					<xsd:documentation>ANTARCTICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AG">\r
				<xsd:annotation>\r
					<xsd:documentation>ANTIGUA AND BARBUDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AR">\r
				<xsd:annotation>\r
					<xsd:documentation>ARGENTINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AM">\r
				<xsd:annotation>\r
					<xsd:documentation>ARMENIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AW">\r
				<xsd:annotation>\r
					<xsd:documentation>ARUBA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AU">\r
				<xsd:annotation>\r
					<xsd:documentation>AUSTRALIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AT">\r
				<xsd:annotation>\r
					<xsd:documentation>AUSTRIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AZ">\r
				<xsd:annotation>\r
					<xsd:documentation>AZERBAIJAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BS">\r
				<xsd:annotation>\r
					<xsd:documentation>BAHAMAS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BH">\r
				<xsd:annotation>\r
					<xsd:documentation>BAHRAIN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BD">\r
				<xsd:annotation>\r
					<xsd:documentation>BANGLADESH</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BB">\r
				<xsd:annotation>\r
					<xsd:documentation>BARBADOS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BY">\r
				<xsd:annotation>\r
					<xsd:documentation>BELARUS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BE">\r
				<xsd:annotation>\r
					<xsd:documentation>BELGIUM</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BZ">\r
				<xsd:annotation>\r
					<xsd:documentation>BELIZE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BJ">\r
				<xsd:annotation>\r
					<xsd:documentation>BENIN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BM">\r
				<xsd:annotation>\r
					<xsd:documentation>BERMUDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BT">\r
				<xsd:annotation>\r
					<xsd:documentation>BHUTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BO">\r
				<xsd:annotation>\r
					<xsd:documentation>BOLIVIA, PLURINATIONAL STATE OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BQ">\r
				<xsd:annotation>\r
					<xsd:documentation>BONAIRE, SINT EUSTATIUS AND SABA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BA">\r
				<xsd:annotation>\r
					<xsd:documentation>BOSNIA AND HERZEGOVINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BW">\r
				<xsd:annotation>\r
					<xsd:documentation>BOTSWANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BV">\r
				<xsd:annotation>\r
					<xsd:documentation>BOUVET ISLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BR">\r
				<xsd:annotation>\r
					<xsd:documentation>BRAZIL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IO">\r
				<xsd:annotation>\r
					<xsd:documentation>BRITISH INDIAN OCEAN TERRITORY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BN">\r
				<xsd:annotation>\r
					<xsd:documentation>BRUNEI DARUSSALAM</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BG">\r
				<xsd:annotation>\r
					<xsd:documentation>BULGARIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BF">\r
				<xsd:annotation>\r
					<xsd:documentation>BURKINA FASO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BI">\r
				<xsd:annotation>\r
					<xsd:documentation>BURUNDI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KH">\r
				<xsd:annotation>\r
					<xsd:documentation>CAMBODIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CM">\r
				<xsd:annotation>\r
					<xsd:documentation>CAMEROON</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CA">\r
				<xsd:annotation>\r
					<xsd:documentation>CANADA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CV">\r
				<xsd:annotation>\r
					<xsd:documentation>CABO VERDE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KY">\r
				<xsd:annotation>\r
					<xsd:documentation>CAYMAN ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CF">\r
				<xsd:annotation>\r
					<xsd:documentation>CENTRAL AFRICAN REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TD">\r
				<xsd:annotation>\r
					<xsd:documentation>CHAD</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CL">\r
				<xsd:annotation>\r
					<xsd:documentation>CHILE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CN">\r
				<xsd:annotation>\r
					<xsd:documentation>CHINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CX">\r
				<xsd:annotation>\r
					<xsd:documentation>CHRISTMAS ISLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CC">\r
				<xsd:annotation>\r
					<xsd:documentation>COCOS (KEELING) ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CO">\r
				<xsd:annotation>\r
					<xsd:documentation>COLOMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KM">\r
				<xsd:annotation>\r
					<xsd:documentation>COMOROS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CG">\r
				<xsd:annotation>\r
					<xsd:documentation>CONGO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CD">\r
				<xsd:annotation>\r
					<xsd:documentation>CONGO, THE DEMOCRATIC REPUBLIC OF THE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CK">\r
				<xsd:annotation>\r
					<xsd:documentation>COOK ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CR">\r
				<xsd:annotation>\r
					<xsd:documentation>COSTA RICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CI">\r
				<xsd:annotation>\r
					<xsd:documentation>COTE D'IVOIRE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HR">\r
				<xsd:annotation>\r
					<xsd:documentation>CROATIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CU">\r
				<xsd:annotation>\r
					<xsd:documentation>CUBA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CW">\r
				<xsd:annotation>\r
					<xsd:documentation>CURACAO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CY">\r
				<xsd:annotation>\r
					<xsd:documentation>CYPRUS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CZ">\r
				<xsd:annotation>\r
					<xsd:documentation>CZECHIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DK">\r
				<xsd:annotation>\r
					<xsd:documentation>DENMARK</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DJ">\r
				<xsd:annotation>\r
					<xsd:documentation>DJIBOUTI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DM">\r
				<xsd:annotation>\r
					<xsd:documentation>DOMINICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DO">\r
				<xsd:annotation>\r
					<xsd:documentation>DOMINICAN REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EC">\r
				<xsd:annotation>\r
					<xsd:documentation>ECUADOR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EG">\r
				<xsd:annotation>\r
					<xsd:documentation>EGYPT</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SV">\r
				<xsd:annotation>\r
					<xsd:documentation>EL SALVADOR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GQ">\r
				<xsd:annotation>\r
					<xsd:documentation>EQUATORIAL GUINEA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ER">\r
				<xsd:annotation>\r
					<xsd:documentation>ERITREA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EE">\r
				<xsd:annotation>\r
					<xsd:documentation>ESTONIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ET">\r
				<xsd:annotation>\r
					<xsd:documentation>ETHIOPIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FK">\r
				<xsd:annotation>\r
					<xsd:documentation>FALKLAND ISLANDS (MALVINAS)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FO">\r
				<xsd:annotation>\r
					<xsd:documentation>FAROE ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FJ">\r
				<xsd:annotation>\r
					<xsd:documentation>FIJI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FI">\r
				<xsd:annotation>\r
					<xsd:documentation>FINLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FR">\r
				<xsd:annotation>\r
					<xsd:documentation>FRANCE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GF">\r
				<xsd:annotation>\r
					<xsd:documentation>FRENCH GUIANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PF">\r
				<xsd:annotation>\r
					<xsd:documentation>FRENCH POLYNESIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TF">\r
				<xsd:annotation>\r
					<xsd:documentation>FRENCH SOUTHERN TERRITORIES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GA">\r
				<xsd:annotation>\r
					<xsd:documentation>GABON</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GM">\r
				<xsd:annotation>\r
					<xsd:documentation>GAMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GE">\r
				<xsd:annotation>\r
					<xsd:documentation>GEORGIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DE">\r
				<xsd:annotation>\r
					<xsd:documentation>GERMANY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GH">\r
				<xsd:annotation>\r
					<xsd:documentation>GHANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GI">\r
				<xsd:annotation>\r
					<xsd:documentation>GIBRALTAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GR">\r
				<xsd:annotation>\r
					<xsd:documentation>GREECE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GL">\r
				<xsd:annotation>\r
					<xsd:documentation>GREENLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GD">\r
				<xsd:annotation>\r
					<xsd:documentation>GRENADA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GP">\r
				<xsd:annotation>\r
					<xsd:documentation>GUADELOUPE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GU">\r
				<xsd:annotation>\r
					<xsd:documentation>GUAM</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GT">\r
				<xsd:annotation>\r
					<xsd:documentation>GUATEMALA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GG">\r
				<xsd:annotation>\r
					<xsd:documentation>GUERNSEY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GN">\r
				<xsd:annotation>\r
					<xsd:documentation>GUINEA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GW">\r
				<xsd:annotation>\r
					<xsd:documentation>GUINEA-BISSAU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GY">\r
				<xsd:annotation>\r
					<xsd:documentation>GUYANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HT">\r
				<xsd:annotation>\r
					<xsd:documentation>HAITI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HM">\r
				<xsd:annotation>\r
					<xsd:documentation>HEARD ISLAND AND MCDONALD ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VA">\r
				<xsd:annotation>\r
					<xsd:documentation>HOLY SEE (VATICAN CITY STATE)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HN">\r
				<xsd:annotation>\r
					<xsd:documentation>HONDURAS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HK">\r
				<xsd:annotation>\r
					<xsd:documentation>HONG KONG</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HU">\r
				<xsd:annotation>\r
					<xsd:documentation>HUNGARY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IS">\r
				<xsd:annotation>\r
					<xsd:documentation>ICELAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IN">\r
				<xsd:annotation>\r
					<xsd:documentation>INDIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ID">\r
				<xsd:annotation>\r
					<xsd:documentation>INDONESIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IR">\r
				<xsd:annotation>\r
					<xsd:documentation>IRAN, ISLAMIC REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IQ">\r
				<xsd:annotation>\r
					<xsd:documentation>IRAQ</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IE">\r
				<xsd:annotation>\r
					<xsd:documentation>IRELAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IM">\r
				<xsd:annotation>\r
					<xsd:documentation>ISLE OF MAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IL">\r
				<xsd:annotation>\r
					<xsd:documentation>ISRAEL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IT">\r
				<xsd:annotation>\r
					<xsd:documentation>ITALY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JM">\r
				<xsd:annotation>\r
					<xsd:documentation>JAMAICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JP">\r
				<xsd:annotation>\r
					<xsd:documentation>JAPAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JE">\r
				<xsd:annotation>\r
					<xsd:documentation>JERSEY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JO">\r
				<xsd:annotation>\r
					<xsd:documentation>JORDAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KZ">\r
				<xsd:annotation>\r
					<xsd:documentation>KAZAKHSTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KE">\r
				<xsd:annotation>\r
					<xsd:documentation>KENYA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KI">\r
				<xsd:annotation>\r
					<xsd:documentation>KIRIBATI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KP">\r
				<xsd:annotation>\r
					<xsd:documentation>KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KR">\r
				<xsd:annotation>\r
					<xsd:documentation>KOREA, REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KW">\r
				<xsd:annotation>\r
					<xsd:documentation>KUWAIT</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KG">\r
				<xsd:annotation>\r
					<xsd:documentation>KYRGYZSTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LA">\r
				<xsd:annotation>\r
					<xsd:documentation>LAO PEOPLE'S DEMOCRATIC REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LV">\r
				<xsd:annotation>\r
					<xsd:documentation>LATVIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LB">\r
				<xsd:annotation>\r
					<xsd:documentation>LEBANON</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LS">\r
				<xsd:annotation>\r
					<xsd:documentation>LESOTHO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LR">\r
				<xsd:annotation>\r
					<xsd:documentation>LIBERIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LY">\r
				<xsd:annotation>\r
					<xsd:documentation>LIBYA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LI">\r
				<xsd:annotation>\r
					<xsd:documentation>LIECHTENSTEIN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LT">\r
				<xsd:annotation>\r
					<xsd:documentation>LITHUANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LU">\r
				<xsd:annotation>\r
					<xsd:documentation>LUXEMBOURG</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MO">\r
				<xsd:annotation>\r
					<xsd:documentation>MACAO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MK">\r
				<xsd:annotation>\r
					<xsd:documentation>NORTH MACEDONIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MG">\r
				<xsd:annotation>\r
					<xsd:documentation>MADAGASCAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MW">\r
				<xsd:annotation>\r
					<xsd:documentation>MALAWI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MY">\r
				<xsd:annotation>\r
					<xsd:documentation>MALAYSIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MV">\r
				<xsd:annotation>\r
					<xsd:documentation>MALDIVES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ML">\r
				<xsd:annotation>\r
					<xsd:documentation>MALI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MT">\r
				<xsd:annotation>\r
					<xsd:documentation>MALTA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MH">\r
				<xsd:annotation>\r
					<xsd:documentation>MARSHALL ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MQ">\r
				<xsd:annotation>\r
					<xsd:documentation>MARTINIQUE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MR">\r
				<xsd:annotation>\r
					<xsd:documentation>MAURITANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MU">\r
				<xsd:annotation>\r
					<xsd:documentation>MAURITIUS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="YT">\r
				<xsd:annotation>\r
					<xsd:documentation>MAYOTTE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MX">\r
				<xsd:annotation>\r
					<xsd:documentation>MEXICO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FM">\r
				<xsd:annotation>\r
					<xsd:documentation>MICRONESIA, FEDERATED STATES OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MD">\r
				<xsd:annotation>\r
					<xsd:documentation>MOLDOVA, REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MC">\r
				<xsd:annotation>\r
					<xsd:documentation>MONACO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MN">\r
				<xsd:annotation>\r
					<xsd:documentation>MONGOLIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ME">\r
				<xsd:annotation>\r
					<xsd:documentation>MONTENEGRO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MS">\r
				<xsd:annotation>\r
					<xsd:documentation>MONTSERRAT</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MA">\r
				<xsd:annotation>\r
					<xsd:documentation>MOROCCO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MZ">\r
				<xsd:annotation>\r
					<xsd:documentation>MOZAMBIQUE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MM">\r
				<xsd:annotation>\r
					<xsd:documentation>MYANMAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NA">\r
				<xsd:annotation>\r
					<xsd:documentation>NAMIBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NR">\r
				<xsd:annotation>\r
					<xsd:documentation>NAURU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NP">\r
				<xsd:annotation>\r
					<xsd:documentation>NEPAL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NL">\r
				<xsd:annotation>\r
					<xsd:documentation>NETHERLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NC">\r
				<xsd:annotation>\r
					<xsd:documentation>NEW CALEDONIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NZ">\r
				<xsd:annotation>\r
					<xsd:documentation>NEW ZEALAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NI">\r
				<xsd:annotation>\r
					<xsd:documentation>NICARAGUA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NE">\r
				<xsd:annotation>\r
					<xsd:documentation>NIGER</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NG">\r
				<xsd:annotation>\r
					<xsd:documentation>NIGERIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NU">\r
				<xsd:annotation>\r
					<xsd:documentation>NIUE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NF">\r
				<xsd:annotation>\r
					<xsd:documentation>NORFOLK ISLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MP">\r
				<xsd:annotation>\r
					<xsd:documentation>NORTHERN MARIANA ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NO">\r
				<xsd:annotation>\r
					<xsd:documentation>NORWAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OM">\r
				<xsd:annotation>\r
					<xsd:documentation>OMAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PK">\r
				<xsd:annotation>\r
					<xsd:documentation>PAKISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PW">\r
				<xsd:annotation>\r
					<xsd:documentation>PALAU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PS">\r
				<xsd:annotation>\r
					<xsd:documentation>PALESTINE, STATE OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PA">\r
				<xsd:annotation>\r
					<xsd:documentation>PANAMA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PG">\r
				<xsd:annotation>\r
					<xsd:documentation>PAPUA NEW GUINEA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PY">\r
				<xsd:annotation>\r
					<xsd:documentation>PARAGUAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PE">\r
				<xsd:annotation>\r
					<xsd:documentation>PERU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PH">\r
				<xsd:annotation>\r
					<xsd:documentation>PHILIPPINES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PN">\r
				<xsd:annotation>\r
					<xsd:documentation>PITCAIRN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PL">\r
				<xsd:annotation>\r
					<xsd:documentation>POLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PT">\r
				<xsd:annotation>\r
					<xsd:documentation>PORTUGAL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PR">\r
				<xsd:annotation>\r
					<xsd:documentation>PUERTO RICO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="QA">\r
				<xsd:annotation>\r
					<xsd:documentation>QATAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RE">\r
				<xsd:annotation>\r
					<xsd:documentation>REUNION</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RO">\r
				<xsd:annotation>\r
					<xsd:documentation>ROMANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RU">\r
				<xsd:annotation>\r
					<xsd:documentation>RUSSIAN FEDERATION</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RW">\r
				<xsd:annotation>\r
					<xsd:documentation>RWANDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BL">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT BARTHELEMY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SH">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KN">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT KITTS AND NEVIS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LC">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT LUCIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MF">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT MARTIN (FRENCH PART)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PM">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT PIERRE AND MIQUELON</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VC">\r
				<xsd:annotation>\r
					<xsd:documentation>SAINT VINCENT AND THE GRENADINES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="WS">\r
				<xsd:annotation>\r
					<xsd:documentation>SAMOA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SM">\r
				<xsd:annotation>\r
					<xsd:documentation>SAN MARINO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ST">\r
				<xsd:annotation>\r
					<xsd:documentation>SAO TOME AND PRINCIPE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SA">\r
				<xsd:annotation>\r
					<xsd:documentation>SAUDI ARABIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SN">\r
				<xsd:annotation>\r
					<xsd:documentation>SENEGAL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RS">\r
				<xsd:annotation>\r
					<xsd:documentation>SERBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SC">\r
				<xsd:annotation>\r
					<xsd:documentation>SEYCHELLES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SL">\r
				<xsd:annotation>\r
					<xsd:documentation>SIERRA LEONE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SG">\r
				<xsd:annotation>\r
					<xsd:documentation>SINGAPORE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SX">\r
				<xsd:annotation>\r
					<xsd:documentation>SINT MAARTEN (DUTCH PART)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SK">\r
				<xsd:annotation>\r
					<xsd:documentation>SLOVAKIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SI">\r
				<xsd:annotation>\r
					<xsd:documentation>SLOVENIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SB">\r
				<xsd:annotation>\r
					<xsd:documentation>SOLOMON ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SO">\r
				<xsd:annotation>\r
					<xsd:documentation>SOMALIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZA">\r
				<xsd:annotation>\r
					<xsd:documentation>SOUTH AFRICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GS">\r
				<xsd:annotation>\r
					<xsd:documentation>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SS">\r
				<xsd:annotation>\r
					<xsd:documentation>SOUTH SUDAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ES">\r
				<xsd:annotation>\r
					<xsd:documentation>SPAIN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LK">\r
				<xsd:annotation>\r
					<xsd:documentation>SRI LANKA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SD">\r
				<xsd:annotation>\r
					<xsd:documentation>SUDAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SR">\r
				<xsd:annotation>\r
					<xsd:documentation>SURINAME</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SJ">\r
				<xsd:annotation>\r
					<xsd:documentation>SVALBARD AND JAN MAYEN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SZ">\r
				<xsd:annotation>\r
					<xsd:documentation>ESWATINI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SE">\r
				<xsd:annotation>\r
					<xsd:documentation>SWEDEN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CH">\r
				<xsd:annotation>\r
					<xsd:documentation>SWITZERLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SY">\r
				<xsd:annotation>\r
					<xsd:documentation>SYRIAN ARAB REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TW">\r
				<xsd:annotation>\r
					<xsd:documentation>TAIWAN, PROVINCE OF CHINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TJ">\r
				<xsd:annotation>\r
					<xsd:documentation>TAJIKISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TZ">\r
				<xsd:annotation>\r
					<xsd:documentation>TANZANIA, UNITED REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TH">\r
				<xsd:annotation>\r
					<xsd:documentation>THAILAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TL">\r
				<xsd:annotation>\r
					<xsd:documentation>TIMOR-LESTE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TG">\r
				<xsd:annotation>\r
					<xsd:documentation>TOGO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TK">\r
				<xsd:annotation>\r
					<xsd:documentation>TOKELAU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TO">\r
				<xsd:annotation>\r
					<xsd:documentation>TONGA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TT">\r
				<xsd:annotation>\r
					<xsd:documentation>TRINIDAD AND TOBAGO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TN">\r
				<xsd:annotation>\r
					<xsd:documentation>TUNISIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TR">\r
				<xsd:annotation>\r
					<xsd:documentation>TURKEY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TM">\r
				<xsd:annotation>\r
					<xsd:documentation>TURKMENISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TC">\r
				<xsd:annotation>\r
					<xsd:documentation>TURKS AND CAICOS ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TV">\r
				<xsd:annotation>\r
					<xsd:documentation>TUVALU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UG">\r
				<xsd:annotation>\r
					<xsd:documentation>UGANDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UA">\r
				<xsd:annotation>\r
					<xsd:documentation>UKRAINE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AE">\r
				<xsd:annotation>\r
					<xsd:documentation>UNITED ARAB EMIRATES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GB">\r
				<xsd:annotation>\r
					<xsd:documentation>UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="US">\r
				<xsd:annotation>\r
					<xsd:documentation>UNITED STATES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UM">\r
				<xsd:annotation>\r
					<xsd:documentation>UNITED STATES MINOR OUTLYING ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UY">\r
				<xsd:annotation>\r
					<xsd:documentation>URUGUAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UZ">\r
				<xsd:annotation>\r
					<xsd:documentation>UZBEKISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VU">\r
				<xsd:annotation>\r
					<xsd:documentation>VANUATU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VE">\r
				<xsd:annotation>\r
					<xsd:documentation>VENEZUELA, BOLIVARIAN REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VN">\r
				<xsd:annotation>\r
					<xsd:documentation>VIET NAM</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VG">\r
				<xsd:annotation>\r
					<xsd:documentation>VIRGIN ISLANDS, BRITISH</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VI">\r
				<xsd:annotation>\r
					<xsd:documentation>VIRGIN ISLANDS, U.S.</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="WF">\r
				<xsd:annotation>\r
					<xsd:documentation>WALLIS AND FUTUNA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EH">\r
				<xsd:annotation>\r
					<xsd:documentation>WESTERN SAHARA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="YE">\r
				<xsd:annotation>\r
					<xsd:documentation>YEMEN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZM">\r
				<xsd:annotation>\r
					<xsd:documentation>ZAMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZW">\r
				<xsd:annotation>\r
					<xsd:documentation>ZIMBABWE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XK">\r
				<xsd:annotation>\r
					<xsd:documentation>KOSOVO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="X5">\r
				<xsd:annotation>\r
					<xsd:documentation>STATELESS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XX">\r
				<xsd:annotation>\r
					<xsd:documentation>OTHER COUNTRY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!--   -->\r
	<!--  ISO 4217 alpha 3 Currency Code \r
\r
The following disclaimer refers to all uses of the ISO currency code list in the CBC schema: For practical reasons, the list is based on the ISO 4217 Alpha 3 currency list which is currently used by banks and other financial institutions, and hence by tax administrations. The use of this list does not imply the expression by the OECD of any opinion whatsoever concerning the legal status of the territories listed. Its content is without prejudice to the status of or sovereignty over any territory, to the delimitation of international frontiers and boundaries and to the name of any territory, city or area.  \r
     -->\r
	<xsd:simpleType name="currCode_Type">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">\r
			The appropriate currency code from the ISO 4217 three-byte alpha version for the currency in which a monetary amount is expressed. \r
			</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:enumeration value="AED">\r
				<xsd:annotation>\r
					<xsd:documentation>UAE Dirham: UNITED ARAB EMIRATES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AFN">\r
				<xsd:annotation>\r
					<xsd:documentation>Afghani: AFGHANISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ALL">\r
				<xsd:annotation>\r
					<xsd:documentation>Lek: ALBANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AMD">\r
				<xsd:annotation>\r
					<xsd:documentation>Armenian Dram: ARMENIA	</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ANG">\r
				<xsd:annotation>\r
					<xsd:documentation>Netherlands Antillean Guilder: CURACAO; SINT MAARTEN (DUTCH PART)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AOA">\r
				<xsd:annotation>\r
					<xsd:documentation>Kwanza: ANGOLA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ARS">\r
				<xsd:annotation>\r
					<xsd:documentation>Argentine Peso: ARGENTINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AUD">\r
				<xsd:annotation>\r
					<xsd:documentation>Australian Dollar: AUSTRALIA; CHRISTMAS ISLAND; COCOS (KEELING) ISLANDS; HEARD ISLAND AND McDONALD ISLANDS; KIRIBATI; NAURU; NORFOLK ISLAND; TUVALU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AWG">\r
				<xsd:annotation>\r
					<xsd:documentation>Aruban Florin: ARUBA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AZN">\r
				<xsd:annotation>\r
					<xsd:documentation>Azerbaijan Manat: AZERBAIJAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BAM">\r
				<xsd:annotation>\r
					<xsd:documentation>Convertible Mark: BOSNIA AND HERZEGOVINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BBD">\r
				<xsd:annotation>\r
					<xsd:documentation>Barbados Dollar: BARBADOS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BDT">\r
				<xsd:annotation>\r
					<xsd:documentation>Taka: BANGLADESH</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BGN">\r
				<xsd:annotation>\r
					<xsd:documentation>Bulgarian Lev: BULGARIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BHD">\r
				<xsd:annotation>\r
					<xsd:documentation>Bahraini Dinar: BAHRAIN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BIF">\r
				<xsd:annotation>\r
					<xsd:documentation>Burundi Franc: BURUNDI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BMD">\r
				<xsd:annotation>\r
					<xsd:documentation>Bermudian Dollar: BERMUDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BND">\r
				<xsd:annotation>\r
					<xsd:documentation>Brunei Dollar: BRUNEI DARUSSALAM</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BOB">\r
				<xsd:annotation>\r
					<xsd:documentation>Boliviano: BOLIVIA, PLURINATIONAL STATE OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BOV">\r
				<xsd:annotation>\r
					<xsd:documentation>Mvdol: BOLIVIA, PLURINATIONAL STATE OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BRL">\r
				<xsd:annotation>\r
					<xsd:documentation>Brazilian Real: BRAZIL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BSD">\r
				<xsd:annotation>\r
					<xsd:documentation>Bahamian Dollar: BAHAMAS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BTN">\r
				<xsd:annotation>\r
					<xsd:documentation>Ngultrum: BHUTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BWP">\r
				<xsd:annotation>\r
					<xsd:documentation>Pula: BOTSWANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BYN">\r
				<xsd:annotation>\r
					<xsd:documentation>Belarusian Ruble: BELARUS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BYR">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: Belarussian Ruble: BELARUS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BZD">\r
				<xsd:annotation>\r
					<xsd:documentation>Belize Dollar: BELIZE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CAD">\r
				<xsd:annotation>\r
					<xsd:documentation>Canadian Dollar: CANADA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CDF">\r
				<xsd:annotation>\r
					<xsd:documentation>Congolese Franc: CONGO, THE DEMOCRATIC REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CHE">\r
				<xsd:annotation>\r
					<xsd:documentation>WIR Euro: SWITZERLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CHF">\r
				<xsd:annotation>\r
					<xsd:documentation>Swiss Franc: LIECHTENSTEIN; SWITZERLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CHW">\r
				<xsd:annotation>\r
					<xsd:documentation>WIR Franc: SWITZERLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CLF">\r
				<xsd:annotation>\r
					<xsd:documentation>Unidad de Fomento: CHILE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CLP">\r
				<xsd:annotation>\r
					<xsd:documentation>Chilean Peso: CHILE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CNY">\r
				<xsd:annotation>\r
					<xsd:documentation>Yuan Renminbi: CHINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="COP">\r
				<xsd:annotation>\r
					<xsd:documentation>Colombian Peso: COLOMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="COU">\r
				<xsd:annotation>\r
					<xsd:documentation>Unidad de Valor Real: COLOMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CRC">\r
				<xsd:annotation>\r
					<xsd:documentation>Costa Rican Colon: COSTA RICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CUC">\r
				<xsd:annotation>\r
					<xsd:documentation>Peso Convertible: CUBA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CUP">\r
				<xsd:annotation>\r
					<xsd:documentation>Cuban Peso: CUBA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CVE">\r
				<xsd:annotation>\r
					<xsd:documentation>Cabo Verde Escudo: CABO VERDE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CZK">\r
				<xsd:annotation>\r
					<xsd:documentation>Czech Koruna: CZECHIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DJF">\r
				<xsd:annotation>\r
					<xsd:documentation>Djibouti Franc: DJIBOUTI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DKK">\r
				<xsd:annotation>\r
					<xsd:documentation>Danish Krone: DENMARK; FAROE ISLANDS; GREENLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DOP">\r
				<xsd:annotation>\r
					<xsd:documentation>Dominican Peso: DOMINICAN REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DZD">\r
				<xsd:annotation>\r
					<xsd:documentation>Algerian Dinar: ALGERIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EGP">\r
				<xsd:annotation>\r
					<xsd:documentation>Egyptian Pound: EGYPT</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ERN">\r
				<xsd:annotation>\r
					<xsd:documentation>Nakfa: ERITREA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ETB">\r
				<xsd:annotation>\r
					<xsd:documentation>Ethiopian Birr: ETHIOPIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EUR">\r
				<xsd:annotation>\r
					<xsd:documentation>Euro: ALAND ISLANDS; ANDORRA; AUSTRIA; BELGIUM; CYPRUS; ESTONIA; EUROPEAN UNION; FINLAND; FRANCE; FRENCH GUIANA; FRENCH SOUTHERN TERRITORIES; GERMANY; GREECE; GUADELOUPE; HOLY SEE (VATICAN CITY STATE); IRELAND; ITALY; LATVIA; LITHUANIA; LUXEMBOURG; MALTA; MARTINIQUE; MAYOTTE; MONACO; MONTENEGRO; NETHERLANDS; PORTUGAL; REUNION; SAINT BARTHELEMY; SAINT MARTIN (FRENCH PART); SAINT PIERRE AND MIQUELON; SAN MARINO; SLOVAKIA; SLOVENIA; SPAIN; Vatican City State (HOLY SEE)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FJD">\r
				<xsd:annotation>\r
					<xsd:documentation>Fiji Dollar: FIJI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FKP">\r
				<xsd:annotation>\r
					<xsd:documentation>Falkland Islands Pound: FALKLAND ISLANDS (MALVINAS)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GBP">\r
				<xsd:annotation>\r
					<xsd:documentation>Pound Sterling: GUERNSEY; ISLE OF MAN; JERSEY; UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GEL">\r
				<xsd:annotation>\r
					<xsd:documentation>Lari: GEORGIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GHS">\r
				<xsd:annotation>\r
					<xsd:documentation>Ghana Cedi: GHANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GIP">\r
				<xsd:annotation>\r
					<xsd:documentation>Gibraltar Pound: GIBRALTAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GMD">\r
				<xsd:annotation>\r
					<xsd:documentation>Dalasi: GAMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GNF">\r
				<xsd:annotation>\r
					<xsd:documentation>Guinean Franc: GUINEA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GTQ">\r
				<xsd:annotation>\r
					<xsd:documentation>Quetzal: GUATEMALA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GYD">\r
				<xsd:annotation>\r
					<xsd:documentation>Guyana Dollar: GUYANA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HKD">\r
				<xsd:annotation>\r
					<xsd:documentation>Hong Kong Dollar: HONG KONG</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HNL">\r
				<xsd:annotation>\r
					<xsd:documentation>Lempira: HONDURAS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HRK">\r
				<xsd:annotation>\r
					<xsd:documentation>Kuna: CROATIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HTG">\r
				<xsd:annotation>\r
					<xsd:documentation>Gourde: HAITI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HUF">\r
				<xsd:annotation>\r
					<xsd:documentation>Forint: HUNGARY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IDR">\r
				<xsd:annotation>\r
					<xsd:documentation>Rupiah: INDONESIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ILS">\r
				<xsd:annotation>\r
					<xsd:documentation>New Israeli Sheqel: ISRAEL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="INR">\r
				<xsd:annotation>\r
					<xsd:documentation>Indian Rupee: BHUTAN; INDIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IQD">\r
				<xsd:annotation>\r
					<xsd:documentation>Iraqi Dinar: IRAQ</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IRR">\r
				<xsd:annotation>\r
					<xsd:documentation>Iranian Rial: IRAN, ISLAMIC REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ISK">\r
				<xsd:annotation>\r
					<xsd:documentation>Iceland Krona: ICELAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JMD">\r
				<xsd:annotation>\r
					<xsd:documentation>Jamaican Dollar: JAMAICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JOD">\r
				<xsd:annotation>\r
					<xsd:documentation>Jordanian Dinar: JORDAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JPY">\r
				<xsd:annotation>\r
					<xsd:documentation>Yen: JAPAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KES">\r
				<xsd:annotation>\r
					<xsd:documentation>Kenyan Shilling: KENYA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KGS">\r
				<xsd:annotation>\r
					<xsd:documentation>Som: KYRGYZSTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KHR">\r
				<xsd:annotation>\r
					<xsd:documentation>Riel: CAMBODIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KMF">\r
				<xsd:annotation>\r
					<xsd:documentation>Comorian Franc : COMOROS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KPW">\r
				<xsd:annotation>\r
					<xsd:documentation>North Korean Won: KOREA, DEMOCRATIC PEOPLE’S REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KRW">\r
				<xsd:annotation>\r
					<xsd:documentation>Won: KOREA, REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KWD">\r
				<xsd:annotation>\r
					<xsd:documentation>Kuwaiti Dinar: KUWAIT</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KYD">\r
				<xsd:annotation>\r
					<xsd:documentation>Cayman Islands Dollar: CAYMAN ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KZT">\r
				<xsd:annotation>\r
					<xsd:documentation>Tenge: KAZAKHSTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LAK">\r
				<xsd:annotation>\r
					<xsd:documentation>Lao Kip: LAO PEOPLE’S DEMOCRATIC REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LBP">\r
				<xsd:annotation>\r
					<xsd:documentation>Lebanese Pound: LEBANON</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LKR">\r
				<xsd:annotation>\r
					<xsd:documentation>Sri Lanka Rupee: SRI LANKA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LRD">\r
				<xsd:annotation>\r
					<xsd:documentation>Liberian Dollar: LIBERIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LSL">\r
				<xsd:annotation>\r
					<xsd:documentation>Loti: LESOTHO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LTL">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: Lithuanian Litas: LITHUANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LVL">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: Latvian Lats: LATVIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LYD">\r
				<xsd:annotation>\r
					<xsd:documentation>Libyan Dinar: LIBYA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MAD">\r
				<xsd:annotation>\r
					<xsd:documentation>Moroccan Dirham: MOROCCO; WESTERN SAHARA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MDL">\r
				<xsd:annotation>\r
					<xsd:documentation>Moldovan Leu: MOLDOVA, REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MGA">\r
				<xsd:annotation>\r
					<xsd:documentation>Malagasy Ariary: MADAGASCAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MKD">\r
				<xsd:annotation>\r
					<xsd:documentation>Denar: MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MMK">\r
				<xsd:annotation>\r
					<xsd:documentation>Kyat: MYANMAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MNT">\r
				<xsd:annotation>\r
					<xsd:documentation>Tugrik: MONGOLIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MOP">\r
				<xsd:annotation>\r
					<xsd:documentation>Pataca: MACAO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MRO">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: Ouguiya: MAURITANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MRU">\r
				<xsd:annotation>\r
					<xsd:documentation>Ouguiya: MAURITANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MUR">\r
				<xsd:annotation>\r
					<xsd:documentation>Mauritius Rupee: MAURITIUS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MVR">\r
				<xsd:annotation>\r
					<xsd:documentation>Rufiyaa: MALDIVES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MWK">\r
				<xsd:annotation>\r
					<xsd:documentation>Malawi Kwacha: MALAWI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MXN">\r
				<xsd:annotation>\r
					<xsd:documentation>Mexican Peso: MEXICO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MXV">\r
				<xsd:annotation>\r
					<xsd:documentation>Mexican Unidad de Inversion (UDI): MEXICO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MYR">\r
				<xsd:annotation>\r
					<xsd:documentation>Malaysian Ringgit: MALAYSIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MZN">\r
				<xsd:annotation>\r
					<xsd:documentation>Mozambique Metical: MOZAMBIQUE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NAD">\r
				<xsd:annotation>\r
					<xsd:documentation>Namibia Dollar: NAMIBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NGN">\r
				<xsd:annotation>\r
					<xsd:documentation>Naira: NIGERIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NIO">\r
				<xsd:annotation>\r
					<xsd:documentation>Cordoba Oro: NICARAGUA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NOK">\r
				<xsd:annotation>\r
					<xsd:documentation>Norwegian Krone: BOUVET ISLAND; NORWAY; SVALBARD AND JAN MAYEN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NPR">\r
				<xsd:annotation>\r
					<xsd:documentation>Nepalese Rupee: NEPAL</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NZD">\r
				<xsd:annotation>\r
					<xsd:documentation>New Zealand Dollar: COOK ISLANDS; NEW ZEALAND; NIUE; PITCAIRN; TOKELAU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OMR">\r
				<xsd:annotation>\r
					<xsd:documentation>Rial Omani: OMAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PAB">\r
				<xsd:annotation>\r
					<xsd:documentation>Balboa: PANAMA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PEN">\r
				<xsd:annotation>\r
					<xsd:documentation>Sol: PERU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PGK">\r
				<xsd:annotation>\r
					<xsd:documentation>Kina: PAPUA NEW GUINEA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PHP">\r
				<xsd:annotation>\r
					<xsd:documentation>Philippine Peso: PHILIPPINES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PKR">\r
				<xsd:annotation>\r
					<xsd:documentation>Pakistan Rupee: PAKISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PLN">\r
				<xsd:annotation>\r
					<xsd:documentation>Zloty: POLAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PYG">\r
				<xsd:annotation>\r
					<xsd:documentation>Guarani: PARAGUAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="QAR">\r
				<xsd:annotation>\r
					<xsd:documentation>Qatari Rial: QATAR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RON">\r
				<xsd:annotation>\r
					<xsd:documentation>Romanian Leu: ROMANIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RSD">\r
				<xsd:annotation>\r
					<xsd:documentation>Serbian Dinar: SERBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RUB">\r
				<xsd:annotation>\r
					<xsd:documentation>Russian Ruble: RUSSIAN FEDERATION</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RWF">\r
				<xsd:annotation>\r
					<xsd:documentation>Rwanda Franc: RWANDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SAR">\r
				<xsd:annotation>\r
					<xsd:documentation>Saudi Riyal: SAUDI ARABIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SBD">\r
				<xsd:annotation>\r
					<xsd:documentation>Solomon Islands Dollar: SOLOMON ISLANDS</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SCR">\r
				<xsd:annotation>\r
					<xsd:documentation>Seychelles Rupee: SEYCHELLES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SDG">\r
				<xsd:annotation>\r
					<xsd:documentation>Sudanese Pound: SUDAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SEK">\r
				<xsd:annotation>\r
					<xsd:documentation>Swedish Krona: SWEDEN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SGD">\r
				<xsd:annotation>\r
					<xsd:documentation>Singapore Dollar: SINGAPORE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SHP">\r
				<xsd:annotation>\r
					<xsd:documentation>Saint Helena Pound: SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SLL">\r
				<xsd:annotation>\r
					<xsd:documentation>Leone: SIERRA LEONE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SOS">\r
				<xsd:annotation>\r
					<xsd:documentation>Somali Shilling: SOMALIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SRD">\r
				<xsd:annotation>\r
					<xsd:documentation>Surinam Dollar: SURINAME</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SSP">\r
				<xsd:annotation>\r
					<xsd:documentation>South Sudanese Pound: SOUTH SUDAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="STD">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: Dobra: SAO TOME AND PRINCIPE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="STN">\r
				<xsd:annotation>\r
					<xsd:documentation>Dobra: SAO TOME AND PRINCIPE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SVC">\r
				<xsd:annotation>\r
					<xsd:documentation>El Salvador Colon: EL SALVADOR</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SYP">\r
				<xsd:annotation>\r
					<xsd:documentation>Syrian Pound: SYRIAN ARAB REPUBLIC</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SZL">\r
				<xsd:annotation>\r
					<xsd:documentation>Lilangeni: ESWATINI</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="THB">\r
				<xsd:annotation>\r
					<xsd:documentation>Baht: THAILAND</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TJS">\r
				<xsd:annotation>\r
					<xsd:documentation>Somoni: TAJIKISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TMT">\r
				<xsd:annotation>\r
					<xsd:documentation>Turkmenistan New Manat: TURKMENISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TND">\r
				<xsd:annotation>\r
					<xsd:documentation>Tunisian Dinar: TUNISIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TOP">\r
				<xsd:annotation>\r
					<xsd:documentation>Pa’anga: TONGA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TRY">\r
				<xsd:annotation>\r
					<xsd:documentation>Turkish Lira: TURKEY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TTD">\r
				<xsd:annotation>\r
					<xsd:documentation>Trinidad and Tobago Dollar: TRINIDAD AND TOBAGO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TWD">\r
				<xsd:annotation>\r
					<xsd:documentation>New Taiwan Dollar: TAIWAN, PROVINCE OF CHINA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TZS">\r
				<xsd:annotation>\r
					<xsd:documentation>Tanzanian Shilling: TANZANIA, UNITED REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UAH">\r
				<xsd:annotation>\r
					<xsd:documentation>Hryvnia: UKRAINE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UGX">\r
				<xsd:annotation>\r
					<xsd:documentation>Uganda Shilling: UGANDA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="USD">\r
				<xsd:annotation>\r
					<xsd:documentation>US Dollar: AMERICAN SAMOA; BONAIRE; SINT EUSTATIUS AND SABA; BRITISH INDIAN OCEAN TERRITORY; ECUADOR; EL SALVADOR; GUAM; HAITI; MARSHALL ISLANDS; MICRONESIA, FEDERATED STATES OF; NORTHERN MARIANA ISLANDS; PALAU; PANAMA; PUERTO RICO; TIMOR-LESTE; TURKS AND CAICOS ISLANDS; UNITED STATES; UNITED STATES MINOR OUTLYING ISLANDS; VIRGIN ISLANDS (BRITISH); VIRGIN ISLANDS (US)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="USN">\r
				<xsd:annotation>\r
					<xsd:documentation>US Dollar (Next day): UNITED STATES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="USS">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: US Dollar (Same day): UNITED STATES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UYI">\r
				<xsd:annotation>\r
					<xsd:documentation>Uruguay Peso en Unidades Indexadas (UI): URUGUAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UYU">\r
				<xsd:annotation>\r
					<xsd:documentation>Peso Uruguayo: URUGUAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UYW">\r
				<xsd:annotation>\r
					<xsd:documentation>Unidad Previsional: URUGUAY</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UZS">\r
				<xsd:annotation>\r
					<xsd:documentation>Uzbekistan Sum: UZBEKISTAN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VEF">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: Bolivar: VENEZUELA, BOLIVARIAN REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VES">\r
				<xsd:annotation>\r
					<xsd:documentation>Bolívar Soberano: VENEZUELA, BOLIVARIAN REPUBLIC OF</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VND">\r
				<xsd:annotation>\r
					<xsd:documentation>Dong: VIET NAM</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VUV">\r
				<xsd:annotation>\r
					<xsd:documentation>Vatu: VANUATU</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="WST">\r
				<xsd:annotation>\r
					<xsd:documentation>Tala: SAMOA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XAF">\r
				<xsd:annotation>\r
					<xsd:documentation>CFA Franc BEAC: CAMEROON; CENTRAL AFRICAN REPUBLIC; CHAD; CONGO; EQUATORIAL GUINEA; GABON</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XAG">\r
				<xsd:annotation>\r
					<xsd:documentation>Silver: ZZ11_Silver</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XAU">\r
				<xsd:annotation>\r
					<xsd:documentation>Gold: ZZ08_Gold</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XBA">\r
				<xsd:annotation>\r
					<xsd:documentation>Bond Markets Unit European Composite Unit (EURCO):  ZZ01_Bond Markets Unit European_EURCO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XBB">\r
				<xsd:annotation>\r
					<xsd:documentation>Bond Markets Unit European Monetary Unit (E.M.U.-6): ZZ02_Bond Markets Unit European_EMU-6</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XBC">\r
				<xsd:annotation>\r
					<xsd:documentation>Bond Markets Unit European Unit of Account 9 (E.U.A.-9): ZZ03_Bond Markets Unit European_EUA-9</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XBD">\r
				<xsd:annotation>\r
					<xsd:documentation>Bond Markets Unit European Unit of Account 17 (E.U.A.-17): ZZ04_Bond Markets Unit European_EUA-17</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XCD">\r
				<xsd:annotation>\r
					<xsd:documentation>East Caribbean Dollar: ANGUILLA; ANTIGUA AND BARBUDA; DOMINICA; GRENADA; MONTSERRAT; SAINT KITTS AND NEVIS; SAINT LUCIA; SAINT VINCENT AND THE GRENADINES</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XDR">\r
				<xsd:annotation>\r
					<xsd:documentation>SDR (Special Drawing Right): INTERNATIONAL MONETARY FUND (IMF)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XFU">\r
				<xsd:annotation>\r
					<xsd:documentation>Historic use: UIC-Franc: ZZ05_UIC-Franc</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XOF">\r
				<xsd:annotation>\r
					<xsd:documentation>CFA Franc BCEAO: BENIN; BURKINA FASO; COTE D'IVOIRE; GUINEA-BISSAU; MALI; NIGER; SENEGAL; TOGO</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XPD">\r
				<xsd:annotation>\r
					<xsd:documentation>Palladium: ZZ09_Palladium</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XPF">\r
				<xsd:annotation>\r
					<xsd:documentation>CFP Franc: FRENCH POLYNESIA; NEW CALEDONIA; WALLIS AND FUTUNA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XPT">\r
				<xsd:annotation>\r
					<xsd:documentation>Platinum: ZZ10_Platinum</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XSU">\r
				<xsd:annotation>\r
					<xsd:documentation>Sucre: SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XUA">\r
				<xsd:annotation>\r
					<xsd:documentation>ADB Unit of Account: MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XXX">\r
				<xsd:annotation>\r
					<xsd:documentation>The codes assigned for transactions where no currency is involved: ZZ07_No_Currency</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="YER">\r
				<xsd:annotation>\r
					<xsd:documentation>Yemeni Rial: YEMEN</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZAR">\r
				<xsd:annotation>\r
					<xsd:documentation>Rand: LESOTHO; NAMIBIA; SOUTH AFRICA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZMW">\r
				<xsd:annotation>\r
					<xsd:documentation>Zambian Kwacha: ZAMBIA</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZWL">\r
				<xsd:annotation>\r
					<xsd:documentation>Zimbabwe Dollar: ZIMBABWE</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!--   -->\r
	<!--  Language codes - ISO 639 - Part 1 (ISO 639-1:2002) \r
\r
The following disclaimer refers to all uses of the ISO language code list in the CBC schema: For practical reasons, the list is based on the ISO 639-1 language list which is currently used by banks and other financial institutions, and hence by tax administrations. The use of this list does not imply the expression by the OECD of any opinion whatsoever concerning the legal status of the territories listed. Its content is without prejudice to the status of or sovereignty over any territory, to the delimitation of international frontiers and boundaries and to the name of any territory, city or area.  \r
    -->\r
	<xsd:simpleType name="LanguageCode_Type">\r
		<xsd:annotation>\r
			<xsd:documentation xml:lang="en">ISO 639 - Part 1 Language codes</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:enumeration value="AA">\r
				<xsd:annotation>\r
					<xsd:documentation>Afar</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AB">\r
				<xsd:annotation>\r
					<xsd:documentation>Abkhazian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AF">\r
				<xsd:annotation>\r
					<xsd:documentation>Afrikaans</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AK">\r
				<xsd:annotation>\r
					<xsd:documentation>Akan</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SQ">\r
				<xsd:annotation>\r
					<xsd:documentation>Albanian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AM">\r
				<xsd:annotation>\r
					<xsd:documentation>Amharic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AR">\r
				<xsd:annotation>\r
					<xsd:documentation>Arabic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AN">\r
				<xsd:annotation>\r
					<xsd:documentation>Aragonese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HY">\r
				<xsd:annotation>\r
					<xsd:documentation>Armenian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AS">\r
				<xsd:annotation>\r
					<xsd:documentation>Assamese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AV">\r
				<xsd:annotation>\r
					<xsd:documentation>Avaric</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AE">\r
				<xsd:annotation>\r
					<xsd:documentation>Avestan</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AY">\r
				<xsd:annotation>\r
					<xsd:documentation>Aymara</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="AZ">\r
				<xsd:annotation>\r
					<xsd:documentation>Azerbaijani</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BA">\r
				<xsd:annotation>\r
					<xsd:documentation>Bashkir</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BM">\r
				<xsd:annotation>\r
					<xsd:documentation>Bambara</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EU">\r
				<xsd:annotation>\r
					<xsd:documentation>Basque</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BE">\r
				<xsd:annotation>\r
					<xsd:documentation>Belarusian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BN">\r
				<xsd:annotation>\r
					<xsd:documentation>Bengali</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BH">\r
				<xsd:annotation>\r
					<xsd:documentation>Bihari languages</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BI">\r
				<xsd:annotation>\r
					<xsd:documentation>Bislama</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BS">\r
				<xsd:annotation>\r
					<xsd:documentation>Bosnian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BR">\r
				<xsd:annotation>\r
					<xsd:documentation>Breton</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BG">\r
				<xsd:annotation>\r
					<xsd:documentation>Bulgarian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MY">\r
				<xsd:annotation>\r
					<xsd:documentation>Burmese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CA">\r
				<xsd:annotation>\r
					<xsd:documentation>Catalan; Valencian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CH">\r
				<xsd:annotation>\r
					<xsd:documentation>Chamorro</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CE">\r
				<xsd:annotation>\r
					<xsd:documentation>Chechen</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZH">\r
				<xsd:annotation>\r
					<xsd:documentation>Chinese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CU">\r
				<xsd:annotation>\r
					<xsd:documentation>Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CV">\r
				<xsd:annotation>\r
					<xsd:documentation>Chuvash</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KW">\r
				<xsd:annotation>\r
					<xsd:documentation>Cornish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CO">\r
				<xsd:annotation>\r
					<xsd:documentation>Corsican</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CR">\r
				<xsd:annotation>\r
					<xsd:documentation>Cree</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CS">\r
				<xsd:annotation>\r
					<xsd:documentation>Czech</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DA">\r
				<xsd:annotation>\r
					<xsd:documentation>Danish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DV">\r
				<xsd:annotation>\r
					<xsd:documentation>Divehi; Dhivehi; Maldivian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NL">\r
				<xsd:annotation>\r
					<xsd:documentation>Dutch; Flemish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DZ">\r
				<xsd:annotation>\r
					<xsd:documentation>Dzongkha</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EN">\r
				<xsd:annotation>\r
					<xsd:documentation>English</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EO">\r
				<xsd:annotation>\r
					<xsd:documentation>Esperanto</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ET">\r
				<xsd:annotation>\r
					<xsd:documentation>Estonian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EE">\r
				<xsd:annotation>\r
					<xsd:documentation>Ewe</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FO">\r
				<xsd:annotation>\r
					<xsd:documentation>Faroese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FJ">\r
				<xsd:annotation>\r
					<xsd:documentation>Fijian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FI">\r
				<xsd:annotation>\r
					<xsd:documentation>Finnish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FR">\r
				<xsd:annotation>\r
					<xsd:documentation>French</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FY">\r
				<xsd:annotation>\r
					<xsd:documentation>Western Frisian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FF">\r
				<xsd:annotation>\r
					<xsd:documentation>Fulah</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KA">\r
				<xsd:annotation>\r
					<xsd:documentation>Georgian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="DE">\r
				<xsd:annotation>\r
					<xsd:documentation>German</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GD">\r
				<xsd:annotation>\r
					<xsd:documentation>Gaelic; Scottish Gaelic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GA">\r
				<xsd:annotation>\r
					<xsd:documentation>Irish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GL">\r
				<xsd:annotation>\r
					<xsd:documentation>Galician</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GV">\r
				<xsd:annotation>\r
					<xsd:documentation>Manx</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="EL">\r
				<xsd:annotation>\r
					<xsd:documentation>Greek</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GN">\r
				<xsd:annotation>\r
					<xsd:documentation>Guarani</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="GU">\r
				<xsd:annotation>\r
					<xsd:documentation>Gujarati</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HT">\r
				<xsd:annotation>\r
					<xsd:documentation>Haitian; Haitian Creole</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HA">\r
				<xsd:annotation>\r
					<xsd:documentation>Hausa</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HE">\r
				<xsd:annotation>\r
					<xsd:documentation>Hebrew</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HZ">\r
				<xsd:annotation>\r
					<xsd:documentation>Herero</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HI">\r
				<xsd:annotation>\r
					<xsd:documentation>Hindi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HO">\r
				<xsd:annotation>\r
					<xsd:documentation>Hiri Motu</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HR">\r
				<xsd:annotation>\r
					<xsd:documentation>Croatian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="HU">\r
				<xsd:annotation>\r
					<xsd:documentation>Hungarian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IG">\r
				<xsd:annotation>\r
					<xsd:documentation>Igbo</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IS">\r
				<xsd:annotation>\r
					<xsd:documentation>Icelandic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IO">\r
				<xsd:annotation>\r
					<xsd:documentation>Ido</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="II">\r
				<xsd:annotation>\r
					<xsd:documentation>Sichuan Yi; Nuosu</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IU">\r
				<xsd:annotation>\r
					<xsd:documentation>Inuktitut</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IE">\r
				<xsd:annotation>\r
					<xsd:documentation>Interlingue; Occidental</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IA">\r
				<xsd:annotation>\r
					<xsd:documentation>Interlingua (International Auxiliary Language Association)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ID">\r
				<xsd:annotation>\r
					<xsd:documentation>Indonesian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IK">\r
				<xsd:annotation>\r
					<xsd:documentation>Inupiaq</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="IT">\r
				<xsd:annotation>\r
					<xsd:documentation>Italian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JV">\r
				<xsd:annotation>\r
					<xsd:documentation>Javanese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="JA">\r
				<xsd:annotation>\r
					<xsd:documentation>Japanese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KL">\r
				<xsd:annotation>\r
					<xsd:documentation>Kalaallisut; Greenlandic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KN">\r
				<xsd:annotation>\r
					<xsd:documentation>Kannada</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KS">\r
				<xsd:annotation>\r
					<xsd:documentation>Kashmiri</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KR">\r
				<xsd:annotation>\r
					<xsd:documentation>Kanuri</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KK">\r
				<xsd:annotation>\r
					<xsd:documentation>Kazakh</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KM">\r
				<xsd:annotation>\r
					<xsd:documentation>Central Khmer</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KI">\r
				<xsd:annotation>\r
					<xsd:documentation>Kikuyu; Gikuyu</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RW">\r
				<xsd:annotation>\r
					<xsd:documentation>Kinyarwanda</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KY">\r
				<xsd:annotation>\r
					<xsd:documentation>Kirghiz; Kyrgyz</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KV">\r
				<xsd:annotation>\r
					<xsd:documentation>Komi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KG">\r
				<xsd:annotation>\r
					<xsd:documentation>Kongo</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KO">\r
				<xsd:annotation>\r
					<xsd:documentation>Korean</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KJ">\r
				<xsd:annotation>\r
					<xsd:documentation>Kuanyama; Kwanyama</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="KU">\r
				<xsd:annotation>\r
					<xsd:documentation>Kurdish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LO">\r
				<xsd:annotation>\r
					<xsd:documentation>Lao</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LA">\r
				<xsd:annotation>\r
					<xsd:documentation>Latin</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LV">\r
				<xsd:annotation>\r
					<xsd:documentation>Latvian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LI">\r
				<xsd:annotation>\r
					<xsd:documentation>Limburgan; Limburger; Limburgish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LN">\r
				<xsd:annotation>\r
					<xsd:documentation>Lingala</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LT">\r
				<xsd:annotation>\r
					<xsd:documentation>Lithuanian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LB">\r
				<xsd:annotation>\r
					<xsd:documentation>Luxembourgish; Letzeburgesch</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LU">\r
				<xsd:annotation>\r
					<xsd:documentation>Luba-Katanga</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="LG">\r
				<xsd:annotation>\r
					<xsd:documentation>Ganda</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MK">\r
				<xsd:annotation>\r
					<xsd:documentation>Macedonian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MH">\r
				<xsd:annotation>\r
					<xsd:documentation>Marshallese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ML">\r
				<xsd:annotation>\r
					<xsd:documentation>Malayalam</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MI">\r
				<xsd:annotation>\r
					<xsd:documentation>Maori</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MR">\r
				<xsd:annotation>\r
					<xsd:documentation>Marathi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MS">\r
				<xsd:annotation>\r
					<xsd:documentation>Malay</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MG">\r
				<xsd:annotation>\r
					<xsd:documentation>Malagasy</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MT">\r
				<xsd:annotation>\r
					<xsd:documentation>Maltese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="MN">\r
				<xsd:annotation>\r
					<xsd:documentation>Mongolian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NA">\r
				<xsd:annotation>\r
					<xsd:documentation>Nauru</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NV">\r
				<xsd:annotation>\r
					<xsd:documentation>Navajo; Navaho</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NR">\r
				<xsd:annotation>\r
					<xsd:documentation>Ndebele, South; South Ndebele</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ND">\r
				<xsd:annotation>\r
					<xsd:documentation>Ndebele, North; North Ndebele</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NG">\r
				<xsd:annotation>\r
					<xsd:documentation>Ndonga</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NE">\r
				<xsd:annotation>\r
					<xsd:documentation>Nepali</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NN">\r
				<xsd:annotation>\r
					<xsd:documentation>Norwegian Nynorsk; Nynorsk, Norwegian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NB">\r
				<xsd:annotation>\r
					<xsd:documentation>Bokmål, Norwegian; Norwegian Bokmål</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NO">\r
				<xsd:annotation>\r
					<xsd:documentation>Norwegian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="NY">\r
				<xsd:annotation>\r
					<xsd:documentation>Chichewa; Chewa; Nyanja</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OC">\r
				<xsd:annotation>\r
					<xsd:documentation>Occitan; Provençal</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OJ">\r
				<xsd:annotation>\r
					<xsd:documentation>Ojibwa</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OR">\r
				<xsd:annotation>\r
					<xsd:documentation>Oriya</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OM">\r
				<xsd:annotation>\r
					<xsd:documentation>Oromo</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="OS">\r
				<xsd:annotation>\r
					<xsd:documentation>Ossetian; Ossetic</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PA">\r
				<xsd:annotation>\r
					<xsd:documentation>Panjabi; Punjabi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="FA">\r
				<xsd:annotation>\r
					<xsd:documentation>Persian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PI">\r
				<xsd:annotation>\r
					<xsd:documentation>Pali</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PL">\r
				<xsd:annotation>\r
					<xsd:documentation>Polish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PT">\r
				<xsd:annotation>\r
					<xsd:documentation>Portuguese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="PS">\r
				<xsd:annotation>\r
					<xsd:documentation>Pushto; Pashto</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="QU">\r
				<xsd:annotation>\r
					<xsd:documentation>Quechua</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RM">\r
				<xsd:annotation>\r
					<xsd:documentation>Romansh</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RO">\r
				<xsd:annotation>\r
					<xsd:documentation>Romanian; Moldavian; Moldovan</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RN">\r
				<xsd:annotation>\r
					<xsd:documentation>Rundi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="RU">\r
				<xsd:annotation>\r
					<xsd:documentation>Russian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SG">\r
				<xsd:annotation>\r
					<xsd:documentation>Sango</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SA">\r
				<xsd:annotation>\r
					<xsd:documentation>Sanskrit</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SI">\r
				<xsd:annotation>\r
					<xsd:documentation>Sinhala; Sinhalese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SK">\r
				<xsd:annotation>\r
					<xsd:documentation>Slovak</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SL">\r
				<xsd:annotation>\r
					<xsd:documentation>Slovenian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SE">\r
				<xsd:annotation>\r
					<xsd:documentation>Northern Sami</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SM">\r
				<xsd:annotation>\r
					<xsd:documentation>Samoan</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SN">\r
				<xsd:annotation>\r
					<xsd:documentation>Shona</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SD">\r
				<xsd:annotation>\r
					<xsd:documentation>Sindhi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SO">\r
				<xsd:annotation>\r
					<xsd:documentation>Somali</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ST">\r
				<xsd:annotation>\r
					<xsd:documentation>Sotho, Southern</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ES">\r
				<xsd:annotation>\r
					<xsd:documentation>Spanish; Castilian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SC">\r
				<xsd:annotation>\r
					<xsd:documentation>Sardinian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SR">\r
				<xsd:annotation>\r
					<xsd:documentation>Serbian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SS">\r
				<xsd:annotation>\r
					<xsd:documentation>Swati</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SU">\r
				<xsd:annotation>\r
					<xsd:documentation>Sundanese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SW">\r
				<xsd:annotation>\r
					<xsd:documentation>Swahili</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="SV">\r
				<xsd:annotation>\r
					<xsd:documentation>Swedish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TY">\r
				<xsd:annotation>\r
					<xsd:documentation>Tahitian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TA">\r
				<xsd:annotation>\r
					<xsd:documentation>Tamil</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TT">\r
				<xsd:annotation>\r
					<xsd:documentation>Tatar</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TE">\r
				<xsd:annotation>\r
					<xsd:documentation>Telugu</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TG">\r
				<xsd:annotation>\r
					<xsd:documentation>Tajik</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TL">\r
				<xsd:annotation>\r
					<xsd:documentation>Tagalog</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TH">\r
				<xsd:annotation>\r
					<xsd:documentation>Thai</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="BO">\r
				<xsd:annotation>\r
					<xsd:documentation>Tibetan</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TI">\r
				<xsd:annotation>\r
					<xsd:documentation>Tigrinya</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TO">\r
				<xsd:annotation>\r
					<xsd:documentation>Tonga (Tonga Islands)</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TN">\r
				<xsd:annotation>\r
					<xsd:documentation>Tswana</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TS">\r
				<xsd:annotation>\r
					<xsd:documentation>Tsonga</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TK">\r
				<xsd:annotation>\r
					<xsd:documentation>Turkmen</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TR">\r
				<xsd:annotation>\r
					<xsd:documentation>Turkish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="TW">\r
				<xsd:annotation>\r
					<xsd:documentation>Twi</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UG">\r
				<xsd:annotation>\r
					<xsd:documentation>Uighur; Uyghur</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UK">\r
				<xsd:annotation>\r
					<xsd:documentation>Ukrainian</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UR">\r
				<xsd:annotation>\r
					<xsd:documentation>Urdu</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="UZ">\r
				<xsd:annotation>\r
					<xsd:documentation>Uzbek</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VE">\r
				<xsd:annotation>\r
					<xsd:documentation>Venda</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VI">\r
				<xsd:annotation>\r
					<xsd:documentation>Vietnamese</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="VO">\r
				<xsd:annotation>\r
					<xsd:documentation>Volapük</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="CY">\r
				<xsd:annotation>\r
					<xsd:documentation>Welsh</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="WA">\r
				<xsd:annotation>\r
					<xsd:documentation>Walloon</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="WO">\r
				<xsd:annotation>\r
					<xsd:documentation>Wolof</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="XH">\r
				<xsd:annotation>\r
					<xsd:documentation>Xhosa</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="YI">\r
				<xsd:annotation>\r
					<xsd:documentation>Yiddish</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="YO">\r
				<xsd:annotation>\r
					<xsd:documentation>Yoruba</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZA">\r
				<xsd:annotation>\r
					<xsd:documentation>Zhuang; Chuang</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
			<xsd:enumeration value="ZU">\r
				<xsd:annotation>\r
					<xsd:documentation>Zulu</xsd:documentation>\r
				</xsd:annotation>\r
			</xsd:enumeration>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!--   -->\r
</xsd:schema>\r
`;async function i(i){let a=await e({xml:[{fileName:`cbc.xml`,contents:i}],schema:[{fileName:`CbcXML_v2.0.xsd`,contents:t}],preload:[{fileName:`oecdcbctypes_v5.0.xsd`,contents:n},{fileName:`isocbctypes_v1.1.xsd`,contents:r}],maxMemoryPages:1024});return a.valid?[]:a.errors.map(e=>e.loc?`ligne ${e.loc.lineNumber} : ${e.message}`:e.message)}export{i as validateSchema};