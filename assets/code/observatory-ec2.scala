package observatory

import observatory.Extraction.{locateTemperatures, locationYearlyAverageRecords}
import awscala._, s3._

object ec2 {

  def main(args: Array[String]): Unit = {

    val timePeriod: Range = {
      val tmp = args(0).split("-").map(f => f.toInt)
      tmp(0) to tmp(1)
    }

    val bucketName: String = args(1)
    val stationsPath: String = "/" + args(2)
    val fileExt: String = args(3)
    val outputPath: String = args(4)

    println("\n\n-----------------------------\n")
    println("Time Period: " + timePeriod.head + " to " + timePeriod.last)
    println("Bucket Name: " + bucketName)
    println("Stations Path: " + stationsPath)
    println("File Extension: " + fileExt)
    println("Output Path: " + outputPath)
    println("\n-----------------------------\n\n")

    val colors = observatory.Visualization.colorScale()

    def saveImage(year: Int, zoom: Int, x: Int, y: Int, data: Iterable[(Location, Double)]): Unit = {
      val tilePath: String = s"$outputPath/$year/$zoom/$x-$y.png"
      println(tilePath)
      val image = Interaction.tile(data, colors, zoom, x, y)
      val tileFile: java.io.File = new java.io.File(s"$year-$zoom-$x-$y.png") // tempfile
      image.output(tileFile)
      implicit val s3 = S3.at(Region.Frankfurt)
      val buckets: Seq[Bucket] = s3.buckets
      val bucket = buckets.filter(p => p.name == bucketName).head
      bucket.put(tilePath, tileFile)
      tileFile.delete()
    }

    for (year <- timePeriod) {
      val temperaturePath: String = s"/$year$fileExt"
      lazy val locateTemp= locateTemperatures(year, stationsPath, temperaturePath)
       lazy val locateAverage = locationYearlyAverageRecords(locateTemp)
       val data: Set[(Int, Iterable[(Location, Double)])] = Set((year, locateAverage))
       Interaction.generateTiles(data, saveImage)
     }
   }
}
