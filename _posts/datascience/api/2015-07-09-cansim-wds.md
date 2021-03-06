---
layout   : post
category : datascience
tagline  :
tags     :
---
{% include JB/setup %}

## CANSIM Web Data Service (WDS)

### WHAT IS IT?

This web service provides access to CANSIM data via "calls" or "methods" that harvest the data in its raw form and return it to the caller.

We have published a web service WSDL which outlines the methods available for use. Newly released data is available beginning at 8:30 a.m. on the day of release. This web service is an efficient alternative to the electronic file transfer system (EFT), which will be terminated when the CANSIM web service pilot project ends and is replaced by our future CODR (Common Output Database Repository) Web Data Service. The CODR database and web service is scheduled to be publically available in November 2015 at which point all CANSIM data and
web service will be discontinued. The CANSIM time series data will continue to be available in the CODR database.

### AVAILABILITY

- Any existing EFT service you have will continue to run in parallel for the duration of the CANSIM WDS pilot which will finish when CODR WDS is launched in Nov 2015.
- The CANSIM WDS service can be used to obtain newly released data at 8:30 a.m. EST on the day of release, as well as any already-published data. . The web service operates 24 hours a day every week.

### WEB SERVICE API

Description: The CANSIM web service provides methods for retrieving both Metadata and Data. Information can be retrieved by using either Vectors, or Arrays with Coordinates.

#### Scalar and Decimal Information

It should be noted that decimals and scalars do not automatically appear in any data returned by the Web Data Service. To extract decimal and scalar info which may be applied to vector data points, any of the following WSDL calls may be used:

- getSeriesInfoFromVectorRange
- getSeriesInfoFromVectorRangeAndLatestNPeriods
- getSeriesInfoFromCoordinateRange
- getSeriesInfoFromCoordinateAndLatestNPeriods

The scalar and decimal values being returned would be the CANSIM codes that are used in the SERIES transactions.
The following scalar factor codes equal the following scalar multipliers:

| code | multiplier            |
|------|-----------------------|
| 0    | units                 |
| 1    | tens                  |
| 2    | hundreds              |
| 3    | thousands             |
| 4    | tens of thousands     |
| 5    | hundreds of thousands |
| 6    | millions              |
| 7    | tens of millions      |
| 8    | hundreds of millions  |
| 9    | billions              |

Note that the scalar value being returned will be the code and not the actual multiplier value. The actual data value will not contain the decimal point. In the "getseries" calls, the decimal value is returned. For example, if 8 is being returned as the decimal value in the "getseries" call, and 212345678 is the data value from the "getdata" call, then you would need to ensure you apply the decimal value to reflect "2.12345678" as the data value (which is what you would see in the output on the CANSIM website).

#### Data Quality, Symbols and Security Parameters

##### Display Status

| code | status                                   |
|------|------------------------------------------|
| 0    | Normal data will be displayed on output  |
| 1    | Not available                            |
| 2    | 0s value rounded to 0 (zero)             |
| 3    | A quality indicator using table footnote |
| 4    | B quality indicator using table footnote |
| 5    | C quality indicator using table footnote |
| 6    | D quality indicator using table footnote |
| 7    | E use with caution                       |
| 8    | F too unreliable to be published         |

Notes:

- 0: represented by the symbol 0s on output
- N/A: represented by the symbol •• on output
- A, D: superscript letters A to D will appear next to the data on output
- E: represented by superscript letter E beside the data on output
- F: data will be suppressed and will be represented by symbol F on output

##### Display Symbol

| code | value       |
|------|-------------|
| 0    | None        |
| 1    | Preliminary |
| 3    | Revised     |

##### Security

| code | value                    |
|------|--------------------------|
| 0    | public data value        |
| 1    | data value is suppressed |

Status of "F" data points:

For data points which are represented by an "F" on the CANSIM web GUI, the web service will return "nil" as the value. Below is an example:

<pre>
<code class="xml">
< ns2:getDataFromVectorRangeResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< CDataPoint>
< arrayID>2810027</arrayID>
< vectorID>v1744573</vectorID>
< coordinate>2.3.1.5</coordinate>
< requestStatus>OK!</requestStatus>
< refPer>2011-01-01</refPer>
< refPer2>2011-01-01</refPer2>
< security>0</security>
< status>8</status>
< symbol>0</symbol>
< value>nil</value>
< rTime>2014-03-31</rTime>
< /CDataPoint>
< /ns2:getDataFromVectorRangeResponse>
</code>
</pre>

#### Suggested API Usage

1.   Call the getCansimTableReleaseInfoForPeriod to see what tables have changed.
2.   Call the getSeriesInfo method to retrieve the metadata supporting the data series.
3.   Call the getCount method to retrieve the size of the data series. (to avoid size limits of returned data)
4.   Call the getData method to retrieve the actual data points.
5.   Within your program, using the scalar and decimal metadata, calculate the actual value of the data point(s) retrieved.

### REQUEST FOR METADATA INFORMATION

- Service Method: getSeriesInfoForVectors
- Description: Get metadata information at series level given a collection of requests containing vector in formation
- Inputs: Collection of SeriesVectorRequest objects
- Outputs: Collection of SeriesInfo objects
- Example: Request Series Info Metadata for Vector v1, v2 for period starting 2010-01-01 and ending 2013-01-01

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getSeriesInfoFromVectorRange>
< vectorRequest>
< vectorID>1< /vectorID>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /vectorRequest>
< vectorRequest>
< vectorID>2< /vectorID>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /vectorRequest>
< /ws:getSeriesInfoFromVectorRange>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getSeriesInfoFromVectorRangeResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>
< arrayID>510005< /arrayID>
< vectorID>v1< /vectorID>
< coordinate>1< /coordinate>
< frequency>9< /frequency>
< scalar>0< /scalar>
< decimals>0< /decimals>
< terminated>NO< /terminated>
< arrayTitleEn>Estimates of population, Canada, provinces and territories< /arrayTitleEn>
< arrayTitleFr>Estimations de la population, Canada, provinces et territoires< /arrayTitleFr>
< seriesTitleEn>Canada< /seriesTitleEn>
< seriesTitleFr>Canada< /seriesTitleFr>
< defaultUOMEn>Persons< /defaultUOMEn>
< defaultUOMFr>Personnes< /defaultUOMFr>
< /return>
< return>
< arrayID>510005< /arrayID>
< vectorID>v2< /vectorID>
< coordinate>2< /coordinate>
< frequency>9< /frequency>
< scalar>0< /scalar>
< decimals>0< /decimals>
< terminated>NO< /terminated>
< arrayTitleEn>Estimates of population, Canada, provinces and territories< /arrayTitleEn>
< arrayTitleFr>Estimations de la population, Canada, provinces et territoires< /arrayTitleFr>
< seriesTitleEn>Newfoundland and Labrador< /seriesTitleEn>
< seriesTitleFr>Terre-Neuve-et-Labrador< /seriesTitleFr>
< defaultUOMEn>Persons< /defaultUOMEn>
< defaultUOMFr>Personnes< /defaultUOMFr>
< /return>
< /ns2:getSeriesInfoFromVectorRangeResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>


- Service Method: getSeriesInfoForCoordinate
- Description: Get meta information at series level given a collection of requests containing array and coordinate information
- Inputs: Collection of SeriesCoordinateRequest objects
- Outputs: Collection of SeriesInfo objects
- Example: Request Series Info Metadata for array 510-0005 coordinate 1 (canada), 510-
- 0005 coordinate 2 ( Nfld), for period starting 2010-01-01 and ending 2013-01-01

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getSeriesInfoFromCoordinateRange>
< !--Zero or more repetitions:-->
< coordinateRequest>
< arrayID>510005< /arrayID>
< coordinate>1< /coordinate>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /coordinateRequest>
< coordinateRequest>
< arrayID>510005< /arrayID>
< coordinate>2< /coordinate>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /coordinateRequest>
< /ws:getSeriesInfoFromCoordinateRange>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getSeriesInfoFromCoordinateRangeResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>
< arrayID>510005< /arrayID>
< vectorID>v1< /vectorID>
< coordinate>1< /coordinate>
< frequency>9< /frequency>
< scalar>0< /scalar>
< decimals>0< /decimals>
< terminated>NO< /terminated>
< arrayTitleEn>Estimates of population, Canada, provinces and territories< /arrayTitleEn>
< arrayTitleFr>Estimations de la population, Canada, provinces et territoires< /arrayTitleFr>
< seriesTitleEn>Canada< /seriesTitleEn>
< seriesTitleFr>Canada< /seriesTitleFr>
< defaultUOMEn>Persons< /defaultUOMEn>
< defaultUOMFr>Personnes< /defaultUOMFr>
< /return>
< return>
< arrayID>510005< /arrayID>
< vectorID>v2< /vectorID>
< coordinate>2< /coordinate>
< frequency>9< /frequency>
< scalar>0< /scalar>
< decimals>0< /decimals>
< terminated>NO< /terminated>
< arrayTitleEn>Estimates of population, Canada, provinces and territories< /arrayTitleEn>
< arrayTitleFr>Estimations de la population, Canada, provinces et territoires< /arrayTitleFr>
< seriesTitleEn>Newfoundland and Labrador< /seriesTitleEn>
< seriesTitleFr>Terre-Neuve-et-Labrador< /seriesTitleFr>
< defaultUOMEn>Persons< /defaultUOMEn>
< defaultUOMFr>Personnes< /defaultUOMFr>
< /return>
< /ns2:getSeriesInfoFromCoordinateRangeResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

- Service Method: getCountFromVectorRange
- Description: Get a count of datapoints given a collection of requests containing vector information
- Inputs: Collection of SeriesVectorRequest objects
- Outputs: numeric count of the total number of datapoints
- Example: Get a count of data points for Vectors v1 (Canada), v2 (nfld) for period starting 2010-01-01 and ending 2013-01-01

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getCountFromVectorRange>
< vectorRequest>
< vectorID>1< /vectorID>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /vectorRequest>
< vectorRequest>
< vectorID>2< /vectorID>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /vectorRequest>
< /ws:getCountFromVectorRange>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getCountFromVectorRangeResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>26< /return>
< /ns2:getCountFromVectorRangeResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

- Service Method: getCountFromCoordinateRange
- Description: Get a count of datapoints given a collection of requests containing array and coordinate information
- Inputs: Collection of SeriesCoordinateRequest objects
- Outputs: numeric count of the total number of datapoints
- Example: Get a count of data points for array 510-0005 coordinate 1 (canada), 510-0005 coordinate 2 ( nfld) for period starting 2010-01-01 and ending 2013-01-01

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getCountFromCoordinateRange>
< coordinateRequest>
< arrayID>510005< /arrayID>
< coordinate>1< /coordinate>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /coordinateRequest>
< coordinateRequest>
< arrayID>510005< /arrayID>
< coordinate>2< /coordinate>
< startDate>2010-01-01< /startDate>
< endDate>2013-01-01< /endDate>
< /coordinateRequest>
< /ws:getCountFromCoordinateRange>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getCountFromCoordinateRangeResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>26< /return>
< /ns2:getCountFromCoordinateRangeResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

### REQUEST FOR DATA INFORMATION

- Service Method: getDataFromVectorRange
- Description: Get a series of datapoints given a collection of requests containing vector information
- Inputs: Collection of SeriesVectorRequest objects
- Outputs: Returns a collection of Datapoint objects
- Example: Get data points for Vectors v1 (Canada), v2 (nfld) for period starting 2013-01-01 and ending 2013-02-01

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getDataFromVectorRange>
< !--Zero or more repetitions:-->
< vectorRequest>
< vectorID>1< /vectorID>
< startDate>2013-01-01< /startDate>
< endDate>2013-02-01< /endDate>
< /vectorRequest>
< vectorRequest>
< vectorID>2< /vectorID>
< startDate>2013-01-01< /startDate>
< endDate>2013-02-01< /endDate>
< /vectorRequest>
< /ws:getDataFromVectorRange>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getDataFromVectorRangeResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>
< arrayID>510005< /arrayID>
< vectorID>v1< /vectorID>
< coordinate>1< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>35056064< /value>
< rTime>2013-03-20< /rTime>
< /return>
< return>
< arrayID>510005< /arrayID>
< vectorID>v2< /vectorID>
< coordinate>2< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>513636< /value>
< rTime>2013-03-20< /rTime>
< /return>
< /ns2:getDataFromVectorRangeResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

Service Method: getDataFromCoordinateRange
Description: Get a series of datapoints given a collection of requests containing array and coodinate information
Inputs: Collection of SeriesVectorRequest objects
Outputs: Returns a collection of Datapoint object
Example: Get data points for array 510-0005 coordinate 1 (canada), 510-0005 coordinate 2 (
nfld) for period starting 2013-01-01 and ending 2013-02-01

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getDataFromCoordinateRange>
< !--Zero or more repetitions:-->
< coordinateRequest>
< arrayID>510005< /arrayID>
< coordinate>1< /coordinate>
< startDate>2013-01-01< /startDate>
< endDate>2013-02-01< /endDate>
< /coordinateRequest>
< coordinateRequest>
< arrayID>510005< /arrayID>
< coordinate>2< /coordinate>
< startDate>2013-01-01< /startDate>
< endDate>2013-02-01< /endDate>
< /coordinateRequest>
< /ws:getDataFromCoordinateRange>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getDataFromCoordinateRangeResponsexmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>
< arrayID>510005< /arrayID>
< vectorID>v1< /vectorID>
< coordinate>1< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>35056064< /value>
< rTime>2013-03-20< /rTime>
< /return>
< return>
< arrayID>510005< /arrayID>
< vectorID>v2< /vectorID>
< coordinate>2< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>513636< /value>
< rTime>2013-03-20< /rTime>
< /return>
< /ns2:getDataFromCoordinateRangeResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

Service Method: getDataFromVectorAndLatestNPeriods
Description: Get a series of datapoints given a collection of requests containing vector and most recent N periods
Inputs: Collection of vectorNPeriodsRequest objects
Outputs: Returns a collection of Datapoint object
Example: Get data points for Vectors v1 (Canada), v2(nfld) for Last 1 period

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getDataFromVectorAndLatestNPeriods>
< !--Zero or more repetitions:-->
< vectorNPeriodsRequest>
< numPeriods>1< /numPeriods>
< vectorID>1< /vectorID>
< /vectorNPeriodsRequest>
< vectorNPeriodsRequest>
< numPeriods>1< /numPeriods>
< vectorID>2< /vectorID>
< /vectorNPeriodsRequest>
< /ws:getDataFromVectorAndLatestNPeriods>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getDataFromVectorAndLatestNPeriodsRespons
e xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>
< arrayID>510005< /arrayID>
< vectorID>v1< /vectorID>
< coordinate>1< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>35056064< /value>
< rTime>2013-03-20< /rTime>
< /return>
< return>
< arrayID>510005< /arrayID>
< vectorID>v2< /vectorID>
< coordinate>2< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>513636< /value>
< rTime>2013-03-20< /rTime>
< /return>
< /ns2:getDataFromVectorAndLatestNPeriodsResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

Service Method: getDataFromCoordinateAndLatestNPeriods
Description: Get a series of datapoints given a collection of requests containing array, coordinate and most recent N periods
Inputs: Collection of coordinateNPeriodsRequest objects
Outputs: Returns a collection of Datapoint object
Example: Get data points for 510-0005 coordinate 1 (canada), 510-0005 coordinate 2 ( nfld)
for
Last 1 period

Soap Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getDataFromCoordinateAndLatestNPeriods>
< !--Zero or more repetitions:-->
< coordinateNPeriodsRequest>
< numPeriods>1< /numPeriods>
< arrayID>510005< /arrayID>
< coordinate>1< /coordinate>
< /coordinateNPeriodsRequest>
< coordinateNPeriodsRequest>
< numPeriods>1< /numPeriods>
< arrayID>510005< /arrayID>
< coordinate>2< /coordinate>
< /coordinateNPeriodsRequest>
< /ws:getDataFromCoordinateAndLatestNPeriods>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

Soap Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getDataFromCoordinateAndLatestNPeriodsRespo nse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< return>
< arrayID>510005< /arrayID>
< vectorID>v1< /vectorID>
< coordinate>1< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>35056064< /value>
< rTime>2013-03-20< /rTime>
< /return>
< return>
< arrayID>510005< /arrayID>
< vectorID>v2< /vectorID>
< coordinate>2< /coordinate>
< refPer>2013-01-01< /refPer>
< refPer2>2013-01-01< /refPer2>
< security>0< /security>
< status>0< /status>
< symbol>0< /symbol>
< value>513636< /value>
< rTime>2013-03-20< /rTime>
< /return>
< /ns2:getDataFromCoordinateAndLatestNPeriodsResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

Service Method: fullTableDownloadSDMX
Description:  Get URL to download the full table download in SDMX format.
Inputs: ArrayID
Outputs:   File Location of the URL to the SDMX output.
Example: Request file location of SDMX output for arrayed 501003. SDMX is bilingual.

SOAP Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:fullTableDownloadSDMX>
< !--Zero or more repetitions:-->
< sdmxFileDownloadRequest>
< arrayID>501003< /arrayID>
< /sdmxFileDownloadRequest>
< /ws:fullTableDownloadSDMX>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

SOAP Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:fullTableDownloadSDMXResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< FileLocation>
< arrayID>501003< /arrayID>
< url>http://www20.statcan.gc.ca/tables-tableaux/cansim/sdmx/00501003.zip< /url>
< requestStatus>OK!< /requestStatus>
< /FileLocation>
< /ns2:fullTableDownloadSDMXResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

Service Method: fullTableDownloadCSV
Description:  Get URL to download the full table download in CSV format, optionally specifying language.
Inputs:  numeric ArrayID, optionally Language use < lang>ENG< /lang> and
< lang>FRA< /lang>
Outputs:   File Location of the URL to the requested CSV full table output file.
Example: Request file location of CSV output for arrayID 501003, if no language specified, English is default. Use < lang>ENG< /lang> and < lang>FRA< /lang>, case sensitive.

SOAP Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:fullTableDownloadCSV>
< !--Zero or more repetitions:-->
< csvFileDownloadRequest>
< arrayID>501003< /arrayID>
< !--Optional:-->
< lang>ENG< /lang>
< /csvFileDownloadRequest>
< /ws:fullTableDownloadCSV>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

SOAP Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:fullTableDownloadCSVResponse xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< FileLocation>
< arrayID>501003< /arrayID>
< url>http://www20.statcan.gc.ca/tables-tableaux/cansim/csv/00501003-eng.zip< /url>
< requestStatus>OK!< /requestStatus>
< /FileLocation>
< /ns2:fullTableDownloadCSVResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

- Service Method: getCansimTableReleaseInfoForPeriod
- Description:  Get CANSIM Table Release information for a particular period. (Use the same date as start and end date input to see all tables released on a particular date.) Table history only begins on July 11, 2014 so the start date must be on or after that date.
- You can check for corrections that were released after 8:30 by using a start date that is one
- release date before the end date, for example start date 2014-08-12 and end date 2014-08-
- 13. Any release dates with a time after 8:30am indicate a correction was released.
- Inputs:   startDate, endDate
- Outputs:  ArrayIDs and Release Date for that date range.
- Example: Request a list of ArrayID (Tables) released on August 13, 2014.

SOAP Request:

<pre>
<code class="xml">
< soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cansimws.statcan.gc.ca/">
< soapenv:Header/>
< soapenv:Body>
< ws:getCansimTableReleaseInfoForPeriod>
< cansimTableReleaseInfoForPeriodRequest>
< startDate>2014-08-13< /startDate>
< endDate>2014-08-13< /endDate>
< /cansimTableReleaseInfoForPeriodRequest>
< /ws:getCansimTableReleaseInfoForPeriod>
< /soapenv:Body>
< /soapenv:Envelope>
</code>
</pre>

SOAP Response:

<pre>
<code class="xml">
< soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
< soap:Body>
< ns2:getCansimTableReleaseInfoForPeriodRespons e xmlns:ns2="http://ws.cansimws.statcan.gc.ca/">
< cansimTableReleaseInfoForPeriod>
< releaseDate>2014-08-13T08:30< /releaseDate>
< arrayID>1760048< /arrayID>
< requestStatus>OK!< /requestStatus>
< /cansimTableReleaseInfoForPeriod>
< cansimTableReleaseInfoForPeriod>
< releaseDate>2014-08-13T08:30< /releaseDate>
< arrayID>1760067< /arrayID>
< requestStatus>OK!< /requestStatus>
< /cansimTableReleaseInfoForPeriod>
< cansimTableReleaseInfoForPeriod>
< releaseDate>2014-08-13T08:30< /releaseDate>
< arrayID>1760070< /arrayID>
< requestStatus>OK!< /requestStatus>
< /cansimTableReleaseInfoForPeriod>
< cansimTableReleaseInfoForPeriod>
< releaseDate>2014-08-13T08:30< /releaseDate>
< arrayID>3030060< /arrayID>
< requestStatus>OK!< /requestStatus>
< /cansimTableReleaseInfoForPeriod>
< cansimTableReleaseInfoForPeriod>
< releaseDate>2014-08-13T08:30< /releaseDate>
< arrayID>3030061< /arrayID>
< requestStatus>OK!< /requestStatus>
< /cansimTableReleaseInfoForPeriod>
< /ns2:getCansimTableReleaseInfoForPeriodResponse>
< /soap:Body>
< /soap:Envelope>
</code>
</pre>

To access the WSDL: http://www8.statcan.gc.ca/CANSIMWebService/cansimWSService?wsdl

### INFORMATION MODEL

Outputs

Datapoint

| Field name | Type                | Comment                 |
|------------|---------------------|-------------------------|
| Coordinate | String              | Coordinate              |
| arrayId    | Number              | Array ID                |
| vectorId   | String              | Vector ID               |
| Ref Date   | Date                | Reference Period        |
| Ref Date   | Date                | Second Reference Period |
| Status     | String              | Status indicator        |
| Value      | Number              | Datapoint value *       |
| Symbol     | String (none,p,f,r) | Data symbol             |
| Rtime      | Date                | Release time            |

NULL and ZERO have different meanings

SeriesInfo

| Field name    | Type            | Comment                             |
|---------------|-----------------|-------------------------------------|
| Coordinate    | String          | Coordinate                          |
| arrayId       | Number          | Array ID                            |
| vectorId      | Number          | Vector ID                           |
| Frequency     | Number          | Frequency                           |
| Scalar        | Number          | Scalar factor                       |
| Decimals      | Number          | Number of decimals                  |
| Terminated    | String (yes|no) | Terminated indicator                |
| arrayTitleEn  | String          | Array title English                 |
| arrayTitleFr  | String          | Array title French                  |
| SeriesTitleEn | String          | Delimited list of dimension members |
| SeriesTitleFr | String          | Delimited list of dimension members |
| defaultUOMEn  | String          | Default unit of measure En          |
| defaultUOMFr  | String          | Default Unit of Measure Fr          |

eg: Canada; Total employed, all hours; Main job; Males; 15 years and over


eg: Canada; Total employed, all hours; Main job; Males; 15 years and over

| csvDownload |        |     |
|-------------|--------|-----|
| URL         | String | URL |

| sdmxDownload |        |     |
|--------------|--------|-----|
| URL          | String | URL |

| getCount |        |                                 |
|----------|--------|---------------------------------|
| Return   | Number | the total number of data points |

| getCansimTableReleaseInfoForPeriod |        |                                   |
|------------------------------------|--------|-----------------------------------|
| Return                             | Number | the total number of data points   |
| releaseDate                        | date   | release date for given date range |
| arrayID                            | number | arrayID for given date range      |

### Inputs

| SeriesVectorRequest |        |                                    |
|---------------------|--------|------------------------------------|
| vectorID            | number | ID of the Vector being requested   |
| startRefPeriod      | String | Start date of the requested period |
| endRefPeriod        | string | End date of the requested period   |

period in ISO-8601 format (YYYY-MM-DD)

| SeriesCoordinateRequest |        |                                    |
|-------------------------|--------|------------------------------------|
| coordinate              | number | ID of the Vector being requested   |
| startRefPeriod          | string | Start date of the requested period |
| endRefPeriod            | string | End date of the requested period   |

in ISO-8601 format (YYYY-MM-DD)

| vectorNPeriodsRequest |        |                                                        |
|-----------------------|--------|--------------------------------------------------------|
| vectorID              | number | ID of the Vector being requested                       |
| numberOfPeriods       | Number | Number of periods to be retrieved starting from latest |

| coordinateNPeriodsRequest |        |                                                        |
|---------------------------|--------|--------------------------------------------------------|
| arrayID                   | number | ID of the Vector being requested                       |
| coordinate                | number | Coordinate being requested                             |
| numberOfPeriods           | number | Number of periods to be retrieved starting from latest |

| csvDownloadRequest |
|--------------------|-----------------|--------------------------|
| arrayID            | number          | Array ID                 |
| lang               | string(ENG|FRA) | uppercase "ENG" or "FRA" |

|sdmxDownloadRequest |                 |                          |
|--------------------|-----------------|--------------------------|
| arrayID            | number          | Array ID                 |
| lang               | string(ENG|FRA) | uppercase "ENG" or "FRA" |

| cansimTableReleaseInfoForPeriodRequest |      |                                   |
|----------------------------------------|------|-----------------------------------|
| startDate                              | date | start date must be post-July 2014 |
| endDate                                | date | sample format "2014-08-20"        |

sample format "2014-08-20"

| getCountRequest |        |                                   |
|-----------------|--------|-----------------------------------|
| startDate       | date   | start date must be post-July 2014 |
| endDate         | date   | sample format "2014-08-20"        |
| vectorID        | number | vector number                     |

sample format "2014-08-20"
