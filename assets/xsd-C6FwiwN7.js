import{t as e}from"./index-browser-B_p9ja31.js";var t=`<?xml version="1.0" encoding="UTF-8"?>
<!-- edited with XMLSpy v2013 rel. 2 sp1 (x64) (http://www.altova.com) by Accounting Division (OECD) -->
<xsd:schema xmlns:globe="urn:oecd:ties:globe:v2" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:stf="urn:oecd:ties:globestf:v5" xmlns:iso="urn:oecd:ties:isoglobetypes:v1" targetNamespace="urn:oecd:ties:globe:v2" elementFormDefault="qualified" attributeFormDefault="unqualified" version="1.0">
	<xsd:import namespace="urn:oecd:ties:isoglobetypes:v1" schemaLocation="isoglobetypes_v1.1.xsd"/>
	<xsd:import namespace="urn:oecd:ties:globestf:v5" schemaLocation="oecdglobetypes_v5.0.xsd"/>
	<!--+++++++++++++++++++++++  Reusable Simple types ++++++++++++++++++++++++++++++++++++++ -->
	<!-- Message type definitions -->
	<xsd:simpleType name="MessageType_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Message type defines the type of reporting </xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR"/>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!-- MessageTypeIndic - 101 to 103 -->
	<xsd:simpleType name="MessageTypeIndic_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">The MessageTypeIndic defines the type of message sent</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR101">
				<xsd:annotation>
					<xsd:documentation>The message contains new information</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR102">
				<xsd:annotation>
					<xsd:documentation>The message contains corrections for previously sent information</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR103">
				<xsd:annotation>
					<xsd:documentation>The message advises there is no data to report</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #2 Set of Enumerations - 201 to 205 - ID Type - Rules-->
	<xsd:simpleType name="IDTypeRules_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">ID Type - Rules</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR201">
				<xsd:annotation>
					<xsd:documentation>QIIR applicable to Low-Taxed Constituent Entities located in other jurisdictions only</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR202">
				<xsd:annotation>
					<xsd:documentation>QIIR applicable to both Low-Taxed Constituent Entities located in other jurisdictions and in the jurisdiction of the Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR203">
				<xsd:annotation>
					<xsd:documentation>QUTPR</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR204">
				<xsd:annotation>
					<xsd:documentation>QDMTT</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR205">
				<xsd:annotation>
					<xsd:documentation>Not applicable</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #3 Set of Enumerations - 301 to 317 - ID Type - GloBEStatus-->
	<xsd:simpleType name="IDTypeGloBEStatus_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">ID Type - GloBEStatus</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR301">
				<xsd:annotation>
					<xsd:documentation>Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR302">
				<xsd:annotation>
					<xsd:documentation>Flow-Through Entity – Tax Transparent</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR303">
				<xsd:annotation>
					<xsd:documentation>Flow-Through Entity – Reverse Hybrid</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR304">
				<xsd:annotation>
					<xsd:documentation>Hybrid Entity </xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR305">
				<xsd:annotation>
					<xsd:documentation>Permanent Establishment</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR306">
				<xsd:annotation>
					<xsd:documentation>Main Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR307">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR308">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Subsidiary</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR309">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR310">
				<xsd:annotation>
					<xsd:documentation>Investment Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR311">
				<xsd:annotation>
					<xsd:documentation>Insurance Investment Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR312">
				<xsd:annotation>
					<xsd:documentation>Securitisation Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR313">
				<xsd:annotation>
					<xsd:documentation>JV</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR314">
				<xsd:annotation>
					<xsd:documentation>JV Subsidiary</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR315">
				<xsd:annotation>
					<xsd:documentation>Non-Material Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR316">
				<xsd:annotation>
					<xsd:documentation>Excluded Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR317">
				<xsd:annotation>
					<xsd:documentation>Parent Entity required to apply a QIIR under Article 10.3.5</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR318">
				<xsd:annotation>
					<xsd:documentation>Non-group Member</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #4 Set of Enumerations - 401 to 405 - FilingInfo - FilingCE - Role-->
	<xsd:simpleType name="FilingCERole_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">FilingInfo - FilingCE - Role</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR401">
				<xsd:annotation>
					<xsd:documentation>Ultimate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR402">
				<xsd:annotation>
					<xsd:documentation>Designated Filing Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR403">
				<xsd:annotation>
					<xsd:documentation>Designated Local Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR404">
				<xsd:annotation>
					<xsd:documentation>Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR405">
				<xsd:annotation>
					<xsd:documentation>Other</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #5 Set of Enumerations - 501 to 504 - FilingInfo - AccountingInfo - CFsofUPE-->
	<xsd:simpleType name="FilingCECofUPE_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">FilingInfo - AccountingInfo - CFsofUPE</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR501">
				<xsd:annotation>
					<xsd:documentation>Subparagraph a</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR502">
				<xsd:annotation>
					<xsd:documentation>Subparagraph b</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR503">
				<xsd:annotation>
					<xsd:documentation>Subparagraph c</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR504">
				<xsd:annotation>
					<xsd:documentation>Subparagraph d</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #6 Set of Enumerations - 601 to 606 - Excluded UPE - Type-->
	<xsd:simpleType name="ExcludedUPE_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Excluded Entity - Type</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR601">
				<xsd:annotation>
					<xsd:documentation>Governmental Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR602">
				<xsd:annotation>
					<xsd:documentation>International Organisation</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR603">
				<xsd:annotation>
					<xsd:documentation>Non-profit Organisation</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR604">
				<xsd:annotation>
					<xsd:documentation>Pension Fund</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR605">
				<xsd:annotation>
					<xsd:documentation>Investment Fund that is an UPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR606">
				<xsd:annotation>
					<xsd:documentation>Real Estate Investment Vehicle that is an UPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #7 Set of Enumerations - 701 to 721 - GlobeStatus-->
	<xsd:simpleType name="IDGlobeStatus_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Subgroup - TypeofSubGroup</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR701">
				<xsd:annotation>
					<xsd:documentation>Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR702">
				<xsd:annotation>
					<xsd:documentation>Flow-Through Entity - Tax Transparent</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR703">
				<xsd:annotation>
					<xsd:documentation>Flow-Through Entity - Reverse Hybrid</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR704">
				<xsd:annotation>
					<xsd:documentation>Hybrid Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR705">
				<xsd:annotation>
					<xsd:documentation>Permanent Establishment</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR706">
				<xsd:annotation>
					<xsd:documentation>Main Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR707">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR708">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Subsidiary</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR709">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR710">
				<xsd:annotation>
					<xsd:documentation>Investment Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR711">
				<xsd:annotation>
					<xsd:documentation>Insurance Investment Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR712">
				<xsd:annotation>
					<xsd:documentation>Securitisation Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR713">
				<xsd:annotation>
					<xsd:documentation>JV</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR714">
				<xsd:annotation>
					<xsd:documentation>JV Subsidiary</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR715">
				<xsd:annotation>
					<xsd:documentation>Non-Material Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR716">
				<xsd:annotation>
					<xsd:documentation>POPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR717">
				<xsd:annotation>
					<xsd:documentation>Intermediate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR718">
				<xsd:annotation>
					<xsd:documentation>Ultimate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR719">
				<xsd:annotation>
					<xsd:documentation>Excluded Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR720">
				<xsd:annotation>
					<xsd:documentation>Parent Entity required to apply a QIIR under Art. 10.3.5</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR721">
				<xsd:annotation>
					<xsd:documentation>Non-Group member</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #8 Set of Enumerations - 801 to 806 - OwnershipType-->
	<xsd:simpleType name="OwnershipType_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Ownership Type</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR801">
				<xsd:annotation>
					<xsd:documentation>UPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR802">
				<xsd:annotation>
					<xsd:documentation>Constituent Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR803">
				<xsd:annotation>
					<xsd:documentation>JVs</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR804">
				<xsd:annotation>
					<xsd:documentation>JV Subsidiaries</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR805">
				<xsd:annotation>
					<xsd:documentation>Excluded Entities (aggregate)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR806">
				<xsd:annotation>
					<xsd:documentation>Non-Group members (aggregate)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #9 Set of Enumerations - 901 to 903 - POPE IPE-->
	<xsd:simpleType name="POPEIPE_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">POPE IPE</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR901">
				<xsd:annotation>
					<xsd:documentation>POPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR902">
				<xsd:annotation>
					<xsd:documentation>Intermediate Parent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR903">
				<xsd:annotation>
					<xsd:documentation>Parent Entity required to apply a QIIR under Art. 10.3.5</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #10 Set of Enumerations - 1001 to 1008 - Excluded Entity - Type-->
	<xsd:simpleType name="ExcludedEntity_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Excluded Entity - Type</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1001">
				<xsd:annotation>
					<xsd:documentation>Governmental Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1002">
				<xsd:annotation>
					<xsd:documentation>International Organisation</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1003">
				<xsd:annotation>
					<xsd:documentation>Non-profit Organisation</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1004">
				<xsd:annotation>
					<xsd:documentation>Pension Fund</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1005">
				<xsd:annotation>
					<xsd:documentation>Investment Fund that is an UPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1006">
				<xsd:annotation>
					<xsd:documentation>Real Estate Investment Vehicle that is an UPE</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1007">
				<xsd:annotation>
					<xsd:documentation>Entity owned by Excluded Entities under Article 1.5.2(a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1008">
				<xsd:annotation>
					<xsd:documentation>Entity owned by Excluded Entities under Article 1.5.2(b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #11 Set of Enumerations - 1101 to 1106 - Type of Subgroup-->
	<xsd:simpleType name="TypeofSubGroup_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Type of Subgroup</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1101">
				<xsd:annotation>
					<xsd:documentation>Constituent  Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1102">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Subgroup</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1103">
				<xsd:annotation>
					<xsd:documentation>Standalone MOCEs</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1104">
				<xsd:annotation>
					<xsd:documentation>Investment Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1105">
				<xsd:annotation>
					<xsd:documentation>JV Group</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1106">
				<xsd:annotation>
					<xsd:documentation>Stateless Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #12 Set of Enumerations - 1201 to 1209 - SafeHarbour-->
	<xsd:simpleType name="SafeHarbour_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Summary - SafeHarbour</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1201">
				<xsd:annotation>
					<xsd:documentation>De minimis Exclusion</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1202">
				<xsd:annotation>
					<xsd:documentation>QDMTT safe harbour</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1203">
				<xsd:annotation>
					<xsd:documentation>Transitional CbCR Safe Harbour – De minimis test</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1204">
				<xsd:annotation>
					<xsd:documentation>Transitional CbCR Safe Harbour – ETR test</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1205">
				<xsd:annotation>
					<xsd:documentation>Transitional CbCR Safe Harbour  - Routine profit test</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1206">
				<xsd:annotation>
					<xsd:documentation>Transitional UTPR Safe Harbour</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1207">
				<xsd:annotation>
					<xsd:documentation>Permanent Safe Harbour – De minimis test</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1208">
				<xsd:annotation>
					<xsd:documentation>Permanent Safe Harbour – ETR test</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1209">
				<xsd:annotation>
					<xsd:documentation>Permanent Safe Harbour – Routine profit test</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #13 Set of Enumerations - 1301 to 1314 - ETR Range -->
	<xsd:simpleType name="ETRRange_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Summary - ETR Range</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1301">
				<xsd:annotation>
					<xsd:documentation>below 2.5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1302">
				<xsd:annotation>
					<xsd:documentation>2.5% or above but below 5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1303">
				<xsd:annotation>
					<xsd:documentation>5% or above but below 7.5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1304">
				<xsd:annotation>
					<xsd:documentation>7.5% or above but below 10%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1305">
				<xsd:annotation>
					<xsd:documentation>10% or above but below 12.5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1306">
				<xsd:annotation>
					<xsd:documentation>12.5% or above but below 15%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1307">
				<xsd:annotation>
					<xsd:documentation>15% or above but below 17.5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1308">
				<xsd:annotation>
					<xsd:documentation>17.5% or above but below 20%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1309">
				<xsd:annotation>
					<xsd:documentation>20% or above but below 22.5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1310">
				<xsd:annotation>
					<xsd:documentation>22.5% or above but below 25%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1311">
				<xsd:annotation>
					<xsd:documentation>25% or above but below 27.5%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1312">
				<xsd:annotation>
					<xsd:documentation>27.5% or above but below 30%</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1313">
				<xsd:annotation>
					<xsd:documentation>30% or above</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1314">
				<xsd:annotation>
					<xsd:documentation>Section 3.2 not completed</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #14 Set of Enumerations - 1401 to 1409 - QDMTTTut-->
	<xsd:simpleType name="QDMTTuT_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">QDMTTTut</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1401">
				<xsd:annotation>
					<xsd:documentation>No Top-up Tax payable</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1402">
				<xsd:annotation>
					<xsd:documentation>below EUR 1 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1403">
				<xsd:annotation>
					<xsd:documentation>EUR 1 million to below EUR 5 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1404">
				<xsd:annotation>
					<xsd:documentation>EUR 5 million to below EUR 25 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1405">
				<xsd:annotation>
					<xsd:documentation>EUR 25 million to below EUR 50 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1406">
				<xsd:annotation>
					<xsd:documentation>EUR 50 million to below EUR 75 million </xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1407">
				<xsd:annotation>
					<xsd:documentation>EUR 75 million to below EUR 100 million </xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1408">
				<xsd:annotation>
					<xsd:documentation>EUR 100 million to below EUR 250 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1409">
				<xsd:annotation>
					<xsd:documentation>EUR 250 million or above</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #15 Set of Enumerations - 1501 to 1509 - GlobeTuT -->
	<xsd:simpleType name="GlobeTuT_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Globe TuT</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1501">
				<xsd:annotation>
					<xsd:documentation>No Top-up Tax payable</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1502">
				<xsd:annotation>
					<xsd:documentation>below EUR 1 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1503">
				<xsd:annotation>
					<xsd:documentation>EUR 1 million to below EUR 5 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1504">
				<xsd:annotation>
					<xsd:documentation>EUR 5 million to below EUR 25 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1505">
				<xsd:annotation>
					<xsd:documentation>EUR 25 million to below EUR 50 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1506">
				<xsd:annotation>
					<xsd:documentation>EUR 50 million to below EUR 75 million </xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1507">
				<xsd:annotation>
					<xsd:documentation>EUR 75 million to below EUR 100 million </xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1508">
				<xsd:annotation>
					<xsd:documentation>EUR 100 million to below EUR 250 million</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1509">
				<xsd:annotation>
					<xsd:documentation>EUR 250 million or above</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #16 Set of Enumerations - 1601 to 1609 - Type of Subgroup-->
	<xsd:simpleType name="ETRTypeofSubGroup_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Type of SubGroup</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1601">
				<xsd:annotation>
					<xsd:documentation>Constituent Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1602">
				<xsd:annotation>
					<xsd:documentation>Minority-Owned Subgroup</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1603">
				<xsd:annotation>
					<xsd:documentation>Standalone MOCEs</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1604">
				<xsd:annotation>
					<xsd:documentation>Investment Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1605">
				<xsd:annotation>
					<xsd:documentation>JV Group</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1606">
				<xsd:annotation>
					<xsd:documentation>Stateless Constituent Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1607">
				<xsd:annotation>
					<xsd:documentation>Transitional CbCR Safe Harbour-Constituent Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1608">
				<xsd:annotation>
					<xsd:documentation>Transitional CbCR Safe Harbour- JV Group (specify which JV Group)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1609">
				<xsd:annotation>
					<xsd:documentation>Transitional UTPR Safe Harbour</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #17 Set of Enumerations - 1701 to 1704 - MainEntityPEandFTEBasis-->
	<xsd:simpleType name="MainEntityPEandFTEBasis_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">MainEntityPEandFTEBasis</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1701">
				<xsd:annotation>
					<xsd:documentation>Article 3.4</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1702">
				<xsd:annotation>
					<xsd:documentation>Article 3.5.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1703">
				<xsd:annotation>
					<xsd:documentation>Article 3.5.1(a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1704">
				<xsd:annotation>
					<xsd:documentation>Article 3.5.1(b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #18 Set of Enumerations - 1801 to 1802 - CrossBorderAdjustments-->
	<xsd:simpleType name="CrossBorderAdjustments_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Cross Border Adjustments</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1801">
				<xsd:annotation>
					<xsd:documentation>Article 3.2.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1802">
				<xsd:annotation>
					<xsd:documentation>Article 3.2.7</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #19 Set of Enumerations - 1901 to 1910 - UPEAdjustmentsBasis-->
	<xsd:simpleType name="UPEAdjustmentsBasis_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">UPE Adjustment Basis</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR1901">
				<xsd:annotation>
					<xsd:documentation>Article 7.1.1 (a)(i)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1902">
				<xsd:annotation>
					<xsd:documentation>Article 7.1.1 (a)(ii)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1903">
				<xsd:annotation>
					<xsd:documentation>Article 7.1.1 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1904">
				<xsd:annotation>
					<xsd:documentation>Article 7.1.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1905">
				<xsd:annotation>
					<xsd:documentation>Article 7.2.1 (a)(i)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1906">
				<xsd:annotation>
					<xsd:documentation>Article 7.2.1 (a)(ii)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1907">
				<xsd:annotation>
					<xsd:documentation>Article 7.2.1 (a)(iii)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1908">
				<xsd:annotation>
					<xsd:documentation>Article 7.2.1 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1909">
				<xsd:annotation>
					<xsd:documentation>Article 7.2.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR1910">
				<xsd:annotation>
					<xsd:documentation>Article 7.2.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #20 Set of Enumerations - 2001 to 2026 - 3.2.1.1 Computation of GloBE Income (Loss) - Adjustment Items -->
	<xsd:simpleType name="AdjustmentItem_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en"> 3.2.1.1 Computation of GloBE Income (Loss)</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2001">
				<xsd:annotation>
					<xsd:documentation>Net Taxes Expense - Article 3.2.1 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2002">
				<xsd:annotation>
					<xsd:documentation>Excluded Dividends – Article 3.2.1 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2003">
				<xsd:annotation>
					<xsd:documentation>Excluded Equity Gain or Loss – Article 3.2.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2004">
				<xsd:annotation>
					<xsd:documentation>Included Revaluation Method Gain or Loss – Article 3.2.1 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2005">
				<xsd:annotation>
					<xsd:documentation>Gain or loss from disposition of assets and liabilities excluded under Article 6.3 – Article 3.2.1 (e)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2006">
				<xsd:annotation>
					<xsd:documentation>Asymmetric Foreign Currency Gains or Losses – Article 3.2.1 (f)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2007">
				<xsd:annotation>
					<xsd:documentation>Policy Disallowed Expenses – Article 3.2.1 (g)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2008">
				<xsd:annotation>
					<xsd:documentation>Prior Period Errors – Article 3.2.1 (h)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2009">
				<xsd:annotation>
					<xsd:documentation>Changes in Accounting Principles – Article 3.2.1 (h)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2010">
				<xsd:annotation>
					<xsd:documentation>Accrued Pension Expense – Article 3.2.1 (i)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2011">
				<xsd:annotation>
					<xsd:documentation>Debt releases - Article 3.2.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2012">
				<xsd:annotation>
					<xsd:documentation>Stock-based compensation – Article 3.2.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2013">
				<xsd:annotation>
					<xsd:documentation>Arm’s length adjustments – Article 3.2.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2014">
				<xsd:annotation>
					<xsd:documentation>Qualified Refundable Tax Credit or Marketable Transferable Tax Credit – Article 3.2.4</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2015">
				<xsd:annotation>
					<xsd:documentation>Election for Gains and losses using realisation principle – Article 3.2.5</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2016">
				<xsd:annotation>
					<xsd:documentation>Election for Adjusted Asset Gain – Article 3.2.6</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2017">
				<xsd:annotation>
					<xsd:documentation>Intragroup Financing Arrangement expense – Article 3.2.7</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2018">
				<xsd:annotation>
					<xsd:documentation>Election for intragroup transactions in same jurisdiction – Article 3.2.8</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2019">
				<xsd:annotation>
					<xsd:documentation>Insurance company taxes charged to policyholders – Article 3.2.9</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2020">
				<xsd:annotation>
					<xsd:documentation>Increase/decrease to equity attributed to Additional Tier One and Restricted Tier One Capital distributions paid/payable or received/receivable – Article 3.2.10</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2021">
				<xsd:annotation>
					<xsd:documentation>Constituent Entities joining and leaving an MNE Group – Article 3.2.11 and 6.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2022">
				<xsd:annotation>
					<xsd:documentation>Reduction of GloBE Income of the UPE that is a Flow-through Entity – Article 3.2.11 and 7.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2023">
				<xsd:annotation>
					<xsd:documentation>Reduction of GloBE Income of the UPE that is subject to a Deductible Dividend Regime – Article 3.2.11 and 7.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2024">
				<xsd:annotation>
					<xsd:documentation>Taxable Distribution Method election – Article 3.2.11 and 7.6</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2025">
				<xsd:annotation>
					<xsd:documentation>International Shipping Income – Article 3.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2026">
				<xsd:annotation>
					<xsd:documentation>Transactions between Constituent Entities – Article 9.1.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #21 Set of Enumerations - 2101 to 2106 - International Shipping Category-->
	<xsd:simpleType name="IntShipCategory_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">International Shipping Category</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2101">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.2.a</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2102">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.2.b</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2103">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.2.c</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2104">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.2.d</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2105">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.2.e</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2106">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.2.f</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #22 Set of Enumerations - 2201 to 2205 - Qualified Ancillary Shipping Income  -->
	<xsd:simpleType name="ANCShipCategory_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Qualified Ancillary Shipping Income </xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2201">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.3.a</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2202">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.3.b</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2203">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.3.c</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2204">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.3.d</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2205">
				<xsd:annotation>
					<xsd:documentation>Article 3.3.3.e</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #23 Set of Enumerations - 2301 to 2309 - Adjusted Basis-->
	<xsd:simpleType name="AdjustedBasis_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Adjusted Basis</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2301">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.2 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2302">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.2 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2303">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.2 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2304">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.2 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2305">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.2 (e)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2306">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.3 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2307">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.3 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2308">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.4</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2309">
				<xsd:annotation>
					<xsd:documentation>Article 4.3.2(c) – Blended CFC regime</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #24 Set of Enumerations - 2401 to 2417 - 3.2.1.2 Computation of Adjusted Covered Taxes-->
	<xsd:simpleType name="CurrentAdjustedTax_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">3.2.1.2 Computation of Adjusted Covered Taxes</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2401">
				<xsd:annotation>
					<xsd:documentation>Covered Tax accrued as an expense in the profit before taxation in the financial accounts - Article 4.1.2 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2402">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes for uncertain tax position recorded as a reduction to Covered Taxes in prior year – Article 4.1.2 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2403">
				<xsd:annotation>
					<xsd:documentation>Qualified Refundable Tax Credit or Marketable Transferable Tax Credits recorded as a reduction to current tax expense – Article 4.1.2 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2404">
				<xsd:annotation>
					<xsd:documentation>Qualified Flow-through Tax Benefits of Qualified Ownership Interests – Article 3.2.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2405">
				<xsd:annotation>
					<xsd:documentation>Current tax expense on income excluded from GloBE Income or Loss – Article 4.1.3 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2406">
				<xsd:annotation>
					<xsd:documentation>Non-Qualified Refundable Tax Credit, Non-Marketable Transferable Tax Credit or Other Tax Credits not recorded as a reduction to current tax expense – Article 4.1.3 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2407">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes refunded or credited (except for any Qualified Refundable Tax Credit, or Marketable Transferable Tax Credits) not treated as an adjustment to current tax expense – Article 4.1.3 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2408">
				<xsd:annotation>
					<xsd:documentation>Current tax expense related to uncertain tax position– Article 4.1.3 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2409">
				<xsd:annotation>
					<xsd:documentation>Current tax expense not expected to be paid within three years – Article 4.1.3 (e)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2410">
				<xsd:annotation>
					<xsd:documentation>Post-filing adjustments – Article 4.6.1.</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2411">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes relating to Net Asset Gain or Net Asset Loss – Article 3.2.6</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2412">
				<xsd:annotation>
					<xsd:documentation>Reduction of Covered Taxes of the UPE that is a Flow-through Entity – Article 7.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2413">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes for GloBE Income of the UPE that is reduced under a Deductible Dividend Regime – Article 7.2.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2414">
				<xsd:annotation>
					<xsd:documentation>Deemed Distribution Tax – Article 7.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2415">
				<xsd:annotation>
					<xsd:documentation>Taxable Distribution Method election – Article 7.6 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2416">
				<xsd:annotation>
					<xsd:documentation>Total Deferred Tax Adjustment Amount – Article 4.4.1(b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2417">
				<xsd:annotation>
					<xsd:documentation>Increase or decrease in Covered Taxes recorded in equity or Other Comprehensive Income relating to amounts included in GloBE Income or Loss that will be subject to tax under local tax rules – Article 4.1.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #25 Set of Enumerations - 2501 to 2516 - 3.2.2 Jurisdictional computations relating to deferred tax accounting-->
	<xsd:simpleType name="DeferredAdjustedTax_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">3.2.2 Jurisdictional computations relating to deferred tax accounting</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2501">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense related to items excluded from GloBE Income or Loss – Article 4.4.1 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2502">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense related to Disallowed Accruals– Article 4.4.1 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2503">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense related to Unclaimed Accruals – Article 4.4.1 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2504">
				<xsd:annotation>
					<xsd:documentation>Valuation adjustment or accounting recognition adjustment related to a deferred tax asset – Article 4.4.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2505">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense arising from a re-measurement related to changes in the tax rate – Article 4.4.1 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2506">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense related to the generation and use of tax credits – Article 4.4.1 (e)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2507">
				<xsd:annotation>
					<xsd:documentation>Substitute Loss Carry Forward DTA or deemed Substitute Loss Carry Forward DTA – Article 4.4.1 (e)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2508">
				<xsd:annotation>
					<xsd:documentation>Disallowed Accruals or Unclaimed Accruals paid during the fiscal year – Article 4.4.2 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2509">
				<xsd:annotation>
					<xsd:documentation>Recapture Deferred Tax Liability paid during the fiscal year– Article 4.4.2 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2510">
				<xsd:annotation>
					<xsd:documentation>Recognition of a loss Deferred Tax Asset not included in the financials – Article 4.4.2 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2511">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense adjustment resulting from a reduction to a tax rate – Article 4.6.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2512">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense adjustment resulting from an increase to a tax rate – Article 4.6.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2513">
				<xsd:annotation>
					<xsd:documentation>Constituent Entities joining and leaving an MNE Group – Article 6.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2514">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense of the UPE that is a Flow-through Entity – Article 7.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2515">
				<xsd:annotation>
					<xsd:documentation>Deferred tax expense of the UPE that is subject to Deductible Dividend Regime – Article 7.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2516">
				<xsd:annotation>
					<xsd:documentation>Deferred tax adjustment resulting from transactions between Constituent Entities – Article 9.1.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #26 Set of Enumerations - 2601 to 2606 -->
	<xsd:simpleType name="NonArt415_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">3.2.2 Jurisdictional computations relating to deferred tax accounting</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2601">
				<xsd:annotation>
					<xsd:documentation>Article 3.2.6</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2602">
				<xsd:annotation>
					<xsd:documentation>Article 4.4.4</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2603">
				<xsd:annotation>
					<xsd:documentation>Article 4.6.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2604">
				<xsd:annotation>
					<xsd:documentation>Article 4.6.4</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2605">
				<xsd:annotation>
					<xsd:documentation>Article 7.3.5</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2606">
				<xsd:annotation>
					<xsd:documentation>Article 7.3.7</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #27 Set of Enumerations - 2701 to 2720 - 3.2.1.2 Computation of Adjusted Covered Taxes-->
	<xsd:simpleType name="FinalAdjustedTax_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">3.2.1.2 Computation of Adjusted Covered Taxes</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2701">
				<xsd:annotation>
					<xsd:documentation>Covered Tax accrued as an expense in the profit before taxation in the financial accounts - Article 4.1.2 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2702">
				<xsd:annotation>
					<xsd:documentation>GloBE Loss Deferred Tax Asset established under Article 4.5.1 or used – Article 4.1.2 (b) combined with Article 4.5.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2703">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes for uncertain tax position recorded as a reduction to Covered Taxes in prior year – Article 4.1.2 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2704">
				<xsd:annotation>
					<xsd:documentation>Qualified Refundable Tax Credit or Marketable Transferable Tax Credits recorded as a reduction to current tax expense – Article 4.1.2 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2705">
				<xsd:annotation>
					<xsd:documentation>Qualified Flow-through Tax Benefits of Qualified Ownership Interests – Article 3.2.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2706">
				<xsd:annotation>
					<xsd:documentation>Current tax expense on income excluded from GloBE Income or Loss – Article 4.1.3 (a)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2707">
				<xsd:annotation>
					<xsd:documentation>Non-Qualified Refundable Tax Credit, Non-Marketable Transferable Tax Credit or Other Tax Credits not recorded as a reduction to current tax expense – Article 4.1.3 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2708">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes refunded or credited (except for any Qualified Refundable Tax Credit, or Marketable Transferable Tax Credits) not treated as an adjustment to current tax expense – Article 4.1.3 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2709">
				<xsd:annotation>
					<xsd:documentation>Current tax expense related to uncertain tax position– Article 4.1.3 (d)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2710">
				<xsd:annotation>
					<xsd:documentation>Current tax expense not expected to be paid within three years – Article 4.1.3 (e)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2711">
				<xsd:annotation>
					<xsd:documentation>Post-filing adjustments – Article 4.6.1.</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2712">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes relating to Net Asset Gain or Net Asset Loss – Article 3.2.6</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2713">
				<xsd:annotation>
					<xsd:documentation>Reduction of Covered Taxes of the UPE that is a Flow-through Entity – Article 7.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2714">
				<xsd:annotation>
					<xsd:documentation>Covered Taxes for GloBE Income of the UPE that is reduced under a Deductible Dividend Regime – Article 7.2.2</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2715">
				<xsd:annotation>
					<xsd:documentation>Deemed Distribution Tax – Article 7.3</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2716">
				<xsd:annotation>
					<xsd:documentation>Taxable Distribution Method election – Article 7.6 (b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2717">
				<xsd:annotation>
					<xsd:documentation>Total Deferred Tax Adjustment Amount – Article 4.4.1(b)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2718">
				<xsd:annotation>
					<xsd:documentation>Increase or decrease in Covered Taxes recorded in equity or Other Comprehensive Income relating to amounts included in GloBE Income or Loss that will be subject to tax under local tax rules – Article 4.1.1 (c)</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2719">
				<xsd:annotation>
					<xsd:documentation>Excess Negative Tax Expense Carry Forward generated – Article 4.1.5 and 5.2.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2720">
				<xsd:annotation>
					<xsd:documentation>Decrease in Covered Taxes (but not below zero) by the remaining balance of the Excess Negative Tax Expense Carry-forward – Article 4.1.5 and 5.2.1</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #28 Set of Enumerations - 2801 to 2805 -->
	<xsd:simpleType name="ExTypeOfEntity_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Enumeration options for Entity Owners</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2801">
				<xsd:annotation>
					<xsd:documentation>Governmental Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2802">
				<xsd:annotation>
					<xsd:documentation>International Organisation</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2803">
				<xsd:annotation>
					<xsd:documentation>Non-profit Organisation</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2804">
				<xsd:annotation>
					<xsd:documentation>Pension Fund</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2805">
				<xsd:annotation>
					<xsd:documentation>Pension Fund that is not a Pension Services Entity</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #29 Set of Enumerations - 2901 to 2902 - Basis for Deminimis-SimplifiedNMCECalculation-->
	<xsd:simpleType name="DeminimisSimpleBasis_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">POPE IPE</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR2901">
				<xsd:annotation>
					<xsd:documentation>De minimis election</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR2902">
				<xsd:annotation>
					<xsd:documentation>Simplified Calculation for Non-material Constituent Entities</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #30 Set of Enumerations - 3001 to 3004 TIN Type-->
	<xsd:simpleType name="TIN_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">TIN Type</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR3001">
				<xsd:annotation>
					<xsd:documentation>Tax Identification Number</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR3002">
				<xsd:annotation>
					<xsd:documentation>Functionally equivalent number</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR3003">
				<xsd:annotation>
					<xsd:documentation>Agreed GIR designated number</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR3004">
				<xsd:annotation>
					<xsd:documentation>Not required to be reported</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--GLOBE #31 Set of Enumerations - 3101 to 3102 -->
	<xsd:simpleType name="Currency_EnumType">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">TIN Type</xsd:documentation>
		</xsd:annotation>
		<xsd:restriction base="xsd:string">
			<xsd:enumeration value="GIR3101">
				<xsd:annotation>
					<xsd:documentation>Local</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
			<xsd:enumeration value="GIR3102">
				<xsd:annotation>
					<xsd:documentation>CFS</xsd:documentation>
				</xsd:annotation>
			</xsd:enumeration>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<xsd:simpleType name="percentage">
		<xsd:restriction base="xsd:decimal">
			<xsd:minInclusive value="0"/>
			<xsd:maxInclusive value="1"/>
			<xsd:fractionDigits value="4"/>
		</xsd:restriction>
	</xsd:simpleType>
	<!--  -->
	<!--++++++++++++++++++ Reusable Complex types +++++++++++++++++++++++++++++++++++++ -->
	<!-- Message specification: Data identifying and describing the message as a whole -->
	<!-- -->
	<!--Message specification: Data identifying and describing the message as a whole-->
	<xsd:complexType name="MessageSpec_Type">
		<xsd:annotation>
			<xsd:documentation xml:lang="en">Information in the message header identifies the Tax Administration that is sending the message.  It 
specifies when the message was created, what period (normally a year) the report is for, and the nature of the report (original, 
corrected, supplemental, etc).</xsd:documentation>
		</xsd:annotation>
		<xsd:sequence>
			<xsd:element name="SendingEntityIN" type="stf:StringMin1Max200_Type" minOccurs="0"/>
			<xsd:element name="TransmittingCountry" type="iso:CountryCode_Type"/>
			<!-- modified for GLOBE  -->
			<xsd:element name="ReceivingCountry" type="iso:CountryCode_Type"/>
			<xsd:element name="MessageType" type="globe:MessageType_EnumType"/>
			<xsd:element name="Warning" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
			<xsd:element name="Contact" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
			<xsd:element name="MessageRefId" type="stf:StringMin1Max170_Type"/>
			<xsd:element name="MessageTypeIndic" type="globe:MessageTypeIndic_EnumType"/>
			<xsd:element name="ReportingPeriod" type="xsd:date"/>
			<xsd:element name="Timestamp" type="xsd:dateTime"/>
		</xsd:sequence>
	</xsd:complexType>
	<!-- -->
	<!-- TIN -->
	<xsd:complexType name="TIN_Type">
		<xsd:simpleContent>
			<xsd:extension base="stf:StringMin1Max200_Type">
				<xsd:attribute name="issuedBy" type="iso:CountryCode_Type" use="optional"/>
				<xsd:attribute name="unknown" type="xsd:boolean" use="optional"/>
				<xsd:attribute name="TypeOfTIN" type="globe:TIN_EnumType"/>
			</xsd:extension>
		</xsd:simpleContent>
	</xsd:complexType>
	<!-- -->
	<!-- GlobeOECD File Message structure  -->
	<xsd:complexType name="GLOBEBody_Type">
		<xsd:sequence>
			<xsd:element name="FilingInfo">
				<xsd:complexType>
					<xsd:complexContent>
						<xsd:extension base="globe:FilingInfo">
							<xsd:sequence>
								<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
							</xsd:sequence>
						</xsd:extension>
					</xsd:complexContent>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="GeneralSection" minOccurs="0">
				<xsd:complexType>
					<xsd:complexContent>
						<xsd:extension base="globe:GeneralSectionType">
							<xsd:sequence>
								<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
							</xsd:sequence>
						</xsd:extension>
					</xsd:complexContent>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="Summary" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:complexContent>
						<xsd:extension base="globe:SummaryType">
							<xsd:sequence>
								<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
							</xsd:sequence>
						</xsd:extension>
					</xsd:complexContent>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="JurisdictionSection" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:complexContent>
						<xsd:extension base="globe:JurisdictionSectionType">
							<xsd:sequence>
								<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
							</xsd:sequence>
						</xsd:extension>
					</xsd:complexContent>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="UTPRAttribution" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:complexContent>
						<xsd:extension base="globe:UTPRAttributionType">
							<xsd:sequence>
								<xsd:element name="DocSpec" type="stf:DocSpec_Type"/>
							</xsd:sequence>
						</xsd:extension>
					</xsd:complexContent>
				</xsd:complexType>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Schema  element ++++++++++++++++++++++++++++++++++++++++++++ -->
	<!-- -->
	<!-- GLOBE Message structure  -->
	<xsd:element name="GLOBE_OECD">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element name="MessageSpec" type="globe:MessageSpec_Type"/>
				<xsd:element name="GLOBEBody" type="globe:GLOBEBody_Type" maxOccurs="unbounded"/>
			</xsd:sequence>
			<xsd:attribute name="version" type="stf:StringMin1Max10_Type">
				<xsd:annotation>
					<xsd:documentation xml:lang="en">GLOBE Version</xsd:documentation>
				</xsd:annotation>
			</xsd:attribute>
		</xsd:complexType>
	</xsd:element>
	<xsd:complexType name="CorporateStructureType">
		<xsd:sequence>
			<xsd:element name="UPE" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:choice>
						<xsd:element name="ExcludedUPE">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="ExcludedUPEStatus" type="globe:ExcludedUPE_EnumType">
										<xsd:annotation>
											<xsd:documentation>Enumeration #6</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="Art10.3.5" type="iso:CountryCode_Type" minOccurs="0"/>
									<xsd:sequence>
										<xsd:element name="ID" type="globe:ExcludedUPE_ID_Type"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="OtherUPE">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="ID" type="globe:ID_Type"/>
									<xsd:element name="Art10.3.5" type="iso:CountryCode_Type" minOccurs="0"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:choice>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="CE" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="ID" type="globe:ID_Type"/>
						<xsd:element name="OwnershipChange" minOccurs="0" maxOccurs="unbounded">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="ChangeDate" type="xsd:date"/>
									<xsd:element name="PreGlobeStatus" type="globe:IDGlobeStatus_EnumType" maxOccurs="unbounded">
										<xsd:annotation>
											<xsd:documentation>Enumeration #7</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="PreOwnership" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="OwnershipType" type="globe:OwnershipType_EnumType">
													<xsd:annotation>
														<xsd:documentation>Enumeration #8</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
												<xsd:element name="TIN" type="globe:TIN_Type"/>
												<xsd:element name="PreOwnershipPercentage" type="globe:percentage">
													<xsd:annotation>
														<xsd:documentation>%</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="Ownership" maxOccurs="unbounded">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="OwnershipType" type="globe:OwnershipType_EnumType">
										<xsd:annotation>
											<xsd:documentation>Emumeration #8</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="TIN" type="globe:TIN_Type"/>
									<xsd:element name="OwnershipPercentage" type="globe:percentage">
										<xsd:annotation>
											<xsd:documentation>%</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="QIIR" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="POPE-IPE" type="globe:POPEIPE_EnumType">
										<xsd:annotation>
											<xsd:documentation>Enumeration #9</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="Exception" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="ExceptionRule">
													<xsd:complexType>
														<xsd:choice>
															<xsd:element name="Art2.1.3" type="xsd:boolean"/>
															<xsd:element name="Art2.1.5" type="xsd:boolean"/>
														</xsd:choice>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="TIN" type="globe:TIN_Type"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="QUTPR" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Art9.3" type="xsd:boolean"/>
									<xsd:element name="AggOwnership" type="globe:percentage" minOccurs="0">
										<xsd:annotation>
											<xsd:documentation>%</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="UPEOwnership" type="xsd:boolean" minOccurs="0">
										<xsd:annotation>
											<xsd:documentation>%</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="ExcludedEntity" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="Name" type="stf:StringMin1Max200_Type"/>
						<xsd:element name="Type" type="globe:ExcludedEntity_EnumType">
							<xsd:annotation>
								<xsd:documentation>Enumeration #10</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="Change" type="xsd:boolean"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="UnreportChangeCorpStr" type="xsd:boolean" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="ETRType">
		<xsd:sequence>
			<xsd:element name="SubGroup" minOccurs="0">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="TIN" type="globe:TIN_Type"/>
						<xsd:element name="TypeofSubGroup" type="globe:ETRTypeofSubGroup_EnumType" maxOccurs="unbounded">
							<xsd:annotation>
								<xsd:documentation>Enumeration #16</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="ETRStatus">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="ETRException" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Deminimis-SimplifiedNMCECalc" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Basis" type="globe:DeminimisSimpleBasis_EnumType"/>
												<xsd:element name="FinancialData" maxOccurs="3">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Year" type="xsd:date" minOccurs="1"/>
															<xsd:element name="Revenue" type="xsd:integer" minOccurs="0"/>
															<xsd:element name="GlobeRevenue" type="xsd:integer"/>
															<xsd:element name="NetGlobeIncome" type="xsd:integer"/>
															<xsd:element name="FANIL" type="xsd:integer"/>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="Average">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Revenue" type="xsd:integer" minOccurs="0"/>
															<xsd:element name="GlobeRevenue" type="xsd:integer"/>
															<xsd:element name="NetGlobeIncome" type="xsd:integer"/>
															<xsd:element name="FANIL" type="xsd:integer"/>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="TransitionalCbCRSafeHarbour" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Revenue" type="xsd:integer" minOccurs="0"/>
												<xsd:element name="Profit" type="xsd:integer"/>
												<xsd:element name="IncomeTax" type="xsd:integer" minOccurs="0"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="UTPRSafeHarbour" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="CITRate" type="globe:percentage">
													<xsd:annotation>
														<xsd:documentation>%</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="ETRComputation" type="globe:ETRComputationType" minOccurs="0"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="Election" minOccurs="0">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="Art3.2.6" type="xsd:boolean" minOccurs="0"/>
						<xsd:element name="Art4.1.5" type="xsd:boolean" minOccurs="0"/>
						<xsd:element name="Art4.6.1" type="xsd:boolean" minOccurs="0"/>
						<xsd:element name="Art5.3.1" type="xsd:boolean" minOccurs="0"/>
						<xsd:element name="Art3.2.2" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Status" type="xsd:boolean"/>
									<xsd:sequence>
										<xsd:element name="ElectionYear" type="xsd:date"/>
										<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="Art3.2.5" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Status" type="xsd:boolean"/>
									<xsd:sequence minOccurs="0">
										<xsd:element name="ElectionYear" type="xsd:date"/>
										<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="Art3.2.8" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Status" type="xsd:boolean"/>
									<xsd:sequence minOccurs="0">
										<xsd:element name="ElectionYear" type="xsd:date"/>
										<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="NoDefTaxAllocation" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Status" type="xsd:boolean"/>
									<xsd:sequence>
										<xsd:element name="ElectionYear" type="xsd:date"/>
										<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="Art4.5" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Status" type="xsd:boolean"/>
									<xsd:sequence minOccurs="0">
										<xsd:element name="ElectionYear" type="xsd:date"/>
										<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="Art3.2.1.c" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Status" type="xsd:boolean"/>
									<xsd:sequence>
										<xsd:element name="ElectionYear" type="xsd:date"/>
										<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
										<xsd:element name="QualOwnerIntentBalance" type="xsd:integer"/>
										<xsd:element name="Additions" type="xsd:integer"/>
										<xsd:element name="Reductions" type="xsd:integer"/>
										<xsd:element name="OutstandingBalance" type="xsd:integer"/>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="SimplifiedReporting" type="xsd:boolean" minOccurs="0"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="ID_Type">
		<xsd:sequence>
			<xsd:element name="Name" type="stf:StringMin1Max200_Type"/>
			<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="TIN" type="globe:TIN_Type" maxOccurs="unbounded"/>
			<xsd:element name="Rules" type="globe:IDTypeRules_EnumType" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Enumeration #2</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="GlobeStatus" type="globe:IDTypeGloBEStatus_EnumType" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Enumeration #3 </xsd:documentation>
				</xsd:annotation>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="ExcludedUPE_ID_Type">
		<xsd:sequence>
			<xsd:element name="Name" type="stf:StringMin1Max200_Type"/>
			<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" minOccurs="0" maxOccurs="unbounded"/>
			<xsd:element name="TIN" type="globe:TIN_Type" maxOccurs="unbounded"/>
			<xsd:element name="Rules" type="globe:IDTypeRules_EnumType" minOccurs="0" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Enumeration #2</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="GlobeStatus" type="globe:IDTypeGloBEStatus_EnumType" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Enumeration #3 </xsd:documentation>
				</xsd:annotation>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="FilingInfo">
		<xsd:sequence>
			<xsd:element name="FilingCE">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
						<xsd:element name="Name" type="stf:StringMin1Max200_Type"/>
						<xsd:element name="TIN" type="globe:TIN_Type"/>
						<xsd:element name="Role" type="globe:FilingCERole_EnumType">
							<xsd:annotation>
								<xsd:documentation>Enumeration #4</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="AccountingInfo">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="CFSofUPE" type="globe:FilingCECofUPE_EnumType">
							<xsd:annotation>
								<xsd:documentation>Enumeration #11</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="FAS" type="stf:StringMin1Max200_Type"/>
						<xsd:element name="Currency" type="iso:currCode_Type"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="Period">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="Start" type="xsd:date"/>
						<xsd:element name="End" type="xsd:date"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="NameMNE" type="stf:StringMin1Max200_Type"/>
			<xsd:element name="AdditionalInfo" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="ETRComputationType">
		<xsd:sequence>
			<xsd:element name="CEComputation" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="AdjustedFANIL">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:sequence>
										<xsd:element name="FANIL" type="xsd:integer"/>
										<xsd:element name="Adjustment" minOccurs="0">
											<xsd:complexType>
												<xsd:sequence>
													<xsd:element name="MainEntityPEandFTE" minOccurs="0" maxOccurs="unbounded">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Basis" type="globe:MainEntityPEandFTEBasis_EnumType">
																	<xsd:annotation>
																		<xsd:documentation>Enumeration #17</xsd:documentation>
																	</xsd:annotation>
																</xsd:element>
																<xsd:element name="OtherTIN" type="globe:TIN_Type"/>
																<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" minOccurs="0"/>
																<xsd:element name="Additions" type="xsd:integer"/>
																<xsd:element name="Reductions" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="CrossBorderAdjustments" minOccurs="0" maxOccurs="unbounded">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Basis" type="globe:CrossBorderAdjustments_EnumType">
																	<xsd:annotation>
																		<xsd:documentation>Enumeration #18</xsd:documentation>
																	</xsd:annotation>
																</xsd:element>
																<xsd:element name="OtherTIN" type="globe:TIN_Type"/>
																<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" minOccurs="0"/>
																<xsd:element name="Additions" type="xsd:integer" minOccurs="0"/>
																<xsd:element name="Reductions" type="xsd:integer" minOccurs="0"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="UPEAdjustments" minOccurs="0" maxOccurs="unbounded">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Basis" type="globe:UPEAdjustmentsBasis_EnumType">
																	<xsd:annotation>
																		<xsd:documentation>Enumeration #19</xsd:documentation>
																	</xsd:annotation>
																</xsd:element>
																<xsd:element name="Reductions" minOccurs="0">
																	<xsd:complexType>
																		<xsd:choice>
																			<xsd:element name="Amount" type="xsd:integer"/>
																			<xsd:element name="Exception" type="xsd:boolean"/>
																		</xsd:choice>
																	</xsd:complexType>
																</xsd:element>
																<xsd:element name="IdentificationOfOwners" maxOccurs="unbounded">
																	<xsd:complexType>
																		<xsd:sequence>
																			<xsd:element name="OwnershipPercentage" type="globe:percentage"/>
																			<xsd:choice>
																				<xsd:element name="IndOwners">
																					<xsd:complexType>
																						<xsd:sequence>
																							<xsd:element name="NumOfOwners" type="xsd:integer"/>
																							<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" minOccurs="0"/>
																							<xsd:element name="TaxRate" type="globe:percentage" minOccurs="0"/>
																						</xsd:sequence>
																					</xsd:complexType>
																				</xsd:element>
																				<xsd:element name="EntityOwner">
																					<xsd:complexType>
																						<xsd:sequence>
																							<xsd:element name="TIN" type="globe:TIN_Type"/>
																							<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
																							<xsd:element name="TaxRate" type="globe:percentage" minOccurs="0"/>
																							<xsd:element name="ExTypeOfEntity" type="globe:ExTypeOfEntity_EnumType" minOccurs="0"/>
																						</xsd:sequence>
																					</xsd:complexType>
																				</xsd:element>
																			</xsd:choice>
																		</xsd:sequence>
																	</xsd:complexType>
																</xsd:element>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
												</xsd:sequence>
											</xsd:complexType>
										</xsd:element>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="NetGlobeIncome">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:element name="Adjustments" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Amount" type="xsd:integer" maxOccurs="2"/>
												<xsd:element name="AdjustmentItem" type="globe:AdjustmentItem_EnumType">
													<xsd:annotation>
														<xsd:documentation>Enumeration #20</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="IntShippingIncome" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="InternationalShipIncome">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Total" type="xsd:integer"/>
															<xsd:sequence>
																<xsd:element name="Category" type="globe:IntShipCategory_EnumType" maxOccurs="unbounded">
																	<xsd:annotation>
																		<xsd:documentation>Enumeration  #21</xsd:documentation>
																	</xsd:annotation>
																</xsd:element>
																<xsd:element name="Revenue" type="xsd:integer"/>
																<xsd:element name="Costs" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="QualifiedAncShipIncome">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Total" type="xsd:integer"/>
															<xsd:sequence>
																<xsd:element name="Category" type="globe:ANCShipCategory_EnumType">
																	<xsd:annotation>
																		<xsd:documentation>Enumeration #22</xsd:documentation>
																	</xsd:annotation>
																</xsd:element>
																<xsd:element name="Revenue" type="xsd:integer"/>
																<xsd:element name="Costs" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="SubstanceExclusion">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="PayrollCosts" type="xsd:integer"/>
															<xsd:element name="TangibleAssets" type="xsd:integer"/>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="CoveredTaxes" type="xsd:integer"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="AdjustedIncomeTax">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:sequence>
										<xsd:element name="IncomeTax" type="xsd:integer"/>
										<xsd:element name="CrossAllocation" minOccurs="0" maxOccurs="unbounded">
											<xsd:complexType>
												<xsd:sequence>
													<xsd:element name="Basis" type="globe:AdjustedBasis_EnumType" maxOccurs="unbounded">
														<xsd:annotation>
															<xsd:documentation>Enumeration #23</xsd:documentation>
														</xsd:annotation>
													</xsd:element>
													<xsd:element name="OtherTIN" type="globe:TIN_Type"/>
													<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
													<xsd:element name="Additions" type="xsd:integer" minOccurs="0"/>
													<xsd:element name="Reductions" type="xsd:integer" minOccurs="0"/>
												</xsd:sequence>
											</xsd:complexType>
										</xsd:element>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="AdjustedCoveredTax">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:element name="Adjustments" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Amount" type="xsd:integer" maxOccurs="2"/>
												<xsd:element name="AdjustmentItem" type="globe:CurrentAdjustedTax_EnumType">
													<xsd:annotation>
														<xsd:documentation>Enumeration #24</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="DeferTaxAdjustAmt">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Total" type="xsd:integer"/>
												<xsd:element name="DeferTaxExpense" type="xsd:integer"/>
												<xsd:element name="Adjustment" minOccurs="0" maxOccurs="unbounded">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Amount" type="xsd:integer" maxOccurs="2"/>
															<xsd:element name="AdjustmentItem" type="globe:DeferredAdjustedTax_EnumType">
																<xsd:annotation>
																	<xsd:documentation>Enumeration #25</xsd:documentation>
																</xsd:annotation>
															</xsd:element>
															<xsd:element name="Recast" minOccurs="0">
																<xsd:complexType>
																	<xsd:sequence>
																		<xsd:element name="Higher" type="xsd:integer" minOccurs="0"/>
																		<xsd:element name="Lower" type="xsd:integer" minOccurs="0"/>
																	</xsd:sequence>
																</xsd:complexType>
															</xsd:element>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="TIN" type="globe:TIN_Type"/>
						<xsd:element name="Elections" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Art1.5.3" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence minOccurs="0">
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="SimplCalculations" type="xsd:boolean" minOccurs="0"/>
									<xsd:element name="Art3.2.1" type="xsd:boolean" minOccurs="0"/>
									<xsd:element name="Art3.2.1b" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence minOccurs="0">
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art3.2.1c" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence minOccurs="0">
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art6.3.4" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="FYTriggerEvent" type="xsd:date"/>
												<xsd:element name="Inclusion">
													<xsd:complexType>
														<xsd:choice>
															<xsd:element name="Art6.3.4.c.i" type="xsd:boolean"/>
															<xsd:element name="Art6.3.4.c.ii" type="xsd:boolean"/>
														</xsd:choice>
													</xsd:complexType>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="AggregatedReporting" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="TaxConsolGroupTIN" type="globe:TIN_Type"/>
												<xsd:element name="EntityTIN" type="globe:TIN_Type" maxOccurs="unbounded"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art4.4.7" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence minOccurs="0">
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art4.5.6" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence minOccurs="0">
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art7.5" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence minOccurs="0">
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
													<xsd:element name="CEOwnerTIN" type="globe:TIN_Type" maxOccurs="unbounded"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art7.6" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence>
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
													<xsd:element name="ActualDeemedDist" type="xsd:integer"/>
													<xsd:element name="LocalCreditableTaxGross" type="xsd:integer"/>
													<xsd:element name="ShareOfUndistNetGlobeInc" type="globe:percentage"/>
													<xsd:element name="InvestmentEntityTIN" type="globe:TIN_Type"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="OtherFAS" type="stf:StringMin1Max200_Type" minOccurs="0"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="OverallComputation" minOccurs="0">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="FANIL" type="xsd:integer"/>
						<xsd:element name="AdjustedFANIL" type="xsd:integer"/>
						<xsd:element name="NetGlobeIncome">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:element name="Adjustments" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Amount" type="xsd:integer"/>
												<xsd:element name="AdjustmentItem" type="globe:AdjustmentItem_EnumType">
													<xsd:annotation>
														<xsd:documentation>Enumeration #1</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="IntShippingIncome" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Total" type="xsd:integer"/>
												<xsd:sequence>
													<xsd:element name="TotalIntShipIncome" type="xsd:integer"/>
													<xsd:element name="FiftyPercentCap" type="xsd:integer"/>
													<xsd:element name="TotalQualifiedAncIncome" type="xsd:integer"/>
													<xsd:element name="ExcessOfCap" type="xsd:integer" minOccurs="0"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="IncomeTaxExpense" type="xsd:integer"/>
						<xsd:element name="ETRRate" type="globe:percentage"/>
						<xsd:element name="TopUpTaxPercentage" type="globe:percentage"/>
						<xsd:element name="AdjustedCoveredTax" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:element name="AggregrateCurrentTax" type="xsd:integer"/>
									<xsd:element name="Adjustments" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Amount" type="xsd:integer"/>
												<xsd:element name="AdjustmentItem" type="globe:FinalAdjustedTax_EnumType">
													<xsd:annotation>
														<xsd:documentation>Enumeration #2</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="PostFilingAdjust" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="DeferTaxAsset">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Total" type="xsd:integer"/>
															<xsd:element name="AmountAttributed" minOccurs="0" maxOccurs="unbounded">
																<xsd:complexType>
																	<xsd:sequence>
																		<xsd:element name="Year" type="xsd:date"/>
																		<xsd:element name="Amount" type="xsd:integer"/>
																	</xsd:sequence>
																</xsd:complexType>
															</xsd:element>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="CoveredTaxRefund">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Total" type="xsd:integer"/>
															<xsd:element name="AmountAttributed" minOccurs="0" maxOccurs="unbounded">
																<xsd:complexType>
																	<xsd:sequence>
																		<xsd:element name="Year" type="xsd:date"/>
																		<xsd:element name="Amount" type="xsd:integer"/>
																	</xsd:sequence>
																</xsd:complexType>
															</xsd:element>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="DeemedDistTax" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Total" type="xsd:integer"/>
												<xsd:element name="Election" minOccurs="0">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Recapture" maxOccurs="unbounded">
																<xsd:complexType>
																	<xsd:sequence>
																		<xsd:element name="Year" type="xsd:date"/>
																		<xsd:element name="StartAmount" type="xsd:integer"/>
																		<xsd:element name="DDTYear-0" type="xsd:integer"/>
																		<xsd:element name="DDTYear-1" type="xsd:integer"/>
																		<xsd:element name="DDTYear-2" type="xsd:integer"/>
																		<xsd:element name="DDTYear-3" type="xsd:integer"/>
																		<xsd:element name="TotalDDT" type="xsd:integer"/>
																		<xsd:element name="EndAmount" type="xsd:integer"/>
																	</xsd:sequence>
																</xsd:complexType>
															</xsd:element>
															<xsd:element name="Reduction" type="xsd:integer"/>
															<xsd:element name="IncrementalTopUpTax" type="xsd:integer"/>
															<xsd:element name="Ratio" type="globe:percentage"/>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="DeferTaxAdjustAmt" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Total" type="xsd:integer"/>
												<xsd:sequence>
													<xsd:element name="DefTaxAmt" type="xsd:integer"/>
													<xsd:element name="DiffCarryValue" type="xsd:integer"/>
													<xsd:element name="GLoBEValue" type="xsd:integer"/>
													<xsd:element name="BefRecastAdjust" type="xsd:integer"/>
													<xsd:element name="TotalAdjust" type="xsd:integer"/>
													<xsd:element name="PreRecast" type="xsd:integer"/>
													<xsd:element name="Recast" minOccurs="0">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Higher" type="xsd:integer" minOccurs="0"/>
																<xsd:element name="Lower" type="xsd:integer" minOccurs="0"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="Adjustments" minOccurs="0" maxOccurs="unbounded">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:sequence>
																	<xsd:element name="Amount" type="xsd:integer"/>
																	<xsd:element name="AdjustmentItem" type="globe:DeferredAdjustedTax_EnumType">
																		<xsd:annotation>
																			<xsd:documentation>Enumeration #3</xsd:documentation>
																		</xsd:annotation>
																	</xsd:element>
																</xsd:sequence>
																<xsd:element name="RecaptureDeferred">
																	<xsd:complexType>
																		<xsd:sequence>
																			<xsd:element name="DTLRFYMinus5" type="xsd:integer"/>
																			<xsd:element name="RecapDTLRFYMinus5" type="xsd:integer"/>
																			<xsd:element name="DTLRFY" type="xsd:integer"/>
																			<xsd:element name="AggregateDTL">
																				<xsd:complexType>
																					<xsd:sequence>
																						<xsd:element name="ReportingFiscalYear">
																							<xsd:complexType>
																								<xsd:sequence>
																									<xsd:element name="AmountPreTransition" type="xsd:integer"/>
																									<xsd:element name="AmountOutBalance" type="xsd:integer"/>
																									<xsd:element name="AmountUnjustified" type="xsd:integer"/>
																								</xsd:sequence>
																							</xsd:complexType>
																						</xsd:element>
																						<xsd:element name="PriorFiscalYear">
																							<xsd:complexType>
																								<xsd:sequence>
																									<xsd:element name="AmountPreTransition" type="xsd:integer"/>
																									<xsd:element name="AmountOutBalance" type="xsd:integer"/>
																									<xsd:element name="AmountUnjustified" type="xsd:integer"/>
																								</xsd:sequence>
																							</xsd:complexType>
																						</xsd:element>
																					</xsd:sequence>
																				</xsd:complexType>
																			</xsd:element>
																		</xsd:sequence>
																	</xsd:complexType>
																</xsd:element>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="Transition" minOccurs="0" maxOccurs="unbounded">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Year" type="xsd:date"/>
																<xsd:element name="DeferredTaxLiabilityStart" type="xsd:integer" minOccurs="0"/>
																<xsd:element name="DeferredTaxLiabilityRecast" type="xsd:integer" minOccurs="0"/>
																<xsd:element name="DeferredTaxAssets" minOccurs="0">
																	<xsd:complexType>
																		<xsd:sequence>
																			<xsd:element name="Total" type="xsd:integer"/>
																			<xsd:sequence>
																				<xsd:element name="DeferredTaxAssetStart" type="xsd:integer"/>
																				<xsd:element name="DeferredTaxAssetRecast" type="xsd:integer"/>
																				<xsd:element name="DeferredTaxAssetExcluded" type="xsd:integer"/>
																			</xsd:sequence>
																		</xsd:sequence>
																	</xsd:complexType>
																</xsd:element>
																<xsd:element name="Disposal" minOccurs="0">
																	<xsd:complexType>
																		<xsd:sequence>
																			<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
																			<xsd:element name="NetDTADTL" type="xsd:integer"/>
																			<xsd:element name="CarryingValue" type="xsd:integer"/>
																			<xsd:element name="TaxPaid" type="xsd:integer"/>
																			<xsd:element name="DTADTL" type="xsd:integer"/>
																		</xsd:sequence>
																	</xsd:complexType>
																</xsd:element>
																<xsd:element name="AltJurisdiction" type="iso:CountryCode_Type" minOccurs="0"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="TransBlendCFC" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="CFCJur" maxOccurs="unbounded">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="Jurisdiction" type="iso:CountryCode_Type"/>
															<xsd:element name="Allocation">
																<xsd:complexType>
																	<xsd:sequence>
																		<xsd:element name="SubGroupTIN" type="globe:TIN_Type"/>
																		<xsd:element name="AggAllocTax" type="xsd:integer"/>
																	</xsd:sequence>
																</xsd:complexType>
															</xsd:element>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="Total" type="xsd:integer"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="SubstanceExclusion" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="Total" type="xsd:integer"/>
									<xsd:sequence>
										<xsd:element name="PayrollCost" type="xsd:integer"/>
										<xsd:element name="PayrollMarkUp" type="globe:percentage"/>
										<xsd:element name="TangibleAssetValue" type="xsd:integer"/>
										<xsd:element name="TangibleAssetMarkup" type="globe:percentage"/>
										<xsd:element name="PEAllocation" minOccurs="0" maxOccurs="unbounded">
											<xsd:complexType>
												<xsd:sequence>
													<xsd:element name="JurOfOwners">
														<xsd:complexType>
															<xsd:choice>
																<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
																<xsd:element name="UPE" type="xsd:boolean"/>
																<xsd:element name="NotApplicable" type="xsd:boolean"/>
															</xsd:choice>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="PayrollCost">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Total" type="xsd:integer"/>
																<xsd:element name="Allocation" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="TangibleAssetValue">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Total" type="xsd:integer"/>
																<xsd:element name="Allocation" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
												</xsd:sequence>
											</xsd:complexType>
										</xsd:element>
										<xsd:element name="FTEAllocation" minOccurs="0" maxOccurs="unbounded">
											<xsd:complexType>
												<xsd:sequence>
													<xsd:element name="JurOfOwners">
														<xsd:complexType>
															<xsd:choice>
																<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
																<xsd:element name="UPE" type="xsd:boolean"/>
																<xsd:element name="NotApplicable" type="xsd:boolean"/>
															</xsd:choice>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="PayrollCost">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Total" type="xsd:integer"/>
																<xsd:element name="Allocation" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
													<xsd:element name="TangibleAssetValue">
														<xsd:complexType>
															<xsd:sequence>
																<xsd:element name="Total" type="xsd:integer"/>
																<xsd:element name="Allocation" type="xsd:integer"/>
															</xsd:sequence>
														</xsd:complexType>
													</xsd:element>
												</xsd:sequence>
											</xsd:complexType>
										</xsd:element>
									</xsd:sequence>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="ExcessProfits" type="xsd:integer"/>
						<xsd:element name="AdditionalTopUpTax" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="NONArt4.1.5" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Articles" type="globe:NonArt415_EnumType" maxOccurs="unbounded">
													<xsd:annotation>
														<xsd:documentation>Enumeration #17</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
												<xsd:element name="Year" type="xsd:date">
													<xsd:annotation>
														<xsd:documentation> </xsd:documentation>
													</xsd:annotation>
												</xsd:element>
												<xsd:element name="Previous">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="NetGlobeIncome" type="xsd:integer"/>
															<xsd:element name="AdjustedCoveredTax" type="xsd:integer"/>
															<xsd:element name="ETRRate" type="globe:percentage"/>
															<xsd:element name="ExcessProfits" type="xsd:integer"/>
															<xsd:element name="TopUpTaxPercentage" type="globe:percentage"/>
															<xsd:element name="TopUpTax" type="xsd:integer"/>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="Recalculated">
													<xsd:complexType>
														<xsd:sequence>
															<xsd:element name="NetGlobeIncome" type="xsd:integer"/>
															<xsd:element name="AdjustedCoveredTax" type="xsd:integer"/>
															<xsd:element name="ETRRate" type="globe:percentage"/>
															<xsd:element name="ExcessProfits" type="xsd:integer"/>
															<xsd:element name="TopUpTaxPercentage" type="globe:percentage"/>
															<xsd:element name="TopUpTax" type="xsd:integer"/>
														</xsd:sequence>
													</xsd:complexType>
												</xsd:element>
												<xsd:element name="AdditionalTopUpTax" type="xsd:integer"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="Art4.1.5" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="AdjustedCoveredTax" type="xsd:integer"/>
												<xsd:element name="GlobeLoss" type="xsd:integer"/>
												<xsd:element name="ExpectedAdjustedCoveredTax" type="xsd:integer"/>
												<xsd:element name="AdditionalTopUpTax" type="xsd:integer"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="QDMTT" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="FAS" type="stf:StringMin1Max200_Type"/>
									<xsd:element name="Amount" type="xsd:integer"/>
									<xsd:element name="MinRate" type="globe:percentage" minOccurs="0"/>
									<xsd:element name="BasisforBlending" type="stf:StringMin1Max4000_Type" minOccurs="0">
										<xsd:annotation>
											<xsd:documentation>Free text</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
									<xsd:element name="SBIEAvailable" type="xsd:boolean"/>
									<xsd:element name="DeMinAvailable" type="xsd:boolean"/>
									<xsd:element name="Currency" type="iso:currCode_Type"/>
									<xsd:element name="CurrencyElection" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="Status" type="xsd:boolean"/>
												<xsd:sequence>
													<xsd:element name="ElectionYear" type="xsd:date"/>
													<xsd:element name="RevocationYear" type="xsd:date" minOccurs="0"/>
													<xsd:element name="Currency" type="globe:Currency_EnumType"/>
												</xsd:sequence>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="TopUpTax" type="xsd:integer"/>
						<xsd:element name="ExcessNegTaxExpense">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="PriorYearBalance" type="xsd:integer"/>
									<xsd:element name="GeneratedInRFY" type="xsd:integer"/>
									<xsd:element name="UtilizedInRFY" type="xsd:integer"/>
									<xsd:element name="Remaining" type="xsd:integer"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="Non-MaterialCE" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="RFY">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TotalRevenue" type="xsd:integer"/>
									<xsd:element name="AggregateSimplified" type="xsd:integer" minOccurs="0"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="RFY-1" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TotalRevenue" type="xsd:integer"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="RFY-2" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TotalRevenue" type="xsd:integer"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="Average">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TotalRevenue" type="xsd:integer"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="ID" type="globe:ID_Type"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="LowTaxJurisdictionType">
		<xsd:sequence>
			<xsd:element name="TopUpTaxAmount" type="xsd:integer"/>
			<xsd:element name="LTCE" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="TIN" type="globe:TIN_Type"/>
						<xsd:element name="IIR" maxOccurs="unbounded">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="NetGlobeIncome" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="TopUpTax" type="xsd:integer"/>
									<xsd:element name="ParentEntity" minOccurs="0" maxOccurs="unbounded">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="TIN" type="globe:TIN_Type"/>
												<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
												<xsd:element name="OtherOwnershipAllocation" type="xsd:integer"/>
												<xsd:element name="InclusionRatio" type="globe:percentage">
													<xsd:annotation>
														<xsd:documentation>%</xsd:documentation>
													</xsd:annotation>
												</xsd:element>
												<xsd:element name="TopUpTaxShare" type="xsd:integer"/>
												<xsd:element name="IIROffSet" type="xsd:integer"/>
												<xsd:element name="TopUpTax" type="xsd:integer"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="UTPR" minOccurs="0">
				<xsd:complexType>
					<xsd:choice>
						<xsd:element name="UTPRSafeHarbour">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="CITRate" type="globe:percentage">
										<xsd:annotation>
											<xsd:documentation>%</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="UTPRCalculation">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TotalUTPRTopUpTax" type="xsd:integer"/>
									<xsd:element name="Article2.5.1TopUpTax" type="xsd:integer"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:choice>
				</xsd:complexType>
			</xsd:element>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="InitialIntActivityType">
		<xsd:sequence>
			<xsd:element name="StartDate" type="xsd:date"/>
			<xsd:element name="ReferenceJurisdiction">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
						<xsd:element name="TangibleAssetValue" type="xsd:integer"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="OtherJurisdiction" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="ResCountryCode" type="iso:CountryCode_Type" maxOccurs="5"/>
						<xsd:element name="TangibleAssetValue" type="xsd:integer"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="RFYNumberOfJurisdictions" type="xsd:integer" minOccurs="0"/>
			<xsd:element name="RFYSumTangibleAssetValue" type="xsd:integer" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="GLOBETax">
		<xsd:sequence>
			<xsd:element name="ETR" type="globe:ETRType" minOccurs="0" maxOccurs="unbounded"/>
			<xsd:element name="InitialIntActivity" type="globe:InitialIntActivityType" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="GeneralSectionType">
		<xsd:sequence>
			<xsd:element name="RecJurCode" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="CorporateStructure" type="globe:CorporateStructureType"/>
			<xsd:element name="AdditionalDataPoint" type="globe:AdditionalDataPointType" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="JurisdictionSectionType">
		<xsd:sequence>
			<xsd:element name="RecJurCode" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="Jurisdiction" type="iso:CountryCode_Type"/>
			<xsd:element name="JurWithTaxingRights" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="JurisdictionName" type="iso:CountryCode_Type"/>
						<xsd:element name="Subgroup" minOccurs="0" maxOccurs="unbounded">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TIN" type="globe:TIN_Type"/>
									<xsd:element name="TypeofSubGroup" type="globe:TypeofSubGroup_EnumType" maxOccurs="unbounded">
										<xsd:annotation>
											<xsd:documentation>Enumeration #11</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
						<xsd:element name="ReportDifference" minOccurs="0">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="ETRDifference" type="globe:percentage" minOccurs="0"/>
									<xsd:element name="AdjCoveredTaxDifference" minOccurs="0">
										<xsd:complexType>
											<xsd:sequence>
												<xsd:element name="AggCurrentTaxExpense" type="xsd:integer" minOccurs="0"/>
												<xsd:element name="QRTCExpense" type="xsd:integer" minOccurs="0"/>
												<xsd:element name="OtherTaxCredits" type="xsd:integer" minOccurs="0"/>
												<xsd:element name="DeferTaxExpense" type="xsd:integer" minOccurs="0"/>
											</xsd:sequence>
										</xsd:complexType>
									</xsd:element>
									<xsd:element name="NetGLoBEDifference" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="SBIEDifference" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="AddCurrentTuTDifference" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="TuTDifference" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="ElectionsDifference" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
									<xsd:element name="QRTCIncome" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="ExcessNegTaxCarryForw" type="xsd:integer" minOccurs="0"/>
									<xsd:element name="TransitionDifference" type="xsd:boolean" minOccurs="0"/>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="LocalCurrency" type="iso:currCode_Type" minOccurs="0"/>
			<xsd:element name="GLoBETax" type="globe:GLOBETax"/>
			<xsd:element name="LowTaxJurisdiction" type="globe:LowTaxJurisdictionType" minOccurs="0"/>
			<xsd:element name="AdditionalDataPoint" type="globe:AdditionalDataPointType" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="UTPRAttributionType">
		<xsd:sequence>
			<xsd:element name="RecJurCode" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="Attribution" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="ResCountryCode" type="iso:CountryCode_Type"/>
						<xsd:element name="UTPRTopUpTaxCarryForward" type="xsd:integer"/>
						<xsd:element name="Employees" type="xsd:integer" minOccurs="0"/>
						<xsd:element name="TangibleAssetValue" type="xsd:integer" minOccurs="0"/>
						<xsd:element name="UTPRPercentage" type="globe:percentage">
							<xsd:annotation>
								<xsd:documentation>%</xsd:documentation>
							</xsd:annotation>
						</xsd:element>
						<xsd:element name="UTPRTopUpTaxAttributed" type="xsd:integer"/>
						<xsd:element name="AddCashTaxExpense" type="xsd:integer"/>
						<xsd:element name="UTPRTopUpTaxCarriedForward" type="xsd:integer"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="AdditionalDataPoint" type="globe:AdditionalDataPointType" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="SummaryType">
		<xsd:sequence>
			<xsd:element name="RecJurCode" type="iso:CountryCode_Type" maxOccurs="unbounded"/>
			<xsd:element name="Jurisdiction">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="JurisdictionName" type="iso:CountryCode_Type" minOccurs="0"/>
						<xsd:element name="Subgroup" minOccurs="0" maxOccurs="unbounded">
							<xsd:complexType>
								<xsd:sequence>
									<xsd:element name="TIN" type="globe:TIN_Type"/>
									<xsd:element name="TypeofSubGroup" type="globe:TypeofSubGroup_EnumType" maxOccurs="unbounded">
										<xsd:annotation>
											<xsd:documentation>Enumeration #11</xsd:documentation>
										</xsd:annotation>
									</xsd:element>
								</xsd:sequence>
							</xsd:complexType>
						</xsd:element>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="JurWithTaxingRights" minOccurs="0" maxOccurs="unbounded">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="JurisdictionName" type="iso:CountryCode_Type" minOccurs="0"/>
						<xsd:element name="DiffDomesticTut" type="globe:GlobeTuT_EnumType" minOccurs="0"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="SafeHarbour" type="globe:SafeHarbour_EnumType" minOccurs="0" maxOccurs="unbounded">
				<xsd:annotation>
					<xsd:documentation>Enumeration #12</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="ETRRange" type="globe:ETRRange_EnumType" minOccurs="0">
				<xsd:annotation>
					<xsd:documentation>Enumeration #13</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="SBIE" minOccurs="0">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="NotApplicable" type="xsd:boolean"/>
						<xsd:element name="NoTut" type="xsd:boolean"/>
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
			<xsd:element name="QDMTTut" type="globe:QDMTTuT_EnumType" minOccurs="0">
				<xsd:annotation>
					<xsd:documentation>Enumeration #14</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="GLoBETut" type="globe:GlobeTuT_EnumType" minOccurs="0">
				<xsd:annotation>
					<xsd:documentation>Enumeration #15</xsd:documentation>
				</xsd:annotation>
			</xsd:element>
			<xsd:element name="AdditionalDataPoint" type="globe:AdditionalDataPointType" minOccurs="0" maxOccurs="unbounded"/>
		</xsd:sequence>
	</xsd:complexType>
	<xsd:complexType name="AdditionalDataPointType">
		<xsd:sequence>
			<xsd:element name="Description" type="stf:StringMin1Max170_Type" minOccurs="0"/>
			<xsd:element name="Amount" type="xsd:integer" minOccurs="0"/>
			<xsd:element name="Percentage" type="globe:percentage" minOccurs="0"/>
			<xsd:element name="Text" type="stf:StringMin1Max4000_Type" minOccurs="0"/>
			<xsd:element name="Boolean" type="xsd:boolean" minOccurs="0"/>
		</xsd:sequence>
	</xsd:complexType>
</xsd:schema>
`,n=`<?xml version="1.0" encoding="UTF-8"?>\r
<!-- edited with XMLSpy v2013 rel. 2 sp1 (x64) (http://www.altova.com) by  Global Forum/WP10 (OECD) -->\r
<xsd:schema xmlns:stf="urn:oecd:ties:globestf:v5" xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="urn:oecd:ties:globestf:v5" elementFormDefault="qualified" attributeFormDefault="unqualified" version="5.0">\r
	<!-- -->\r
	<!--+++++++++++++++++++++++  String lenght types ++++++++++++++++++++++++++++++++++++++ -->\r
	<!-- -->\r
	<!-- Defines a string with minimum length 0 and maximum length of 200 -->\r
	<xsd:simpleType name="StringMin0Max200_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>Defines a string with minimum length 0 and maximum length of 200.</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:minLength value="0"/>\r
			<xsd:maxLength value="200"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
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
	<!-- -->\r
	<xsd:simpleType name="y-n">\r
		<xsd:annotation>\r
			<xsd:documentation>in case of XSD yes-no format is used for values not an expressions.</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:token">\r
			<xsd:enumeration value="yes"/>\r
			<xsd:enumeration value="no"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!-- Delete Element-->\r
	<xsd:simpleType name="percentage">\r
		<xsd:restriction base="xsd:string">\r
			<xsd:pattern value="\\d{1,2}\\.\\d{2}"/>\r
			<!-- Pattern to match percentages from 00.00% to 99.99% -->\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
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
					<xsd:documentation>Resend Data</xsd:documentation>\r
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
					<xsd:documentation>Resend Test Data</xsd:documentation>\r
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
'document' here means the part of a message that is to transmit the data about a single block of carf information. </xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:sequence>\r
			<xsd:element name="DocTypeIndic" type="stf:OECDDocTypeIndic_EnumType"/>\r
			<xsd:element name="DocRefId" type="stf:StringMin1Max200_Type">\r
				<xsd:annotation>\r
					<xsd:documentation xml:lang="en">Sender's unique identifier of this document </xsd:documentation>\r
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
<!-- edited with XMLSpy v2013 rel. 2 (x64) (http://www.altova.com) by Global Forum/WP10 (OECD) -->\r
<xsd:schema xmlns:iso="urn:oecd:ties:isoglobetypes:v1" xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="urn:oecd:ties:isoglobetypes:v1" elementFormDefault="qualified" attributeFormDefault="unqualified" version="1.1">\r
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
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!--   -->\r
	<!--  ISO 4217 alpha 3 Currency Code \r
\r
The following disclaimer refers to all uses of the ISO currency code list in the CARF schema: For practical reasons, the list is based on the ISO 4217 Alpha 3 currency list which is currently used by banks and other financial institutions, and hence by tax administrations. The use of this list does not imply the expression by the OECD of any opinion whatsoever concerning the legal status of the territories listed. Its content is without prejudice to the status of or sovereignty over any territory, to the delimitation of international frontiers and boundaries and to the name of any territory, city or area.  \r
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
	<!-- MS codes -->\r
	<xsd:simpleType name="MSCountryCode_Type">\r
		<xsd:annotation>\r
			<xsd:documentation>List of the MS code.\r
			</xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:restriction base="xsd:string">\r
			<xsd:enumeration value="AT"/>\r
			<xsd:enumeration value="BE"/>\r
			<xsd:enumeration value="BG"/>\r
			<xsd:enumeration value="CY"/>\r
			<xsd:enumeration value="CZ"/>\r
			<xsd:enumeration value="DK"/>\r
			<xsd:enumeration value="EE"/>\r
			<xsd:enumeration value="FI"/>\r
			<xsd:enumeration value="FR"/>\r
			<xsd:enumeration value="DE"/>\r
			<xsd:enumeration value="GR"/>\r
			<xsd:enumeration value="HU"/>\r
			<xsd:enumeration value="HR"/>\r
			<xsd:enumeration value="IE"/>\r
			<xsd:enumeration value="IT"/>\r
			<xsd:enumeration value="LV"/>\r
			<xsd:enumeration value="LT"/>\r
			<xsd:enumeration value="LU"/>\r
			<xsd:enumeration value="MT"/>\r
			<xsd:enumeration value="NL"/>\r
			<xsd:enumeration value="PL"/>\r
			<xsd:enumeration value="PT"/>\r
			<xsd:enumeration value="RO"/>\r
			<xsd:enumeration value="SK"/>\r
			<xsd:enumeration value="SI"/>\r
			<xsd:enumeration value="ES"/>\r
			<xsd:enumeration value="SE"/>\r
		</xsd:restriction>\r
	</xsd:simpleType>\r
	<!--   -->\r
</xsd:schema>\r
`;async function i(i){let a=await e({xml:[{fileName:`gir.xml`,contents:i}],schema:[{fileName:`GLOBEXML_v1.0.xsd`,contents:t}],preload:[{fileName:`oecdglobetypes_v5.0.xsd`,contents:n},{fileName:`isoglobetypes_v1.1.xsd`,contents:r}],maxMemoryPages:2048});return a.valid?[]:a.errors.map(e=>e.loc?`ligne ${e.loc.lineNumber} : ${e.message}`:e.message)}export{i as validateGirSchema};